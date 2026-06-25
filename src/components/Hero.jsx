import { useId, useState, useEffect } from "react";
import { DottedMap } from "@ui/dotted-map";
import { TypingAnimation } from "@ui/typing-animation";
import { Button } from "@ui/button";
import {
  accentColor, cardColor,
  chart5Color, ringColor,
  fontMono
} from "@constants";


export default function Hero () {
  const id = useId()
  const [dotRadius, setDotRadius] = useState(0.5)


  const markers = [
    {
      lat: -1.286389,
      lng: 36.817223,
      size: 2,
      overlay: { countryCode: 'ke', label: 'Nairobi' }
    }
  ]
  const markerData = markers[0]

  // Colorscheme
  const pillFill = cardColor()
  const textFill = chart5Color()

  const fontFamily = fontMono

  useEffect(() => {
    function updateDotRadius() {
      setDotRadius(window.innerWidth <= 1130 ? 0.4 : 0.5)
    }

    updateDotRadius()
    window.addEventListener("resize", updateDotRadius)

    return () => {
      window.removeEventListener("resize", updateDotRadius)
    }
  }, [])


  return (
    <section className="page-section" id="hero">
      <div className="hero nowrap-f">
        <h1 className="hero-title">Hi, I'm Alex.</h1>
        <TypingAnimation
          words={[
            "Full-stack Developer:", "Backend Developer,", "Frontend Developer,", "AWS Certified Cloud Practitioner."
          ]}
          className="hero-animated-text"
          loop
        />
        <p className="hero-text">
          Full-Stack developer specialized in React + expressJs, NextJs, Django, and more.
          {' '}
          <br className="max-[840px]:hidden" />
          Cloud Specialist leveraging EC2, S3, and other cloud services when needed.
          {' '}
          <br className="max-[840px]:hidden" />
          Freelance developer with over 3 years of experience.
          {' '}
          <br className="max-[520px]:hidden" />
          <span className="min-[635px]:mt-2 min-[635px]:inline-block">
            Looking for a developer to build your website?
          </span>

        </p>

        <a href="#contact">
          <Button
            size="lg"
            className="transition-all duration-500 mt-3 p-6 font-bold hover:text-secondary-foreground"
          >
            Contact
          </Button>
        </a>
      </div>

      <div className="map-container">
        <DottedMap
          markers={markers}
          pulse
          className="map"
          dotColor={accentColor()}
          dotRadius={dotRadius}
          markerColor={ringColor()}
          renderMarkerOverlay={({ x, y, r, index }) => {
          const { countryCode, label } = markerData.overlay
          const href = `https://flagcdn.com/w80/${countryCode}.webp`

          const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-")
          const imgR = r * 0.75

          const fontSize = r * 1.2
          const pillH = r * 1.8
          const pillW = label.length * (fontSize * 0.62) + r * 1.6
          const pillX = x + r + r * 0.6
          const pillY = y - pillH / 2

          return (
            <g style={{ pointerEvents: "none" }}>
              <clipPath id={clipId}>
                <circle cx={x} cy={y} r={imgR} />
              </clipPath>

              <image
                href={href}
                x={x - imgR}
                y={y - imgR}
                width={imgR * 2}
                height={imgR * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />

              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={pillH / 2}
                fill={pillFill}
              />

              <text
                x={pillX + r * 0.7}
                y={y + fontSize * 0.35}
                fontWeight="bold"
                fontFamily={fontFamily}
                fontSize={fontSize}
                letterSpacing={.3}
                fill={textFill}
              >
                {label}
              </text>
            </g>
          )
        }}

        />
      </div>
    </section>
  );
}