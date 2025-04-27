"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ProgressBarProps {
  value: number
  className?: string
  height?: number
  animated?: boolean
}

export function ProgressBar({ value, className = "", height = 2, animated = true }: ProgressBarProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated && animated) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 1.5, ease: "easeOut" },
      })
      setHasAnimated(true)
    } else if (!animated) {
      controls.set({ width: `${value}%` })
    }
  }, [controls, inView, value, hasAnimated, animated])

  return (
    <div className={`w-full bg-gray-200 overflow-hidden ${className}`} style={{ height }} ref={ref}>
      <motion.div initial={{ width: animated ? "0%" : `${value}%` }} animate={controls} className="h-full bg-black" />
    </div>
  )
}
