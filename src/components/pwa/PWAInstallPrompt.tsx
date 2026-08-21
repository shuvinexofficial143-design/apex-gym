"use client";

import { useEffect, useState } from "react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const KEY = "apex-pwa-install-seen-v2";

export function PWAInstallPrompt() {
  const [event, setEvent] = useState<InstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();

      try {
        if (localStorage.getItem(KEY) === "1") return;
        localStorage.setItem(KEY, "1");
      } catch {
        // storage unavailable
      }

      setEvent(e as InstallPromptEvent);
      setVisible(true);
    };

    const onInstalled = () => {
      try {
        localStorage.setItem(KEY, "1");
      } catch {
        // storage unavailable
      }
      setVisible(false);
      setEvent(null);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  async function install() {
    if (!event) return;
    await event.prompt();
    await event.userChoice;
    setVisible(false);
    setEvent(null);
  }

  if (!visible) return null;

  return (
    <div className="apex-install">
      <div className="apex-install-logo">A</div>
      <div>
        <strong>Install APEX GYM</strong>
        <p>Add APEX to your phone for quicker access.</p>
      </div>
      <div className="apex-install-actions">
        <button onClick={install}>Install</button>
        <button className="ghost" onClick={() => setVisible(false)}>Not now</button>
      </div>

      <style>{`
        .apex-install{
          position:fixed;
          left:50%;
          bottom:max(18px,env(safe-area-inset-bottom));
          transform:translateX(-50%);
          z-index:999;
          width:min(440px,calc(100vw - 28px));
          padding:16px;
          border-radius:22px;
          display:grid;
          grid-template-columns:52px 1fr;
          gap:12px;
          background:rgba(12,15,20,.96);
          border:1px solid rgba(223,255,0,.28);
          box-shadow:0 24px 70px rgba(0,0,0,.5);
          backdrop-filter:blur(16px);
        }
        .apex-install-logo{
          width:52px;height:52px;border-radius:16px;
          display:grid;place-items:center;
          background:var(--accent);color:#071017;
          font-weight:1000;font-size:22px;
        }
        .apex-install strong{font-size:17px}
        .apex-install p{margin:5px 0 0;color:var(--muted);font-size:12px;line-height:1.5}
        .apex-install-actions{
          grid-column:1/-1;
          display:flex;gap:8px;
        }
        .apex-install button{
          min-height:42px;padding:0 15px;border-radius:12px;
          border:0;background:var(--accent);color:#071017;font-weight:1000
        }
        .apex-install button.ghost{
          background:#171a20;color:#fff;border:1px solid var(--line)
        }
      `}</style>
    </div>
  );
}
