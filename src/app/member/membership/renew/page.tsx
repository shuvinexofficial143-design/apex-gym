import { MemberShell } from "@/components/member/MemberShell";
import { RenewalPanel } from "@/components/advanced/RenewalPanel";

export default function Page() {
  return (
    <MemberShell title="Renew Membership" subtitle="Choose a renewal period and confirm the next membership step with APEX.">
      <RenewalPanel />
    </MemberShell>
  );
}
