export function NumberField({label,value,onChange,min=0,max,step=1,suffix}:{label:string;value:number;onChange:(v:number)=>void;min?:number;max?:number;step?:number;suffix?:string}) {
  return <label style={{display:"grid",gap:8}}>
    <span style={{fontSize:13,fontWeight:800}}>{label}</span>
    <div style={{position:"relative"}}>
      <input type="number" value={value} min={min} max={max} step={step} onChange={e=>onChange(Number(e.target.value))}
        style={{width:"100%",minHeight:50,borderRadius:13,border:"1px solid var(--line)",background:"#0e0e0e",color:"#fff",padding:suffix?"0 58px 0 14px":"0 14px",outline:"none"}}/>
      {suffix&&<span className="muted" style={{position:"absolute",right:14,top:16,fontSize:12}}>{suffix}</span>}
    </div>
  </label>
}
