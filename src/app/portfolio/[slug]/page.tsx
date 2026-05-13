import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { projects, getProject } from "@/lib/projects";
import { breadcrumbSchema, portfolioProjectJsonLd, toJsonLd } from "@/lib/schema";
import { shareMetadata } from "@/lib/seo";

type PageParams = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — Project by Vitrin Cabinetery`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${slug}` },
    ...shareMetadata(`/portfolio/${slug}`, title, project.summary, {
      imagePath: project.image,
      imageAlt: project.title,
    }),
  };
}

export default async function ProjectPage({ params }: PageParams) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const pageUrl = `${site.url}/portfolio/${slug}`;
  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const creativeWorkSchema = portfolioProjectJsonLd({
    name: project.title,
    description: project.summary,
    url: pageUrl,
    imageUrl: `${site.url}${project.image}`,
    dateCreated: `${project.year}-01-01`,
    locationCreated: project.town,
    keywords: [project.style, project.town, ...project.scope].join(", "),
  });

  return (
    <main>
      <Navbar />

      <section className="subhero" style={{ paddingBottom: "40px" }}>
        <div className="container--narrow">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span className="sep">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <div style={{ color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "0.6rem" }}>
            {project.style} · {project.town} · {project.year}
          </div>
          <h1 className="section-heading">{project.title}</h1>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>{project.summary}</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div
            className="img-placeholder"
            style={{ minHeight: "520px", marginBottom: "2rem" }}
            role="img"
            aria-label={`${project.title} — hero photo coming soon`}
          >
            {project.title} — hero photo coming soon
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="img-placeholder"
                style={{ minHeight: "240px" }}
                role="img"
                aria-label={`${project.title} — detail ${i} coming soon`}
              >
                Detail {i} — coming soon
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--surface">
        <div className="container">
          <div className="two-col">
            <div className="prose">
              <span className="eyebrow">The Project</span>
              <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>How it came together.</h2>
              {project.story.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div>
              <div className="card" style={{ background: "#fff" }}>
                <div style={{ color: "var(--primary)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "1rem" }}>Project Details</div>
                <dl style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0.6rem 1rem", fontSize: "0.95rem" }}>
                  <dt style={{ color: "var(--text-secondary)" }}>Town</dt>
                  <dd>{project.town}, PA</dd>
                  <dt style={{ color: "var(--text-secondary)" }}>Year</dt>
                  <dd>{project.year}</dd>
                  <dt style={{ color: "var(--text-secondary)" }}>Style</dt>
                  <dd>{project.style}</dd>
                  <dt style={{ color: "var(--text-secondary)" }}>Scope</dt>
                  <dd>{project.scope.join(", ")}</dd>
                </dl>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/contact" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-center">
            <span className="eyebrow">More Projects</span>
            <h2 className="section-heading">Other recent work.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/portfolio/${r.slug}`}
                style={{ display: "block", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", background: "#fff" }}
              >
                <div className="img-placeholder" style={{ minHeight: "200px", border: "none", borderRadius: 0, fontSize: "0.8rem" }} role="img" aria-label={`${r.title} preview`}>
                  {r.title}
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ color: "var(--primary)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0.4rem" }}>
                    {r.style}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>{r.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{r.summary}</p>
                </div>
              </Link>
            ))}
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
              { name: "Portfolio", url: `${site.url}/portfolio` },
              { name: project.title, url: pageUrl },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(creativeWorkSchema) }} />
    </main>
  );
}
