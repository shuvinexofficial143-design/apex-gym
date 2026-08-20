"use client";

import { useEffect, useSyncExternalStore } from "react";

const THEME_EVENT = "apex-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem("apex-dim-theme") === "1";
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const dim = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.dataset.theme = dim ? "dim" : "dark";
  }, [dim]);

  function toggle() {
    const next = !dim;

    window.localStorage.setItem(
      "apex-dim-theme",
      next ? "1" : "0"
    );

    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle theme intensity"
        title="Toggle theme intensity"
        style={{
          width: 42,
          height: 42,
          borderRadius: 13,
          border: "1px solid var(--line)",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
          fontWeight: 1000,
        }}
      >
        {dim ? "◐" : "●"}
      </button>

      <style>{`
        html[data-theme="dim"] {
          --bg: #101010;
          --bg-soft: #151515;
          --card: #1a1a1a;
          --card-2: #202020;
          --muted: #b5b5b5;
        }
      `}</style>
    </>
  );
}
