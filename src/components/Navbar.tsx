"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/process", label: "Process" },
  { href: "/services/kitchen-cabinets", label: "Kitchens" },
  { href: "/services/bathroom-vanities", label: "Bathrooms" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

  return (
    <nav
      className={`navbar ${isOpen ? "navbar--open" : ""}`}
      aria-label="Primary"
    >
      <Link href="/" className="navbar__brand" onClick={close}>
        Vitrin Cabinetery
      </Link>

      <button
        className="navbar__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((o) => !o)}
      >
        <span aria-hidden="true" className="navbar__toggle-bar" />
        <span aria-hidden="true" className="navbar__toggle-bar" />
      </button>

      <div id="primary-navigation" className="navbar__links">
        {navItems.map((item) => {
          const active = pathname === item.href || isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={active ? "page" : undefined}
              className={active ? "navbar__link--active" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
