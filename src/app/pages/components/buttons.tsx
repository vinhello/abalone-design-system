import { Button } from "../../components/ui/button";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Plus, Trash2, Download, AlertCircle } from "lucide-react";
import { Card } from "../../components/ui/card";

export function ButtonsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Buttons"
        description="Clickable elements for actions and navigation. Fully keyboard accessible with clear focus states."
      />

      <DocSection
        title="Button Variants"
        description="Different visual styles for various use cases and hierarchy."
        preview={
          <div className="flex flex-wrap gap-4">
            <Button>DEFAULT</Button>
            <Button variant="destructive">DESTRUCTIVE</Button>
            <Button variant="outline">OUTLINE</Button>
            <Button variant="secondary">SECONDARY</Button>
            <Button variant="ghost">GHOST</Button>
            <Button variant="success">SUCCESS</Button>
            <Button variant="warning">WARNING</Button>
            <Button variant="info">INFO</Button>
          </div>
        }
        code={`<Button>DEFAULT</Button>
<Button variant="destructive">DESTRUCTIVE</Button>
<Button variant="outline">OUTLINE</Button>
<Button variant="secondary">SECONDARY</Button>
<Button variant="ghost">GHOST</Button>
<Button variant="success">SUCCESS</Button>
<Button variant="warning">WARNING</Button>
<Button variant="info">INFO</Button>`}
        usage={`import { Button } from "./components/ui/button";

function MyComponent() {
  return <Button onClick={() => console.log("clicked")}>Click Me</Button>;
}`}
        props={[
          {
            name: "variant",
            type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "success" | "warning" | "info"',
            default: '"default"',
            description: "Visual style variant",
          },
          {
            name: "size",
            type: '"default" | "sm" | "lg" | "icon"',
            default: '"default"',
            description: "Size of the button",
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: "Whether the button is disabled",
          },
        ]}
      />

      <DocSection
        title="Button Sizes"
        description="Different sizes for various contexts and layouts."
        preview={
          <div className="flex items-center gap-4">
            <Button size="sm">SMALL</Button>
            <Button size="default">DEFAULT</Button>
            <Button size="lg">LARGE</Button>
          </div>
        }
        code={`<Button size="sm">SMALL</Button>
<Button size="default">DEFAULT</Button>
<Button size="lg">LARGE</Button>`}
      />

      <DocSection
        title="Icon Buttons"
        description="Square buttons designed to contain only icons."
        preview={
          <div className="flex gap-4">
            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="destructive">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="success">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        }
        code={`<Button size="icon" variant="outline">
  <Plus className="h-4 w-4" />
</Button>
<Button size="icon" variant="destructive">
  <Trash2 className="h-4 w-4" />
</Button>`}
      />

      <DocSection
        title="Buttons with Icons"
        description="Combine text and icons for enhanced clarity."
        preview={
          <div className="flex flex-wrap gap-4">
            <Button>
              <Plus className="h-4 w-4" />
              ADD USER
            </Button>
            <Button variant="destructive">
              <Trash2 className="h-4 w-4" />
              DELETE
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4" />
              EXPORT
            </Button>
            <Button variant="warning">
              <AlertCircle className="h-4 w-4" />
              WARNING
            </Button>
          </div>
        }
        code={`<Button>
  <Plus className="h-4 w-4" />
  ADD USER
</Button>
<Button variant="destructive">
  <Trash2 className="h-4 w-4" />
  DELETE
</Button>`}
      />

      <DocSection
        title="Disabled State"
        description="Buttons can be disabled to prevent interaction."
        preview={
          <div className="flex gap-4">
            <Button disabled>DISABLED</Button>
            <Button variant="outline" disabled>
              DISABLED OUTLINE
            </Button>
            <Button variant="destructive" disabled>
              DISABLED DESTRUCTIVE
            </Button>
          </div>
        }
        code={`<Button disabled>DISABLED</Button>
<Button variant="outline" disabled>DISABLED OUTLINE</Button>`}
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
                  <span>Use clear, action-oriented button labels (e.g., "Save Changes" not "OK")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use the default variant for primary actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use destructive variant for irreversible or dangerous actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide sufficient spacing between adjacent buttons (minimum 16px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use icon buttons only when the icon meaning is universally understood</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Disable buttons during loading states or when action is unavailable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Maintain consistent button sizing within the same context</span>
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
                  <span>Use vague labels like "Click here" or "Submit"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Have more than one primary (default) button per section</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use destructive variant for non-destructive actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make buttons too small to click comfortably (minimum 44x44px touch target)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use icon-only buttons without providing accessible labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Mix different button styles arbitrarily without hierarchy purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use buttons for navigation (use links instead)</span>
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
                All buttons are keyboard navigable with visible focus states
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Disabled buttons are properly communicated to screen readers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Icon-only buttons should include aria-label for screen readers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Button text meets WCAG 2.2 AA contrast requirements (4.5:1 minimum)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Touch targets are minimum 44x44px for mobile accessibility
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}