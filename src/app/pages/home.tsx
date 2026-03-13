import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Shell, Palette, Type, Shield, Layout, CheckCircle, Users, Table, AlertTriangle, LayoutDashboard } from "lucide-react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

export function Home() {
  return (
    <div className="p-8 max-w-6xl">
      {/* Hero Section */}
      <div className="mb-12 border-2 border-primary/20 rounded-xl p-8 bg-gradient-to-br from-card to-muted/30 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <Shell className="h-12 w-12 flex-shrink-0 text-primary" />
          <div>
            <h1 className="text-4xl mb-2">Abalone Design System</h1>
            <p className="text-lg text-muted-foreground">
              Enterprise Security Interface Framework v3.0
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-6">
          <Badge>WCAG 2.2 Level AA</Badge>
          <Badge variant="success">Fully Accessible</Badge>
          <Badge variant="info">Light & Dark Mode</Badge>
          <Badge variant="outline">Modern IT Aesthetic</Badge>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          A comprehensive design system built for enterprise security applications. 
          Combines modern design principles with subtle IT nostalgia—clean typography, 
          refined colors, and data-focused layouts that feel professional yet familiar. 
          Full WCAG 2.2 Level AA compliance with production-ready components.
        </p>
        <div className="flex gap-3">
          <Link to="/foundation/colors">
            <Button>Get Started</Button>
          </Link>
          <Link to="/components/buttons">
            <Button variant="outline">View Components</Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-12">
        <h2 className="mb-4 pb-2 border-b-2 border-border">System Metrics</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6 text-center">
              <Layout className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-3xl mb-1 font-mono">15+</div>
              <p className="text-xs text-muted-foreground tracking-wider">Components</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-success" />
              <div className="text-3xl mb-1 font-mono">100%</div>
              <p className="text-xs text-muted-foreground tracking-wider">Accessible</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6 text-center">
              <Table className="h-8 w-8 mx-auto mb-2 text-info" />
              <div className="text-3xl mb-1 font-mono">250+</div>
              <p className="text-xs text-muted-foreground tracking-wider">Row support</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-accent" />
              <div className="text-3xl mb-1 font-mono">AA</div>
              <p className="text-xs text-muted-foreground tracking-wider">WCAG 2.2</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="mb-4 pb-2 border-b-2 border-border">System Overview</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                A comprehensive design system built for enterprise security applications. 
                Modernized aesthetic with IT nostalgia—featuring clean typography, refined colors, 
                and professional layouts. Full WCAG 2.2 Level AA compliance ensures accessibility for all users.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Full component library with accessibility built-in</li>
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Support for hundreds of rows in data tables</li>
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Comprehensive pagination system</li>
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Light and dark mode theming</li>
                <li className="flex items-center gap-2"><span className="text-primary">→</span> Enterprise-ready form controls</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Start Sections */}
      <div className="mb-12">
        <h2 className="mb-4 pb-2 border-b-2 border-border">Quick Start</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Link to="/foundation/colors" className="group">
            <Card className="transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <Palette className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Foundation</CardTitle>
                <CardDescription>
                  Color system, typography, and accessibility guidelines
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/components/buttons" className="group">
            <Card className="transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <Layout className="h-8 w-8 mb-2 text-success" />
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Fully documented UI components with live examples
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/examples/dashboard" className="group">
            <Card className="transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <LayoutDashboard className="h-8 w-8 mb-2 text-accent" />
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Real-world full-page examples and use cases
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/components/tables" className="group">
            <Card className="transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <Type className="h-8 w-8 mb-2 text-info" />
                <CardTitle>Data Tables</CardTitle>
                <CardDescription>
                  Enterprise-grade tables with pagination support
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>

      <Separator className="my-12" />

      {/* What's Included */}
      <div className="mb-12">
        <h2 className="mb-4 pb-2 border-b-2 border-border">What's Included</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="mb-3 tracking-wide text-primary">Foundation</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>→ Color System</li>
              <li>→ Typography</li>
              <li>→ Icons</li>
              <li>→ Accessibility</li>
              <li>→ Design Tokens</li>
              <li>→ Theme Support</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="mb-3 tracking-wide text-success">Form controls</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>→ Buttons</li>
              <li>→ Inputs</li>
              <li>→ Checkboxes</li>
              <li>→ Radio Buttons</li>
              <li>→ Select Menus</li>
              <li>→ Switches</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="mb-3 tracking-wide text-info">Data display</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>→ Tables</li>
              <li>→ Cards</li>
              <li>→ Badges</li>
              <li>→ Alerts</li>
              <li>→ Progress Bars</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="mb-3 tracking-wide text-accent">Navigation</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>→ Breadcrumbs</li>
              <li>→ Tabs</li>
              <li>→ Pagination</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="mb-3 tracking-wide text-warning">Overlays</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>→ Dialogs</li>
              <li>→ Popovers</li>
              <li>→ Dropdowns</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="mb-3 tracking-wide text-muted-foreground">Utilities</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>→ Separators</li>
              <li>→ Labels</li>
              <li>→ Theme Toggle</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div>
        <h2 className="mb-4 pb-2 border-b-2 border-border">Design Principles</h2>
        <div className="border border-border rounded-lg p-6 bg-card">
          <dl className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <dt className="tracking-wide mb-1 font-semibold text-primary">Clarity first</dt>
              <dd className="text-sm text-muted-foreground">
                Every component prioritizes readability and clear information hierarchy. 
                Modern typography ensures consistency while monospace fonts are used for data displays.
              </dd>
            </div>
            <div className="border-l-4 border-success pl-4 py-2">
              <dt className="tracking-wide mb-1 font-semibold text-success">Accessibility always</dt>
              <dd className="text-sm text-muted-foreground">
                WCAG 2.2 Level AA compliance throughout. All components are keyboard 
                navigable with proper ARIA labels and sufficient color contrast.
              </dd>
            </div>
            <div className="border-l-4 border-info pl-4 py-2">
              <dt className="tracking-wide mb-1 font-semibold text-info">Modern yet nostalgic</dt>
              <dd className="text-sm text-muted-foreground">
                Clean, contemporary design with subtle nods to IT admin panels and terminal interfaces. 
                Professional aesthetics meet familiar patterns from the golden age of computing.
              </dd>
            </div>
            <div className="border-l-4 border-accent pl-4 py-2">
              <dt className="tracking-wide mb-1 font-semibold text-accent">Enterprise scale</dt>
              <dd className="text-sm text-muted-foreground">
                Built to handle real-world security applications with hundreds of data 
                rows, complex filtering, and efficient pagination.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}