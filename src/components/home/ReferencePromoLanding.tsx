import Link from "next/link";
import { referenceSlides } from "./referencePromoData";
import { ReferencePromoSection } from "./ReferencePromoSection";

export function ReferencePromoLanding() {
  return (
    <>
      <section className="rpl-intro">
        <div className="rpl-inner">
          <div className="eyebrow">APEX GYM APP EXPERIENCE</div>
          <h1>Your complete<br /><span>fitness app.</span></h1>
          <p>Training, food, recovery, AI coaching and progress in one visual member experience.</p>
          <div className="rpl-actions">
            <Link href="/free-trial">Start Free Trial</Link>
            <Link href="/member" className="ghost">Open Member App</Link>
          </div>
        </div>

        <style>{`
          .rpl-intro{
            min-height:720px;display:grid;align-items:center;
            background:radial-gradient(circle at 75% 30%,rgba(35,143,255,.22),transparent 28%),#05080d
          }
          .rpl-inner{width:min(calc(100% - 40px),1180px);margin:0 auto;padding:110px 0 70px}
          .rpl-inner h1{
            font-size:clamp(58px,9vw,126px);line-height:.84;letter-spacing:-.065em;
            margin:18px 0;text-transform:uppercase
          }
          .rpl-inner h1 span{color:var(--accent)}
          .rpl-inner p{max-width:620px;color:#abb3bd;font-size:17px;line-height:1.75}
          .rpl-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
          .rpl-actions a{
            min-height:56px;padding:0 22px;border-radius:16px;display:inline-flex;align-items:center;
            background:var(--accent);color:#071017;font-weight:1000;text-decoration:none
          }
          .rpl-actions a.ghost{background:#11161e;color:#fff;border:1px solid rgba(255,255,255,.08)}
          @media(max-width:620px){
            .rpl-intro{min-height:auto}
            .rpl-inner{width:min(calc(100% - 28px),1180px);padding-top:96px}
            .rpl-inner h1{font-size:clamp(48px,15vw,78px)}
          }
        `}</style>
      </section>

      {referenceSlides.map((slide) => (
        <ReferencePromoSection key={slide.id} slide={slide} />
      ))}

      <section className="rpl-final">
        <div>
          <span>APEX GYM</span>
          <h2>Ready to train smarter?</h2>
          <Link href="/free-trial">Start your free trial</Link>
        </div>
        <style>{`
          .rpl-final{min-height:480px;display:grid;place-items:center;text-align:center;background:#05080d;padding:70px 20px}
          .rpl-final>div{display:grid;gap:18px;justify-items:center}
          .rpl-final span{color:var(--accent);font-weight:1000;letter-spacing:.16em}
          .rpl-final h2{font-size:clamp(42px,7vw,84px);line-height:.95;margin:0}
          .rpl-final a{min-height:56px;padding:0 24px;border-radius:16px;display:inline-flex;align-items:center;background:var(--accent);color:#071017;font-weight:1000;text-decoration:none}
        `}</style>
      </section>
    </>
  );
}
