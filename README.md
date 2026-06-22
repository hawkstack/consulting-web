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

## Testing

This app uses Jest and Testing Library for unit, component, and integration-style tests.

Run the test suite locally:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate a coverage report:

```bash
npm run test:coverage
```

Pull requests targeting `main` run `npm test -- --ci` in GitHub Actions and fail when tests fail.
