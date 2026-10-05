"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MarkdownText } from "./MarkdownText";

type Message = { role: "user" | "assistant"; content: string };

const initialMessage: Message = {
  role: "assistant",
  content: "Hi! I’m the APEX AI Fitness Assistant. I can help with workouts, nutrition structure, recovery and gym planning. I won’t diagnose injuries or medical conditions.",
};

const starters = [
  "Create a 4-day muscle gain workout",
  "How much protein should I target?",
  "I missed two workouts. Adjust my week.",
  "Suggest a lighter recovery session",
];

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function requestAI(nextMessages: Message[]) {
    setLoading(true);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "chat",
          messages: nextMessages,
          profile: { goal: "General fitness", level: "Intermediate", daysPerWeek: 4 },
        }),
      });

      const data = (await response.json()) as { text?: string; error?: string };
      setMessages((current) => [...current, { role: "assistant", content: data.text || data.error || "I could not generate a response right now." }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "The AI service is unavailable right now." }]);
    } finally {
      setLoading(false);
    }
  }

  async function ask(text: string) {
    const clean = text.trim();
    if (!clean || loading) return;
    const next: Message[] = [...messages, { role: "user", content: clean }];
    setMessages(next);
    setInput("");
    await requestAI(next);
  }

  async function regenerate() {
    if (loading) return;
    const lastAssistant = [...messages].map((m) => m.role).lastIndexOf("assistant");
    if (lastAssistant <= 0) return;
    const previous = messages.slice(0, lastAssistant);
    if (!previous.some((m) => m.role === "user")) return;
    setMessages(previous);
    await requestAI(previous);
  }

  async function copyMessage(content: string, index: number) {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      window.setTimeout(() => setCopiedIndex(null), 1400);
    } catch {
      setCopiedIndex(null);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <div className="ai-chat-grid" style={{ display: "grid", gridTemplateColumns: ".74fr 1.26fr", gap: 18 }}>
      <aside className="glass-card" style={{ padding: 22, alignSelf: "start" }}>
        <div className="eyebrow">Quick prompts</div>
        <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
          {starters.map((starter) => (
            <button key={starter} type="button" disabled={loading} onClick={() => void ask(starter)} style={{ padding: "13px 14px", borderRadius: 13, border: "1px solid var(--line)", background: "#101010", color: "#fff", textAlign: "left", lineHeight: 1.5, cursor: "pointer" }}>
              {starter}
            </button>
          ))}
        </div>
        <div className="divider" style={{ margin: "22px 0" }} />
        <p className="muted" style={{ fontSize: 12, lineHeight: 1.7 }}>
          Fitness guidance is informational. For pain, injury, medication, pregnancy or medical concerns, use an appropriate qualified clinician.
        </p>
      </aside>

      <section className="glass-card ai-chat-panel" style={{ minHeight: 650, height: "min(72svh, 760px)", display: "grid", gridTemplateRows: "auto 1fr auto", overflow: "hidden" }}>
        <div style={{ minHeight: 58, padding: "12px 16px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "rgba(10,10,10,.72)" }}>
          <div><strong>APEX AI</strong><div className="muted" style={{ fontSize: 10, marginTop: 3 }}>Fitness guidance · Live when connected</div></div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" onClick={() => void regenerate()} disabled={loading || messages.length < 3} style={toolbarButton}>↻</button>
            <button type="button" onClick={() => setMessages([initialMessage])} disabled={loading} style={toolbarButton}>Clear</button>
          </div>
        </div>

        <div ref={scrollerRef} className="apex-scroll" style={{ padding: 20, overflowY: "auto", minHeight: 0 }}>
          <div style={{ display: "grid", gap: 15 }}>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} style={{ maxWidth: message.role === "user" ? "82%" : "92%", justifySelf: message.role === "user" ? "end" : "start" }}>
                <div style={{ padding: "15px 17px", borderRadius: message.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", background: message.role === "user" ? "var(--accent)" : "#101010", color: message.role === "user" ? "#080808" : "#fff", border: message.role === "user" ? "none" : "1px solid var(--line)" }}>
                  {message.role === "assistant" ? <MarkdownText text={message.content} /> : <div style={{ lineHeight: 1.65 }}>{message.content}</div>}
                </div>
                {message.role === "assistant" && index > 0 ? (
                  <div style={{ display: "flex", gap: 8, marginTop: 7, paddingLeft: 4 }}>
                    <button type="button" onClick={() => void copyMessage(message.content, index)} style={miniButton}>{copiedIndex === index ? "Copied ✓" : "Copy"}</button>
                    {index === messages.length - 1 ? <button type="button" onClick={() => void regenerate()} disabled={loading} style={miniButton}>Regenerate</button> : null}
                  </div>
                ) : null}
              </div>
            ))}
            {loading ? <div style={{ justifySelf: "start", padding: "14px 16px", borderRadius: "18px 18px 18px 4px", background: "#101010", border: "1px solid var(--line)", display: "flex", gap: 6 }}><span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" /></div> : null}
          </div>
        </div>

        <form onSubmit={submit} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, padding: 14, borderTop: "1px solid var(--line)", background: "#0c0c0c" }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about training, recovery or nutrition..." disabled={loading} style={{ minHeight: 52, borderRadius: 14, border: "1px solid var(--line)", background: "#101010", color: "#fff", padding: "0 15px", outline: "none" }} />
          <button disabled={loading || !input.trim()} style={{ minHeight: 52, padding: "0 19px", borderRadius: 14, border: "none", background: "var(--accent)", color: "#080808", fontWeight: 1000, cursor: "pointer" }}>Send</button>
        </form>
      </section>

      <style>{`
        .typing-dot{width:7px;height:7px;border-radius:50%;background:var(--accent);animation:aiTyping 1.1s ease-in-out infinite}
        .typing-dot:nth-child(2){animation-delay:.14s}.typing-dot:nth-child(3){animation-delay:.28s}
        @keyframes aiTyping{0%,60%,100%{transform:translateY(0);opacity:.35}30%{transform:translateY(-5px);opacity:1}}
        @media(max-width:840px){.ai-chat-grid{grid-template-columns:1fr!important}.ai-chat-panel{min-height:640px!important;height:72svh!important}}
      `}</style>
    </div>
  );
}

const toolbarButton = { minHeight: 36, padding: "0 11px", borderRadius: 10, border: "1px solid var(--line)", background: "#111", color: "#fff", fontSize: 11, fontWeight: 900, cursor: "pointer" };
const miniButton = { minHeight: 28, padding: "0 8px", borderRadius: 8, border: "1px solid var(--line)", background: "transparent", color: "var(--muted)", fontSize: 10, cursor: "pointer" };
