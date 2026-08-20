import { MemberShell } from "@/components/member/MemberShell";
import { WorkoutHistoryList } from "@/components/workout/WorkoutHistoryList";

export default function Page() {
  return (
    <MemberShell title="Workout History" subtitle="Review completed sessions, volume, duration and consistency.">
      <WorkoutHistoryList />
    </MemberShell>
  );
}
