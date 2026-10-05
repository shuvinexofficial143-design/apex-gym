import { transformationStories } from "@/lib/public-data";

export function TransformationStories() {
  return (
    <div className="grid-3" style={{ marginTop: 42 }}>
      {transformationStories.map((story, index) => (
        <article key={story.name} className="glass-card progress-story">
          <div className="progress-story-top">
            <span>0{index + 1}</span>
            <div className="accent">{story.result}</div>
          </div>
          <h3>{story.name}</h3>
          <p className="muted">{story.copy}</p>
          <div className="progress-story-foot">{story.duration}</div>

          <style>{`
            .progress-story{padding:28px;min-height:300px;display:flex;flex-direction:column}
            .progress-story-top{display:flex;align-items:center;justify-content:space-between;gap:12px}
            .progress-story-top>span{width:42px;height:42px;border-radius:13px;display:grid;place-items:center;background:var(--accent);color:#080808;font-weight:1000;font-size:11px}
            .progress-story-top .accent{font-size:12px;font-weight:900;text-align:right}
            .progress-story h3{font-size:28px;margin:34px 0 10px}
            .progress-story p{line-height:1.7;margin:0}
            .progress-story-foot{margin-top:auto;padding-top:26px;font-size:12px;font-weight:900;border-top:1px solid var(--line)}
          `}</style>
        </article>
      ))}
    </div>
  );
}
