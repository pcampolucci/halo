import type { Meta, StoryObj } from "@storybook/react-vite"

import { Separator } from "./separator"

const meta = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-72">
      <div className="text-sm">Finances</div>
      <Separator className="my-3" />
      <div className="text-sm">Activities</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-3 text-sm">
      <span>Finances</span>
      <Separator orientation="vertical" />
      <span>Activities</span>
      <Separator orientation="vertical" />
      <span>Photos</span>
    </div>
  ),
}
