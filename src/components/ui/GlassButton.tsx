
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { GlassPanel, GlassPanelProps } from "./GlassPanel";

// Define variants for the button using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-white dark:text-black", // Text color will be on a vibrant background
        secondary: "text-primary",
        ghost: "text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// Extend HTMLButtonElement props with our variants
export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  // Allow overriding glass panel props
  glassProps?: Omit<GlassPanelProps, "children">;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      glassProps = {},
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    
    // Base styles for all buttons
    const baseButtonGlassProps: GlassPanelProps = {
      blur: 16,
      saturation: 1.2,
      className: cn("rounded-glass-button"), // We'll define this in tailwind.config.ts
      ...glassProps, // Allow user overrides
    };

    // Variant-specific styles
    if (variant === "primary") {
        baseButtonGlassProps.style = {
            ...baseButtonGlassProps.style,
            backgroundColor: 'rgba(128, 0, 128, 0.6)', // Example purple tint
            ["--glass-border-color-light"]: `rgba(255, 255, 255, 0.3)`,
            ["--glass-border-color-dark"]: `rgba(255, 255, 255, 0.25)`,
        }
    } else if (variant === "secondary") {
        // Secondary is a more standard glass
    } else if (variant === "ghost") {
        // Ghost has no background fill, only border on hover
        baseButtonGlassProps.style = {
            ...baseButtonGlassProps.style,
            backgroundColor: 'transparent',
            ["--glass-opacity-light"]: 0,
            ["--glass-opacity-dark"]: 0,
            boxShadow: 'none',
            backdropFilter: 'none',
            border: '1px solid transparent'
        }
    }

    return (
      <GlassPanel {...baseButtonGlassProps}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </GlassPanel>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, buttonVariants };
