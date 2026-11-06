import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content } from "@/shared/config/content";
import ProjectDetailPage from "@/views/project-detail/ui/ProjectDetailPage";

export function generateStaticParams() {
  return content.en.projects.items.map((project) => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = content.en.projects.items.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Chamreun Odompanha`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const exists = content.en.projects.items.some((p) => p.slug === slug);
  if (!exists) notFound();

  return <ProjectDetailPage slug={slug} />;
}
