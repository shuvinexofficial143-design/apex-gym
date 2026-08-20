import { MemberShell } from "@/components/member/MemberShell";
import { PRCard } from "@/components/workout/PRCard";
import { personalRecords } from "@/lib/workout-data";

export default function Page() {
  return (
    <MemberShell title="Personal Records" subtitle="Your strongest recorded lifts and recent performance milestones.">
      <div className="grid-3">
        {personalRecords.map((item) => <PRCard key={item.lift} {...item} />)}
      </div>
    </MemberShell>
  );
}
