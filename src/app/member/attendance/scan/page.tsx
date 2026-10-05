import { MemberShell } from "@/components/member/MemberShell";
import { QRAttendanceScanner } from "@/components/advanced/QRAttendanceScanner";

export default function Page() {
  return (
    <MemberShell title="QR Attendance" subtitle="Review the QR member-pass check-in experience.">
      <QRAttendanceScanner />
    </MemberShell>
  );
}
