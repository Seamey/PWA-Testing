"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TimelineProps {
  children: ReactNode
  visible?: boolean
}

interface TimelineItemProps {
  date: string
  title: string
  description: string
  icon?: ReactNode
  image?: string
}

export function Timeline({ children, visible = true }: TimelineProps) {
  return (
    <div className={cn("relative transition-opacity duration-1000", visible ? "opacity-100" : "opacity-0")}>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-200 dark:bg-rose-900/30 rounded-full" />
      <div className="space-y-12">{children}</div>
    </div>
  )
}

export function TimelineItem({ date, title, description, icon, image }: TimelineItemProps) {
  return (
    <div className="relative flex items-center justify-between">
      <div className="hidden md:block w-5/12">
        {image && (
          <div className="overflow-hidden rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <Image
              src={image || "/placeholder.svg"}
              width={500}
              height={300}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 border-4 border-white dark:border-gray-900 z-10">
        {icon || <span className="text-rose-600 dark:text-rose-400">●</span>}
      </div>

      <div className="md:w-5/12 w-full md:ml-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transform transition-all duration-500 hover:shadow-lg">
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-rose-600 dark:text-rose-400">{date}</span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {image && (
          <div className="mt-4 md:hidden overflow-hidden rounded-lg">
            <Image
              src={image || "/placeholder.svg"}
              width={500}
              height={300}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}

