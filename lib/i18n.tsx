"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Content, type Locale } from "./data";

type LocaleContextValue = {
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggle: () => void;
  /** The active language's content. */
  t: Content;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLang] = useState<Locale>("en");

  // Hydrate the stored preference after mount (avoids SSR mismatch).
  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "km") setLang(stored);
    } catch {}
  }, []);

  // Keep <html lang> in sync for accessibility/SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LocaleContextValue>(() => {
    const changeLang = (next: Locale) => {
      setLang(next);
      try {
        localStorage.setItem("lang", next);
      } catch {}
    };
    return {
      lang,
      setLang: changeLang,
      toggle: () => changeLang(lang === "en" ? "km" : "en"),
      t: content[lang],
    };
  }, [lang]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
