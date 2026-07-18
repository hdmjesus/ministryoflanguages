/**
 * Structural / non-translatable site data.
 * All human-readable copy lives in @/i18n/content (per locale).
 */

export const site = {
  name: "The Ministry of Languages",
  shortName: "Ministry of Languages",
  logoAlt: "The Ministry of Languages emblem",
  email: "ministryoflanguages6@gmail.com",
  year: 2026,
  // ponytail: shared keyword soup, not per-locale. Split per language if SEO needs it.
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
} as const

/** Iconify/Lucide icon name, e.g. "lucide:radio". See https://icones.js.org */
export type IconName = `lucide:${string}`

export type InfoItem = { icon: IconName; title: string; text: string }

/** Icons pair by index with content.leftInfo / content.rightInfo. */
export const leftIcons: IconName[] = ["lucide:radio", "lucide:users", "lucide:target"]
export const rightIcons: IconName[] = ["lucide:book-open", "lucide:mic", "lucide:message-square"]

/** Anchor ids pair by index with content.about. `key` maps to content.nav. */
export const navItems = [
  { key: "about", href: "/about" },
  { key: "classes", href: "/#classes" },
  { key: "pricing", href: "/#pricing" },
  { key: "languages", href: "/#languages" },
  { key: "signin", href: "/#signin" },
  { key: "contact", href: "/#contact" },
] as const;

export const aboutIds = ["about", "where", "hellotalk"] as const

/**
 * One card per language. Index aligns with content.languageNames
 * (English, Spanish, Italian, French, Russian, Portuguese, German).
 * Levels use CEFR codes — international, so no translation needed.
 */
export type CourseLanguage = { flag: string; levels: string[] }

export const courseLanguages: CourseLanguage[] = [
  { flag: "🇬🇧", levels: ["A1", "A2", "B1"] },
  { flag: "🇪🇸", levels: ["A1"] },
  { flag: "🇮🇹", levels: ["A1"] },
  { flag: "🇫🇷", levels: ["A1"] },
  { flag: "🇷🇺", levels: ["A1"] },
  { flag: "🇵🇹", levels: ["A1"] },
  { flag: "🇩🇪", levels: ["A1"] }, // ponytail: default A1, set real levels when known
];
