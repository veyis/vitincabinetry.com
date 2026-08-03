import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { team } from "@/lib/team";
import { site } from "@/lib/site";
import { breadcrumbSchema, personSchema, toJsonLd } from "@/lib/schema";

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = team.find((m) => m.slug === params.slug);
  if (!member) return {};

  return {
    title: `${member.name}, ${member.role} — Vitrin Cabinetry`,
    description: member.bio,
    alternates: { canonical: `/team/${member.slug}` },
  };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = team.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  const pageUrl = `${site.url}/team/${member.slug}`;

  return (
    <main>
      <Navbar />

      <section style={{ minHeight: "50vh", padding: "160px 0 80px", background: "var(--background)" }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/team">Team</Link>
            <span className="sep">/</span>
            <span aria-current="page">{member.name}</span>
          </nav>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
              <div 
                style={{ 
                  position: "absolute", 
                  inset: 0, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  color: "var(--text-secondary)",
                  background: "var(--surface)" 
                }}
              >
                Photo of {member.name}
              </div>
            </div>
            
            <div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.5rem" }}>{member.name}</h1>
              <div style={{ color: "var(--primary)", fontWeight: 600, fontSize: "1.2rem", marginBottom: "2rem" }}>
                {member.role}
              </div>
              <div className="prose" style={{ color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                <p>{member.bio}</p>
              </div>
              
              <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Work with {member.name}</h3>
                <Link href="/contact" className="btn-primary">Start your project</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Team", url: `${site.url}/team` },
              { name: member.name, url: pageUrl },
            ])
          ),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            personSchema({
              name: member.name,
              jobTitle: member.role,
              url: pageUrl,
            })
          ),
        }}
      />
    </main>
  );
}
