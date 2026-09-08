import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="rounded-xl border border-black/10 p-6 transition-colors hover:border-black/20 dark:border-white/15 dark:hover:border-white/30">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <span className="font-mono text-xs text-zinc-500">{project.year}</span>
      </div>
      <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-500">
        {project.stack.join(" · ")}
      </p>
    </li>
  );
}
