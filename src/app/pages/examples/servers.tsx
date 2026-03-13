import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { StatusBadge } from "../../components/ui/status-badge";
import { Progress } from "../../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Server,
  Cpu,
  HardDrive,
  Activity,
  Wifi,
  AlertTriangle,
  RefreshCw,
  Settings,
  Power,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ServerData {
  id: string;
  name: string;
  status: "online" | "warning" | "offline";
  ip: string;
  region: string;
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  uptime: string;
  load: string;
  processes: number;
}

const mockServers: ServerData[] = [
  {
    id: "SRV-001",
    name: "WEB-PROD-01",
    status: "online",
    ip: "10.0.1.45",
    region: "US-EAST-1",
    cpu: 45,
    memory: 62,
    disk: 58,
    network: 42,
    uptime: "45d 12h",
    load: "1.23",
    processes: 156,
  },
  {
    id: "SRV-002",
    name: "WEB-PROD-02",
    status: "online",
    ip: "10.0.1.46",
    region: "US-EAST-1",
    cpu: 52,
    memory: 58,
    disk: 61,
    network: 38,
    uptime: "45d 12h",
    load: "1.45",
    processes: 162,
  },
  {
    id: "SRV-003",
    name: "DB-PROD-01",
    status: "warning",
    ip: "10.0.2.10",
    region: "US-EAST-1",
    cpu: 78,
    memory: 85,
    disk: 72,
    network: 65,
    uptime: "32d 8h",
    load: "2.89",
    processes: 245,
  },
  {
    id: "SRV-004",
    name: "DB-PROD-02",
    status: "online",
    ip: "10.0.2.11",
    region: "US-WEST-2",
    cpu: 62,
    memory: 68,
    disk: 65,
    network: 58,
    uptime: "32d 8h",
    load: "2.12",
    processes: 238,
  },
  {
    id: "SRV-005",
    name: "API-PROD-01",
    status: "online",
    ip: "10.0.3.20",
    region: "EU-WEST-1",
    cpu: 38,
    memory: 44,
    disk: 35,
    network: 28,
    uptime: "89d 4h",
    load: "0.87",
    processes: 124,
  },
  {
    id: "SRV-006",
    name: "CACHE-PROD-01",
    status: "offline",
    ip: "10.0.4.5",
    region: "US-EAST-1",
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    uptime: "0d 0h",
    load: "0.00",
    processes: 0,
  },
  {
    id: "SRV-007",
    name: "WORKER-01",
    status: "online",
    ip: "10.0.5.12",
    region: "AP-SOUTH-1",
    cpu: 72,
    memory: 54,
    disk: 48,
    network: 45,
    uptime: "12d 18h",
    load: "2.34",
    processes: 189,
  },
  {
    id: "SRV-008",
    name: "WORKER-02",
    status: "online",
    ip: "10.0.5.13",
    region: "AP-SOUTH-1",
    cpu: 68,
    memory: 51,
    disk: 46,
    network: 42,
    uptime: "12d 18h",
    load: "2.18",
    processes: 182,
  },
];

const cpuHistory = [
  { time: "00:00", value: 45 },
  { time: "04:00", value: 32 },
  { time: "08:00", value: 68 },
  { time: "12:00", value: 78 },
  { time: "16:00", value: 72 },
  { time: "20:00", value: 58 },
  { time: "Now", value: 62 },
];

export function ServersExample() {
  const activeServers = mockServers.filter((s) => s.status === "online").length;
  const warningServers = mockServers.filter((s) => s.status === "warning").length;
  const offlineServers = mockServers.filter((s) => s.status === "offline").length;

  const avgCpu =
    mockServers
      .filter((s) => s.status !== "offline")
      .reduce((acc, s) => acc + s.cpu, 0) /
    mockServers.filter((s) => s.status !== "offline").length;

  const avgMemory =
    mockServers
      .filter((s) => s.status !== "offline")
      .reduce((acc, s) => acc + s.memory, 0) /
    mockServers.filter((s) => s.status !== "offline").length;

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Server Management</h1>
          <p className="text-sm text-muted-foreground">
            Monitor server health and performance metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4" />
            Configure
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">
              <Server className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockServers.length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Total Servers
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/10 rounded-md">
              <Activity className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">{activeServers}</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Online
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-md">
              <AlertTriangle className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">{warningServers}</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Warning
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-info/10 rounded-md">
              <Cpu className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {avgCpu.toFixed(0)}%
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Avg CPU
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/10 rounded-md">
              <HardDrive className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {avgMemory.toFixed(0)}%
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Avg Memory
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* CPU Trends */}
      <Card className="p-6">
        <div className="mb-4">
          <h3 className="mb-1">CPU Usage Trends</h3>
          <p className="text-sm text-muted-foreground">
            Average CPU usage across all active servers (24h)
          </p>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={cpuHistory}>
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
              dataKey="value"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Server List */}
      <Card className="p-6">
        <Tabs defaultValue="all">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="all">
                All Servers ({mockServers.length})
              </TabsTrigger>
              <TabsTrigger value="online">Online ({activeServers})</TabsTrigger>
              <TabsTrigger value="warning">Warning ({warningServers})</TabsTrigger>
              <TabsTrigger value="offline">Offline ({offlineServers})</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="m-0">
            <ServerTable servers={mockServers} />
          </TabsContent>
          <TabsContent value="online" className="m-0">
            <ServerTable
              servers={mockServers.filter((s) => s.status === "online")}
            />
          </TabsContent>
          <TabsContent value="warning" className="m-0">
            <ServerTable
              servers={mockServers.filter((s) => s.status === "warning")}
            />
          </TabsContent>
          <TabsContent value="offline" className="m-0">
            <ServerTable
              servers={mockServers.filter((s) => s.status === "offline")}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

function ServerTable({ servers }: { servers: ServerData[] }) {
  return (
    <div className="border border-border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Server</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>CPU</TableHead>
            <TableHead>Memory</TableHead>
            <TableHead>Disk</TableHead>
            <TableHead>Network</TableHead>
            <TableHead>Uptime</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {servers.map((server) => (
            <TableRow key={server.id}>
              <TableCell>
                <div>
                  <p className="font-medium font-mono">{server.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {server.ip}
                  </p>
                  <p className="text-xs text-muted-foreground">{server.id}</p>
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={server.status}>{server.status}</StatusBadge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{server.region}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono min-w-[3ch]">
                    {server.cpu}%
                  </span>
                  <Progress value={server.cpu} className="w-20" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono min-w-[3ch]">
                    {server.memory}%
                  </span>
                  <Progress value={server.memory} className="w-20" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono min-w-[3ch]">
                    {server.disk}%
                  </span>
                  <Progress value={server.disk} className="w-20" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-mono">{server.network}%</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm font-mono">{server.uptime}</span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}