import { MemberShell } from "@/components/member/MemberShell";
import { ClassCard } from "@/components/classes/ClassCard";
import { classOptions } from "@/lib/trainer-data";
export default function Page(){return <MemberShell title="Book Classes" subtitle="Reserve spots in group training sessions."><div className="grid-3">{classOptions.map(x=><ClassCard key={x.id}{...x}/>)}</div></MemberShell>}
