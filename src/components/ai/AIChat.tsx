"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starters = [
  "Create a 4-day muscle gain workout",
  "How much protein should I target?",
  "I missed two workouts. Adjust my week.",
  "Suggest a lighter recovery session",
];

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m the APEX AI Fitness Assistant. I can help with workouts, nutrition structure, recovery and gym planning. I won’t diagnose injuries or medical conditions.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(text: string) {
    const clean = text.trim();
    if (!clean || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "chat",
          messages: nextMessages,
          profile: {
            goal: "Muscle gain",
            level: "Intermediate",
            daysPerWeek: 4,
            preferredTime: "Evening",
          },
        }),
      });

      const data = (await response.json()) as { text?: string; error?: string };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.text || data.error || "I could not generate a response right now.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The AI service is unavailable right now. Your member dashboard and other gym features still work normally.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <div className="ai-chat-grid" style={{ display: "grid", gridTemplateColumns: ".78fr 1.22fr", gap: 18 }}>
      <aside className="glass-card" style={{ padding: 22, alignSelf: "start" }}>
        <div className="eyebrow">Quick prompts</div>
        <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
          {starters.map((starter) => (
            <button
              key={starter}
              type="button"
              onClick={() => void ask(starter)}
              style={{
                padding: "13px 14px",
                borderRadius: 13,
                border: "1px solid var(--line)",
                background: "#101010",
                color: "#fff",
                textAlign: "left",
                lineHeight: 1.5,
                cursor: "pointer",
              }}
            >
              {starter}
            </button>
          ))}
        </div>

        <div className="divider" style={{ margin: "22px 0" }} />
        <p className="muted" style={{ fontSize: 12, lineHeight: 1.7 }}>
          Fitness guidance is informational. For pain, injury, medication, pregnancy or medical concerns, use an appropriate qualified clinician.
        </p>
      </aside>

      <section
        className="glass-card"
        style={{
          minHeight: 620,
          display: "grid",
          gridTemplateRows: "1fr auto",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: 22, overflowY: "auto", maxHeight: 620 }}>
          <div style={{ display: "grid", gap: 12 }}>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                style={{
                  maxWidth: "88%",
                  justifySelf: message.role === "user" ? "end" : "start",
                  padding: "14px 16px",
                  borderRadius: message.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: message.role === "user" ? "var(--accent)" : "#121212",
                  color: message.role === "user" ? "#080808" : "#fff",
                  border: message.role === "user" ? "none" : "1px solid var(--line)",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                }}
              >
                {message.content}
              </div>
            ))}
            {loading ? <div className="muted">APEX AI is thinking…</div> : null}
          </div>
        </div>

        <form
          onSubmit={submit}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 10,
            padding: 16,
            borderTop: "1px solid var(--line)",
            background: "#0c0c0c",
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about training, recovery or nutrition..."
            style={{
              minHeight: 50,
              borderRadius: 14,
              border: "1px solid var(--line)",
              background: "#101010",
              color: "#fff",
              padding: "0 15px",
              outline: "none",
            }}
          />
          <button
            disabled={loading}
            style={{
              minHeight: 50,
              padding: "0 18px",
              borderRadius: 14,
              border: "none",
              background: "var(--accent)",
              color: "#080808",
              fontWeight: 1000,
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>

      <style>{`
        @media(max-width:840px){
          .ai-chat-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
