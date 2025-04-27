"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface SectionLoaderProps {
  duration?: number
  onComplete?: () => void
  className?: string
}

export function SectionLoader({ duration = 1000, onComplete, className = "" }: SectionLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTime = Date.now()

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(elapsed / duration, 1)
      setProgress(newProgress)

      if (newProgress < 1) {
        requestAnimationFrame(updateProgress)
      } else {
        setIsComplete(true)
        onComplete?.()
      }
    }

    requestAnimationFrame(updateProgress)

    return () => {
      // Cleanup if needed
    }
  }, [duration, onComplete])

  return (
    <div className={`w-full ${className}`}>
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      <div className="text-right text-xs text-gray-500 mt-1">{Math.round(progress * 100)}%</div>
    </div>
  )
}
