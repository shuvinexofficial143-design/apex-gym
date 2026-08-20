import { MemberShell } from "@/components/member/MemberShell";
import { attendanceHistory } from "@/lib/member-data";

export default function AttendancePage() {
  return (
    <MemberShell title="Attendance" subtitle="Your recent gym check-ins and consistency history.">
      <div className="glass-card responsive-table apex-scroll">
        <div style={{ minWidth: 680 }}>
          {attendanceHistory.map((item, index) => (
            <div
              key={`${item.date}-${item.time}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr .8fr .8fr",
                gap: 16,
                padding: 20,
                borderBottom: index === attendanceHistory.length - 1 ? "none" : "1px solid var(--line)",
              }}
            >
              <strong>{item.date}</strong>
              <span>{item.time}</span>
              <span className="muted">{item.duration}</span>
              <span className="accent">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </MemberShell>
  );
}
