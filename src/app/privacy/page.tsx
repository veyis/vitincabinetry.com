import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy · Vitrin Cabinetry",
  description:
    "How Vitrin Cabinetry collects, uses, and protects the information you share with us — contact form submissions, quote requests, and basic site analytics.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="subhero">
        <div className="container--narrow">
          <span className="eyebrow">Legal</span>
          <h1 className="section-heading">Privacy Policy</h1>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Last updated: July 4, 2026
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container--narrow prose">
          <p>
            {site.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates {site.url}. This page explains
            what information we collect when you use the site, why we collect it, and what we do
            with it.
          </p>

          <h3>Information you give us</h3>
          <p>
            When you submit our contact form or request a quote, we collect the details you
            provide: your name, email address, phone number (optional), what kind of buyer you are,
            the project type, and your message. We use this information to respond to your inquiry,
            prepare quotes, and manage your project. We do not sell it, rent it, or share it with
            third parties for their marketing.
          </p>

          <h3>Information collected automatically</h3>
          <p>
            When you submit a form we also record your IP address, browser user-agent, the page you
            submitted from, and an approximate location derived from your IP. We use these signals
            for spam and fraud prevention — telling real local inquiries apart from bot
            submissions — and for basic security of the service.
          </p>
          <p>
            Form submissions are processed and stored by our lead-management provider on our
            behalf. Notification emails about your inquiry are sent to us, and a confirmation may
            be sent to the email address you provided.
          </p>

          <h3>Analytics</h3>
          <p>
            We use privacy-respecting, aggregate analytics to understand how the site is used
            (page views, referrers, approximate region). We do not run cross-site advertising
            trackers.
          </p>

          <h3>Retention</h3>
          <p>
            Inquiry records are kept for as long as needed to serve your project and meet our
            business and legal obligations. You can ask us to delete your inquiry data at any time.
          </p>

          <h3>Your choices</h3>
          <p>
            To access, correct, or delete information you&apos;ve sent us, email{" "}
            <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a className="text-link" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>. We&apos;ll
            respond within a reasonable time.
          </p>

          <h3>Children</h3>
          <p>
            The site is intended for adults arranging cabinetry and remodeling work. We do not
            knowingly collect information from children under 13.
          </p>

          <h3>Changes</h3>
          <p>
            If we change this policy, we&apos;ll update this page and the date above. Questions?
            Contact us at{" "}
            <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
