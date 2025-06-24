"use client";

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="flex flex-col items-center">
      <div className="nature-anim mb-4">
        <div className="tree"></div>
        <div className="leaf leaf1"></div>
        <div className="leaf leaf2"></div>
        <div className="leaf leaf3"></div>
      </div>
      {/* Animación de hojas y flores cayendo en toda la página */}
      <div className="falling-objects" aria-hidden="true">
        {[...Array(14)].map((_, i) => {
          // Distribución más aleatoria y animación personalizada
          const left = Math.random() * 95;
          const duration = 6 + Math.random() * 3;
          const delay = Math.random() * 6;
          const rotate = Math.random() * 60 - 30;
          return (
            <div
              key={`leaf-fall-${i}`}
              className={`fall leaf-fall leaf-fall${i%3+1}`}
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                transform: `rotate(${rotate}deg)`
              }}
            />
          );
        })}
        {[...Array(8)].map((_, i) => {
          const left = Math.random() * 95;
          const duration = 7 + Math.random() * 3;
          const delay = Math.random() * 7;
          const rotate = Math.random() * 60 - 30;
          return (
            <div
              key={`flower-fall-${i}`}
              className={`fall flower-fall flower-fall${i%2+1}`}
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                transform: `rotate(${rotate}deg)`
              }}
            />
          );
        })}
      </div>
      <h1 className="mb-2 text-3xl font-bold text-green-800">Bienvenido a EcoSofía: Inteligencia Verde</h1>
      <p className="mb-2 text-fd-muted-foreground max-w-xl">
        Este espacio reúne recursos formales y didácticos sobre arquitectura x86, microcontroladores, memorias y microcontroladores PIC. Aquí encontrarás explicaciones estructuradas, ejemplos prácticos y simuladores interactivos para fortalecer tu aprendizaje universitario.<br/>
        <span className="text-green-700 font-medium">Inspirados en la naturaleza, cada concepto es una gota de conocimiento que nutre tu desarrollo profesional y el de tu entorno.</span>
      </p>
      <Link
        href="/docs"
        className="inline-block mt-2 px-6 py-2 bg-green-700 text-white rounded-full font-semibold shadow-md hover:bg-green-800 transition-colors"
      >
        Acceder a la documentación
      </Link>
      </div>
      <style jsx>{`
        .nature-anim {
          position: relative;
          width: 60px;
          height: 80px;
          margin-bottom: 1rem;
        }
        .tree {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 14px;
          height: 44px;
          background: #7c5e3c;
          border-radius: 7px;
          transform: translateX(-50%);
          z-index: 1;
          box-shadow: 0 0 4px #7c5e3c44;
        }
        .leaf {
          position: absolute;
          left: 50%;
          width: 36px;
          height: 36px;
          background: radial-gradient(circle at 60% 40%, #7be495 70%, #3bb273 100%);
          border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
          opacity: 0.85;
          animation: floatLeaf 2.5s infinite alternate ease-in-out;
        }
        .leaf1 {
          top: 10px;
          margin-left: -18px;
          z-index: 2;
          animation-delay: 0s;
        }
        .leaf2 {
          top: 0px;
          margin-left: -28px;
          width: 28px;
          height: 28px;
          opacity: 0.7;
          z-index: 1;
          animation-delay: 0.7s;
        }
        .leaf3 {
          top: 0px;
          margin-left: 10px;
          width: 22px;
          height: 22px;
          opacity: 0.6;
          z-index: 1;
          animation-delay: 1.2s;
        }
        @keyframes floatLeaf {
          0% { transform: translateX(-50%) scale(1) translateY(0); }
          100% { transform: translateX(-50%) scale(1.08) translateY(-10px); }
        }
        /* Hojas y flores cayendo */
        .falling-objects {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
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
          transform: rotate(-20deg);
        }
        .leaf-fall2 {
          background: radial-gradient(circle at 60% 40%, #b6e388 70%, #5ca178 100%);
          transform: rotate(15deg);
        }
        .leaf-fall3 {
          background: radial-gradient(circle at 60% 40%, #a3e635 70%, #65a30d 100%);
          transform: rotate(40deg);
        }
        .flower-fall {
          width: 24px;
          height: 24px;
          background: pink;
          border-radius: 50%;
          box-shadow: 0 0 0 6px #fff0f6, 0 0 0 12px #f9a8d4;
        }
        .flower-fall2 {
          background: #fef08a;
          box-shadow: 0 0 0 6px #fef9c3, 0 0 0 12px #fde68a;
        }
        @keyframes fallDown {
          0% {
            opacity: 0;
            transform: translateY(-40px) translateX(0) scale(0.7) rotate(0deg);
          }
          10% { opacity: 0.7; }
          40% {
            transform: translateY(40vh) translateX(-30px) scale(0.9) rotate(60deg);
          }
          60% {
            opacity: 1;
            transform: translateY(60vh) translateX(30px) scale(1) rotate(180deg);
          }
          80% {
            opacity: 1;
            transform: translateY(80vh) translateX(-20px) scale(1.05) rotate(270deg);
          }
          100% {
            opacity: 0;
            transform: translateY(100vh) translateX(0) scale(1.1) rotate(360deg);
          }
        }
        .drop {
          position: absolute;
          left: 50%;
          width: 16px;
          height: 24px;
          background: radial-gradient(circle at 60% 40%, #7be4e4 70%, #3bb2b2 100%);
          border-radius: 50% 50% 60% 60%/60% 60% 100% 100%;
          opacity: 0.85;
          animation: fallDrop 2.5s infinite;
        }
        .drop1 { top: 0px; margin-left: -30px; animation-delay: 0s; }
        .drop2 { top: 10px; margin-left: -10px; animation-delay: 0.7s; }
        .drop3 { top: 5px; margin-left: 10px; animation-delay: 1.2s; }
        .drop4 { top: 15px; margin-left: 25px; animation-delay: 1.7s; }
        .drop5 { top: 20px; margin-left: -20px; animation-delay: 2.1s; }
        .drop6 { top: 25px; margin-left: 20px; animation-delay: 2.4s; }
        @keyframes fallDrop {
          0% { opacity: 0; transform: translateY(-10px) scale(0.7); }
          10% { opacity: 0.7; }
          60% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateY(60px) scale(1.1); }
        }
      `}</style>
    </main>
  );
}
