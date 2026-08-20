import { transformationStories } from "@/lib/public-data";

export function TransformationStories() {
  return (
    <div className="grid-3" style={{ marginTop: 42 }}>
      {transformationStories.map((story) => (
        <article key={story.name} className="glass-card" style={{ padding: 28 }}>
          <div
            style={{
              height: 200,
              borderRadius: 18,
              marginBottom: 22,
              background:
                "linear-gradient(90deg, rgba(255,255,255,.05) 50%, rgba(223,255,0,.14) 50%), linear-gradient(145deg,#222,#0c0c0c)",
            }}
          />
          <h3 style={{ fontSize: 25, margin: 0 }}>{story.name}</h3>
          <div className="accent" style={{ marginTop: 7, fontWeight: 900 }}>
            {story.result}
          </div>
          <p className="muted" style={{ lineHeight: 1.7 }}>
            {story.copy}
          </p>
          <div className="muted" style={{ fontSize: 12 }}>
            Coach: {story.coach} · {story.duration}
          </div>
        </article>
      ))}
    </div>
  );
}
