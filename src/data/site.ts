/**
 * Single source of truth for all landing page content.
 * Keeping content here (DRY) means components stay presentational
 * and reusable, and copy edits happen in one place.
 */

export const site = {
  name: "The Ministry of Languages",
  shortName: "Ministry of Languages",
  tagline: "Live online language classes for adults.",
  heroTitle: "Online English, French, Italian and Portuguese Classes",
  subtitle:
    "Learn with live online lessons, small groups, grammar guidance and real conversation practice for adult learners.",
  seoTitle: "Online Language Classes | Learn English, French, Italian & Portuguese",
  seoDescription:
    "Join live online language classes for adults. Study English, French, Italian and Portuguese with small groups, clear grammar lessons, pronunciation support and real conversation practice.",
  seoKeywords: [
    "online language classes",
    "learn english online",
    "online english classes for adults",
    "learn french online",
    "learn italian online",
    "learn portuguese online",
    "live language lessons",
    "small group language classes",
    "conversation classes online",
    "grammar and pronunciation classes",
    "clases de idiomas online",
    "clases de idiomas en linea",
    "clases de ingles online",
    "clases de ingles para adultos",
    "aprender ingles online",
    "clases de frances online",
    "aprender frances online",
    "clases de italiano online",
    "aprender italiano online",
    "clases de portugues online",
    "aprender portugues online",
    "clases de conversacion online",
    "clases en vivo de idiomas",
    "cursos de idiomas para adultos",
  ],
  logoAlt: "The Ministry of Languages emblem",
  email: "ministryoflanguages6@gmail.com",
  year: 2026,
} as const

export type NavLink = { label: string; href: string }

export const navLinks: NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Our Classes", href: "#classes" },
  { label: "The Languages", href: "#languages" },
  { label: "Sign-In", href: "#signin" },
  { label: "Contact Us", href: "#contact" },
]

/** Iconify/Lucide icon name, e.g. "lucide:radio". See https://icones.js.org */
export type IconName = `lucide:${string}`

export type InfoItem = { icon: IconName; title: string; text: string }

export const leftInfo: InfoItem[] = [
  { icon: "lucide:radio", title: "Live classes", text: "Real-time online sessions with a teacher guiding every step." },
  { icon: "lucide:users", title: "Small groups", text: "Limited seats so everyone gets attention and speaking time." },
  { icon: "lucide:target", title: "Practice focused", text: "Built around using the language, not just memorizing rules." },
]

export const rightInfo: InfoItem[] = [
  { icon: "lucide:book-open", title: "Clear grammar", text: "Step-by-step lessons that build confidence in the basics." },
  { icon: "lucide:mic", title: "Pronunciation", text: "Improve listening and speaking until it feels natural." },
  { icon: "lucide:message-square", title: "Conversation", text: "Reading, writing and real conversation in every class." },
]

export type InfoBlock = { id: string; title: string; text: string }

export const aboutBlocks: InfoBlock[] = [
  {
    id: "about",
    title: "Who We Are",
    text: "The Ministry of Languages helps adult learners build confidence in English, French, Italian and Portuguese through structured lessons, live practice and supportive teaching.",
  },
  {
    id: "where",
    title: "Online Learning",
    text: "Classes are taught online in live sessions, making it easy for students to join from anywhere and practice consistently with a real teacher.",
  },
  {
    id: "hellotalk",
    title: "Extra Speaking Practice",
    text: "Students can use HelloTalk as an extra tool to connect with native speakers and keep improving their speaking and listening skills outside class.",
  },
]

export type LanguageClass = { name: string; level: string; flag: string }

export const classes: LanguageClass[] = [
  { name: "English A1", level: "Beginner", flag: "Aa" },
  { name: "English A2", level: "Elementary", flag: "Aa" },
  { name: "English B1 Reading", level: "Intermediate · Reading", flag: "Aa" },
  { name: "French A1", level: "Beginner", flag: "Àç" },
  { name: "Italian A1", level: "Beginner", flag: "Aè" },
  { name: "Portuguese A1", level: "Beginner", flag: "Ãõ" },
]

export const languages = ["English", "French", "Italian", "Portuguese"] as const
