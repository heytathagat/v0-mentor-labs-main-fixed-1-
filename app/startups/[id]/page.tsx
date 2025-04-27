"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin: string
}

interface Feature {
  title: string
  description: string
  benefits: string[]
}

interface Testimonial {
  quote: string
  author: string
  role: string
  school: string
}

interface MediaHighlight {
  title: string
  source: string
  date: string
  link: string
}

interface Partnership {
  name: string
  description: string
  logo: string
}

interface Startup {
  name: string
  industry: string
  description: string
  longDescription: string
  vision: string
  mission: string
  foundedYear: number
  headquarters: string
  achievements: string[]
  impactMetrics: Record<string, string>
  logo: string
  stats: Array<{
    label: string
    value: string
    growth: string
  }>
  features: Feature[]
  testimonials: Testimonial[]
  team: TeamMember[]
  mediaHighlights: MediaHighlight[]
  partnerships: Partnership[]
}

// Expanded startup data with more details
const startupDetails: Record<string, Startup> = {
  tallkeys: {
    name: "TallKeys",
    industry: "EdTech",
    description: "An innovative platform that helps students master keyboard typing skills with adaptive learning technology and gamified exercises.",
    longDescription: "TallKeys is revolutionizing the way students learn to type by combining cutting-edge adaptive learning technology with engaging gamification elements. Our platform analyzes each student's typing patterns and creates personalized learning paths that adapt in real-time to their progress and challenges.",
    vision: "To empower every student with efficient typing skills essential for the digital age.",
    mission: "Revolutionizing typing education through personalized, engaging, and effective learning experiences.",
    foundedYear: 2021,
    headquarters: "San Francisco, CA",
    achievements: [
      "5K+ Active Users",
      "Educational Innovation Award 2023",
      "School Partnership Program Success",
      "Featured in EdTech Monthly",
      "Google for Education Partner"
    ],
    impactMetrics: {
      studentsHelped: "25,000+",
      averageSpeedImprovement: "120%",
      schoolsPartnered: "150+",
      countriesReached: "25+"
    },
    logo: "/placeholder.svg?height=200&width=200",
    stats: [
      { label: "Active Users", value: "5,000+", growth: "+127% YoY" },
      { label: "Schools Partnered", value: "50+", growth: "+200% YoY" },
      { label: "Average Typing Speed Improvement", value: "40%", growth: "Consistent" },
      { label: "Student Satisfaction", value: "96%", growth: "+5% YoY" }
    ],
    features: [
      {
        title: "Adaptive Learning",
        description: "Personalized lessons that adjust to each student's skill level and learning pace",
        benefits: [
          "Real-time skill assessment",
          "Custom exercise generation",
          "Progress-based difficulty adjustment"
        ]
      },
      {
        title: "Real-time Analytics",
        description: "Detailed progress tracking and performance metrics for students and teachers",
        benefits: [
          "Comprehensive performance dashboards",
          "Progress tracking over time",
          "Detailed error analysis"
        ]
      },
      {
        title: "Gamified Experience",
        description: "Engaging challenges and rewards that make learning to type fun and motivating",
        benefits: [
          "Achievement badges",
          "Daily challenges",
          "Competitive leaderboards"
        ]
      }
    ],
    testimonials: [
      {
        quote: "TallKeys transformed our typing curriculum. Students are more engaged than ever!",
        author: "Maria Garcia",
        role: "Educational Director",
        school: "Tech Academy"
      },
      {
        quote: "The improvement in my students' typing skills has been remarkable.",
        author: "John Smith",
        role: "Computer Science Teacher",
        school: "Digital High"
      }
    ],
    team: [
      {
        name: "Sarah Chen",
        role: "Founder & CEO",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Former Google Education lead with 15+ years in EdTech",
        linkedin: "https://linkedin.com/in/sarah-chen"
      },
      {
        name: "Michael Rodriguez",
        role: "CTO",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Ex-Microsoft engineer specialized in adaptive learning systems",
        linkedin: "https://linkedin.com/in/michael-rodriguez"
      },
      {
        name: "Dr. Lisa Thompson",
        role: "Head of Education",
        image: "/placeholder.svg?height=100&width=100",
        bio: "PhD in Educational Technology from Stanford",
        linkedin: "https://linkedin.com/in/lisa-thompson"
      }
    ],
    mediaHighlights: [
      {
        title: "TallKeys Raises $5M to Transform Typing Education",
        source: "TechCrunch",
        date: "2023",
        link: "#"
      },
      {
        title: "How TallKeys is Making Typing Fun Again",
        source: "EdTech Review",
        date: "2023",
        link: "#"
      }
    ],
    partnerships: [
      {
        name: "Google for Education",
        description: "Official learning partner",
        logo: "/placeholder.svg"
      },
      {
        name: "National Education Association",
        description: "Certified educational tool",
        logo: "/placeholder.svg"
      }
    ]
  },
  swarnai: {
    name: "SwarnAI",
    industry: "Artificial Intelligence",
    description: "AI-powered solution for jewelry design and customization, helping artisans create unique pieces with advanced generative algorithms.",
    longDescription: "SwarnAI is bridging the gap between traditional jewelry craftsmanship and cutting-edge AI technology. Our platform empowers artisans to create stunning, unique pieces while maintaining the authenticity of their craft through advanced generative design algorithms.",
    vision: "To revolutionize jewelry design by combining AI with traditional craftsmanship",
    mission: "Empowering artisans with AI-driven tools to create unique and sustainable jewelry designs",
    foundedYear: 2022,
    headquarters: "Bangalore, India",
    achievements: ["AI Innovation Grant", "Jewelry Industry Partnership", "Sustainable Design Award"],
    impactMetrics: {
      designsGenerated: "10,000+",
      artisanPartners: "200+",
      customerSatisfaction: "98%",
      sustainabilityScore: "85%"
    },
    logo: "/placeholder.svg?height=200&width=200",
    stats: [
      { label: "Designs Generated", value: "10,000+", growth: "+150% YoY" },
      { label: "Artisan Partners", value: "200+", growth: "+75% YoY" },
      { label: "Customer Satisfaction", value: "98%", growth: "Consistent" },
      { label: "Sustainability Score", value: "85%", growth: "+15% YoY" }
    ],
    features: [
      {
        title: "AI Design Assistant",
        description: "Generate unique jewelry designs based on style preferences and trends",
        benefits: [
          "Instant design generation",
          "Style customization",
          "Trend analysis"
        ]
      },
      {
        title: "Customization Engine",
        description: "Modify and personalize designs with real-time 3D visualization",
        benefits: [
          "Real-time rendering",
          "Material simulation",
          "Cost estimation"
        ]
      },
      {
        title: "Sustainability Tracking",
        description: "Monitor and optimize material usage and environmental impact",
        benefits: [
          "Material efficiency",
          "Carbon footprint tracking",
          "Waste reduction"
        ]
      }
    ],
    testimonials: [
      {
        quote: "SwarnAI has transformed how we approach jewelry design. The AI suggestions are incredibly innovative.",
        author: "Rajesh Kumar",
        role: "Master Artisan",
        school: "Heritage Jewelers"
      },
      {
        quote: "The sustainability tracking feature has helped us reduce waste by 40%.",
        author: "Sarah Williams",
        role: "Production Manager",
        school: "Modern Designs Co."
      }
    ],
    team: [
      {
        name: "Priya Sharma",
        role: "Founder & CEO",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Former Head of Innovation at Cartier with 12+ years in luxury jewelry",
        linkedin: "https://linkedin.com/in/priya-sharma"
      },
      {
        name: "Alex Thompson",
        role: "Head of AI",
        image: "/placeholder.svg?height=100&width=100",
        bio: "PhD in Computer Vision from MIT, previously at OpenAI",
        linkedin: "https://linkedin.com/in/alex-thompson"
      }
    ],
    mediaHighlights: [
      {
        title: "SwarnAI Raises $8M to Transform Jewelry Design",
        source: "TechCrunch",
        date: "2023",
        link: "#"
      },
      {
        title: "How AI is Revolutionizing Traditional Jewelry Making",
        source: "Forbes",
        date: "2023",
        link: "#"
      }
    ],
    partnerships: [
      {
        name: "Sustainable Gems Alliance",
        description: "Certified sustainable partner",
        logo: "/placeholder.svg"
      },
      {
        name: "World Craft Council",
        description: "Innovation partner",
        logo: "/placeholder.svg"
      }
    ]
  },
  needle: {
    name: "Needle",
    industry: "Healthcare Technology",
    description: "Precision medicine platform that uses AI to match patients with clinical trials and personalized treatment options based on genetic profiles.",
    longDescription: "Needle is transforming healthcare by leveraging AI and genetic data to connect patients with the most suitable clinical trials and treatment options. Our platform analyzes complex genetic profiles and medical histories to provide personalized healthcare solutions.",
    vision: "To revolutionize healthcare by making precision medicine accessible to all",
    mission: "Connecting patients with life-changing clinical trials through AI-powered matching",
    foundedYear: 2021,
    headquarters: "Boston, MA",
    achievements: ["Healthcare Innovation Award", "Seed Funding Round", "Research Partnership"],
    impactMetrics: {
      patientsMatched: "1,000+",
      clinicalTrials: "500+",
      successRate: "85%",
      hospitalsPartnered: "50+"
    },
    logo: "/placeholder.svg?height=200&width=200",
    stats: [
      { label: "Patients Matched", value: "1,000+", growth: "+200% YoY" },
      { label: "Clinical Trials", value: "500+", growth: "+150% YoY" },
      { label: "Success Rate", value: "85%", growth: "Consistent" },
      { label: "Hospital Partners", value: "50+", growth: "+100% YoY" }
    ],
    features: [
      {
        title: "AI Matching Algorithm",
        description: "Advanced patient-trial matching based on genetic and clinical data",
        benefits: [
          "Precision matching",
          "Real-time updates",
          "Multi-factor analysis"
        ]
      },
      {
        title: "Real-time Trial Updates",
        description: "Live updates on trial availability and recruitment status",
        benefits: [
          "Instant notifications",
          "Status tracking",
          "Automated alerts"
        ]
      },
      {
        title: "Secure Data Platform",
        description: "HIPAA-compliant storage and processing of patient information",
        benefits: [
          "End-to-end encryption",
          "Audit logging",
          "Access controls"
        ]
      }
    ],
    testimonials: [
      {
        quote: "Needle has revolutionized how we connect patients with clinical trials.",
        author: "Dr. Sarah Johnson",
        role: "Clinical Research Director",
        school: "Mass General Hospital"
      },
      {
        quote: "The platform's matching accuracy has significantly improved our trial recruitment.",
        author: "Dr. Michael Chen",
        role: "Principal Investigator",
        school: "Stanford Medical Center"
      }
    ],
    team: [
      {
        name: "Dr. James Wilson",
        role: "Founder & CEO",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Former Head of Clinical Research at Mayo Clinic, MD/PhD from Harvard",
        linkedin: "https://linkedin.com/in/james-wilson"
      },
      {
        name: "Dr. Emily Chang",
        role: "Chief Medical Officer",
        image: "/placeholder.svg?height=100&width=100",
        bio: "20+ years in clinical trials, Previously at NIH",
        linkedin: "https://linkedin.com/in/emily-chang"
      }
    ],
    mediaHighlights: [
      {
        title: "Needle Secures $12M to Expand AI-Powered Clinical Trial Matching",
        source: "MedTech Today",
        date: "2023",
        link: "#"
      },
      {
        title: "How AI is Transforming Clinical Trial Recruitment",
        source: "Healthcare Weekly",
        date: "2023",
        link: "#"
      }
    ],
    partnerships: [
      {
        name: "Mayo Clinic",
        description: "Research partner",
        logo: "/placeholder.svg"
      },
      {
        name: "NIH",
        description: "Grant recipient",
        logo: "/placeholder.svg"
      }
    ]
  },
  "glyptika-studios": {
    name: "Glyptika Studios",
    industry: "Creative Technology",
    description: "Digital art studio specializing in 3D modeling, animation, and interactive experiences for education and cultural heritage preservation.",
    longDescription: "Glyptika Studios is at the forefront of digital heritage preservation, creating immersive experiences that bring history and culture to life. Our team combines expertise in 3D modeling, animation, and interactive design to create engaging educational content.",
    vision: "To preserve and democratize cultural heritage through cutting-edge digital technology",
    mission: "Creating immersive digital experiences that make cultural heritage accessible and engaging",
    foundedYear: 2020,
    headquarters: "London, UK",
    achievements: ["Digital Art Exhibition", "Museum Partnership", "Educational Grant"],
    impactMetrics: {
      projectsCompleted: "100+",
      museumPartners: "25+",
      studentReach: "50,000+",
      artifactsDigitized: "1,000+"
    },
    logo: "/placeholder.svg?height=200&width=200",
    stats: [
      { label: "Projects Completed", value: "100+", growth: "+80% YoY" },
      { label: "Museum Partners", value: "25+", growth: "+150% YoY" },
      { label: "Student Reach", value: "50,000+", growth: "+200% YoY" },
      { label: "Artifacts Digitized", value: "1,000+", growth: "+100% YoY" }
    ],
    features: [
      {
        title: "3D Heritage Scanning",
        description: "High-precision 3D scanning of historical artifacts and sites",
        benefits: [
          "Sub-millimeter accuracy",
          "Color preservation",
          "Texture mapping"
        ]
      },
      {
        title: "Interactive Exhibits",
        description: "Engaging digital experiences for museums and educational institutions",
        benefits: [
          "VR/AR support",
          "Touch interfaces",
          "Multi-language"
        ]
      },
      {
        title: "Educational Content",
        description: "Curriculum-aligned digital resources for schools and universities",
        benefits: [
          "Interactive lessons",
          "Assessment tools",
          "Progress tracking"
        ]
      }
    ],
    testimonials: [
      {
        quote: "Glyptika's work has transformed how our visitors interact with ancient artifacts.",
        author: "Dr. Elizabeth Foster",
        role: "Museum Director",
        school: "British Museum"
      },
      {
        quote: "The educational impact of their digital exhibits is remarkable.",
        author: "Prof. James Mitchell",
        role: "Department Head",
        school: "University College London"
      }
    ],
    team: [
      {
        name: "Marcus Aurelius",
        role: "Creative Director",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Former Disney animator with 15+ years in digital art",
        linkedin: "https://linkedin.com/in/marcus-aurelius"
      },
      {
        name: "Sofia Patel",
        role: "Technical Director",
        image: "/placeholder.svg?height=100&width=100",
        bio: "PhD in Computer Graphics from ETH Zurich",
        linkedin: "https://linkedin.com/in/sofia-patel"
      }
    ],
    mediaHighlights: [
      {
        title: "Glyptika Studios Brings Ancient Rome to Life in VR",
        source: "ArtTech Review",
        date: "2023",
        link: "#"
      },
      {
        title: "The Future of Museum Experiences",
        source: "Culture Weekly",
        date: "2023",
        link: "#"
      }
    ],
    partnerships: [
      {
        name: "British Museum",
        description: "Digital preservation partner",
        logo: "/placeholder.svg"
      },
      {
        name: "UNESCO",
        description: "Heritage preservation partner",
        logo: "/placeholder.svg"
      }
    ]
  }
}

