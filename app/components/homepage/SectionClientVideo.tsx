"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionClientVideo() {
  return (
    <section className="relative -mb-5 -mt-5 overflow-hidden pb-0 pt-0 text-white md:-mb-7 md:-mt-7">
      <motion.div
        className="relative h-20 w-full overflow-hidden md:h-24 lg:h-28"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-black/35" />
        <video
          src="/logos/animation_polished.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block h-full w-full object-cover opacity-95"
        />
      </motion.div>
    </section>
  );
}
