"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Greeting line */}
            <div className="space-y-2">
              <p className="text-sm font-mono text-primary tracking-widest uppercase">
                ¡Hola! Soy
              </p>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <span className="block">JOSÉ ALEJANDRO</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CHÁVEZ AGUILAR
              </span>
            </h1>

            {/* Role */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-medium">
                Frontend Developer
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 text-sm font-medium">
                React Expert
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full border border-border text-sm font-medium">
                Full Stack
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Creo experiencias web excepcionales con React, Next.js y arquitectura escalable. 
              Me apasiona transformar ideas en productos digitales que impactan usuarios reales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-500"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver mi trabajo
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base"
                asChild
              >
                <a href="mailto:alex102add@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contactar
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://linkedin.com/in/jose-alejandro-chavez-aguilar" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl scale-110"></div>
              
              {/* Image container */}
              <div className="relative bg-card rounded-2xl p-1 border border-border">
                <div className="relative overflow-hidden rounded-xl bg-muted/20">
                  {/* Placeholder for your image */}
                  <div className="aspect-square w-full max-w-lg mx-auto flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">JAC</span>
                      </div>
                      <p className="text-muted-foreground">Tu foto aquí</p>
                      <p className="text-sm text-muted-foreground/70 mt-2">
                        Reemplaza con tu imagen personal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg border border-border shadow-lg">
                <span className="text-sm font-semibold">3+ años</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg border border-border shadow-lg">
                <span className="text-sm font-semibold">15+ proyectos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}