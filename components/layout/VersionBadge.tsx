"use client";
import type { ReactElement } from "react";

export function VersionBadge(): ReactElement {
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "dev.local";
  const runId = process.env.NEXT_PUBLIC_DEPLOY_RUN_ID;
  const commit = process.env.NEXT_PUBLIC_DEPLOY_COMMIT_SHA;

  const label = runId
    ? `Build version: ${version} • run ${runId}`
    : `Build version: ${version}`;

  return (
    <div className="text-center text-xs mt-3 text-gray-400">
      {label}
      {commit ? <span>{` • commit ${commit.slice(0, 7)}`}</span> : null}
    </div>
  );
}
