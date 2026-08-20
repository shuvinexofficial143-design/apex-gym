import { MemberShell } from "@/components/member/MemberShell";
import { MealCard } from "@/components/nutrition/MealCard";
import { mealPlan } from "@/lib/nutrition-data";
export default function Page(){return <MemberShell title="Meal Plan" subtitle="Daily meals with timing, calories and protein."><div className="grid-3">{mealPlan.map(m=><MealCard key={m.name}{...m}/>)}</div></MemberShell>}
