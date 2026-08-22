import type { Meta, StoryObj } from "@storybook/react-vite"

const SIZES = [
  { cls: "text-xs", label: "xs", rem: "0.75rem" },
  { cls: "text-sm", label: "sm", rem: "0.875rem" },
  { cls: "text-base", label: "base", rem: "1rem" },
  { cls: "text-lg", label: "lg", rem: "1.125rem" },
  { cls: "text-xl", label: "xl", rem: "1.25rem" },
  { cls: "text-2xl", label: "2xl", rem: "1.5rem" },
  { cls: "text-3xl", label: "3xl", rem: "1.875rem" },
  { cls: "text-4xl", label: "4xl", rem: "2.25rem" },
  { cls: "text-5xl", label: "5xl", rem: "3rem" },
] as const

const WEIGHTS = [
  { cls: "font-normal", label: "Normal", value: "400" },
  { cls: "font-medium", label: "Medium", value: "500" },
  { cls: "font-semibold", label: "Semibold", value: "600" },
  { cls: "font-bold", label: "Bold", value: "700" },
] as const

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

function Typography() {
  return (
    <div className="flex max-w-3xl flex-col gap-8 bg-background p-6 text-foreground">
      <div>
        <h2 className="text-lg font-semibold">Typography</h2>
        <p className="text-sm text-muted-foreground">
          Font token (<code>--font-sans</code>) defined in{" "}
          <code>src/styles/globals.css</code>. Halo is a single-typeface
          system — there is no separate monospace font; numeric alignment
          (chart values, etc.) uses <code>tabular-nums</code> instead.
        </p>
      </div>

      <Section
        title="Sans"
        description={`"Raleway Variable" (self-hosted via @fontsource-variable/raleway), falling back to ui-sans-serif, system-ui, -apple-system, sans-serif. Applied to every component by default — no font-sans class needed.`}
      >
        <p className="font-sans text-2xl">The quick brown fox jumps.</p>
      </Section>

      <Section title="Type scale">
        <div className="flex flex-col gap-3">
          {SIZES.map((s) => (
            <div key={s.cls} className="flex items-baseline gap-4">
              <span className="w-16 shrink-0 text-xs text-muted-foreground">
                {s.label}
              </span>
              <span className={`${s.cls} truncate`}>
                The quick brown fox jumps over the lazy dog
              </span>
              <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                {s.rem}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Weights">
        <div className="flex flex-col gap-3">
          {WEIGHTS.map((w) => (
            <div key={w.cls} className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-muted-foreground">
                {w.label}
              </span>
              <span className={`${w.cls} text-xl`}>
                The quick brown fox jumps over the lazy dog
              </span>
              <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                {w.value}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

const meta = {
  title: "Foundations/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
