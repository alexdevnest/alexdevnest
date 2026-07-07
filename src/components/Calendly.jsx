import { InlineWidget } from "react-calendly";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";


export default function Calendly () {
  return (
    <section className="w-full">
      <article className="p-3 sticky top-0 left-0 right-0 backdrop-blur-sm">
        <Link
          to="/"
          className="transition-all duration-300 text-primary hover:text-primary/90 flex items-center gap-1"
        >
          <GoArrowLeft className="inline size-6" />
          Go to Home
        </Link>
      </article>

      <section
        className="mt-2 max-[400px]:max-w-sm min-h-175"
      >
        <InlineWidget
          styles={{
            minHeight: "695px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none", 
          }}
          url="https://calendly.com/alex_kimari/project-discussion"
        />
      </section>
    </section>
  );
}