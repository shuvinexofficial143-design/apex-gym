import { locations } from "@/lib/public-data";
import { Button } from "@/components/ui/Button";

export function LocationsGrid() {
  return (
    <div className="grid-3" style={{ marginTop: 42 }}>
      {locations.map((location) => (
        <article key={location.name} className="glass-card card-hover" style={{ padding: 28 }}>
          <div className="accent" style={{ fontSize: 12, fontWeight: 1000, textTransform: "uppercase" }}>
            {location.status}
          </div>
          <h3 style={{ fontSize: 28, margin: "10px 0" }}>{location.name}</h3>
          <p className="muted" style={{ lineHeight: 1.7 }}>{location.address}</p>
          <div style={{ display: "grid", gap: 8, margin: "22px 0" }}>
            <span>{location.hours}</span>
            <span className="muted">{location.features.join(" • ")}</span>
          </div>
          <Button href="/free-trial" variant="ghost" size="sm">Book Trial</Button>
        </article>
      ))}
    </div>
  );
}
