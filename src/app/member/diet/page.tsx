import Link from "next/link";
import { MemberShell } from "@/components/member/MemberShell";
import { NutritionMetricCard } from "@/components/nutrition/NutritionMetricCard";
import { dailyNutrition } from "@/lib/nutrition-data";

export default function Page(){return <MemberShell title="Nutrition" subtitle="Plan meals, track macros, log food and use fitness calculators.">
  <div className="metrics" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
    <NutritionMetricCard label="Calories" value={dailyNutrition.calories} target={dailyNutrition.calorieTarget} unit=" kcal"/>
    <NutritionMetricCard label="Protein" value={dailyNutrition.protein} target={dailyNutrition.proteinTarget} unit="g"/>
    <NutritionMetricCard label="Carbs" value={dailyNutrition.carbs} target={dailyNutrition.carbTarget} unit="g"/>
    <NutritionMetricCard label="Water" value={dailyNutrition.water} target={dailyNutrition.waterTarget} unit="L"/>
  </div>
  <div className="actions" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginTop:18}}>
    {[["Diet Planner","/member/diet/planner","Build a goal-based meal structure."],["Nutrition Tracker","/member/diet/tracker","Log food and hydration."],["Fitness Calculators","/member/tools","BMI, TDEE, macros and more."]].map(([t,h,c])=><Link key={h} href={h} className="glass-card card-hover" style={{padding:22}}><div className="accent" style={{fontSize:11,fontWeight:1000}}>OPEN</div><h2 style={{fontSize:24,margin:"8px 0"}}>{t}</h2><p className="muted">{c}</p></Link>)}
  </div>
  <style>{`@media(max-width:920px){.metrics{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:650px){.actions,.metrics{grid-template-columns:1fr!important}}`}</style>
</MemberShell>}
