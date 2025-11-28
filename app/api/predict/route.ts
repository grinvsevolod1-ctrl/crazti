import { NextResponse } from 'next/server';

const outcomes = ["1","2","5","10","20","coinflip","pachinko","cashhunt","crazytime"];

export async function GET() {
  // загружаем последние исходы (из базы или из /api/crazytime)
  const lastOutcomes = ["1","2","10","coinflip","2","cashhunt"]; // пример

  const counts: Record<string, number> = {};
  outcomes.forEach(o => counts[o] = 1); // Лаплас сглаживание

  lastOutcomes.forEach(o => counts[o]++);
  const total = Object.values(counts).reduce((a,b)=>a+b,0);

  const probs = Object.fromEntries(outcomes.map(o => [o, counts[o]/total]));

  return NextResponse.json({ probs });
}
