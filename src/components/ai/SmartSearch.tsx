"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const searchable = [
  { title: "Barbell Bench Press", type: "Exercise", href: "/member/workouts/exercise/barbell-bench-press", keywords: "chest press barbell strength" },
  { title: "Back Squat", type: "Exercise", href: "/member/workouts/exercise/back-squat", keywords: "legs squat barbell strength" },
  { title: "Diet Planner", type: "Nutrition", href: "/member/diet/planner", keywords: "meal diet calories nutrition" },
  { title: "BMI Calculator", type: "Tool", href: "/member/tools/bmi", keywords: "bmi body mass calculator" },
  { title: "TDEE Calculator", type: "Tool", href: "/member/tools/tdee", keywords: "calories maintenance energy" },
  { title: "Workout Logger", type: "Workout", href: "/member/workouts/logger", keywords: "sets reps weight log" },
  { title: "Gym Occupancy", type: "Gym", href: "/member/occupancy", keywords: "busy crowd live peak time" },
  { title: "QR Member Pass", type: "Membership", href: "/member/qr-pass", keywords: "qr entry pass check in" },
  { title: "Rewards", type: "Member", href: "/member/rewards", keywords: "points redeem referral" },
  { title: "AI Workout Generator", type: "AI", href: "/member/ai/workout", keywords: "generate plan artificial intelligence" },
  { title: "AI Diet Generator", type: "AI", href: "/member/ai/diet", keywords: "meal nutrition ai generate" },
  { title: "Class Booking", type: "Classes", href: "/member/classes", keywords: "hiit yoga group booking schedule" },
];

export function SmartSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchable.slice(0, 8);
    return searchable.filter((item) =>
      `${item.title} ${item.type} ${item.keywords}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="glass-card" style={{ padding: 18 }}>
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search workouts, tools, classes, member features..."
          style={{
            width: "100%",
            minHeight: 54,
            borderRadius: 15,
            border: "1px solid var(--line)",
            background: "#0e0e0e",
            color: "#fff",
            padding: "0 16px",
            outline: "none",
            fontSize: 16,
          }}
        />
      </div>

      <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
        {results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="glass-card card-hover"
            style={{
              padding: 18,
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              alignItems: "center",
            }}
          >
            <div>
              <strong>{item.title}</strong>
              <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{item.type}</div>
            </div>
            <span className="accent">→</span>
          </Link>
        ))}
      </div>

      {results.length === 0 ? <div className="glass-card muted" style={{ padding: 22, marginTop: 16 }}>No matching feature found.</div> : null}
    </div>
  );
}
