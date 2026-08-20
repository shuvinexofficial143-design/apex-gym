"use client";

import { useMemo, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { exercises } from "@/lib/exercise-data";

export function ExerciseFilters() {
  const [query, setQuery] = useState("");
  const [muscle, setMuscle] = useState("All");
  const muscles = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Abs", "Cardio"];

  const filtered = useMemo(
    () =>
      exercises.filter((item) => {
        const matchesMuscle = muscle === "All" || item.muscle === muscle;
        const text = `${item.name} ${item.muscle} ${item.equipment}`.toLowerCase();
        return matchesMuscle && text.includes(query.toLowerCase());
      }),
    [query, muscle],
  );

  return (
    <>
      <div className="glass-card" style={{ padding: 18, display: "grid", gap: 14 }}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search exercise, muscle or equipment..."
          style={{
            minHeight: 48,
            borderRadius: 13,
            border: "1px solid var(--line)",
            background: "#0e0e0e",
            color: "#fff",
            padding: "0 15px",
            outline: "none",
          }}
        />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {muscles.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMuscle(item)}
              style={{
                minHeight: 38,
                padding: "0 13px",
                borderRadius: 999,
                border: muscle === item ? "1px solid var(--accent)" : "1px solid var(--line)",
                background: muscle === item ? "var(--accent)" : "#111",
                color: muscle === item ? "#080808" : "#fff",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-3" style={{ marginTop: 18 }}>
        {filtered.map((exercise) => <ExerciseCard key={exercise.slug} exercise={exercise} />)}
      </div>

      {filtered.length === 0 ? (
        <div className="glass-card muted" style={{ padding: 26, marginTop: 18 }}>No exercise matched your search.</div>
      ) : null}
    </>
  );
}
