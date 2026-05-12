"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/process", label: "Process" },
  { href: "/services/kitchen-cabinets", label: "Kitchens" },
  { href: "/services/bathroom-vanities", label: "Bathrooms" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav
      className={`navbar glass-morphism ${isOpen ? "navbar--open" : ""}`}
      aria-label="Primary"
    >
      <div className="navbar__brand">
        <Link href="/" onClick={close}>Vitrin Cabinetery</Link>
      </div>

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
        <span aria-hidden="true" className="navbar__toggle-bar" />
      </button>

      <div id="primary-navigation" className="navbar__links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
