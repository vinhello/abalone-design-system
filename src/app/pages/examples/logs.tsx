import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Terminal,
  Search,
  Filter,
  Download,
  AlertCircle,
  Info,
  AlertTriangle,
  XCircle,
  RefreshCw,
} from "lucide-react";

interface LogEntry {
  id: string;
  timestamp: string;
  level: "info" | "warning" | "error" | "debug";
  service: string;
  message: string;
  source: string;
  user?: string;
}

const mockLogs: LogEntry[] = [
  {
    id: "LOG-001",
    timestamp: "2026-02-13 14:23:45.123",
    level: "info",
    service: "AUTH-SERVICE",
    message: "User authentication successful",
    source: "auth.login",
    user: "sarah.chen@abalone.io",
  },
  {
    id: "LOG-002",
    timestamp: "2026-02-13 14:23:42.567",
    level: "warning",
    service: "API-GATEWAY",
    message: "Rate limit exceeded for IP 192.168.1.45",
    source: "gateway.ratelimit",
  },
  {
    id: "LOG-003",
    timestamp: "2026-02-13 14:23:38.891",
    level: "error",
    service: "DATABASE",
    message: "Connection pool exhausted - max connections reached",
    source: "db.pool",
  },
  {
    id: "LOG-004",
    timestamp: "2026-02-13 14:23:35.234",
    level: "info",
    service: "API-GATEWAY",
    message: "Request processed successfully - 200 OK",
    source: "gateway.request",
  },
  {
    id: "LOG-005",
    timestamp: "2026-02-13 14:23:32.456",
    level: "debug",
    service: "CACHE-SERVICE",
    message: "Cache hit for key: user:session:abc123",
    source: "cache.get",
  },
  {
    id: "LOG-006",
    timestamp: "2026-02-13 14:23:28.789",
    level: "error",
    service: "FILE-STORAGE",
    message: "Failed to upload file: disk quota exceeded",
    source: "storage.upload",
    user: "m.rodriguez@abalone.io",
  },
  {
    id: "LOG-007",
    timestamp: "2026-02-13 14:23:25.123",
    level: "warning",
    service: "AUTH-SERVICE",
    message: "Failed login attempt detected",
    source: "auth.login",
    user: "unknown@external.com",
  },
  {
    id: "LOG-008",
    timestamp: "2026-02-13 14:23:21.456",
    level: "info",
    service: "NOTIFICATION",
    message: "Email notification sent successfully",
    source: "notify.email",
  },
  {
    id: "LOG-009",
    timestamp: "2026-02-13 14:23:18.789",
    level: "debug",
    service: "API-GATEWAY",
    message: "JWT token validated successfully",
    source: "gateway.auth",
  },
  {
    id: "LOG-010",
    timestamp: "2026-02-13 14:23:15.123",
    level: "error",
    service: "WORKER",
    message: "Background job failed: timeout after 30s",
    source: "worker.job",
  },
];

export function LogsExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [autoRefresh, setAutoRefresh] = useState(false);

  const filteredLogs = mockLogs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.source.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === "all" || log.level === levelFilter;
    const matchesService =
      serviceFilter === "all" || log.service === serviceFilter;
    return matchesSearch && matchesLevel && matchesService;
  });

  const services = Array.from(new Set(mockLogs.map((log) => log.service)));

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "info":
        return <Info className="h-4 w-4 text-info" />;
      case "debug":
        return <Terminal className="h-4 w-4 text-muted-foreground" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "error":
        return "text-destructive";
      case "warning":
        return "text-warning";
      case "info":
        return "text-info";
      case "debug":
        return "text-muted-foreground";
      default:
        return "";
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">System Logs</h1>
          <p className="text-sm text-muted-foreground">
            Real-time system logs and event monitoring
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export Logs
          </Button>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">
              <Terminal className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">{mockLogs.length}</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Total Logs
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-info/10 rounded-md">
              <Info className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockLogs.filter((l) => l.level === "info").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Info
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
              <p className="text-2xl font-semibold font-mono">
                {mockLogs.filter((l) => l.level === "warning").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Warnings
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive/10 rounded-md">
              <XCircle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockLogs.filter((l) => l.level === "error").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Errors
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-md">
              <Terminal className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockLogs.filter((l) => l.level === "debug").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Debug
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search logs by message, service, or source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 font-mono"
            />
          </div>
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="error">Error</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="debug">Debug</SelectItem>
            </SelectContent>
          </Select>
          <Select value={serviceFilter} onValueChange={setServiceFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Checkbox
              id="auto-refresh"
              checked={autoRefresh}
              onCheckedChange={(checked) => setAutoRefresh(checked as boolean)}
            />
            <label
              htmlFor="auto-refresh"
              className="text-sm font-medium cursor-pointer"
            >
              Auto-refresh
            </label>
          </div>
        </div>
      </Card>

      {/* Log Viewer */}
      <Card className="p-6">
        <div className="mb-4">
          <h3 className="mb-1">Log Stream</h3>
          <p className="text-sm text-muted-foreground">
            Showing {filteredLogs.length} of {mockLogs.length} log entries
          </p>
        </div>
        <div className="border border-border rounded-md bg-card overflow-hidden">
          <div className="max-h-[600px] overflow-y-auto">
            {filteredLogs.map((log, index) => (
              <div
                key={log.id}
                className={`p-4 font-mono text-sm border-b border-border last:border-b-0 hover:bg-accent/30 transition-colors ${
                  index % 2 === 0 ? "bg-muted/20" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">{getLevelIcon(log.level)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs text-muted-foreground">
                          {log.timestamp}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getLevelColor(log.level)}`}
                        >
                          {log.level.toUpperCase()}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {log.service}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {log.source}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground break-words">{log.message}</p>
                    {log.user && (
                      <p className="text-xs text-muted-foreground mt-1">
                        User: {log.user}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Live stream - Last updated: 2 seconds ago
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Load More
            </Button>
            <Button variant="outline" size="sm">
              Clear Filters
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}