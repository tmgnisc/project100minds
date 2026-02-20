import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SpaceScene } from "@/components/space-scene"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Users, Award, UserCheck, Clock, FileText, CheckCircle, AlertCircle } from "lucide-react"

export default function ApplicationCategories() {
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
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-300">Application Information</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-white">Application </span>
                  <span className="text-gradient">Categories</span>
                </h1>
                <p className="text-gray-400 text-lg">Project 100 Minds | Empowering Students with Skills, Technology, and Mindset</p>
                <p className="text-gray-500 text-sm mt-2">An Initiative of DEV Community Nepal</p>
              </div>
            </ScrollReveal>

            {/* Section 1: Application Categories */}
            <ScrollReveal direction="up" delay={100}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">1. Application Categories</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Applications will be invited under the following roles:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                    <Award className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Province Lead & Province Co-Lead</h3>
                    <p className="text-gray-400 text-sm">Leadership roles at the provincial level</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:scale-105">
                    <UserCheck className="w-10 h-10 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">College Ambassador</h3>
                    <p className="text-gray-400 text-sm">Primary representative at college level</p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all hover:scale-105">
                    <Users className="w-10 h-10 text-pink-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Deputy College Ambassador</h3>
                    <p className="text-gray-400 text-sm">Supporting role at college level</p>
                  </div>
                </div>
                <p className="text-gray-300 mt-6 leading-relaxed">
                  Each role has separate eligibility criteria, expectations, and evaluation standards, while sharing a common governance and ethical framework.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 2: Common Application Requirements */}
            <ScrollReveal direction="up" delay={150}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">2. Common Application Requirements</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">All applicants, regardless of role, must:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">Be a currently enrolled student or recent graduate (as defined per cohort)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">Be willing to commit time and effort as outlined</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">Agree to abide by Code of Conduct, Governance and reporting policies, Non-political and ethical engagement rules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">Complete the official application form in full</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">Provide accurate and truthful information</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Providing false or misleading information is grounds for immediate disqualification or removal.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 3: Role-Specific Eligibility Criteria */}
            <ScrollReveal direction="up" delay={200}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  <span className="text-gradient">3. Role-Specific Eligibility Criteria</span>
                </h2>
                
                <div className="space-y-8">
                  {/* Province Lead & Co-Lead */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Award className="w-6 h-6 text-purple-400" />
                      A. Province Lead & Province Co-Lead
                    </h3>
                    <div className="glass rounded-xl p-6 mb-4">
                      <h4 className="text-lg font-semibold text-purple-300 mb-4">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Demonstrated leadership experience (student organizations, communities, projects, initiatives)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Strong organizational and coordination skills</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Clear alignment with the vision and values of Project 100 Minds</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Growth-oriented mindset and long-term thinking</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Ability to manage responsibility at scale</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">No active political affiliation or political agenda</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Selection is merit-based, not popularity-based</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Academic discipline is not restricted</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* College Ambassador */}
                  <div className="border-l-4 border-cyan-500 pl-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                      <UserCheck className="w-6 h-6 text-cyan-400" />
                      B. College Ambassador
                    </h3>
                    <div className="glass rounded-xl p-6 mb-4">
                      <h4 className="text-lg font-semibold text-cyan-300 mb-4">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Currently enrolled student of the respective college</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Demonstrated initiative, responsibility, and communication skills</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Interest in leadership, community building, and execution</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Ability to coordinate events and mobilize students</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Willingness to act as an official representative of the initiative</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">No political affiliation or misuse of the role for personal agendas</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Deputy College Ambassador */}
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-pink-400" />
                      C. Deputy College Ambassador
                    </h3>
                    <div className="glass rounded-xl p-6 mb-4">
                      <h4 className="text-lg font-semibold text-pink-300 mb-4">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Currently enrolled student of the respective college</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Willingness to support execution and coordination</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Reliability and availability</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Interest in learning leadership through hands-on experience</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300">Alignment with initiative values</span>
                        </li>
                      </ul>
                      <p className="text-gray-300 mt-4 italic">
                        Deputy Ambassadors are evaluated for support capability and growth potential, not seniority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 4: Time Commitment */}
            <ScrollReveal direction="up" delay={250}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">4. Time Commitment Disclosure (Mandatory)</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  All applicants must explicitly acknowledge the expected time commitment:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6 border border-yellow-500/20">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-4">Standard Time Commitment</h3>
                    <p className="text-2xl font-bold text-white mb-2">~5 hours/week</p>
                    <p className="text-gray-400 text-sm mb-4">Minimum time commitment</p>
                    <p className="text-gray-300 text-sm mb-2">Time includes:</p>
                    <ul className="space-y-1 text-gray-300 text-sm ml-4">
                      <li>• Trainings and orientations</li>
                      <li>• Internal planning and coordination</li>
                      <li>• Event execution and presence</li>
                      <li>• Reporting and reviews</li>
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-6 border border-red-500/20">
                    <h3 className="text-lg font-semibold text-red-300 mb-4">Mandatory Attendance</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Presence during assigned events, workshops, trainings, and key sessions is compulsory, except in genuine and communicated circumstances.
                    </p>
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-300 text-sm">
                        <AlertCircle className="w-4 h-4 inline mr-2" />
                        Applicants who cannot commit the time are advised not to apply.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 5: Code of Conduct & Legal */}
            <ScrollReveal direction="up" delay={300}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">5. Code of Conduct & Legal Acknowledgement</span>
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  All applicants must digitally or physically agree to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 glass rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Code of Conduct</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 glass rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Conflict Resolution Policy</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 glass rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Exit & Replacement Policy</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 glass rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Liability limitation and disclaimer</span>
                  </div>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    Acceptance is mandatory and legally binding within the scope of the initiative. Failure to adhere to these policies may result in corrective action, suspension, or replacement without entitlement claims.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 6: Application Form Structure */}
            <ScrollReveal direction="up" delay={350}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <span className="text-gradient">6. Application Form Structure (Standard)</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Each application form should include the following sections:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Basic Information", items: ["Name, contact details", "Institution / College", "Academic background"] },
                    { title: "Role Selection", items: ["Role applied for", "Preferred location (if applicable)"] },
                    { title: "Experience & Motivation", items: ["Leadership or coordination experience", "Motivation to join Project 100 Minds", "Understanding of the initiative"] },
                    { title: "Availability & Commitment", items: ["Time availability confirmation", "Competing commitments (if any)"] },
                    { title: "Scenario-Based Questions", items: ["Leadership challenges", "Conflict handling", "Responsibility management"] },
                    { title: "Declarations & Consent", items: ["Code of Conduct acceptance", "Non-political declaration", "Accuracy declaration"] },
                  ].map((section, index) => (
                    <div key={index} className="glass rounded-xl p-5 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                      <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Section 7: Internal Scoring Rubric */}
            <ScrollReveal direction="up" delay={375}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8 border border-red-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    <span className="text-gradient">7. Internal Scoring Rubric (Confidential)</span>
                  </h2>
                </div>
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg mb-6">
                  <p className="text-red-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-2" />
                    This rubric is strictly internal and must not be shared publicly.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Province Lead / Co-Lead */}
                  <div className="glass rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-purple-300 mb-4">For Province Lead / Co-Lead</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                        <span className="text-gray-300">Leadership & initiative</span>
                        <span className="text-purple-300 font-semibold">30%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                        <span className="text-gray-300">Vision alignment & mindset</span>
                        <span className="text-purple-300 font-semibold">25%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                        <span className="text-gray-300">Organizational & communication skills</span>
                        <span className="text-purple-300 font-semibold">20%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                        <span className="text-gray-300">Problem-solving & responsibility handling</span>
                        <span className="text-purple-300 font-semibold">15%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                        <span className="text-gray-300">Availability & commitment clarity</span>
                        <span className="text-purple-300 font-semibold">10%</span>
                      </div>
                    </div>
                  </div>

                  {/* College Ambassador */}
                  <div className="glass rounded-xl p-6 border border-cyan-500/20">
                    <h3 className="text-lg font-semibold text-cyan-300 mb-4">For College Ambassador</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg">
                        <span className="text-gray-300">Initiative & ownership mindset</span>
                        <span className="text-cyan-300 font-semibold">30%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg">
                        <span className="text-gray-300">Communication & coordination skills</span>
                        <span className="text-cyan-300 font-semibold">25%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg">
                        <span className="text-gray-300">Reliability & availability</span>
                        <span className="text-cyan-300 font-semibold">20%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg">
                        <span className="text-gray-300">Vision alignment</span>
                        <span className="text-cyan-300 font-semibold">15%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg">
                        <span className="text-gray-300">Growth potential</span>
                        <span className="text-cyan-300 font-semibold">10%</span>
                      </div>
                    </div>
                  </div>

                  {/* Deputy College Ambassador */}
                  <div className="glass rounded-xl p-6 border border-pink-500/20">
                    <h3 className="text-lg font-semibold text-pink-300 mb-4">For Deputy College Ambassador</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg">
                        <span className="text-gray-300">Reliability & support orientation</span>
                        <span className="text-pink-300 font-semibold">35%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg">
                        <span className="text-gray-300">Willingness to learn & grow</span>
                        <span className="text-pink-300 font-semibold">25%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg">
                        <span className="text-gray-300">Availability & consistency</span>
                        <span className="text-pink-300 font-semibold">20%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg">
                        <span className="text-gray-300">Vision alignment</span>
                        <span className="text-pink-300 font-semibold">10%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-pink-500/10 rounded-lg">
                        <span className="text-gray-300">Basic communication skills</span>
                        <span className="text-pink-300 font-semibold">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 8: Selection Process */}
            <ScrollReveal direction="up" delay={400}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <span className="text-gradient">8. Selection Process (Standardized)</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Application screening",
                    "Shortlisting based on rubric",
                    "Interview or interaction (as required)",
                    "Final selection approval",
                    "Formal onboarding & sign-off",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4 glass rounded-lg p-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mt-6">
                  DEV Community Nepal retains final selection authority.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 8: Non-Guarantee Clause */}
            <ScrollReveal direction="up" delay={450}>
              <div className="glass rounded-2xl p-8 md:p-12 mb-8 border border-yellow-500/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <span className="text-gradient">9. Non-Guarantee Clause</span>
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">Selection into Project 100 Minds:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Is not employment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Does not guarantee jobs, internships, or financial compensation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Is a learning and leadership opportunity</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 9: Applicability */}
            <ScrollReveal direction="up" delay={500}>
              <div className="glass rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <span className="text-gradient">10. Applicability Across Cohorts</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  This Application & Selection Framework:
                </p>
                <ul className="space-y-3 text-gray-300 ml-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Applies to all future cohorts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>May be refined based on learning outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Maintains consistent governance and ethical standards across years and provinces</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Summary */}
            <ScrollReveal direction="up" delay={550}>
              <div className="mt-8 glass rounded-2xl p-8 md:p-12 border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">Summary (For Governance Records)</h3>
                <p className="text-gray-300 leading-relaxed">
                  This framework ensures that all leadership and representative roles within Project 100 Minds are filled through a transparent, merit-based, and accountable selection process, protecting both participants and DEV Community Nepal while enabling sustainable growth.
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
