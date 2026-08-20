import { MemberShell } from "@/components/member/MemberShell";
import { ExerciseCard } from "@/components/workout/ExerciseCard";
import { MuscleTabs } from "@/components/workout/MuscleTabs";
import { exercises } from "@/lib/exercise-data";

export default function Page() {
  const list = exercises.filter((item) => item.muscle === "Arms");

  return (
    <MemberShell title="Arm Exercises" subtitle="Biceps and triceps movements for complete arm training.">
      <MuscleTabs />
      <div className="grid-3">
        {list.map((exercise) => <ExerciseCard key={exercise.slug} exercise={exercise} />)}
      </div>
    </MemberShell>
  );
}
