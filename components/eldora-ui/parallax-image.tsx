"use client"

import { useState, useRef, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface ParallaxImageProps extends Omit<ImageProps, "onMouseMove"> {
  strength?: number
}

export function ParallaxImage({ strength = 20, className, ...props }: ParallaxImageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      setPosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [strength])

  return (
    <div ref={ref} className="overflow-hidden relative">
      <div
        style={{
          transform: `translate(${position.x * -strength}px, ${position.y * -strength}px)`,
          transition: "transform 0.1s ease-out",
          width: `calc(100% + ${strength * 2}px)`,
          height: `calc(100% + ${strength * 2}px)`,
          margin: `-${strength}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          {...props}
          className={className}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            ...props.style,
          }}
        />
      </div>
    </div>
  )
}

