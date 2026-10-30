"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="nav-links">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
            {item.label}
            {item.label === "Contact" && <span aria-hidden="true"> ↗</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
