"use client";

import { useState } from "react";
import { BarChart3, Search, Sparkles, Workflow } from "lucide-react";
import FlowDiagram from "./FlowDiagram";
import FlowHorizontal from "./FlowHorizontal";
import Reveal from "./Reveal";

const visibilityItems = [
  { icon: Workflow, text: "Website structure for search clarity" },
  { icon: Search, text: "Content aligned with real search intent" },
  { icon: BarChart3, text: "Visibility in Google search results" },
  { icon: Sparkles, text: "Signals that help your business get discovered" },
];

export default function VisibilitySystemSection() {
  const [showHowFoundMore, setShowHowFoundMore] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#050507_0%,#08101d_48%,#0f172a_100%)] text-white">
      <div className="aio-works-background-motion absolute inset-y-0 right-0 w-[72%] bg-[url('/aio-network-background.svg')] bg-[length:140%_100%] bg-right-bottom bg-no-repeat opacity-28" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.98)_0%,rgba(5,5,7,0.96)_28%,rgba(5,5,7,0.74)_58%,rgba(5,5,7,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(212,175,55,0.07),transparent_24%),radial-gradient(circle_at_78%_62%,rgba(56,84,134,0.18),transparent_30%)]" />

      <div className="relative">
        <section id="ai-explanation" className="relative mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-12 md:pb-24 md:pt-16">
          <div className="relative z-10 grid items-start gap-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] lg:gap-20">
            <div className="relative">
              <div className="pointer-events-none absolute -left-10 -top-12 h-112 w-md rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,rgba(75,106,171,0.04)_34%,transparent_70%)] blur-3xl" />

              <Reveal>
                <div className="relative max-w-md">
                  <h2 className="text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-[3.05rem]">
                    What We Improve
                  </h2>
                </div>
              </Reveal>

              <Reveal>
                <p className="relative mt-6 max-w-sm text-[15px] leading-8 text-gray-400 md:text-base">
                  We improve the parts of your website that help search engines understand your services and help customers find you more easily.
                </p>
              </Reveal>

              <Reveal>
                <button
                  type="button"
                  onClick={() => setShowHowFoundMore((current) => !current)}
                  className="mt-3 text-sm text-[#d4af37] hover:underline"
                >
                  {showHowFoundMore ? "Show less" : "Learn how this works →"}
                </button>
              </Reveal>

              {showHowFoundMore ? (
                <>
                  <Reveal>
                    <p className="relative mt-6 max-w-md text-[15px] leading-8 text-gray-400 md:text-base">
                      We align your site structure and content with how customers search and how modern search platforms interpret business information.
                    </p>
                  </Reveal>

                  <Reveal>
                    <p className="relative mt-6 max-w-md text-[15px] leading-8 text-gray-400 md:text-base">
                      We focus on clarity, search intent, and stronger visibility rather than vague promises about recommendations.
                    </p>
                  </Reveal>
                </>
              ) : null}

              <Reveal>
                <p className="relative mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]/80">
                  What we improve
                </p>
              </Reveal>

              <div className="relative mt-6 space-y-6">
                {visibilityItems.map(({ icon: Icon, text }) => (
                  <Reveal key={text}>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/18 bg-[#d4af37]/6 text-[#d4af37]/88">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-[15px] leading-7 text-gray-300 md:text-base">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:pt-28">
              <div className="hidden md:flex md:w-full md:justify-center lg:justify-start">
                <FlowHorizontal />
              </div>
              <div className="md:hidden">
                <FlowDiagram />
              </div>

              <Reveal>
                <p className="mx-auto mt-8 max-w-xl text-center text-gray-400">
                  This is how stronger structure and clearer content lead to better visibility across modern search.
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-12 flex justify-center">
                  <div className="h-0.5 w-40 bg-linear-to-r from-transparent via-[#d4af37]/60 to-transparent blur-[1px]" />
                </div>
              </Reveal>

              <Reveal>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]/80">
                  Outcome
                </p>
              </Reveal>

              <Reveal>
                <p className="mx-auto mt-6 max-w-xl text-center text-gray-400">
                  Your business becomes easier to understand, easier to find, and more likely to attract customers through search.
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-8 flex justify-center">
                  <div className="relative h-8 w-56">
                    <div className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.34)_0%,rgba(212,175,55,0.14)_45%,transparent_78%)] blur-md" />
                    <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-[#d4af37]/45 to-transparent" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
