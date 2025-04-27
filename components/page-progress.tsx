"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

interface PageProgressProps {
  color?: string
  height?: number
  position?: "top" | "bottom"
}

export function PageProgress({ color = "#000", height = 3, position = "top" }: PageProgressProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Show progress bar after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed left-0 right-0 z-50"
      style={{
        top: position === "top" ? 0 : "auto",
        bottom: position === "bottom" ? 0 : "auto",
        height,
        transformOrigin: "0%",
        scaleX,
        backgroundColor: color,
      }}
    />
  )
}
