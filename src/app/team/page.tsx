import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { team } from "@/lib/team";
import { breadcrumbSchema, personSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Team — Bench-Built Custom Cabinets in Easton, PA",
  description: "Meet the team behind Vitrin Cabinetry. Every custom cabinet that leaves our Easton shop is measured, drawn, milled, and finished by the people you can meet here.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  const pageUrl = `${site.url}/team`;

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "50vh", padding: "160px 0 60px" }}>
        <Image
          src="/images/heros/craftsman-hand-planing-white-oak-quakertown-workshop.png"
          alt="Craftsman in the Vitrin Cabinetry workshop"
          fill
          priority
          sizes="100vw"
          className="hero__image"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <Link href="/about" style={{ color: "inherit" }}>About</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Team</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>The Vitrin Team</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            The hands on the bench.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Vitrin is intentionally small. We don&apos;t have commissioned salespeople or outsourced install crews. The people who draw your layout are the same ones who oversee the build and install it in your home.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {team.map((member) => (
              <div key={member.slug} className="card" style={{ padding: "2rem" }}>
                {/* 
                  Note: The images don't exist in public/ yet, so they will fallback 
                  to the next/image alt text or we can just use a placeholder styling if needed.
                  Since this is a real project, we assume the user will place images at these paths.
                */}
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "50%", 
                  overflow: "hidden", 
                  margin: "0 auto 1.5rem",
                  background: "var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  <div style={{ position: "absolute", zIndex: 1, color: "var(--text-secondary)", fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase" }}>Photo</div>
                  {/* <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover", zIndex: 2 }} /> */}
                </div>
                <h2 style={{ textAlign: "center", marginBottom: "0.25rem", fontSize: "1.5rem", color: "var(--text)" }}>{member.name}</h2>
                <div style={{ textAlign: "center", color: "var(--primary)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "1rem", letterSpacing: "0.5px" }}>
                  {member.role}
                </div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem", marginBottom: "1.5rem" }}>{member.bio}</p>
                <div style={{ textAlign: "center" }}>
                  <Link href={`/team/${member.slug}`} className="text-link" style={{ fontWeight: 600 }}>
                    View Profile &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Work with us</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Ready to start your project? Bring your plans, or just your ideas, to our Easton shop.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            <Link href="/portfolio" className="btn-secondary">View our work</Link>
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
              { name: "About", url: `${site.url}/about` },
              { name: "Team", url: pageUrl },
            ])
          ),
        }}
      />
      {team.map((member) => (
        <script
          key={member.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: toJsonLd(
              personSchema({
                name: member.name,
                jobTitle: member.role,
                description: member.bio,
                url: `${pageUrl}#${member.slug}`,
                image: `${site.url}${member.image}`,
              })
            ),
          }}
        />
      ))}
    </main>
  );
}
