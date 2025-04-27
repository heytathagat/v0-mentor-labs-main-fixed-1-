// components/navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Mentors", href: "/mentors" },
    { name: "Startups", href: "/startups" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mentor Labs
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="h-6 w-px bg-gray-200 mx-4" />
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute w-full bg-white border-b"
        >
          <div className="container px-4 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
