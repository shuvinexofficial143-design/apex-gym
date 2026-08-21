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

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

function systemPrompt(
  mode: AIRequest["mode"],
  profile?: Record<string, unknown>,
) {
  const base = `
You are APEX AI, a fitness assistant inside a premium gym member platform.

Be practical, concise and structured.
Do not diagnose medical conditions or injuries.
If the user describes significant pain, injury, fainting, breathing difficulty, medication issues, eating-disorder behavior, pregnancy-specific risk, or another medical concern, advise them to seek an appropriate qualified clinician instead of giving a diagnosis.
Do not promise guaranteed fitness results.
For exercise plans, include progression and recovery guidance.
For nutrition plans, treat calorie and macronutrient values as approximate and keep guidance general rather than clinical.

Optional member profile:
${JSON.stringify(profile ?? {})}
`.trim();

  if (mode === "workout") {
    return `${base}

Create workout plans with clear training days, exercises, sets, reps, rest periods and simple progression notes.`;
  }

  if (mode === "diet") {
    return `${base}

Create practical meal structures with approximate calories and protein. Avoid medical diet prescriptions.`;
  }

  return `${base}

Answer questions about training, recovery, general nutrition structure and gym usage.`;
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

Progression:
When all target reps are completed with good form, add a small amount of load next session. Keep 1–3 reps in reserve on most working sets.`;
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

Use your own calorie and protein targets from the APEX calculators and adjust portion sizes to those targets.`;
  }

  return `I’m currently running in DEMO AI MODE because OPENAI_API_KEY is not configured yet.

Once the OpenAI API key is added, I can answer live fitness questions and generate workout or diet structures using GPT-4o mini.`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AIRequest;
    const mode = body.mode ?? "chat";
    const messages = Array.isArray(body.messages)
      ? body.messages.slice(-12)
      : [];

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "At least one message is required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        text: demoFallback(mode),
        provider: "demo",
      });
    }

    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 1200,
        messages: [
          {
            role: "system",
            content: systemPrompt(mode, body.profile),
          },
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
      console.error(
        "OpenAI API error:",
        response.status,
        detail.slice(0, 500),
      );

      return NextResponse.json({
        text: demoFallback(mode),
        provider: "demo",
        warning: "Live OpenAI request failed; demo response returned.",
      });
    }

    const data = (await response.json()) as {
      choices?: Array<{
        message?: {
          content?: string;
        };
      }>;
    };

    const text = data.choices?.[0]?.message?.content?.trim();

    if (!text) {
      return NextResponse.json({
        text: demoFallback(mode),
        provider: "demo",
      });
    }

    return NextResponse.json({
      text,
      provider: "openai",
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    });
  } catch (error) {
    console.error("AI route failure:", error);

    return NextResponse.json(
      { error: "AI request failed." },
      { status: 500 },
    );
  }
}
