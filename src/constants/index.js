const SECTIONS_IDS = [
  "hero",
  "about",
  "services",
  "projects",
  "certifications",
  "contact",
  "footer",
]

function getThemeVar(variableName) {
  if (typeof document === "undefined") return ""

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim()
}

const backgroundColor = () => getThemeVar("--background")
const accentColor = () => getThemeVar("--accent")
const foregroundColor = () => getThemeVar("--foreground")
const primaryColor = () => getThemeVar("--primary")
const primaryForegroundColor = () => getThemeVar("--primary-foreground")
const secondaryColor = () => getThemeVar("--secondary")
const secondaryForegroundColor = () => getThemeVar("--secondary-foreground")
const mutedColor = () => getThemeVar("--muted")
const mutedForegroundColor = () => getThemeVar("--muted-foreground")
const cardColor = () => getThemeVar("--card")
const cardForegroundColor = () => getThemeVar("--card-foreground")
const ringColor = () => getThemeVar("--ring")
const chartColor = () => getThemeVar("--chart-4")
const chart5Color = () => getThemeVar("--chart-5")


const fontSans =
  typeof document === "undefined"
    ? ""
    : getComputedStyle(document.documentElement)
        .getPropertyValue("--font-sans")
        .trim()

const fontSerif =
  typeof document === "undefined"
    ? ""
    : getComputedStyle(document.documentElement)
        .getPropertyValue("--font-serif")
        .trim()

const fontMono =
  typeof document === "undefined"
    ? ""
    : getComputedStyle(document.documentElement)
        .getPropertyValue("--font-mono")
        .trim()


export {
  SECTIONS_IDS,
  backgroundColor,
  accentColor,
  foregroundColor,
  primaryColor,
  primaryForegroundColor,
  secondaryColor,
  secondaryForegroundColor,
  mutedColor,
  mutedForegroundColor,
  cardColor,
  cardForegroundColor,
  ringColor,
  fontSans,
  fontSerif,
  fontMono,
  chartColor,
  chart5Color,
}