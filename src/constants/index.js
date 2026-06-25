const root = document.documentElement;


const backgroundColor = getComputedStyle(root)
  .getPropertyValue('--background')
  .trim()

const accentColor = getComputedStyle(root)
  .getPropertyValue('--accent')
  .trim()

const foregroundColor = getComputedStyle(root)
  .getPropertyValue('--foreground')
  .trim()

const primaryColor = getComputedStyle(root)
  .getPropertyValue('--primary')
  .trim()

const primaryForegroundColor = getComputedStyle(root)
  .getPropertyValue('--primary')
  .trim()

const secondaryColor = getComputedStyle(root)
  .getPropertyValue('--secondary')
  .trim()

const secondaryForegroundColor = getComputedStyle(root)
  .getPropertyValue('--secondary')
  .trim()

const mutedColor = getComputedStyle(root)
  .getPropertyValue('--muted')
  .trim()

const mutedForegroundColor = getComputedStyle(root)
  .getPropertyValue('--muted-foreground')
  .trim()

const cardColor = getComputedStyle(root)
  .getPropertyValue('--card')
  .trim()

const cardForegroundColor = getComputedStyle(root)
  .getPropertyValue('--card-foreground')
  .trim()

const ringColor = getComputedStyle(root)
  .getPropertyValue('--ring')
  .trim()

const fontSans = getComputedStyle(root)
  .getPropertyValue('--font-sans')
  .trim()

const fontSerif = getComputedStyle(root)
  .getPropertyValue('--font-serif')
  .trim()

const fontMono = getComputedStyle(root)
  .getPropertyValue('--font-mono')
  .trim()

const chartColor = getComputedStyle(root)
  .getPropertyValue('--chart-4')
  .trim()

const chart5Color = getComputedStyle(root)
  .getPropertyValue('--chart-5')
  .trim()


export {
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