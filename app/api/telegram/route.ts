import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message
    })
  });

  return NextResponse.json({ status: "ok" });
}
