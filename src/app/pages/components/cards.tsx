import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Server, Shield, Activity, AlertTriangle } from "lucide-react";

export function CardsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Cards"
        description="Container components for grouping related content with clear visual boundaries."
      />

      <DocSection
        title="Basic Card"
        description="Simple card with header, content, and footer sections."
        preview={
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>SYSTEM STATUS</CardTitle>
              <CardDescription>Current operational status of all services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">All systems are operating normally. No incidents reported in the last 24 hours.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">VIEW DETAILS</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card>
  <CardHeader>
    <CardTitle>SYSTEM STATUS</CardTitle>
    <CardDescription>Current operational status</CardDescription>
  </CardHeader>
  <CardContent>
    <p>All systems are operating normally.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">VIEW DETAILS</Button>
  </CardFooter>
</Card>`}
        usage={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Content */}
      </CardContent>
    </Card>
  );
}`}
      />

      <DocSection
        title="Card with Icons"
        description="Cards can include icons for visual recognition."
        preview={
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Server className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>SERVERS</CardTitle>
                <CardDescription>12 ACTIVE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl">98.5%</p>
                <p className="text-xs text-muted-foreground">UPTIME</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-success" />
                <CardTitle>SECURITY</CardTitle>
                <CardDescription>THREAT LEVEL: LOW</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl">0</p>
                <p className="text-xs text-muted-foreground">ACTIVE THREATS</p>
              </CardContent>
            </Card>
          </div>
        }
        code={`<Card>
  <CardHeader>
    <Server className="h-8 w-8 mb-2" />
    <CardTitle>SERVERS</CardTitle>
    <CardDescription>12 ACTIVE</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl">98.5%</p>
    <p className="text-xs text-muted-foreground">UPTIME</p>
  </CardContent>
</Card>`}
      />

      <DocSection
        title="Status Cards"
        description="Cards displaying system metrics and status information."
        preview={
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">ACTIVE SESSIONS</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">1,247</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last hour
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">FAILED LOGINS</CardTitle>
                <AlertTriangle className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">23</div>
                <p className="text-xs text-muted-foreground">
                  -8% from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">BLOCKED IPs</CardTitle>
                <Shield className="h-4 w-4 text-destructive" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">156</div>
                <p className="text-xs text-muted-foreground">
                  +3 in last hour
                </p>
              </CardContent>
            </Card>
          </div>
        }
        code={`<Card>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm">ACTIVE SESSIONS</CardTitle>
    <Activity className="h-4 w-4" />
  </CardHeader>
  <CardContent>
    <div className="text-2xl">1,247</div>
    <p className="text-xs text-muted-foreground">+12% from last hour</p>
  </CardContent>
</Card>`}
      />

      <DocSection
        title="Card with Badges"
        description="Cards can display status badges for quick identification."
        preview={
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>FIREWALL RULES</CardTitle>
                    <CardDescription>Last updated 2 hours ago</CardDescription>
                  </div>
                  <Badge variant="success">ACTIVE</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Total Rules:</span>
                    <span className="font-mono">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enabled:</span>
                    <span className="font-mono">1,189</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disabled:</span>
                    <span className="font-mono">58</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>BACKUP SERVICE</CardTitle>
                    <CardDescription>Scheduled for 02:00 AM</CardDescription>
                  </div>
                  <Badge variant="warning">PENDING</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Last Backup:</span>
                    <span className="font-mono">23h ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-mono">99.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Size:</span>
                    <span className="font-mono">2.4 TB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        }
        code={`<Card>
  <CardHeader>
    <div className="flex items-start justify-between">
      <div>
        <CardTitle>FIREWALL RULES</CardTitle>
        <CardDescription>Last updated 2 hours ago</CardDescription>
      </div>
      <Badge variant="success">ACTIVE</Badge>
    </div>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>`}
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
                  <span>Use cards to group related content and create visual hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep card content focused on a single topic or action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use CardHeader, CardContent, and CardFooter for consistent structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Maintain consistent spacing and padding within cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use icons or badges to quickly convey status or category</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Ensure cards are keyboard navigable when they contain interactive elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use consistent card sizing within the same grid or section</span>
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
                  <span>Overload cards with too much information or multiple unrelated topics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Nest cards within cards (causes visual confusion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use cards for single pieces of information (use other components)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Forget to provide padding around card content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make entire cards clickable without clear indication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use different card styles arbitrarily on the same page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Cram too many cards into small spaces (maintain breathing room)</span>
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
                Cards use semantic HTML structure with proper headings hierarchy
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Interactive cards should be keyboard navigable with visible focus states
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Card borders and shadows meet WCAG 2.2 AA contrast requirements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Use aria-label or aria-labelledby for cards that function as regions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Ensure sufficient color contrast for all text within cards
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}