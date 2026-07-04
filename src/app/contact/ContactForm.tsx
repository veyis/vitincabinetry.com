"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const ALLOWED_TYPES = [
  "trade",
  "install",
  "custom",
  "stock",
  "kitchen",
  "bath",
  "built-ins",
  "aging-in-place",
  "countertops",
  "flooring",
  "closets",
  "remodeling",
] as const;

type ProjectType = typeof ALLOWED_TYPES[number];

function normalizeType(input: string | null): ProjectType | "" {
  return (ALLOWED_TYPES as readonly string[]).includes(input ?? "") ? (input as ProjectType) : "";
}


type Status = "idle" | "submitting" | "success" | "error";

const inputStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid var(--border)",
  padding: "0.8rem",
  color: "var(--text)",
  borderRadius: "4px",
  font: "inherit",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  textTransform: "uppercase",
  color: "var(--text-secondary)",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillType = normalizeType(searchParams.get("type"));

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData(e.currentTarget);
    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      audienceType: String(data.get("audienceType") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      message: String(data.get("message") ?? ""),
      honeypot: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not send message");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Thank you.</h3>
        <p style={{ color: "var(--text-secondary)" }}>
          Your inquiry is in. Your dedicated rep will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      {/* Honeypot — hidden from humans, bots fill it */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label htmlFor="firstName" style={labelStyle}>First Name</label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name" style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label htmlFor="lastName" style={labelStyle}>Last Name</label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input id="email" name="email" type="email" required autoComplete="email" style={inputStyle} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" style={inputStyle} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label htmlFor="audienceType" style={labelStyle}>I&apos;m a…</label>
        <select id="audienceType" name="audienceType" required defaultValue="" style={inputStyle}>
          <option value="" disabled>— Select —</option>
          <option value="homeowner">Homeowner</option>
          <option value="contractor">General contractor / remodeler</option>
          <option value="installer">Kitchen &amp; bath installer</option>
          <option value="builder">Builder / developer</option>
          <option value="designer">Interior designer</option>
          <option value="architect">Architect</option>
          <option value="trade-other">Trade — other</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label htmlFor="projectType" style={labelStyle}>What you need</label>
        <select id="projectType" name="projectType" required defaultValue={prefillType} style={inputStyle}>
          <option value="" disabled>— Select —</option>
          <option value="stock">Vitrin Stock cabinets</option>
          <option value="custom">Vitrin Signature (custom kitchen)</option>
          <option value="kitchen">Kitchen cabinets</option>
          <option value="bath">Bath cabinets</option>
          <option value="built-ins">Built-ins / library / mudroom</option>
          <option value="aging-in-place">Aging-in-place cabinetry</option>
          <option value="remodeling">Kitchen / bath remodeling</option>
          <option value="countertops">Countertops</option>
          <option value="flooring">Flooring</option>
          <option value="closets">Custom closets</option>
          <option value="install">Installation add-on</option>
          <option value="trade">Trade pricing inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={5000}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Tell us about your project..."
        />
      </div>

      {status === "error" && (
        <div role="alert" style={{ color: "#b00020", fontSize: "0.9rem" }}>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        className="btn-primary"
        style={{ width: "100%", opacity: status === "submitting" ? 0.7 : 1 }}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
