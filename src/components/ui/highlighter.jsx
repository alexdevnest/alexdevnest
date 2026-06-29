import { useLayoutEffect, useRef } from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}) {
  const elementRef = useRef(null);

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  const shouldShow = !isView || isInView;

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!shouldShow || !element) return;

    const annotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    let annotation = annotate(element, annotationConfig);
    annotation.show();

    let resizeObserver;
    let rafId;

    const redraw = () => {
      annotation.remove();
      annotation = annotate(element, annotationConfig);
      annotation.show();
    };

    if (typeof ResizeObserver !== "undefined") {
      let width = element.offsetWidth;
      let height = element.offsetHeight;

      resizeObserver = new ResizeObserver(() => {
        const nextWidth = element.offsetWidth;
        const nextHeight = element.offsetHeight;

        if (nextWidth === width && nextHeight === height) return;

        width = nextWidth;
        height = nextHeight;

        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(redraw);
      });

      resizeObserver.observe(element);
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      annotation.remove();
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span
      ref={elementRef}
      className="relative inline-block bg-transparent"
    >
      {children}
    </span>
  );
}