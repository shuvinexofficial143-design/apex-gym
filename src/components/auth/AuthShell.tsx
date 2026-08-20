import type { ReactNode } from "react";
import Link from "next/link";

export function AuthShell({title, subtitle, children}:{title:string; subtitle:string; children:ReactNode}) {
  return (
    <main className="auth-shell" style={{minHeight:"100svh",display:"grid",gridTemplateColumns:"1.05fr .95fr",background:"#080808"}}>
      <section style={{padding:"clamp(30px,6vw,72px)",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"radial-gradient(circle at 30% 25%,rgba(223,255,0,.16),transparent 28%),linear-gradient(145deg,#111,#070707)",borderRight:"1px solid var(--line)"}}>
        <Link href="/" style={{display:"inline-flex",gap:10,alignItems:"center",fontWeight:1000}}>
          <span style={{width:38,height:38,display:"grid",placeItems:"center",borderRadius:12,background:"var(--accent)",color:"#080808"}}>A</span>
          APEX GYM
        </Link>
        <div style={{maxWidth:620}}>
          <span className="eyebrow">Member access</span>
          <h1 style={{fontSize:"clamp(54px,8vw,104px)",lineHeight:.88,letterSpacing:"-.07em",textTransform:"uppercase",margin:"18px 0"}}>
            Train.<br/>Track.<br/><span className="accent">Progress.</span>
          </h1>
          <p className="muted" style={{lineHeight:1.7,maxWidth:520}}>Your workouts, membership, attendance, payments and progress in one place.</p>
        </div>
        <div className="muted" style={{fontSize:12}}>Secure member portal · APEX GYM</div>
      </section>
      <section style={{padding:"clamp(28px,6vw,72px)",display:"grid",placeItems:"center"}}>
        <div style={{width:"min(100%,520px)"}}>
          <h2 style={{fontSize:42,letterSpacing:"-.045em",marginBottom:10}}>{title}</h2>
          <p className="muted" style={{lineHeight:1.7,marginTop:0}}>{subtitle}</p>
          <div style={{marginTop:30}}>{children}</div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.auth-shell{grid-template-columns:1fr!important}.auth-shell>section:first-child{min-height:400px}}`}</style>
    </main>
  );
}
