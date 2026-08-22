import type { Meta, StoryObj } from "@storybook/react-vite"
import { TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "./alert"

const meta = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Sync complete</AlertTitle>
      <AlertDescription>
        12 new activities were imported from Strava.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <TriangleAlertIcon />
      <AlertTitle>Sync failed</AlertTitle>
      <AlertDescription>
        Strava rate limit reached. Try again in 15 minutes.
      </AlertDescription>
    </Alert>
  ),
}
