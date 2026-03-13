import * as React from "react";
import { Card } from "./card";
import { cn } from "../../lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
  icon?: LucideIcon;
  description?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  description,
  className,
}: StatCardProps) {
  const changeColor = {
    increase: "text-success",
    decrease: "text-destructive",
    neutral: "text-muted-foreground",
  }[changeType];

  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground tracking-wide font-medium">
            {title}
          </p>
          <p className="text-3xl font-semibold mt-2 font-mono">{value}</p>
          {change && (
            <p className={cn("text-sm mt-2 font-medium", changeColor)}>
              {change}
            </p>
          )}
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {Icon && (
          <div className="ml-4">
            <div className="p-3 bg-primary/10 rounded-md">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}