
"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      {/* Subtle decorative line */}
      <div className="absolute top-1/4 left-8 w-px h-24 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent hidden md:block" />

      <div className="max-w-3xl text-center space-y-8">
        {/* Small irregular accent line */}
        <div className="flex justify-center mb-6">
          <svg width="60" height="8" viewBox="0 0 60 8" className="text-primary">
            <path
              d="M0 4 Q15 0, 30 4 T60 4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="animate-[dash_3s_ease-in-out_infinite]"
            />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">Alex Chen</h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light">Developer & Designer</p>

        <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
          Building thoughtful digital experiences where form meets function.
        </p>

        <div className="pt-8">
          <Button
            size="lg"
            className="group px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-500"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work
            <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
          </Button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
