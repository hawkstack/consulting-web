import { NextResponse } from "next/server";
import {
  getPublicBackendUrl,
  publicBackendPaths,
} from "@/lib/api/publicBackendEndpoints";

export async function GET() {
  try {
    const response = await fetch(
      getPublicBackendUrl(publicBackendPaths.consultingPrivacyPolicy),
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
        message: "Unable to load privacy policy.",
      },
      {
        status: 500,
      },
    );
  }
}
