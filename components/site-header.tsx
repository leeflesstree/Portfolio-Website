import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-container header-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark">
          {site.name}<span className="wordmark-period">.</span>
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
