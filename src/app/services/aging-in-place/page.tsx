import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { shareMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, toJsonLd } from "@/lib/schema";

const PAGE_TITLE = "Aging-in-Place Kitchen & Bath Cabinetry — Vitrin Cabinetery";
const PAGE_DESC =
  "Custom kitchens and bathrooms designed for accessibility and aging in place — roll-under sinks, easy-glide drawers, lever pulls, lighting strategy. Built in our Quakertown, PA shop.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/services/aging-in-place" },
  ...shareMetadata("/services/aging-in-place", PAGE_TITLE, PAGE_DESC),
};

const principles = [
  {
    title: "Drawers, not lower-door cabinets.",
    body: "Doors require bending and reaching into a dark interior. Drawers bring contents out to you. Every aging-in-place kitchen we build maximizes drawer banks in the base cabinets — full-extension, soft-close, easy to operate one-handed.",
  },
  {
    title: "Roll-under sinks and counters.",
    body: "An ADA-style roll-under sink station gives someone seated full counter access. We build these with removable panels so the cabinetry reads as normal when not in use.",
  },
  {
    title: "Lever pulls, no knobs.",
    body: "Round knobs are difficult to grip if hand strength has decreased. Lever pulls and D-pulls work for any hand. We spec them as standard on every aging-in-place project.",
  },
  {
    title: "Layered lighting.",
    body: "Aging eyes need 3–4x the light younger eyes do. We design layered lighting — overhead, under-cabinet, in-cabinet, toe-kick — so workspace illumination is generous without being harsh.",
  },
  {
    title: "Counter heights you can sit at.",
    body: "Standard 36-inch counter heights are tiring to stand at for long stretches. We can build sections at seated-task height (30 inches) or adjustable-height counters for primary work zones.",
  },
  {
    title: "Pull-out shelves, not deep cabinets.",
    body: "Anything you can't see is anything you'll forget you have. Pantry shelves on full-extension hardware bring contents into view, every time.",
  },
];

const bathPrinciples = [
  {
    title: "Curbless showers + vanity heights.",
    body: "Vanity cabinetry coordinated with curbless shower entries, with toe-kick clearance for shower chairs and walking aids.",
  },
  {
    title: "Knee space at the vanity.",
    body: "Open knee space below the sink for seated use, with concealed plumbing wrapped in a removable panel so the cabinetry reads conventionally.",
  },
  {
    title: "Grab bar–ready blocking.",
    body: "We coordinate with your tile and framing trades to block walls for grab bars now — even if you don't install them yet — so adding them later is a 20-minute job, not a remodel.",
  },
];

export default function AgingInPlacePage() {
  const pageUrl = `${site.url}/services/aging-in-place`;

  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <Image
          src="/images/heros/minimalist-white-oak-custom-kitchen-cabinetry.png"
          alt="Minimalist white oak custom kitchen cabinetry designed for long-term living by Vitrin Cabinetery, Quakertown PA"
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
            <span aria-current="page" style={{ color: "#fff" }}>Aging-in-Place</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Aging-in-Place</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Kitchens and baths designed to stay in for the long run.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Most aging-in-place advice ends with grab bars and ramps. We build the cabinetry that makes the kitchen and bath actually usable — for someone with full mobility today and for whoever they become twenty years from now.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow prose">
          <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>Why this matters</h2>
          <p>
            The standard kitchen is built around an assumption: a person 5&apos;6&quot;–6&apos;0&quot; tall with full hand strength, full balance, and good vision. That assumption holds for most of life. It stops holding for almost everyone eventually.
          </p>
          <p>
            Aging-in-place cabinetry isn&apos;t about installing a hospital-room kitchen. It&apos;s about making small, invisible choices now — drawer banks instead of doors, lever pulls instead of knobs, lighting that adapts — so the kitchen still works for you in twenty or thirty years without a second renovation.
          </p>
          <p>
            Most of these choices are also better cabinetry, full stop. A kitchen full of drawer banks is easier to use at any age. Layered lighting is just good lighting. Lever pulls feel better than round knobs every time you use them. The accessibility-driven design tends to be the better design anyway.
          </p>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Kitchen Principles</span>
            <h2 className="section-heading">Six choices that change everything.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {principles.map((p) => (
              <div key={p.title} className="card">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">Bath Principles</span>
            <h2 className="section-heading">Three more in the bathroom.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {bathPrinciples.map((p) => (
              <div key={p.title} className="card">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container--narrow prose">
          <h2 className="section-heading" style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>What this is not</h2>
          <p>
            Aging-in-place cabinetry is not institutional. The finished kitchen reads as a beautiful, well-designed custom kitchen — same door styles, same paint colors, same hardware tier as anything else we build. The accessibility choices live in the layout, the drawer mix, the hardware function, and the lighting design. None of them are visible as &quot;accessibility features.&quot;
          </p>
          <p>
            Most clients who come to us for aging-in-place projects are doing it ahead of time — planning the kitchen they want to live in for the next thirty years, not retrofitting after a health event. That&apos;s the right time. The choices are easier when nothing is urgent.
          </p>
        </div>
      </section>

      <section>
        <div className="container--narrow" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Planning a kitchen to stay in?</h2>
          <p className="section-sub" style={{ margin: "1rem auto 2rem" }}>
            Every project starts with the same 30-minute discovery call. Tell us about your home, your timeline, and what you&apos;re thinking about long-term function. We&apos;ll talk through what&apos;s realistic.
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
              { name: "Aging-in-Place", url: pageUrl },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            serviceSchema({
              name: "Aging-in-Place Kitchen & Bath Cabinetry",
              description:
                "Custom kitchen and bathroom cabinetry designed for accessibility and aging in place — roll-under sinks, drawer banks, lever pulls, layered lighting.",
              url: pageUrl,
              serviceType: "Aging-in-Place Cabinetry",
            })
          ),
        }}
      />
    </main>
  );
}
