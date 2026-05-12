import React from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";

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
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--text)", marginBottom: "0.75rem" }}>
            {site.name}
          </div>
          <div>Custom kitchens, baths, and cabinetry — designed, built, and installed in Quakertown, PA.</div>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Services</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li><Link href="/services/kitchen-cabinets">Custom Kitchens</Link></li>
            <li><Link href="/services/bathroom-vanities">Bathroom Vanities</Link></li>
            <li><Link href="/services/living-room-units">Built-ins & Whole-Home</Link></li>
            <li><Link href="/trade">Trade Program</Link></li>
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Company</div>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/shop-tour">Shop Tour</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/guides">Guides</Link></li>
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Contact</div>
          <div>{site.address.locality}, {site.address.region} {site.address.postalCode}</div>
          <div><a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></div>
          <div><a href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
          Custom kitchens by town
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
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
