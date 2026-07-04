"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { href: "/remodeling", label: "Remodeling" },
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
      <Link href="/" className="navbar__brand" onClick={close} aria-label="Vitrin Cabinetry — home">
        <Image
          src="/logo-mark.png"
          alt=""
          width={30}
          height={26}
          priority
        />
        <span className="navbar__wordmark" aria-hidden="true">
          <span className="navbar__wordmark-name">Vitrin</span>
          <span className="navbar__wordmark-sub">Cabinetry</span>
        </span>
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
            className={`navbar__navlink${cabinetsActive ? " navbar__link--active" : ""}`}
            aria-current={cabinetsActive ? "page" : undefined}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((o) => !o)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={(e) => {
              if (!dropdownRef.current?.contains(e.relatedTarget)) {
                setDropdownOpen(false);
              }
            }}
          >
            Cabinets{" "}
            <span aria-hidden="true" className="navbar__caret">
              ▾
            </span>
          </button>
          {dropdownOpen && (
            <div
              className="navbar__dropdown-menu"
              aria-label="Cabinets submenu"
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setDropdownOpen(false);
                }
              }}
            >
              {cabinetsLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="navbar__dropdown-item"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {topLevel.map((item) => {
          const active = isActive(item.href);
          const isCta = item.href === "/contact";
          const className =
            [
              isCta ? "navbar__cta" : "",
              active && !isCta ? "navbar__link--active" : "",
            ]
              .filter(Boolean)
              .join(" ") || undefined;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={active ? "page" : undefined}
              className={className}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
