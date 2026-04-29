"use client";

import { motion } from "framer-motion";

const steps = [
  "Customer search",
  "Structured website",
  "Search engine understanding",
  "AI recommendation",
];

export default function FlowDiagram() {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="max-w-xs text-center text-xs uppercase tracking-widest text-[#d4af37]">
        How AI Search and Recommendations Work
      </p>

      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="text-center text-lg text-gray-300 transition-colors hover:text-[#d4af37]"
          >
            {step}
          </motion.p>

          {index < steps.length - 1 ? (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="mt-2 w-px bg-[linear-gradient(180deg,rgba(212,175,55,0.4),transparent)]"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}