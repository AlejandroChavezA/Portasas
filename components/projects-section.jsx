import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with admin dashboard, payment integration, and inventory management.",
    image: "/placeholder.svg?height=200&width=300&text=E-Commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, notifications, and productivity analytics.",
    image: "/placeholder.svg?height=200&width=300&text=Task+App",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Creative Portfolio",
    description: "Responsive portfolio website with smooth animations and SEO optimization for a graphic designer.",
    image: "/placeholder.svg?height=200&width=300&text=Portfolio",
    technologies: ["Vue.js", "Nuxt.js", "GSAP", "Netlify"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// Selected works"}</div>
          <h2 className="text-5xl serif-neon-display mb-6 text-neon-cyan neon-text">Featured Projects</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-sans">
            A showcase of recent work that demonstrates my skills and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="neon-card h-full overflow-hidden hover:shadow-neon-cyan transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-vintage-neon text-dark-bg font-sans">Featured</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="serif-neon text-neon-cyan neon-text">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="mb-4 font-sans text-white/70">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-neon-orange/20 text-neon-orange font-sans">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild size="sm" className="vintage-neon-border bg-neon-cyan text-dark-bg hover:bg-neon-pink">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-vintage-neon text-vintage-neon hover:bg-vintage-neon hover:text-dark-bg bg-transparent"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
