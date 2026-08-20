"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { estimateBodyFat } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(82),[n,setN]=useState(38),[h,setH]=useState(175);const r=estimateBodyFat(w,n,h);return <MemberShell title="Body Fat Estimator" subtitle="A rough circumference-based estimate."><CalculatorShell title="Body Fat Estimate" copy="Use this only for rough trend tracking." result={<><div style={{fontSize:52,fontWeight:1000}}>{r.toFixed(1)}%</div><div className="muted">estimated body fat</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Waist" value={w} onChange={setW} suffix="cm"/><NumberField label="Neck" value={n} onChange={setN} suffix="cm"/><NumberField label="Height" value={h} onChange={setH} suffix="cm"/></div></CalculatorShell></MemberShell>}
