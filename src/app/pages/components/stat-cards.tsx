import { DocSection, PageHeader } from "../../components/doc-section";
import { StatCard } from "../../components/ui/stat-card";
import { Card } from "../../components/ui/card";
import { Users, Server, Activity, TrendingUp, TrendingDown } from "lucide-react";

export function StatCardsPage() {
  return (
    <div className="p-8 max-w-6xl">
      <PageHeader
        title="Stat cards"
        description="Display key metrics and statistics with optional trend indicators and icons."
      />

      <DocSection
        title="Basic Usage"
        description="Stat cards display a metric with a label and optional change indicator."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Users" value="2,547" />
          <StatCard title="Active Servers" value="47" />
          <StatCard title="System Uptime" value="99.9%" />
        </div>
      </DocSection>

      <DocSection
        title="With Icons"
        description="Add icons to provide visual context for metrics."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            value="2,547"
            icon={Users}
          />
          <StatCard
            title="Active Servers"
            value="47"
            icon={Server}
          />
          <StatCard
            title="System Health"
            value="98.5%"
            icon={Activity}
          />
        </div>
      </DocSection>

      <DocSection
        title="With Trend Indicators"
        description="Show changes with positive, negative, or neutral trends."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            value="2,547"
            change="+12.3% from last month"
            changeType="increase"
            icon={Users}
          />
          <StatCard
            title="Error Rate"
            value="0.3%"
            change="-45% from yesterday"
            changeType="increase"
            icon={Activity}
          />
          <StatCard
            title="Response Time"
            value="124ms"
            change="No change"
            changeType="neutral"
            icon={Server}
          />
        </div>
      </DocSection>

      <DocSection
        title="With Descriptions"
        description="Add additional context with description text."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            value="2,547"
            change="+12.3% from last month"
            changeType="increase"
            icon={Users}
            description="Active users in the last 30 days"
          />
          <StatCard
            title="Revenue"
            value="$45.2K"
            change="+8.1% from last quarter"
            changeType="increase"
            icon={TrendingUp}
            description="Total revenue this quarter"
          />
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
                  <span>Use clear, concise labels that describe the metric</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Format numbers appropriately (e.g., 2,547 instead of 2547)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use icons that clearly represent the metric being displayed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Group related stat cards together in a grid layout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use trend indicators to show change direction and magnitude</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Maintain consistent sizing across stat cards in the same section</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success font-bold">•</span>
                  <span>Use monospace font for numerical values for better readability</span>
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
                  <span>Use vague or ambiguous labels like "Count" or "Number"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Display raw numbers without appropriate formatting or units</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use decorative icons that don't relate to the metric</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Mix different card sizes arbitrarily without purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Show misleading trends (e.g., green for increasing errors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Overcrowd the dashboard with too many stat cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">•</span>
                  <span>Use stat cards for non-numerical or complex data</span>
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
                Icons are decorative and should not convey essential information
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Ensure sufficient color contrast for all text and change indicators
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Don't rely solely on color to indicate trends (use text and icons too)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-info font-bold">•</span>
              <span>
                Provide context for screen readers by including full metric descriptions
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}