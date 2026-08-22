import type { Meta, StoryObj } from "@storybook/react-vite"
import { MapPinIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "./marker"

const meta = {
  title: "UI/Marker",
  component: Marker,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "separator", "border"],
    },
  },
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Marker>
      <MarkerIcon>
        <MapPinIcon />
      </MarkerIcon>
      <MarkerContent>42.3 km · Central Park loop</MarkerContent>
    </Marker>
  ),
}

export const Separator: Story = {
  render: () => (
    <Marker variant="separator" className="w-64">
      <MarkerContent>Aug 22</MarkerContent>
    </Marker>
  ),
}

export const Border: Story = {
  render: () => (
    <Marker variant="border" className="w-64">
      <MarkerContent>Section heading</MarkerContent>
    </Marker>
  ),
}
