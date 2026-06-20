/**
 * Single source of truth for all landing page content.
 * Keeping content here (DRY) means components stay presentational
 * and reusable, and copy edits happen in one place.
 */

export const site = {
  name: "The Ministry of Languages",
  shortName: "Ministry of Languages",
  tagline: "Learn. Practice. Grow.",
  subtitle: "Learn English, French, Italian, Portuguese and more.",
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
    text: "The Ministry of Languages helps adult learners improve their language skills with clear lessons, practice, and supportive teaching.",
  },
  {
    id: "where",
    title: "Where",
    text: "Classes are offered online through live sessions, making it easy for students to join from anywhere.",
  },
  {
    id: "hellotalk",
    title: "About HelloTalk",
    text: "Students can use HelloTalk as an extra tool to practice with native speakers and continue learning outside class.",
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
