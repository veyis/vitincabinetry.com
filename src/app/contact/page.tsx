import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Vitrin Cabinetery in Quakertown, PA. Serving Bucks County and the Lehigh Valley.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="hero" style={{ minHeight: "60vh", padding: "180px 0 80px" }}>
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/heros/custom-kitchen-indoor-outdoor-garden-bucks-county-poster.jpg"
          aria-label="Indoor-outdoor custom kitchen opening onto a Bucks County garden, built by Vitrin Cabinetery"
        >
          <source media="(prefers-reduced-motion: no-preference)" src="/videos/custom-kitchen-indoor-outdoor-garden-bucks-county.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <span className="sep">/</span>
            <span aria-current="page" style={{ color: "#fff" }}>Contact</span>
          </nav>
          <span className="eyebrow" style={{ color: "#e6c87a" }}>Book a Consultation</span>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: "1.25rem", color: "#fff" }}>
            Let&apos;s create your masterpiece.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.92)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            From initial sketch to final installation, we guide you through every step of your bespoke cabinetry journey.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--background)", paddingBottom: "150px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem" }}>
            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Get In Touch</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
                Fill out the form, and one of our master designers will reach out within 24 hours to discuss your project.
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontWeight: "bold", color: "var(--primary)", marginBottom: "0.5rem" }}>Showroom</div>
                <div style={{ color: "var(--text-secondary)" }}>
                  {site.address.street}<br />
                  {site.address.locality}, {site.address.region} {site.address.postalCode}
                </div>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <div style={{ fontWeight: "bold", color: "var(--primary)", marginBottom: "0.5rem" }}>Contact</div>
                <div style={{ color: "var(--text-secondary)" }}>
                  <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
                </div>
                <div style={{ color: "var(--text-secondary)" }}>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: "bold", color: "var(--primary)", marginBottom: "0.5rem" }}>Hours</div>
                <div style={{ color: "var(--text-secondary)" }}>Mon – Fri: 9am – 6pm</div>
                <div style={{ color: "var(--text-secondary)" }}>Sat: 10am – 4pm (by appointment)</div>
              </div>
            </div>

            <div className="glass-morphism" style={{ padding: "3rem" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
