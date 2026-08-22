import type { Meta, StoryObj } from "@storybook/react-vite"
import { CameraIcon, FileTextIcon, HomeIcon, WalletIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar"

const meta = {
  title: "UI/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { title: "Finances", icon: WalletIcon },
  { title: "Activities", icon: HomeIcon },
  { title: "Photos", icon: CameraIcon },
  { title: "Reports", icon: FileTextIcon },
]

export const Default: Story = {
  render: () => (
    <SidebarProvider className="h-96 rounded-md border">
      <Sidebar collapsible="none">
        <SidebarHeader className="text-sm font-semibold">Orbe</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigate</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="flex items-center gap-2 p-4">
        <SidebarTrigger />
        <span className="text-sm text-muted-foreground">Page content</span>
      </SidebarInset>
    </SidebarProvider>
  ),
}
