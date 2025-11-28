import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://crazytime.p.rapidapi.com/stat', {
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
      'x-rapidapi-host': 'crazytime.p.rapidapi.com',
    },
  });

  if (!res.ok) return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });

  const data = await res.json();
  return NextResponse.json(data);
}
