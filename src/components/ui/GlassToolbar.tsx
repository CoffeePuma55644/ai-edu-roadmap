
import * as React from "react";
import { cn } from "@/lib/utils";
import { GlassPanel, GlassPanelProps } from "./GlassPanel";

// GlassToolbar inherits all props from GlassPanel
export interface GlassToolbarProps extends GlassPanelProps {}

const GlassToolbar = React.forwardRef<HTMLDivElement, GlassToolbarProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <GlassPanel
        ref={ref}
        // Apply toolbar-specific styles
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between py-2 px-4 md:px-6",
          // Remove default border-radius for a full-width bar
          "rounded-none", 
          className
        )}
        style={{
          // A slightly sharper blur can be better for legibility on a toolbar
          "--glass-blur": "18px",
          // Remove bottom border for a cleaner look when attached to the top
          borderBottom: "none",
          ...style,
        }}
        {...props}
      />
    );
  }
);
GlassToolbar.displayName = "GlassToolbar";

export { GlassToolbar };
