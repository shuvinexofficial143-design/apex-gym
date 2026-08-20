"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { AuthInput } from "./AuthInput";

export function SignupForm(){
  const [done,setDone]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setDone(true)}
  return <form onSubmit={submit} style={{display:"grid",gap:16}}>
    <div className="name-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
      <AuthInput label="First name" name="firstName" placeholder="Vishal"/>
      <AuthInput label="Last name" name="lastName" placeholder="Parmar"/>
    </div>
    <AuthInput label="Mobile" name="phone" placeholder="+91 98765 43210" autoComplete="tel"/>
    <AuthInput label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email"/>
    <AuthInput label="Password" name="password" type="password" placeholder="Create a strong password" autoComplete="new-password"/>
    <button style={btn}>Create Member Account</button>
    {done&&<div className="glass-card" style={{padding:16}}>Account demo ready. <Link href="/member" className="accent" style={{fontWeight:900}}>Open dashboard →</Link></div>}
    <div className="muted" style={{fontSize:13}}>Already registered? <Link href="/auth/login" className="accent">Sign in</Link></div>
    <style>{`@media(max-width:560px){.name-grid{grid-template-columns:1fr!important}}`}</style>
  </form>
}
const btn={minHeight:52,border:"none",borderRadius:14,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
