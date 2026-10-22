"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { GitHubIcon, ExternalLinkIcon, GlobeIcon, ArrowLeftIcon } from "./icons/ProjectIcons";

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLocale();
  const project = t.projects.items.find((p) => p.slug === slug);

  // Shouldn't happen: the route only exists for known slugs (generateStaticParams).
  if (!project) return null;

  const githubHref =
    project.githubUrl === null
      ? null
      : project.githubUrl ?? "https://github.com/Oudompanha123";
  const demoHref = project.demoUrl ?? "/#contact";

  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:px-8 md:py-24">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeftIcon />
        {t.projects.backToProjects}
      </Link>

      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {project.title}
      </h1>

      {project.image && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full" />
        </div>
      )}

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-bg px-3 py-1 text-sm font-medium text-ink"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border pt-6 text-sm font-medium text-muted">
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
    </section>
  );
}
