"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react"
import { PieChart } from 'react-minimal-pie-chart'
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stats = [
  { label: "Active Mentors", value: "100+" },
  { label: "Startups Helped", value: "500+" },
  { label: "Success Rate", value: "89%" },
  { label: "Countries", value: "25+" },
]

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "Building strong relationships between mentors and startups for lasting impact."
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on achieving measurable results and concrete business outcomes."
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Committed to fostering innovation and entrepreneurial spirit."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining high standards in mentorship and startup guidance."
  },
]

const impactData = [
  { title: 'Tech Startups', value: 45, color: '#2563eb' },
  { title: 'Healthcare', value: 25, color: '#16a34a' },
  { title: 'Fintech', value: 20, color: '#eab308' },
  { title: 'Others', value: 10, color: '#64748b' },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Former startup founder with 15+ years of experience in tech."
  },
  {
    name: "Michael Chen",
    role: "Head of Mentorship",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Expert in building mentorship programs and community engagement."
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop",
    bio: "Specializes in scaling operations and program management."
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Empowering the Next Generation of Innovators
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Mentor Labs connects experienced industry leaders with ambitious startups, 
              fostering growth and innovation in the entrepreneurial ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-black">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  At Mentor Labs, we believe in the power of experienced guidance. Our mission is to bridge 
                  the gap between seasoned industry experts and emerging startups, creating meaningful 
                  connections that drive innovation and success.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through our platform, we facilitate knowledge transfer, provide strategic insights, 
                  and help startups navigate the challenges of building successful businesses.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our vision extends beyond mere mentorship. We aim to create a global ecosystem where 
                  innovation thrives, where every startup has access to the guidance they need, and 
                  where experienced leaders can make a lasting impact on the next generation of entrepreneurs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to fostering an environment of continuous learning, collaboration, 
                  and growth. By connecting the right mentors with ambitious startups, we're not just 
                  building businesses – we're shaping the future of innovation.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section with Pie Chart */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600">
              We've helped startups across various sectors achieve their goals and reach new heights.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <PieChart
                data={impactData}
                lineWidth={20}
                paddingAngle={2}
                label={({ dataEntry }) => `${dataEntry.value}%`}
                labelStyle={{
                  fontSize: '6px',
                  fontFamily: 'sans-serif',
                  fill: '#fff',
                }}
                labelPosition={75}
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Sector-wise Impact</h3>
              <div className="space-y-4">
                {impactData.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-gray-600">{item.value}% of mentored startups</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                Our mentorship program has shown significant impact across various sectors, 
                with particularly strong results in technology and healthcare startups. 
                We continue to expand our reach and impact in emerging sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-black"
            {...fadeIn}
          >
            Our Core Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-black">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-black"
            {...fadeIn}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-black">
                      {member.name}
                    </h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-gray-300 mb-8">
                Join our community of mentors and startups, and be part of the next big innovation.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/get-started">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 