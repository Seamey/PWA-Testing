"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  from?: string
  to?: string
  size?: "default" | "sm" | "lg"
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, from = "rose-400", to = "rose-600", size = "default", children, ...props }, ref) => {
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
    }

    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center rounded-md text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500",
          sizeClasses[size],
          `bg-gradient-to-r from-${from} to-${to} hover:from-${to} hover:to-${from}`,
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

GradientButton.displayName = "GradientButton"

