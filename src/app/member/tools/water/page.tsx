"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { calculateWater } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(68),[m,setM]=useState(60);const r=calculateWater(w,m);return <MemberShell title="Water Intake Calculator" subtitle="Estimate a simple hydration target."><CalculatorShell title="Hydration" copy="Uses body weight plus an allowance for training time." result={<><div style={{fontSize:52,fontWeight:1000}}>{r.toFixed(1)} L</div><div className="muted">estimated daily water</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Weight" value={w} onChange={setW} suffix="kg"/><NumberField label="Training" value={m} onChange={setM} suffix="min"/></div></CalculatorShell></MemberShell>}
