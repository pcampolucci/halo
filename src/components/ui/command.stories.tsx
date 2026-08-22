import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command"

const meta = {
  title: "UI/Command",
  component: Command,
  tags: ["autodocs"],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-md border">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem>
            Finances
            <CommandShortcut>⌘F</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Activities
            <CommandShortcut>⌘A</CommandShortcut>
          </CommandItem>
          <CommandItem>Photos</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>Sync Strava</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
