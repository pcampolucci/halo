import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "./input"

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Email",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Input {...args} className="w-72" />,
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <Input {...args} className="w-72" />,
}

export const File: Story = {
  args: { type: "file" },
  render: (args) => <Input {...args} className="w-72" />,
}
