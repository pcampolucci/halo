import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "./label"
import { RadioGroup, RadioGroupItem } from "./radio-group"

const meta = {
  title: "UI/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="weekly">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="daily" id="daily" />
        <Label htmlFor="daily">Daily</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="weekly" id="weekly" />
        <Label htmlFor="weekly">Weekly</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="monthly" id="monthly" />
        <Label htmlFor="monthly">Monthly</Label>
      </div>
    </RadioGroup>
  ),
}
