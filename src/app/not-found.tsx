import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        background: "radial-gradient(circle at 70% 25%,rgba(223,255,0,.14),transparent 25%),#080808",
        padding: 24,
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 760 }}>
        <div className="accent" style={{ fontSize: 110, fontWeight: 1000, letterSpacing: "-.08em" }}>404</div>
        <h1 style={{ fontSize: "clamp(42px,8vw,82px)", margin: "0 0 16px", letterSpacing: "-.06em" }}>Wrong training zone.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>The page you requested does not exist or has moved.</p>
        <Link href="/" style={{ display: "inline-flex", marginTop: 18, minHeight: 48, alignItems: "center", padding: "0 18px", borderRadius: 13, background: "var(--accent)", color: "#080808", fontWeight: 1000 }}>
          Return Home
        </Link>
      </div>
    </main>
  );
}
