"use client"

import { useEffect, useState } from "react"

// Custom hook for parallax effect
export function useParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Function to update scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener with passive option for performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial call to set initial position
    handleScroll()

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollY
}
