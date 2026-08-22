import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "./textarea"

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Type your message here.",
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Textarea {...args} className="w-80" />,
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <Textarea {...args} className="w-80" />,
}
