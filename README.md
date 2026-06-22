This is a Next.js-based consulting platform which provides Red Hat–driven cloud, automation, and security services for modern enterprises

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment Version Proof of Concept

- Each GitHub Actions deployment generates a unique version value in the format `0.1.<run_number>`.
- The workflow writes `public/version.json` containing `version`, `runId`, and `commit`.
- The app exposes version information at `/version`.
- The footer displays the deployed build version.

### How to verify a deployment

1. Run the `CI Deploy` workflow.
2. Open `https://<your-host>/version` and verify the returned JSON contains:
   - `version`
   - `runId`
   - `commit`
3. Confirm the footer shows the same build version.
4. Match the `runId` to the GitHub Actions workflow run.
