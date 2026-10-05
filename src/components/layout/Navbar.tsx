import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

const links = [
  ["Programs", "/programs"],
  ["Membership", "/membership"],
  ["Trainers", "/trainers"],
  ["Classes", "/classes"],
  ["Gallery", "/gallery"],
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand-link" aria-label="APEX GYM home">
          <span className="brand-mark">A</span>
          <span className="brand-name">APEX GYM</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
        </nav>

        <div className="desktop-actions">
          <Link href="/member" className="member-link">Member App</Link>
          <Button href="/free-trial" size="sm">Free Trial</Button>
        </div>

        <MobileMenu />
      </div>

      <style>{`
        .site-header{position:fixed;inset:0 0 auto 0;z-index:50;backdrop-filter:blur(18px);background:rgba(7,7,7,.84);border-bottom:1px solid rgba(255,255,255,.07)}
        .nav-inner{height:76px;display:flex;align-items:center;justify-content:space-between;gap:18px}
        .brand-link{display:flex;align-items:center;gap:10px;flex:0 0 auto}
        .brand-mark{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--accent);color:#090909;font-weight:1000}
        .brand-name{font-size:20px;font-weight:1000;letter-spacing:-.03em}
        .desktop-nav{display:flex;gap:22px;align-items:center}
        .nav-link{color:var(--muted);font-size:13px;font-weight:800;transition:color .18s ease}
        .nav-link:hover{color:#fff}
        .desktop-actions{display:flex;align-items:center;gap:12px}
        .member-link{font-size:12px;font-weight:1000;color:#fff}
        @media(max-width:980px){.desktop-nav,.desktop-actions{display:none!important}}
        @media(max-width:380px){.brand-name{font-size:17px}}
      `}</style>
    </header>
  );
}
