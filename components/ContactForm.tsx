// components/ContactForm.tsx
"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Example: client-side handling only. Replace with real POST to API or Formspree later.
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      // Simulate network/send delay
      await new Promise((r) => setTimeout(r, 600));
      // TODO: replace with fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) })
      alert(`Thanks ${payload.name || "there"} — we received your message.`);
      (e.target as HTMLFormElement).reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      alert("Something went wrong — please try again.");
      setStatus("idle");
    }
  };

  return (
    <form
      className="bg-transparent card p-6"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <input
        name="name"
        className="w-full mb-4 p-3 bg-black border border-gray-700 rounded text-white"
        placeholder="Your name"
      />
      <input
        name="email"
        type="email"
        className="w-full mb-4 p-3 bg-black border border-gray-700 rounded text-white"
        placeholder="Email"
      />
      <textarea
        name="message"
        className="w-full mb-4 p-3 bg-black border border-gray-700 rounded text-white"
        placeholder="Message"
        rows={4}
      />
      <div className="flex justify-end items-center gap-3">
        <div className="text-sm text-gray-400">{status === "sent" ? "Message sent" : ""}</div>
        <button
          type="submit"
          className="px-4 py-2 btn-gold rounded font-semibold"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}