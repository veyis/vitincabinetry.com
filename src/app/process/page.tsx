import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Ordering a Custom Kitchen Works — Vitrin Cabinetry",
  description:
    "How Vitrin Cabinetry handles a custom kitchen order, end to end: discovery, in-home survey, design and quote, fabrication at our Quakertown bench, and delivery (install optional).",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    title: "Discovery call",
    duration: "30 minutes · free",
    body:
      "A focused phone call: project scope, location, budget tier, timeline, and whether Vitrin Stock or Vitrin Signature is the right tier. No pressure, no obligation.",
  },
  {
    title: "In-home survey & measurements",
    duration: "60–90 minutes · free",
    body:
      "We come to your home, measure the space (including utilities, ductwork, and what's behind the walls when we can), photograph current conditions, and talk through how you actually use the room.",
  },
  {
    title: "Design & quote",
    duration: "1–2 weeks",
    body:
      "We deliver 3D renderings, full elevations, and a written quote with transparent, line-item pricing. You see what you're paying for — door style, drawer count, hinge brand, wood species — line by line.",
  },
  {
    title: "Fabrication at our bench",
    duration: "4–8 weeks",
    body:
      "Your cabinets are built at our Quakertown shop by our team. Plywood boxes, dovetail solid-wood drawers, Blum soft-close hardware, finished in a dust-controlled spray booth. Weekly photo updates.",
  },
  {
    title: "Delivery — install optional",
    duration: "1 day",
    body:
      "Cabinets delivered to your home or jobsite. Lifetime warranty on the workmanship — covers your cabinets for as long as you own the home. Install is available from our crew, or your contractor can install directly.",
  },
];

export default function ProcessPage() {
  const pageUrl = `${site.url}/process`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/calacatta-marble-kitchen-island-overhead.png"
          alt="Custom Vitrin Signature kitchen with honed Calacatta marble island"
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
          <span className="eyebrow" style={{ color: "#e6c87a" }}>How Ordering Works</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            One supplier, five steps.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            The full ordering path for a Vitrin Signature custom kitchen — from discovery call to delivery. Install is optional; your own contractor can install too.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow">
          <ol role="list" aria-label="Five-step custom kitchen ordering flow" style={{ listStyle: "none", padding: 0 }}>
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
          <h2 className="section-heading">Stock cabinets work differently.</h2>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>
            This 5-step process is for Vitrin Signature custom kitchens. For stock cabinets — pickup from the showroom this week — see <Link href="/cabinets/stock" className="text-link">Vitrin Stock</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Ready to start your custom kitchen?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Book a 30-minute discovery call. We&apos;ll talk scope, budget, and timeline before either of us spends a minute on a quote.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact?type=custom" className="btn-primary">Start a Custom Kitchen</Link>
            <Link href="/shop-tour" className="btn-secondary">Take the Workshop Tour</Link>
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
              name: "Custom Cabinet Supply",
              description:
                "A 5-step process for ordering custom kitchens and bath cabinetry, manufactured at our Quakertown, PA shop. Installation is optional and offered separately.",
              url: pageUrl,
              serviceType: "Custom Cabinet Supply",
            })
          ),
        }}
      />
    </main>
  );
}
