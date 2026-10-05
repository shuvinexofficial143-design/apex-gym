"use client";

import { useState } from "react";

export function ClassCard({name,coach,time,focus,seats}:{name:string;coach:string;time:string;focus:string;seats:number}){
  const [selected,setSelected]=useState(false);

  return (
    <article className="glass-card card-hover" style={{padding:22}}>
      <div className="accent" style={{fontSize:10,fontWeight:1000}}>{focus.toUpperCase()}</div>
      <h3 style={{fontSize:26,margin:"9px 0"}}>{name}</h3>
      <div className="muted" style={{fontSize:12}}>Coach · {coach}<br/>{time}</div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginTop:20}}>
        <span style={{padding:"8px 10px",borderRadius:999,border:"1px solid var(--line)",fontSize:10}}>{seats} SEATS LEFT</span>
        <button
          type="button"
          onClick={()=>setSelected(value=>!value)}
          style={{minHeight:42,padding:"0 15px",borderRadius:12,border:selected?"1px solid var(--accent)":"1px solid var(--line)",background:selected?"var(--accent)":"#111",color:selected?"#080808":"#fff",fontWeight:1000}}
        >
          {selected?"Selected ✓":"Select Class"}
        </button>
      </div>
    </article>
  );
}
