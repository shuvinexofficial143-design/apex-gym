import { MemberShell } from "@/components/member/MemberShell";
import { RecommendationsPanel } from "@/components/ai/RecommendationsPanel";

export default function Page() {
  return (
    <MemberShell title="Smart Recommendations" subtitle="Actionable suggestions from sample training, nutrition and attendance signals.">
      <RecommendationsPanel />
    </MemberShell>
  );
}
