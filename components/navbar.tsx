"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MagneticButton } from "./magnetic-button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
          <Link href="#" className="flex items-center gap-3 group">
            <span className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
              Dev Community Nepal
            </span>
          </Link>
        </MagneticButton>
      </div>
    </nav>
  )
}
