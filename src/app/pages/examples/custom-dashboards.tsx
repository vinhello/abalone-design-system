import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Label } from "../../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { EmptyState } from "../../components/ui/empty-state";
import {
  LayoutDashboard,
  Plus,
  GripVertical,
  Trash2,
  Save,
  Eye,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  Users,
  Server,
  AlertCircle,
} from "lucide-react";

interface Widget {
  id: string;
  type: string;
  title: string;
  size: "small" | "medium" | "large";
  position: number;
}

interface WidgetTemplate {
  type: string;
  title: string;
  icon: any;
  description: string;
  defaultSize: "small" | "medium" | "large";
}

const widgetTemplates: WidgetTemplate[] = [
  {
    type: "stat-card",
    title: "Stat Card",
    icon: Activity,
    description: "Display a single metric with trend",
    defaultSize: "small",
  },
  {
    type: "line-chart",
    title: "Line Chart",
    icon: Activity,
    description: "Time series data visualization",
    defaultSize: "medium",
  },
  {
    type: "bar-chart",
    title: "Bar Chart",
    icon: BarChart3,
    description: "Comparative data visualization",
    defaultSize: "medium",
  },
  {
    type: "pie-chart",
    title: "Pie Chart",
    icon: PieChart,
    description: "Distribution visualization",
    defaultSize: "small",
  },
  {
    type: "user-list",
    title: "User List",
    icon: Users,
    description: "Recent or active users",
    defaultSize: "medium",
  },
  {
    type: "server-status",
    title: "Server Status",
    icon: Server,
    description: "Server health overview",
    defaultSize: "medium",
  },
  {
    type: "alerts",
    title: "Active Alerts",
    icon: AlertCircle,
    description: "System alerts and warnings",
    defaultSize: "large",
  },
];

const ItemType = "WIDGET";

interface DraggableWidgetProps {
  widget: Widget;
  index: number;
  moveWidget: (dragIndex: number, hoverIndex: number) => void;
  removeWidget: (id: string) => void;
}

function DraggableWidget({
  widget,
  index,
  moveWidget,
  removeWidget,
}: DraggableWidgetProps) {
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveWidget(item.index, index);
        item.index = index;
      }
    },
  });

  const sizeClasses = {
    small: "col-span-1",
    medium: "col-span-2",
    large: "col-span-3",
  };

  const template = widgetTemplates.find((t) => t.type === widget.type);
  const Icon = template?.icon || LayoutDashboard;

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`${sizeClasses[widget.size]} ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <Card className="p-6 cursor-move hover:shadow-lg transition-shadow border-2 border-border hover:border-primary">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <GripVertical className="h-4 w-4 text-muted-foreground" />
            <Icon className="h-5 w-5 text-primary" />
            <h4>{widget.title}</h4>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {widget.size}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => removeWidget(widget.id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <div className="h-32 flex items-center justify-center bg-muted/30 rounded-md border-2 border-dashed border-border">
          <p className="text-sm text-muted-foreground">
            {template?.description || "Widget Preview"}
          </p>
        </div>
      </Card>
    </div>
  );
}

export function CustomDashboardsExample() {
  const [dashboardName, setDashboardName] = useState("My Dashboard");
  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: "w1",
      type: "stat-card",
      title: "Total Users",
      size: "small",
      position: 0,
    },
    {
      id: "w2",
      type: "line-chart",
      title: "CPU Usage",
      size: "medium",
      position: 1,
    },
    {
      id: "w3",
      type: "server-status",
      title: "Server Status",
      size: "medium",
      position: 2,
    },
  ]);
  const [isPreview, setIsPreview] = useState(false);

  const moveWidget = (dragIndex: number, hoverIndex: number) => {
    const newWidgets = [...widgets];
    const draggedWidget = newWidgets[dragIndex];
    newWidgets.splice(dragIndex, 1);
    newWidgets.splice(hoverIndex, 0, draggedWidget);
    newWidgets.forEach((w, i) => (w.position = i));
    setWidgets(newWidgets);
  };

  const addWidget = (template: WidgetTemplate) => {
    const newWidget: Widget = {
      id: `w${Date.now()}`,
      type: template.type,
      title: template.title,
      size: template.defaultSize,
      position: widgets.length,
    };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter((w) => w.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Custom Dashboard Builder</h1>
            <p className="text-sm text-muted-foreground">
              Create personalized dashboards with drag-and-drop widgets
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setIsPreview(!isPreview)}
            >
              <Eye className="h-4 w-4" />
              {isPreview ? "Edit Mode" : "Preview"}
            </Button>
            <Button>
              <Save className="h-4 w-4" />
              Save Dashboard
            </Button>
          </div>
        </div>

        {/* Dashboard Settings */}
        {!isPreview && (
          <Card className="p-6">
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <Label htmlFor="dashboard-name">Dashboard Name</Label>
                <Input
                  id="dashboard-name"
                  value={dashboardName}
                  onChange={(e) => setDashboardName(e.target.value)}
                  placeholder="Enter dashboard name"
                  className="mt-2"
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4" />
                    Add Widget
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Add Widget</DialogTitle>
                    <DialogDescription>
                      Choose a widget type to add to your dashboard
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    {widgetTemplates.map((template) => {
                      const Icon = template.icon;
                      return (
                        <Card
                          key={template.type}
                          className="p-4 cursor-pointer hover:bg-accent transition-colors"
                          onClick={() => {
                            addWidget(template);
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-md">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="mb-1">{template.title}</h4>
                              <p className="text-xs text-muted-foreground">
                                {template.description}
                              </p>
                              <Badge variant="outline" className="text-xs mt-2">
                                {template.defaultSize}
                              </Badge>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                  <DialogFooter>
                    <p className="text-sm text-muted-foreground">
                      Click on a widget type to add it to your dashboard
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        )}

        {/* Widget Grid */}
        {widgets.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {widgets.map((widget, index) => (
              <DraggableWidget
                key={widget.id}
                widget={widget}
                index={index}
                moveWidget={moveWidget}
                removeWidget={removeWidget}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={LayoutDashboard}
            title="No Widgets Added"
            description="Start building your dashboard by adding widgets"
            action={{
              label: "Add Your First Widget",
              onClick: () => {},
            }}
          />
        )}

        {/* Instructions */}
        {!isPreview && widgets.length > 0 && (
          <Card className="p-6 bg-info/5 border-info">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-info flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="mb-2">Dashboard Builder Tips</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Drag widgets to reorder them on your dashboard</li>
                  <li>
                    • Small widgets take 1 column, medium take 2, large take 3
                  </li>
                  <li>• Use the trash icon to remove widgets you don't need</li>
                  <li>
                    • Click "Preview" to see how your dashboard will look to users
                  </li>
                  <li>
                    • Remember to save your dashboard before navigating away
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        )}

        {/* Saved Dashboards */}
        <Card className="p-6">
          <div className="mb-4">
            <h3 className="mb-1">Saved Dashboards</h3>
            <p className="text-sm text-muted-foreground">
              Your previously created dashboards
            </p>
          </div>
          <div className="space-y-3">
            {[
              { name: "Security Overview", widgets: 8, lastModified: "2 hours ago" },
              { name: "Performance Metrics", widgets: 6, lastModified: "1 day ago" },
              {
                name: "User Analytics",
                widgets: 5,
                lastModified: "3 days ago",
              },
            ].map((dashboard, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{dashboard.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {dashboard.widgets} widgets • Last modified{" "}
                      {dashboard.lastModified}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DndProvider>
  );
}
