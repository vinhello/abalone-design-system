import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Search, Mail, Lock } from "lucide-react";
import { Card } from "../../components/ui/card";

export function InputsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Inputs"
        description="Text input fields with proper labels and accessibility. Supports all standard HTML input types."
      />

      <DocSection
        title="Basic Input"
        description="Standard text input with label."
        preview={
          <div className="max-w-sm space-y-2">
            <Label htmlFor="basic">USERNAME</Label>
            <Input id="basic" placeholder="Enter username" />
          </div>
        }
        code={`<div className="space-y-2">
  <Label htmlFor="basic">USERNAME</Label>
  <Input id="basic" placeholder="Enter username" />
</div>`}
        usage={`import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function MyComponent() {
  return (
    <div className="space-y-2">
      <Label htmlFor="username">USERNAME</Label>
      <Input id="username" placeholder="Enter username" />
    </div>
  );
}`}
        props={[
          {
            name: "type",
            type: "string",
            default: '"text"',
            description: "HTML input type (text, email, password, etc.)",
          },
          {
            name: "placeholder",
            type: "string",
            description: "Placeholder text",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Whether the input is disabled",
          },
        ]}
      />

      <DocSection
        title="Input Types"
        description="Various input types for different data."
        preview={
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">EMAIL ADDRESS</Label>
              <Input id="email" type="email" placeholder="admin@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">PASSWORD</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">PORT NUMBER</Label>
              <Input id="number" type="number" placeholder="8080" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">ACCESS DATE</Label>
              <Input id="date" type="date" />
            </div>
          </div>
        }
        code={`<Input type="email" placeholder="admin@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="8080" />
<Input type="date" />`}
      />

      <DocSection
        title="Input with Icons"
        description="Inputs with icon indicators (requires custom wrapper)."
        preview={
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search">SEARCH LOGS</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="search" className="pl-10" placeholder="Search..." />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-icon">EMAIL</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email-icon" type="email" className="pl-10" placeholder="admin@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-icon">PASSWORD</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="password-icon" type="password" className="pl-10" placeholder="••••••••" />
              </div>
            </div>
          </div>
        }
        code={`<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
  <Input className="pl-10" placeholder="Search..." />
</div>`}
      />

      <DocSection
        title="Disabled Input"
        description="Inputs can be disabled to prevent editing."
        preview={
          <div className="max-w-sm space-y-2">
            <Label htmlFor="disabled">SYSTEM ID</Label>
            <Input id="disabled" disabled value="SYS-001-LOCKED" />
          </div>
        }
        code={`<Input disabled value="SYS-001-LOCKED" />`}
      />

      <DocSection
        title="Full Width Input"
        description="Inputs expand to fill their container by default."
        preview={
          <div className="space-y-2">
            <Label htmlFor="fullwidth">CONFIGURATION PATH</Label>
            <Input id="fullwidth" placeholder="/etc/security/config.conf" />
          </div>
        }
        code={`<Input placeholder="/etc/security/config.conf" />`}
      />

      {/* Dos and Don'ts */}
      <div className="mt-12 space-y-8">
        <div>
          <h2 className="mb-6">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DO */}
            <Card className="p-6 border-success">
              <div className="mb-4">
                <h3 className="text-success mb-2">✓ Do</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Always pair inputs with clear, descriptive labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use appropriate input types (email, password, number) for better mobile keyboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide helpful placeholder text as examples, not instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use the htmlFor attribute on labels to connect with input IDs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Show validation errors below the input field with clear messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Disable inputs that shouldn't be edited (read-only data)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use monospace font for technical inputs (IPs, codes, paths)</span>
                </li>
              </ul>
            </Card>

            {/* DON'T */}
            <Card className="p-6 border-destructive">
              <div className="mb-4">
                <h3 className="text-destructive mb-2">✗ Don't</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use placeholder text as a replacement for labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Leave inputs without labels (inaccessible to screen readers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use generic input type="text" when specific types are appropriate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make input widths too narrow for expected content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use disabled state for loading (use a loading indicator instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Forget to handle edge cases (very long text, special characters)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Auto-focus inputs without user initiation (disruptive to navigation)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Accessibility */}
        <Card className="p-6 bg-info/5 border-info">
          <h3 className="mb-4">Accessibility Considerations</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Labels must be programmatically associated with inputs using htmlFor/id
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Input fields meet WCAG 2.2 AA contrast requirements (4.5:1 minimum)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Error messages should be announced to screen readers using aria-describedby
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Required fields should be marked with aria-required="true"
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Focus indicators are clearly visible for keyboard navigation
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}