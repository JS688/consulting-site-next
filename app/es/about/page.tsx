"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EsAboutPage() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-linear-to-b from-[#0b0b0b] via-[#121212] to-black px-6 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,64,0.08),transparent_60%)]"
      />

      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.3, 0.15], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="text-xs uppercase tracking-[0.45em] text-white/35"
        >
          Nosotros
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
          className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
        >
          Para quienes esperan
          <span className="relative ml-3 inline-block text-yellow-400">mas</span>
        </motion.h1>

        <div className="mt-10 max-w-3xl space-y-6 text-center text-lg leading-relaxed text-white/70 md:text-xl">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.45 }}>
            JulTech aborda cada proyecto con claridad y disciplina.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.45 }}>
            A traves de un analisis cuidadoso, identificamos lo que realmente importa y lo convertimos en direccion.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.45 }}>
            Disenamos experiencias digitales refinadas, inteligentes y construidas para rendir.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46, duration: 0.45 }}>
            Nos mantenemos involucrados y evolucionamos junto a nuestros clientes a medida que sus necesidades crecen.
          </motion.p>
        </div>

        <div className="mt-24 space-y-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-2xl font-medium text-white md:text-4xl">
            Construido para rendir. Disenado para dejar huella.
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }} className="text-xl text-white/72 md:text-3xl">
            No solo para ser visto.
          </motion.p>

          <motion.p initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.2em" }} whileInView={{ opacity: 1, scale: 1, letterSpacing: "0em" }} transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }} className="py-4 text-6xl font-extrabold tracking-tight text-yellow-400 md:py-6 md:text-8xl">
            SENTIDO.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }} className="mt-20 space-y-6 text-center">
            <p className="mx-auto max-w-2xl text-xl text-white/80 md:text-2xl">
              Redefinimos como las empresas son encontradas, confiadas y elegidas.
            </p>

            <Link href="/es/strategy-call/15-min" className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:bg-yellow-300">
              <span>Agenda una llamada estrategica</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="text-sm text-white/40">Proximos pasos claros. Sin presion.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}