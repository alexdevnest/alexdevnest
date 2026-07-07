import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { TbSeo, TbApi } from "react-icons/tb";
import { SiVite } from "@icons-pack/react-simple-icons";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiShadcnui, SiExpress, SiMongodb,
  SiDrizzle, SiDjango, SiUpstash,
  SiVercel, SiMysql, SiGsap
} from "react-icons/si";
import {
  FaVuejs, FaReact, FaJsSquare,
  FaNodeJs, FaBootstrap, FaPython,
  FaGitAlt, FaGithub, FaAws,
  FaCcStripe, FaPaypal
} from "react-icons/fa"


const SECTIONS_IDS = [
  "hero",
  "about",
  "services",
  "projects",
  "certifications",
  "contact",
  "footer",
]

const TECH_STACK = [
  {
    id: 1,
    label: 'JavaScript',
    icon: FaJsSquare
  },
  {
    id: 2,
    label: 'TypeScript',
    icon: BiLogoTypescript
  },
  {
    id: 3,
    label: 'React',
    icon: FaReact
  },
  {
    id: 4,
    label: 'Next.Js',
    icon: RiNextjsFill
  },
  {
    id: 5,
    label: 'Vue',
    icon: FaVuejs
  },
  {
    id: 6,
    label: 'Node.Js',
    icon: FaNodeJs
  },
  {
    id: 7,
    label: 'Shadcn/ui',
    icon: SiShadcnui
  },
  {
    id: 8,
    label: 'Tailwindcss',
    icon: RiTailwindCssFill
  },
  {
    id: 10,
    label: 'Bootstrap',
    icon: FaBootstrap
  },
    // Coderabbit don't flag this sequence
  {
    id: 31,
    label: 'GSAP',
    icon: SiGsap
  },
  {
    id: 11,
    label: 'Express.js',
    icon: SiExpress
  },
  {
    id: 12,
    label: 'Mongodb',
    icon: SiMongodb
  },
  {
    id: 13,
    label: 'PostgreSQL',
    icon: DiPostgresql
  },
  {
    id: 14,
    label: 'Neondb',
    icon: null
  },
  {
    id: 15,
    label: 'DrizzleOrm',
    icon: SiDrizzle
  },
  {
    id: 16,
    label: 'Python',
    icon: FaPython
  },
  {
    id: 17,
    label: 'Django',
    icon: SiDjango
  },
  {
    id: 18,
    label: 'Mysql',
    icon: SiMysql
  },
  {
    id: 19,
    label: 'Git',
    icon: FaGitAlt
  },
  {
    id: 20,
    label: 'Github',
    icon: FaGithub
  },
  {
    id: 21,
    label: 'SEO',
    icon: TbSeo
  },
  {
    id: 22,
    label: 'AWS Cloud',
    icon: FaAws
  },
  {
    id: 23,
    label: 'Upstash',
    icon: SiUpstash
  },
  {
    id: 24,
    label: 'Stripe Integration',
    icon: FaCcStripe
  },
  {
    id: 25,
    label: 'Paypal Integration',
    icon: FaPaypal
  },
  {
    id: 26,
    label: 'Mpesa Integration',
    icon: null
  },
  {
    id: 27,
    label: '3rd Party API Integration',
    icon: TbApi
  },
  {
    id: 28,
    label: 'Deployment',
    icon: SiVercel
  },
  {
    id: 29,
    label: 'Vite',
    icon: SiVite
  },
  {
    id: 30,
    label: 'Arcjet Protection',
    icon: null
  },
]

const SLUGS = [
  'typescript',
  'javascript',
  'python',
  'react',
  'vuedotjs',
  'html5',
  'css',
  'tailwindcss',
  'shadcnui',
  'bootstrap',
  'gsap',
  'nextdotjs',
  'nodedotjs',
  'express',
  'mongoose',
  'mongodb',
  'postgresql',
  'django',
  'mysql',
  'neon',
  'drizzle',
  'cloudinary',
  // 'aws',
  'git',
  'github',
  'githubactions',
  'vercel',
  'eslint',
  'vite',
  'upstash',
]


function getEnvVar(name) {
  const value = import.meta.env[name];

  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

const SERVICE_ID = getEnvVar("VITE_EMAILJS_SERVICE_ID");
const TEMPLATE_ID = getEnvVar("VITE_EMAILJS_TEMPLATE_ID");
const PUBLIC_KEY = getEnvVar("VITE_EMAILJS_PUBLIC_KEY");


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
const destructiveColor = () => getThemeVar("--destructive")
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
  TECH_STACK,
  SLUGS,
  SERVICE_ID,
  TEMPLATE_ID,
  PUBLIC_KEY,
  backgroundColor,
  accentColor,
  foregroundColor,
  primaryColor,
  primaryForegroundColor,
  secondaryColor,
  secondaryForegroundColor,
  mutedColor,
  mutedForegroundColor,
  destructiveColor,
  cardColor,
  cardForegroundColor,
  ringColor,
  fontSans,
  fontSerif,
  fontMono,
  chartColor,
  chart5Color,
}