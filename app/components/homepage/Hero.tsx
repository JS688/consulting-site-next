"use client";

import { useState } from "react";
import { CircleAlert, CircleX, Sparkles, TrendingUp, User } from "lucide-react";
import Link from "next/link";

const nodePositions = [
  { id: 0, cx: 200, cy: 60 },
  { id: 1, cx: 340, cy: 200 },
  { id: 2, cx: 200, cy: 340 },
  { id: 3, cx: 60, cy: 200 },
];

export default function Hero() {
  const [activeNodes, setActiveNodes] = useState<Set<number>>(new Set());

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 400;
    const my = ((e.clientY - rect.top) / rect.height) * 400;

    const next = new Set<number>();
    nodePositions.forEach(({ id, cx, cy }) => {
      const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);
      if (dist < 80) {
        next.add(id);
      }
    });
    setActiveNodes(next);
  };

  const handleMouseLeave = () => setActiveNodes(new Set());

  return (
    <section id="hero" className="relative overflow-hidden bg-black px-6 pb-28 pt-8 text-white">
      <style jsx>{`
        @keyframes flow {
          0% {
            stroke-dashoffset: 160;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.45);
            opacity: 1;
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px);
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translate(150px, -90px);
            opacity: 0;
          }
        }

        .signal line {
          stroke-dasharray: 20 140;
          animation: flow 1.6s linear infinite;
        }

        .signal line:nth-child(1) {
          animation-delay: 0s;
        }
        .signal line:nth-child(2) {
          animation-delay: 0.25s;
        }
        .signal line:nth-child(3) {
          animation-delay: 0.5s;
        }
        .signal line:nth-child(4) {
          animation-delay: 0.75s;
        }

        .center {
          transform-origin: center;
          animation: pulse 2.2s ease-in-out infinite;
        }

        .label {
          font-size: 9px;
          letter-spacing: 0.02em;
        }

        .label-google {
          fill: #f5c84c;
        }
        .label-ai {
          fill: #38bdf8;
        }
        .label-customers {
          fill: #22c55e;
        }
        .label-traffic {
          fill: #a855f7;
        }

        .node-google {
          fill: #f5c84c;
        }
        .node-ai {
          fill: #38bdf8;
        }
        .node-customers {
          fill: #22c55e;
        }
        .node-traffic {
          fill: #a855f7;
        }

        .ambient {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(245, 200, 76, 0.35);
          border-radius: 999px;
          animation: drift 10s infinite ease-in-out;
        }

        .ambient-1 {
          top: 16%;
          left: 20%;
          animation-delay: 0.2s;
        }
        .ambient-2 {
          top: 28%;
          left: 34%;
          animation-delay: 1.8s;
        }
        .ambient-3 {
          top: 52%;
          left: 18%;
          animation-delay: 3.1s;
        }
        .ambient-4 {
          top: 62%;
          left: 40%;
          animation-delay: 4.2s;
        }
        .ambient-5 {
          top: 76%;
          left: 26%;
          animation-delay: 5.4s;
        }
        .ambient-6 {
          top: 40%;
          left: 8%;
          animation-delay: 2.6s;
        }

        .dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 3px;
          height: 3px;
          background: rgba(245, 200, 76, 0.6);
          border-radius: 999px;
          transform: translate(-50%, -50%);
        }

        .d1 {
          animation: orbit 10s linear infinite;
        }
        .d2 {
          animation: orbit 12s linear infinite reverse;
        }
        .d3 {
          animation: orbit 14s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-yellow-400/10 opacity-60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto mb-10 flex max-w-6xl justify-center">
        <div className="flex items-center gap-3 rounded-full border border-yellow-400/20 bg-white/3 px-5 py-3 text-center shadow-[0_0_30px_rgba(245,200,76,0.08)] backdrop-blur-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400/12 text-yellow-400 shadow-[0_0_18px_rgba(245,200,76,0.35)]">
            <CircleAlert className="h-4 w-4" />
          </div>
          <p className="text-sm text-white md:text-base">
            <span className="font-semibold text-white">70%+</span> of searches now involve AI-assisted results.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-wide text-yellow-400">Search is changing —</p>

          <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
            and most businesses
            <br />
            aren&apos;t <span className="text-[#d4af37]">keeping up</span>
          </h2>

          <p className="mb-8 text-white/70">
            People aren&apos;t just clicking links anymore. They&apos;re asking AI what to trust, who to hire, and what to buy.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href="/free-appraisal"
              className="rounded-full bg-[#b88a0a] px-6 py-3 font-medium text-black transition hover:bg-[#c79812] hover:shadow-lg"
            >
              See How Your Business Can Rank in Google & AI →
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#d4af37]/70 bg-black/35 px-8 py-3 text-center font-medium text-[#c7a84d] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37]/8 hover:text-[#f3d46b]"
            >
              Talk to an Expert
            </Link>
          </div>

          <p className="mt-4 text-xs text-white/45">No commitment. Takes 2 minutes.</p>
        </div>

        <div className="relative hidden justify-end md:flex">
          <div className="absolute inset-0">
            <span className="ambient ambient-1" />
            <span className="ambient ambient-2" />
            <span className="ambient ambient-3" />
            <span className="ambient ambient-4" />
            <span className="ambient ambient-5" />
            <span className="ambient ambient-6" />
          </div>

          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="h-100 w-100"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <g stroke="rgba(245,200,76,0.15)" fill="none">
                <circle cx="200" cy="200" r="50" />
                <circle cx="200" cy="200" r="90" />
                <circle cx="200" cy="200" r="130" />
                <circle cx="200" cy="200" r="170" />
              </g>

              <g stroke="rgba(245,200,76,0.25)" strokeWidth="1">
                <line x1="200" y1="200" x2="200" y2="40" />
                <line x1="200" y1="200" x2="360" y2="200" />
                <line x1="200" y1="200" x2="200" y2="360" />
                <line x1="200" y1="200" x2="40" y2="200" />
              </g>

              <g stroke="#f5c84c" strokeWidth="2" fill="none" className="signal">
                <line x1="200" y1="200" x2="200" y2="40" className={activeNodes.has(0) ? "opacity-100" : "opacity-60"} />
                <line x1="200" y1="200" x2="360" y2="200" className={activeNodes.has(1) ? "opacity-100" : "opacity-60"} />
                <line x1="200" y1="200" x2="200" y2="360" className={activeNodes.has(2) ? "opacity-100" : "opacity-60"} />
                <line x1="200" y1="200" x2="40" y2="200" className={activeNodes.has(3) ? "opacity-100" : "opacity-60"} />
              </g>

              <g>
                <circle cx="200" cy="40" r="5" className="node-google" />
                <circle cx="360" cy="200" r="5" className="node-ai" />
                <circle cx="200" cy="360" r="5" className="node-customers" />
                <circle cx="40" cy="200" r="5" className="node-traffic" />
              </g>

              <circle cx="200" cy="200" r="7" fill="#f5c84c" className="center" />

              <text x="200" y="25" textAnchor="middle" className="label label-google">Google</text>
              <text x="372" y="205" textAnchor="start" className="label label-ai">AI</text>
              <text x="200" y="385" textAnchor="middle" className="label label-customers">Customers</text>
              <text x="28" y="205" textAnchor="end" className="label label-traffic">Traffic</text>
            </svg>

            <span className="dot d1" />
            <span className="dot d2" />
            <span className="dot d3" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-6xl text-center">
        <p className="mb-6 text-lg text-white/65">If you&apos;re not structured for AI visibility:</p>

        <div className="mb-12 grid gap-4 md:grid-cols-4">
          <div className="flex items-center gap-4 rounded-3xl border border-yellow-400/20 bg-white/2 px-5 py-5 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/35 bg-yellow-400/8 text-yellow-400">
              <CircleX className="h-5 w-5" />
            </div>
            <p className="text-white/88">Your website won&apos;t rank on Google</p>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border border-yellow-400/20 bg-white/2 px-5 py-5 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sky-400/35 bg-sky-400/8 text-sky-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-white/88">It won&apos;t show up in AI results</p>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border border-yellow-400/20 bg-white/2 px-5 py-5 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-400/35 bg-green-400/8 text-green-400">
              <User className="h-5 w-5" />
            </div>
            <p className="text-white/88">Customers won&apos;t find you when they&apos;re ready to buy</p>
          </div>

          <div className="flex items-center gap-4 rounded-3xl border border-yellow-400/20 bg-white/2 px-5 py-5 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-400/35 bg-violet-400/8 text-violet-400">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="text-white/88">Your competitors will take that traffic instead</p>
          </div>
        </div>

        <p className="mb-3 text-2xl text-white/70 md:text-3xl">This isn&apos;t about trends.</p>

        <p className="mx-auto mb-8 max-w-4xl text-2xl font-normal leading-tight text-white md:text-5xl">
          It&apos;s about whether your business
          <br />
          <span className="text-[#d4af37]">gets found</span> — or ignored.
        </p>

        <Link
          href="/free-appraisal"
          className="inline-block rounded-full bg-[#b88a0a] px-6 py-3 font-medium text-black transition hover:bg-[#c79812] hover:shadow-lg"
        >
          See Where You Stand →
        </Link>
      </div>
    </section>
  );
}
