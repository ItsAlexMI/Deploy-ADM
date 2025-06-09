"use client";
import React from "react";

export default function FallingFlowers() {
  return (
    <div className="falling-flowers-sidebar" aria-hidden="true">
      {[...Array(8)].map((_, i) => (
        <div
          key={`flower-fall-${i}`}
          className={`flower-fall flower-fall${i % 2 + 1}`}
          style={{
            left: `${10 + i * 10}%`,
            animationDelay: `${i * 0.9 + 0.3}s`,
            animationDuration: `${6 + Math.random() * 3}s`,
          }}
        />
      ))}
      <style>{`
        .falling-flowers-sidebar {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .flower-fall {
          position: absolute;
          top: -32px;
          width: 22px;
          height: 22px;
          background: pink;
          border-radius: 50%;
          box-shadow: 0 0 0 5px #fff0f6, 0 0 0 10px #f9a8d4;
          opacity: 0.8;
          animation: sidebarFallDown linear infinite;
        }
        .flower-fall2 {
          background: #fef08a;
          box-shadow: 0 0 0 5px #fef9c3, 0 0 0 10px #fde68a;
        }
        @keyframes sidebarFallDown {
          0% {
            opacity: 0;
            transform: translateY(-32px) scale(0.7) rotate(0deg);
          }
          10% { opacity: 0.7; }
          60% {
            opacity: 1;
            transform: translateY(60vh) scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) scale(1.1) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
