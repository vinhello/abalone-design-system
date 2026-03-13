import { Outlet, Link, useLocation } from "react-router";
import { ThemeToggle } from "../components/theme-toggle";
import { Shell, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const navigation = [
  {
    title: "Foundation",
    items: [
      { title: "Colors", href: "/foundation/colors" },
      { title: "Typography", href: "/foundation/typography" },
      { title: "Icons", href: "/foundation/icons" },
      { title: "Accessibility", href: "/foundation/accessibility" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Buttons", href: "/components/buttons" },
      { title: "Inputs", href: "/components/inputs" },
      { title: "Forms", href: "/components/forms" },
      { title: "Tables", href: "/components/tables" },
      { title: "Cards", href: "/components/cards" },
      { title: "Badges", href: "/components/badges" },
      { title: "Status Badges", href: "/components/status-badges" },
      { title: "Alerts", href: "/components/alerts" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Dialogs", href: "/components/dialogs" },
      { title: "Progress", href: "/components/progress" },
      { title: "Breadcrumbs", href: "/components/breadcrumbs" },
      { title: "Stat Cards", href: "/components/stat-cards" },
      { title: "Empty States", href: "/components/empty-states" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Dashboard", href: "/examples/dashboard" },
      { title: "User Management", href: "/examples/users" },
      { title: "Applications", href: "/examples/applications" },
      { title: "Servers", href: "/examples/servers" },
      { title: "System Logs", href: "/examples/logs" },
      { title: "Audit Trail", href: "/examples/audits" },
      { title: "Custom Dashboards", href: "/examples/custom-dashboards" },
    ],
  },
];

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r-2 border-border bg-sidebar flex-shrink-0">
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Header */}
          <div className="p-6 border-b-2 border-border">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Shell className="h-6 w-6 text-primary" />
              <div>
                <h1 className="text-lg tracking-tight font-semibold">Abalone</h1>
                <p className="text-xs text-muted-foreground">Design System v3.0</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {navigation.map((section) => (
              <div key={section.title} className="mb-6">
                <h2 className="text-xs tracking-wider text-muted-foreground mb-2 px-2 font-semibold">
                  {section.title}
                </h2>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors font-medium",
                          location.pathname === item.href
                            ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm hover:bg-sidebar-primary/90"
                            : "hover:bg-sidebar-accent"
                        )}
                      >
                        <ChevronRight className={cn(
                          "h-3 w-3 transition-transform",
                          location.pathname === item.href ? "text-sidebar-primary-foreground" : ""
                        )} />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t-2 border-border">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-mono">WCAG 2.2 AA</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}