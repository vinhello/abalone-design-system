import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { PageHeader } from "../../components/doc-section";

const colorGroups = [
  {
    title: "Primary Colors",
    description: "Main brand colors for primary actions and emphasis",
    colors: [
      { name: "Primary", var: "--primary", fg: "--primary-foreground" },
      { name: "Secondary", var: "--secondary", fg: "--secondary-foreground" },
    ],
  },
  {
    title: "Semantic Colors",
    description: "Colors with specific meaning for status and feedback",
    colors: [
      { name: "Success", var: "--success", fg: "--success-foreground" },
      { name: "Destructive", var: "--destructive", fg: "--destructive-foreground" },
      { name: "Warning", var: "--warning", fg: "--warning-foreground" },
      { name: "Info", var: "--info", fg: "--info-foreground" },
    ],
  },
  {
    title: "Surface Colors",
    description: "Background and container colors",
    colors: [
      { name: "Background", var: "--background", fg: "--foreground" },
      { name: "Card", var: "--card", fg: "--card-foreground" },
      { name: "Popover", var: "--popover", fg: "--popover-foreground" },
    ],
  },
  {
    title: "UI Colors",
    description: "Colors for UI elements and states",
    colors: [
      { name: "Muted", var: "--muted", fg: "--muted-foreground" },
      { name: "Accent", var: "--accent", fg: "--accent-foreground" },
      { name: "Border", var: "--border", fg: "--foreground" },
    ],
  },
];

function ColorSwatch({ name, colorVar, fgVar }: { name: string; colorVar: string; fgVar: string }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div
        className="h-24 flex items-center justify-center"
        style={{
          backgroundColor: `var(${colorVar})`,
          color: `var(${fgVar})`,
        }}
      >
        <span className="text-sm font-medium uppercase tracking-wide">{name}</span>
      </div>
      <div className="p-3 bg-card text-xs font-mono">
        <div className="font-semibold">{colorVar}</div>
        <div className="text-muted-foreground">{fgVar}</div>
      </div>
    </div>
  );
}

export function ColorsPage() {
  return (
    <div className="p-8 max-w-6xl">
      <PageHeader
        title="Colors"
        description="Modern color system with IT nostalgia. Designed for clarity, accessibility, and professional aesthetics. All colors meet WCAG 2.2 Level AA contrast requirements."
      />

      <div className="mb-8 border-2 border-primary/20 rounded-xl p-6 bg-gradient-to-br from-card to-muted/30">
        <h2 className="mb-4">Design Philosophy</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm tracking-wide mb-2 font-semibold text-primary">Light mode</h3>
            <p className="text-sm text-muted-foreground">
              Clean, modern palette with tech blues (#0066FF) and neutral grays. 
              Professional and approachable with subtle nods to classic IT interfaces.
            </p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide mb-2 font-semibold text-accent">Dark mode</h3>
            <p className="text-sm text-muted-foreground">
              Cyberpunk-inspired with deep dark blues, electric cyans (#22D3EE), 
              and matrix green (#3DD68C) for a modern terminal aesthetic.
            </p>
          </div>
        </div>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title} className="mb-12">
          <div className="mb-4">
            <h2 className="mb-1">{group.title}</h2>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.colors.map((color) => (
              <ColorSwatch
                key={color.name}
                name={color.name}
                colorVar={color.var}
                fgVar={color.fg}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Accessibility</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>WCAG 2.2 Level AA</CardTitle>
              <CardDescription>Contrast ratio requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Normal Text:</span>
                <span className="font-mono text-sm font-semibold">4.5:1 minimum</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Large Text:</span>
                <span className="font-mono text-sm font-semibold">3:1 minimum</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">UI Components:</span>
                <span className="font-mono text-sm font-semibold">3:1 minimum</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Blindness</CardTitle>
              <CardDescription>Not relying on color alone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                All semantic colors are accompanied by icons or text labels to ensure 
                information is conveyed through multiple channels.
              </p>
              <p>
                Success, error, and warning states use distinct patterns in addition 
                to color differentiation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border border-border rounded-lg p-6 bg-muted/50">
        <h3 className="text-sm tracking-wide mb-4 font-semibold">Usage in code</h3>
        <pre className="bg-background p-4 rounded-md border border-border text-xs overflow-x-auto">
          <code>{`/* Using color variables in CSS */
.my-element {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-color: var(--border);
}

/* Using with Tailwind */
<div className="bg-primary text-primary-foreground border-border">
  Content
</div>`}</code>
        </pre>
      </div>
    </div>
  );
}