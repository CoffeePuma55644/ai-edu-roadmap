
import * as React from "react";
import { cn } from "@/lib/utils";

// Define the props for the GlassPanel component based on the technical specification
export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The visual variant of the glass effect */
  variant?: "lite" | "lens" | "pro";
  /** The blur intensity in pixels */
  blur?: number;
  /** The saturation level */
  saturation?: number;
  /** The contrast level */
  contrast?: number;
  /** The opacity of the glass surface */
  opacity?: number;
  /** A subtle color tint to apply to the background */
  tintColor?: string;
  /** The strength of the refraction effect for the 'lens' variant */
  refractionScale?: number;
  /** The intensity of the dynamic highlight sheen */
  highlightAmount?: number;
  /** The border strength/opacity */
  borderStrength?: number;
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      className,
      children,
      variant = "lite",
      blur = 22,
      saturation = 1.32,
      contrast = 1.1,
      opacity, // Will be handled by CSS variables for light/dark mode
      tintColor,
      refractionScale = 18,
      highlightAmount = 1,
      borderStrength,
      style,
      ...props
    },
    ref
  ) => {
    // The 'pro' variant is not implemented yet and will fall back to 'lens'
    const activeVariant = variant === "pro" ? "lens" : variant;

    // Prepare inline styles to pass CSS custom properties
    const glassStyles: React.CSSProperties = {
      ...style,
      "--glass-blur": `${blur}px`,
      "--glass-saturation": `${saturation}`,
      "--glass-contrast": `${contrast}`,
      "--glass-highlight-amount": `${highlightAmount}`,
    };

    if (opacity !== undefined) {
      glassStyles["--glass-opacity-light"] = `${opacity}`;
      glassStyles["--glass-opacity-dark"] = `${opacity}`;
    }
    if (borderStrength !== undefined) {
      glassStyles["--glass-border-color-light"] = `rgba(255, 255, 255, ${0.22 * borderStrength})`;
      glassStyles["--glass-border-color-dark"] = `rgba(255, 255, 255, ${0.18 * borderStrength})`;
    }
    if (tintColor) {
      // Note: tintColor would require a more complex implementation to blend correctly.
      // For now, we can apply it to backgroundColor, but it might override the default glass colors.
      // A better approach would be a pseudo-element with mix-blend-mode.
      // This is a simplified implementation.
      glassStyles.backgroundColor = tintColor;
    }

    // The SVG filter for the 'lens' variant needs to be in the DOM.
    // We can include it once in the main App or Layout file.
    // Here we just apply the class.
    const variantClass = activeVariant === "lens" ? "glass-lens" : "";

    return (
      <div
        className={cn("glass", variantClass, className)}
        style={glassStyles}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
