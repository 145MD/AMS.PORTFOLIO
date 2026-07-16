export const locales = ["en", "si"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  si: "සිංහල",
};

export const localeToggleLabels: Record<Locale, string> = {
  en: "EN",
  si: "සිං",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function normalizeLocale(value: string): Locale {
  return hasLocale(value) ? value : defaultLocale;
}

export function getPathWithoutLocale(pathname: string) {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];

  if (maybeLocale && hasLocale(maybeLocale)) {
    const rest = `/${parts.slice(2).join("/")}`;
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }

  return pathname || "/";
}

export function localizePath(href: string, locale: Locale) {
  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const [path, hash = ""] = href.split("#");
  const cleanPath = path || "/";
  const withoutLocale = getPathWithoutLocale(cleanPath);
  const localized = withoutLocale === "/" ? `/${locale}` : `/${locale}${withoutLocale}`;

  return hash ? `${localized}#${hash}` : localized;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  return localizePath(getPathWithoutLocale(pathname), locale);
}
