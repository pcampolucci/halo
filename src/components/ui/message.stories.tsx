import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarFallback } from "./avatar"
import { Bubble, BubbleContent } from "./bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "./message"

const meta = {
  title: "UI/Message",
  component: Message,
  tags: ["autodocs"],
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="w-96">
      <Message align="start">
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Assistant</MessageHeader>
          <Bubble align="start" variant="muted">
            <BubbleContent>Synced 12 new activities from Strava.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>Thanks, looks good.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
}
