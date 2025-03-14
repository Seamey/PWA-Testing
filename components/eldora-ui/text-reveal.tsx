"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  visible?: boolean
}

export function TextReveal({ text, className, delay = 0, visible = true }: TextRevealProps) {
  const [displayedText, setDisplayedText] = useState("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!visible) {
      setDisplayedText("")
      return
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      let currentIndex = 0
      setDisplayedText("")

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex])
          currentIndex++
        } else {
          clearInterval(intervalId)
        }
      }, 30) // Speed of typing

      return () => clearInterval(intervalId)
    }, delay * 1000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, delay, visible])

  return (
    <div className={cn(className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}

