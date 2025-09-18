import React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        filled: "bg-primary text-white hover:bg-primary-hover",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
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
        lg: "text-lg px-6 py-3 rounded-lg",
        xl: "text-xl px-8 py-4 rounded-lg",
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
        md: "gap-2",
        lg: "gap-3",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      fullWidth: false,
      uppercase: false,
      iconSpacing: "md",
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
      children,
      variant,
      size,
      fullWidth,
      uppercase,
      href,
      disabled,
      loading,
      startIcon,
      endIcon,
      iconSpacing,
      iconPosition,
      ...props
    },
    ref
  ) => {
    const Comp = href ? Link : "button";
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
