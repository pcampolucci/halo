import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar } from "./calendar"

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Calendar mode="single" defaultMonth={new Date(2026, 7)} className="rounded-md border" />
  ),
}
