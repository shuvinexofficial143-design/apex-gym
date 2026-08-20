import { MemberShell } from "@/components/member/MemberShell";
import { ExerciseFilters } from "@/components/workout/ExerciseFilters";
import { MuscleTabs } from "@/components/workout/MuscleTabs";

export default function Page() {
  return (
    <MemberShell title="Exercise Library" subtitle="Search exercises by muscle group, equipment and training focus.">
      <MuscleTabs />
      <ExerciseFilters />
    </MemberShell>
  );
}
