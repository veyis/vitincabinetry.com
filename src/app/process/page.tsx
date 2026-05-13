import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { shareMetadata } from "@/lib/seo";
import { breadcrumbSchema, howToJsonLd, serviceSchema, toJsonLd } from "@/lib/schema";

const PAGE_TITLE = "Our Process — Designed, Built & Installed by One Team";
const PAGE_DESC =
  "How Vitrin Cabinetery designs, builds, and installs every custom kitchen and bath at our Quakertown, PA shop. A 7-step process under one roof.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/process" },
  ...shareMetadata("/process", PAGE_TITLE, PAGE_DESC),
};

const steps = [
  {
    title: "Discovery call",
    duration: "30 minutes · free",
    body:
      "A focused phone call: project scope, location, budget tier, timeline, and whether we're the right fit. No pressure, no obligation. If we're not the right shop for the job, we'll tell you who is.",
  },
  {
    title: "In-home survey & measurements",
    duration: "60–90 minutes · free",
    body:
      "We come to your home, measure the existing space (including utilities, ductwork, and what's behind the walls when we can), photograph current conditions, and talk through how you actually live in the room.",
  },
  {
    title: "Design & 3D renderings",
    duration: "1–2 weeks",
    body:
      "We deliver photo-realistic 3D renderings, full elevations, and a written proposal with transparent, line-item pricing. You see what you're paying for — door style, drawer count, hinge brand, wood species — line by line.",
  },
  {
    title: "Materials & finishes at our shop",
    duration: "1–2 in-shop visits",
    body:
      "You sit at our materials bench and select door styles, wood species, paint and stain colors, hardware, and counter samples in person. The shop where it's built doubles as the showroom where you choose.",
  },
  {
    title: "Fabrication at our bench",
    duration: "4–8 weeks",
    body:
      "Your cabinets are built at our Quakertown shop by our team. We use plywood boxes, dovetail solid-wood drawers, Blum soft-close hardware, and finish in a dust-controlled spray booth. You get weekly photo updates.",
  },
  {
    title: "Installation by our own crew",
    duration: "1–2 weeks on site",
    body:
      "The same people who built your kitchen install it. We coordinate counter templating, plumbing, electrical, and tile if those scopes are in your contract. One point of contact for the whole job.",
  },
  {
    title: "Walkthrough & lifetime warranty",
    duration: "Final day",
    body:
      "We walk the finished space with you, work through any punch list on the spot, and hand off your warranty documents, paint touch-up kit, and care guide. Our lifetime cabinetry warranty covers the work for as long as you own the home.",
  },
];

export default function ProcessPage() {
  const pageUrl = `${site.url}/process`;

  const howToLd = howToJsonLd({
    name: "Custom kitchen and bath cabinetry — design through install",
    description: PAGE_DESC,
    url: pageUrl,
    steps: steps.map((s) => ({
      name: s.title,
      text: `${s.duration}. ${s.body}`,
    })),
  });

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/calacatta-marble-kitchen-island-overhead.png"
          alt="Honed Calacatta marble custom kitchen island overhead detail showing craftsmanship by Vitrin Cabinetery"
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Process</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Our Process</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            One team, seven steps, no hand-offs.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Most kitchen remodels involve a designer, a cabinet line, an installer, and a GC. Each one points at the others when something goes wrong. Vitrin is all of them — one accountable shop, from first sketch to lifetime warranty.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <ol style={{ listStyle: "none", padding: 0 }}>
            {steps.map((s, i) => (
              <li key={s.title} className="step">
                <div className="step__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="step__body">
                  <h3>{s.title}</h3>
                  <div style={{ color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.6rem" }}>
                    {s.duration}
                  </div>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Want to see the bench where it&apos;s built?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Every consultation includes an optional shop tour. Walk the floor where your kitchen will be built before you sign anything.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Book a Consultation</Link>
            <Link href="/shop-tour" className="btn-secondary">Take the Shop Tour</Link>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Process", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Cabinetry Design-Build-Install",
              description:
                "A 7-step design-build-install process for custom kitchens and bath cabinetry, performed entirely in-house at our Quakertown, PA shop.",
              url: pageUrl,
              serviceType: "Design-Build Cabinetry",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(howToLd) }}
      />
    </main>
  );
}
