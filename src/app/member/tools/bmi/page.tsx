"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { calculateBMI,bmiLabel } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(68),[h,setH]=useState(175);const bmi=calculateBMI(w,h);return <MemberShell title="BMI Calculator" subtitle="Estimate body mass index."><CalculatorShell title="BMI" copy="BMI is a simple screening metric and does not directly measure body fat." result={<><div style={{fontSize:56,fontWeight:1000}}>{bmi.toFixed(1)}</div><div className="accent" style={{fontWeight:900}}>{bmiLabel(bmi)}</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Weight" value={w} onChange={setW} suffix="kg"/><NumberField label="Height" value={h} onChange={setH} suffix="cm"/></div></CalculatorShell></MemberShell>}
