import { NextResponse } from "next/server";
import {
  getPublicBackendUrl,
  publicBackendPaths,
} from "@/lib/api/publicBackendEndpoints";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const response = await fetch(
      getPublicBackendUrl(publicBackendPaths.consultingForms),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit form.",
      },
      {
        status: 500,
      },
    );
  }
}
