import {NextResponse} from "next/server";
import {isAppLocale, localeCookieName} from "@/i18n/config";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const locale =
    body && typeof body === "object" && "locale" in body
      ? String(body.locale)
      : undefined;

  if (!isAppLocale(locale)) {
    return NextResponse.json({error: "Unsupported locale"}, {status: 400});
  }

  const response = NextResponse.json({locale});
  response.headers.set("Cache-Control", "no-store");
  response.cookies.set(localeCookieName, locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
