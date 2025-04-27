"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TypingEffect } from "@/components/typing-effect"
import { PageProgress } from "@/components/page-progress"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Get all unique categories
  const categories = ["all", ...Array.from(new Set(faqItems.map((item) => item.category)))]

  // Filter FAQ items based on search query and active category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "all" || item.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      <PageProgress />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <TypingEffect
                text="Frequently Asked Questions"
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
              Find answers to common questions about our mentorship program and how we work with startups.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="mb-8">
              <Input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* FAQ Accordion */}
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <div className="prose prose-gray max-w-none">
                          <p>{item.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-2">No questions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or category</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Still have questions */}
            <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer to your question, feel free to contact our support team.
              </p>
              <Button asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const faqItems = [
  {
    question: "How does the mentorship program work?",
    answer:
      "Our mentorship program matches startups with experienced mentors based on industry, stage, and specific needs. Mentors provide guidance through regular sessions, helping startups navigate challenges and accelerate growth. The program typically runs for 6 months, with structured check-ins and goals.",
    category: "program",
  },
  {
    question: "What types of startups do you work with?",
    answer:
      "We work with startups across various industries and stages, from pre-seed to Series A. Our focus is on innovative companies with scalable business models and dedicated founding teams. We're particularly active in technology, healthcare, fintech, and sustainability sectors, but welcome startups from all industries.",
    category: "startups",
  },
  {
    question: "How are mentors selected?",
    answer:
      "Our mentors go through a rigorous selection process. We look for individuals with proven track records in their industries, entrepreneurial experience, and a genuine desire to help startups succeed. All mentors are interviewed by our team and must commit to our mentorship guidelines and code of conduct.",
    category: "mentors",
  },
  {
    question: "Is there a cost to join the program?",
    answer:
      "Yes, we offer different membership tiers for startups. The basic program includes mentor matching and group sessions, while premium tiers offer more personalized support and additional resources. We also have scholarship opportunities for underrepresented founders. Contact us for current pricing details.",
    category: "pricing",
  },
  {
    question: "How long does the mentorship program last?",
    answer:
      "Our standard program runs for 6 months, but many mentor-startup relationships continue long after the formal program ends. We believe in building lasting connections that benefit both parties. After the initial 6 months, participants can choose to renew their formal mentorship or transition to a more informal relationship.",
    category: "program",
  },
  {
    question: "Can I become a mentor if I have expertise to share?",
    answer:
      "We're always looking for experienced professionals who want to give back to the startup community. To apply as a mentor, visit our 'Become a Mentor' page and fill out the application form. Our team will review your experience and expertise and contact you for an interview if there's a good fit.",
    category: "mentors",
  },
  {
    question: "How are startups and mentors matched?",
    answer:
      "We use a combination of algorithmic matching and human curation to pair startups with mentors. The matching process considers industry expertise, specific skills needed, growth stage, and personality fit. Both parties have the opportunity to approve the match before beginning the mentorship relationship.",
    category: "program",
  },
  {
    question: "What commitment is expected from mentors?",
    answer:
      "Mentors are asked to commit to at least 4 hours per month for each startup they mentor. This typically includes a monthly 1-on-1 session, email/message availability for questions, and occasional review of materials or introductions. We ask for a minimum 6-month commitment to ensure continuity for the startups.",
    category: "mentors",
  },
  {
    question: "What commitment is expected from startups?",
    answer:
      "Startups are expected to actively participate in the program by attending scheduled sessions, completing agreed-upon action items, and providing updates on progress. The program works best when founders are open to feedback and willing to implement relevant advice from their mentors.",
    category: "startups",
  },
  {
    question: "Do you offer funding to startups in your program?",
    answer:
      "While we don't directly fund startups, we do connect promising startups with our network of investors. Many startups in our program have successfully raised funding through introductions made by their mentors or through our demo days and investor showcases.",
    category: "funding",
  },
  {
    question: "Can I join the program if my startup is not tech-focused?",
    answer:
      "Yes! While we have many tech startups in our program, we welcome innovative startups from all industries. Our mentor network includes experts from diverse backgrounds including retail, manufacturing, healthcare, education, and more.",
    category: "startups",
  },
  {
    question: "How do I apply for the program?",
    answer:
      "You can apply through our website by filling out the startup application form. The application asks for information about your business, team, current challenges, and what you hope to gain from mentorship. After submission, our team reviews applications and conducts interviews with promising candidates.",
    category: "program",
  },
]
