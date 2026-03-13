import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Terminal, AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Card } from "../../components/ui/card";

export function AlertsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Alerts"
        description="Prominent messages to communicate important system information or status changes."
      />

      <DocSection
        title="Alert Variants"
        description="Different alert styles for various message types."
        preview={
          <div className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>SYSTEM NOTIFICATION</AlertTitle>
              <AlertDescription>
                This is a default alert message for general system information.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>CRITICAL ERROR</AlertTitle>
              <AlertDescription>
                Authentication service is experiencing issues. Please contact system administrator.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>OPERATION SUCCESSFUL</AlertTitle>
              <AlertDescription>
                Security patch has been successfully applied to all servers.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>WARNING</AlertTitle>
              <AlertDescription>
                Disk space is running low on server SRV-001. Current usage: 87%
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <Info className="h-4 w-4" />
              <AlertTitle>INFORMATION</AlertTitle>
              <AlertDescription>
                Scheduled maintenance will occur on Sunday at 02:00 AM EST.
              </AlertDescription>
            </Alert>
          </div>
        }
        code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>SYSTEM NOTIFICATION</AlertTitle>
  <AlertDescription>
    This is a default alert message.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>CRITICAL ERROR</AlertTitle>
  <AlertDescription>
    Authentication service is experiencing issues.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>OPERATION SUCCESSFUL</AlertTitle>
  <AlertDescription>
    Security patch has been successfully applied.
  </AlertDescription>
</Alert>`}
        usage={`import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { AlertCircle } from "lucide-react";

function MyComponent() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>ERROR</AlertTitle>
      <AlertDescription>
        Something went wrong.
      </AlertDescription>
    </Alert>
  );
}`}
        props={[
          {
            name: "variant",
            type: '"default" | "destructive" | "success" | "warning" | "info"',
            default: '"default"',
            description: "Visual style variant",
          },
        ]}
      />

      <DocSection
        title="Alert without Icon"
        description="Alerts can be used without icons for simpler messages."
        preview={
          <div className="space-y-4">
            <Alert>
              <AlertTitle>SYSTEM STATUS</AlertTitle>
              <AlertDescription>
                All systems are operating normally.
              </AlertDescription>
            </Alert>
            <Alert variant="info">
              <AlertTitle>TIP</AlertTitle>
              <AlertDescription>
                Use CTRL+F to quickly search through security logs.
              </AlertDescription>
            </Alert>
          </div>
        }
        code={`<Alert>
  <AlertTitle>SYSTEM STATUS</AlertTitle>
  <AlertDescription>
    All systems are operating normally.
  </AlertDescription>
</Alert>`}
      />

      <DocSection
        title="Security Alerts"
        description="Common alert patterns for security applications."
        preview={
          <div className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>INTRUSION DETECTED</AlertTitle>
              <AlertDescription>
                Multiple failed login attempts from IP: 192.168.1.100
                <br />
                <span className="font-mono text-xs">Timestamp: 2026-02-13 14:32:17 UTC</span>
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>CERTIFICATE EXPIRING SOON</AlertTitle>
              <AlertDescription>
                SSL certificate for domain.com will expire in 7 days.
                <br />
                <span className="font-mono text-xs">Expiry: 2026-02-20 23:59:59 UTC</span>
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>BACKUP COMPLETED</AlertTitle>
              <AlertDescription>
                Automated backup completed successfully.
                <br />
                <span className="font-mono text-xs">Size: 2.4 TB • Duration: 3h 42m</span>
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <Info className="h-4 w-4" />
              <AlertTitle>FIREWALL RULE UPDATED</AlertTitle>
              <AlertDescription>
                Rule #1247 has been modified by admin@domain.com
                <br />
                <span className="font-mono text-xs">Rule: ALLOW TCP 443 FROM 10.0.0.0/8</span>
              </AlertDescription>
            </Alert>
          </div>
        }
        code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>INTRUSION DETECTED</AlertTitle>
  <AlertDescription>
    Multiple failed login attempts from IP: 192.168.1.100
    <br />
    <span className="font-mono text-xs">
      Timestamp: 2026-02-13 14:32:17 UTC
    </span>
  </AlertDescription>
</Alert>`}
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
                  <span>Use appropriate variant colors that match the message severity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Include clear, actionable titles that summarize the alert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide specific, helpful descriptions with next steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use icons to reinforce the alert type visually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Position alerts prominently near related content or actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Include timestamps for time-sensitive alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use destructive variant sparingly for truly critical issues</span>
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
                  <span>Use destructive alerts for minor issues or informational messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Write vague alert messages like "Error occurred"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Display multiple alerts stacked on top of each other (causes confusion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use alerts for non-important information (use cards or text instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make alerts dismissible if the information is critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use technical jargon without explanation in user-facing alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Forget to provide a way to resolve or acknowledge the alert</span>
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
                Alerts use semantic HTML with role="alert" for screen reader announcements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Alert text meets WCAG 2.2 AA contrast requirements (4.5:1 minimum)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Icons are accompanied by text labels and don't convey information solely through color
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Critical alerts should not auto-dismiss to ensure users have time to read them
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Focus management ensures keyboard users can access alert actions
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}