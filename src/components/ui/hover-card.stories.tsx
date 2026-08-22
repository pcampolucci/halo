import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"

const meta = {
  title: "UI/Hover Card",
  component: HoverCard,
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@pietro-campolucci</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="text-sm font-medium">Pietro Campolucci</div>
        <div className="text-sm text-muted-foreground">
          Building Orbe, a personal localhost dashboard.
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
