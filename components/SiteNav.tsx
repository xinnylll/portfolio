"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b bg-paper transition-colors duration-300 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-12">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-sans text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink hover:text-blue sm:tracking-[0.22em]"
        >
          Xinyuan Lan
        </Link>
        <nav aria-label="Page" className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => {
            const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center font-sans text-[0.68rem] font-medium uppercase tracking-[0.16em] sm:tracking-[0.22em] ${
                  current ? "text-blue" : "text-ink hover:text-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
