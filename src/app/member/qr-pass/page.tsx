import { MemberShell } from "@/components/member/MemberShell";
import { QRPass } from "@/components/advanced/QRPass";

export default function Page() {
  return (
    <MemberShell title="QR Member Pass" subtitle="Your digital gym entry pass for fast check-in.">
      <QRPass />
    </MemberShell>
  );
}
