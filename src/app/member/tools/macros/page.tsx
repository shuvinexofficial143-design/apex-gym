"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { MacroSummary } from "@/components/nutrition/MacroSummary";
import { calculateMacros } from "@/lib/fitness-calculators";
export default function Page(){const[c,setC]=useState(2400),[p,setP]=useState(30),[carb,setCarb]=useState(40);const fat=Math.max(0,100-p-carb);const r=calculateMacros(c,p,carb,fat);return <MemberShell title="Macro Calculator" subtitle="Split calories across protein, carbohydrates and fats."><CalculatorShell title="Macro Split" copy="Remaining calories after protein and carbs are assigned to fat." result={<MacroSummary {...r}/>}><div style={{display:"grid",gap:14}}><NumberField label="Calories" value={c} onChange={setC} suffix="kcal"/><NumberField label="Protein %" value={p} onChange={setP} min={10} max={60} suffix="%"/><NumberField label="Carbs %" value={carb} onChange={setCarb} min={10} max={70} suffix="%"/><div className="muted">Fat: {fat}%</div></div></CalculatorShell></MemberShell>}
