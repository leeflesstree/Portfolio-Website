import { site } from "@/lib/site";

// Evaluated when the page is rendered or prerendered, so new deployments do
// not carry a stale copyright year into the next calendar year.
const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500">
        <span>
          © {year} {site.name}
        </span>
        <ul className="flex gap-6">
          {site.socials.map((social) => (
            <li key={social.href}>
              <a
                className="hover:text-foreground"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
