"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { GitHubIcon, ExternalLinkIcon, GlobeIcon } from "./icons/ProjectIcons";
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

      <div className="mx-auto mt-10 grid max-w-[900px] gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const githubHref =
            project.githubUrl === null
              ? null
              : project.githubUrl ?? "https://github.com/Oudompanha123";
          const demoHref = project.demoUrl ?? "#contact";

          return (
            <Reveal key={project.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-[1.4rem] border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent">
                {project.image && (
                  <div className="-mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden rounded-t-[1.4rem] border-b border-border bg-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                )}

                <h3 className="relative z-10 mb-3 text-xl font-semibold text-ink">
                  {project.title.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="mt-4 line-clamp-3 flex-1 text-[0.96rem] leading-[1.7] text-muted">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-ink"
                >
                  {t.projects.viewDetails}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>

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
                  {githubHref && (
                    <a
                      href={githubHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                    >
                      <GitHubIcon />
                      <span>{t.projects.githubLabel}</span>
                    </a>
                  )}

                  <a
                    href={demoHref}
                    target={demoHref.startsWith("http") ? "_blank" : undefined}
                    rel={demoHref.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    <ExternalLinkIcon />
                    <span>{t.projects.demoLabel}</span>
                  </a>

                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                    >
                      <GlobeIcon />
                      <span>{t.projects.websiteLabel}</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
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
