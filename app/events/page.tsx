"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TypingEffect } from "@/components/typing-effect"
import { PageProgress } from "@/components/page-progress"
import { SectionLoader } from "@/components/section-loader"

export default function EventsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Filter events based on search query and selected category
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Get all unique categories
  const categories = ["all", ...Array.from(new Set(events.map((event) => event.category)))]

  return (
    <div className="min-h-screen bg-white">
      <PageProgress />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TypingEffect
                text="Join Our Events"
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                tag="h1"
                speed={70}
              />
            </motion.div>
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Connect with mentors, startups, and industry leaders at our workshops, webinars, and networking events.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <div className="max-w-md mx-auto my-12">
              <SectionLoader />
            </div>
          ) : (
            <>
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-12">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search events..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="w-full md:w-auto">
                  <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
                      {categories.map((category) => (
                        <TabsTrigger key={category} value={category} className="capitalize">
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              {/* Events Tabs */}
              <Tabs defaultValue="upcoming" className="mt-8">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming">
                  {filteredEvents.filter((event) => new Date(event.date) >= new Date()).length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredEvents
                        .filter((event) => new Date(event.date) >= new Date())
                        .map((event, index) => (
                          <EventCard key={event.id} event={event} index={index} />
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold mb-2">No upcoming events found</h3>
                      <p className="text-gray-600 mb-6">Check back soon for new events or adjust your search</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past">
                  {filteredEvents.filter((event) => new Date(event.date) < new Date()).length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredEvents
                        .filter((event) => new Date(event.date) < new Date())
                        .map((event, index) => (
                          <EventCard key={event.id} event={event} index={index} isPast />
                        ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold mb-2">No past events found</h3>
                      <p className="text-gray-600 mb-6">Check the upcoming events tab for new events</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              <TypingEffect text="Want to Host an Event?" speed={50} />
            </h2>
            <p className="text-gray-300 mb-8">
              If you're interested in hosting an event with Mentor Labs, we'd love to collaborate with you.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  image: string
  isFeatured?: boolean
}

interface EventCardProps {
  event: Event
  index: number
  isPast?: boolean
}

function EventCard({ event, index, isPast = false }: EventCardProps) {
  return (
    <motion.div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        isPast ? "opacity-80" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-black text-white px-3 py-1 text-xs rounded-full capitalize">
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>{isPast ? "View Details" : "Register Now"}</Link>
        </Button>
      </div>

      {event.isFeatured && !isPast && (
        <div className="absolute top-0 left-0 bg-black text-white px-4 py-1 text-xs transform -rotate-45 translate-x-[-30%] translate-y-[50%]">
          Featured
        </div>
      )}
    </motion.div>
  )
}

// Sample data
const events: Event[] = [
  {
    id: "startup-funding-workshop",
    title: "Startup Funding Workshop",
    description: "Learn how to secure funding for your startup from experienced investors and entrepreneurs.",
    date: "2025-06-15",
    time: "10:00 AM - 2:00 PM",
    location: "San Francisco, CA",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600",
    isFeatured: true,
  },
  {
    id: "tech-networking-night",
    title: "Tech Networking Night",
    description: "Connect with tech professionals, founders, and investors in a casual networking environment.",
    date: "2025-05-20",
    time: "6:00 PM - 9:00 PM",
    location: "New York, NY",
    category: "networking",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "product-development-webinar",
    title: "Product Development Webinar",
    description: "Join our expert panel to discuss best practices in product development and management.",
    date: "2025-06-05",
    time: "1:00 PM - 2:30 PM",
    location: "Virtual",
    category: "webinar",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "ai-in-healthcare-conference",
    title: "AI in Healthcare Conference",
    description: "Explore the latest applications of artificial intelligence in healthcare and medical technology.",
    date: "2025-07-10",
    time: "9:00 AM - 5:00 PM",
    location: "Boston, MA",
    category: "conference",
    image: "/placeholder.svg?height=400&width=600",
    isFeatured: true,
  },
  {
    id: "founder-fireside-chat",
    title: "Founder Fireside Chat",
    description: "An intimate conversation with successful founders about their entrepreneurial journey.",
    date: "2025-05-25",
    time: "7:00 PM - 8:30 PM",
    location: "Austin, TX",
    category: "talk",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "marketing-for-startups",
    title: "Marketing for Startups",
    description: "Practical marketing strategies for early-stage startups with limited budgets.",
    date: "2024-12-10",
    time: "11:00 AM - 1:00 PM",
    location: "Virtual",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "venture-capital-panel",
    title: "Venture Capital Panel Discussion",
    description: "Leading VCs discuss current investment trends and what they look for in startups.",
    date: "2024-11-15",
    time: "3:00 PM - 5:00 PM",
    location: "San Francisco, CA",
    category: "panel",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "startup-pitch-competition",
    title: "Startup Pitch Competition",
    description: "Watch innovative startups pitch their ideas to a panel of judges and investors.",
    date: "2024-10-20",
    time: "1:00 PM - 6:00 PM",
    location: "Chicago, IL",
    category: "competition",
    image: "/placeholder.svg?height=400&width=600",
  },
]
