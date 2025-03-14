"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  visible?: boolean
}

export function FadeIn({ children, delay = 0, duration = 0.5, className, visible = true }: FadeInProps) {
  return (
    <div
      className={cn("transition-all", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10", className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

