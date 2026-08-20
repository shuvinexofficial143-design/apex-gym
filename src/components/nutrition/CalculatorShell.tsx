import type { ReactNode } from "react";
export function CalculatorShell({title,copy,children,result}:{title:string;copy:string;children:ReactNode;result?:ReactNode}) {
  return <div className="calculator-grid" style={{display:"grid",gridTemplateColumns:"1fr .85fr",gap:18}}>
    <div className="glass-card" style={{padding:26}}>
      <h2 style={{fontSize:30,margin:"0 0 8px"}}>{title}</h2>
      <p className="muted" style={{lineHeight:1.7,marginTop:0}}>{copy}</p>
      <div style={{marginTop:24}}>{children}</div>
    </div>
    <div className="glass-card" style={{padding:26,minHeight:260,background:"radial-gradient(circle at 75% 20%,rgba(223,255,0,.16),transparent 25%),linear-gradient(145deg,#151515,#090909)"}}>
      <div className="eyebrow">Result</div>
      <div style={{marginTop:20}}>{result??<p className="muted">Enter your details to calculate.</p>}</div>
    </div>
    <style>{`@media(max-width:760px){.calculator-grid{grid-template-columns:1fr!important}}`}</style>
  </div>
}
