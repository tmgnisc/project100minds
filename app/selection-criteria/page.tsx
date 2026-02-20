import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SpaceScene } from "@/components/space-scene"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Target,
  CheckCircle,
  XCircle,
  Users,
  Award,
  Brain,
  Shield,
  Gavel,
  Globe,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Info,
} from "lucide-react"

export default function SelectionCriteria() {
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
                  <span className="text-sm text-purple-300">Selection Process</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-white">Selection Philosophy & </span>
                  <span className="text-gradient">Criteria</span>
                </h1>
                <p className="text-gray-400 text-lg">Project 100 Minds | Empowering Students with Skills, Technology, and Mindset</p>
                <p className="text-gray-500 text-sm mt-2">An Initiative of DEV Community Nepal</p>
              </div>
            </ScrollReveal>

            {/* Section 1: Selection Philosophy */}
            <ScrollReveal direction="up" delay={100}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">1. Selection Philosophy (Founder's Intent)</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Project 100 Minds follows a merit-based, values-driven, future-oriented selection philosophy.
                </p>
                <div className="glass rounded-xl p-6 mb-6 border border-purple-500/20">
                  <p className="text-gray-300 mb-4">
                    The initiative does not aim to recruit the most popular, loudest, or politically connected individuals. Instead, it seeks to identify and empower young leaders with the mindset, integrity, and potential to shape the future of Nepal.
                  </p>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <p className="text-purple-300 font-semibold italic text-lg">
                      "Leadership is not about visibility today, but responsibility for tomorrow."
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 font-semibold">Therefore, selection is guided by:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: "🎯", text: "Leadership potential over titles", borderClass: "border-purple-500/20 hover:border-purple-500/40" },
                    { icon: "🌱", text: "Growth mindset over past achievements", borderClass: "border-cyan-500/20 hover:border-cyan-500/40" },
                    { icon: "⚖️", text: "Integrity over influence", borderClass: "border-green-500/20 hover:border-green-500/40" },
                    { icon: "💪", text: "Commitment over popularity", borderClass: "border-pink-500/20 hover:border-pink-500/40" },
                    { icon: "👁️", text: "Vision alignment over personal agendas", borderClass: "border-yellow-500/20 hover:border-yellow-500/40" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`glass rounded-xl p-5 border ${item.borderClass} transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Section 2: What We Are Selecting For */}
            <ScrollReveal direction="up" delay={150}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">2. What We Are Intentionally Selecting For</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Project 100 Minds prioritizes individuals who demonstrate:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: TrendingUp, text: "A growth and learning mentality", color: "green" },
                    { icon: Shield, text: "Willingness to take responsibility and ownership", color: "green" },
                    { icon: Users, text: "Ability to work across disciplines and backgrounds", color: "green" },
                    { icon: Gavel, text: "Respect for structure, governance, and accountability", color: "green" },
                    { icon: Target, text: "Long-term thinking beyond personal gain", color: "green" },
                    { icon: Brain, text: "Openness to feedback, mentoring, and continuous improvement", color: "green" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="glass rounded-xl p-5 border border-green-500/20 hover:border-green-500/40 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-300 text-sm">
                    <Lightbulb className="w-4 h-4 inline mr-2" />
                    This initiative values future leadership capacity, not just current competence.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 3: What We Are Avoiding */}
            <ScrollReveal direction="up" delay={200}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8 border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">3. What We Are Explicitly Avoiding</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To protect the integrity of the initiative, the following are disqualifying factors:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: "🚫", text: "Political affiliation, influence, or agenda (student or national politics)", color: "red" },
                    { icon: "👥", text: "Popularity-based selection (followers, fame, or social visibility alone)", color: "red" },
                    { icon: "⚠️", text: "Entitlement mentality ('I deserve this position')", color: "red" },
                    { icon: "❌", text: "Misalignment with DEV Community Nepal's mission and values", color: "red" },
                    { icon: "🚨", text: "History of unethical conduct, misuse of platforms, or divisive behavior", color: "red" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="glass rounded-xl p-5 border border-red-500/20 hover:border-red-500/40 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-300 font-semibold">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Project 100 Minds is strictly non-political, non-partisan, and non-ideological.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 4: General Eligibility */}
            <ScrollReveal direction="up" delay={250}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">4. General Eligibility Criteria (All Roles)</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">Applicants must demonstrate:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Active student status (any academic discipline)",
                    "Willingness to commit time and effort responsibly",
                    "Openness to learning, collaboration, and accountability",
                    "Respect for diversity, inclusivity, and ethical conduct",
                    "Alignment with the vision of DEV Community Nepal",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass rounded-lg border border-cyan-500/20">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-6 border border-yellow-500/20">
                    <p className="text-yellow-300 font-semibold mb-2">Preferred but not mandatory:</p>
                    <p className="text-gray-300 text-sm">Prior experience is preferred but not mandatory.</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-green-500/20">
                    <p className="text-green-300 font-semibold mb-2">What matters most:</p>
                    <p className="text-gray-300 text-sm">Potential and intent matter more than credentials.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 5: Provincial Leadership Criteria */}
            <ScrollReveal direction="up" delay={300}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">5. Selection Criteria: Provincial Leadership</span>
                  </h2>
                </div>
                <p className="text-gray-400 text-sm mb-6">(Province Lead & Province Co-Lead)</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Provincial Leadership represents the highest execution authority at the regional level. These roles directly shape culture, quality, and impact across colleges.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Mandatory Criteria</h3>
                  <p className="text-gray-300 mb-4">Applicants must demonstrate:</p>
                  
                  <div className="space-y-4">
                    {/* 1. Leadership Capacity */}
                    <div className="glass rounded-xl p-6 border border-purple-500/20">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        1. Leadership Capacity
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Ability to lead teams, not command them</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Decision-making capability under uncertainty</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Emotional intelligence and conflict-handling maturity</span>
                        </li>
                      </ul>
                    </div>

                    {/* 2. Organizational Skills */}
                    <div className="glass rounded-xl p-6 border border-cyan-500/20">
                      <h4 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        2. Organizational & Execution Skills
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Planning, coordination, and follow-through ability</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Capacity to manage multiple colleges and stakeholders</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Comfort with documentation, reporting, and structure</span>
                        </li>
                      </ul>
                    </div>

                    {/* 3. Growth Mindset */}
                    <div className="glass rounded-xl p-6 border border-green-500/20">
                      <h4 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        3. Growth & Nation-Building Mindset
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Desire to contribute beyond personal benefit</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Long-term perspective on youth leadership in Nepal</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Openness to mentorship and continuous improvement</span>
                        </li>
                      </ul>
                    </div>

                    {/* 4. Vision Alignment */}
                    <div className="glass rounded-xl p-6 border border-pink-500/20">
                      <h4 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        4. Vision Alignment
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Clear understanding of Project 100 Minds and DEV Community Nepal</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Commitment to inclusivity across academic disciplines</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Respect for governance, systems, and accountability</span>
                        </li>
                      </ul>
                    </div>

                    {/* 5. Ethical Independence */}
                    <div className="glass rounded-xl p-6 border border-red-500/20">
                      <h4 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        5. Ethical Independence
                      </h4>
                      <ul className="space-y-2 ml-7">
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>No political involvement, affiliation, or influence</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>No use of the role for personal, institutional, or ideological agendas</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                          <span>Ability to remain neutral, fair, and inclusive</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strongly Preferred */}
                <div className="glass rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-4">Strongly Preferred (Not Mandatory)</h3>
                  <p className="text-gray-300 mb-3 text-sm">Prior experience in:</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Student organizations",
                      "Community initiatives",
                      "Volunteering or leadership roles",
                      "Organizing events, workshops, or campaigns",
                      "Demonstrated initiative outside formal roles",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 6: Selection Methodology */}
            <ScrollReveal direction="up" delay={350}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">6. Selection Methodology (Internal)</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Selection will follow a multi-layered evaluation approach, not a single metric.
                </p>
                <div className="glass rounded-xl p-6 border border-purple-500/20 mb-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-4">Evaluation Factors</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Written application (clarity, intent, alignment)",
                      "Leadership scenario responses",
                      "Problem-solving and judgment assessment",
                      "Communication ability (clarity and empathy)",
                      "Interview (where applicable)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    No single factor guarantees selection.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 7: Final Selection Authority */}
            <ScrollReveal direction="up" delay={400}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gavel className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">7. Final Selection Authority</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6 border border-cyan-500/20">
                    <p className="text-gray-300 mb-4">
                      Final selection authority rests with <span className="text-cyan-300 font-semibold">DEV Community Nepal</span>
                    </p>
                    <p className="text-gray-300 text-sm">Recommendations may be provided by review panels</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-4">Decisions are based on:</h3>
                    <ul className="space-y-2">
                      {[
                        "Merit",
                        "Balance",
                        "Regional representation",
                        "Cultural fit",
                        "Long-term sustainability",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    All decisions are final and non-negotiable.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 8: Diversity & Balance */}
            <ScrollReveal direction="up" delay={450}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">8. Diversity & Balance Commitment</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Project 100 Minds aims to maintain balance across:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: "📚", text: "Academic disciplines", borderClass: "border-green-500/20 hover:border-green-500/40" },
                    { icon: "🗺️", text: "Geographic regions", borderClass: "border-cyan-500/20 hover:border-cyan-500/40" },
                    { icon: "👥", text: "Gender and backgrounds", borderClass: "border-purple-500/20 hover:border-purple-500/40" },
                    { icon: "📊", text: "Experience levels", borderClass: "border-pink-500/20 hover:border-pink-500/40" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`glass rounded-xl p-6 border ${item.borderClass} transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-gray-300 font-semibold">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-300 text-sm">
                    <Info className="w-4 h-4 inline mr-2" />
                    This is not quota-based, but equity-conscious.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 9: Founder's Safeguard Clause */}
            <ScrollReveal direction="up" delay={500}>
              <div className="glass rounded-2xl p-8 md:p-12 border border-yellow-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">9. Founder's Safeguard Clause</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  DEV Community Nepal reserves the right to:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Reject any application without disclosure of internal evaluation details",
                    "Modify selection criteria to protect initiative integrity",
                    "Remove individuals later if misrepresentation is discovered",
                  ].map((item, index) => (
                    <div key={index} className="glass rounded-xl p-5 border border-yellow-500/20">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
