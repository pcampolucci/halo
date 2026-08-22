import type { Meta, StoryObj } from "@storybook/react-vite"

function Swatch({ token, label }: { token: string; label?: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-16 w-full rounded-md border"
        style={{ backgroundColor: `var(--${token})` }}
      />
      <div className="text-xs font-medium">{label ?? token}</div>
      <div className="text-[10px] text-muted-foreground">--{token}</div>
    </div>
  )
}

function SwatchGroup({
  title,
  tokens,
}: {
  title: string
  tokens: { token: string; label?: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {tokens.map((t) => (
          <Swatch key={t.token} {...t} />
        ))}
      </div>
    </div>
  )
}

function Palette() {
  return (
    <div className="flex max-w-4xl flex-col gap-8 bg-background p-6 text-foreground">
      <div>
        <h2 className="text-lg font-semibold">Design tokens</h2>
        <p className="text-sm text-muted-foreground">
          CSS custom properties defined in{" "}
          <code>src/styles/globals.css</code>. Switch
          the canvas background (Storybook toolbar) between light/dark to see
          both palettes — the same token names resolve to different values in
          each.
        </p>
      </div>

      <SwatchGroup
        title="Base"
        tokens={[{ token: "background" }, { token: "foreground" }]}
      />

      <SwatchGroup
        title="Card / Popover"
        tokens={[
          { token: "card" },
          { token: "card-foreground" },
          { token: "popover" },
          { token: "popover-foreground" },
        ]}
      />

      <SwatchGroup
        title="Primary / Secondary"
        tokens={[
          { token: "primary" },
          { token: "primary-foreground" },
          { token: "secondary" },
          { token: "secondary-foreground" },
        ]}
      />

      <SwatchGroup
        title="Muted / Accent"
        tokens={[
          { token: "muted" },
          { token: "muted-foreground" },
          { token: "accent" },
          { token: "accent-foreground" },
        ]}
      />

      <SwatchGroup
        title="Destructive"
        tokens={[
          { token: "destructive" },
          { token: "destructive-foreground" },
        ]}
      />

      <SwatchGroup
        title="Border / Input / Ring"
        tokens={[{ token: "border" }, { token: "input" }, { token: "ring" }]}
      />

      <SwatchGroup
        title="Chart"
        tokens={[
          { token: "chart-1" },
          { token: "chart-2" },
          { token: "chart-3" },
          { token: "chart-4" },
          { token: "chart-5" },
        ]}
      />

      <SwatchGroup
        title="Sidebar"
        tokens={[
          { token: "sidebar" },
          { token: "sidebar-foreground" },
          { token: "sidebar-primary" },
          { token: "sidebar-primary-foreground" },
          { token: "sidebar-accent" },
          { token: "sidebar-accent-foreground" },
          { token: "sidebar-border" },
          { token: "sidebar-ring" },
        ]}
      />

      <SwatchGroup
        title="Selection"
        tokens={[{ token: "selection" }, { token: "selection-foreground" }]}
      />
    </div>
  )
}

const meta = {
  title: "Foundations/Palette",
  component: Palette,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Palette>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
