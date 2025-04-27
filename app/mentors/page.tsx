"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedText } from "@/components/animated-text"
import { TextReveal } from "@/components/text-reveal"
import { mentors } from "@/data/mentors"

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])

  // Extract all unique expertise tags
  const allExpertiseTags = Array.from(new Set(mentors.flatMap((mentor) => mentor.expertise))).sort()

  // Filter mentors based on search query and selected expertise
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      searchQuery === "" ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesExpertise =
      selectedExpertise.length === 0 || selectedExpertise.some((tag) => mentor.expertise.includes(tag))

    return matchesSearch && matchesExpertise
  })

  const toggleExpertise = (tag: string) => {
    setSelectedExpertise((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TextReveal text="Our Expert Mentors" tag="span" />
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Connect with industry leaders who have been there, done that, and are ready to guide you through your
              startup journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 border-b bg-white/80 backdrop-blur-md sticky top-16 z-50 shadow-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search mentors..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="w-full md:w-auto">
              <h3 className="text-sm font-medium mb-2">Filter by expertise:</h3>
              <div className="flex flex-wrap gap-2">
                {allExpertiseTags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedExpertise.includes(tag) 
                        ? "bg-black text-white" 
                        : "bg-gray-100 hover:bg-gray-200 hover:shadow-sm"
                    }`}
                    onClick={() => toggleExpertise(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          {filteredMentors.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{mentor.name}</h3>
                      <p className="text-white/80">{mentor.role}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{mentor.bio.split("\n")[0]}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            selectedExpertise.includes(tag) ? "bg-black text-white" : "bg-gray-100"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {mentor.expertise.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100">
                          +{mentor.expertise.length - 3}
                        </span>
                      )}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/mentors/${mentor.id}`}>
                        View Profile <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No mentors found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedExpertise([])
                }}
                className="bg-black text-white hover:bg-gray-900"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Share Your Expertise?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in becoming a mentor? Join our network and share your expertise.
          </p>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            <Link href="/contact">
              Become a Mentor <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}



      