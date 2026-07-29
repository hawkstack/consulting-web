import { NextResponse } from "next/server";
import {
  getPublicBackendUrl,
  publicBackendPaths,
} from "@/lib/api/publicBackendEndpoints";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(
      getPublicBackendUrl(publicBackendPaths.jobApplication),
      {
        method: "POST",
        body: formData,
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
        message: "Unable to submit application.",
      },
      {
        status: 500,
      },
    );
  }
}
