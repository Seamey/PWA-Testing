"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
  src: string
  alt: string
}

interface PhotoCarouselProps {
  photos: Photo[]
  visible?: boolean
}

export function PhotoCarousel({ photos, visible = true }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(() => {
      if (visible && !isTransitioning) {
        goToNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning, visible])

  const goToPrevious = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))

    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))

    setTimeout(() => setIsTransitioning(false), 500)
  }

  if (!visible || photos.length === 0) return null

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden rounded-xl shadow-xl">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="text-lg font-medium">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
        onClick={goToPrevious}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
        onClick={goToNext}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/40"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

