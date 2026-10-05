import { FitnessPhoto } from "@/components/home/FitnessPhoto";
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
          className="gallery-card"
          style={{
            minHeight: index % 3 === 0 ? 340 : 260,
            gridColumn: index % 4 === 0 ? "span 7" : "span 5",
          }}
        >
          <FitnessPhoto src={item.src} alt={item.title} className="gallery-photo" />
          <div className="gallery-overlay" />
          <div className="gallery-copy">
            <div className="muted" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".12em" }}>
              {item.type}
            </div>
            <h3 style={{ margin: "8px 0 0", fontSize: 28 }}>{item.title}</h3>
          </div>
        </article>
      ))}

      <style>{`
        .gallery-card{
          position:relative;
          overflow:hidden;
          border-radius:26px;
          border:1px solid var(--line);
          background:#111;
          transition:transform .22s ease,border-color .22s ease;
        }
        .gallery-card:hover{transform:translateY(-4px);border-color:rgba(223,255,0,.3)}
        .gallery-photo{position:absolute!important;inset:0}
        .gallery-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.82) 88%)}
        .gallery-copy{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:24px}
        @media (max-width: 760px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid article { grid-column: auto !important; min-height:320px!important; }
        }
      `}</style>
    </div>
  );
}
