import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "./progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 60,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-72" />,
}

export const Empty: Story = {
  args: { value: 0 },
  render: (args) => <Progress {...args} className="w-72" />,
}

export const Complete: Story = {
  args: { value: 100 },
  render: (args) => <Progress {...args} className="w-72" />,
}
