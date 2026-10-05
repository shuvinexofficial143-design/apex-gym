"use client";

import { FormEvent,useState } from "react";

export function NotesBoard(){
  const [notes,setNotes]=useState([
    {id:1,client:"Member A",text:"Increase lower-body volume next week."},
    {id:2,client:"Member B",text:"Keep protein target consistent and review recovery."}
  ]);

  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    setNotes(current=>[
      {id:Date.now(),client:String(form.get("client")),text:String(form.get("note"))},
      ...current
    ]);
    event.currentTarget.reset();
  }

  return (
    <div className="notes-grid">
      <form onSubmit={submit} className="glass-card notes-form">
        <select name="client" style={field}><option>Member A</option><option>Member B</option><option>Member C</option></select>
        <textarea name="note" required placeholder="Add coaching note..." style={{...field,minHeight:140,padding:14}}/>
        <button style={button}>Save Note</button>
      </form>

      <div className="notes-list">
        {notes.map(note=>(
          <article key={note.id} className="glass-card">
            <strong>{note.client}</strong>
            <p className="muted">{note.text}</p>
          </article>
        ))}
      </div>

      <style>{`
        .notes-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:18px}
        .notes-form{padding:24px;display:grid;gap:12px}
        .notes-list{display:grid;gap:12px}.notes-list article{padding:20px}.notes-list p{line-height:1.6;margin-bottom:0}
        @media(max-width:760px){.notes-grid{grid-template-columns:1fr}}
      `}</style>
    </div>
  );
}

const field={minHeight:48,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:"0 14px",outline:"none"};
const button={minHeight:48,border:"none",borderRadius:13,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
