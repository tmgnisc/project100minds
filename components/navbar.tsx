"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

const navLinks = [
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/application-categories", label: "Application Categories" },
  { href: "/selection-criteria", label: "Selection Criteria" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <MagneticButton>
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
              Dev Community Nepal
            </span>
          </Link>
        </MagneticButton>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <MagneticButton key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 group relative"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            </MagneticButton>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mt-2 mx-4 rounded-xl p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileOpen(false)}
                style={{
                  transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: mobileOpen ? 1 : 0,
                  transition: `all 0.3s ease ${index * 0.1}s`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
