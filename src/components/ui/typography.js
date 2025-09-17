import * as React from "react";
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

// Create the variant-based styles using cva
const Typography = cva("", {
    variants: {
        color: {
            default: "text-dark",
            white: "text-white",
            primary: "text-primary",
            secondary: "text-secondary",
            success: "text-green-600",
            warning: "text-yellow-600",
            error: "text-red-600",
            muted: "text-gray-500",
        },
    },
    defaultVariants: {
        color: "default",
    },
});

const TypographyElement = ({ children, heading, className, color, variant = "p", ...props }) => {
    const Tag = variant;

    return (
        <Tag className={cn(Typography({ color }), className)} {...props}>
            {children || heading}
        </Tag>
    );
};

// Individual component exports
export const HeadingH1 = ({ color, className, ...props }) => (
    <TypographyElement className={cn('text-h1 mb-4 font-bold', className)} color={color} {...props} variant="h1" />
);

export const HeadingH2 = ({ color, className, ...props }) => (
    <TypographyElement className={cn('text-h2 mb-5 font-bold', className)} color={color} {...props} variant="h2" />
);

export const HeadingH3 = ({ color, className, ...props }) => (
    <TypographyElement className={cn('text-h3 mb-sm font-bold', className)} color={color} {...props} variant="h3" />
);

export const HeadingH4 = ({ color, className, ...props }) => (
    <TypographyElement className={cn('text-h4 mb-sm font-bold', className)} color={color} {...props} variant="h4" />
);

export const HeadingH5 = ({ color, className, ...props }) => (
    <TypographyElement className={cn('text-h5 mb-sm font-bold', className)} color={color} {...props} variant="h5" />
);

export const HeadingH6 = ({ color, className, ...props }) => (
    <TypographyElement className={cn('text-h6 mb-sm font-bold', className)} color={color} {...props} variant="h6" />
);

export const ParagraphElement = ({ color, ...props }) => (
    <TypographyElement {...props} variant="p" color={color} />
);



export default Typography;