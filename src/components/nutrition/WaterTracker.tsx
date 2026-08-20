"use client";
import { useState } from "react";
export function WaterTracker(){
  const [glasses,setGlasses]=useState(5),target=10;
  return <div className="glass-card" style={{padding:26}}>
    <div className="eyebrow">Hydration</div><div style={{fontSize:54,fontWeight:1000,marginTop:14}}>{(glasses*.25).toFixed(2)} L</div><div className="muted">of {(target*.25).toFixed(2)} L target</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:10,marginTop:24}}>{Array.from({length:target}).map((_,i)=><button key={i} type="button" onClick={()=>setGlasses(i+1)} style={{height:52,borderRadius:14,border:i<glasses?"1px solid var(--accent)":"1px solid var(--line)",background:i<glasses?"var(--accent)":"#101010",color:i<glasses?"#080808":"#fff",fontWeight:1000,cursor:"pointer"}}>{i+1}</button>)}</div>
    <div style={{display:"flex",gap:10,marginTop:18}}><button type="button" onClick={()=>setGlasses(v=>Math.max(0,v-1))} style={secondary}>− 1</button><button type="button" onClick={()=>setGlasses(v=>Math.min(target,v+1))} style={primary}>+ 1 Glass</button></div>
  </div>
}
const primary={minHeight:44,padding:"0 16px",borderRadius:12,border:"none",background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
const secondary={...primary,background:"#111",color:"#fff",border:"1px solid var(--line)"};
