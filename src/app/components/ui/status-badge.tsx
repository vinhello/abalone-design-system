import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-md border",
  {
    variants: {
      status: {
        online: "bg-success/10 text-success border-success/30",
        offline: "bg-muted text-muted-foreground border-border",
        warning: "bg-warning/10 text-warning border-warning/30",
        error: "bg-destructive/10 text-destructive border-destructive/30",
        info: "bg-info/10 text-info border-info/30",
        active: "bg-primary/10 text-primary border-primary/30",
        pending: "bg-warning/10 text-warning border-warning/30",
        disabled: "bg-muted text-muted-foreground border-border",
      },
    },
    defaultVariants: {
      status: "info",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  showIndicator?: boolean;
}

export function StatusBadge({
  className,
  status,
  showIndicator = true,
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <div
      className={cn(statusBadgeVariants({ status, className }))}
      {...props}
    >
      {showIndicator && (
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            status === "online" && "bg-success animate-pulse",
            status === "offline" && "bg-muted-foreground",
            status === "warning" && "bg-warning animate-pulse",
            status === "error" && "bg-destructive animate-pulse",
            status === "info" && "bg-info",
            status === "active" && "bg-primary animate-pulse",
            status === "pending" && "bg-warning",
            status === "disabled" && "bg-muted-foreground"
          )}
        />
      )}
      {children}
    </div>
  );
}
