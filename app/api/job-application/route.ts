import { NextResponse } from "next/server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(
      `${API_BASE_URL}/api/job-application`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit application.",
      },
      {
        status: 500,
      }
    );
  }
}
