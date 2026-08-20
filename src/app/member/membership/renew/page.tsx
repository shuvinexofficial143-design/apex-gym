import { MemberShell } from "@/components/member/MemberShell";
import { RenewalPanel } from "@/components/advanced/RenewalPanel";

export default function Page() {
  return (
    <MemberShell title="Renew Membership" subtitle="Choose a renewal period and continue toward secure payment.">
      <RenewalPanel />
    </MemberShell>
  );
}
