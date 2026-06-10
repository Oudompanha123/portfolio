"use client";

import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLocale();

  return (
    <section id="work" className="section">
      <div className="hairline" />
      <div className="pt-24 md:pt-32">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
          />
        </Reveal>

        <ul className="divide-y divide-border border-y border-border">
          {t.experience.jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <li className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:gap-10">
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-muted">{job.company}</p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-3 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="label shrink-0 md:text-right">
                  {job.period}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3 className="label mt-16 mb-6">{t.experience.educationTitle}</h3>
        </Reveal>

        <ul className="divide-y divide-border border-y border-border">
          {t.experience.education.map((item, i) => (
            <Reveal key={item.credential} delay={i * 60}>
              <li className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-baseline md:gap-x-10">
                <div className="max-w-2xl">
                  <h4 className="font-display text-lg font-medium tracking-tight">
                    {item.credential}
                  </h4>
                  <p className="mt-1 text-muted">{item.institution}</p>
                </div>

                <span className="label shrink-0 md:text-right">
                  {item.period}
                </span>

                {item.image && (
                  <figure className="mt-3 w-full overflow-hidden rounded-xl border border-border bg-surface md:col-span-2 md:mt-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.caption ?? item.credential}
                      className="w-full"
                    />
                    {item.caption && (
                      <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
