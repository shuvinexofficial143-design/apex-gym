"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TransformationSlider() {
  const [value, setValue] = useState(58);

  return (
    <section id="transformations" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Real progress"
          title="Transformation is measurable."
          copy="This interactive preview will later connect to member transformation stories, progress photos, weight history and trainer-led case studies."
        />

        <div
          className="glass-card"
          style={{
            marginTop: 44,
            overflow: "hidden",
            minHeight: 440,
            position: "relative",
            background: "linear-gradient(135deg,#111,#050505)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 25% 30%, rgba(255,255,255,.1), transparent 26%), linear-gradient(130deg,#272727,#111)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: `${value}%`,
              overflow: "hidden",
              borderRight: "2px solid var(--accent)",
              background:
                "radial-gradient(circle at 30% 30%, rgba(223,255,0,.25), transparent 28%), linear-gradient(130deg,#1b2410,#0b0f07)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 28,
                bottom: 28,
                color: "var(--accent)",
                fontSize: 14,
                fontWeight: 1000,
                letterSpacing: ".15em",
              }}
            >
              AFTER · 16 WEEKS
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: 28,
              bottom: 28,
              fontSize: 14,
              fontWeight: 1000,
              letterSpacing: ".15em",
            }}
          >
            BEFORE
          </div>

          <input
            aria-label="Transformation comparison"
            type="range"
            min="12"
            max="88"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            style={{
              position: "absolute",
              left: 24,
              right: 24,
              bottom: 78,
              width: "calc(100% - 48px)",
              accentColor: "var(--accent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
