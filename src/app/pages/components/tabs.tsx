import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { DocSection, PageHeader } from "../../components/doc-section";

export function TabsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Tabs"
        description="Organize content into multiple panels, showing one at a time for better information architecture."
      />

      <DocSection
        title="Basic Tabs"
        description="Simple tab navigation with content panels."
        preview={
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="overview" className="flex-1">
                OVERVIEW
              </TabsTrigger>
              <TabsTrigger value="security" className="flex-1">
                SECURITY
              </TabsTrigger>
              <TabsTrigger value="logs" className="flex-1">
                LOGS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="border-2 border-border p-4 mt-2">
              <h3 className="mb-2">System overview</h3>
              <p className="text-sm text-muted-foreground">
                Main dashboard with system metrics and status information.
              </p>
            </TabsContent>
            <TabsContent value="security" className="border-2 border-border p-4 mt-2">
              <h3 className="mb-2">Security status</h3>
              <p className="text-sm text-muted-foreground">
                Security alerts, threat detection, and firewall configuration.
              </p>
            </TabsContent>
            <TabsContent value="logs" className="border-2 border-border p-4 mt-2">
              <h3 className="mb-2">System logs</h3>
              <p className="text-sm text-muted-foreground">
                Access logs, error logs, and audit trails for compliance.
              </p>
            </TabsContent>
          </Tabs>
        }
        code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
    <TabsTrigger value="security">SECURITY</TabsTrigger>
    <TabsTrigger value="logs">LOGS</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <h3>SYSTEM OVERVIEW</h3>
    <p>Main dashboard with system metrics.</p>
  </TabsContent>
  <TabsContent value="security">
    <h3>SECURITY STATUS</h3>
    <p>Security alerts and configuration.</p>
  </TabsContent>
  <TabsContent value="logs">
    <h3>SYSTEM LOGS</h3>
    <p>Access logs and audit trails.</p>
  </TabsContent>
</Tabs>`}
        usage={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}`}
        props={[
          {
            name: "defaultValue",
            type: "string",
            description: "The value of the tab that should be active by default",
          },
          {
            name: "value",
            type: "string",
            description: "The controlled value of the active tab",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Callback when the active tab changes",
          },
        ]}
      />

      <DocSection
        title="Tabs with Cards"
        description="Combining tabs with card components for structured layouts."
        preview={
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="active" className="flex-1">
                ACTIVE SESSIONS
              </TabsTrigger>
              <TabsTrigger value="blocked" className="flex-1">
                BLOCKED IPS
              </TabsTrigger>
              <TabsTrigger value="alerts" className="flex-1">
                ALERTS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <Card>
                <CardHeader>
                  <CardTitle>ACTIVE USER SESSIONS</CardTitle>
                  <CardDescription>Currently logged in users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center border-b-2 border-border pb-2">
                      <span className="font-mono text-sm">admin@domain.com</span>
                      <Badge variant="success">ACTIVE</Badge>
                    </div>
                    <div className="flex justify-between items-center border-b-2 border-border pb-2">
                      <span className="font-mono text-sm">user42@domain.com</span>
                      <Badge variant="success">ACTIVE</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">sysadmin@domain.com</span>
                      <Badge variant="success">ACTIVE</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="blocked">
              <Card>
                <CardHeader>
                  <CardTitle>BLOCKED IP ADDRESSES</CardTitle>
                  <CardDescription>Automatically blocked due to suspicious activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center border-b-2 border-border pb-2">
                      <span className="font-mono text-sm">192.168.1.100</span>
                      <Badge variant="destructive">BLOCKED</Badge>
                    </div>
                    <div className="flex justify-between items-center border-b-2 border-border pb-2">
                      <span className="font-mono text-sm">10.0.0.55</span>
                      <Badge variant="destructive">BLOCKED</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm">172.16.0.99</span>
                      <Badge variant="destructive">BLOCKED</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle>SECURITY ALERTS</CardTitle>
                  <CardDescription>Recent security notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center border-b-2 border-border pb-2">
                      <span className="text-sm">Failed login attempt</span>
                      <Badge variant="warning">HIGH</Badge>
                    </div>
                    <div className="flex justify-between items-center border-b-2 border-border pb-2">
                      <span className="text-sm">Firewall rule modified</span>
                      <Badge variant="info">MEDIUM</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Certificate updated</span>
                      <Badge variant="outline">LOW</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        }
        code={`<Tabs defaultValue="active">
  <TabsList>
    <TabsTrigger value="active">ACTIVE SESSIONS</TabsTrigger>
    <TabsTrigger value="blocked">BLOCKED IPS</TabsTrigger>
    <TabsTrigger value="alerts">ALERTS</TabsTrigger>
  </TabsList>
  <TabsContent value="active">
    <Card>
      <CardHeader>
        <CardTitle>ACTIVE USER SESSIONS</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Session list */}
      </CardContent>
    </Card>
  </TabsContent>
  {/* More tabs */}
</Tabs>`}
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
                  <span>Use tabs for related content that users might want to compare</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep tab labels short and descriptive (1-2 words)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Limit the number of tabs to 5-7 for better usability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use a logical order for tabs (most common to least common)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Ensure the active tab is visually distinct from inactive tabs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Provide a default active tab with meaningful content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep tab content height consistent to avoid layout shifts</span>
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
                  <span>Use tabs for sequential workflows (use wizards/steppers instead)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Create too many tabs (causes horizontal scrolling or overflow)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use vague tab labels like "Misc" or "Other"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Nest tabs within tabs (creates confusion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Disable tabs without clear indication why they're unavailable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use tabs when content doesn't need to be separated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make tabs look like buttons or navigation links</span>
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
                Tabs use proper ARIA roles (tablist, tab, tabpanel) for screen reader support
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Keyboard navigation works with Arrow keys to switch tabs and Tab key to enter content
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Active tab has clear visual focus indicator for keyboard users
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Tab panels are properly associated with their tab triggers via aria-controls
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Tab labels and content meet WCAG 2.2 AA contrast requirements
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}