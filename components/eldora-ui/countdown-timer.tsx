"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">{timeLeft.days}</div>
        <div className="text-xs text-muted-foreground">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">{timeLeft.hours}</div>
        <div className="text-xs text-muted-foreground">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">{timeLeft.minutes}</div>
        <div className="text-xs text-muted-foreground">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">{timeLeft.seconds}</div>
        <div className="text-xs text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}

