import { MemberShell } from "@/components/member/MemberShell";
import { WorkoutLogger } from "@/components/workout/WorkoutLogger";

export default function Page() {
  return (
    <MemberShell title="Workout Logger" subtitle="Track weight, reps, completed sets and rest time during your session.">
      <WorkoutLogger />
    </MemberShell>
  );
}
