import type { Meta, StoryObj } from "@storybook/react-vite"

import { H1, H2, H3, H4, P, Lead, Large, Small, Muted } from "./typography"

const meta = {
  title: "UI/Typography",
  component: H1,
  tags: ["autodocs"],
} satisfies Meta<typeof H1>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <H1>The quick brown fox</H1>
      <H2>The quick brown fox</H2>
      <H3>The quick brown fox</H3>
      <H4>The quick brown fox</H4>
      <Lead>The quick brown fox jumps over the lazy dog.</Lead>
      <P>The quick brown fox jumps over the lazy dog.</P>
      <Large>The quick brown fox jumps over the lazy dog.</Large>
      <Small>The quick brown fox jumps over the lazy dog.</Small>
      <Muted>The quick brown fox jumps over the lazy dog.</Muted>
    </div>
  ),
}
