import React from "react";
import { cn } from "../../../lib/utils";

export function TextArea({
  placeholder,
  value,
  onChange,
  className,
  icon,
  error,
  rows = 4,
  ...props
}) {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-3 top-4 text-gray-500">{icon}</div>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full px-4 py-3 rounded-md border border-gray-300",
          "placeholder:text-gray-500 placeholder:text-sm text-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "transition-all duration-200 resize-none",
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
