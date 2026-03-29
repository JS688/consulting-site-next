"use client";
import React from "react";

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <img
          src="/animation.jpg"
          alt="Neural spiral background"
          className="w-full h-full object-cover spin-slow opacity-30"
          draggable={false}
        />
      </div>
    </div>
  );
}
