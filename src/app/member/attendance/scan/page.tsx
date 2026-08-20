import { MemberShell } from "@/components/member/MemberShell";
import { QRAttendanceScanner } from "@/components/advanced/QRAttendanceScanner";

export default function Page() {
  return (
    <MemberShell title="QR Attendance" subtitle="Scan and validate a member pass for gym entry.">
      <QRAttendanceScanner />
    </MemberShell>
  );
}
