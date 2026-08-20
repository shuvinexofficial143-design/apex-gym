export function NutritionMetricCard({label,value,target,unit=""}:{label:string;value:number;target:number;unit?:string}) {
  const percent=Math.min(100,Math.round((value/Math.max(target,1))*100));
  return <article className="glass-card" style={{padding:22}}>
    <div className="muted" style={{fontSize:12,textTransform:"uppercase",letterSpacing:".12em"}}>{label}</div>
    <div style={{fontSize:34,fontWeight:1000,letterSpacing:"-.05em",marginTop:10}}>{value}{unit}</div>
    <div className="muted" style={{fontSize:12,marginTop:6}}>Target: {target}{unit}</div>
    <div style={{height:9,borderRadius:999,background:"#1a1a1a",overflow:"hidden",marginTop:16}}>
      <div style={{width:`${percent}%`,height:"100%",background:"var(--accent)",borderRadius:999}}/>
    </div>
  </article>
}
