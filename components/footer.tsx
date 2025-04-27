import Link from "next/link"
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-black text-white font-montserrat border-t border-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">Mentor Labs</span>
            </Link>
            <p className="text-white/70 mb-6">
              Connecting visionary startups with experienced mentors to foster innovation and growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  Home <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/mentors"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Mentors <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/startups"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Startups <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Team <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Contact <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/events"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Events <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-white transition-colors inline-flex items-center">
                  FAQ <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Privacy Policy <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center"
                >
                  Terms of Service <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-transparent border border-white text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white font-montserrat"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-4 py-3 font-medium hover:bg-white/90 transition-colors font-montserrat"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Mentor Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
