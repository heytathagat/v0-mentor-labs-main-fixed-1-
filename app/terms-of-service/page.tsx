"use client"

import { motion } from "framer-motion"
import { PageProgress } from "@/components/page-progress"

export default function TermsOfServicePage() {
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
              Terms of Service
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
                Welcome to Mentor Labs. Please read these Terms of Service ("Terms") carefully as they contain important
                information about your legal rights, remedies, and obligations. By accessing or using the Mentor Labs
                platform, you agree to comply with and be bound by these Terms.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our platform, you agree to these Terms and our Privacy Policy. If you do not agree
                to these Terms, you may not access or use our platform.
              </p>

              <h2>2. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such
                as by sending an email notification, providing notice through our platform, or updating the "Last
                Updated" date at the beginning of these Terms. Your continued use of our platform following notification
                of changes will constitute your acceptance of such changes.
              </p>

              <h2>3. Platform Overview</h2>
              <p>
                Mentor Labs is a platform that connects startups with experienced mentors. We provide tools and services
                to facilitate these connections, but we do not guarantee specific outcomes or results from these
                relationships.
              </p>

              <h2>4. Account Registration</h2>
              <p>
                To access certain features of our platform, you must register for an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete. You are responsible for safeguarding your
                password and for all activities that occur under your account.
              </p>

              <h2>5. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our platform for any illegal purpose or in violation of any laws</li>
                <li>
                  Violate or infringe other people's intellectual property, privacy, publicity, or other legal rights
                </li>
                <li>
                  Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or
                  entity
                </li>
                <li>Interfere with or disrupt our platform or servers or networks connected to our platform</li>
                <li>Use any data mining, robots, or similar data gathering or extraction methods</li>
                <li>Use our platform to send unsolicited communications, promotions, or advertisements, or spam</li>
                <li>
                  Forge headers or manipulate identifiers to disguise the origin of any content transmitted through our
                  platform
                </li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>
                Our platform and its original content, features, and functionality are owned by Mentor Labs and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws. You may not copy, modify, create derivative works of, publicly display,
                publicly perform, republish, or transmit any of the material on our platform without prior written
                consent.
              </p>

              <h2>7. User Content</h2>
              <p>
                You retain all rights in, and are solely responsible for, the content you post to our platform. By
                posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce,
                modify, adapt, publish, translate, distribute, and display such content in connection with providing our
                platform.
              </p>

              <h2>8. Mentorship Relationships</h2>
              <p>
                Mentor Labs facilitates connections between mentors and startups but is not responsible for the actions
                or conduct of users. All arrangements, agreements, and understandings between mentors and startups are
                solely between those parties. We do not guarantee the quality, safety, or legality of any mentorship
                services.
              </p>

              <h2>9. Fees and Payment</h2>
              <p>
                Some aspects of our platform may require payment of fees. All fees are stated in U.S. dollars and are
                non-refundable unless otherwise specified. We reserve the right to change our fees at any time with
                notice to users.
              </p>

              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account and access to our platform at any time, without prior notice or
                liability, for any reason, including if you breach these Terms. Upon termination, your right to use our
                platform will immediately cease.
              </p>

              <h2>11. Disclaimer of Warranties</h2>
              <p>
                Our platform is provided on an "as is" and "as available" basis. We make no warranties, expressed or
                implied, regarding the operation of our platform or the information, content, or materials included on
                our platform.
              </p>

              <h2>12. Limitation of Liability</h2>
              <p>
                In no event shall Mentor Labs be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your access to or use of or inability to access or use our platform.
              </p>

              <h2>13. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Mentor Labs and its officers, directors, employees,
                agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs,
                expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or
                arising from your violation of these Terms.
              </p>

              <h2>14. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law provisions.
              </p>

              <h2>15. Dispute Resolution</h2>
              <p>
                Any dispute arising out of or relating to these Terms or our platform shall be resolved through binding
                arbitration conducted in San Francisco, California, in accordance with the commercial arbitration rules
                of the American Arbitration Association.
              </p>

              <h2>16. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Mentor Labs
                <br />
                123 Innovation Street
                <br />
                San Francisco, CA 94103
                <br />
                Email: legal@mentorlabs.com
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
