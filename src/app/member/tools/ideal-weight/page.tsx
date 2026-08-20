"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { idealWeightRange } from "@/lib/fitness-calculators";
export default function Page(){const[h,setH]=useState(175);const r=idealWeightRange(h);return <MemberShell title="Ideal Weight Range" subtitle="See a broad BMI-based reference range."><CalculatorShell title="Reference Range" copy="This does not account for muscle mass or individual body composition." result={<><div style={{fontSize:42,fontWeight:1000}}>{r.min.toFixed(1)}–{r.max.toFixed(1)} kg</div><div className="muted">BMI 18.5–24.9 range</div></>}><NumberField label="Height" value={h} onChange={setH} suffix="cm"/></CalculatorShell></MemberShell>}
