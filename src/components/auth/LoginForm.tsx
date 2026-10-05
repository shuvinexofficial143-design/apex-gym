import Link from "next/link";

export function LoginForm() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="glass-card" style={{ padding: 20 }}>
        <div className="accent" style={{ fontSize: 11, fontWeight: 1000, letterSpacing: ".12em" }}>
          MEMBER EXPERIENCE
        </div>
        <h3 style={{ fontSize: 24, margin: "10px 0 8px" }}>Explore the member portal.</h3>
        <p className="muted" style={{ lineHeight: 1.65, margin: 0 }}>
          Preview workouts, progress, attendance, nutrition tools and the digital member journey.
        </p>
      </div>

      <Link href="/member" style={primary}>Open Member Experience</Link>
      <Link href="/" style={secondary}>Back to Website</Link>
    </div>
  );
}

const primary = {
  minHeight: 52,
  borderRadius: 14,
  background: "var(--accent)",
  color: "#080808",
  fontWeight: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const secondary = {
  ...primary,
  background: "#111",
  color: "#fff",
  border: "1px solid var(--line)",
};
