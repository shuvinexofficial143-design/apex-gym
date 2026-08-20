import Link from "next/link";
import { MemberShell } from "@/components/member/MemberShell";
import { ProductCard } from "@/components/advanced/ProductCard";
import { storeProducts } from "@/lib/advanced-data";

export default function Page() {
  return (
    <MemberShell title="APEX Store" subtitle="Gym merchandise, accessories and member essentials.">
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 18 }}>
        <Link href="/member/store/orders" style={link}>Orders</Link>
        <Link href="/member/store/cart" style={link}>Cart</Link>
      </div>
      <div className="grid-3">
        {storeProducts.map((product) => <ProductCard key={product.id} {...product} />)}
      </div>
    </MemberShell>
  );
}

const link = { padding: "10px 14px", borderRadius: 12, border: "1px solid var(--line)", background: "#101010", fontWeight: 900, fontSize: 12 };
