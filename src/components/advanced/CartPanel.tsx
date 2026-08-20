"use client";

import { useMemo, useState } from "react";
import { cartSeed } from "@/lib/advanced-data";

export function CartPanel() {
  const [items, setItems] = useState(cartSeed);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items],
  );

  function changeQty(id: string, delta: number) {
    setItems((current) =>
      current
        .map((item) => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
        .filter((item) => item.qty > 0)
    );
  }

  return (
    <div className="cart-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18 }}>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((item) => (
          <article key={item.id} className="glass-card" style={{ padding: 20, display: "grid", gridTemplateColumns: "1fr auto", gap: 16, alignItems: "center" }}>
            <div>
              <strong>{item.name}</strong>
              <div className="muted" style={{ marginTop: 5 }}>₹{item.price.toLocaleString("en-IN")} each</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <button type="button" onClick={() => changeQty(item.id, -1)} style={qtyButton}>−</button>
              <strong>{item.qty}</strong>
              <button type="button" onClick={() => changeQty(item.id, 1)} style={qtyButton}>+</button>
            </div>
          </article>
        ))}
        {items.length === 0 ? <div className="glass-card muted" style={{ padding: 24 }}>Your cart is empty.</div> : null}
      </div>

      <div className="glass-card" style={{ padding: 26, alignSelf: "start" }}>
        <div className="eyebrow">Order summary</div>
        <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
          <div style={row}><span className="muted">Subtotal</span><strong>₹{subtotal.toLocaleString("en-IN")}</strong></div>
          <div style={row}><span className="muted">Member discount</span><strong className="accent">−₹{Math.round(subtotal * 0.05).toLocaleString("en-IN")}</strong></div>
          <div style={row}><span>Estimated total</span><strong style={{ fontSize: 25 }}>₹{Math.round(subtotal * 0.95).toLocaleString("en-IN")}</strong></div>
        </div>
      </div>

      <style>{`@media(max-width:760px){.cart-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

const qtyButton = { width: 38, height: 38, borderRadius: 11, border: "1px solid var(--line)", background: "#111", color: "#fff", fontWeight: 1000, cursor: "pointer" };
const row = { display: "flex", justifyContent: "space-between", gap: 16, paddingBottom: 12, borderBottom: "1px solid var(--line)" };
