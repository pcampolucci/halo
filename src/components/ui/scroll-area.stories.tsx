import type { Meta, StoryObj } from "@storybook/react-vite"

import { ScrollArea } from "./scroll-area"
import { Separator } from "./separator"

const meta = {
  title: "UI/Scroll Area",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-64 rounded-md border p-4">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i}>
          <div className="py-2 text-sm">Activity #{i + 1}</div>
          <Separator />
        </div>
      ))}
    </ScrollArea>
  ),
}
