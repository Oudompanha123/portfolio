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

      <div className="mx-auto mt-10 grid max-w-[1040px] gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-surface transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="h-[220px] overflow-hidden rounded-t-xl border-b border-border bg-bg">
                {project.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-6">
                <div className="flex items-center gap-2">
                  <h3 className="min-w-0 flex-1 truncate text-lg font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {t.projects.viewDetails}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
