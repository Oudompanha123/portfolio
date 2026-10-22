"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { GitHubIcon } from "./icons/ProjectIcons";
import Reveal from "./Reveal";

export default function Projects() {
  const { t } = useLocale();
  const projects = t.projects.items;

  return (
    <section className="mx-auto max-w-content px-6 pb-10 pt-20 sm:px-8 md:pt-28">
      <div className="mb-6 flex items-center justify-center gap-4 md:mb-8">
        <span className="block h-9 w-1 rounded bg-accent" />
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t.projects.heading}
        </h2>
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <p className="mx-auto max-w-[640px] text-[0.95rem] leading-relaxed text-muted md:text-lg">
          {t.projects.intro}
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[780px] gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent"
            >
              {project.image && (
                <div className="aspect-[16/7] overflow-hidden border-b border-border bg-bg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-ink">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border bg-bg px-2 py-0.5 text-[0.7rem] font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-ink">
                  {t.projects.viewDetails}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/Oudompanha123"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-8 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent"
        >
          <GitHubIcon />
          <span>{t.projects.viewAll}</span>
        </a>
      </div>
    </section>
  );
}
