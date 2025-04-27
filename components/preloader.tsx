"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypingEffect } from "./typing-effect"

interface PreloaderProps {
  minimumLoadingTime?: number
}

export function Preloader({ minimumLoadingTime = 2000 }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const startTime = Date.now()
    let animationFrame: number
    let timeoutId: NodeJS.Timeout

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime
      const calculatedProgress = Math.min((elapsedTime / minimumLoadingTime) * 100, 100)

      setProgress(Math.floor(calculatedProgress))

      if (calculatedProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress)
      } else {
        setIsComplete(true)
        timeoutId = setTimeout(() => {
          setIsExiting(true)
        }, 500)
      }
    }

    animationFrame = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(timeoutId)
    }
  }, [minimumLoadingTime])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full max-w-md px-4">
            <div className="mb-8 text-center">
              <TypingEffect
                text="MENTOR LABS"
                className="text-3xl md:text-4xl font-bold tracking-widest"
                speed={100}
                cursor={false}
              />
            </div>

            <div className="relative h-[2px] w-full bg-gray-200 overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-black"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">LOADING</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
