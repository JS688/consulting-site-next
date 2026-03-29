"use client";

import { motion } from "framer-motion";

type Point = {
  x: number;
  y: number;
};

const neuronPoints: Point[] = [
  { x: 96, y: 96 },
  { x: 150, y: 84 },
  { x: 206, y: 108 },
  { x: 262, y: 78 },
  { x: 318, y: 104 },
  { x: 374, y: 88 },
  { x: 432, y: 116 },
  { x: 490, y: 92 },
  { x: 548, y: 122 },
  { x: 606, y: 96 },
  { x: 664, y: 84 },
  { x: 724, y: 112 },
  { x: 782, y: 90 },
  { x: 842, y: 118 },
  { x: 904, y: 96 },
  { x: 964, y: 82 },
  { x: 1026, y: 110 },
  { x: 1088, y: 88 },

  { x: 120, y: 160 },
  { x: 180, y: 142 },
  { x: 240, y: 174 },
  { x: 300, y: 150 },
  { x: 360, y: 182 },
  { x: 420, y: 156 },
  { x: 480, y: 170 },
  { x: 540, y: 146 },
  { x: 600, y: 176 },
  { x: 660, y: 154 },
  { x: 720, y: 168 },
  { x: 780, y: 146 },
  { x: 840, y: 178 },
  { x: 900, y: 152 },
  { x: 960, y: 170 },
  { x: 1020, y: 144 },
  { x: 1080, y: 176 },
  { x: 1140, y: 150 },

  { x: 96, y: 230 },
  { x: 154, y: 214 },
  { x: 210, y: 246 },
  { x: 270, y: 220 },
  { x: 330, y: 248 },
  { x: 390, y: 226 },
  { x: 450, y: 242 },
  { x: 510, y: 218 },
  { x: 570, y: 248 },
  { x: 630, y: 224 },
  { x: 690, y: 238 },
  { x: 750, y: 218 },
  { x: 810, y: 246 },
  { x: 870, y: 224 },
  { x: 930, y: 242 },
  { x: 990, y: 216 },
  { x: 1050, y: 246 },
  { x: 1110, y: 222 },
];

const links: Array<[number, number]> = [
  [0, 18],
  [1, 19],
  [2, 20],
  [3, 21],
  [4, 22],
  [5, 23],
  [6, 24],
  [7, 25],
  [8, 26],
  [9, 27],
  [10, 28],
  [11, 29],
  [12, 30],
  [13, 31],
  [14, 32],
  [15, 33],
  [16, 34],
  [17, 35],

  [18, 36],
  [19, 37],
  [20, 38],
  [21, 39],
  [22, 40],
  [23, 41],
  [24, 42],
  [25, 43],
  [26, 44],
  [27, 45],
  [28, 46],
  [29, 47],
  [30, 48],
  [31, 49],
  [32, 50],
  [33, 51],
  [34, 52],
  [35, 53],

  [1, 3],
  [3, 5],
  [5, 7],
  [7, 9],
  [9, 11],
  [11, 13],
  [13, 15],
  [15, 17],

  [19, 21],
  [21, 23],
  [23, 25],
  [25, 27],
  [27, 29],
  [29, 31],
  [31, 33],
  [33, 35],

  [37, 39],
  [39, 41],
  [41, 43],
  [43, 45],
  [45, 47],
  [47, 49],
  [49, 51],
  [51, 53],
];

const pathForLink = (a: Point, b: Point) => {
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2 - 12;
  return `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
};

export default function JulTechAiEngineVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-6, 3, -6],
          y: [0, -1, 0, 1, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1200 280"
          className="h-full w-full opacity-80"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="neuron-dot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="60%" stopColor="rgba(245,245,245,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
            </radialGradient>

            <filter id="neuron-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="neuron-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.34)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
            </linearGradient>
          </defs>

          {links.map(([aIndex, bIndex], index) => {
            const a = neuronPoints[aIndex];
            const b = neuronPoints[bIndex];

            return (
              <motion.path
                key={`${aIndex}-${bIndex}`}
                d={pathForLink(a, b)}
                stroke="url(#neuron-line)"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeDasharray="2 10"
                animate={{
                  opacity: [0.04, 0.18, 0.04],
                  strokeDashoffset: [0, -18],
                }}
                transition={{
                  duration: 4 + (index % 5) * 0.35,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.05,
                }}
              />
            );
          })}

          {neuronPoints.map((p, index) => (
            <g key={index}>
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={index % 7 === 0 ? 4.8 : 2.8}
                fill="url(#neuron-dot)"
                filter="url(#neuron-glow)"
                animate={{
                  opacity: [0.25, 0.95, 0.25],
                  scale: [0.85, 1.18, 0.85],
                }}
                transition={{
                  duration: 2.8 + (index % 6) * 0.22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
              />

              <motion.circle
                cx={p.x}
                cy={p.y}
                r={index % 7 === 0 ? 10 : 6}
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="0.7"
                animate={{
                  opacity: [0.12, 0, 0.12],
                  scale: [0.8, 1.28, 0.8],
                }}
                transition={{
                  duration: 3.6 + (index % 4) * 0.18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.12 + index * 0.03,
                }}
              />
            </g>
          ))}

          {Array.from({ length: 10 }).map((_, index) => {
            const aIndex = (index * 4) % neuronPoints.length;
            const bIndex = (aIndex + 9) % neuronPoints.length;
            const a = neuronPoints[aIndex];
            const b = neuronPoints[bIndex];
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2 - 18;

            return (
              <motion.circle
                key={`pulse-${index}`}
                r="2.2"
                fill="rgba(255,255,255,0.95)"
                animate={{
                  cx: [a.x, midX, b.x],
                  cy: [a.y, midY, b.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4.5 + index * 0.22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
              />
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
}