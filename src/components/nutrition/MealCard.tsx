export function MealCard({name,time,calories,protein,foods}:{name:string;time:string;calories:number;protein:number;foods:string[]}) {
  return <article className="glass-card card-hover" style={{padding:22}}>
    <div style={{display:"flex",justifyContent:"space-between",gap:14}}>
      <div><div className="accent" style={{fontSize:11,fontWeight:1000}}>{time}</div><h3 style={{fontSize:24,margin:"8px 0"}}>{name}</h3></div>
      <div style={{textAlign:"right"}}><strong>{calories} kcal</strong><div className="muted" style={{fontSize:12,marginTop:4}}>{protein}g protein</div></div>
    </div>
    <div className="divider" style={{margin:"18px 0"}}/>
    <div className="muted" style={{lineHeight:1.7}}>{foods.join(" • ")}</div>
  </article>
}
