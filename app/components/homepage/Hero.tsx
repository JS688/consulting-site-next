"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// If you need containerVariants, define it here, above the component, not inside JSX
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/logos/background.png"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/55 to-black" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-10 pt-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-24 lg:pb-12 lg:pt-16 xl:gap-28">
        <motion.div
          variants={headerItemVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:justify-self-start lg:pr-6 lg:text-left"
        >
          <motion.h1
            variants={headerItemVariants}
            className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:mx-0 lg:max-w-xl lg:text-6xl"
          >
          <span className="relative inline-block">
  <span className="absolute inset-0 bg-[linear-gradient(110deg,#d4af37,#f5df9a,#d4af37)] opacity-15 blur-[18px]" />

  <span className="relative inline-block text-[#d4af37]">
    <span className="animate-[shine_6s_linear_infinite] bg-[linear-gradient(110deg,#d4af37,#f5df9a,#d4af37)] bg-size-[200%_100%] bg-clip-text text-transparent">
      Rank on Google. Get Chosen by AI.
    </span>
  </span>
</span>
          </motion.h1>

          <motion.p
            variants={headerItemVariants}
            className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-zinc-300 sm:text-2xl"
          >
          We design and build distinctive digital experiences for global brands, combining strategy, technology, and unique visual identity.
          </motion.p>

          <motion.p
            variants={headerItemVariants}
            className="mt-6 text-[12px] whitespace-nowrap text-zinc-400 sm:text-sm"
          >
            Multilingual execution: English, Spanish, Portuguese, Russian
          </motion.p>

          <motion.div
            variants={headerItemVariants}
            className="mt-14 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-yellow-400 bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]"
            >
              Start a Project
            </Link>
            <Link
              href="/free-appraisal"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400/50 hover:bg-white/10"
            >
              Get Free Audit
            </Link>
          </motion.div>

          <motion.p
            variants={headerItemVariants}
            className="mt-3 text-[13px] text-zinc-500"
          >
            Limited availability for new projects each month.
          </motion.p>
        </motion.div>

        <motion.div
          variants={headerItemVariants}
          initial="hidden"
          animate="visible"
          className="relative lg:justify-self-end lg:pl-6"
        >
          <div className="absolute -inset-4 rounded-[2.25rem] bg-[#d4af37]/8 blur-3xl" />
          <div className="relative h-72 w-full overflow-hidden rounded-[2.25rem] md:h-88 lg:h-102 lg:w-[min(100%,40rem)]">
            <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/10 to-black/70" />
            <video
              src="/newtry.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-75 saturate-90"
            />
          </div>
        
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent" />

      <motion.div
        variants={headerItemVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-4xl px-6 pb-4 text-center mt-16"
      >
        <p className="text-xl font-medium tracking-wide md:text-2xl">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-[linear-gradient(110deg,#d4af37,#f5df9a,#d4af37)] opacity-20 blur-xl" />
            <span className="relative inline-block animate-[shine_6s_linear_infinite] bg-[linear-gradient(110deg,#d4af37,#f5df9a,#d4af37)] bg-size-[200%_100%] bg-clip-text text-transparent">
              English • Spanish • Portuguese • Russian
            </span>
          </span>
        </p>
        <p className="mt-1 text-sm tracking-wide text-zinc-400 md:text-base">
          Be found. Be the answer. Be chosen.
        </p>

        <div className="mx-auto mt-16 h-px w-full max-w-3xl bg-linear-to-r from-transparent via-[#d4af37]/70 to-transparent" />
      </motion.div>
    </section>
  );
}