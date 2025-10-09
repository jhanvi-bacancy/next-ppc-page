import React from "react";
import { cn } from "../../lib/utils";

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  icon,
  error,
  ...props
}) {
  return (
    <div className="w-full">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            "w-full p-4 rounded-md border border-gray-300",
            "placeholder:text-gray-500 placeholder:text-sm text-sm",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "transition-all duration-200",
            icon && "pl-11 md:pl-10",
            error && "border-danger focus:ring-danger/20 focus:border-danger",
            className
          )}
          {...props}
        />
      </div>
      {/* Reserve space for error message to prevent layout shift */}
      <div className="h-1 mt-0.5">
        {error && <p className="text-sm text-danger leading-tight">{error}</p>}
      </div>
    </div>
  );
}
