
"use client";
import { motion } from "framer-motion";

export default function HeroAmbientFlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden blur-[1px] opacity-60">

      {/* Animated spiral image background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        <img
          src="/animation.png"
          alt="Neural spiral background"
          className="w-full h-full object-cover opacity-80"
          draggable={false}
        />
      </motion.div>

      {/* Top ribbon */}
      {/* Top ribbon */}
      <motion.div
        className="absolute -top-28 left-[-12%] h-112 w-[140%] z-10"
        animate={{ x: [0, -20, 0], y: [0, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 1800 520"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flow-top" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M -120 220 C 140 120, 320 360, 560 250 S 980 120, 1260 220 S 1560 360, 1940 150"
            stroke="url(#flow-top)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="20 24"
            animate={{ strokeDashoffset: [0, -240] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </motion.div>

      {/* Left ribbon */}
      <motion.div
        className="absolute -left-28 top-0 h-full w-136"
        animate={{
          x: [0, 10, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 640 1200"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="flow-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="20%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.88)" />
              <stop offset="80%" stopColor="rgba(255,255,255,0.14)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 500 -100 C 420 100, 280 240, 320 420 S 460 760, 300 980 S 180 1180, 60 1320"
            stroke="url(#flow-left)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="18 22"
            animate={{ strokeDashoffset: [0, -260] }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </motion.div>

      {/* Tiny moving highlights */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 1800 900"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          {Array.from({ length: 18 }).map((_, i) => {
            const x = 120 + i * 92;
            const y = i % 3 === 0 ? 180 : i % 3 === 1 ? 240 : 140;

            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={i % 4 === 0 ? 3.6 : 2.2}
                fill="rgba(255,255,255,0.95)"
                animate={{
                  opacity: [0.08, 0.65, 0.08],
                  scale: [0.8, 1.45, 0.8],
                }}
                transition={{
                  duration: 3.4 + (i % 4) * 0.22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.12,
                }}
              />
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}