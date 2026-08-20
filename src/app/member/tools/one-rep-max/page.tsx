"use client";
import { useState } from "react";
import { MemberShell } from "@/components/member/MemberShell";
import { CalculatorShell } from "@/components/nutrition/CalculatorShell";
import { NumberField } from "@/components/nutrition/NumberField";
import { estimateOneRepMax } from "@/lib/fitness-calculators";
export default function Page(){const[w,setW]=useState(70),[r,setR]=useState(8);const max=estimateOneRepMax(w,r);return <MemberShell title="One Rep Max Calculator" subtitle="Estimate 1RM from a working set."><CalculatorShell title="Estimated 1RM" copy="Uses the Epley estimate from weight and repetitions." result={<><div style={{fontSize:52,fontWeight:1000}}>{max.toFixed(1)} kg</div><div className="muted">estimated one-rep max</div></>}><div style={{display:"grid",gap:14}}><NumberField label="Weight lifted" value={w} onChange={setW} suffix="kg"/><NumberField label="Repetitions" value={r} onChange={setR} min={1} max={15} suffix="reps"/></div></CalculatorShell></MemberShell>}
