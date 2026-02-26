"use client";

import { useState, FormEvent } from "react";

const sessionTypes = ["Maternity", "Family", "NB+Baby", "Events", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [loadedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _company: honeypot, _t: loadedAt }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", sessionType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-linen p-10 sm:p-14 text-center">
        <div className="w-14 h-14 rounded-full bg-blush/15 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blush">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-charcoal mb-3">Message Sent!</h3>
        <p className="font-body text-base text-charcoal/50 leading-relaxed mb-6">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-body text-[12px] tracking-[0.2em] uppercase text-blush hover:text-terracotta transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-linen p-8 sm:p-12">
      {/* Honeypot — hidden from humans, traps bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">
            Name <span className="text-blush">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full bg-transparent border-b border-charcoal/15 py-3 font-body text-base text-charcoal placeholder:text-charcoal/25 focus:border-blush focus:outline-none transition-colors duration-300"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">
            Email <span className="text-blush">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full bg-transparent border-b border-charcoal/15 py-3 font-body text-base text-charcoal placeholder:text-charcoal/25 focus:border-blush focus:outline-none transition-colors duration-300"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">
            Phone <span className="text-charcoal/25 normal-case tracking-normal">(optional)</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full bg-transparent border-b border-charcoal/15 py-3 font-body text-base text-charcoal placeholder:text-charcoal/25 focus:border-blush focus:outline-none transition-colors duration-300"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Session Type */}
        <div>
          <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">
            Session Type <span className="text-blush">*</span>
          </label>
          <select
            required
            value={form.sessionType}
            onChange={(e) => update("sessionType", e.target.value)}
            className="w-full bg-transparent border-b border-charcoal/15 py-3 font-body text-base text-charcoal focus:border-blush focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-charcoal/25">
              Select a session type
            </option>
            {sessionTypes.map((type) => (
              <option key={type} value={type} className="text-charcoal bg-cream">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-charcoal/50 mb-2">
            Message <span className="text-blush">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="w-full bg-transparent border-b border-charcoal/15 py-3 font-body text-base text-charcoal placeholder:text-charcoal/25 focus:border-blush focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Tell me about the moments you'd like to capture..."
          />
        </div>
      </div>

      {/* Error message */}
      {status === "error" && (
        <p className="font-body text-sm text-red-500 mt-4">
          Something went wrong. Please try again or call directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-10 w-full sm:w-auto font-body text-[12px] tracking-[0.25em] uppercase bg-blush text-cream px-12 py-4 hover:bg-terracotta transition-colors duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
