"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 md:pt-20">

      {/* 🔥 Animated Neural Spiral Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ willChange: 'transform' }}
      >
        <img
          src="/animation.jpg"
          alt="Neural spiral background"
          className="w-full h-full object-cover opacity-25 blur-[2px]"
          draggable={false}
        />
      </motion.div>

      {/* 🔥 Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* 🔥 Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-4xl font-semibold leading-tight text-yellow-400 md:text-5xl lg:text-6xl"
        >
          Hello Julia — NEW VERSION
        </motion.h1>

        {/* Subheadline */}
        <p className="mx-auto mt-4 max-w-full whitespace-nowrap text-lg leading-snug text-white md:text-xl">
          We build custom websites that communicate your value and attract the right clients.
        </p>

        {/* Proof */}
        <motion.p
          variants={lineVariants}
          initial="hidden"
          animate="show"
          className="mt-5 flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm tracking-wide text-gray-300 md:text-base"
        >
          <motion.span variants={itemVariants} className="text-yellow-300 font-medium">
            Built from scratch
          </motion.span>

          <motion.span variants={itemVariants} className="text-white/40">
            •
          </motion.span>

          <motion.span variants={itemVariants} className="text-yellow-300 font-medium">
            No templates
          </motion.span>

          <motion.span variants={itemVariants} className="text-white/40">
            •
          </motion.span>

          <motion.span variants={itemVariants} className="text-yellow-300 font-medium">
            Designed for real business results
          </motion.span>
        </motion.p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

          <Link
            href="/services"
            className="rounded-lg bg-[rgb(245,197,24)] px-6 py-3 font-medium text-black shadow-[0_0_14px_rgba(245,197,24,0.18)] transition-all hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(245,197,24,0.28)]"
          >
            Get Your Custom Website
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-white/10 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
          >
            Book a Free Consultation
          </Link>

        </div>

        {/* Testimonial */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border border-[rgb(245,197,24)]/20 bg-zinc-900/70 p-6 text-left backdrop-blur-sm shadow-[0_0_24px_rgba(245,197,24,0.08)]">

            <p className="text-sm leading-relaxed text-white/80 italic md:text-base">
              “Working with Julia completely changed how we present our business.
              The website feels clear, modern, and finally reflects who we are.”
            </p>

            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-sm font-medium text-white">Natalie Hodge</p>
              <p className="text-xs tracking-wide text-white/50">Client</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}