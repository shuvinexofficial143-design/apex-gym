import { MemberShell } from "@/components/member/MemberShell";
import { LeaderboardTable } from "@/components/advanced/LeaderboardTable";

export default function Page() {
  return (
    <MemberShell title="Leaderboard" subtitle="Compare consistency points, challenge score and training streaks.">
      <LeaderboardTable />
    </MemberShell>
  );
}
