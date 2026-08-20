import Link from "next/link";
import { MemberShell } from "@/components/member/MemberShell";
import { AIChat } from "@/components/ai/AIChat";

export default function Page() {
  return (
    <MemberShell title="AI Fitness Assistant" subtitle="Ask for practical training, nutrition, recovery and gym guidance.">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
        <Link href="/member/ai/workout" style={link}>AI Workout Generator</Link>
        <Link href="/member/ai/diet" style={link}>AI Diet Generator</Link>
        <Link href="/member/recommendations" style={link}>Smart Recommendations</Link>
      </div>
      <AIChat />
    </MemberShell>
  );
}

const link = { padding: "10px 13px", borderRadius: 12, border: "1px solid var(--line)", background: "#101010", fontSize: 12, fontWeight: 900 };
