import React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "px-4 py-2 hover:bg-primary uppercase text-center inline-flex items-center justify-center transition-all ease-in delay-75",
    {
        variants: {
            variant: {
                primary: "bg-primary white hover:bg-primary-hover",
                outline: "border border-primary text-primary hover:bg-primary hover:white",
                dark: "bg-black white",
                "outline-dark":
                    "border border-light text-black hover:bg-primary hover:white hover:border-primary",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

const ButtonComponent = React.forwardRef(
    (
        { className, children, variant, ...props },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={buttonVariants({ variant, className })}
                {...props}
            >
                {children}
            </button>
        );
    }
);

ButtonComponent.displayName = "ButtonComponent";

export { ButtonComponent, buttonVariants };