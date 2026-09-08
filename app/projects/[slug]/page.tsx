import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16">
      <Link
        href="/projects"
        className="text-sm text-zinc-500 underline underline-offset-4 hover:no-underline"
      >
        ← All projects
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500">
        {project.year} · {project.stack.join(" · ")}
      </p>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>

      <div className="mt-8 flex max-w-xl flex-col gap-4">
        {project.body.map((paragraph) => (
          <p key={paragraph} className="leading-7">
            {paragraph}
          </p>
        ))}
      </div>

      {(project.repo || project.demo) && (
        <ul className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
          {project.repo && (
            <li>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </li>
          )}
          {project.demo && (
            <li>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
            </li>
          )}
        </ul>
      )}
    </article>
  );
}
