"use client";

import {
  createContext,
  useContext,
  useEffect,
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

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("en");

  // Hydrate the stored preference after mount (avoids SSR mismatch).
  useEffect(() => {
    try {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "km") setLangState(stored);
    } catch {}
  }, []);

  // Keep <html lang> in sync for accessibility/SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Locale) => {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  };

  const toggle = () => setLang(lang === "en" ? "km" : "en");

  return (
    <LocaleContext.Provider
      value={{ lang, setLang, toggle, t: content[lang] }}
    >
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
