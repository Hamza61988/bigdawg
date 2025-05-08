

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

 
  if (email === 'hamza' && password === '12345678') {
    return NextResponse.json({ message: 'Login successful' });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
