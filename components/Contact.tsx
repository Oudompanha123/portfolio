"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = { name?: string; email?: string; message?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t } = useLocale();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(values: {
    name: string;
    email: string;
    message: string;
  }): FieldErrors {
    const errs: FieldErrors = {};
    if (!values.name.trim()) errs.name = c.errors.name;
    if (!values.email.trim()) errs.email = c.errors.email;
    else if (!emailPattern.test(values.email.trim()))
      errs.email = c.errors.emailInvalid;
    if (!values.message.trim()) errs.message = c.errors.message;
    return errs;
  }

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((prev) =>
      prev[field] ? { ...prev, [field]: undefined } : prev
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    // Client-side validation — bail before hitting the network.
    const errs = validate(values);
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
    "w-full border-b bg-transparent py-3 text-ink placeholder:text-muted/60 transition-colors focus:outline-none";

  const fieldClass = (invalid: boolean) =>
    `${inputClass} ${
      invalid ? "border-red-500 focus:border-red-500" : "border-border focus:border-accent"
    }`;

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
                    className={fieldClass(!!fieldErrors.name)}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    onChange={() => clearFieldError("name")}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1.5 text-sm text-red-500">
                      {fieldErrors.name}
                    </p>
                  )}
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
                    className={fieldClass(!!fieldErrors.email)}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={
                      fieldErrors.email ? "email-error" : undefined
                    }
                    onChange={() => clearFieldError("email")}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1.5 text-sm text-red-500">
                      {fieldErrors.email}
                    </p>
                  )}
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
                    className={`${fieldClass(!!fieldErrors.message)} resize-none`}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={
                      fieldErrors.message ? "message-error" : undefined
                    }
                    onChange={() => clearFieldError("message")}
                  />
                  {fieldErrors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-sm text-red-500"
                    >
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-gradient mx-auto flex w-fit rounded-xl px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 md:mx-0"
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
