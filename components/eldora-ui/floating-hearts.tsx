"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface FloatingHeartsProps {
  count?: number
}

interface HeartProps {
  id: number
  x: number
  size: number
  speed: number
  delay: number
  opacity: number
  rotation: number
}

export function FloatingHearts({ count = 15 }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<HeartProps[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random horizontal position
      size: Math.random() * 20 + 10, // random size between 10-30px
      speed: Math.random() * 20 + 10, // random speed
      delay: Math.random() * 5, // random delay for start
      opacity: Math.random() * 0.5 + 0.3, // random opacity
      rotation: Math.random() * 45 - 22.5, // random rotation -22.5 to 22.5 degrees
    }))

    setHearts(newHearts)
  }, [count])

  return (
    <div className="w-full h-full">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-500 animate-float"
          style={{
            left: `${heart.x}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.speed}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            transform: `rotate(${heart.rotation}deg)`,
          }}
        >
          <Heart fill="currentColor" />
        </div>
      ))}
    </div>
  )
}

