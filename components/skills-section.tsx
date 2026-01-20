export default function SkillsSection() {
  const hardSkills = [
    "JavaScript", "Java", "C++", "SQL", "Python",
    "Next.js", "React", "Node.js", "Express", "Bootstrap", "Tailwind CSS",
    "Firebase", "MongoDB", "MySQL",
    "Git", "GitHub", "Figma", "Postman", "VS Code",
    "Fullstack", "APIs REST", "UI/UX básico", "Arquitectura de software",
    "OpenAI API", "ElevenLabs", "Procesamiento de lenguaje natural"
  ]

  const softSkills = [
    "Liderazgo y trabajo en equipo",
    "Comunicación efectiva",
    "Resolución de problemas y pensamiento analítico",
    "Gestión del tiempo y organización",
    "Autodidacta y adaptabilidad"
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Habilidades</h3>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary">Habilidades Duras</h4>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-2 bg-primary/10 text-primary rounded-md border border-primary/20 hover:bg-primary/20 transition-colors text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-primary">Habilidades Blandas</h4>
            <ul className="space-y-3">
              {softSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}