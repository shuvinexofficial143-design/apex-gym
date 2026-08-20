import Link from "next/link";
import type { Exercise } from "@/lib/exercise-data";

export function ExerciseCard({ exercise }: { exercise: Exercise }) {
  return (
    <Link
      href={`/member/workouts/exercise/${exercise.slug}`}
      className="glass-card card-hover"
      style={{ padding: 22, display: "grid", gap: 14, minHeight: 220 }}
    >
      <div
        style={{
          minHeight: 110,
          borderRadius: 16,
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at 65% 25%, rgba(223,255,0,.18), transparent 28%), linear-gradient(145deg,#1b1b1b,#0b0b0b)",
          fontSize: 42,
          fontWeight: 1000,
          letterSpacing: "-.06em",
          color: "rgba(255,255,255,.14)",
        }}
      >
        {exercise.short}
      </div>
      <div>
        <div className="accent" style={{ fontSize: 11, fontWeight: 1000, textTransform: "uppercase", letterSpacing: ".12em" }}>
          {exercise.muscle}
        </div>
        <h3 style={{ margin: "8px 0 6px", fontSize: 22 }}>{exercise.name}</h3>
        <div className="muted" style={{ fontSize: 12 }}>{exercise.level} · {exercise.equipment}</div>
      </div>
    </Link>
  );
}
