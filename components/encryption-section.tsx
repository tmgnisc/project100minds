"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function EncryptionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Photo */}
          <ScrollReveal direction="left">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-pink-500/20 blur-3xl rounded-3xl pointer-events-none" />
              <div className="relative glass rounded-3xl overflow-hidden border border-purple-500/20">
                <Image
                  src="/sushant.jpg"
                  alt="Sushant Rimal, Founder of DEV Community Nepal"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Founder's Message */}
          <ScrollReveal direction="right" delay={150}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-300">Founder's Message</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                A Vision Beyond Classrooms
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg">
                <p>
                  When I first envisioned DEV Community Nepal, the goal was simple: to create a space where students
                  and aspiring technologists could learn, connect, and grow together. Over time, through direct
                  engagement with thousands of students across the country, one reality became increasingly clear:
                  technology is no longer confined to a single discipline. It touches every field, every profession,
                  and every future.
                </p>
                <p>
                  Project 100 Minds was born from this realization. It is not just another program; it is a commitment
                  to empower students beyond traditional academic boundaries. Whether a student comes from Technology,
                  Management, Arts, Medical Sciences, Social Sciences, or any other field, this initiative exists to
                  ensure they are equipped with the skills, technological awareness, and mindset required to navigate
                  and succeed in an ever-evolving world.
                </p>
                <p>
                  With this, we are laying the foundation of a long-term vision, one that values practical learning,
                  collaboration, leadership, and inclusivity. This represents more than participation; it represents
                  responsibility, growth, and the opportunity to shape the culture and impact of Project 100 Minds for
                  years to come.
                </p>
                <p>
                  Through workshops, trainings, sessions, awareness campaigns, hackathons, and collaborative
                  initiatives, Project 100 Minds aims to bridge the gap between education and real-world readiness. Our
                  focus is not only on learning technology, but on learning how to think, adapt, and lead with
                  technology, regardless of academic background.
                </p>
                <p>
                  I strongly believe that when students are given the right exposure, guidance, and platform, they can
                  create meaningful change for themselves and for society. Project 100 Minds is an extension of that
                  belief.
                </p>
                <p>
                  Thank you for being part of this initiative and for believing in the vision of DEV Community Nepal.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-white font-semibold text-lg">Sushant Rimal</p>
                <p className="text-gray-400 text-sm">Founder, DEV Community Nepal</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
