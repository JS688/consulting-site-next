#!/usr/bin/env node

import crypto from "crypto";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const value = argv[i + 1];

    if (!key.startsWith("--")) continue;
    out[key.slice(2)] = value;
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const amount = args.amount || "";
const name = args.name || "";
const project = args.project || "";
const baseUrl = args.baseUrl || process.env.PAY_LINK_BASE_URL || "http://localhost:3000";
const expiresDays = Number(args.days || 14);
const secret = process.env.PAY_LINK_SECRET || "";

if (!amount || !name || !project) {
  console.error("Missing fields. Example:");
  console.error('npm run make-pay-link -- --amount 1200 --name "Acme Corp" --project "SEO Sprint - April"');
  process.exit(1);
}

if (!secret) {
  console.error("PAY_LINK_SECRET is required in environment.");
  process.exit(1);
}

const exp = String(Math.floor(Date.now() / 1000) + expiresDays * 24 * 60 * 60);
const payload = `${amount}|${name}|${project}|${exp}`;
const sig = crypto.createHmac("sha256", secret).update(payload).digest("hex");

const params = new URLSearchParams({ amount, name, project, exp, sig });
const url = `${baseUrl.replace(/\/$/, "")}/pay?${params.toString()}`;

console.log("Payment link:");
console.log(url);
