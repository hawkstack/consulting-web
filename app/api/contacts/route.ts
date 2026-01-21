// TEMP MOCK API
// This will be replaced once backend service is connected

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json(
    { message: "Contact API working", data: body },
    { status: 200 }
  );
}
