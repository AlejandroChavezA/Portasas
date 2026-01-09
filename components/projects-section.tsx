"use client"

import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Nexus",
    description:
      "A knowledge management system that helps teams organize, connect, and discover information naturally.",
    problem: "Teams struggle to find and connect scattered information across multiple tools.",
    solution: "An AI-powered graph database with intuitive visual navigation.",
    stack: ["TypeScript", "React", "Neo4j", "OpenAI"],
    year: "2024",
  },
  {
    title: "Lumina",
    description: "Design system and component library built for speed and accessibility.",
    problem: "Existing design systems sacrifice performance for visual fidelity.",
    solution: "Zero-runtime CSS with accessible primitives and smooth animations.",
    stack: ["React", "CSS", "Radix UI", "Storybook"],
    year: "2024",
  },
  {
    title: "Chronicle",
    description: "A personal journaling app that uses AI to surface patterns and insights over time.",
    problem: "Traditional journals are write-only—insights get lost in pages.",
    solution: "Semantic search and pattern recognition across journal entries.",
    stack: ["Next.js", "Supabase", "pgvector", "Claude"],
    year: "2023",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">002</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Selected Work</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group p-8 bg-card border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                {/* Left column */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-light group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{project.year}</p>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-muted-foreground/60 uppercase tracking-wider text-xs">Problem</p>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground/60 uppercase tracking-wider text-xs">Solution</p>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative line on hover */}
              <div className="mt-8 h-px w-0 group-hover:w-full bg-gradient-to-r from-primary/50 to-transparent transition-all duration-700" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
