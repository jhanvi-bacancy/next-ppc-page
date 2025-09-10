import * as React from "react";
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

// Create the variant-based styles using cva
const Typography = cva("", {
    variants: {
        variant: {
            default: "text-base",
        },
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
        variant: "default",
        color: "default",
    },
});

const TypographyElement = ({ children, heading, className, color, variant = "p", ...props }) => {
    const Tag = variant;

    return (
        <Tag className={cn(Typography({ variant, color }), className)} {...props}>
            {children || heading}
        </Tag>
    );
};

// Individual component exports
export const HeadingH1 = ({ color, ...props }) => (
    <TypographyElement className='text-h1 mb-5 font-bold' color={color} {...props} variant="h1" />
);

export const HeadingH2 = ({ color, ...props }) => (
    <TypographyElement className='text-h2 mb-5 font-bold' color={color} {...props} variant="h2" />
);

export const HeadingH3 = ({ color, ...props }) => (
    <TypographyElement className='text-h3 mb-sm font-bold' color={color} {...props} variant="h3" />
);

export const HeadingH4 = ({ color, ...props }) => (
    <TypographyElement className='text-h4 mb-sm font-bold' color={color} {...props} variant="h4" />
);

export const HeadingH5 = ({ color, ...props }) => (
    <TypographyElement className='text-h5 mb-sm font-bold' color={color} {...props} variant="h5" />
);

export const HeadingH6 = ({ color, ...props }) => (
    <TypographyElement className='text-h6 mb-sm font-bold' color={color} {...props} variant="h6" />
);

export const ParagraphElement = ({ color, ...props }) => (
    <TypographyElement {...props} variant="p" color={color} />
);

// TypographyComponents object for alternative usage
export const TypographyComponents = {
    HeadingH1,
    HeadingH2,
    HeadingH3,
    HeadingH4,
    HeadingH5,
    HeadingH6,
    ParagraphElement
};

export default Typography;