import { MemberShell } from "@/components/member/MemberShell";
import { ExerciseCard } from "@/components/workout/ExerciseCard";
import { MuscleTabs } from "@/components/workout/MuscleTabs";
import { exercises } from "@/lib/exercise-data";

export default function Page() {
  const list = exercises.filter((item) => item.muscle === "Shoulders");

  return (
    <MemberShell title="Shoulder Exercises" subtitle="Pressing and raise variations for strong shoulders.">
      <MuscleTabs />
      <div className="grid-3">
        {list.map((exercise) => <ExerciseCard key={exercise.slug} exercise={exercise} />)}
      </div>
    </MemberShell>
  );
}
