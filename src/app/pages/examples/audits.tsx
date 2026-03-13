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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Shield,
  Search,
  Filter,
  Download,
  FileText,
  User,
  Settings,
  Database,
  Lock,
  Unlock,
  Edit,
  Trash2,
  UserPlus,
} from "lucide-react";

interface AuditEntry {
  id: string;
  timestamp: string;
  action: string;
  category: "authentication" | "authorization" | "data" | "configuration" | "system";
  user: string;
  resource: string;
  result: "success" | "failure" | "warning";
  ipAddress: string;
  details: string;
}

const mockAudits: AuditEntry[] = [
  {
    id: "AUD-001",
    timestamp: "2026-02-13 14:23:45",
    action: "User Login",
    category: "authentication",
    user: "sarah.chen@abalone.io",
    resource: "AUTH_SERVICE",
    result: "success",
    ipAddress: "192.168.1.45",
    details: "Successful authentication via SSO",
  },
  {
    id: "AUD-002",
    timestamp: "2026-02-13 14:20:12",
    action: "Permission Changed",
    category: "authorization",
    user: "admin@abalone.io",
    resource: "USER:m.rodriguez@abalone.io",
    result: "success",
    ipAddress: "192.168.1.10",
    details: "Changed role from Viewer to Developer",
  },
  {
    id: "AUD-003",
    timestamp: "2026-02-13 14:18:33",
    action: "Data Export",
    category: "data",
    user: "e.thompson@abalone.io",
    resource: "USERS_TABLE",
    result: "success",
    ipAddress: "192.168.1.78",
    details: "Exported 2,547 user records to CSV",
  },
  {
    id: "AUD-004",
    timestamp: "2026-02-13 14:15:22",
    action: "Failed Login",
    category: "authentication",
    user: "unknown@external.com",
    resource: "AUTH_SERVICE",
    result: "failure",
    ipAddress: "203.0.113.45",
    details: "Invalid credentials - 3rd attempt",
  },
  {
    id: "AUD-005",
    timestamp: "2026-02-13 14:12:08",
    action: "Config Update",
    category: "configuration",
    user: "admin@abalone.io",
    resource: "SECURITY_SETTINGS",
    result: "success",
    ipAddress: "192.168.1.10",
    details: "Updated password policy requirements",
  },
  {
    id: "AUD-006",
    timestamp: "2026-02-13 14:08:55",
    action: "Database Backup",
    category: "system",
    user: "system@abalone.io",
    resource: "DB_PROD_01",
    result: "success",
    ipAddress: "10.0.2.10",
    details: "Automated daily backup completed",
  },
  {
    id: "AUD-007",
    timestamp: "2026-02-13 14:05:41",
    action: "User Created",
    category: "authorization",
    user: "admin@abalone.io",
    resource: "USER:l.anderson@abalone.io",
    result: "success",
    ipAddress: "192.168.1.10",
    details: "New user account created with Developer role",
  },
  {
    id: "AUD-008",
    timestamp: "2026-02-13 14:02:28",
    action: "Access Denied",
    category: "authorization",
    user: "j.wilson@abalone.io",
    resource: "ADMIN_PANEL",
    result: "failure",
    ipAddress: "192.168.1.92",
    details: "Insufficient permissions for requested resource",
  },
  {
    id: "AUD-009",
    timestamp: "2026-02-13 13:58:15",
    action: "Data Deletion",
    category: "data",
    user: "m.garcia@abalone.io",
    resource: "LOG_ENTRIES",
    result: "warning",
    ipAddress: "192.168.1.56",
    details: "Deleted 10,000 log entries older than 90 days",
  },
  {
    id: "AUD-010",
    timestamp: "2026-02-13 13:55:02",
    action: "API Key Generated",
    category: "configuration",
    user: "d.kim@abalone.io",
    resource: "API_KEYS",
    result: "success",
    ipAddress: "192.168.1.34",
    details: "Generated new API key for external integration",
  },
];

