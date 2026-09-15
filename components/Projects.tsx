"use client";

import { useLocale } from "@/lib/i18n";
import Reveal from "./Reveal";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.15c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.19.09 1.82 1.23 1.82 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.77.42-1.29.77-1.58-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.23A11.4 11.4 0 0 1 12 6.6c1.01 0 2.03.14 2.98.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.61-5.5 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v6H5V5h6" />
    </svg>
  );
}

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

      <div className="mx-auto mt-10 grid max-w-[1080px] gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <article className="group flex h-full flex-col rounded-[1.4rem] border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent">
              <h3 className="relative z-10 mb-3 text-xl font-semibold text-ink">
                {project.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="mt-4 flex-1 text-[0.96rem] leading-[1.7] text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-5 border-t border-border pt-4 text-sm font-medium text-muted">
                <a
                  href="https://github.com/Oudompanha123"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <GitHubIcon />
                  <span>{t.projects.githubLabel}</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <ExternalLinkIcon />
                  <span>{t.projects.demoLabel}</span>
                </a>
              </div>
            </article>
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
