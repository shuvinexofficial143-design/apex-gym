"use client";

import { useEffect, useRef } from "react";

const particles = Array.from({ length: 28 }, (_, index) => ({
  x: (index * 37 + 11) % 100,
  y: (index * 61 + 17) % 100,
  size: 2 + (index % 4),
  delay: (index % 9) * -0.7,
  duration: 8 + (index % 7),
}));

export function AnimatedHeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    function handlePointer(event: PointerEvent) {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      rootRef.current?.style.setProperty("--mx", x.toFixed(3));
      rootRef.current?.style.setProperty("--my", y.toFixed(3));
    }

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return (
    <div ref={rootRef} className="apex-motion-bg" aria-hidden="true">
      <div className="apex-motion-bg__base" />
      <div className="apex-motion-bg__grid" />
      <div className="apex-motion-bg__beam apex-motion-bg__beam--one" />
      <div className="apex-motion-bg__beam apex-motion-bg__beam--two" />

      <div className="apex-motion-bg__rings">
        <span className="apex-ring apex-ring--one" />
        <span className="apex-ring apex-ring--two" />
        <span className="apex-ring apex-ring--three" />
      </div>

      <div className="apex-orb apex-orb--one" />
      <div className="apex-orb apex-orb--two" />
      <div className="apex-orb apex-orb--three" />

      <div className="apex-motion-bg__monogram">A</div>

      <div className="apex-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="apex-particle"
            style={
              {
                "--x": `${particle.x}%`,
                "--y": `${particle.y}%`,
                "--size": `${particle.size}px`,
                "--delay": `${particle.delay}s`,
                "--duration": `${particle.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="apex-motion-bg__scan" />
      <div className="apex-motion-bg__vignette" />

      <style>{`
        .apex-motion-bg {
          --mx: 0;
          --my: 0;
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          isolation: isolate;
        }

        .apex-motion-bg__base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 74% 46%, rgba(223,255,0,.10), transparent 19%),
            radial-gradient(circle at 90% 18%, rgba(223,255,0,.07), transparent 24%),
            linear-gradient(90deg, #070707 0%, #090909 47%, #0c0f05 100%);
        }

        .apex-motion-bg__grid {
          position: absolute;
          width: 120%;
          height: 90%;
          left: -10%;
          bottom: -42%;
          opacity: .17;
          transform:
            perspective(620px)
            rotateX(62deg)
            translate3d(
              calc(var(--mx) * -9px),
              calc(var(--my) * -5px),
              0
            );
          transform-origin: center top;
          background-image:
            linear-gradient(rgba(223,255,0,.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(223,255,0,.22) 1px, transparent 1px);
          background-size: 64px 64px;
          animation: apexGridTravel 13s linear infinite;
          mask-image: linear-gradient(to bottom, transparent 0%, black 22%, black 70%, transparent 100%);
        }

        .apex-motion-bg__rings {
          position: absolute;
          width: min(70vw, 920px);
          aspect-ratio: 1;
          right: -14vw;
          top: 5vh;
          transform:
            translate3d(
              calc(var(--mx) * -18px),
              calc(var(--my) * -14px),
              0
            );
          transition: transform .18s ease-out;
        }

        .apex-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(223,255,0,.20);
          box-shadow:
            0 0 80px rgba(223,255,0,.015),
            inset 0 0 80px rgba(223,255,0,.015);
        }

        .apex-ring::before,
        .apex-ring::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 24px rgba(223,255,0,.8);
        }

        .apex-ring::before {
          width: 8px;
          height: 8px;
          left: 13%;
          top: 24%;
        }

        .apex-ring::after {
          width: 5px;
          height: 5px;
          right: 9%;
          bottom: 31%;
        }

        .apex-ring--one {
          animation: apexRingRotate 20s linear infinite;
        }

        .apex-ring--two {
          inset: 9%;
          opacity: .62;
          animation: apexRingRotateReverse 15s linear infinite;
        }

        .apex-ring--three {
          inset: 22%;
          opacity: .36;
          border-style: dashed;
          animation: apexRingRotate 11s linear infinite;
        }

        .apex-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(2px);
          will-change: transform;
        }

        .apex-orb--one {
          width: 360px;
          height: 360px;
          right: 8%;
          top: 20%;
          background: radial-gradient(circle, rgba(223,255,0,.095), transparent 68%);
          animation: apexOrbFloatOne 8s ease-in-out infinite alternate;
        }

        .apex-orb--two {
          width: 260px;
          height: 260px;
          right: 32%;
          bottom: -8%;
          background: radial-gradient(circle, rgba(223,255,0,.07), transparent 68%);
          animation: apexOrbFloatTwo 10s ease-in-out infinite alternate;
        }

        .apex-orb--three {
          width: 220px;
          height: 220px;
          left: -6%;
          top: 38%;
          background: radial-gradient(circle, rgba(255,255,255,.028), transparent 68%);
          animation: apexOrbFloatOne 12s ease-in-out infinite alternate-reverse;
        }

        .apex-motion-bg__beam {
          position: absolute;
          height: 1px;
          width: 68vw;
          opacity: .23;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          filter: drop-shadow(0 0 8px rgba(223,255,0,.75));
        }

        .apex-motion-bg__beam--one {
          right: -8vw;
          top: 33%;
          transform: rotate(-21deg);
          animation: apexBeamPulse 4.6s ease-in-out infinite;
        }

        .apex-motion-bg__beam--two {
          right: -18vw;
          top: 62%;
          transform: rotate(-12deg);
          animation: apexBeamPulse 6.2s ease-in-out infinite reverse;
        }

        .apex-motion-bg__monogram {
          position: absolute;
          right: 8vw;
          bottom: 4vh;
          font-size: clamp(150px, 23vw, 340px);
          line-height: .8;
          font-weight: 1000;
          letter-spacing: -.09em;
          color: rgba(223,255,0,.038);
          transform:
            translate3d(
              calc(var(--mx) * -26px),
              calc(var(--my) * -18px),
              0
            );
          transition: transform .22s ease-out;
          animation: apexMonogramBreath 5s ease-in-out infinite;
        }

        .apex-particle {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          border-radius: 999px;
          background: rgba(223,255,0,.78);
          box-shadow: 0 0 12px rgba(223,255,0,.55);
          opacity: .16;
          animation: apexParticleFloat var(--duration) ease-in-out var(--delay) infinite;
        }

        .apex-motion-bg__scan {
          position: absolute;
          inset: -50% 0 auto;
          height: 28%;
          opacity: .05;
          background: linear-gradient(to bottom, transparent, var(--accent), transparent);
          animation: apexScan 9s linear infinite;
        }

        .apex-motion-bg__vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(7,7,7,.12), transparent 58%),
            radial-gradient(circle at center, transparent 44%, rgba(0,0,0,.36) 100%);
        }

        @keyframes apexGridTravel {
          from { background-position: 0 0, 0 0; }
          to { background-position: 0 64px, 64px 0; }
        }

        @keyframes apexRingRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes apexRingRotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes apexOrbFloatOne {
          from { transform: translate3d(-10px,-12px,0) scale(.96); opacity: .65; }
          to { transform: translate3d(24px,18px,0) scale(1.08); opacity: 1; }
        }

        @keyframes apexOrbFloatTwo {
          from { transform: translate3d(18px,12px,0) scale(1.02); opacity: .45; }
          to { transform: translate3d(-24px,-16px,0) scale(.92); opacity: .82; }
        }

        @keyframes apexBeamPulse {
          0%,100% { opacity: .08; transform: translateX(-4%) rotate(-18deg) scaleX(.85); }
          50% { opacity: .34; transform: translateX(6%) rotate(-18deg) scaleX(1.08); }
        }

        @keyframes apexParticleFloat {
          0%,100% { transform: translate3d(0,0,0) scale(.65); opacity: .08; }
          40% { opacity: .48; }
          50% { transform: translate3d(12px,-32px,0) scale(1); opacity: .52; }
        }

        @keyframes apexScan {
          from { transform: translateY(-120%); }
          to { transform: translateY(620%); }
        }

        @keyframes apexMonogramBreath {
          0%,100% { opacity: .62; filter: blur(0); }
          50% { opacity: 1; filter: blur(.4px); }
        }

        @media (max-width: 900px) {
          .apex-motion-bg__rings {
            width: 860px;
            right: -470px;
            top: 10%;
            opacity: .55;
          }

          .apex-motion-bg__grid {
            opacity: .11;
          }

          .apex-motion-bg__beam {
            opacity: .12;
          }

          .apex-motion-bg__monogram {
            right: -4vw;
            opacity: .6;
          }
        }

        @media (max-width: 620px) {
          .apex-motion-bg__rings {
            opacity: .32;
          }

          .apex-particle:nth-child(n+15) {
            display: none;
          }

          .apex-orb--two,
          .apex-motion-bg__beam--two {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .apex-motion-bg *,
          .apex-motion-bg *::before,
          .apex-motion-bg *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

