"use client"

import type { ElementType } from "react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  icon: ElementType
  className?: string
  fill?: string
  animation?: "pulse" | "spin" | "bounce" | "shake"
}

export function AnimatedIcon({ icon: Icon, className, fill, animation = "pulse" }: AnimatedIconProps) {
  const animationClass = {
    pulse: "animate-pulse",
    spin: "animate-spin",
    bounce: "animate-bounce",
    shake: "animate-shake",
  }

  return <Icon className={cn(className, animationClass[animation])} fill={fill} />
}

