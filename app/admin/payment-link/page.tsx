"use client";

import { useState } from "react";

export default function GenerateLinkPage() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [days, setDays] = useState("14");
  const [passcode, setPasscode] = useState("");
  const [link, setLink] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    setError("");
    setCopied(false);

    try {
      setIsGenerating(true);

      const res = await fetch("/api/admin/generate-payment-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          name,
          project,
          days,
          passcode,
        }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (!res.ok || !data.url) {
        setLink("");
        setError(data.error || "Unable to generate link");
        return;
      }

      setLink(data.url);
    } catch {
      setLink("");
      setError("Unable to generate link");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyLink = async () => {
    if (!link) return;
    await navigator.clipboard.writeText(link);
    setCopied(true);
  };

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-2 text-2xl">Generate Payment Link</h1>
      <p className="mb-6 text-sm text-white/70">Creates a signed, expiring client link for secure checkout.</p>

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-3 block rounded bg-gray-800 p-2"
      />

      <input
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-3 block rounded bg-gray-800 p-2"
      />

      <input
        placeholder="Project"
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="mb-3 block rounded bg-gray-800 p-2"
      />

      <input
        placeholder="Expires in days (1-90)"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        className="mb-3 block rounded bg-gray-800 p-2"
      />

      <input
        type="password"
        placeholder="Admin passcode"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
        className="mb-3 block rounded bg-gray-800 p-2"
      />

      <button onClick={generate} className="rounded bg-yellow-500 px-4 py-2 text-black">
        {isGenerating ? "Generating..." : "Generate Signed Link"}
      </button>

      {error && <p className="mt-4 text-sm text-red-300">{error}</p>}

      {link && (
        <div className="mt-6">
          <p>Copy this:</p>
          <code className="mt-2 block rounded bg-gray-900 p-3">{link}</code>
          <button onClick={copyLink} className="mt-3 rounded border border-white/25 px-3 py-1 text-sm">
            {copied ? "Copied" : "Copy Link"}
          </button>
        </div>
      )}
    </div>
  );
}
