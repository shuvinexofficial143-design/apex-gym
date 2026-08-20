"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { calculateBMR } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(68),[h,setH]=useState(175),[a,setA]=useState(25),[sex,setSex]=useState<"male"|"female">("male");const r=calculateBMR(w,h,a,sex);return <MemberShell title="BMR Calculator" subtitle="Estimate resting daily energy use."><CalculatorShell title="Basal Metabolic Rate" copy="BMR estimates calories used at rest." result={<><div style={{fontSize:50,fontWeight:1000}}>{Math.round(r)}</div><div className="muted">kcal/day</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Weight" value={w} onChange={setW} suffix="kg"/><NumberField label="Height" value={h} onChange={setH} suffix="cm"/><NumberField label="Age" value={a} onChange={setA} suffix="yrs"/><select value={sex} onChange={e=>setSex(e.target.value as "male"|"female")} style={select}><option value="male">Male</option><option value="female">Female</option></select></div></CalculatorShell></MemberShell>}
const select={minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px"};
