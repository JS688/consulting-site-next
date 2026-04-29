"use client";

import { useEffect, useRef } from "react";

interface NNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

interface Pulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export default function NeuralAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const ctx2d: CanvasRenderingContext2D = ctx;

    let animId: number;
    let W = 0;
    let H = 0;
    const NODE_COUNT = 65;
    const CONNECT_DIST = 170;
    const nodes: NNode[] = [];
    const pulses: Pulse[] = [];

    function resize() {
      W = canvasEl.offsetWidth;
      H = canvasEl.offsetHeight;
      canvasEl.width = W;
      canvasEl.height = H;
    }

    function initNodes() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          radius: Math.random() * 2 + 1.5,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function maybeSpawnPulse() {
      if (Math.random() > 0.08) return;
      const from = Math.floor(Math.random() * nodes.length);
      const nearby: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue;
        const dx = nodes[i].x - nodes[from].x;
        const dy = nodes[i].y - nodes[from].y;
        if (dx * dx + dy * dy < CONNECT_DIST * CONNECT_DIST) nearby.push(i);
      }
      if (nearby.length === 0) return;
      const to = nearby[Math.floor(Math.random() * nearby.length)];
      pulses.push({ from, to, progress: 0, speed: 0.007 + Math.random() * 0.007 });
    }

    function draw(time: number) {
      ctx2d.clearRect(0, 0, W, H);

      const waveT = time * 0.00035;

      // move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.011;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 > CONNECT_DIST * CONNECT_DIST) continue;
          const dist = Math.sqrt(dist2);
          const midX = (nodes[i].x + nodes[j].x) / 2;
          // wave brightness travels left→right across full width
          const wave = 0.5 + 0.5 * Math.sin((midX / W) * Math.PI * 5 - waveT * 4);
          const alpha = (1 - dist / CONNECT_DIST) * 0.22 * wave;
          ctx2d.beginPath();
          ctx2d.moveTo(nodes[i].x, nodes[i].y);
          ctx2d.lineTo(nodes[j].x, nodes[j].y);
          ctx2d.strokeStyle = `rgba(245,200,76,${alpha})`;
          ctx2d.lineWidth = 0.7;
          ctx2d.stroke();
        }
      }

      // draw pulses (signals traveling along edges)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) { pulses.splice(i, 1); continue; }
        const fn = nodes[p.from];
        const tn = nodes[p.to];
        const px = fn.x + (tn.x - fn.x) * p.progress;
        const py = fn.y + (tn.y - fn.y) * p.progress;
        const trail = 12;
        const grd = ctx2d.createRadialGradient(px, py, 0, px, py, trail);
        grd.addColorStop(0, "rgba(255,230,90,1)");
        grd.addColorStop(0.35, "rgba(245,200,76,0.55)");
        grd.addColorStop(1, "rgba(245,200,76,0)");
        ctx2d.beginPath();
        ctx2d.arc(px, py, trail, 0, Math.PI * 2);
        ctx2d.fillStyle = grd;
        ctx2d.fill();
      }

      // draw nodes
      for (const n of nodes) {
        const wave = 0.5 + 0.5 * Math.sin((n.x / W) * Math.PI * 5 - waveT * 4);
        const pulse = 0.55 + 0.45 * Math.sin(n.phase);
        const glowR = n.radius * (3.5 + 2.5 * pulse) * (0.65 + 0.35 * wave);

        // outer halo
        const halo = ctx2d.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR * 3.2);
        halo.addColorStop(0, `rgba(255,220,80,${0.75 * pulse * wave})`);
        halo.addColorStop(0.25, `rgba(245,200,76,${0.3 * pulse})`);
        halo.addColorStop(1, "rgba(245,200,76,0)");
        ctx2d.beginPath();
        ctx2d.arc(n.x, n.y, glowR * 3.2, 0, Math.PI * 2);
        ctx2d.fillStyle = halo;
        ctx2d.fill();

        // core dot
        ctx2d.beginPath();
        ctx2d.arc(n.x, n.y, n.radius + 0.5 * pulse, 0, Math.PI * 2);
        ctx2d.fillStyle = `rgba(255,240,130,${0.85 + 0.15 * pulse})`;
        ctx2d.fill();
      }

      maybeSpawnPulse();
      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => { resize(); initNodes(); });
    ro.observe(canvasEl);
    resize();
    initNodes();
    animId = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.65 }}
    />
  );
}
