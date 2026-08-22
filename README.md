# halo

Personal React component design system. Previewed in Storybook; will be
consumed as a package by Orbe's future TypeScript/React UI layer.

Derived from [shadcn/ui](https://ui.shadcn.com) — component source under
`src/components/ui` originates there (see `LICENSE.md`), restructured here
into a real importable, buildable package instead of the copy-paste CLI/
registry pattern shadcn/ui normally uses.

## Structure

```
src/
  components/ui/   # all components, one file each, e.g. button.tsx + button.stories.tsx
  hooks/            # use-mobile, etc.
  lib/              # cn() utility, message-scroller + use-render (used by chat components)
  styles/
    base.css        # data-state variants, keyframes, scroll-fade/shimmer utilities
    globals.css     # Tailwind entry + design tokens (:root / .dark) — imported by src/index.ts
  index.ts          # barrel re-exporting every component
```

Every component also has its own `package.json` export subpath (e.g.
`halo/button`) so a consumer only pulls in what it actually imports.

## Commands

```bash
pnpm install
pnpm storybook         # dev server on :6006
pnpm build              # library build -> dist/ (per-component ESM + .d.ts + styles.css)
pnpm build-storybook    # static Storybook build
pnpm typecheck
```

## Using components elsewhere (e.g. from Orbe)

```ts
import { Button } from "halo/button"
import "halo/styles.css" // once, anywhere in the consuming app
```

`react` / `react-dom` (^19) are peer dependencies — the consumer supplies
them. Styling ships as a single precompiled CSS file (`dist/styles.css`),
so the consumer does not need its own Tailwind setup to render components
correctly.

## Adding a component

Drop a new file in `src/components/ui/`, add a sibling `*.stories.tsx`,
then add its subpath to `exports` in `package.json` (mirror an existing
entry) and re-run `pnpm build`.
