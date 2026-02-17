"use client"

import { Instagram, Send, Github, Youtube, Twitter, Linkedin, Heart } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand / Description */}
          <ScrollReveal direction="up" delay={0}>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">DEV Community Nepal</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A community-driven initiative dedicated to empowering students from all academic backgrounds with skills,
                technology awareness, and opportunities to grow.
              </p>
            </div>
          </ScrollReveal>

          {/* Program reference */}
          <ScrollReveal direction="up" delay={150}>
            <div>
              <h4 className="text-white font-semibold mb-4">Project 100 Minds</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cohort-based learning, mentorship, and real-world exposure designed to build future-ready, responsible
                leaders across disciplines.
              </p>
            </div>
          </ScrollReveal>

          {/* Social (non-clickable placeholders) */}
          <ScrollReveal direction="up" delay={250}>
            <div>
              <h4 className="text-white font-semibold mb-4">Social (Coming Soon)</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Instagram", icon: Instagram },
                  { name: "Telegram", icon: Send },
                  { name: "YouTube", icon: Youtube },
                  { name: "Github", icon: Github },
                  { name: "Twitter", icon: Twitter },
                  { name: "LinkedIn", icon: Linkedin },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-2 glass rounded-xl text-gray-400 text-sm cursor-default"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <ScrollReveal direction="up" delay={350}>
          <div className="pt-8 border-t border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} DEV Community Nepal. All rights reserved.
              </p>
              <p className="flex items-center gap-2 text-gray-500 text-sm group cursor-default">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 animate-pulse group-hover:scale-125 transition-transform" /> by
                DEV Community Nepal
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
