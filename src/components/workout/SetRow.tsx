"use client";

export function SetRow({
  index, weight, reps, completed, onChange,
}: {
  index: number;
  weight: number;
  reps: number;
  completed: boolean;
  onChange: (field: "weight" | "reps" | "completed", value: number | boolean) => void;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "54px 1fr 1fr 90px", gap: 10, alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
      <strong>#{index + 1}</strong>
      <input type="number" min="0" value={weight} onChange={(e) => onChange("weight", Number(e.target.value))} style={input} />
      <input type="number" min="0" value={reps} onChange={(e) => onChange("reps", Number(e.target.value))} style={input} />
      <button
        type="button"
        onClick={() => onChange("completed", !completed)}
        style={{
          minHeight: 42,
          borderRadius: 12,
          border: completed ? "1px solid var(--accent)" : "1px solid var(--line)",
          background: completed ? "var(--accent)" : "#111",
          color: completed ? "#080808" : "#fff",
          fontWeight: 900,
          cursor: "pointer",
        }}
      >
        {completed ? "Done" : "Mark"}
      </button>
    </div>
  );
}

const input = {
  minHeight: 42,
  width: "100%",
  borderRadius: 12,
  border: "1px solid var(--line)",
  background: "#0e0e0e",
  color: "#fff",
  padding: "0 12px",
  outline: "none",
};
