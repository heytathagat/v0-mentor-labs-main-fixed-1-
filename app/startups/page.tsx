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

export default function StartupsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([])

  // Extract all unique industry tags
  const allIndustries = Array.from(new Set(startups.map((startup) => startup.industry))).sort()

  // Filter startups based on search query and selected industry
  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      searchQuery === "" ||
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesIndustry = selectedIndustry.length === 0 || selectedIndustry.includes(startup.industry)

    return matchesSearch && matchesIndustry
  })

  const toggleIndustry = (industry: string) => {
    setSelectedIndustry((prev) => (prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TextReveal text="Startups We Support" tag="span" />
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              From early-stage ventures to scaling businesses, we help startups across various industries achieve their
              goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search startups..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="w-full md:w-auto">
              <h3 className="text-sm font-medium mb-3">Filter by industry:</h3>
              <div className="flex flex-wrap gap-2">
                {allIndustries.map((industry) => (
                  <button
                    key={industry}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedIndustry.includes(industry) ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => toggleIndustry(industry)}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          {filteredStartups.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredStartups.map((startup, index) => (
                <motion.div
                  key={startup.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="md:w-1/3 aspect-square relative">
                    <Image src={startup.logo || "/placeholder.svg"} alt={startup.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{startup.name}</h3>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          selectedIndustry.includes(startup.industry) ? "bg-black text-white" : "bg-gray-100"
                        }`}
                      >
                        {startup.industry}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{startup.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {startup.achievements.map((achievement, i) => (
                        <span key={i} className="inline-flex items-center bg-gray-100 px-2 py-1 text-xs rounded-full">
                          {achievement}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="mt-2">
                      <Link href={`/startups/${startup.id}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No startups found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedIndustry([])
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              <AnimatedText text="Our Impact on Startups" />
            </h2>
            <p className="text-gray-600">
              We measure our success by the success of the startups we support. Here are some key metrics from our
              portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <p className="text-gray-600">{metric.label}</p>
                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: `${metric.percentage}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              <AnimatedText text="Ready to Join Our Startup Community?" />
            </h2>
            <p className="text-gray-300 mb-8">
              Ready to take your startup to the next level? Apply to join our program today.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Updated startup data
const startups = [
  {
    id: "tallkeys",
    name: "TallKeys",
    industry: "EdTech",
    description:
      "An innovative platform that helps students master keyboard typing skills with adaptive learning technology and gamified exercises.",
    achievements: ["5K+ Active Users", "Educational Innovation Award", "School Partnership Program"],
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "swarnai",
    name: "SwarnAI",
    industry: "Artificial Intelligence",
    description:
      "AI-powered solution for jewelry design and customization, helping artisans create unique pieces with advanced generative algorithms.",
    achievements: ["AI Innovation Grant", "Jewelry Industry Partnership", "Sustainable Design Award"],
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "needle",
    name: "Needle",
    industry: "Healthcare Technology",
    description:
      "Precision medicine platform that uses AI to match patients with clinical trials and personalized treatment options based on genetic profiles.",
    achievements: ["Healthcare Innovation Award", "Seed Funding Round", "Research Partnership"],
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "glyptika-studios",
    name: "Glyptika Studios",
    industry: "Creative Technology",
    description:
      "Digital art studio specializing in 3D modeling, animation, and interactive experiences for education and cultural heritage preservation.",
    achievements: ["Digital Art Exhibition", "Museum Partnership", "Educational Grant"],
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "overbites",
    name: "Overbites",
    industry: "Food Technology",
    description:
      "Sustainable food delivery platform focusing on reducing packaging waste and carbon footprint while supporting local restaurants and producers.",
    achievements: ["Sustainability Award", "Zero Waste Certification", "Community Impact Grant"],
    logo: "/placeholder.svg?height=200&width=200",
  },
]

const impactMetrics = [
  { label: "Average Revenue Growth", value: "215%", percentage: 85 },
  { label: "Funding Success Rate", value: "78%", percentage: 78 },
  { label: "Startup Survival Rate", value: "92%", percentage: 92 },
]
