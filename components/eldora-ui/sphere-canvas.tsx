"use client"

import { useEffect, useRef } from "react"

export function SphereCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Sphere parameters
    const points = []
    const numPoints = 800
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Create points on a sphere
    for (let i = 0; i < numPoints; i++) {
      // Fibonacci sphere algorithm for even distribution
      const phi = Math.acos(-1 + (2 * i) / numPoints)
      const theta = Math.sqrt(numPoints * Math.PI) * phi

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      points.push({ x, y, z, initialZ: z })
    }

    // Animation
    let animationFrame: number
    let rotation = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      rotation += 0.002

      // Update and draw points
      for (const point of points) {
        // Rotate around Y axis
        const cosR = Math.cos(rotation)
        const sinR = Math.sin(rotation)

        const rotatedX = point.x * cosR - point.z * sinR
        const rotatedZ = point.x * sinR + point.z * cosR

        // Project 3D to 2D
        const scale = 400 / (400 + rotatedZ)
        const projectedX = centerX + rotatedX * scale
        const projectedY = centerY + point.y * scale

        // Size and opacity based on z position
        const size = Math.max(0.5, 2 * scale)
        const opacity = Math.max(0.1, (rotatedZ + radius) / (radius * 2))

        // Draw point
        ctx.beginPath()
        ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

