import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox"

const meta = {
  title: "UI/Combobox",
  component: Combobox,
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const sports = [
  { value: "cycling", label: "Cycling" },
  { value: "running", label: "Running" },
  { value: "skiing", label: "Skiing" },
  { value: "other", label: "Other" },
]

export const Default: Story = {
  render: () => (
    <Combobox items={sports}>
      <ComboboxInput placeholder="Search sport..." className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No sport found.</ComboboxEmpty>
        <ComboboxList>
          {(item: (typeof sports)[number]) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
