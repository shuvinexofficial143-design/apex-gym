import { MemberShell } from "@/components/member/MemberShell";
import { AIWorkoutGenerator } from "@/components/ai/AIWorkoutGenerator";

export default function Page() {
  return (
    <MemberShell title="AI Workout Generator" subtitle="Create a structured workout draft from your goal, schedule and equipment.">
      <AIWorkoutGenerator />
    </MemberShell>
  );
}
