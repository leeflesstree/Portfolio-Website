import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-container header-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark">
          {site.name}<span className="wordmark-period">.</span>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.label}
                {item.label === "Contact" && <span aria-hidden="true"> ↗</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
