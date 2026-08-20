import { TrainerShell } from "@/components/trainer/TrainerShell";
import { TrainerMetricCard } from "@/components/trainer/TrainerMetricCard";
import { earningsData } from "@/lib/trainer-data";
export default function Page(){return <TrainerShell title="Earnings" subtitle="Session revenue, monthly payout and upcoming earnings."><div className="grid-3">{earningsData.map(x=><TrainerMetricCard key={x.label}{...x}/>)}</div></TrainerShell>}
