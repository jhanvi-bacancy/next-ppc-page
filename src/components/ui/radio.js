import React from "react";
import { cn } from "../../lib/utils";

export function Radio({
  name,
  value,
  checked,
  onChange,
  label,
  className,
  variant = "default",
  size = "md",
  disabled = false,
}) {
  const variants = {
    default: "border-gray-300 primary",
    primary: "border-primary primary bg-white",
    secondary: "border-secondary secondary",
  };

  const sizes = {
    sm: "w-4 h-4 sm:w-3.5 sm:h-3.5",
    md: "w-5 h-5 sm:w-4 sm:h-4",
    lg: "w-6 h-6 sm:w-5 sm:h-5",
  };

  return (
    <label
      className={cn(
        "inline-flex items-center cursor-pointer min-h-[2.5rem] sm:min-h-[2rem] px-1",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            "form-radio rounded-full transition-all duration-200",
            "border-[1.5px] focus:outline-none focus:ring-2 focus:ring-primary/20",
            "appearance-none",
            variants[variant],
            sizes[size],
            checked && "border-primary",
            disabled && "cursor-not-allowed"
          )}
        />
        {checked && (
          <div
            className={cn(
              "absolute pointer-events-none",
              "rounded-full bg-primary transition-transform duration-200",
              {
                "w-2 h-2 sm:w-1.5 sm:h-1.5": size === "sm",
                "w-2.5 h-2.5 sm:w-2 sm:h-2": size === "md",
                "w-3 h-3 sm:w-2.5 sm:h-2.5": size === "lg",
              }
            )}
            style={{
              transform: `scale(${checked ? 1 : 0})`,
            }}
          />
        )}
      </div>
      {label && (
        <span
          className={cn(
            "ml-2 text-sm secondary",
            disabled && "text-gray-400"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}
