import { MemberShell } from "@/components/member/MemberShell";
import { ChallengeCard } from "@/components/advanced/ChallengeCard";
import { challenges } from "@/lib/advanced-data";

export default function Page() {
  return (
    <MemberShell title="Gym Challenges" subtitle="Join structured challenges and build consistency through friendly competition.">
      <div className="grid-3">
        {challenges.map((challenge) => <ChallengeCard key={challenge.id} {...challenge} />)}
      </div>
    </MemberShell>
  );
}
