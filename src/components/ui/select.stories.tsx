import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select defaultValue="running">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Sport" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sport</SelectLabel>
          <SelectItem value="cycling">Cycling</SelectItem>
          <SelectItem value="running">Running</SelectItem>
          <SelectItem value="skiing">Skiing</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}
