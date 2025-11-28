import { NextResponse } from 'next/server';
import { bayesPredict } from '@/lib/model';

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/crazytime`);
  const data = await res.json();

  const lastOutcomes = data?.results?.map((r: any) => r.outcome?.value).filter(Boolean);
  const probs = bayesPredict(lastOutcomes || []);

  return NextResponse.json({ probs });
}
