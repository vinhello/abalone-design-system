import { Badge } from "../../components/ui/badge";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Card } from "../../components/ui/card";

export function BadgesPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Badges"
        description="Small status indicators and labels for highlighting important information."
      />

      <DocSection
        title="Badge Variants"
        description="Different badge styles for various semantic meanings."
        preview={
          <div className="flex flex-wrap gap-2">
            <Badge>DEFAULT</Badge>
            <Badge variant="secondary">SECONDARY</Badge>
            <Badge variant="destructive">DESTRUCTIVE</Badge>
            <Badge variant="outline">OUTLINE</Badge>
            <Badge variant="success">SUCCESS</Badge>
            <Badge variant="warning">WARNING</Badge>
            <Badge variant="info">INFO</Badge>
          </div>
        }
        code={`<Badge>DEFAULT</Badge>
<Badge variant="secondary">SECONDARY</Badge>
<Badge variant="destructive">DESTRUCTIVE</Badge>
<Badge variant="outline">OUTLINE</Badge>
<Badge variant="success">SUCCESS</Badge>
<Badge variant="warning">WARNING</Badge>
<Badge variant="info">INFO</Badge>`}
        usage={`import { Badge } from "./components/ui/badge";

function MyComponent() {
  return <Badge variant="success">ONLINE</Badge>;
}`}
        props={[
          {
            name: "variant",
            type: '"default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info"',
            default: '"default"',
            description: "Visual style variant",
          },
        ]}
      />

      <DocSection
        title="Status Badges"
        description="Common status indicators for security systems."
        preview={
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm w-32">Connection:</span>
              <Badge variant="success">CONNECTED</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-32">Threat Level:</span>
              <Badge variant="warning">ELEVATED</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-32">Authentication:</span>
              <Badge variant="destructive">FAILED</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-32">Service:</span>
              <Badge variant="info">RUNNING</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-32">Status:</span>
              <Badge variant="outline">PENDING</Badge>
            </div>
          </div>
        }
        code={`<Badge variant="success">CONNECTED</Badge>
<Badge variant="warning">ELEVATED</Badge>
<Badge variant="destructive">FAILED</Badge>
<Badge variant="info">RUNNING</Badge>
<Badge variant="outline">PENDING</Badge>`}
      />

      <DocSection
        title="Priority Badges"
        description="Badges for task or alert priorities."
        preview={
          <div className="space-y-3">
            <div className="border-2 border-border p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Critical security update required</span>
                <Badge variant="destructive">CRITICAL</Badge>
              </div>
            </div>
            <div className="border-2 border-border p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Firewall rules need review</span>
                <Badge variant="warning">HIGH</Badge>
              </div>
            </div>
            <div className="border-2 border-border p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Update user permissions</span>
                <Badge variant="info">MEDIUM</Badge>
              </div>
            </div>
            <div className="border-2 border-border p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Review audit logs</span>
                <Badge variant="outline">LOW</Badge>
              </div>
            </div>
          </div>
        }
        code={`<Badge variant="destructive">CRITICAL</Badge>
<Badge variant="warning">HIGH</Badge>
<Badge variant="info">MEDIUM</Badge>
<Badge variant="outline">LOW</Badge>`}
      />

      <DocSection
        title="Numeric Badges"
        description="Badges displaying counts or metrics."
        preview={
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">Active Alerts</span>
              <Badge variant="destructive">23</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Pending Tasks</span>
              <Badge variant="warning">7</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Online Users</span>
              <Badge variant="success">156</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Total Logs</span>
              <Badge variant="info">1,247</Badge>
            </div>
          </div>
        }
        code={`<Badge variant="destructive">23</Badge>
<Badge variant="warning">7</Badge>
<Badge variant="success">156</Badge>
<Badge variant="info">1,247</Badge>`}
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
                  <span>Use semantic color variants that match the meaning (success for positive, destructive for errors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep badge text short and uppercase for consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Place badges near the content they're describing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use consistent badge styles throughout the application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Ensure badge text is readable against its background color</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use badges to draw attention to important status changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Limit the number of badge variants to maintain visual clarity</span>
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
                  <span>Use destructive (red) badges for neutral or positive information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make badge text too long (causes wrapping or overflow)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use badges as buttons (they're for displaying information, not interaction)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Overuse badges (reduces their effectiveness as attention-grabbers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use color alone to convey meaning (provide text labels too)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Mix different badge styles for the same type of status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use badges for lengthy descriptions (use alerts or cards instead)</span>
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
                Badge text meets WCAG 2.2 AA contrast requirements (4.5:1 minimum)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Don't rely solely on color to convey meaning - include descriptive text
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Badge text should be readable by screen readers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Use semantic HTML and ARIA labels when badges represent dynamic states
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Ensure sufficient spacing around badges for users with motor disabilities
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}