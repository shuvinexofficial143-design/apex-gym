import Link from "next/link";
import { MemberShell } from "@/components/member/MemberShell";
import { fitnessTools } from "@/lib/nutrition-data";
export default function Page(){return <MemberShell title="Fitness Calculators" subtitle="Body, nutrition, hydration and strength tools."><div className="grid-3">{fitnessTools.map(t=><Link key={t.href} href={t.href} className="glass-card card-hover" style={{padding:24}}><div className="accent" style={{fontSize:11,fontWeight:1000}}>{t.tag}</div><h2 style={{fontSize:25,margin:"9px 0"}}>{t.name}</h2><p className="muted">{t.copy}</p></Link>)}</div></MemberShell>}
