"use client";
import { useState } from "react";
export function WaitingList(){
  const [joined,setJoined]=useState(false);
  return <div className="glass-card" style={{padding:26}}>
    <div className="eyebrow">Waiting list</div>
    <h2 style={{fontSize:30,margin:"12px 0 8px"}}>HIIT Engine · Friday 6:30 PM</h2>
    <p className="muted">Class is currently full. Join the waiting list and get priority if a seat opens.</p>
    <button type="button" onClick={()=>setJoined(v=>!v)} style={{minHeight:46,padding:"0 17px",borderRadius:12,border:"none",background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"}}>{joined?"Joined Waiting List":"Join Waiting List"}</button>
  </div>
}
