import Link from "next/link";
import { MemberShell } from "@/components/member/MemberShell";
import { MuscleTabs } from "@/components/workout/MuscleTabs";
import { workoutSummary } from "@/lib/member-data";

export default function Page() {
  return (
    <MemberShell title="Workouts" subtitle="Plan sessions, explore exercises, log sets, review history and track personal records.">
      <MuscleTabs />

      <div className="workout-actions" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 14, marginBottom: 20 }}>
        {[
          ["Exercise Library", "/member/workouts/library", "Browse movements by muscle group."],
          ["Workout Logger", "/member/workouts/logger", "Track weight, sets and reps live."],
          ["Workout History", "/member/workouts/history", "Review completed sessions."],
          ["Personal Records", "/member/workouts/prs", "See your strongest lifts."],
        ].map(([title, href, copy]) => (
          <Link key={href} href={href} className="glass-card card-hover" style={{ padding: 22 }}>
            <div className="accent" style={{ fontSize: 11, fontWeight: 1000 }}>OPEN</div>
            <h2 style={{ margin: "8px 0", fontSize: 22 }}>{title}</h2>
            <p className="muted" style={{ lineHeight: 1.6, marginBottom: 0 }}>{copy}</p>
          </Link>
        ))}
      </div>

      <div style={{ display: "grid", gap: 14 }}>
        {workoutSummary.map((day) => (
          <article key={day.day} className="glass-card" style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" }}>
              <div>
                <div className="accent" style={{ fontSize: 12, fontWeight: 1000 }}>{day.day}</div>
                <h2 style={{ margin: "8px 0 0", fontSize: 28 }}>{day.focus}</h2>
              </div>
              <div className="muted">{day.duration}</div>
            </div>
            <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 20 }}>
              {day.exercises.map((item) => (
                <span key={item} style={{ padding: "9px 11px", borderRadius: 999, border: "1px solid var(--line)", fontSize: 12 }}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media(max-width:1050px){.workout-actions{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:620px){.workout-actions{grid-template-columns:1fr!important}}
      `}</style>
    </MemberShell>
  );
}
