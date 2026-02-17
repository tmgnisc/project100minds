"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"

const features = [
  {
    title: "Skill-First Learning",
    description: "Practical, industry-relevant skills that go beyond textbooks and traditional classrooms.",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    title: "Technology Awareness",
    description:
      "Understanding and applying technology across Management, Arts, Medical, Science, and more.",
    gradient: "from-pink-500 to-indigo-500",
  },
  {
    title: "Future-Ready Mindset",
    description:
      "Building adaptability, problem-solving, and confidence for an evolving world.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Inclusive Learning",
    description:
      "A shared platform where students from all academic backgrounds learn together.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Practical Exposure",
    description:
      "Hands-on projects, sessions, and challenges designed around real-world scenarios.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Leadership & Ownership",
    description:
      "Opportunities to lead initiatives, take responsibility, and drive impact.",
    gradient: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "Guided by Mentors",
    description:
      "Learn from educators, professionals, and industry practitioners.",
    gradient: "from-lime-500 to-green-500",
  },
  {
    title: "Collaboration & Community",
    description:
      "Grow through collaboration with peers, institutions, and organizations.",
    gradient: "from-rose-500 to-red-500",
  },
  {
    title: "Cohort-Based Journey",
    description:
      "A focused one-year cohort experience with clear goals, accountability, and outcomes.",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-300">About Project 100 Minds</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Project 100 Minds Stands For
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Building skills, awareness, and leadership beyond academic boundaries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction={index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}
              delay={index * 100}
            >
              <ParallaxSection speed={0.2 + (index % 3) * 0.1}>
                <div className="group relative h-full">
                  <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 hover:bg-purple-900/20 hover:-translate-y-2">
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                    {/* Hover glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                    />
                  </div>
                </div>
              </ParallaxSection>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
