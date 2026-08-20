import { galleryItems } from "@/lib/public-data";

export function GalleryGrid() {
  return (
    <div
      style={{
        marginTop: 42,
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 14,
      }}
      className="gallery-grid"
    >
      {galleryItems.map((item, index) => (
        <article
          key={item.title}
          className="glass-card card-hover"
          style={{
            minHeight: index % 3 === 0 ? 320 : 240,
            gridColumn: index % 4 === 0 ? "span 7" : "span 5",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background:
              "radial-gradient(circle at 75% 25%, rgba(223,255,0,.17), transparent 24%), linear-gradient(145deg,#1a1a1a,#090909)",
          }}
        >
          <div className="muted" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".12em" }}>
            {item.type}
          </div>
          <h3 style={{ margin: "8px 0 0", fontSize: 28 }}>{item.title}</h3>
        </article>
      ))}

      <style>{`
        @media (max-width: 760px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid article { grid-column: auto !important; }
        }
      `}</style>
    </div>
  );
}
