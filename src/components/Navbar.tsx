import React from "react";
import Link from "next/link";

const navItems = [
  { href: "/process", label: "Process" },
  { href: "/services/kitchen-cabinets", label: "Kitchens" },
  { href: "/services/bathroom-vanities", label: "Bathrooms" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav
      className="glass-morphism"
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "92%",
        maxWidth: "1200px",
        zIndex: 1000,
        padding: "1rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div style={{ fontSize: "1.4rem", fontWeight: "bold", fontFamily: "var(--font-serif)" }}>
        <Link href="/">Vitrin Cabinetery</Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1.6rem",
          fontSize: "0.85rem",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "1px",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
