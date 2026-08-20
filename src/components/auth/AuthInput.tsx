export function AuthInput({label,name,type="text",placeholder,required=true,autoComplete}:{label:string;name:string;type?:string;placeholder:string;required?:boolean;autoComplete?:string}) {
  return (
    <label style={{display:"grid",gap:8}}>
      <span style={{fontSize:13,fontWeight:800}}>{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete}
        style={{width:"100%",minHeight:52,borderRadius:14,border:"1px solid var(--line)",background:"#0f0f0f",color:"#fff",padding:"0 16px",outline:"none"}}/>
    </label>
  );
}
