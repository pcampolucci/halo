import type { Meta, StoryObj } from "@storybook/react-vite"

import { Bubble, BubbleContent, BubbleGroup } from "./bubble"

const meta = {
  title: "UI/Bubble",
  component: Bubble,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "muted",
        "tinted",
        "outline",
        "ghost",
        "destructive",
      ],
    },
  },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Bubble>
      <BubbleContent>Sync complete — 12 new activities.</BubbleContent>
    </Bubble>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <BubbleGroup className="w-80">
      {(
        [
          "default",
          "secondary",
          "muted",
          "tinted",
          "outline",
          "ghost",
          "destructive",
        ] as const
      ).map((variant) => (
        <Bubble key={variant} variant={variant}>
          <BubbleContent>{variant}</BubbleContent>
        </Bubble>
      ))}
    </BubbleGroup>
  ),
}
