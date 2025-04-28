"use client"

import { useParallax } from "@/hooks/use-parallax"
import type { ReactNode } from "react"

interface ParallaxShapeProps {
  children: ReactNode
  speed: number
  className?: string
}

export function ParallaxShape({ children, speed, className = "" }: ParallaxShapeProps) {
  const scrollY = useParallax()

  // Calculate transform based on scroll position and speed factor
  const transform = `translateY(${scrollY * speed}px)`

  return (
    <div
      className={className}
      style={{
        transform,
        transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
