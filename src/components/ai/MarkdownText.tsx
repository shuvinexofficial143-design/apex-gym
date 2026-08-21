import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : <span key={index}>{part}</span>
  );
}

export function MarkdownText({ text }: { text: string }) {
  return (
    <div>
      {text.replace(/\r/g, "").split("\n").map((raw, index) => {
        const line = raw.trim();
        if (!line) return <div key={index} style={{ height: 8 }} />;

        if (line.startsWith("### ")) {
          return <h3 key={index} style={{ fontSize: 18, margin: "8px 0 6px" }}>{inline(line.slice(4))}</h3>;
        }
        if (line.startsWith("## ")) {
          return <h2 key={index} style={{ fontSize: 21, margin: "10px 0 7px" }}>{inline(line.slice(3))}</h2>;
        }
        if (line.startsWith("# ")) {
          return <h1 key={index} style={{ fontSize: 24, margin: "10px 0 8px" }}>{inline(line.slice(2))}</h1>;
        }

        const bullet = line.match(/^[-•]\s+(.+)/);
        if (bullet) {
          return <div key={index} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 8, margin: "5px 0" }}><span className="accent">•</span><span>{inline(bullet[1])}</span></div>;
        }

        const numbered = line.match(/^(\d+)\.\s+(.+)/);
        if (numbered) {
          return <div key={index} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 8, margin: "5px 0" }}><span className="accent" style={{ fontWeight: 900 }}>{numbered[1]}.</span><span>{inline(numbered[2])}</span></div>;
        }

        return <p key={index} style={{ margin: "5px 0", lineHeight: 1.72 }}>{inline(line)}</p>;
      })}
    </div>
  );
}
