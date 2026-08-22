import type { Meta, StoryObj } from "@storybook/react-vite"
import { BoldIcon } from "lucide-react"

import { Toggle } from "./toggle"

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
  args: {
    children: <BoldIcon />,
    "aria-label": "Toggle bold",
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: { variant: "outline" },
}

export const Pressed: Story = {
  args: { defaultPressed: true },
}
