import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { StatusBadge } from "../../components/ui/status-badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  AppWindow,
  Plus,
  Search,
  Grid3x3,
  List,
  Settings,
  ExternalLink,
  TrendingUp,
  Users,
  Activity,
} from "lucide-react";

interface Application {
  id: string;
  name: string;
  description: string;
  status: "active" | "warning" | "offline" | "pending";
  version: string;
  users: number;
  uptime: string;
  category: string;
  lastDeploy: string;
  environment: string;
}

const mockApplications: Application[] = [
  {
    id: "APP-001",
    name: "Authentication Service",
    description: "OAuth2 and SSO authentication provider",
    status: "active",
    version: "v3.2.1",
    users: 2547,
    uptime: "99.99%",
    category: "Security",
    lastDeploy: "2 days ago",
    environment: "Production",
  },
  {
    id: "APP-002",
    name: "API Gateway",
    description: "Central API routing and rate limiting",
    status: "active",
    version: "v2.8.0",
    users: 1823,
    uptime: "99.95%",
    category: "Infrastructure",
    lastDeploy: "5 days ago",
    environment: "Production",
  },
  {
    id: "APP-003",
    name: "User Management",
    description: "User profile and account management system",
    status: "warning",
    version: "v4.1.2",
    users: 2547,
    uptime: "98.45%",
    category: "Core",
    lastDeploy: "1 day ago",
    environment: "Production",
  },
  {
    id: "APP-004",
    name: "Analytics Engine",
    description: "Real-time data processing and analytics",
    status: "active",
    version: "v1.5.3",
    users: 542,
    uptime: "99.87%",
    category: "Analytics",
    lastDeploy: "3 days ago",
    environment: "Production",
  },
  {
    id: "APP-005",
    name: "Notification Service",
    description: "Email, SMS, and push notification delivery",
    status: "active",
    version: "v2.3.0",
    users: 2547,
    uptime: "99.92%",
    category: "Communication",
    lastDeploy: "1 week ago",
    environment: "Production",
  },
  {
    id: "APP-006",
    name: "File Storage",
    description: "Secure file upload and storage service",
    status: "offline",
    version: "v3.0.1",
    users: 1234,
    uptime: "0.00%",
    category: "Infrastructure",
    lastDeploy: "2 weeks ago",
    environment: "Production",
  },
  {
    id: "APP-007",
    name: "Search Service",
    description: "Elasticsearch-based search functionality",
    status: "active",
    version: "v2.1.5",
    users: 892,
    uptime: "99.78%",
    category: "Core",
    lastDeploy: "4 days ago",
    environment: "Production",
  },
  {
    id: "APP-008",
    name: "Payment Gateway",
    description: "Payment processing and billing system",
    status: "pending",
    version: "v5.0.0-beta",
    users: 0,
    uptime: "N/A",
    category: "Finance",
    lastDeploy: "Pending",
    environment: "Staging",
  },
];

export function ApplicationsExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredApps = mockApplications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || app.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(mockApplications.map((a) => a.category)));

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Application Management</h1>
          <p className="text-sm text-muted-foreground">
            Monitor and manage all deployed applications
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Deploy Application
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md">
              <AppWindow className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">
                {mockApplications.length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Total Apps
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
              <p className="text-2xl font-semibold font-mono">
                {mockApplications.filter((a) => a.status === "active").length}
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Active
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-warning/10 rounded-md">
              <TrendingUp className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">99.2%</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Avg Uptime
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-info/10 rounded-md">
              <Users className="h-5 w-5 text-info" />
            </div>
            <div>
              <p className="text-2xl font-semibold font-mono">2.5K</p>
              <p className="text-xs text-muted-foreground tracking-wide">
                Total Users
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and View Toggle */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Applications Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <Card key={app.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <AppWindow className="h-6 w-6 text-primary" />
                </div>
                <StatusBadge status={app.status}>{app.status}</StatusBadge>
              </div>
              <h3 className="mb-2">{app.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {app.description}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Version:</span>
                  <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                    {app.version}
                  </code>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Users:</span>
                  <span className="font-mono">{app.users.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uptime:</span>
                  <span className="font-mono">{app.uptime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <Badge variant="outline">{app.category}</Badge>
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  <Settings className="h-4 w-4" />
                  Configure
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4" />
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredApps.map((app) => (
            <Card key={app.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-6">
                <div className="p-3 bg-primary/10 rounded-md">
                  <AppWindow className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="mb-1">{app.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {app.description}
                      </p>
                    </div>
                    <StatusBadge status={app.status}>{app.status}</StatusBadge>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Version:</span>
                      <code className="font-mono text-xs">{app.version}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Users:</span>
                      <span className="font-mono">
                        {app.users.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Uptime:</span>
                      <span className="font-mono">{app.uptime}</span>
                    </div>
                    <Badge variant="outline">{app.category}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredApps.length} of {mockApplications.length} applications
        </p>
      </div>
    </div>
  );
}