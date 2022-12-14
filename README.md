## What's inside?

This repo uses [turborepo](https://turborepo.org/) as monorepo manager and [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `home`: a [Next.js](https://nextjs.org) app that contains Storyflow's landing pages.
- `app`: another [Next.js](https://nextjs.org) app that contains Storyflow's dashboard and widget integration.
- `studio`: another [Next.js](https://nextjs.org) app that contains canvas based WYSIWYG editor.

- `storyflow-widget`: a Typescript library that contains Storyflow's widget code.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd storyflow
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd storyflow
pnpm run dev
```
