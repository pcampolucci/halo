import { createRequire } from "node:module"
import { readdirSync } from "node:fs"
import { fileURLToPath, URL } from "node:url"

import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

const require = createRequire(import.meta.url)
const pkg = require("./package.json")

const src = fileURLToPath(new URL("./src", import.meta.url))

// Every declared dependency/peerDependency is external — the consumer's
// own bundler resolves these from node_modules, we only ship our source.
const externalPackages = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
]
const isExternal = (id: string) =>
  externalPackages.some((name) => id === name || id.startsWith(`${name}/`))

// One entry per component (plus the barrel) so consumers can import
// "halo/button" and only pull in that component's code.
const componentEntries = Object.fromEntries(
  readdirSync(`${src}/components/ui`)
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"))
    .map((f) => [
      `components/ui/${f.replace(/\.tsx$/, "")}`,
      `${src}/components/ui/${f}`,
    ])
)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: "src",
      exclude: [".storybook/**", "**/*.stories.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": src,
    },
  },
  build: {
    lib: {
      entry: {
        index: `${src}/index.ts`,
        ...componentEntries,
      },
      formats: ["es"],
      cssFileName: "styles",
    },
    rollupOptions: {
      external: isExternal,
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
})
