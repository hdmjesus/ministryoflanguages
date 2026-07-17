import { content, defaultLocale, locales, type Locale } from "./content"

export { content, defaultLocale, locales }
export type { Locale }

/** Narrow Astro.currentLocale (string | undefined) to a supported Locale. */
export function toLocale(lang: string | undefined): Locale {
  return (locales as readonly string[]).includes(lang ?? "") ? (lang as Locale) : defaultLocale
}

/** Translations for the given locale (falls back to the default). */
export function useTranslations(lang: string | undefined) {
  return content[toLocale(lang)]
}

/** Root-relative path for a locale (default locale has no prefix). */
export function localePath(lang: Locale): string {
  return lang === defaultLocale ? "/" : `/${lang}/`
}

/** Flag emoji per locale (falls back to country code text on Windows). */
export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  it: "🇮🇹",
  fr: "🇫🇷",
  ru: "🇷🇺",
  pt: "🇵🇹",
  de: "🇩🇪",
}
