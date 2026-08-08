import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leave a Review — Vitrin Cabinetry",
  description: "Review your experience with Vitrin Cabinetry on Google or Houzz.",
  robots: { index: false, follow: false }, // Don't index utility pages
  // Self-canonical — pointing at `/` made GSC treat this as alternate/noindex noise.
  alternates: { canonical: "/leave-review" },
};

export default function LeaveReviewPage() {
  return (
    <main>
      <Navbar />

      <section style={{ minHeight: "70vh", padding: "180px 0 80px", background: "var(--surface)", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <span className="eyebrow">Client Feedback</span>
          <h1 className="section-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>
            How did we do?
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "3rem", lineHeight: 1.6 }}>
            Reviews are the lifeblood of our local business. If you love your new space, please take 60 seconds to share your experience.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {site.social.google ? (
              <a 
                href={site.social.google} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ padding: "1.5rem", fontSize: "1.1rem" }}
              >
                Review us on Google
              </a>
            ) : (
              <div style={{ padding: "1.5rem", background: "var(--background)", color: "var(--text-secondary)", border: "1px dashed var(--border)" }}>
                Google review link not yet configured.
              </div>
            )}
            
            {site.social.houzz ? (
              <a 
                href={site.social.houzz} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary" 
                style={{ padding: "1.5rem", fontSize: "1.1rem" }}
              >
                Review us on Houzz
              </a>
            ) : null}
          </div>

          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Need help with your order?</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              If anything isn&apos;t 100% right with your installation, please contact us directly so we can fix it.
            </p>
            <Link href="/contact" className="text-link">Contact Support &rarr;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
