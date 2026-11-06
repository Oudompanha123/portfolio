"use client";

import Link from "next/link";
import type { ProjectItem } from "@/entities/project/model/types";

type ProjectCardProps = {
  project: ProjectItem;
  viewDetailsLabel: string;
};

export default function ProjectCard({ project, viewDetailsLabel }: Readonly<ProjectCardProps>) {
  return (
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
            {viewDetailsLabel}
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
  );
}
