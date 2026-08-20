"use client";
import { FormEvent,useState } from "react";

export function NotesBoard(){
  const [notes,setNotes]=useState([{id:1,client:"Rahul Mehta",text:"Increase lower-body volume next week."},{id:2,client:"Ananya Singh",text:"Keep protein target above 120g daily."}]);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const f=new FormData(e.currentTarget);setNotes(v=>[{id:Date.now(),client:String(f.get("client")),text:String(f.get("note"))},...v]);e.currentTarget.reset()}
  return <div className="notes-grid" style={{display:"grid",gridTemplateColumns:".8fr 1.2fr",gap:18}}>
    <form onSubmit={submit} className="glass-card" style={{padding:24,display:"grid",gap:12}}>
      <select name="client" style={field}><option>Rahul Mehta</option><option>Ananya Singh</option><option>Dev Patel</option></select>
      <textarea name="note" required placeholder="Add coaching note..." style={{...field,minHeight:140,padding:14}}/>
      <button style={button}>Save Note</button>
    </form>
    <div style={{display:"grid",gap:12}}>{notes.map(n=><article key={n.id} className="glass-card" style={{padding:20}}><strong>{n.client}</strong><p className="muted" style={{lineHeight:1.6,marginBottom:0}}>{n.text}</p></article>)}</div>
    <style>{`@media(max-width:760px){.notes-grid{grid-template-columns:1fr!important}}`}</style>
  </div>
}
const field={minHeight:48,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:48,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
