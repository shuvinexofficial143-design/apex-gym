"use client";
import { FormEvent,useState } from "react";
import { dietTemplates } from "@/lib/nutrition-data";

export function DietPlannerForm(){
  const [goal,setGoal]=useState("Muscle Gain"),[diet,setDiet]=useState("Vegetarian"),[calories,setCalories]=useState(2400),[made,setMade]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setMade(true)}
  const plan=dietTemplates[goal as keyof typeof dietTemplates];

  return <div className="diet-plan-grid" style={{display:"grid",gridTemplateColumns:".85fr 1.15fr",gap:18}}>
    <form onSubmit={submit} className="glass-card" style={{padding:26,display:"grid",gap:16}}>
      <label style={labelStyle}><span>Goal</span><select value={goal} onChange={e=>{setGoal(e.target.value);setMade(false)}} style={field}><option>Muscle Gain</option><option>Fat Loss</option><option>Maintenance</option></select></label>
      <label style={labelStyle}><span>Diet preference</span><select value={diet} onChange={e=>{setDiet(e.target.value);setMade(false)}} style={field}><option>Vegetarian</option><option>Non-Vegetarian</option><option>Vegan</option></select></label>
      <label style={labelStyle}><span>Daily calories</span><input type="number" min={1200} max={5000} value={calories} onChange={e=>setCalories(Number(e.target.value))} style={field}/></label>
      <button style={button}>Generate Plan</button>
    </form>
    <div className="glass-card" style={{padding:26}}>
      <div className="eyebrow">Plan preview</div>
      {!made?<p className="muted">Choose your goal and generate a demo plan.</p>:<>
        <h2 style={{fontSize:32,margin:"14px 0 4px"}}>{goal} · {diet}</h2>
        <div className="muted">{calories} kcal target</div>
        <div style={{display:"grid",gap:12,marginTop:24}}>{plan.meals.map(m=><div key={m.name} style={{padding:16,borderRadius:14,border:"1px solid var(--line)",background:"#0f0f0f"}}><strong>{m.name}</strong><div className="muted" style={{marginTop:5,lineHeight:1.6}}>{m.food}</div></div>)}</div>
      </>}
    </div>
    <style>{`@media(max-width:760px){.diet-plan-grid{grid-template-columns:1fr!important}}`}</style>
  </div>
}
const labelStyle={display:"grid",gap:8,fontSize:13,fontWeight:800};
const field={minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:50,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
