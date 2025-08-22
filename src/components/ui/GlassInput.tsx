
import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassPanel, GlassPanelProps } from "./GlassPanel";

export interface GlassInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Allow overriding glass panel props for the container
  glassProps?: Omit<GlassPanelProps, "children">;
  // Optional icon to display inside the input
  icon?: React.ReactNode;
}

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type, glassProps, icon, ...props }, ref) => {
    return (
      <GlassPanel
        {...glassProps}
        className={cn(
          "flex items-center rounded-glass-button h-10 w-full", // Use button radius for consistency
          glassProps?.className
        )}
        style={{
          // Lower the blur for readability inside an input
          "--glass-blur": "12px",
          ...glassProps?.style,
        }}
      >
        {icon && <span className="pl-3 pr-1 text-muted-foreground">{icon}</span>}
        <input
          type={type}
          // The actual input needs to be transparent and have no border/outline
          className={cn(
            "flex h-full w-full rounded-md border-none bg-transparent px-3 py-2 text-sm ring-offset-background",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-muted-foreground/80",
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </GlassPanel>
    );
  }
);
GlassInput.displayName = "GlassInput";

export { GlassInput };
