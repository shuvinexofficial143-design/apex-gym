export function MacroSummary({protein,carbs,fats}:{protein:number;carbs:number;fats:number}) {
  return <div style={{display:"grid",gap:12}}>
    {[["Protein",protein],["Carbs",carbs],["Fats",fats]].map(([label,value])=><div key={String(label)} style={{display:"flex",justifyContent:"space-between",padding:14,borderRadius:13,border:"1px solid var(--line)",background:"#0f0f0f"}}><strong>{label}</strong><span className="accent" style={{fontWeight:1000}}>{value}g</span></div>)}
  </div>
}
