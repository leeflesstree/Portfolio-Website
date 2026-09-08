import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getFeaturedProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          {site.role}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Hi, I&apos;m {site.name.split(" ")[0]}.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
            href="/projects"
          >
            View my work
          </Link>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            href="#contact"
          >
            Get in touch
          </a>
        </div>
      </section>

      <Section id="about" title="About">
        <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
          {site.about}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-black/10 px-3 py-1 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-400"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Selected projects">
        <ul className="mt-8 flex flex-col gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
        <Link
          href="/projects"
          className="mt-8 inline-block text-sm font-medium underline underline-offset-4 hover:no-underline"
        >
          All projects →
        </Link>
      </Section>

      <Section id="contact" title="Contact">
        <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
          The best way to reach me is by email. I&apos;m happy to talk about new
          projects, roles, or anything else.
        </p>
        <ul className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
          <li>
            <a
              className="underline underline-offset-4 hover:no-underline"
              href={`mailto:${site.email}`}
            >
              Email
            </a>
          </li>
          {site.socials.map((social) => (
            <li key={social.href}>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
