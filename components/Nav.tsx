"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/data";
import { useLocale } from "@/lib/i18n";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

export default function Nav() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  // Close the drawer on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#work", label: t.nav.experience },
  ];

  // First name only, for a compact wordmark.
  const firstName = site.name.split(" ")[0];

  return (
    <header className="relative z-50 border-b border-border bg-surface md:bg-bg/80 md:backdrop-blur-md">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 ring-2 ring-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.photo}
              alt={site.name}
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            {firstName}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
          <ThemeToggle />
          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gradient rounded-full px-5 py-2.5 text-sm"
          >
            {t.nav.contact}
          </motion.a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-ink"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile off-canvas drawer (left) */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-black/40"
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed inset-y-0 left-0 z-[60] flex w-[82%] max-w-xs flex-col border-r border-border bg-surface shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 ring-2 ring-surface">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={site.photo}
                      alt={site.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                  <span className="font-display text-base font-semibold tracking-tight">
                    {firstName}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-ink"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="border-t border-border px-6 py-5">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-gradient block rounded-full px-5 py-3 text-center text-sm"
                >
                  {t.nav.contact}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block text-center font-mono text-xs text-muted transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
