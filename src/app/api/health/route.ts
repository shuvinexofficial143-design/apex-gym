import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "apex-gym",
    version: "0.1.0",
    aiProvider: "openai",
    aiModel: process.env.OPENAI_MODEL || "gpt-4o-mini",
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    timestamp: new Date().toISOString(),
  });
}
