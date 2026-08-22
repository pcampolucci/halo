import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"

import { Button } from "./button"
import { Toaster } from "./sonner"

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Sync complete", {
            description: "12 new activities imported.",
          })
        }
      >
        Trigger toast
      </Button>
      <Toaster />
    </div>
  ),
}
