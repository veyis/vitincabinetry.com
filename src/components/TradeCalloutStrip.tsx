import React from "react";
import Link from "next/link";

/**
 * Full-width dark band CTA — "Bulk pricing for contractors and trade."
 * Used on /, /cabinets, /cabinets/stock.
 */
export default function TradeCalloutStrip() {
  return (
    <section className="section--dark" aria-label="Trade pricing">
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 320px" }}>
          <div className="eyebrow" style={{ color: "#e6c87a" }}>For Trade</div>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.5, margin: "0.5rem 0 0", color: "#fff" }}>
            <strong>Bulk pricing for contractors, builders, and trade.</strong>{" "}
            No minimums on the first order.
          </p>
        </div>
        <Link href="/trade" className="btn-primary" style={{ background: "#e6c87a", color: "#1c1c1c" }}>
          Apply for trade pricing →
        </Link>
      </div>
    </section>
  );
}
