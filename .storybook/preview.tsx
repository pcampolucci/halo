import type { Preview } from "@storybook/react-vite"

import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "oklch(1 0 0)" },
        dark: { name: "dark", value: "oklch(0.145 0 0)" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === "oklch(0.145 0 0)"
      document.documentElement.classList.toggle("dark", isDark)
      return <Story />
    },
  ],
}

export default preview
