"use client"

import { useState, useRef } from "react"
import { ScrollReveal } from "./scroll-reveal"

const pillars = [
  { name: "Skill Development", icon: "💡" },
  { name: "Technology Awareness", icon: "🚀" },
  { name: "Future-Ready Mindset", icon: "🧠" },
  { name: "Cross-Disciplinary Learning", icon: "🤝" },
  { name: "Leadership & Ownership", icon: "🎯" },
  { name: "Innovation Challenges", icon: "🔥" },
  { name: "Mentorship Access", icon: "🎓" },
  { name: "Community Collaboration", icon: "🌐" },
  { name: "Career Readiness", icon: "📈" },
  { name: "Hands-on Projects", icon: "🛠" },
  { name: "Seminars & Panels", icon: "🎤" },
  { name: "Digital Literacy", icon: "🧑‍💻" },
]

function SkillCarousel({
  skills,
  direction = "left",
}: { skills: typeof pillars; direction?: "left" | "right" }) {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setHoveredIndex(null)
      }}
    >
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex gap-6 animate-scroll"
        style={{
          width: "max-content",
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`flex items-center gap-3 glass px-6 py-4 rounded-xl transition-all duration-500 cursor-pointer
                ${hoveredIndex === index ? "bg-purple-900/40 scale-110 -translate-y-2 shadow-lg shadow-purple-500/30" : "hover:bg-purple-900/30"}`}
              style={{
                transform:
                  hoveredIndex === index
                    ? "scale(1.1) translateY(-8px) rotateX(5deg)"
                    : hoveredIndex !== null
                      ? "scale(0.95)"
                      : "scale(1)",
              }}
            >
              <span
                className={`text-2xl transition-transform duration-300 ${hoveredIndex === index ? "scale-125" : ""}`}
              >
                {skill.icon}
              </span>
              <span
                className={`font-medium transition-colors duration-300 ${hoveredIndex === index ? "text-white" : "text-gray-300"}`}
              >
                {skill.name}
              </span>
            </div>

            {/* Glow effect on hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl -z-10 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="container mx-auto px-6 mb-16">
        <ScrollReveal direction="up">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-300">Program Pillars</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Program </span>
              <span className="text-gradient">Pillars</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Core pillars that define the Project 100 Minds experience for students from every academic background.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Program Pillars Carousel */}
      <div className="space-y-8">
        <ScrollReveal direction="up" delay={150}>
          <SkillCarousel skills={pillars} direction="left" />
        </ScrollReveal>
      </div>
    </section>
  )
}
