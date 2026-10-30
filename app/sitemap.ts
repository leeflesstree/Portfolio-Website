import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/skills", "/background", "/resume"];
  const projects = getAllProjects().map(project => `/projects/${project.slug}`);
  return [...pages, ...projects].map(path => ({ url: `${site.url}${path}` }));
}
