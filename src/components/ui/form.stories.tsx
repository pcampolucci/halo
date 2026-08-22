import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"

import { Button } from "./button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form"
import { Input } from "./input"

function FormDemo() {
  const form = useForm({ defaultValues: { name: "" } })

  return (
    <Form {...form}>
      <form className="w-80 space-y-6">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Name is required." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expense name</FormLabel>
              <FormControl>
                <Input placeholder="Rent" {...field} />
              </FormControl>
              <FormDescription>Shown on the finances page.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}

const meta = {
  title: "UI/Form",
  component: FormDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof FormDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
