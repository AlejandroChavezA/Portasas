export default function ExperienceSection() {
  const experiences = [
    {
      title: "Desarrollador | Keptrack",
      company: "Freelance",
      location: "Chihuahua, México",
      period: "Octubre 2024 - Enero 2025",
      achievements: [
        "Desarrollé el MVP de Keptrack, app para gestionar suscripciones y finanzas personales, reduciendo el tiempo de organización financiera de usuarios en un 40%.",
        "Implementé la arquitectura fullstack (Next.js + Node.js + MongoDB), garantizando escalabilidad y despliegue estable en la nube.",
        "Optimizé la base de datos y llamadas API, reduciendo los tiempos de carga promedio en un 30%.",
        "Diseñé una interfaz intuitiva y minimalista basada en feedback de usuarios reales.",
        "Colaboré en la presentación del producto ante incubadoras, logrando validación temprana del modelo de negocio."
      ]
    },
    {
      title: "Desarrollador | Natal.IA",
      company: "Freelance",
      location: "Chihuahua, México",
      period: "Enero 2025 - presente",
      achievements: [
        "Creé Natal.IA, un asistente de voz impulsado por lA capaz de mantener conversaciones naturales y personalizadas.",
        "Implementé generación de voz con ElevenLabs y procesamiento de texto con modelos de lenguaje, logrando respuestas fluidas en tiempo real.",
        "Diseñé un panel de administración para controlar configuraciones, sesiones y métricas de uso.",
        "Alcancé la etapa nacional en el Concurso de Innovación TECNM 2025 con Natal.IA.",
        "Mejoré la latencia de respuesta en un 35%, optimizando la experiencia de usuario en pruebas piloto."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Experiencia Laboral</h3>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l border-border pl-8 relative">
              <div className="absolute left-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
              <div className="mb-4">
                <h4 className="text-2xl font-semibold mb-2">{exp.title}</h4>
                <p className="text-muted-foreground mb-1">{exp.company} • {exp.location}</p>
                <p className="text-sm text-muted-foreground/70">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}