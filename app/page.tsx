"use client"

import { Hammer, Paintbrush2, Code, Music, Printer, Video, Users, Lightbulb, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/animated-card"
import { FadeIn } from "@/components/fade-in"
import { motion } from "framer-motion"
import { useRef } from "react"
import type React from "react" // Import React

export default function Home() {
  const disciplinesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <motion.a
          href="/"
          className="text-[#8B7355] text-2xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sandbox
        </motion.a>
        <div className="hidden md:flex gap-8">
          {[
            { name: "About", onClick: () => scrollToRef(disciplinesRef) },
            { name: "Contact", onClick: () => scrollToRef(contactRef) },
          ].map((item, i) => (
            <motion.button
              key={item.name}
              onClick={item.onClick}
              className="text-[#8B7355] hover:text-[#6B5744]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-[#8B7355] text-5xl md:text-6xl font-bold mb-6">
              A Creative Space for Berkeley Builders
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#8B7355]/80 text-xl mb-8">
              Join a community of creators, innovators, and dreamers in UC Berkeley's premier co-working class. Sandbox
              is a 2 unit course at UC Berkeley held at the CITRIS Invention Lab. Meetings are 5-7pm every Thursday. Build your
              projects alongside like-minded individuals in a supportive environment.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#8B7355] hover:bg-[#6B5744] text-white px-8" asChild>
                <a href="https://app.youform.com/forms/3ckgh1hs" target="_blank" rel="noopener noreferrer">
                  Join Sandbox <span className="ml-2">→</span>
                </a>
              </Button>
              <Button className="bg-white border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-8" asChild>
                <a href="https://decal.studentorg.berkeley.edu/courses/7875" target="_blank" rel="noopener noreferrer">
                  View Course <span className="ml-2">→</span>
                </a>
              </Button>
            </div>
            <p className="text-[#8B7355]/60 mt-8 text-sm">
              Built by the founders of{" "}
              <a
                href="https://moffittstatus.live"
                className="font-bold hover:text-[#8B7355]"
                target="_blank"
                rel="noopener noreferrer"
              >
                MoffittStatus
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/berkeleydesigncollective/"
                className="font-bold hover:text-[#8B7355]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Berkeley Design Collective
              </a>
              , and more.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Disciplines Section */}
      <section ref={disciplinesRef} className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[#8B7355] text-4xl font-bold text-center mb-4">Create Across Disciplines</h2>
            <p className="text-[#8B7355]/80 text-center mb-12 max-w-3xl mx-auto">
              Sandbox provides the tools, space, and community for Berkeley students to explore various creative
              disciplines. Whether you're a beginner or expert, you'll find everything you need to bring your ideas to
              life.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Hammer, name: "Woodworking" },
              { icon: Paintbrush2, name: "Fashion Design" },
              { icon: Code, name: "Software Engineering" },
              { icon: Music, name: "Music Production" },
              { icon: Printer, name: "3D Printing" },
              { icon: Video, name: "Film" },
            ].map((discipline, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="border-[#8B7355]/10 hover:border-[#8B7355]/30 transition-colors flex items-center justify-center min-h-[200px]">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <discipline.icon className="w-12 h-12 text-[#8B7355] mb-4" />
                    <h3 className="text-[#8B7355] text-xl font-semibold">{discipline.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[#8B7355] text-4xl font-bold text-center mb-4">What Makes Sandbox Special</h2>
            <p className="text-[#8B7355]/80 text-center mb-12">
              Our unique blend of features creates the perfect environment for creativity and productivity.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative Community",
                description:
                  "Connect with fellow creators and build meaningful relationships while working on your projects.",
              },
              {
                icon: Lightbulb,
                title: "Creative Environment",
                description: "A thoughtfully designed space that inspires innovation and productivity.",
              },
              {
                icon: BookOpen,
                title: "Learning Opportunities",
                description: "Regular workshops, skill-sharing sessions, and mentorship from experienced creators.",
              },
            ].map((feature, i) => (
              <AnimatedCard key={i} className="border-[#8B7355]/10 min-h-[280px] flex">
                <div className="flex-1 flex flex-col items-center text-center justify-center p-6 h-full">
                  <feature.icon className="w-12 h-12 text-[#8B7355] mb-4 flex-shrink-0" />
                  <h3 className="text-[#8B7355] text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#8B7355]/80">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section ref={contactRef} className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-[#8B7355] text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-[#8B7355]/80 mb-8 max-w-2xl mx-auto">
              Ready to become part of Sandbox? Click below to apply and start your journey with us.
            </p>
            <Button className="bg-[#8B7355] hover:bg-[#6B5744] text-white px-8" asChild>
              <a href="https://app.youform.com/forms/3ckgh1hs" target="_blank" rel="noopener noreferrer">
                Apply Now <span className="ml-2">→</span>
              </a>
            </Button>
            <p className="text-[#8B7355]/80 mt-8">
              Questions? Email us at{" "}
              <a
                href="mailto:sandboxberkeley@gmail.com"
                className="text-[#8B7355] hover:text-[#6B5744] font-semibold"
              >
                sandboxberkeley@gmail.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

