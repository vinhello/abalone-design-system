import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { PageHeader } from "../../components/doc-section";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import * as React from "react";

// Import common icon categories
import {
  // Navigation & UI
  Home, Menu, Search, Settings, Bell, User, ChevronRight, ChevronLeft, ChevronDown, ChevronUp,
  X, Plus, Minus, MoreHorizontal, MoreVertical, ArrowLeft, ArrowRight, ArrowUp, ArrowDown,
  
  // Actions
  Edit, Trash2, Download, Upload, Save, Copy, Check, Share2, ExternalLink, RefreshCw,
  Filter, SortAsc, SortDesc, ZoomIn, ZoomOut, Maximize2, Minimize2,
  
  // Status & Indicators
  CheckCircle2, XCircle, AlertCircle, AlertTriangle, Info, HelpCircle, Loader2,
  
  // Security & Admin
  Shield, ShieldAlert, ShieldCheck, Lock, Unlock, Key, Eye, EyeOff, Terminal,
  
  // Data & Content
  Database, Server, Cpu, HardDrive, Activity, TrendingUp, TrendingDown, BarChart3,
  PieChart, FileText, File, Folder, FolderOpen, Code, Code2, Package,
  
  // Communication
  Mail, MessageSquare, Phone, Video, Send, Inbox,
  
  // Users & People
  Users, UserPlus, UserMinus, UserCheck, UserX, UsersRound,
  
  // Time & Calendar
  Clock, Calendar, CalendarDays,
  
  // Media
  Image, Play, Pause, Volume2, VolumeX,
  
  // Other Common
  Globe, Map, MapPin, Tag, Star, Heart, Bookmark, Link, Paperclip,
} from "lucide-react";

