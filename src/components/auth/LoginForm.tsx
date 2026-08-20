"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { AuthInput } from "./AuthInput";

export function LoginForm() {
  const [done,setDone]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setDone(true)}
  return <form onSubmit={submit} style={{display:"grid",gap:16}}>
    <AuthInput label="Email or mobile" name="identity" placeholder="you@example.com" autoComplete="username"/>
    <AuthInput label="Password" name="password" type="password" placeholder="••••••••" autoComplete="current-password"/>
    <div style={{display:"flex",justifyContent:"space-between",gap:12,fontSize:13}}>
      <Link href="/auth/otp" className="accent">Use OTP</Link>
      <Link href="/auth/forgot-password" className="muted">Forgot password?</Link>
    </div>
    <button style={btn}>Sign In</button>
    {done&&<div className="glass-card" style={{padding:16}}>Demo login successful. <Link href="/member" className="accent" style={{fontWeight:900}}>Open dashboard →</Link></div>}
    <div className="muted" style={{fontSize:13}}>New member? <Link href="/auth/signup" className="accent">Create account</Link></div>
  </form>
}
const btn={minHeight:52,border:"none",borderRadius:14,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"};
