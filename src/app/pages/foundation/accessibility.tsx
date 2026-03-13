import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { PageHeader } from "../../components/doc-section";
import { CheckCircle2, Keyboard, Eye, Focus } from "lucide-react";

export function AccessibilityPage() {
  return (
    <div className="p-8 max-w-6xl">
      <PageHeader
        title="Accessibility"
        description="WCAG 2.2 Level AA compliance guidelines and best practices for building accessible enterprise applications."
      />

      <div className="mb-8 border-4 border-border p-6 bg-card">
        <div className="flex items-start gap-4 mb-4">
          <CheckCircle2 className="h-8 w-8 text-success flex-shrink-0" />
          <div>
            <h2 className="mb-2">WCAG 2.2 Level AA compliance</h2>
            <p className="text-muted-foreground">
              All components in this design system are built to meet or exceed WCAG 2.2 
              Level AA accessibility standards, ensuring your applications are usable by 
              everyone, including people with disabilities.
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="success">WCAG 2.2 AA</Badge>
          <Badge variant="info">Keyboard Accessible</Badge>
          <Badge variant="info">Screen Reader Friendly</Badge>
          <Badge variant="info">Focus Visible</Badge>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Key principles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5" />
                <CardTitle>PERCEIVABLE</CardTitle>
              </div>
              <CardDescription>Information must be presentable to users in ways they can perceive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Text alternatives for non-text content</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Color contrast ratios of 4.5:1 for normal text</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Text can be resized up to 200% without loss of functionality</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Information not conveyed by color alone</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Keyboard className="h-5 w-5" />
                <CardTitle>OPERABLE</CardTitle>
              </div>
              <CardDescription>Interface components must be operable by all users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>All functionality available via keyboard</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>No keyboard traps</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Logical tab order and focus management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Skip links for navigation</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Focus className="h-5 w-5" />
                <CardTitle>UNDERSTANDABLE</CardTitle>
              </div>
              <CardDescription>Information and operation must be understandable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Clear, concise labels and instructions</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Consistent navigation and identification</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Error identification and suggestions</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Predictable behavior</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5" />
                <CardTitle>ROBUST</CardTitle>
              </div>
              <CardDescription>Content must be robust enough for assistive technologies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Valid HTML markup</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Proper ARIA labels and roles</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Compatible with assistive technologies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Semantic HTML elements</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Component features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>KEYBOARD NAVIGATION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="font-mono mb-1">TAB / SHIFT+TAB</p>
                <p className="text-muted-foreground">Navigate between interactive elements</p>
              </div>
              <div>
                <p className="font-mono mb-1">ENTER / SPACE</p>
                <p className="text-muted-foreground">Activate buttons and controls</p>
              </div>
              <div>
                <p className="font-mono mb-1">ARROW KEYS</p>
                <p className="text-muted-foreground">Navigate within components (tabs, selects, etc.)</p>
              </div>
              <div>
                <p className="font-mono mb-1">ESC</p>
                <p className="text-muted-foreground">Close dialogs and dropdowns</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FOCUS INDICATORS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                All interactive elements have visible focus indicators with a 2px outline 
                in the theme's ring color.
              </p>
              <div className="border-2 border-border p-4 space-y-2">
                <button className="border-2 border-border px-4 py-2 bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  FOCUSED BUTTON
                </button>
                <p className="text-xs text-muted-foreground">
                  Click or tab to this button to see the focus indicator
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SCREEN READERS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>All images have descriptive alt text</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Forms have associated labels</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>ARIA labels for icon-only buttons</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Live regions for dynamic content</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                <span>Proper heading hierarchy</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>COLOR CONTRAST</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                All text and UI components meet WCAG 2.2 Level AA contrast requirements:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Normal text:</span>
                  <span className="font-mono">≥ 4.5:1</span>
                </div>
                <div className="flex justify-between">
                  <span>Large text (18pt+):</span>
                  <span className="font-mono">≥ 3:1</span>
                </div>
                <div className="flex justify-between">
                  <span>UI components:</span>
                  <span className="font-mono">≥ 3:1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-2 border-border p-6 bg-muted">
        <h3 className="text-sm tracking-wide mb-4">Accessibility checklist</h3>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Use semantic HTML elements</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Provide text alternatives for images</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Ensure sufficient color contrast</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Make all functionality keyboard accessible</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Provide visible focus indicators</span>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Use ARIA labels appropriately</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Maintain logical heading hierarchy</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Label form inputs properly</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Provide error messages and instructions</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
              <span>Test with screen readers and keyboard only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}