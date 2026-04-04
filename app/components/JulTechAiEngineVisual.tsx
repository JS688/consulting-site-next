export default function JulTechAiEngineVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src="/anim.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 290, y: 102 },
  { x: 336, y: 72 },
  { x: 360, y: 124 },
  { x: 324, y: 160 },
  { x: 395, y: 96 },
  { x: 438, y: 132 },
  { x: 488, y: 94 },
  { x: 534, y: 136 },
  { x: 582, y: 102 },
  { x: 628, y: 140 },
  { x: 680, y: 106 },
  { x: 730, y: 142 },
  { x: 784, y: 112 },
  { x: 352, y: 214 },
  { x: 420, y: 244 },
  { x: 498, y: 218 },
  { x: 578, y: 250 },
  { x: 662, y: 224 },
  { x: 744, y: 246 },
];

const shortConnections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [2, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [4, 6],
  [6, 8],
  [8, 10],
  [10, 12],
  [3, 13],
  [13, 14],
  [14, 15],
  [15, 16],
  [16, 17],
  [17, 18],
  [5, 14],
  [7, 15],
  [9, 16],
  [11, 17],
  [12, 18],
];

const longRangeLinks = [
  [0, 8, 446, 24],
  [1, 10, 520, 18],
  [2, 11, 544, 44],
  [4, 12, 598, 30],
  [3, 15, 438, 286],
  [6, 17, 566, 294],
  [8, 18, 648, 306],
  [13, 10, 540, 150],
  [14, 11, 592, 182],
  [15, 12, 650, 168],
];

const curvedPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  cx: number,
  cy: number,
) => `M ${start.x} ${start.y} Q ${cx} ${cy} ${end.x} ${end.y}`;

const pointOnQuadratic = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  cx: number,
  cy: number,
  t: number,
) => {
  const u = 1 - t;
  const x = u * u * start.x + 2 * u * t * cx + t * t * end.x;
  const y = u * u * start.y + 2 * u * t * cy + t * t * end.y;
  return { x, y };
};

const pointTransition = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  cx: number,
  cy: number,
) => {
  const p0 = pointOnQuadratic(start, end, cx, cy, 0.06);
  const p1 = pointOnQuadratic(start, end, cx, cy, 0.28);
  const p2 = pointOnQuadratic(start, end, cx, cy, 0.52);
  const p3 = pointOnQuadratic(start, end, cx, cy, 0.76);
  const p4 = pointOnQuadratic(start, end, cx, cy, 0.94);
  return {
    cx: [p0.x, p1.x, p2.x, p3.x, p4.x],
    cy: [p0.y, p1.y, p2.y, p3.y, p4.y],
  };
};

const connections = [
  [1, 2],
  [2, 4],
  [4, 6],
  [6, 8],
  [8, 10],
  [10, 12],
  [4, 14],
  [6, 15],
  [8, 16],
  [10, 17],
  [12, 18],
];

export default function JulTechAiEngineVisual() {
  return (
    <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, 6, 0, -4, 0],
          y: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 1760 400"
          className="h-full w-full opacity-90"
          fill="none"
          aria-hidden="true"
        >
          <g transform="translate(-540 0) scale(2.45 1.28)">
            {shortConnections.map(([a, b], i) => {
              const start = nodes[a];
              const end = nodes[b];

              return (
                <g key={`${a}-${b}`}>
                  <motion.line
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke="rgba(222,204,138,0.34)"
                    strokeWidth="1.28"
                    strokeLinecap="round"
                    strokeDasharray="5 10"
                    animate={{ strokeDashoffset: [0, -34] }}
                    transition={{
                      duration: 7 + (i % 3),
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.12,
                    }}
                  />

                  <motion.circle
                    r="2.55"
                    fill="rgba(226,210,150,0.92)"
                    animate={{
                      cx: [start.x, end.x],
                      cy: [start.y, end.y],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5 + (i % 2),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.28,
                    }}
                  />
                </g>
              );
            })}

            {longRangeLinks.map(([a, b, cx, cy], i) => {
              const start = nodes[a];
              const end = nodes[b];
              const path = curvedPath(start, end, cx, cy);
              const travel = pointTransition(start, end, cx, cy);

              return (
                <g key={`curve-${a}-${b}`}>
                  <motion.path
                    d={path}
                    stroke="rgba(222,204,138,0.22)"
                    strokeWidth="1.18"
                    strokeLinecap="round"
                    strokeDasharray="6 14"
                    animate={{ strokeDashoffset: [0, -56] }}
                    transition={{
                      duration: 9 + (i % 3),
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.18,
                    }}
                  />
                  <motion.circle
                    r="2.45"
                    fill="rgba(226,210,150,0.9)"
                    animate={{
                      cx: travel.cx,
                      cy: travel.cy,
                      opacity: [0, 0.9, 0.5, 0.9, 0],
                    }}
                    transition={{
                      duration: 6.2 + (i % 2),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.24,
                    }}
                  />
                </g>
              );
            })}

            {connections.map(([a, b], i) => {
              const start = nodes[a];
              const end = nodes[b];

              return (
                <motion.line
                  key={`bridge-${a}-${b}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="rgba(222,204,138,0.26)"
                  strokeWidth="1.2"
                  strokeDasharray="4 12"
                  animate={{ strokeDashoffset: [0, -30] }}
                  transition={{
                    duration: 6.2 + (i % 4),
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.12,
                  }}
                />
              );
            })}

            {nodes.map((node, i) => (
              <motion.circle
                key={`${node.x}-${node.y}`}
                cx={node.x}
                cy={node.y}
                r={i % 5 === 0 ? "4.4" : "3.35"}
                fill="rgba(226,210,150,0.9)"
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [1, 1.18, 1],
                }}
                transition={{
                  duration: 3 + (i % 5) * 0.24,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.09,
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

