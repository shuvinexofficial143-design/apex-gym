"use client";

import { FormEvent,useState } from "react";
import { dietTemplates } from "@/lib/nutrition-data";

export function DietPlannerForm(){
  const [goal,setGoal]=useState("Muscle Gain");
  const [diet,setDiet]=useState("Vegetarian");
  const [calories,setCalories]=useState(2400);
  const [made,setMade]=useState(false);
  const plan=dietTemplates[goal as keyof typeof dietTemplates];

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setMade(true);
  }

  return (
    <div className="diet-plan-grid">
      <form onSubmit={submit} className="glass-card diet-controls">
        <label style={labelStyle}><span>Goal</span><select value={goal} onChange={e=>{setGoal(e.target.value);setMade(false)}} style={field}><option>Muscle Gain</option><option>Fat Loss</option><option>Maintenance</option></select></label>
        <label style={labelStyle}><span>Diet preference</span><select value={diet} onChange={e=>{setDiet(e.target.value);setMade(false)}} style={field}><option>Vegetarian</option><option>Non-Vegetarian</option><option>Vegan</option></select></label>
        <label style={labelStyle}><span>Daily calories</span><input type="number" min={1200} max={5000} value={calories} onChange={e=>setCalories(Number(e.target.value))} style={field}/></label>
        <button style={button}>Build Plan Preview</button>
      </form>

      <div className="glass-card diet-result">
        <div className="eyebrow">Plan preview</div>
        {!made ? (
          <p className="muted">Choose your goal and build a practical meal structure.</p>
        ) : (
          <>
            <h2>{goal} · {diet}</h2>
            <div className="muted">{calories} kcal target</div>
            <div className="diet-meals">
              {plan.meals.map(meal=>(
                <div key={meal.name}>
                  <strong>{meal.name}</strong>
                  <div className="muted">{meal.food}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        .diet-plan-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:18px}
        .diet-controls,.diet-result{padding:26px}.diet-controls{display:grid;gap:16px}
        .diet-result h2{font-size:32px;margin:14px 0 4px}
        .diet-meals{display:grid;gap:12px;margin-top:24px}.diet-meals>div{padding:16px;border-radius:14px;border:1px solid var(--line);background:#0f0f0f}.diet-meals .muted{margin-top:5px;line-height:1.6}
        @media(max-width:760px){.diet-plan-grid{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}

const labelStyle={display:"grid",gap:8,fontSize:13,fontWeight:800};
const field={minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:50,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
