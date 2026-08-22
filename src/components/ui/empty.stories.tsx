import type { Meta, StoryObj } from "@storybook/react-vite"
import { InboxIcon } from "lucide-react"

import { Button } from "./button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty"

const meta = {
  title: "UI/Empty",
  component: Empty,
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty className="w-96 border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No activities yet</EmptyTitle>
        <EmptyDescription>
          Sync with Strava to import your first activity.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Sync now</Button>
      </EmptyContent>
    </Empty>
  ),
}
