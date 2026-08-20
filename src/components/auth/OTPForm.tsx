"use client";
import { FormEvent,useState } from "react";

export function OTPForm(){
  const [sent,setSent]=useState(false),[ok,setOk]=useState(false);
  function first(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true)}
  function second(e:FormEvent<HTMLFormElement>){e.preventDefault();setOk(true)}
  if(!sent) return <form onSubmit={first} style={{display:"grid",gap:16}}>
    <input required placeholder="+91 98765 43210" style={input}/>
    <button style={btn}>Send OTP</button>
  </form>;
  return <form onSubmit={second} style={{display:"grid",gap:16}}>
    <p className="muted">Demo OTP sent. SMS provider will be connected later.</p>
    <input required maxLength={6} inputMode="numeric" placeholder="123456" style={input}/>
    <button style={btn}>Verify OTP</button>
    {ok&&<div className="accent" style={{fontWeight:900}}>OTP verified in demo mode.</div>}
  </form>
}
const input={minHeight:52,borderRadius:14,border:"1px solid var(--line)",background:"#0f0f0f",color:"#fff",padding:"0 16px",outline:"none"};
const btn={minHeight:52,border:"none",borderRadius:14,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
