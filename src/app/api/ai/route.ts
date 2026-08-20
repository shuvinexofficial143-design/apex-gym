import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type AIRequest = {
  mode?: "chat" | "workout" | "diet";
  messages?: ChatMessage[];
  profile?: Record<string, unknown>;
};

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

function systemPrompt(mode: AIRequest["mode"], profile?: Record<string, unknown>) {
  const base = `
You are APEX AI, a fitness assistant inside a premium gym member platform.
Be practical, concise and structured.
Do not diagnose medical conditions or injuries.
If the user describes significant pain, injury, fainting, breathing difficulty, medication issues, eating-disorder behavior, pregnancy-specific risk, or another medical concern, tell them to seek an appropriate qualified clinician instead of giving a diagnosis.
Do not promise guaranteed results.
For exercise plans, include progression and recovery guidance.
For food plans, treat calorie/macronutrient values as approximate and keep guidance general rather than clinical.
The user's optional profile is: ${JSON.stringify(profile ?? {})}.
`.trim();

  if (mode === "workout") {
    return `${base}\nCreate workout plans with clear days, exercises, sets, reps, rest and simple progression notes.`;
  }
  if (mode === "diet") {
    return `${base}\nCreate practical meal structures with approximate calories and protein. Avoid medical diet prescriptions.`;
  }
  return `${base}\nAnswer member questions about training, recovery, nutrition structure and gym usage.`;
}

function demoFallback(mode: AIRequest["mode"]) {
  if (mode === "workout") {
    return `DEMO AI MODE

Day 1 — Upper Strength
• Bench Press — 4 × 6
• Lat Pulldown — 4 × 8
• Incline Dumbbell Press — 3 × 10
• Seated Cable Row — 3 × 10
• Lateral Raise — 3 × 15

Day 2 — Lower Strength
• Back Squat — 4 × 6
• Romanian Deadlift — 3 × 8
• Leg Press — 3 × 10
• Hamstring Curl — 3 × 12
• Calf Raise — 3 × 15

Progression: when all target reps are completed with good form, add a small amount of load next session. Keep 1–3 reps in reserve on most working sets.`;
  }

  if (mode === "diet") {
    return `DEMO AI MODE

Breakfast
• Oats + milk + banana + protein source

Lunch
• Rice/roti + dal + paneer/chicken + vegetables + curd

Pre-workout
• Banana + toast + coffee if normally tolerated

Dinner
• Roti/rice + protein source + vegetables + salad

Use your own calorie and protein targets from the APEX calculators. Portion sizes should be adjusted to those targets.`;
  }

  return `I’m running in DEMO AI MODE because GROQ_API_KEY is not configured yet.

I can still demonstrate the assistant flow. For example, I can structure a 4-day workout around Upper / Lower sessions, keep progression gradual, and use the dashboard’s calorie/protein targets for general nutrition planning.

Add GROQ_API_KEY to .env.local to enable live AI responses.`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AIRequest;
    const mode = body.mode ?? "chat";
    const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];

    if (messages.length === 0) {
      return NextResponse.json({ error: "At least one message is required." }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        text: demoFallback(mode),
        provider: "demo",
      });
    }

    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
        temperature: 0.4,
        max_completion_tokens: 1200,
        messages: [
          { role: "system", content: systemPrompt(mode, body.profile) },
          ...messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Groq API error:", response.status, detail);
      return NextResponse.json({
        text: demoFallback(mode),
        provider: "demo",
        warning: "Live AI request failed; demo response returned.",
      });
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) {
      return NextResponse.json({ text: demoFallback(mode), provider: "demo" });
    }

    return NextResponse.json({
      text,
      provider: "groq",
    });
  } catch (error) {
    console.error("AI route failure:", error);
    return NextResponse.json({ error: "AI request failed." }, { status: 500 });
  }
}
