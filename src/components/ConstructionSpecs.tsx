import React from "react";

/**
 * Shared spec block — plywood, Blum, dovetail.
 * The line that says "buying stock is not buying down."
 * Used on /cabinets, /cabinets/stock, /cabinets/custom.
 */
export default function ConstructionSpecs({ heading = "How every Vitrin cabinet is built" }: { heading?: string }) {
  return (
    <section aria-labelledby="construction-specs-heading">
      <div className="container">
        <div className="section-center">
          <span className="eyebrow">Construction</span>
          <h2 className="section-heading" id="construction-specs-heading">{heading}</h2>
          <p className="section-sub">
            The construction bar is the same for Vitrin Stock and Vitrin Signature. The difference is how each cabinet is made, not how well.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {[
            { title: "Plywood boxes", desc: "1/2-inch plywood sides, 3/4-inch top, bottom, and shelves. No particleboard." },
            { title: "Dovetail drawers", desc: "Solid-wood dovetail drawer boxes — 5/8-inch sides, captured plywood bottoms." },
            { title: "Blum hardware", desc: "Soft-close hinges and undermount slides on every drawer and door." },
            { title: "Finished in-house", desc: "Spray-finished in our dust-controlled booth. Touch-up kit included with every order." },
          ].map((s) => (
            <div key={s.title} className="card">
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
