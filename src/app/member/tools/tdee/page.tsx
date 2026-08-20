"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { calculateBMR,calculateTDEE } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(68),[h,setH]=useState(175),[a,setA]=useState(25),[act,setAct]=useState(1.55);const r=calculateTDEE(calculateBMR(w,h,a,"male"),act);return <MemberShell title="TDEE Calculator" subtitle="Estimate maintenance calories with activity."><CalculatorShell title="Daily Energy" copy="TDEE applies an activity multiplier to resting energy." result={<><div style={{fontSize:50,fontWeight:1000}}>{Math.round(r)}</div><div className="muted">maintenance kcal/day</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Weight" value={w} onChange={setW} suffix="kg"/><NumberField label="Height" value={h} onChange={setH} suffix="cm"/><NumberField label="Age" value={a} onChange={setA} suffix="yrs"/><select value={act} onChange={e=>setAct(Number(e.target.value))} style={select}><option value={1.2}>Sedentary</option><option value={1.375}>Light</option><option value={1.55}>Moderate</option><option value={1.725}>Very active</option></select></div></CalculatorShell></MemberShell>}
const select={minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px"};
