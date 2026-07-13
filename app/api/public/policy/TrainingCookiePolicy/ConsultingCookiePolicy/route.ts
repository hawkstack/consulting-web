import { NextResponse } from "next/server";
import {
  getPublicBackendUrl,
  publicBackendPaths,
} from "@/lib/api/publicBackendEndpoints";

export async function GET() {
  try {
    const response = await fetch(
      getPublicBackendUrl(publicBackendPaths.consultingCookiePolicy),
      {
        cache: "no-store",
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
        message: "Unable to load cookie policy.",
      },
      {
        status: 500,
      },
    );
  }
}
