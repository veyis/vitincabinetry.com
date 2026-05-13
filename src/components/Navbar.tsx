"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cabinetsLinks = [
  { href: "/cabinets/stock", label: "Vitrin Stock" },
  { href: "/cabinets/custom", label: "Vitrin Signature" },
  { href: "/cabinets/kitchen", label: "Kitchen" },
  { href: "/cabinets/bath", label: "Bath" },
  { href: "/cabinets/built-ins", label: "Built-ins" },
  { href: "/cabinets/aging-in-place", label: "Aging in Place" },
];

const topLevel: Array<{ href: string; label: string }> = [
  { href: "/trade", label: "Trade" },
  { href: "/showroom", label: "Showroom" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Escape closes the mobile menu and the dropdown.
  useEffect(() => {
    if (!isOpen && !dropdownOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, dropdownOpen]);

  // Click outside the dropdown closes it.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [dropdownOpen]);

  const close = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

  const cabinetsActive = isActive("/cabinets");

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
        {/* Cabinets dropdown */}
        <div
          ref={dropdownRef}
          className="navbar__dropdown"
          style={{ position: "relative" }}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            type="button"
            className={cabinetsActive ? "navbar__link--active" : undefined}
            aria-haspopup="menu"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((o) => !o)}
            onFocus={() => setDropdownOpen(true)}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              font: "inherit",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Cabinets &#9662;
          </button>
          {dropdownOpen && (
            <div
              role="menu"
              className="navbar__dropdown-menu"
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "0.5rem 0",
                minWidth: "200px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                zIndex: 100,
                marginTop: "0.5rem",
              }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setDropdownOpen(false);
                }
              }}
            >
              {cabinetsLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  role="menuitem"
                  style={{
                    display: "block",
                    padding: "0.5rem 1rem",
                    color: "var(--text)",
                    fontSize: "0.95rem",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {topLevel.map((item) => {
          const active = isActive(item.href);
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
