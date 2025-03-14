"use client"

import { useState, type ReactNode } from "react"

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
}

export function FlipCard({ front, back }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative w-full h-[300px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">{front}</div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">{back}</div>
      </div>
    </div>
  )
}

