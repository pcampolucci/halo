import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./chart"

const data = [
  { week: "Aug 3", distance: 42 },
  { week: "Aug 10", distance: 61 },
  { week: "Aug 17", distance: 38 },
  { week: "Aug 22", distance: 74 },
]

const config = {
  distance: { label: "Distance (km)", color: "var(--chart-1)" },
} satisfies ChartConfig

function ChartDemo() {
  return (
    <ChartContainer config={config} className="h-64 w-96">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="week" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="distance" fill="var(--color-distance)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

const meta = {
  title: "UI/Chart",
  component: ChartDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
