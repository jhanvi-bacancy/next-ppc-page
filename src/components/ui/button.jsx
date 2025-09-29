import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        filled: "bg-primary text-white hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "text-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
        text: "text-primary hover:text-primary-hover",
        dark: "bg-dark text-white hover:bg-black",
        "outline-dark":
          "border-2 border-dark text-dark hover:bg-dark hover:text-white",
        light: "bg-white text-dark hover:bg-gray-100",
        "outline-light":
          "border-2 border-white text-white hover:bg-white hover:text-dark",
      },
      size: {
        sm: "text-sm px-3 py-1.5 rounded",
        md: "text-base px-4 py-2 rounded-md",
        lg: "text-base px-6 py-3 rounded-lg",
        xl: "text-lg px-8 py-4 rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      uppercase: {
        true: "uppercase",
        false: "normal-case",
      },
      iconSpacing: {
        none: "",
        sm: "gap-1",
        default: "gap-2",
        lg: "gap-3",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
      fullWidth: false,
      uppercase: false,
      iconSpacing: "default",
      iconPosition: "left",
    },
  }
);

const IconWrapper = ({ icon, className }) => {
  if (!icon) return null;

  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: cn("w-5 h-5", icon.props.className, className),
    });
  }

  if (typeof icon === "string") {
    return <span className={cn("w-5 h-5", className)}>{icon}</span>;
  }

  return null;
};

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      fullWidth,
      uppercase,
      href,
      disabled,
      loading,
      startIcon,
      endIcon,
      iconSpacing,
      iconPosition,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : href ? Link : "button";
    const isDisabled = disabled || loading;

    const content = loading ? (
      <span className="flex items-center gap-2">
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading...
      </span>
    ) : (
      <>
        {startIcon && <IconWrapper icon={startIcon} />}
        {children}
        {endIcon && <IconWrapper icon={endIcon} />}
      </>
    );

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
            uppercase,
            iconSpacing: (startIcon || endIcon) && iconSpacing,
            iconPosition: endIcon && !startIcon ? "right" : "left",
            className,
          })
        )}
        disabled={isDisabled}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
