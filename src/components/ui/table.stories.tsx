import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const expenses = [
  { name: "Rent", account: "Checking", cost: "$1,200.00" },
  { name: "Internet", account: "Checking", cost: "$60.00" },
  { name: "Gym", account: "Credit card", cost: "$45.00" },
]

export const Default: Story = {
  render: () => (
    <Table className="w-[28rem]">
      <TableCaption>Fixed monthly expenses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Expense</TableHead>
          <TableHead>Account</TableHead>
          <TableHead className="text-right">Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((e) => (
          <TableRow key={e.name}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.account}</TableCell>
            <TableCell className="text-right">{e.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
