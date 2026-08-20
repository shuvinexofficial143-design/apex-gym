import { MemberShell } from "@/components/member/MemberShell";
import { OccupancyGauge } from "@/components/advanced/OccupancyGauge";

export default function Page() {
  return (
    <MemberShell title="Gym Occupancy" subtitle="See estimated current load and choose a quieter training time.">
      <OccupancyGauge />
    </MemberShell>
  );
}
