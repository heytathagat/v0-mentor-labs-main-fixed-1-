"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { JSX } from "react"

interface TextRevealProps {
  text: string
  className?: string
  tag?: keyof JSX.IntrinsicElements
  delay?: number
  staggerChildren?: number
  once?: boolean
}

export function TextReveal({
  text,
  className = "",
  tag: Tag = "div",
  delay = 0,
  staggerChildren = 0.1,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <Tag ref={ref} className={`${className} font-montserrat`}>
      <motion.div
        className="overflow-hidden"
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span key={index} className="inline-block mr-1 font-montserrat" variants={child}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </Tag>
  )
}
