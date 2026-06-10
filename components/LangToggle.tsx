"use client";

import { useLocale } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLocale();

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`transition-colors ${
          lang === "en" ? "font-semibold text-ink" : "text-muted hover:text-ink"
        }`}
      >
        EN
      </button>
      <span className="text-border" aria-hidden>
        /
      </span>
      <button
        type="button"
        onClick={() => setLang("km")}
        aria-pressed={lang === "km"}
        className={`transition-colors ${
          lang === "km" ? "font-semibold text-ink" : "text-muted hover:text-ink"
        }`}
      >
        ខ្មែរ
      </button>
    </div>
  );
}
