"use client"

import { motion } from "framer-motion"
import { PageProgress } from "@/components/page-progress"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageProgress />

      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Last updated: April 24, 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-gray max-w-none">
              <p>
                At Mentor Labs, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you register for an account, create or
                modify your profile, sign up for our newsletter, or communicate with us. This information may include:
              </p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Professional background and experience</li>
                <li>Company information and role</li>
                <li>Profile photos and biographical information</li>
                <li>Information about your startup or business</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Match mentors and startups based on expertise and needs</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>

              <h2>Sharing of Information</h2>
              <p>We may share information about you in the following circumstances:</p>
              <ul>
                <li>With mentors and startups as part of our matching process</li>
                <li>
                  With vendors, consultants, and other service providers who need access to such information to carry
                  out work on our behalf
                </li>
                <li>
                  In response to a request for information if we believe disclosure is in accordance with any applicable
                  law, regulation, or legal process
                </li>
                <li>
                  If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                  rights, property, and safety of Mentor Labs or others
                </li>
                <li>
                  In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business by another company
                </li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
                access, disclosure, alteration, and destruction. However, no internet or email transmission is ever
                fully secure or error-free.
              </p>

              <h2>Your Choices</h2>
              <p>
                You can update, correct, or delete your account information at any time by logging into your account or
                contacting us. You may also opt out of receiving promotional communications from us by following the
                instructions in those communications.
              </p>

              <h2>Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and to
                distinguish you from other users of our website. This helps us provide you with a good experience when
                you browse our website and also allows us to improve our site.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 16, and we do not knowingly collect personal information
                from children under 16. If we learn we have collected or received personal information from a child
                under 16, we will delete that information.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. If we make material changes, we will notify you by
                email or through a notice on our website prior to the change becoming effective.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                Mentor Labs
                <br />
                123 Innovation Street
                <br />
                San Francisco, CA 94103
                <br />
                Email: privacy@mentorlabs.com
                <br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
