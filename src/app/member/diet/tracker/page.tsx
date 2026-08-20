import { MemberShell } from "@/components/member/MemberShell";
import { NutritionLog } from "@/components/nutrition/NutritionLog";
import { WaterTracker } from "@/components/nutrition/WaterTracker";
export default function Page(){return <MemberShell title="Nutrition Tracker" subtitle="Log food, calories, protein and hydration."><NutritionLog/><div style={{marginTop:18}}><WaterTracker/></div></MemberShell>}