const iconCategories = {
  "Navigation & UI": [
    { name: "Home", icon: Home },
    { name: "Menu", icon: Menu },
    { name: "Search", icon: Search },
    { name: "Settings", icon: Settings },
    { name: "Bell", icon: Bell },
    { name: "User", icon: User },
    { name: "ChevronRight", icon: ChevronRight },
    { name: "ChevronLeft", icon: ChevronLeft },
    { name: "ChevronDown", icon: ChevronDown },
    { name: "ChevronUp", icon: ChevronUp },
    { name: "X", icon: X },
    { name: "Plus", icon: Plus },
    { name: "Minus", icon: Minus },
    { name: "MoreHorizontal", icon: MoreHorizontal },
    { name: "MoreVertical", icon: MoreVertical },
    { name: "ArrowLeft", icon: ArrowLeft },
    { name: "ArrowRight", icon: ArrowRight },
    { name: "ArrowUp", icon: ArrowUp },
    { name: "ArrowDown", icon: ArrowDown },
  ],
  "Actions": [
    { name: "Edit", icon: Edit },
    { name: "Trash2", icon: Trash2 },
    { name: "Download", icon: Download },
    { name: "Upload", icon: Upload },
    { name: "Save", icon: Save },
    { name: "Copy", icon: Copy },
    { name: "Check", icon: Check },
    { name: "Share2", icon: Share2 },
    { name: "ExternalLink", icon: ExternalLink },
    { name: "RefreshCw", icon: RefreshCw },
    { name: "Filter", icon: Filter },
    { name: "SortAsc", icon: SortAsc },
    { name: "SortDesc", icon: SortDesc },
    { name: "ZoomIn", icon: ZoomIn },
    { name: "ZoomOut", icon: ZoomOut },
    { name: "Maximize2", icon: Maximize2 },
    { name: "Minimize2", icon: Minimize2 },
  ],
  "Status & Indicators": [
    { name: "CheckCircle2", icon: CheckCircle2 },
    { name: "XCircle", icon: XCircle },
    { name: "AlertCircle", icon: AlertCircle },
    { name: "AlertTriangle", icon: AlertTriangle },
    { name: "Info", icon: Info },
    { name: "HelpCircle", icon: HelpCircle },
    { name: "Loader2", icon: Loader2 },
  ],
  "Security & Admin": [
    { name: "Shield", icon: Shield },
    { name: "ShieldAlert", icon: ShieldAlert },
    { name: "ShieldCheck", icon: ShieldCheck },
    { name: "Lock", icon: Lock },
    { name: "Unlock", icon: Unlock },
    { name: "Key", icon: Key },
    { name: "Eye", icon: Eye },
    { name: "EyeOff", icon: EyeOff },
    { name: "Terminal", icon: Terminal },
  ],
  "Data & Content": [
    { name: "Database", icon: Database },
    { name: "Server", icon: Server },
    { name: "Cpu", icon: Cpu },
    { name: "HardDrive", icon: HardDrive },
    { name: "Activity", icon: Activity },
    { name: "TrendingUp", icon: TrendingUp },
    { name: "TrendingDown", icon: TrendingDown },
    { name: "BarChart3", icon: BarChart3 },
    { name: "PieChart", icon: PieChart },
    { name: "FileText", icon: FileText },
    { name: "File", icon: File },
    { name: "Folder", icon: Folder },
    { name: "FolderOpen", icon: FolderOpen },
    { name: "Code", icon: Code },
    { name: "Code2", icon: Code2 },
    { name: "Package", icon: Package },
  ],
  "Communication": [
    { name: "Mail", icon: Mail },
    { name: "MessageSquare", icon: MessageSquare },
    { name: "Phone", icon: Phone },
    { name: "Video", icon: Video },
    { name: "Send", icon: Send },
    { name: "Inbox", icon: Inbox },
  ],
  "Users & People": [
    { name: "Users", icon: Users },
    { name: "UserPlus", icon: UserPlus },
    { name: "UserMinus", icon: UserMinus },
    { name: "UserCheck", icon: UserCheck },
    { name: "UserX", icon: UserX },
    { name: "UsersRound", icon: UsersRound },
  ],
  "Time & Calendar": [
    { name: "Clock", icon: Clock },
    { name: "Calendar", icon: Calendar },
    { name: "CalendarDays", icon: CalendarDays },
  ],
  "Media": [
    { name: "Image", icon: Image },
    { name: "Play", icon: Play },
    { name: "Pause", icon: Pause },
    { name: "Volume2", icon: Volume2 },
    { name: "VolumeX", icon: VolumeX },
  ],
  "Other Common": [
    { name: "Globe", icon: Globe },
    { name: "Map", icon: Map },
    { name: "MapPin", icon: MapPin },
    { name: "Tag", icon: Tag },
    { name: "Star", icon: Star },
    { name: "Heart", icon: Heart },
    { name: "Bookmark", icon: Bookmark },
    { name: "Link", icon: Link },
    { name: "Paperclip", icon: Paperclip },
  ],
};

