import React from "react";
import { cn } from "../../../lib/utils";

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
    <div className="relative w-full">
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
          "w-full px-4 py-3 rounded-md border border-gray-300",
          "placeholder:text-gray-500 placeholder:text-sm text-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "transition-all duration-200",
          icon && "pl-11 md:pl-10",
          error && "border-danger focus:ring-danger/20 focus:border-danger",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  );
}
