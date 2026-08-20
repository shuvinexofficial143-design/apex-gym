"use client";
import { FormEvent,useState } from "react";

export function AssignmentForm({type}:{type:"workout"|"diet"}) {
  const [saved,setSaved]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSaved(true)}
  return <form onSubmit={submit} className="glass-card" style={{padding:26,display:"grid",gap:16}}>
    <label style={label}><span>Client</span><select required style={field}><option>Rahul Mehta</option><option>Ananya Singh</option><option>Dev Patel</option><option>Karan Shah</option></select></label>
    {type==="workout"?<>
      <label style={label}><span>Program</span><select required style={field}><option>Upper / Lower Strength</option><option>Push Pull Legs</option><option>Fat Loss Circuit</option><option>Beginner Foundation</option></select></label>
      <label style={label}><span>Training days / week</span><input type="number" min={2} max={7} defaultValue={4} style={field}/></label>
      <label style={label}><span>Coach note</span><textarea defaultValue="Focus on technique, controlled progression and weekly check-in." style={{...field,minHeight:120,padding:14}}/></label>
    </>:<>
      <label style={label}><span>Nutrition goal</span><select required style={field}><option>Muscle Gain</option><option>Fat Loss</option><option>Maintenance</option></select></label>
      <label style={label}><span>Calorie target</span><input type="number" min={1200} defaultValue={2400} style={field}/></label>
      <label style={label}><span>Diet note</span><textarea defaultValue="Keep meals simple, protein consistent and hydration on target." style={{...field,minHeight:120,padding:14}}/></label>
    </>}
    <button style={button}>Assign {type==="workout"?"Workout":"Diet Plan"}</button>
    {saved&&<div className="accent" style={{fontWeight:900}}>Assignment saved in demo mode.</div>}
  </form>
}
const label={display:"grid",gap:8,fontSize:13,fontWeight:800};
const field={minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:50,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
