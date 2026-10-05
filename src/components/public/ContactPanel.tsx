export function ContactPanel() {
  return (
    <div
      style={{
        marginTop: 42,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18,
      }}
      className="contact-grid"
    >
      <div className="glass-card" style={{ padding: 30 }}>
        <h3 style={{ fontSize: 30, marginTop: 0 }}>Talk to APEX</h3>
        <div style={{ display: "grid", gap: 18 }}>
          <a href="tel:+919876543210">
            <div className="muted">Phone</div>
            <strong>+91 98765 43210</strong>
          </a>
          <a href="mailto:hello@apexgym.com">
            <div className="muted">Email</div>
            <strong>hello@apexgym.com</strong>
          </a>
          <div>
            <div className="muted">Hours</div>
            <strong>Mon–Sat · 5:00 AM–11:00 PM</strong>
          </div>
        </div>
      </div>

      <div
        className="glass-card"
        style={{
          minHeight: 360,
          padding: 30,
          background:
            "radial-gradient(circle at 70% 30%, rgba(223,255,0,.22), transparent 24%), linear-gradient(145deg,#181818,#090909)",
        }}
      >
        <div className="eyebrow">Visit us</div>
        <h3 style={{ fontSize: 38, margin: "16px 0 10px" }}>Your strongest hour starts here.</h3>
        <p className="muted" style={{ lineHeight: 1.7 }}>
          Call or email the APEX team for branch details, directions, memberships and trial bookings.
        </p>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
