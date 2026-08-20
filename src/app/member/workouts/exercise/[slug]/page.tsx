import { notFound } from "next/navigation";
import { MemberShell } from "@/components/member/MemberShell";
import { ExerciseDetail } from "@/components/workout/ExerciseDetail";
import { exercises } from "@/lib/exercise-data";

export function generateStaticParams() {
  return exercises.map((exercise) => ({ slug: exercise.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exercise = exercises.find((item) => item.slug === slug);
  if (!exercise) notFound();

  return (
    <MemberShell title={exercise.name} subtitle={`${exercise.muscle} · ${exercise.level} · ${exercise.equipment}`}>
      <ExerciseDetail exercise={exercise} />
    </MemberShell>
  );
}
