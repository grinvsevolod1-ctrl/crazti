import { NextResponse } from 'next/server';
import { bayesPredict } from '@/lib/model';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/crazytime`, { cache: 'no-store' });
  const data = await res.json();

  const lastOutcomes = data?.results?.map((r: any) => r.outcome?.value).filter(Boolean);
  const probs = bayesPredict(lastOutcomes || []);

  return NextResponse.json({ lastOutcomes, probs });
}
