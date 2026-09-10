import { site } from "@/lib/site";

// Evaluated when the page is rendered or prerendered, so new deployments do
// not carry a stale copyright year into the next calendar year.
const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <span>
          © {year} {site.name}
        </span>
        <ul className="footer-links">
          {site.socials.map((social) => (
            <li key={social.href}>
              <a
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
