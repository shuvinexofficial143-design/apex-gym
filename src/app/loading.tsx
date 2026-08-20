export default function Loading() {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", background: "#080808" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 54,
            height: 54,
            margin: "0 auto",
            borderRadius: 16,
            display: "grid",
            placeItems: "center",
            background: "var(--accent)",
            color: "#080808",
            fontWeight: 1000,
            fontSize: 24,
          }}
        >
          A
        </div>
        <div style={{ marginTop: 18, fontWeight: 1000, letterSpacing: ".14em" }}>LOADING APEX</div>
      </div>
    </main>
  );
}
