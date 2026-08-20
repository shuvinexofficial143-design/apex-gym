import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmartSearch } from "@/components/ai/SmartSearch";

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="section" style={{ paddingTop: 140, minHeight: "80svh" }}>
        <div className="container">
          <div className="eyebrow">Smart search</div>
          <h1 className="section-title">Find anything in APEX.</h1>
          <p className="section-copy">
            Search exercises, calculators, workouts, classes and member tools from one place.
          </p>
          <div style={{ marginTop: 36 }}>
            <SmartSearch />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
