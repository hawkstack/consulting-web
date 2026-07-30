import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

const fallbackVersion = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev.local";
const fallbackRunId = process.env.NEXT_PUBLIC_DEPLOY_RUN_ID ?? null;
const fallbackCommit = process.env.NEXT_PUBLIC_DEPLOY_COMMIT_SHA ?? null;

export async function GET() {
  const versionFile = join(process.cwd(), "public", "version.json");

  try {
    const fileContents = await readFile(versionFile, "utf8");
    const versionData = JSON.parse(fileContents);
    return NextResponse.json(versionData);
  } catch (error) {
    return NextResponse.json({
      version: fallbackVersion,
      runId: fallbackRunId,
      commit: fallbackCommit,
    });
  }
}
