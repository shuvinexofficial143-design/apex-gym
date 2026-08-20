export function MetricCard({label,value,meta,accent=false}:{label:string;value:string;meta:string;accent?:boolean}){
  return <article className="glass-card" style={{padding:22,borderColor:accent?"rgba(223,255,0,.3)":undefined}}>
    <div className="muted" style={{fontSize:12,textTransform:"uppercase",letterSpacing:".12em"}}>{label}</div>
    <div style={{fontSize:36,fontWeight:1000,letterSpacing:"-.05em",marginTop:12}}>{value}</div>
    <div className={accent?"accent":"muted"} style={{fontSize:12,marginTop:8}}>{meta}</div>
  </article>
}
