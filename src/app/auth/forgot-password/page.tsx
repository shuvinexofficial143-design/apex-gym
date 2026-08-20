"use client";
import { FormEvent,useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthInput } from "@/components/auth/AuthInput";
export default function Page(){
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true)}
  return <AuthShell title="Reset password" subtitle="Enter your registered email. Reset-token delivery will be connected with backend authentication.">
    <form onSubmit={submit} style={{display:"grid",gap:16}}>
      <AuthInput label="Email address" name="email" type="email" placeholder="you@example.com"/>
      <button style={{minHeight:52,border:"none",borderRadius:14,background:"var(--accent)",color:"#080808",fontWeight:1000,cursor:"pointer"}}>Send Reset Link</button>
      {sent&&<div className="accent" style={{fontWeight:900}}>Demo reset request created.</div>}
    </form>
  </AuthShell>
}
