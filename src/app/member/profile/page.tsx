import { MemberShell } from "@/components/member/MemberShell";
import { memberProfile } from "@/lib/member-data";

export default function Page(){
  return (
    <MemberShell title="Profile" subtitle="Training preferences and member identity.">
      <div className="glass-card" style={{padding:28}}>
        <div className="profile-head">
          <div className="profile-avatar">AM</div>
          <div>
            <h2>{memberProfile.name}</h2>
            <div className="muted">{memberProfile.memberId}</div>
          </div>
        </div>
        <div className="profile-grid">
          {memberProfile.details.map((item)=>(
            <div key={item.label} className="profile-item">
              <div className="muted">{item.label}</div>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .profile-head{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
        .profile-avatar{width:84px;height:84px;border-radius:24px;display:grid;place-items:center;background:var(--accent);color:#080808;font-size:24px;font-weight:1000}
        .profile-head h2{margin:0;font-size:32px}
        .profile-grid{margin-top:30px;display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
        .profile-item{padding:18px;border-radius:16px;background:#101010;border:1px solid var(--line)}
        .profile-item .muted{font-size:12px}.profile-item strong{display:block;margin-top:7px}
        @media(max-width:650px){.profile-grid{grid-template-columns:1fr}}
      `}</style>
    </MemberShell>
  );
}
