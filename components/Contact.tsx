"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { t } = useLocale();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? c.genericError);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : c.genericError);
    }
  }

  const inputClass =
    "w-full border-b border-border bg-transparent py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

  return (
    <section id="contact" className="section">
      <div className="hairline" />
      <div className="pt-24 md:pt-32">
        <Reveal>
          <SectionHeading index="04" eyebrow={c.eyebrow} title={c.title} />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Reveal>
            <div>
              <p className="text-lg leading-relaxed text-muted">{c.intro}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block font-mono text-sm text-ink transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            {status === "success" ? (
              <div className="flex h-full flex-col justify-center rounded-md border border-border bg-surface p-8">
                <p className="label text-accent">{c.sent}</p>
                <p className="mt-3 text-lg">{c.sentBody}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 self-start font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-ink"
                >
                  {c.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="label mb-2 block">
                    {c.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={c.namePlaceholder}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label mb-2 block">
                    {c.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={c.emailPlaceholder}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label mb-2 block">
                    {c.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={c.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm text-accent">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-gradient rounded-xl px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "submitting" ? c.submitting : c.submit}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
