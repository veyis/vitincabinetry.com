"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";

const cabinetsCol = [
  { href: "/cabinets/stock", label: "Stock cabinets" },
  { href: "/cabinets/custom", label: "Custom kitchens" },
  { href: "/cabinets/kitchen", label: "Kitchen" },
  { href: "/cabinets/bath", label: "Bath" },
  { href: "/cabinets/built-ins", label: "Built-ins" },
  { href: "/cabinets/aging-in-place", label: "Aging in Place" },
];

const servicesCol = [
  { href: "/remodeling", label: "Kitchen & bath remodeling" },
  { href: "/countertops", label: "Countertops" },
  { href: "/flooring", label: "Flooring" },
  { href: "/closets", label: "Custom closets" },
];

const buyersCol = [
  { href: "/process", label: "How ordering works" },
  { href: "/installation", label: "Installation" },
  { href: "/showroom", label: "Visit the showroom" },
  { href: "/shop-tour", label: "Workshop tour" },
];

const tradeCol = [
  { href: "/trade", label: "Trade program" },
  { href: "/trade#contractors", label: "For contractors" },
  { href: "/trade#installers", label: "For installers" },
  { href: "/trade#builders", label: "For builders" },
  { href: "/trade#designers", label: "For designers" },
  { href: "/trade#architects", label: "For architects" },
];

const vitrinCol = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "4rem 0 2rem",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        color: "var(--text-secondary)",
        fontSize: "0.9rem",
      }}
    >
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
            {site.name}
          </div>
          <div>Kitchen, bathroom &amp; closet cabinetry — plus countertops, flooring, and full remodeling. Built and sold in Easton, PA, for homeowners and trade.</div>
          <div style={{ marginTop: "0.75rem" }}>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a><br/>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Cabinets</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {cabinetsCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Services</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {servicesCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>For Buyers</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {buyersCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>For Trade</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {tradeCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Vitrin</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {vitrinCol.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
          Cabinets by town
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.4rem 1rem" }}>
          {towns.map((t) => (
            <Link key={t.slug} href={`/custom-kitchen-cabinets/${t.slug}`} style={{ fontSize: "0.85rem" }}>
              {t.name}, PA
            </Link>
          ))}
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "2rem",
          marginTop: "2rem",
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="/portal">Client Portal</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
