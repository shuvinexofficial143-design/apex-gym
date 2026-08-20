"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { calculateProtein } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(68),[f,setF]=useState(1.8);const r=calculateProtein(w,f);return <MemberShell title="Protein Calculator" subtitle="Estimate a practical daily protein target."><CalculatorShell title="Daily Protein" copy="Uses body weight and a protein multiplier." result={<><div style={{fontSize:52,fontWeight:1000}}>{Math.round(r)}g</div><div className="muted">protein/day</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Weight" value={w} onChange={setW} suffix="kg"/><select value={f} onChange={e=>setF(Number(e.target.value))} style={select}><option value={1.2}>General · 1.2 g/kg</option><option value={1.6}>Active · 1.6 g/kg</option><option value={1.8}>Muscle gain · 1.8 g/kg</option><option value={2}>High protein · 2.0 g/kg</option></select></div></CalculatorShell></MemberShell>}
const select={minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px"};
