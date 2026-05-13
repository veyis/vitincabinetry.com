"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

type Chip = {
  label: string;
  value: string;
};

const CHIPS: Chip[] = [
  { label: "All", value: "all" },
  { label: "Custom kitchens", value: "custom-kitchens" },
  { label: "Stock projects", value: "stock" },
  { label: "Trade installs", value: "trade" },
  { label: "Bath", value: "bath" },
  { label: "Built-ins", value: "built-ins" },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/portfolio/${p.slug}`}
      style={{
        display: "block",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.25s ease",
        background: "#fff",
      }}
    >
      <div
        className="img-placeholder"
        style={{ minHeight: "260px", border: "none", borderRadius: 0, fontSize: "0.8rem" }}
        role="img"
        aria-label={`${p.title} — photo coming soon`}
      >
        {p.title} — photo coming soon
      </div>
      <div style={{ padding: "1.5rem" }}>
        <div style={{ color: "var(--primary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.5rem" }}>
          {p.style} · {p.town}
        </div>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.title}</h3>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.55, fontSize: "0.95rem" }}>{p.summary}</p>
        <div style={{ marginTop: "1rem", color: "var(--primary)", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
          View Project →
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Filter chip strip */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2rem",
        }}
        role="group"
        aria-label="Filter projects by category"
      >
        {CHIPS.map((chip) => {
          const isActive = selectedCategory === chip.value;
          return (
            <button
              key={chip.value}
              onClick={() => setSelectedCategory(chip.value)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 999,
                border: "1px solid var(--border)",
                cursor: "pointer",
                background: isActive ? "var(--primary)" : "transparent",
                color: isActive ? "#fff" : "inherit",
                fontFamily: "inherit",
                fontSize: "0.875rem",
                transition: "background 0.15s ease, color 0.15s ease",
                outline: isActive ? "2px solid var(--primary)" : undefined,
                outlineOffset: "2px",
              }}
              aria-pressed={isActive}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      {filtered.length === 0 ? (
        <p style={{ color: "var(--text-secondary)", textAlign: "center", padding: "3rem 0" }}>
          No projects in this category yet — check back soon.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      )}
    </>
  );
}
