import Link from "next/link";
import { MemberShell } from "@/components/member/MemberShell";
import { CartPanel } from "@/components/advanced/CartPanel";

export default function Page() {
  return (
    <MemberShell title="Shopping Cart" subtitle="Review quantities and your estimated member total.">
      <CartPanel />
      <div style={{ marginTop: 18, textAlign: "right" }}>
        <Link href="/member/store/checkout" style={{ display: "inline-flex", minHeight: 48, alignItems: "center", padding: "0 18px", borderRadius: 13, background: "var(--accent)", color: "#080808", fontWeight: 1000 }}>
          Continue to Checkout
        </Link>
      </div>
    </MemberShell>
  );
}
