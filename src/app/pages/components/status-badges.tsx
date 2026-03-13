import { DocSection, PageHeader } from "../../components/doc-section";
import { StatusBadge } from "../../components/ui/status-badge";
import { Card } from "../../components/ui/card";

export function StatusBadgesPage() {
  return (
    <div className="p-8 max-w-6xl">
      <PageHeader
        title="Status badges"
        description="Display system and resource status with semantic colors and optional indicators."
      />

      <DocSection
        title="Status Types"
        description="Different status types with appropriate semantic colors."
      >
        <div className="flex flex-wrap gap-4">
          <StatusBadge status="online">Online</StatusBadge>
          <StatusBadge status="offline">Offline</StatusBadge>
          <StatusBadge status="warning">Warning</StatusBadge>
          <StatusBadge status="error">Error</StatusBadge>
          <StatusBadge status="info">Info</StatusBadge>
          <StatusBadge status="active">Active</StatusBadge>
          <StatusBadge status="pending">Pending</StatusBadge>
          <StatusBadge status="disabled">Disabled</StatusBadge>
        </div>
      </DocSection>

      <DocSection
        title="Without Indicator"
        description="Status badges can be displayed without the pulsing indicator dot."
      >
        <div className="flex flex-wrap gap-4">
          <StatusBadge status="online" showIndicator={false}>
            Online
          </StatusBadge>
          <StatusBadge status="warning" showIndicator={false}>
            Warning
          </StatusBadge>
          <StatusBadge status="error" showIndicator={false}>
            Error
          </StatusBadge>
          <StatusBadge status="active" showIndicator={false}>
            Active
          </StatusBadge>
        </div>
      </DocSection>

      <DocSection
        title="In Context"
        description="Status badges in real-world usage scenarios."
      >
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">WEB-PROD-01</p>
                <p className="text-sm text-muted-foreground font-mono">
                  10.0.1.45
                </p>
              </div>
              <StatusBadge status="online">Online</StatusBadge>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">DB-PROD-01</p>
                <p className="text-sm text-muted-foreground font-mono">
                  10.0.2.10
                </p>
              </div>
              <StatusBadge status="warning">High Load</StatusBadge>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">CACHE-01</p>
                <p className="text-sm text-muted-foreground font-mono">
                  10.0.4.5
                </p>
              </div>
              <StatusBadge status="offline">Offline</StatusBadge>
            </div>
          </Card>
        </div>
      </DocSection>

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
                  <span>Use consistent status types across your application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Choose status colors that match user expectations (green = good, red = bad)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use the pulsing indicator for dynamic or live statuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep status text short and descriptive (1-2 words)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use uppercase text for better scannability in data tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Group similar statuses together visually when appropriate</span>
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
                  <span>Create custom status types that conflict with standard meanings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use status badges for non-status information (use regular badges instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Overuse pulsing indicators as they can be distracting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use long sentences or detailed messages in status badges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Rely solely on color to convey status (include text labels)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Mix status badge styles with regular badges in the same context</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Status Color Guide */}
        <Card className="p-6">
          <h3 className="mb-4">Status Color Guide</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <StatusBadge status="online">Online</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  System is operational and responding normally
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="active">Active</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  Resource is currently in use or processing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="warning">Warning</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  Potential issue detected, may require attention
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="pending">Pending</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  Waiting for action or in queue
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="error">Error</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  Critical issue requiring immediate attention
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="offline">Offline</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  System is not responding or unavailable
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="info">Info</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  Informational status, no action required
                </span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status="disabled">Disabled</StatusBadge>
                <span className="text-sm text-muted-foreground">
                  Intentionally turned off or deactivated
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Accessibility */}
        <Card className="p-6 bg-info/5 border-info">
          <h3 className="mb-4">Accessibility Considerations</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Always include text labels - don't rely on color or indicator alone
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Status badges meet WCAG 2.2 AA contrast requirements for all color combinations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Pulsing animations respect user's motion preferences (prefers-reduced-motion)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Screen readers will announce both the status text and semantic meaning
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}