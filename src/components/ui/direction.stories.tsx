import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./button"
import { DirectionProvider } from "./direction"

const meta = {
  title: "UI/Direction",
  component: DirectionProvider,
  tags: ["autodocs"],
  args: { dir: "ltr" },
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

export const LeftToRight: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="flex w-72 justify-between rounded-md border p-3">
        <Button size="sm" variant="outline">
          Back
        </Button>
        <Button size="sm">Next</Button>
      </div>
    </DirectionProvider>
  ),
}

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div dir="rtl" className="flex w-72 justify-between rounded-md border p-3">
        <Button size="sm" variant="outline">
          Back
        </Button>
        <Button size="sm">Next</Button>
      </div>
    </DirectionProvider>
  ),
}
