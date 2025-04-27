"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { JSX } from "react"

interface TypingEffectProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  cursor?: boolean
  tag?: keyof JSX.IntrinsicElements
  repeat?: boolean
  onComplete?: () => void
}

export function TypingEffect({
  text,
  className = "",
  speed = 50,
  delay = 0,
  cursor = true,
  tag: Tag = "span",
  repeat = false,
  onComplete,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Reset if text changes
    setDisplayText("")
    setIsComplete(false)

    // Initial delay
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true)

      let currentIndex = 0
      intervalRef.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setIsTyping(false)
          setIsComplete(true)
          onComplete?.()

          if (repeat) {
            timeoutRef.current = setTimeout(() => {
              setDisplayText("")
              setIsComplete(false)
              setIsTyping(true)
              currentIndex = 0

              intervalRef.current = setInterval(() => {
                if (currentIndex < text.length) {
                  setDisplayText(text.substring(0, currentIndex + 1))
                  currentIndex++
                } else {
                  if (intervalRef.current) clearInterval(intervalRef.current)
                  setIsTyping(false)
                  setIsComplete(true)
                  onComplete?.()
                }
              }, speed)
            }, 2000) // Wait 2 seconds before repeating
          }
        }
      }, speed)

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [text, speed, delay, repeat, onComplete])

  return (
    <Tag className={`${className} inline-flex items-center font-montserrat`}>
      <span>{displayText}</span>
      {cursor && (isTyping || !isComplete) && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle"
        />
      )}
    </Tag>
  )
}
