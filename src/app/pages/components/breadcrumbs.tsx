import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { DocSection, PageHeader } from "../../components/doc-section";
import { Home } from "lucide-react";
import { Card } from "../../components/ui/card";

export function BreadcrumbsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <PageHeader
        title="Breadcrumbs"
        description="Navigation aids showing the current location within a hierarchical structure."
      />

      <DocSection
        title="Basic Breadcrumb"
        description="Simple breadcrumb navigation trail."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">HOME</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">COMPONENTS</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>BREADCRUMBS</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">HOME</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">COMPONENTS</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>BREADCRUMBS</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        usage={`import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./components/ui/breadcrumb";

function MyComponent() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`}
      />

      <DocSection
        title="Breadcrumb with Icon"
        description="Breadcrumb with home icon for the root level."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Home className="h-3 w-3" />
                  HOME
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/system">SYSTEM</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/system/security">SECURITY</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FIREWALL RULES</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="flex items-center gap-1">
        <Home className="h-3 w-3" />
        HOME
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/system">SYSTEM</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>FIREWALL RULES</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <DocSection
        title="Breadcrumb with Ellipsis"
        description="Collapsed breadcrumb for long paths."
        preview={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">HOME</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/system/config">CONFIG</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>NETWORK SETTINGS</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">HOME</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/config">CONFIG</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>NETWORK SETTINGS</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <DocSection
        title="System Navigation Examples"
        description="Common breadcrumb patterns for enterprise applications."
        preview={
          <div className="space-y-4">
            <Card>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">DASHBOARD</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/users">USERS</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>USER DETAILS</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Card>

            <Card>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">DASHBOARD</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/logs">LOGS</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/logs/security">SECURITY</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>FAILED LOGINS</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Card>

            <Card>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">DASHBOARD</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/config">CONFIGURATION</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>SSL CERTIFICATES</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Card>
          </div>
        }
        code={`// Users
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">DASHBOARD</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">USERS</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>USER DETAILS</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// Security Logs
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">DASHBOARD</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/logs/security">SECURITY</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>FAILED LOGINS</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
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
                  <span>Show the full navigation path from root to current page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Make all breadcrumb links clickable except the current page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use clear, concise labels that match page titles or navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Place breadcrumbs near the top of the page for easy access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use ellipsis (...) to collapse long paths with many levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Keep breadcrumbs visible and accessible on all screen sizes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use consistent separators (/, &gt;, or custom icons) throughout</span>
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
                  <span>Use breadcrumbs as the primary navigation method</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make breadcrumbs too large or visually prominent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Include every single level for very deep hierarchies (use ellipsis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use breadcrumbs on shallow sites with only 1-2 levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Make the current page link clickable or styled like other links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use long, truncated labels that don't indicate the page content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Replace standard navigation with breadcrumbs alone</span>
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
                Breadcrumbs use semantic nav element with aria-label="breadcrumb"
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Current page is marked with aria-current="page" for screen readers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                All breadcrumb links have sufficient color contrast (WCAG 2.2 AA minimum)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Keyboard users can tab through breadcrumb links sequentially
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Separators are hidden from screen readers (aria-hidden="true")
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}