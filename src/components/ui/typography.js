import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Create the variant-based styles using cva
const Typography = cva("", {
  variants: {
    color: {
      default: "dark",
      white: "white",
      primary: "primary",
      secondary: "secondary",
      success: "!text-green-600",
      warning: "!text-warning",
      error: "!text-error",
      muted: "!text-muted",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const TypographyElement = ({
  children,
  heading,
  className,
  color,
  variant = "p",
  ...props
}) => {
  const Tag = variant;

  return (
    <Tag className={cn(Typography({ color }), className)} {...props}>
      {children || heading}
    </Tag>
  );
};

// Individual component exports
export const HeadingH1 = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-h1 font-bold", !noMargin && "mb-sm", className)}
    color={color}
    {...props}
    variant="h1"
  />
);

export const HeadingH2 = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-h2 font-bold", !noMargin && "mb-sm", className)}
    color={color}
    {...props}
    variant="h2"
  />
);

export const HeadingH3 = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-h3 font-bold", !noMargin && "mb-sm", className)}
    color={color}
    {...props}
    variant="h3"
  />
);

export const HeadingH4 = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-h4 font-bold", !noMargin && "mb-sm", className)}
    color={color}
    {...props}
    variant="h4"
  />
);

export const HeadingH5 = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-h5 font-bold", !noMargin && "mb-sm", className)}
    color={color}
    {...props}
    variant="h5"
  />
);

export const HeadingH6 = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-h6 font-bold", !noMargin && "mb-sm", className)}
    color={color}
    {...props}
    variant="h6"
  />
);

export const ParagraphElement = ({ color, className, noMargin, ...props }) => (
  <TypographyElement
    className={cn("text-base font-normal", !noMargin && "mb-sm", className)}
    variant="p"
    color={color}
    {...props}
  />
);

export default Typography;
