import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReferencePromoLanding } from "@/components/home/ReferencePromoLanding";

export default function Home() {
  return (
    <main style={{ overflowX: "clip" }}>
      <Navbar />
      <ReferencePromoLanding />
      <Footer />
    </main>
  );
}
