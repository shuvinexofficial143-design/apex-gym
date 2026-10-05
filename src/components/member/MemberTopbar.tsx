import Link from "next/link";

export function MemberTopbar(){
  return (
    <header className="workspace-topbar">
      <div>
        <strong>APEX Member Experience</strong>
        <div className="muted workspace-sub">Train. Track. Progress.</div>
      </div>
      <div className="workspace-actions">
        <Link href="/search" className="workspace-icon" aria-label="Search">⌕</Link>
        <Link href="/member/ai" className="workspace-ai">AI</Link>
        <Link href="/member/notifications" className="workspace-icon" aria-label="Notifications">◉</Link>
        <Link href="/member/profile" className="workspace-avatar" aria-label="Member profile">AM</Link>
      </div>
      <style>{`
        .workspace-topbar{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px clamp(18px,4vw,46px);border-bottom:1px solid var(--line);background:rgba(9,9,9,.9);backdrop-filter:blur(16px);position:sticky;top:0;z-index:20}
        .workspace-sub{font-size:12px;margin-top:4px}
        .workspace-actions{display:flex;gap:9px;align-items:center}
        .workspace-icon,.workspace-ai,.workspace-avatar{width:42px;height:42px;display:grid;place-items:center;border-radius:13px;border:1px solid var(--line);background:#111}
        .workspace-ai{border-color:rgba(223,255,0,.4);background:rgba(223,255,0,.07);color:var(--accent);font-weight:1000;font-size:12px}
        .workspace-avatar{background:var(--accent);color:#080808;border-color:var(--accent);font-weight:1000;font-size:11px}
      `}</style>
    </header>
  );
}
