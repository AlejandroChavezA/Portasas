import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2020 - 2022",
    description:
      "Crafted responsive and accessible user interfaces for diverse clients. Collaborated closely with designers to bring creative visions to life while maintaining technical excellence.",
    technologies: ["Vue.js", "JavaScript", "Sass", "Figma", "Jest"],
  },
  {
    title: "Junior Web Developer",
    company: "StartupX",
    period: "2019 - 2020",
    description:
      "Started my professional journey building features for a SaaS platform. Learned industry best practices and developed a passion for clean, maintainable code.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Git"],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-dark-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// Professional journey"}</div>
          <h2 className="text-5xl serif-neon-display mb-6 text-neon-cyan neon-text">Experience</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-sans">
            My path through the world of web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="neon-card hover:shadow-neon-cyan transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="serif-neon text-neon-cyan text-xl neon-text">{exp.title}</CardTitle>
                    <p className="text-neon-pink font-medium neon-text">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="border-vintage-neon text-vintage-neon mt-2 md:mt-0 font-mono">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4 font-sans leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} className="bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/30 font-sans">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
