import { TrainerShell } from "@/components/trainer/TrainerShell";
import { TrainerMetricCard } from "@/components/trainer/TrainerMetricCard";
import { earningsData } from "@/lib/trainer-data";
export default function Page(){return <TrainerShell title="Earnings" subtitle="Review coaching activity, retention and session-performance indicators."><div className="grid-3">{earningsData.map(x=><TrainerMetricCard key={x.label}{...x}/>)}</div></TrainerShell>}
