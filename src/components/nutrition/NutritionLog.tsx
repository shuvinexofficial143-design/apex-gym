"use client";
import { FormEvent,useState } from "react";
type Entry={id:number;food:string;calories:number;protein:number};

export function NutritionLog(){
  const [entries,setEntries]=useState<Entry[]>([{id:1,food:"Oats + Milk",calories:420,protein:18},{id:2,food:"Paneer Rice Bowl",calories:650,protein:34}]);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const f=new FormData(e.currentTarget);setEntries(v=>[...v,{id:Date.now(),food:String(f.get("food")||"Meal"),calories:Number(f.get("calories")||0),protein:Number(f.get("protein")||0)}]);e.currentTarget.reset()}
  const totals=entries.reduce((a,x)=>({calories:a.calories+x.calories,protein:a.protein+x.protein}),{calories:0,protein:0});

  return <div className="log-grid" style={{display:"grid",gridTemplateColumns:".8fr 1.2fr",gap:18}}>
    <form onSubmit={submit} className="glass-card" style={{padding:24,display:"grid",gap:12}}>
      <h2 style={{marginTop:0}}>Add Food</h2>
      <input name="food" required placeholder="Food or meal" style={input}/><input name="calories" required type="number" min="0" placeholder="Calories" style={input}/><input name="protein" required type="number" min="0" placeholder="Protein (g)" style={input}/>
      <button style={button}>Add Entry</button>
    </form>
    <div className="glass-card" style={{padding:24}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}><h2 style={{marginTop:0}}>Today</h2><div className="accent" style={{fontWeight:1000}}>{totals.calories} kcal · {totals.protein}g protein</div></div>
      <div style={{display:"grid",gap:10}}>{entries.map(x=><div key={x.id} style={{display:"grid",gridTemplateColumns:"1fr auto auto",gap:14,padding:14,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e"}}><strong>{x.food}</strong><span className="muted">{x.calories} kcal</span><span className="accent">{x.protein}g P</span></div>)}</div>
    </div>
    <style>{`@media(max-width:760px){.log-grid{grid-template-columns:1fr!important}}`}</style>
  </div>
}
const input={minHeight:48,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:48,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
