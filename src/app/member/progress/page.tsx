import { MemberShell } from "@/components/member/MemberShell";

const metrics=[
  ["Training Consistency","82%","Up this month"],
  ["Strength Index","+14%","Current block"],
  ["Attendance","17 visits","Goal: 22"],
  ["Current Streak","8 days","Best: 14"]
];

export default function Page(){
  return (
    <MemberShell title="Progress" subtitle="Track training output, consistency and performance trends over time.">
      <div className="pm">
        {metrics.map((item,index)=>(
          <article key={item[0]} className="glass-card card-hover progress-metric" style={{borderColor:index===0?"rgba(223,255,0,.28)":undefined}}>
            <div className="muted">{item[0].toUpperCase()}</div>
            <strong>{item[1]}</strong>
            <span className={index===0?"accent":"muted"}>{item[2]}</span>
          </article>
        ))}
      </div>

      <div className="pg">
        <div className="glass-card trend-card">
          <div className="eyebrow">8-week trend</div>
          <div className="trend-bars">
            {[42,49,45,58,63,61,72,82].map((value,index)=>(
              <div key={index} style={{height:`${value}%`,background:index===7?"var(--accent)":"#292929"}} />
            ))}
          </div>
        </div>

        <div className="glass-card milestone-card">
          <div className="eyebrow">Recent milestones</div>
          {[
            ["Strength block","Progressing"],
            ["Attendance target","On track"],
            ["Recovery habits","Improving"]
          ].map(item=>(
            <div key={item[0]} className="milestone">
              <strong>{item[0]}</strong>
              <div className="accent">{item[1]}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pm{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        .progress-metric{padding:22px}.progress-metric .muted:first-child{font-size:10px}.progress-metric strong{display:block;font-size:31px;margin-top:12px}.progress-metric span{display:block;font-size:12px;margin-top:8px}
        .pg{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;margin-top:18px}
        .trend-card,.milestone-card{padding:26px}.trend-bars{height:260px;display:flex;align-items:end;gap:12px;margin-top:28px}.trend-bars>div{flex:1;border-radius:12px 12px 4px 4px}
        .milestone{padding:13px;border-radius:13px;border:1px solid var(--line);background:#101010;margin-top:11px}.milestone .accent{font-size:12px;margin-top:4px}
        @media(max-width:1000px){.pm{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:760px){.pg,.pm{grid-template-columns:1fr}}
      `}</style>
    </MemberShell>
  );
}
