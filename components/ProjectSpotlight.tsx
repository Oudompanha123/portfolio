"use client";

import { spotlight } from "@/lib/data";
import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function ProjectSpotlight() {
  const { t } = useLocale();
  const s = t.spotlight;

  return (
    <section className="mx-auto max-w-content px-6 pb-20 pt-10 sm:px-8 md:pb-28">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="label mb-5 inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-accent">
            {s.badge}
          </span>

          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            {s.title} <span className="text-accent">{s.titleAccent}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-lg">
            {s.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={spotlight.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient rounded-xl px-6 py-3 text-sm"
            >
              {s.primaryCta}
            </a>
            <a
              href={spotlight.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              {s.secondaryCta}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto mt-14 max-w-[1080px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={spotlight.image}
            alt={spotlight.name}
            className="w-full"
          />
        </div>
      </Reveal>
    </section>
  );
}
