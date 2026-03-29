"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 50, y: 60 },
  { x: 120, y: 50 },
  { x: 200, y: 65 },
  { x: 280, y: 48 },
  { x: 360, y: 62 },
  { x: 440, y: 52 },
  { x: 520, y: 60 },
  { x: 600, y: 55 },
  { x: 680, y: 63 },
  { x: 760, y: 50 },
  { x: 840, y: 61 },
];

const connections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [0, 3],
  [2, 5],
  [4, 7],
  [6, 9],
  [1, 4],
  [3, 6],
  [5, 8],
  [7, 10],
];

export default function HeroLineVisual() {
  return (
    <svg
      className="h-20 w-full"
      viewBox="0 0 900 120"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(245,197,24,0.1)" />
          <stop offset="50%" stopColor="rgba(245,197,24,0.6)" />
          <stop offset="100%" stopColor="rgba(245,197,24,0.1)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animated connecting lines */}
      {connections.map((conn, idx) => {
        const start = nodes[conn[0]];
        const end = nodes[conn[1]];
        return (
          <motion.line
            key={`line-${idx}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity={0.4}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 0.5,
            }}
          />
        );
      })}

      {/* Animated nodes */}
      {nodes.map((node, idx) => (
        <motion.g key={`node-${idx}`}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="3"
            fill="rgba(245,197,24,0.8)"
            filter="url(#glow)"
            animate={{
              r: [3, 5, 3],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 0.4,
            }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="5"
            fill="none"
            stroke="rgba(245,197,24,0.4)"
            strokeWidth="0.5"
            animate={{
              r: [5, 8, 5],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 0.4,
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
