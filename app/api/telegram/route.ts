import { NextResponse } from 'next/server';
import { sendTelegramMessage } from '@/lib/telegram';

export async function POST(req: Request) {
  const { message } = await req.json();
  const ok = await sendTelegramMessage(message);
  return NextResponse.json({ status: ok ? 'sent' : 'error' });
}
