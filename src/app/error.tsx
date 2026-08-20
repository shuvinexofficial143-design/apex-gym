"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", background: "#080808", padding: 24 }}>
      <div className="glass-card" style={{ maxWidth: 620, padding: 34 }}>
        <div className="eyebrow">Something went wrong</div>
        <h1 style={{ fontSize: 46, margin: "14px 0" }}>APEX hit an unexpected error.</h1>
        <p className="muted" style={{ lineHeight: 1.7 }}>
          Your data has not intentionally been changed by this screen. Try rendering the page again.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{ minHeight: 46, padding: "0 17px", borderRadius: 12, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" }}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
