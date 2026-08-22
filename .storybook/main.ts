import { fileURLToPath, URL } from "node:url"

import tailwindcss from "@tailwindcss/vite"
import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)", "../src/**/*.mdx"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins ??= []
    config.plugins.push(tailwindcss())
    config.resolve ??= {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    }
    return config
  },
}

export default config
