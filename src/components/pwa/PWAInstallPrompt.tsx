"use client";

import { useEffect, useState } from "react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function PWAInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const handler = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as InstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function install() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    await promptEvent.userChoice;
    setVisible(false);
    setPromptEvent(null);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 100,
        width: "min(360px, calc(100vw - 36px))",
        padding: 18,
        borderRadius: 18,
        border: "1px solid rgba(223,255,0,.3)",
        background: "#111",
        boxShadow: "0 18px 55px rgba(0,0,0,.45)",
      }}
    >
      <strong>Install APEX GYM</strong>
      <p className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>
        Add the member experience to your device for quicker access.
      </p>
      <div style={{ display: "flex", gap: 9 }}>
        <button type="button" onClick={install} style={primary}>Install</button>
        <button type="button" onClick={() => setVisible(false)} style={secondary}>Not now</button>
      </div>
    </div>
  );
}

const primary = { minHeight: 40, padding: "0 14px", borderRadius: 11, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" };
const secondary = { ...primary, background: "#181818", color: "#fff", border: "1px solid var(--line)" };
