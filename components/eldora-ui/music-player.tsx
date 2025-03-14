"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface MusicPlayerProps {
  songTitle: string
  artistName: string
  coverImage: string
  audioSrc?: string
}

export function MusicPlayer({
  songTitle,
  artistName,
  coverImage,
  audioSrc = "/love.mp3",
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isMinimized, setIsMinimized] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(audioSrc)
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioSrc])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300 ${
        isMinimized ? "w-12 h-12" : "w-64 h-16"
      }`}
    >
      <div className="flex items-center h-full p-2">
        <div className="h-8 w-8 rounded-full overflow-hidden cursor-pointer flex-shrink-0" onClick={toggleMinimize}>
          <Image
            src={coverImage || "/placeholder.svg"}
            width={32}
            height={32}
            alt={songTitle}
            className={`w-full h-full object-cover ${isPlaying ? "animate-spin-slow" : ""}`}
          />
        </div>

        {!isMinimized && (
          <>
            <div className="ml-3 flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">{songTitle}</p>
              <p className="text-xs text-muted-foreground truncate">{artistName}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button className="text-muted-foreground hover:text-foreground" onClick={toggleMute}>
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}