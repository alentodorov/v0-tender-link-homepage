import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E6E3] font-light">
      {/* Subtle grain texture */}
      <div className="fixed inset-0 bg-grain opacity-[0.15] mix-blend-soft-light pointer-events-none"></div>

      {/* Header/Navigation */}
      <header className="container mx-auto py-10 px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-[-0.02em]">
            <span className="font-light">Tender</span>
            <span className="font-medium text-[#D4C19C]">Link</span>
          </div>
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="#"
              className="text-sm tracking-wide text-[#8A8A8A] hover:text-white transition-colors duration-300"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-sm tracking-wide text-[#8A8A8A] hover:text-white transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm tracking-wide text-[#8A8A8A] hover:text-white transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm tracking-wide text-[#8A8A8A] hover:text-white transition-colors duration-300"
            >
              Resources
            </Link>
          </nav>
          <div className="flex items-center space-x-8">
            <Button variant="ghost" className="hidden md:inline-flex text-[#8A8A8A] hover:text-white tracking-wide">
              Sign In
            </Button>
            <Button className="bg-transparent hover:bg-transparent text-white border border-[#D4C19C] hover:border-white transition-colors duration-300 tracking-wide px-6 py-6 h-auto rounded-none text-xs uppercase">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-8 items-center">
            <div className="md:col-span-7 md:pr-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] mb-12 text-white">
                Run every RFP in one secure, audit‑ready workspace
                <span className="text-[#D4C19C]">—</span>without the operational burden.
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 mt-16">
                <Button className="bg-transparent hover:bg-[#D4C19C]/10 text-white border border-[#D4C19C] hover:border-[#D4C19C] transition-all duration-300 px-8 py-7 h-auto rounded-none text-xs uppercase tracking-widest">
                  Get Started <ArrowRight className="ml-3 h-3 w-3" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-white/5 border border-[#333333] hover:border-[#555555] text-[#8A8A8A] hover:text-white transition-all duration-300 px-8 py-7 h-auto rounded-none text-xs uppercase tracking-widest"
                >
                  See TenderLink in Action
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-[#0E0E0E] rounded-full"></div>
                <div className="absolute inset-[3px] bg-[#111111] rounded-full border border-[#222222]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full border border-[#D4C19C]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-[#D4C19C]/10 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
                    <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-[#D4C19C]/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                    <div className="absolute top-0 left-[45%] w-2 h-2 bg-[#D4C19C] rounded-full"></div>
                    <div className="absolute top-[45%] right-0 w-2 h-2 bg-[#D4C19C]/70 rounded-full"></div>
                    <div className="absolute bottom-0 left-[25%] w-2 h-2 bg-[#D4C19C]/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 md:mt-32 max-w-3xl">
            <p className="text-lg md:text-xl font-light leading-relaxed text-[#A8A8A8] tracking-wide">
              TenderLink centralises creation, vendor collaboration and award decisions in a single timeline, delivering
              full traceability for auditors, automatic updates for vendors and zero spreadsheet chaos for you.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-[#1A1A1A]"></div>
      </div>

      {/* Why Rethink Section */}
      <section className="container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-16 md:gap-x-8">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-white">
                The status quo costs more than you think
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-20">
                <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6">
                  <div className="space-y-3">
                    <div className="text-[#D4C19C] text-sm uppercase tracking-widest font-light mb-4">Hidden cost</div>
                    <h3 className="text-xl font-light text-white tracking-tight">Manual, error‑prone steps</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Today</div>
                    <p className="text-[#A8A8A8] leading-relaxed">Copy‑pasting dates across spreadsheets and emails</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Result</div>
                    <p className="text-[#A8A8A8] leading-relaxed">Missed deadlines, version confusion</p>
                  </div>
                </div>

                <div className="h-px bg-[#1A1A1A]"></div>

                <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6">
                  <div className="space-y-3">
                    <div className="text-[#D4C19C] text-sm uppercase tracking-widest font-light mb-4">Hidden cost</div>
                    <h3 className="text-xl font-light text-white tracking-tight">No audit trail</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Today</div>
                    <p className="text-[#A8A8A8] leading-relaxed">Approvals buried in chat logs</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Result</div>
                    <p className="text-[#A8A8A8] leading-relaxed">Compliance risk and reputational damage</p>
                  </div>
                </div>

                <div className="h-px bg-[#1A1A1A]"></div>

                <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6">
                  <div className="space-y-3">
                    <div className="text-[#D4C19C] text-sm uppercase tracking-widest font-light mb-4">Hidden cost</div>
                    <h3 className="text-xl font-light text-white tracking-tight">Oversized procurement suites</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Today</div>
                    <p className="text-[#A8A8A8] leading-relaxed">3‑year contracts, month‑long onboarding</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Result</div>
                    <p className="text-[#A8A8A8] leading-relaxed">
                      Costly shelf‑ware for teams that run only a few RFPs a year
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#1A1A1A]"></div>

                <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6">
                  <div className="space-y-3">
                    <div className="text-[#D4C19C] text-sm uppercase tracking-widest font-light mb-4">Hidden cost</div>
                    <h3 className="text-xl font-light text-white tracking-tight">Single‑person teams, many hats</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Today</div>
                    <p className="text-[#A8A8A8] leading-relaxed">One buyer juggling reminders, calls, nudges</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[#8A8A8A] text-sm uppercase tracking-widest font-light mb-4">Result</div>
                    <p className="text-[#A8A8A8] leading-relaxed">Burnout and inconsistent vendor experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-[#1A1A1A]"></div>
      </div>

      {/* How TenderLink Removes the Headache */}
      <section className="container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-16 md:gap-x-8">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-white leading-tight">
                Built for small, busy procurement teams who still need enterprise‑grade oversight
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-24">
                {/* Immediate Value */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-px w-8 bg-[#D4C19C]"></div>
                    <h3 className="text-lg uppercase tracking-widest text-[#D4C19C] font-light">Immediate value</h3>
                  </div>

                  <div className="space-y-10">
                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Launch in five minutes</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">
                          Five guided steps—Create, Invite, Share, Evaluate, Award—mean zero implementation delay.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Update once, notify all</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">
                          Every change instantly syncs to every vendor; no more "latest version?" emails.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Hands‑free tracking</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">
                          Automated reminders and status dashboards let you focus on analysis, not admin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Governance & Compliance */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-px w-8 bg-[#D4C19C]"></div>
                    <h3 className="text-lg uppercase tracking-widest text-[#D4C19C] font-light">
                      Governance & compliance
                    </h3>
                  </div>

                  <div className="space-y-10">
                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Immutable audit log</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">
                          Of every action, message and attachment—exportable for auditors at a click.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Role‑based access</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">
                          Keeps sensitive data visible only to authorised reviewers until deadlines pass.
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Transparent, fair tendering</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">Builds supplier trust and withstands scrutiny.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flexible Commercial Model */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-px w-8 bg-[#D4C19C]"></div>
                    <h3 className="text-lg uppercase tracking-widest text-[#D4C19C] font-light">
                      Flexible commercial model
                    </h3>
                  </div>

                  <div className="space-y-10">
                    <div className="grid md:grid-cols-12 gap-y-4 md:gap-x-6 items-start">
                      <div className="md:col-span-4">
                        <h4 className="text-xl font-light text-white">Pay‑as‑you‑go or monthly</h4>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[#A8A8A8] leading-relaxed">
                          Use it for a single tender or make it your default workspace—no lock-in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-8 items-center">
            <div className="md:col-span-5">
              <h3 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-white leading-tight">
                Ready to streamline your RFP process?
              </h3>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button className="bg-transparent hover:bg-[#D4C19C]/10 text-white border border-[#D4C19C] hover:border-[#D4C19C] transition-all duration-300 px-6 py-7 h-auto rounded-none text-xs uppercase tracking-widest">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-white/5 border border-[#333333] hover:border-[#555555] text-[#8A8A8A] hover:text-white transition-all duration-300 px-6 py-7 h-auto rounded-none text-xs uppercase tracking-widest"
                >
                  Schedule demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-[#1A1A1A]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-[#555555]">© 2025 TenderLink. All rights reserved.</div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="text-xs text-[#555555] hover:text-[#8A8A8A] transition-colors duration-300">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-[#555555] hover:text-[#8A8A8A] transition-colors duration-300">
              Terms
            </Link>
            <Link href="#" className="text-xs text-[#555555] hover:text-[#8A8A8A] transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