export default function StartupPage() {
  const params = useParams<{ id: string }>()
  const [startup, setStartup] = useState<Startup | null>(null)

  useEffect(() => {
    const startupId = params?.id
    if (!startupId) return
    const startupData = startupDetails[startupId]
    if (startupData) {
      setStartup(startupData)
    }
  }, [params])

  if (!startup) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Startup not found</h1>
          <Button asChild>
            <Link href="/startups">Back to Startups</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <Button asChild variant="outline" className="mb-8 border-white text-white hover:bg-white hover:text-black">
            <Link href="/startups">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Startups
            </Link>
          </Button>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <TextReveal text={startup.name} tag="span" />
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 text-sm border border-white rounded-full">
                  {startup.industry}
                </span>
                <span className="text-white/70">Founded {startup.foundedYear}</span>
                <span className="text-white/70">{startup.headquarters}</span>
              </div>
              <p className="text-lg text-white/70 mb-8">{startup.longDescription}</p>
              <div className="space-y-4 mb-8">
                <p className="font-semibold">Vision</p>
                <p className="text-white/70">{startup.vision}</p>
                <p className="font-semibold">Mission</p>
                <p className="text-white/70">{startup.mission}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {startup.achievements.map((achievement: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm border border-white/20 rounded-full bg-white/5"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={startup.logo}
                alt={startup.name}
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(startup.impactMetrics).map(([key, value], index) => (
              <motion.div
                key={key}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{value}</div>
                <p className="text-white/70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {startup.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                className="p-6 border border-black/10 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-black/70 mb-2">{stat.label}</p>
                <span className="text-sm text-green-600">{stat.growth}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {startup.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-black/70 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {startup.testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                className="p-6 border border-white/20 rounded-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-white/70">{testimonial.role}</p>
                  <p className="text-white/70">{testimonial.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {startup.team.map((member: any, index: number) => (
              <motion.div
                key={index}
                className="p-6 border border-black/10 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-black/70 mb-2">{member.role}</p>
                <p className="text-sm mb-4">{member.bio}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={member.linkedin} target="_blank">
                    Connect on LinkedIn
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Media Highlights */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Media Highlights</h2>
              <div className="space-y-6">
                {startup.mediaHighlights.map((highlight: any, index: number) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-white shadow rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-bold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-black/70">
                      {highlight.source} • {highlight.date}
                    </p>
                    <Button asChild variant="link" className="mt-2 p-0">
                      <Link href={highlight.link} target="_blank">
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Partnerships */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Our Partners</h2>
              <div className="grid grid-cols-2 gap-6">
                {startup.partnerships.map((partner: any, index: number) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-white shadow rounded-lg text-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold mb-2">{partner.name}</h3>
                    <p className="text-sm text-black/70">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <TextReveal text="Ready to Transform Your Learning Experience?" tag="span" />
            </h2>
            <p className="text-white/70 mb-8">
              Join {startup.name} and become part of our growing community of successful learners and educators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="#">
                  Schedule a Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Find the Perfect Mentor
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Find the perfect mentor to guide your startup's growth.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Browse Mentors <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Mentor Labs?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Apply now to get connected with experienced mentors and accelerate your startup.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Apply as a Startup <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
} 