import type { Meta, StoryObj } from "@storybook/react-vite"

import { NativeSelect, NativeSelectOption } from "./native-select"

const meta = {
  title: "UI/Native Select",
  component: NativeSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect defaultValue="running">
      <NativeSelectOption value="cycling">Cycling</NativeSelectOption>
      <NativeSelectOption value="running">Running</NativeSelectOption>
      <NativeSelectOption value="skiing">Skiing</NativeSelectOption>
      <NativeSelectOption value="other">Other</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm" defaultValue="running">
      <NativeSelectOption value="cycling">Cycling</NativeSelectOption>
      <NativeSelectOption value="running">Running</NativeSelectOption>
    </NativeSelect>
  ),
}
