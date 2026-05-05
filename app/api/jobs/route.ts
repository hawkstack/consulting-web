import { NextResponse } from "next/server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ;

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/jobs`, {
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to load jobs.",
      },
      {
        status: 500,
      }
    );
  }
}
