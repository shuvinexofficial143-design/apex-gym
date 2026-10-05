import { MemberShell } from "@/components/member/MemberShell";
import { paymentHistory } from "@/lib/member-data";

export default function PaymentsPage() {
  return (
    <MemberShell title="Payments" subtitle="Membership billing history and payment-status workspace.">
      <div className="glass-card responsive-table apex-scroll">
        <div style={{ minWidth: 700 }}>
          {paymentHistory.map((item, index) => (
            <div
              key={item.invoice}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr .7fr .7fr",
                gap: 16,
                padding: 20,
                borderBottom: index === paymentHistory.length - 1 ? "none" : "1px solid var(--line)",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{item.invoice}</strong>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{item.date}</div>
              </div>
              <span>{item.description}</span>
              <strong>{item.amount === "—" ? "Recorded" : `₹${item.amount}`}</strong>
              <span className="accent">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </MemberShell>
  );
}
