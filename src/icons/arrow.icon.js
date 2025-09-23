import React from "react";
import { cn } from "@/lib/utils";

export const ArrowIcon = ({ className, direction = "right", size = "sm" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <svg
      className={cn(
        sizeClasses[size] || sizeClasses.md,
        direction === "left" && "transform rotate-180",
        className
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};
