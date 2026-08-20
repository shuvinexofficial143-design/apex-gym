import { MemberShell } from "@/components/member/MemberShell";
import { AIDietGenerator } from "@/components/ai/AIDietGenerator";

export default function Page() {
  return (
    <MemberShell title="AI Diet Generator" subtitle="Build a practical meal structure from your calorie and protein targets.">
      <AIDietGenerator />
    </MemberShell>
  );
}
