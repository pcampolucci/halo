import type { Meta, StoryObj } from "@storybook/react-vite"
import { BikeIcon } from "lucide-react"

import { Button } from "./button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item"

const meta = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item variant="outline" className="w-96">
      <ItemMedia variant="icon">
        <BikeIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Morning ride</ItemTitle>
        <ItemDescription>42.3 km · 1h 24m · Aug 22</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="ghost">
          View
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const Group: Story = {
  render: () => (
    <ItemGroup className="w-96 rounded-md border">
      <Item>
        <ItemMedia variant="icon">
          <BikeIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Morning ride</ItemTitle>
          <ItemDescription>42.3 km · Aug 22</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <BikeIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evening ride</ItemTitle>
          <ItemDescription>18.1 km · Aug 21</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
