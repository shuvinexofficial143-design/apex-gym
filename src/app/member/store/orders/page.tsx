import { MemberShell } from "@/components/member/MemberShell";
import { orders } from "@/lib/advanced-data";

export default function Page() {
  return (
    <MemberShell title="Orders" subtitle="Track member-store purchases and fulfilment status.">
      <div className="responsive-table apex-scroll">
        <div style={{ minWidth: 720, display: "grid", gap: 12 }}>
          {orders.map((order) => (
            <article
              key={order.id}
              className="glass-card"
              style={{
                padding: 20,
                display: "grid",
                gridTemplateColumns: "1fr 1fr .7fr .8fr",
                gap: 14,
                alignItems: "center",
              }}
            >
              <div><strong>{order.id}</strong><div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{order.date}</div></div>
              <span>{order.items}</span>
              <strong>₹{order.amount.toLocaleString("en-IN")}</strong>
              <span className="accent">{order.status}</span>
            </article>
          ))}
        </div>
      </div>
    </MemberShell>
  );
}
