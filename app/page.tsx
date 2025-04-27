"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown, ArrowUpRight, Star, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/progress-bar"
import { CountUp } from "@/components/count-up"
import { TextReveal } from "@/components/text-reveal"
import { TypingEffect } from "@/components/typing-effect"
import { MarqueeText } from "@/components/marquee-text"
import { mentors } from "@/data/mentors"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate tabs
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % mentors.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <motion.div className="absolute inset-0" style={{ opacity, scale }}>
            <div className="absolute inset-0 bg-white" />
          </motion.div>
        </div>

        <motion.div className="container-custom relative z-10 text-center" style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium bg-black text-white">
              Connecting Visionaries
            </span>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="heading-xl mb-6">
              <TypingEffect
                text="Where Mentors Meet Startups"
                className="text-black"
                speed={70}
                cursor={true}
              />
            </h1>
            <motion.p
              className="mt-6 text-black/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Mentor Labs bridges the gap between experienced industry leaders and innovative startups, fostering growth
              and success through strategic mentorship.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button
              asChild
              className="border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-3"
            >
              <Link href="/mentors">Explore Mentors</Link>
            </Button>
            <Button
              asChild
              className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 px-6 py-3"
            >
              <Link href="/startups">View Startups</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="h-10 w-10 text-black animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Marquee Section */}
      <section className="py-8 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5" />
        <MarqueeText speed={30} className="py-4 text-xl md:text-2xl font-bold">
          <div className="flex items-center gap-12 px-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              Mentorship
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              Innovation
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              Growth
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              Success
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              Expertise
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-white rounded-full"></span>
              Connection
            </span>
          </div>
        </MarqueeText>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-5" />
        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border-2 border-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {isLoaded && <CountUp end={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-black text-white">
                  Our Mission
                </span>
              </div>
              <h2 className="heading-lg mb-6">
                <TextReveal text="Transforming Startups Through Expert Mentorship" />
              </h2>
              <p className="text-black/70 mb-6 leading-relaxed">
                At Mentor Labs, we believe that the right mentorship can transform startups from good to exceptional.
                Our platform connects innovative entrepreneurs with industry veterans who provide guidance, expertise,
                and networks.
              </p>
              <div className="space-y-4">
                {progressItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-black/70">{item.label}</span>
                      <span className="font-bold text-black">{item.value}%</span>
                    </div>
                    <ProgressBar value={item.value} />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 overflow-hidden border-4 border-black transform hover:-translate-y-1 transition-transform duration-300">
                <Image
                  src="/images/mentorship-session.jpg"
                  alt="Mentor meeting"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Expert-Led Growth</h3>
                  <p className="text-sm text-white/80">
                    Our mentors have helped startups increase revenue by an average of 3.5x
                  </p>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-black -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Mentors</h2>
            <p className="text-gray-600">
              Learn from industry leaders who are passionate about sharing their knowledge and experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors
              .filter(mentor => 
                ["prashant-singh-rana", "tathagat-kumar", "saif-nalband"].includes(mentor.id)
              )
              .map((mentor, index) => (
              <motion.div
                key={mentor.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={mentor.image}
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
                      <span key={i} className="inline-block bg-gray-100 px-3 py-1 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-gray-100">
                        +{mentor.expertise.length - 3}
                      </span>
                    )}
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors mt-auto"
                  >
                    <Link href={`/mentors/${mentor.id}`}>
                      View Profile <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Button
              asChild
              className="rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors hover:shadow-lg px-6 py-3"
            >
              <Link href="/mentors">
                View All Mentors <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full shadow-sm">
                Success Stories
              </span>
            </motion.div>
            <h2 className="heading-lg mb-6">
              <TextReveal text="What Our Community Says" />
            </h2>
            <p className="text-gray-600">
              Hear from founders and mentors who have experienced the power of our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic relative pl-6 pr-6">
                  <span className="absolute left-0 top-0 text-2xl text-gray-300">"</span>
                  {testimonial.text}
                  <span className="absolute right-0 bottom-0 text-2xl text-gray-300">"</span>
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Partners Section */}
      <section className="py-8 bg-black text-white overflow-hidden relative">
        <p className="text-center text-sm text-gray-400 mb-6 font-semibold tracking-wider uppercase">
          Trusted by Innovative Companies
        </p>
        <h2 className="text-center text-2xl font-bold mb-6">
          Join Our Community
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to accelerate your startup's journey or share your expertise? Join our thriving community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/get-started">
              Get Started Today <Rocket className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

const stats = [
  { value: 200, suffix: "+", label: "Active Mentors" },
  { value: 500, suffix: "+", label: "Startups Supported" },
  { value: 50, suffix: "M+", label: "Funding Raised" },
  { value: 15, suffix: "+", label: "Industries Covered" },
]

const progressItems = [
  { label: "Startup Success Rate", value: 92 },
  { label: "Mentor Satisfaction", value: 98 },
  { label: "Funding Success Rate", value: 85 },
  { label: "Growth Acceleration", value: 78 },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, TechGrowth",
    text: "The mentorship I received through Mentor Labs was transformative for my startup. My mentor helped me navigate fundraising challenges and refine our business model.",
    rating: 5,
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow",
    text: "As a technical founder, I needed guidance on scaling our engineering team. My mentor provided invaluable insights that helped us avoid common pitfalls.",
    rating: 5,
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    name: "Priya Patel",
    role: "Mentor & Investor",
    text: "Being a mentor on this platform has been rewarding. The matching process ensures I work with startups where my expertise can truly make a difference.",
    rating: 4,
    image: "/images/testimonials/testimonial-3.jpg",
  },
]
