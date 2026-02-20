import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SpaceScene } from "@/components/space-scene"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Target,
  Scale,
  Heart,
  Shield,
  Lock,
  AlertTriangle,
  Gavel,
  Users,
  FileX,
  AlertCircle,
  CheckCircle,
  FileText,
} from "lucide-react"

export default function CodeOfConduct() {
  return (
    <main className="relative min-h-screen bg-[#030014]">
      <SpaceScene />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-sm text-purple-300">Governance & Ethics</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-white">Code of Conduct, Review & </span>
                  <span className="text-gradient">Corrective Mechanism</span>
                </h1>
                <p className="text-gray-400 text-lg">Project 100 Minds | Empowering Students with Skills, Technology, and Mindset</p>
                <p className="text-gray-500 text-sm mt-2">An Initiative of DEV Community Nepal</p>
              </div>
            </ScrollReveal>

            {/* Introduction */}
            <ScrollReveal direction="up" delay={100}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <p className="text-gray-300 leading-relaxed text-center">
                  This document serves as a foundational governance, ethics, and risk-management framework for Project 100 Minds, an initiative governed by DEV Community Nepal. All participants are required to read, understand, and formally agree to the terms outlined herein.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 1: Purpose & Scope */}
            <ScrollReveal direction="up" delay={150}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">1. Purpose & Scope</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">This policy is established to:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Protect the integrity, credibility, and reputation of Project 100 Minds and DEV Community Nepal",
                    "Define expected standards of conduct and professionalism",
                    "Provide clear mechanisms for review, correction, and resolution of issues",
                    "Establish transparent and fair replacement procedures",
                    "Ensure a safe, inclusive, ethical, and legally compliant environment",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass rounded-lg border border-purple-500/20">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="glass rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-4">This policy applies to:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Central Steering Committee members",
                      "Provincial Leads and Co-Leads",
                      "College Ambassadors and Deputy Ambassadors",
                      "College-Level Committee members",
                      "Task Force members",
                      "Volunteers and contributors",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 2: Nature of Engagement */}
            <ScrollReveal direction="up" delay={200}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">2. Nature of Engagement (Legal Positioning)</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Participation is voluntary and non-remunerated",
                    "Does not constitute employment or paid consultancy",
                    "Participants act as student leaders and volunteers",
                    "No financial or employment guarantees",
                    "DEV Community Nepal retains full governance authority",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass rounded-lg">
                      <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Section 3: Core Principles */}
            <ScrollReveal direction="up" delay={250}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-pink-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">3. Core Principles & Values</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">All participants must uphold the following principles:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: "✨", text: "Integrity and honesty", colorClass: "border-purple-500/20 hover:border-purple-500/40" },
                    { icon: "🤝", text: "Respect and inclusivity", colorClass: "border-cyan-500/20 hover:border-cyan-500/40" },
                    { icon: "📋", text: "Accountability and responsibility", colorClass: "border-pink-500/20 hover:border-pink-500/40" },
                    { icon: "👥", text: "Collaboration and professionalism", colorClass: "border-purple-500/20 hover:border-purple-500/40" },
                    { icon: "🌱", text: "Learning-first and growth-oriented mindset", colorClass: "border-cyan-500/20 hover:border-cyan-500/40" },
                    { icon: "⚖️", text: "Ethical representation", colorClass: "border-pink-500/20 hover:border-pink-500/40" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`glass rounded-xl p-6 border ${item.colorClass} transition-all hover:scale-105`}
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Section 4: Code of Conduct */}
            <ScrollReveal direction="up" delay={300}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">4. Code of Conduct</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* 4.1 Professional Conduct */}
                  <div className="glass rounded-xl p-6 border border-green-500/20">
                    <h3 className="text-lg font-semibold text-green-300 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      4.1 Professional Conduct
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">Participants must:</p>
                    <ul className="space-y-2">
                      {[
                        "Represent professionally at all times",
                        "Communicate respectfully",
                        "Follow approved channels",
                        "Respect time commitments",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4.2 Ethical Behavior */}
                  <div className="glass rounded-xl p-6 border border-red-500/20">
                    <h3 className="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      4.2 Ethical Behavior
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">Participants must NOT:</p>
                    <ul className="space-y-2">
                      {[
                        "Engage in fraud or misrepresentation",
                        "Use initiative for personal gain",
                        "Misuse authority or position",
                        "Accept unauthorized funds",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4.3 Inclusivity & Safety */}
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      4.3 Inclusivity & Safety
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">Participants must:</p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Promote inclusive participation",
                        "Maintain safe environment",
                        "Respect differing opinions",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-300 text-xs font-semibold">Zero tolerance for harassment, discrimination, or abuse</p>
                    </div>
                  </div>

                  {/* 4.4 Digital & Media */}
                  <div className="glass rounded-xl p-6 border border-cyan-500/20">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      4.4 Digital & Media Conduct
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm">Must follow branding guidelines and NOT:</p>
                    <ul className="space-y-2">
                      {[
                        "Speak without authorization",
                        "Share confidential information",
                        "Use platforms for personal agendas",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4.5 Financial Integrity */}
                  <div className="glass rounded-xl p-6 border border-yellow-500/20 md:col-span-2">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      4.5 Financial & Resource Integrity
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-300 mb-3 text-sm">Participants must:</p>
                        <ul className="space-y-2">
                          {[
                            "Handle resources responsibly",
                            "Seek prior approval for financial activity",
                            "Maintain proper documentation",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-300 text-sm">
                          <AlertCircle className="w-4 h-4 inline mr-2" />
                          Any misuse of funds constitutes serious misconduct.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 5: Confidentiality */}
            <ScrollReveal direction="up" delay={350}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-8 h-8 text-blue-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">5. Confidentiality & Data Protection</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6 border border-blue-500/20">
                    <h3 className="text-lg font-semibold text-blue-300 mb-4">Participants must:</h3>
                    <ul className="space-y-3">
                      {[
                        "Protect personal data of students and partners",
                        "Not share internal documents without permission",
                        "Follow data protection and privacy laws",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Lock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-4">DEV Community Nepal retains rights over:</h3>
                    <p className="text-gray-300">
                      Reports, data, media, photographs, videos, and documentation generated under the initiative
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 6: Conflict of Interest */}
            <ScrollReveal direction="up" delay={400}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">6. Conflict of Interest</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-lg font-semibold text-orange-300 mb-4">Participants must disclose:</h3>
                    <ul className="space-y-3">
                      {[
                        "Personal, academic, or financial interests",
                        "Affiliations that could create bias",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-6 border border-orange-500/20">
                    <p className="text-gray-300">
                      DEV Community Nepal reserves the right to manage or restrict participation in cases of conflict of interest.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 7: Review & Corrective Mechanism */}
            <ScrollReveal direction="up" delay={450}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">7. Review & Corrective Mechanism</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Designed to ensure fairness, learning, accountability, and institutional protection while maintaining discipline and credibility.
                </p>

                {/* 7.1 Principles */}
                <div className="glass rounded-xl p-6 mb-6 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-purple-300 mb-4">7.1 Principles Governing Review</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Fairness and natural justice",
                      "Confidentiality and dignity",
                      "Proportionality of action",
                      "Opportunity for explanation",
                      "Protection of brand integrity",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7.2 Grounds */}
                <div className="glass rounded-xl p-6 mb-6 border border-red-500/20">
                  <h3 className="text-lg font-semibold text-red-300 mb-4">7.2 Grounds for Initiating a Review</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Repeated unresponsiveness",
                      "Failure to attend mandatory events",
                      "Failure to meet responsibilities",
                      "Misrepresentation",
                      "Breach of Code of Conduct",
                      "Misuse of authority",
                      "Harassment or discrimination",
                      "Financial irregularities",
                      "Reputational or legal risk",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7.3 Levels */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">7.3 Levels of Review & Corrective Action</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        level: "Level 1",
                        title: "Informal Review & Counseling",
                        borderClass: "border-green-500/20",
                        textClass: "text-green-300",
                        dotClass: "bg-green-400",
                        items: ["Minor issues", "First-time lapses", "Learning challenges", "No formal record"],
                      },
                      {
                        level: "Level 2",
                        title: "Formal Written Warning",
                        borderClass: "border-yellow-500/20",
                        textClass: "text-yellow-300",
                        dotClass: "bg-yellow-400",
                        items: ["Persistent issues", "Documented concerns", "Improvement timeline", "Recorded internally"],
                      },
                      {
                        level: "Level 3",
                        title: "Probation or Role Adjustment",
                        borderClass: "border-orange-500/20",
                        textClass: "text-orange-300",
                        dotClass: "bg-orange-400",
                        items: ["Temporary status", "Reduced responsibilities", "Mandatory supervision", "Defined probation period"],
                      },
                      {
                        level: "Level 4",
                        title: "Final Review & Disciplinary Action",
                        borderClass: "border-red-500/20",
                        textClass: "text-red-300",
                        dotClass: "bg-red-400",
                        items: ["Central Committee review", "Suspension or removal", "Final and binding decision"],
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`glass rounded-xl p-6 border ${item.borderClass}`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`${item.textClass} font-bold`}>{item.level}</span>
                          <span className="text-white font-semibold">{item.title}</span>
                        </div>
                        <ul className="space-y-2">
                          {item.items.map((listItem, j) => (
                            <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                              <div className={`w-1.5 h-1.5 ${item.dotClass} rounded-full mt-1.5 flex-shrink-0`} />
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7.4 Emergency Review */}
                <div className="glass rounded-xl p-6 border border-red-500/30 bg-red-500/5">
                  <h3 className="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    7.4 Emergency Review
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Immediate review without intermediate steps for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Sexual misconduct",
                      "Physical or verbal abuse",
                      "Financial fraud",
                      "Serious legal threats",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 8: Replacement Mechanism */}
            <ScrollReveal direction="up" delay={500}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">8. Replacement Mechanism</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Ensures continuity and stability while safeguarding institutional integrity. No role is permanent or guaranteed.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6 border border-cyan-500/20">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-4">8.1 Grounds for Replacement</h3>
                    <ul className="space-y-2">
                      {[
                        "Voluntary resignation",
                        "Inability to continue",
                        "Persistent inactivity",
                        "Repeated breaches",
                        "Serious violations",
                        "Loss of trust",
                        "Strategic restructuring",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-4">8.2 Authority & Process</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-300 text-sm">
                        <Gavel className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>DEV Community Nepal holds ultimate authority</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300 text-sm">
                        <Users className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Central Committee may recommend replacements</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>All final decisions rest with DEV Community Nepal</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 9: Resignation Policy */}
            <ScrollReveal direction="up" delay={550}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileX className="w-8 h-8 text-pink-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">9. Resignation Policy</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Structured process for voluntary withdrawal ensuring continuity, accountability, and stakeholder protection.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-lg font-semibold text-pink-300 mb-3">9.1 Right to Resign</h3>
                    <p className="text-gray-300 text-sm">All participants have the right to resign at any time with responsible exit expected.</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-lg font-semibold text-pink-300 mb-3">9.2 Notice Period</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Standard: 14 days</li>
                      <li>• Leadership: 30 days</li>
                      <li>• Immediate in exceptional cases</li>
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-lg font-semibold text-pink-300 mb-3">9.3 Procedure</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Written resignation</li>
                      <li>• State last working date</li>
                      <li>• Cooperate in handover</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 10: Legal Safeguards */}
            <ScrollReveal direction="up" delay={600}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">10. Legal Safeguards & Liability Limitation</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "10.1 Non-Employment Status",
                      items: ["Voluntary and unpaid", "No employer-employee relationship", "No entitlement to wages or benefits"],
                    },
                    {
                      title: "10.2 Limitation of Liability",
                      items: ["Not liable for personal outcomes", "Not liable for loss of opportunity", "Participants act at own discretion"],
                    },
                    {
                      title: "10.3 Indemnification",
                      items: ["Against misuse of authority", "Against unauthorized actions", "Against policy breaches"],
                    },
                    {
                      title: "10.4 Governing Law",
                      items: ["Governed by laws of Nepal", "Jurisdiction of Nepalese courts"],
                    },
                  ].map((section, i) => (
                    <div key={i} className="glass rounded-xl p-6 border border-yellow-500/20">
                      <h3 className="text-lg font-semibold text-yellow-300 mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                            <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Section 11: Amendments */}
            <ScrollReveal direction="up" delay={650}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">11. Amendments & Authority</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This policy is a living governance document and may evolve as Project 100 Minds grows.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">11.1 Amendment Authority</h3>
                    <p className="text-gray-300 text-sm">DEV Community Nepal retains exclusive authority to amend this policy.</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">11.2 Communication</h3>
                    <p className="text-gray-300 text-sm">Updated versions communicated through official channels.</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">11.3 Supremacy</h3>
                    <p className="text-gray-300 text-sm">This policy prevails over other documents.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 12: Acceptance */}
            <ScrollReveal direction="up" delay={700}>
              <div className="glass rounded-2xl p-8 md:p-12 border border-green-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">12. Acceptance & Acknowledgment</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  By accepting a role in Project 100 Minds, participants acknowledge that they:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    "Have read and understood this document",
                    "Agree to comply fully with its terms",
                    "Accept the authority of DEV Community Nepal",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 glass rounded-lg border border-green-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Failure to comply may result in corrective action or removal.
                  </p>
                </div>
                <p className="text-gray-400 text-sm mt-6 italic text-center">
                  This document is issued under the authority of DEV Community Nepal and serves as the foundational governance and conduct framework for Project 100 Minds | Cohort 2025 (First Cohort).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
