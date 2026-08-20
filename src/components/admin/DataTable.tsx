import type { ReactNode } from "react";

export type DataColumn<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => ReactNode;
};

export function DataTable<T extends { id: string | number }>({
  rows,
  columns,
}: {
  rows: T[];
  columns: DataColumn<T>[];
}) {
  return (
    <div className="glass-card responsive-table apex-scroll">
      <div style={{ minWidth: Math.max(760, columns.length * 145) }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns.length}, minmax(120px, 1fr))`,
            gap: 12,
            padding: 16,
            borderBottom: "1px solid var(--line)",
            color: "var(--muted)",
            fontSize: 11,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: ".08em",
          }}
        >
          {columns.map((column) => <span key={String(column.key)}>{column.label}</span>)}
        </div>

        {rows.map((row, index) => (
          <div
            key={row.id}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns.length}, minmax(120px, 1fr))`,
              gap: 12,
              padding: 16,
              borderBottom: index === rows.length - 1 ? "none" : "1px solid var(--line)",
              alignItems: "center",
              fontSize: 13,
            }}
          >
            {columns.map((column) => (
              <div key={String(column.key)}>
                {column.render ? column.render(row) : String(row[column.key])}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