export function AuditsExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [resultFilter, setResultFilter] = useState("all");

  const filteredAudits = mockAudits.filter((audit) => {
    const matchesSearch =
      audit.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audit.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audit.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      audit.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || audit.category === categoryFilter;
    const matchesResult = resultFilter === "all" || audit.result === resultFilter;
    return matchesSearch && matchesCategory && matchesResult;
  });

  const getActionIcon = (category: string) => {
    switch (category) {
      case "authentication":
        return <Lock className="h-4 w-4 text-primary" />;
      case "authorization":
        return <Shield className="h-4 w-4 text-warning" />;
      case "data":
        return <Database className="h-4 w-4 text-info" />;
      case "configuration":
        return <Settings className="h-4 w-4 text-accent" />;
      case "system":
        return <FileText className="h-4 w-4 text-muted-foreground" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getResultBadgeVariant = (
    result: string
  ): "default" | "secondary" | "destructive" | "warning" | "outline" => {
    switch (result) {
      case "success":
        return "default";
      case "failure":
        return "destructive";
      case "warning":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Audit Trail</h1>
          <p className="text-sm text-muted-foreground">
            Complete audit log of system activities and security events
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileText className="h-4 w-4" />
            Generate Report
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockAudits.length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Total Events
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/10 rounded-md">
              <Lock className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockAudits.filter((a) => a.result === "success").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Successful
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive/10 rounded-md">
              <Unlock className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockAudits.filter((a) => a.result === "failure").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Failed
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-md">
              <Settings className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockAudits.filter((a) => a.category === "configuration").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Config Changes
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-info/10 rounded-md">
              <Database className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockAudits.filter((a) => a.category === "data").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Data Events
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by action, user, resource, or details..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="authentication">Authentication</SelectItem>
              <SelectItem value="authorization">Authorization</SelectItem>
              <SelectItem value="data">Data</SelectItem>
              <SelectItem value="configuration">Configuration</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select value={resultFilter} onValueChange={setResultFilter}>
            <SelectTrigger className="w-full md:w-40">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Results" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Results</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="failure">Failure</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Audit Table */}
      <Card className="p-6">
        <div className="mb-4">
          <h3 className="mb-1">Audit Events</h3>
          <p className="text-sm text-muted-foreground">
            Showing {filteredAudits.length} of {mockAudits.length} audit records
          </p>
        </div>
        <div className="border border-border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAudits.map((audit) => (
                <TableRow key={audit.id} className="cursor-pointer">
                  <TableCell>
                    <div>
                      <p className="text-sm font-mono">{audit.timestamp}</p>
                      <p className="text-xs text-muted-foreground">{audit.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getActionIcon(audit.category)}
                      <div>
                        <p className="text-sm font-medium">{audit.action}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {audit.category}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-mono">{audit.user}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {audit.resource}
                    </code>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getResultBadgeVariant(audit.result)}>
                      {audit.result}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-mono text-muted-foreground">
                      {audit.ipAddress}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Retention period: 90 days
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent Critical Events */}
      <Card className="p-6 border-destructive bg-destructive/5">
        <div className="mb-4 flex items-center gap-3">
          <Shield className="h-5 w-5 text-destructive" />
          <div>
            <h3 className="mb-1">Recent Critical Events</h3>
            <p className="text-sm text-muted-foreground">
              Events requiring immediate attention
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {mockAudits
            .filter((a) => a.result === "failure")
            .slice(0, 3)
            .map((audit) => (
              <div
                key={audit.id}
                className="p-3 bg-background border border-destructive/30 rounded-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium">{audit.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {audit.details}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>User: {audit.user}</span>
                      <span>IP: {audit.ipAddress}</span>
                      <span>{audit.timestamp}</span>
                    </div>
                  </div>
                  <Badge variant="destructive">{audit.result}</Badge>
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );
}