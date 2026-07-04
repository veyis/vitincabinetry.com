import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use · Vitrin Cabinetry",
  description:
    "Terms of use for the Vitrin Cabinetry website — informational content, quotes and estimates, intellectual property, and limitation of liability.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <section className="subhero">
        <div className="container--narrow">
          <span className="eyebrow">Legal</span>
          <h1 className="section-heading">Terms of Use</h1>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Last updated: July 4, 2026
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container--narrow prose">
          <p>
            By using {site.url} (the &ldquo;Site&rdquo;), you agree to these terms. The Site is
            operated by {site.legalName} of Quakertown, Pennsylvania.
          </p>

          <h3>Informational content</h3>
          <p>
            Pages, guides, pricing tiers, and timelines on the Site are provided for general
            information. They describe how we typically work but are not a binding offer. Every
            project is different; the scope, price, and schedule that govern your project are the
            ones in your signed written proposal or contract with us.
          </p>

          <h3>Quotes and estimates</h3>
          <p>
            Figures on the Site (including starting prices and example budgets) are estimates for
            planning purposes. A quote becomes binding only when issued to you in writing and
            accepted within its stated validity period.
          </p>

          <h3>Portfolio and imagery</h3>
          <p>
            Some photography on the Site is representative of door styles, finishes, and materials
            rather than a specific named client project. Project stories describe real work
            patterns; identifying details may be changed.
          </p>

          <h3>Intellectual property</h3>
          <p>
            The Site&apos;s content — text, images, drawings, renderings, and branding — belongs to{" "}
            {site.legalName} or its licensors. You may not reproduce it commercially without our
            written permission. Design drawings and 3D renderings we prepare for your project
            remain our property until the project is paid for, as set out in your contract.
          </p>

          <h3>No warranty for the Site</h3>
          <p>
            The Site is provided &ldquo;as is.&rdquo; We work to keep it accurate and available but
            don&apos;t guarantee it will be error-free or uninterrupted. Product warranties for
            cabinetry and installation work are separate and defined in your project contract.
          </p>

          <h3>Limitation of liability</h3>
          <p>
            To the fullest extent permitted by law, {site.legalName} is not liable for indirect or
            consequential damages arising from use of the Site. Nothing here limits liability that
            cannot be limited under applicable law.
          </p>

          <h3>Governing law</h3>
          <p>
            These terms are governed by the laws of the Commonwealth of Pennsylvania. Disputes are
            subject to the state and federal courts covering Bucks County, PA.
          </p>

          <h3>Contact</h3>
          <p>
            Questions about these terms:{" "}
            <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
            <a className="text-link" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
