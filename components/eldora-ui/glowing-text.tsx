"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GlowingTextProps {
  text: string
  className?: string
  glowColor?: string
}

export function GlowingText({ text, className, glowColor = "rgba(244, 63, 94, 0.5)" }: GlowingTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <h1
      className={cn("transition-all duration-1000", isVisible ? "opacity-100" : "opacity-0", className)}
      style={{
        textShadow: isVisible ? `0 0 15px ${glowColor}, 0 0 30px ${glowColor}` : "none",
      }}
    >
      {text}
    </h1>
  )
}

