"use client"

import { useEffect, useState } from "react"

interface ConfettiProps {
  duration?: number
}

interface ConfettiPiece {
  id: number
  x: number
  y: number
  size: number
  color: string
  rotation: number
  rotationSpeed: number
  speedX: number
  speedY: number
}

export function Confetti({ duration = 3000 }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const [active, setActive] = useState(true)

  useEffect(() => {
    // Generate confetti pieces
    const colors = ["#f43f5e", "#ec4899", "#d946ef", "#a855f7", "#8b5cf6", "#6366f1"]
    const newPieces = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 100,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5,
      speedX: Math.random() * 5 - 2.5,
      speedY: Math.random() * 10 + 5,
    }))

    setPieces(newPieces)

    // Set timeout to remove confetti
    const timer = setTimeout(() => {
      setActive(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  useEffect(() => {
    if (!active || pieces.length === 0) return

    let animationFrame: number
    const animate = () => {
      setPieces((prevPieces) =>
        prevPieces
          .map((piece) => ({
            ...piece,
            x: piece.x + piece.speedX,
            y: piece.y + piece.speedY,
            rotation: piece.rotation + piece.rotationSpeed,
            speedY: piece.speedY + 0.1, // gravity
          }))
          .filter((piece) => piece.y < window.innerHeight + 100) // remove pieces that are off screen
      )

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [active, pieces])

  if (!active) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: Math.min(1, (window.innerHeight - piece.y) / window.innerHeight),
          }}
        />
      ))}
    </div>
  )
}