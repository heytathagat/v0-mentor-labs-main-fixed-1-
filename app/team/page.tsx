"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Globe, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TypingEffect } from "@/components/typing-effect"
import { PageProgress } from "@/components/page-progress"
import { SectionLoader } from "@/components/section-loader"

export default function TeamPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <PageProgress />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TypingEffect
                text="Meet Our Team"
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
              The passionate individuals behind Mentor Labs who are dedicated to connecting mentors and startups.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <div className="max-w-md mx-auto my-12">
              <SectionLoader />
            </div>
          ) : (
            <>
              <Tabs defaultValue="leadership" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="core-team">Core Team</TabsTrigger>
                </TabsList>

                <TabsContent value="leadership">
                  <div className="grid md:grid-cols-2 gap-8">
                    {teamMembers
                      .filter((member) => member.role === "leadership")
                      .map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="core-team">
                  <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers
                      .filter((member) => member.role === "core-team")
                      .map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  <TypingEffect text="Join Our Team" speed={50} />
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals who are passionate about helping startups succeed. Check
                  out our current openings or send us your resume.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">View Open Positions</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Values</h2>
            <p className="text-gray-600">The core principles that guide everything we do at Mentor Labs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  role: "leadership" | "core-team"
  social: {
    linkedin?: string
    twitter?: string
    website?: string
    email?: string
  }
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{member.title}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{member.bio}</p>

        <div className="flex gap-3">
          {member.social.linkedin && (
            <Link
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          )}
          {member.social.twitter && (
            <Link
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          )}
          {member.social.website && (
            <Link
              href={member.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <Globe className="h-5 w-5" />
            </Link>
          )}
          {member.social.email && (
            <Link href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-black">
              <Mail className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Updated team members data
const teamMembers: TeamMember[] = [
  {
    id: "prashant-singh-rana",
    name: "Dr. Prashant Singh Rana",
    title: "Associate Professor, TIET",
    bio: "Dr. Prashant Singh Rana is an Associate Professor and Associate Head of the Department of Computer Science and Engineering at Thapar Institute of Engineering & Technology (TIET), Patiala, India. He specializes in Machine Learning, Data Mining, and Computational Biology.",
    image:
      "https://static.wixstatic.com/media/e26087_5e05a06b9abf4ca1955a2f14850073d6~mv2.jpg/v1/crop/x_0,y_19,w_302,h_220/fill/w_175,h_127,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/rana.jpg",
    role: "leadership",
    social: {
      linkedin: "https://linkedin.com",
      email: "psrana@thapar.edu",
    },
  },
  {
    id: "tathagat-kumar",
    name: "Tathagat Kumar",
    title: "Entrepreneur",
    bio: "A driven entrepreneur with a proven track record of building and scaling ventures that make an impact. Nominated for Bharat Business Awards and scaled business to 2.2M USD annually bootstrapped.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEC3QtpeXV1Mw/profile-displayphoto-shrink_200_200/B56ZSYtm7NHQAY-/0/1737728881598?e=2147483647&v=beta&t=h1yV89A-TIOI13nvFV4WXDqMuyslxYMXjeQAujhUr0U",
    role: "leadership",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "tathagat@mentorlabs.com",
    },
  },
  {
    id: "arsh-charath",
    name: "Arsh Charath",
    title: "Technical Lead",
    bio: "Experienced technical lead with expertise in software development and system architecture. Passionate about creating innovative solutions that drive business growth and enhance user experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLrlmccr6CG2t_VGA6jh1LWkciLhkoVcIPA&s",
    role: "core-team",
    social: {
      linkedin: "https://linkedin.com",
      email: "arsh@mentorlabs.com",
    },
  },
  {
    id: "ritesh-kapoor",
    name: "Ritesh Kapoor",
    title: "Product Manager",
    bio: "Strategic product manager with a track record of delivering successful products from concept to launch. Skilled in user research, roadmap planning, and cross-functional team leadership.",
    image: "https://www.ccstiet.com/media/team/images/2024-25/Ritesh_Kapoor_EIVU0Vc.jpg",
    role: "core-team",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "ritesh@mentorlabs.com",
    },
  },
  {
    id: "anant-tyagi",
    name: "Anant Tyagi",
    title: "Marketing Director",
    bio: "Creative marketing professional specializing in digital marketing strategies, brand development, and growth hacking. Experienced in building and executing comprehensive marketing campaigns.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHs2V3J-E_7nA/profile-displayphoto-shrink_200_200/B56ZXgyfvyGcAY-/0/1743233090181?e=2147483647&v=beta&t=ynyNZRGcGONKm1zhkJrR6OruVp_mHZzyuDkou7C_09w",
    role: "core-team",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "anant@mentorlabs.com",
    },
  },
]

const values = [
  {
    title: "Authentic Connection",
    description:
      "We believe in fostering genuine relationships between mentors and startups based on mutual respect and shared goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Continuous Growth",
    description:
      "We're committed to the ongoing development of both startups and mentors, creating an environment where everyone can learn and evolve.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Inclusive Innovation",
    description:
      "We champion diversity of thought, background, and experience, recognizing that the best ideas come from inclusive environments.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]
