import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "./message-scroller"

const meta = {
  title: "UI/Message Scroller",
  component: MessageScroller,
  tags: ["autodocs"],
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <MessageScrollerProvider>
      <MessageScroller className="h-64 w-80 rounded-md border">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {Array.from({ length: 15 }, (_, i) => (
              <MessageScrollerItem key={i} className="px-4 text-sm">
                Activity #{i + 1} synced
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  ),
}
