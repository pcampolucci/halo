import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: { type: "single" },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Orbe?</AccordionTrigger>
        <AccordionContent>
          A single-user personal localhost dashboard for finances, activities,
          photos, and reports.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where does data live?</AccordionTrigger>
        <AccordionContent>
          On a local data mount configured in config.yml — no external
          database.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it multi-user?</AccordionTrigger>
        <AccordionContent>No, it&apos;s single-user by design.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
