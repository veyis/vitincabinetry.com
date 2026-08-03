"use client";

import { useState, type FormEvent } from "react";

interface LeadMagnetProps {
  title: string;
  description: string;
  buttonText: string;
  downloadUrl: string;
}

export default function LeadMagnet({ title, description, buttonText, downloadUrl }: LeadMagnetProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);
    const payload = {
      firstName: String(data.get("firstName") ?? ""),
      email: String(data.get("email") ?? ""),
      projectType: "Lead Magnet Download",
      message: `Downloaded: ${title}`,
      honeypot: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      // Trigger download
      window.open(downloadUrl, "_blank");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ padding: "2rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--text)" }}>Success!</h3>
        <p style={{ color: "var(--text-secondary)", margin: 0 }}>
          Your download should start automatically. If it doesn&apos;t, <a href={downloadUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>click here</a>.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--text)" }}>{title}</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.5 }}>{description}</p>
      
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
          <div>
            <label htmlFor="lm-firstName" className="visually-hidden" style={{ display: "none" }}>First Name</label>
            <input 
              id="lm-firstName" 
              name="firstName" 
              type="text" 
              placeholder="First Name" 
              required 
              style={{ width: "100%", padding: "0.8rem", border: "1px solid var(--border)", background: "#fff" }} 
            />
          </div>
          <div>
            <label htmlFor="lm-email" className="visually-hidden" style={{ display: "none" }}>Email</label>
            <input 
              id="lm-email" 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              required 
              style={{ width: "100%", padding: "0.8rem", border: "1px solid var(--border)", background: "#fff" }} 
            />
          </div>
        </div>

        {status === "error" && (
          <div style={{ color: "#b00020", fontSize: "0.9rem" }}>Something went wrong. Please try again.</div>
        )}

        <button 
          type="submit" 
          className="btn-primary" 
          disabled={status === "submitting"}
          style={{ padding: "1rem", opacity: status === "submitting" ? 0.7 : 1 }}
        >
          {status === "submitting" ? "Sending..." : buttonText}
        </button>
      </form>
    </div>
  );
}
