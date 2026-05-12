import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Living Room Built-ins & Whole-Home Cabinetry — Vitrin Cabinetery",
  description:
    "Custom entertainment walls, libraries, home offices, mudrooms, and pantries — built in our Quakertown, PA shop. The cabinetry shop you wish your contractor knew about.",
  alternates: { canonical: "/services/living-room-units" },
};

const rooms = [
  { title: "Entertainment walls", desc: "TV-centric living rooms with concealed media gear, integrated sound, and lighting. Floating or floor-anchored." },
  { title: "Libraries & studies", desc: "Built-in bookshelves and reading rooms. Adjustable shelving, ladder rails, and integrated desk surfaces if needed." },
  { title: "Home offices", desc: "Workstations and credenzas built for cable management, monitor mounts, and the storage a working office actually needs." },
  { title: "Mudrooms", desc: "Lockers, benches, hooks, drop-zones. Sized for boots, jackets, backpacks, and the family that lives in the house." },
  { title: "Custom pantries", desc: "Walk-in or reach-in. Adjustable shelving, drawer banks, pullouts, integrated counter, and lighting that actually works." },
  { title: "Wet bars & coffee stations", desc: "Compact bars, butler's pantries, and coffee niches. Refrigeration, plumbing, and ice integration where wanted." },
];

export default function LivingRoomUnitsPage() {
  const pageUrl = `${site.url}/services/living-room-units`;
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/walnut-waterfall-island-modern-custom-kitchen.png"
          alt="Modern walnut waterfall island and built-in cabinetry by Vitrin Cabinetery, Quakertown PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Living Room &amp; Whole-Home Built-ins</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Beyond the Kitchen</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Custom built-ins for every room that earns one.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Entertainment walls, libraries, home offices, mudrooms, pantries, wet bars. Anywhere a custom cabinet beats a stock one — we build it.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">What We Build</span>
            <h2 className="section-heading">Six common starting points — anything from there.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {rooms.map((r) => (
              <div key={r.title} className="card">
                <h3 className="card__title">{r.title}</h3>
                <p className="card__desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Why It Matters</span>
              <h2 className="section-heading">The pieces stock cabinets can&apos;t reach.</h2>
              <div className="prose" style={{ marginTop: "1.25rem" }}>
                <p>
                  Stock cabinets are built for kitchens. The minute you put one in a library, a mudroom, or under a sloped ceiling, you see the gaps — wrong proportions, wrong depths, awkward fillers, missed details.
                </p>
                <p>
                  Custom solves that problem in one move. The cabinet is drawn to the wall it lives on, the function it serves, and the room it shares.
                </p>
              </div>
            </div>
            <div className="img-placeholder" style={{ minHeight: "380px" }} role="img" aria-label="Living room built-in — photo coming soon">
              Built-in project photo — coming soon
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Have a room in mind?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Whether it&apos;s a single piece or a whole-home cabinetry plan, the conversation starts the same way.
          </p>
          <Link href="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: "Living Room & Built-ins", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Custom Built-ins & Whole-Home Cabinetry",
              description:
                "Custom entertainment walls, libraries, home offices, mudrooms, pantries, and wet bars — built in our Quakertown, PA shop.",
              url: pageUrl,
              serviceType: "Custom Cabinetry",
            })
          ),
        }}
      />
    </main>
  );
}
