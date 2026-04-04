"use client";
import React from "react";

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
      </div>
    </div>
  );
}
