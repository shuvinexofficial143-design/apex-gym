import { MemberShell } from "@/components/member/MemberShell";
import { ReferralCard } from "@/components/advanced/ReferralCard";

export default function Page() {
  return (
    <MemberShell title="Referral Program" subtitle="Invite friends and earn APEX reward points.">
      <ReferralCard />
    </MemberShell>
  );
}
