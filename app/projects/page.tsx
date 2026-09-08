import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I have designed, built, and shipped.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
        Things I have designed, built, and shipped. Replace these with your own.
      </p>
      <ul className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </div>
  );
}
