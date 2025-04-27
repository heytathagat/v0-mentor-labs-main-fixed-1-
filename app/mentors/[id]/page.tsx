"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Linkedin, Mail, MapPin, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { mentors } from "@/data/mentors"
import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"

export default function MentorPage() {
  const params = useParams<{ id: string }>()
  const [mentor, setMentor] = useState<any>(null)

  useEffect(() => {
    const mentorId = params?.id
    if (!mentorId) return
    const mentorData = mentors.find(m => m.id === mentorId)
    if (mentorData) {
      setMentor(mentorData)
    }
  }, [params])

  if (!mentor) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Mentor not found</h1>
          <Button asChild>
            <Link href="/mentors">Back to Mentors</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-montserrat">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-12 lg:pt-32">
        <div className="container px-4 md:px-6">
          <Button 
            asChild 
            variant="outline" 
            className="mb-8 border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <Link href="/mentors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Mentors
            </Link>
          </Button>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col gap-6 lg:w-72">
              <motion.div
                className="w-48 h-48 relative flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>

              <Card className="p-4 space-y-4 bg-white/10 backdrop-blur border-white/20">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${mentor.social.email}`} className="text-sm hover:text-white">
                      {mentor.social.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-2 text-white/80">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm leading-tight">{mentor.location}</span>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-white text-black hover:bg-white/90"
                    asChild
                  >
                    <Link href={`/schedule/${mentor.id}`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Meet
                    </Link>
                  </Button>

                  {mentor.social.linkedin && (
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <Link href={mentor.social.linkedin} target="_blank">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 lg:max-w-3xl"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                <TextReveal text={mentor.name} tag="span" />
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 text-sm border border-white/20 rounded-full bg-white/10">
                  {mentor.role}
                </span>
              </div>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">{mentor.bio}</p>
              <div className="flex flex-wrap gap-3">
                {mentor.expertise.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm border border-white/20 rounded-full bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Achievements Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Experience & Impact</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Professional Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{mentor.experience}</p>
              <p className="text-gray-600 dark:text-gray-300">{mentor.availability}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Key Achievements</h3>
              <ul className="space-y-3">
                {mentor.achievements.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="mr-2 text-primary">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Areas of Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentor.expertise.map((expertise: string, index: number) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{expertise}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Expert guidance and mentorship in {expertise.toLowerCase()} and related areas.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentor Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in becoming a mentor?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our network and share your expertise with innovative startups.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">
                Become a Mentor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

      