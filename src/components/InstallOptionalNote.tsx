import React from "react";
import Link from "next/link";

/**
 * Small block reassuring contractors that install is optional.
 * Used on /cabinets/custom and (trimmed) /cabinets/stock.
 */
export default function InstallOptionalNote() {
  return (
    <div
      className="callout"
      style={{
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "1.25rem 1.5rem",
        background: "var(--surface)",
        margin: "1.5rem 0",
      }}
    >
      <strong>Installation is optional.</strong>{" "}
      We can install your cabinets, or your contractor can. Most of our trade
      customers install themselves. <Link href="/installation" className="text-link">Learn about installation →</Link>
    </div>
  );
}
