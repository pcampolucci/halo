import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="cycling" className="w-96">
      <TabsList>
        <TabsTrigger value="cycling">Cycling</TabsTrigger>
        <TabsTrigger value="running">Running</TabsTrigger>
        <TabsTrigger value="skiing">Skiing</TabsTrigger>
      </TabsList>
      <TabsContent value="cycling" className="text-sm text-muted-foreground">
        142.3 km this week.
      </TabsContent>
      <TabsContent value="running" className="text-sm text-muted-foreground">
        18.2 km this week.
      </TabsContent>
      <TabsContent value="skiing" className="text-sm text-muted-foreground">
        No activity this week.
      </TabsContent>
    </Tabs>
  ),
}

export const Line: Story = {
  render: () => (
    <Tabs defaultValue="cycling" className="w-96">
      <TabsList variant="line">
        <TabsTrigger value="cycling">Cycling</TabsTrigger>
        <TabsTrigger value="running">Running</TabsTrigger>
      </TabsList>
      <TabsContent value="cycling" className="text-sm text-muted-foreground">
        142.3 km this week.
      </TabsContent>
      <TabsContent value="running" className="text-sm text-muted-foreground">
        18.2 km this week.
      </TabsContent>
    </Tabs>
  ),
}
