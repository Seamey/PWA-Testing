"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  visible?: boolean
}

export function SlideUp({ children, delay = 0, duration = 0.5, className, visible = true }: SlideUpProps) {
  return (
    <div
      className={cn("transition-all", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20", className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