export function IconsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copiedIcon, setCopiedIcon] = React.useState<string | null>(null);

  const handleCopyCode = (iconName: string) => {
    navigator.clipboard.writeText(`import { ${iconName} } from "lucide-react";`);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const filteredCategories = React.useMemo(() => {
    if (!searchQuery) return iconCategories;

    const query = searchQuery.toLowerCase();
    const filtered: typeof iconCategories = {};

    Object.entries(iconCategories).forEach(([category, icons]) => {
      const matchingIcons = icons.filter(icon =>
        icon.name.toLowerCase().includes(query)
      );
      if (matchingIcons.length > 0) {
        filtered[category as keyof typeof iconCategories] = matchingIcons;
      }
    });

    return filtered;
  }, [searchQuery]);

  const totalIcons = Object.values(iconCategories).reduce((acc, icons) => acc + icons.length, 0);

  return (
    <div className="p-8 max-w-6xl">
      <PageHeader
        title="Icons"
        description="A comprehensive icon library powered by Lucide React, providing over 1,400 carefully crafted icons for enterprise applications."
      />

      {/* Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Icon System</CardTitle>
          <CardDescription>
            Abalone uses Lucide React as its icon library. Lucide provides a consistent, 
            accessible, and customizable icon set that aligns with modern UI design patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-border rounded-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Library</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Lucide React v0.487.0 with 1,400+ icons
              </p>
            </div>
            <div className="border border-border rounded-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <h4 className="font-semibold">Accessible</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                WCAG 2.2 Level AA compliant with proper ARIA labels
              </p>
            </div>
            <div className="border border-border rounded-md p-4">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-accent" />
                <h4 className="font-semibold">Customizable</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Size, color, and stroke width can be adjusted
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Guide */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            How to import and use icons in your components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">Basic Usage</TabsTrigger>
              <TabsTrigger value="sizing">Sizing</TabsTrigger>
              <TabsTrigger value="styling">Styling</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Import and Use</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import { Settings } from "lucide-react";

function MyComponent() {
  return (
    <div>
      <Settings />
    </div>
  );
}`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Multiple Icons</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import { User, Mail, Phone, Settings } from "lucide-react";

function ContactCard() {
  return (
    <div>
      <User className="h-5 w-5" />
      <Mail className="h-5 w-5" />
      <Phone className="h-5 w-5" />
      <Settings className="h-5 w-5" />
    </div>
  );
}`}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="sizing" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Standard Sizes</h4>
                <div className="flex items-center gap-4 p-4 border border-border rounded-md">
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <code className="text-xs">h-4 w-4</code>
                    <span className="text-xs text-muted-foreground">16px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <code className="text-xs">h-5 w-5</code>
                    <span className="text-xs text-muted-foreground">20px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6" />
                    <code className="text-xs">h-6 w-6</code>
                    <span className="text-xs text-muted-foreground">24px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-8 w-8" />
                    <code className="text-xs">h-8 w-8</code>
                    <span className="text-xs text-muted-foreground">32px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-10 w-10" />
                    <code className="text-xs">h-10 w-10</code>
                    <span className="text-xs text-muted-foreground">40px</span>
                  </div>
                </div>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-4">
{`<Settings className="h-4 w-4" /> {/* 16px - Small */}
<Settings className="h-5 w-5" /> {/* 20px - Default */}
<Settings className="h-6 w-6" /> {/* 24px - Medium */}
<Settings className="h-8 w-8" /> {/* 32px - Large */}
<Settings className="h-10 w-10" /> {/* 40px - Extra Large */}`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Custom Size with Props</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<Settings size={24} />
<Settings size={32} strokeWidth={1.5} />`}
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="styling" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Color Classes</h4>
                <div className="flex items-center gap-4 p-4 border border-border rounded-md flex-wrap">
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    <code className="text-xs">text-primary</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6 text-success" />
                    <code className="text-xs">text-success</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6 text-warning" />
                    <code className="text-xs">text-warning</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6 text-destructive" />
                    <code className="text-xs">text-destructive</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-6 w-6 text-muted-foreground" />
                    <code className="text-xs">text-muted-foreground</code>
                  </div>
                </div>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-4">
{`<Settings className="text-primary" />
<Settings className="text-success" />
<Settings className="text-warning" />
<Settings className="text-destructive" />
<Settings className="text-muted-foreground" />`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Stroke Width</h4>
                <div className="flex items-center gap-4 p-4 border border-border rounded-md">
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-8 w-8" strokeWidth={1} />
                    <code className="text-xs">strokeWidth=&#123;1&#125;</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-8 w-8" strokeWidth={1.5} />
                    <code className="text-xs">strokeWidth=&#123;1.5&#125;</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-8 w-8" strokeWidth={2} />
                    <code className="text-xs">strokeWidth=&#123;2&#125;</code>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings className="h-8 w-8" strokeWidth={2.5} />
                    <code className="text-xs">strokeWidth=&#123;2.5&#125;</code>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accessibility" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Decorative Icons</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Icons that are purely decorative should be hidden from screen readers:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<Settings aria-hidden="true" className="h-5 w-5" />`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Semantic Icons</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Icons that convey meaning should have accessible labels:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<button>
  <Settings aria-label="Settings" className="h-5 w-5" />
</button>

{/* Or with visible text */}
<button>
  <Settings aria-hidden="true" className="h-5 w-5" />
  <span>Settings</span>
</button>`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Status Icons</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Status indicators should use role and aria-label:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<div className="flex items-center gap-2">
  <CheckCircle2 
    className="h-5 w-5 text-success" 
    role="img" 
    aria-label="Success"
  />
  <span>Operation completed successfully</span>
</div>`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Icon Browser */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Icon Browser</CardTitle>
              <CardDescription>
                Browse and search through {totalIcons} commonly used icons. Click any icon to copy its import statement.
              </CardDescription>
            </div>
            <Badge variant="secondary">{totalIcons} icons shown</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>

          {Object.entries(filteredCategories).map(([category, icons]) => (
            <div key={category} className="space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{category}</h3>
                <Badge variant="outline">{icons.length}</Badge>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {icons.map(({ name, icon: Icon }) => (
                  <button
                    key={name}
                    onClick={() => handleCopyCode(name)}
                    className="flex flex-col items-center gap-2 p-4 border border-border rounded-md hover:bg-muted hover:border-primary transition-colors group relative"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground">
                      {name}
                    </span>
                    {copiedIcon === name && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/90 rounded-md">
                        <div className="flex items-center gap-1 text-success">
                          <Check className="h-4 w-4" />
                          <span className="text-xs font-medium">Copied!</span>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(filteredCategories).length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">No icons found</h3>
              <p className="text-sm text-muted-foreground">
                Try a different search term or browse all icons above.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
          <CardDescription>
            Guidelines for using icons effectively in your interfaces
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-success/10">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <h3 className="font-semibold text-success">Do</h3>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3 p-3 border border-success/20 bg-success/5 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Use consistent sizing</p>
                    <p className="text-sm text-muted-foreground">
                      Maintain the same icon size within a component or context (e.g., all toolbar icons are h-5 w-5).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-success/20 bg-success/5 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Align with text properly</p>
                    <p className="text-sm text-muted-foreground">
                      Use flexbox utilities like "flex items-center gap-2" to align icons with adjacent text.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-success/20 bg-success/5 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Use semantic colors</p>
                    <p className="text-sm text-muted-foreground">
                      Apply color classes that convey meaning (text-destructive for delete actions, text-success for confirmations).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-success/20 bg-success/5 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Provide accessibility labels</p>
                    <p className="text-sm text-muted-foreground">
                      Add aria-label or aria-hidden appropriately based on whether the icon conveys meaning or is decorative.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-success/20 bg-success/5 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Choose recognizable icons</p>
                    <p className="text-sm text-muted-foreground">
                      Use universally understood icons (trash for delete, pencil for edit, gear for settings).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Don'ts */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-destructive/10">
                  <XCircle className="h-4 w-4 text-destructive" />
                </div>
                <h3 className="font-semibold text-destructive">Don't</h3>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3 p-3 border border-destructive/20 bg-destructive/5 rounded-md">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Mix icon libraries</p>
                    <p className="text-sm text-muted-foreground">
                      Don't combine icons from different libraries (Lucide, FontAwesome, Material) as they have different design styles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-destructive/20 bg-destructive/5 rounded-md">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Use icons without context</p>
                    <p className="text-sm text-muted-foreground">
                      Don't rely solely on icons for important actions. Pair them with labels or tooltips for clarity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-destructive/20 bg-destructive/5 rounded-md">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Overuse decorative icons</p>
                    <p className="text-sm text-muted-foreground">
                      Don't add icons everywhere. Too many icons can create visual clutter and reduce their effectiveness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-destructive/20 bg-destructive/5 rounded-md">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Use inconsistent stroke widths</p>
                    <p className="text-sm text-muted-foreground">
                      Don't mix different stroke widths in the same context. Maintain visual consistency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 p-3 border border-destructive/20 bg-destructive/5 rounded-md">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Ignore color contrast</p>
                    <p className="text-sm text-muted-foreground">
                      Don't use icon colors that don't meet WCAG contrast requirements against their backgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Resources</CardTitle>
          <CardDescription>
            External resources for exploring the full icon library
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <a
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Lucide Icon Library</p>
                <p className="text-sm text-muted-foreground">
                  Browse all 1,400+ icons on the official Lucide website
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
          </a>

          <a
            href="https://github.com/lucide-icons/lucide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Lucide GitHub Repository</p>
                <p className="text-sm text-muted-foreground">
                  View source code, contribute, or request new icons
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
          </a>

          <a
            href="https://www.npmjs.com/package/lucide-react"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">NPM Package</p>
                <p className="text-sm text-muted-foreground">
                  Installation instructions and version information
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
          </a>
        </CardContent>
      </Card>
    </div>
  );
}