"use client";
import React, { useState } from "react";

const LEAVES = 6;
const DROPS = 6;

function getStaticArray() {
  // Valores fijos para evitar problemas de SSR/CSR
  return Array.from({ length: LEAVES + DROPS }, (_, i) => {
    if (i < LEAVES) {
      // Hojas
      return {
        type: "leaf",
        left: 10 + i * 13,
        delay: 0.5 + i * 0.8,
        duration: 7 + (i % 3),
        rotate: -20 + (i % 3) * 20,
      };
    } else {
      // Gotas
      const j = i - LEAVES;
      return {
        type: "drop",
        left: 15 + j * 14,
        delay: 0.7 + j * 1.1,
        duration: 6 + (j % 2),
        rotate: 0,
      };
    }
  });
}

export default function FallingLeavesAndDrops() {
  const [elements] = useState(getStaticArray());

  // No Math.random en render, solo valores fijos

  return (
    <div className="falling-anim-sidebar" aria-hidden="true">
      {elements.map((el, i) =>
        el.type === "leaf" ? (
          <div
            key={`leaf-fall-${i}`}
            className={`fall leaf-fall leaf-fall${(i % 3) + 1}`}
            style={{
              left: `${el.left}%`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
              transform: `rotate(${el.rotate}deg)`
            }}
          />
        ) : (
          <div
            key={`drop-fall-${i}`}
            className="fall drop-fall"
            style={{
              left: `${el.left}%`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          />
        )
      )}
      <style>{`
        .falling-anim-sidebar {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .fall {
          position: absolute;
          top: -40px;
          opacity: 0.85;
          animation: fallDown 7s linear infinite;
        }
        .leaf-fall {
          width: 28px;
          height: 28px;
          background: radial-gradient(circle at 60% 40%, #7be495 70%, #3bb273 100%);
          border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
        }
        .leaf-fall2 {
          background: radial-gradient(circle at 60% 40%, #b6e388 70%, #5ca178 100%);
        }
        .leaf-fall3 {
          background: radial-gradient(circle at 60% 40%, #a3e635 70%, #65a30d 100%);
        }
        .drop-fall {
          width: 18px;
          height: 28px;
          background: radial-gradient(circle at 60% 40%, #7be4e4 70%, #3bb2b2 100%);
          border-radius: 50% 50% 60% 60%/60% 60% 100% 100%;
        }
        @keyframes fallDown {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(0.7) rotate(0deg);
          }
          10% { opacity: 0.7; }
          40% {
            transform: translateY(40vh) scale(0.9) rotate(60deg);
          }
          60% {
            opacity: 1;
            transform: translateY(60vh) scale(1) rotate(180deg);
          }
          80% {
            opacity: 1;
            transform: translateY(80vh) scale(1.05) rotate(270deg);
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
