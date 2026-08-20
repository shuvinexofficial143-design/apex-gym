type Feature = {
  title: string;
  copy: string;
};

type FeatureGridProps = {
  items: Feature[];
};

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid-3" style={{ marginTop: 40 }}>
      {items.map((item, index) => (
        <article key={item.title} className="glass-card card-hover" style={{ padding: 28 }}>
          <div className="accent" style={{ fontSize: 13, fontWeight: 1000 }}>
            0{index + 1}
          </div>
          <h3 style={{ fontSize: 26, margin: "20px 0 10px", letterSpacing: "-.035em" }}>
            {item.title}
          </h3>
          <p className="muted" style={{ lineHeight: 1.7, marginBottom: 0 }}>
            {item.copy}
          </p>
        </article>
      ))}
    </div>
  );
}
