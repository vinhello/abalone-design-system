import { Card } from "../../components/ui/card";
import { StatCard } from "../../components/ui/stat-card";
import { StatusBadge } from "../../components/ui/status-badge";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Activity,
  Server,
  Users,
  Shield,
  AlertTriangle,
  TrendingUp,
  Database,
  Cpu,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const cpuData = [
  { time: "00:00", usage: 45 },
  { time: "04:00", usage: 32 },
  { time: "08:00", usage: 68 },
  { time: "12:00", usage: 78 },
  { time: "16:00", usage: 85 },
  { time: "20:00", usage: 62 },
  { time: "Now", usage: 71 },
];

const networkData = [
  { time: "00:00", inbound: 120, outbound: 80 },
  { time: "04:00", inbound: 90, outbound: 60 },
  { time: "08:00", inbound: 240, outbound: 180 },
  { time: "12:00", inbound: 310, outbound: 250 },
  { time: "16:00", inbound: 280, outbound: 220 },
  { time: "20:00", inbound: 200, outbound: 150 },
  { time: "Now", inbound: 260, outbound: 190 },
];

const securityEvents = [
  { type: "Login Success", user: "admin@abalone.io", time: "2 min ago", severity: "info" },
  { type: "Failed Auth", user: "unknown@external.com", time: "8 min ago", severity: "warning" },
  { type: "Config Change", user: "operator@abalone.io", time: "15 min ago", severity: "info" },
  { type: "Port Scan", user: "192.168.1.45", time: "23 min ago", severity: "error" },
  { type: "Login Success", user: "dev@abalone.io", time: "31 min ago", severity: "info" },
];

const serverStatus = [
  { name: "WEB-PROD-01", status: "online", cpu: 45, memory: 62, uptime: "99.98%" },
  { name: "WEB-PROD-02", status: "online", cpu: 52, memory: 58, uptime: "99.97%" },
  { name: "DB-PROD-01", status: "warning", cpu: 78, memory: 85, uptime: "99.45%" },
  { name: "API-PROD-01", status: "online", cpu: 38, memory: 44, uptime: "99.99%" },
  { name: "CACHE-01", status: "offline", cpu: 0, memory: 0, uptime: "0.00%" },
];

export function DashboardExample() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">System Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Real-time monitoring and system overview
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="font-mono">
            Last updated: 2s ago
          </Badge>
          <Button variant="outline" size="sm">
            <Activity className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="2,547"
          change="+12.3% from last month"
          changeType="increase"
          icon={Users}
        />
        <StatCard
          title="Active Servers"
          value="47"
          change="4 servers offline"
          changeType="decrease"
          icon={Server}
        />
        <StatCard
          title="Security Events"
          value="1,234"
          change="+5.2% from yesterday"
          changeType="increase"
          icon={Shield}
        />
        <StatCard
          title="System Health"
          value="98.5%"
          change="All critical systems operational"
          changeType="increase"
          icon={Activity}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CPU Usage Chart */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="mb-1">CPU Usage (24h)</h3>
            <p className="text-sm text-muted-foreground">
              Average across all servers
            </p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={cpuData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Network Traffic Chart */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="mb-1">Network Traffic (24h)</h3>
            <p className="text-sm text-muted-foreground">MB/s inbound and outbound</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={networkData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Legend />
              <Bar dataKey="inbound" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="outbound" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Security Events */}
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="mb-1">Recent Security Events</h3>
              <p className="text-sm text-muted-foreground">Last 30 minutes</p>
            </div>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {securityEvents.map((event, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      event.severity === "error"
                        ? "bg-destructive"
                        : event.severity === "warning"
                        ? "bg-warning"
                        : "bg-info"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">{event.type}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {event.user}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{event.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Server Status */}
        <Card className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="mb-1">Server Status</h3>
              <p className="text-sm text-muted-foreground">Production environment</p>
            </div>
            <Button variant="ghost" size="sm">
              Manage
            </Button>
          </div>
          <div className="border border-border rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Server</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>CPU</TableHead>
                  <TableHead>Memory</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serverStatus.map((server) => (
                  <TableRow key={server.name}>
                    <TableCell className="font-mono text-sm">{server.name}</TableCell>
                    <TableCell>
                      <StatusBadge
                        status={
                          server.status as
                            | "online"
                            | "offline"
                            | "warning"
                            | "error"
                            | "info"
                        }
                      >
                        {server.status}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono min-w-[3ch]">
                          {server.cpu}%
                        </span>
                        <Progress value={server.cpu} className="w-16" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono min-w-[3ch]">
                          {server.memory}%
                        </span>
                        <Progress value={server.memory} className="w-16" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      {/* Alerts Section */}
      <Card className="p-6 border-warning bg-warning/5">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="mb-1">Active Alerts (3)</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="font-mono text-warning">DB-PROD-01:</span>
                <span>High memory usage (85%) - Consider scaling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-warning">CACHE-01:</span>
                <span>Server offline - Requires immediate attention</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-warning">SECURITY:</span>
                <span>Unusual port scan activity detected from 192.168.1.45</span>
              </li>
            </ul>
          </div>
          <Button variant="warning" size="sm">
            Review All
          </Button>
        </div>
      </Card>
    </div>
  );
}