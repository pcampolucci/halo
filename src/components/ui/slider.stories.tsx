import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "./slider"

const meta = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Slider {...args} className="w-72" />,
}

export const Range: Story = {
  args: { defaultValue: [25, 75] },
  render: (args) => <Slider {...args} className="w-72" />,
}
