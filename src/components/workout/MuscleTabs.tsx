import Link from "next/link";

const tabs = [
  ["Library", "/member/workouts/library"],
  ["Chest", "/member/workouts/chest"],
  ["Back", "/member/workouts/back"],
  ["Legs", "/member/workouts/legs"],
  ["Shoulders", "/member/workouts/shoulders"],
  ["Arms", "/member/workouts/arms"],
  ["Abs", "/member/workouts/abs"],
  ["Cardio", "/member/workouts/cardio"],
];

export function MuscleTabs() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
      {tabs.map(([label, href]) => (
        <Link key={href} href={href} style={{ padding: "10px 13px", borderRadius: 999, border: "1px solid var(--line)", background: "#101010", fontSize: 12, fontWeight: 900 }}>
          {label}
        </Link>
      ))}
    </div>
  );
}
