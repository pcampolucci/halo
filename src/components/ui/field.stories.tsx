import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "./field"
import { Input } from "./input"

const meta = {
  title: "UI/Field",
  component: Field,
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FieldSet className="w-96">
      <FieldLegend>Fixed expense</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-name">Name</FieldLabel>
          <FieldContent>
            <Input id="field-name" placeholder="Rent" />
            <FieldDescription>Shown on the finances page.</FieldDescription>
          </FieldContent>
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel htmlFor="field-cost">Cost</FieldLabel>
          <FieldContent>
            <Input id="field-cost" placeholder="0.00" />
            <FieldError errors={[{ message: "Cost is required." }]} />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
