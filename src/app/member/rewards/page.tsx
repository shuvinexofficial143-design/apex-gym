import { MemberShell } from "@/components/member/MemberShell";
import { RewardsWallet } from "@/components/advanced/RewardsWallet";

export default function Page() {
  return (
    <MemberShell title="Rewards" subtitle="Earn points from referrals, attendance, challenges and member milestones.">
      <RewardsWallet />
    </MemberShell>
  );
}
