import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Adobe Creative", level: 70 },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// Technical expertise"}</div>
          <h2 className="text-5xl serif-neon-display mb-6 text-neon-cyan neon-text">Skills & Expertise</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-sans">
            A carefully curated blend of technologies and creative tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="neon-card h-full hover:shadow-neon-cyan transition-all duration-300">
              <CardHeader>
                <CardTitle className="serif-neon text-neon-cyan text-xl neon-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-vintage-neon font-mono">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
