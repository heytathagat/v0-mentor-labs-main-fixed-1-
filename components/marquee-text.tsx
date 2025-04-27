"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

interface MarqueeTextProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export function MarqueeText({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const isInView = useInView(containerRef)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const calculateWidths = () => {
      if (containerRef.current) {
        const container = containerRef.current
        const firstChild = container.firstElementChild as HTMLElement

        if (firstChild) {
          setContentWidth(firstChild.offsetWidth)
          setContainerWidth(container.offsetWidth)

          // Calculate duration based on content width and speed
          // The larger the content, the longer the duration
          const calculatedDuration = (firstChild.offsetWidth / speed) * 5
          setDuration(calculatedDuration)
        }
      }
    }

    calculateWidths()
    window.addEventListener("resize", calculateWidths)

    return () => {
      window.removeEventListener("resize", calculateWidths)
    }
  }, [speed, children])

  const distance = contentWidth + 50 // Add some buffer

  const marqueeVariants = {
    animate: {
      x: direction === "left" ? -distance : distance,
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          duration: duration,
          ease: "linear",
        },
      },
    },
    paused: {
      x: direction === "left" ? -distance : distance,
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop" as const,
          duration: duration,
          ease: "linear",
          paused: true,
        },
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap font-montserrat ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        className="inline-block font-montserrat"
        variants={marqueeVariants}
        animate={isPaused || !isInView ? "paused" : "animate"}
        style={{ x: direction === "left" ? 0 : -distance }}
      >
        {children}
      </motion.div>
      <motion.div
        className="inline-block font-montserrat"
        variants={marqueeVariants}
        animate={isPaused || !isInView ? "paused" : "animate"}
        style={{ x: direction === "left" ? 0 : -distance }}
      >
        {children}
      </motion.div>
    </div>
  )
}
