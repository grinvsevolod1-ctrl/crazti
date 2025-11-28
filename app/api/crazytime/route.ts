import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch("https://crazytime.p.rapidapi.com/stat", {
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
      "x-rapidapi-host": "crazytime.p.rapidapi.com"
    }
  });
  const data = await res.json();

  // здесь можно сохранить в базу (Supabase/Neon)
  return NextResponse.json(data);
}
