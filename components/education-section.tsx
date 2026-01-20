export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Educación</h3>
        
        <div className="max-w-4xl mx-auto">
          <div className="border-l border-border pl-8 relative">
            <div className="absolute left-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
            
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-2">Ingeniería en Informática</h4>
              <p className="text-muted-foreground mb-1">Instituto Tecnológico de Chihuahua</p>
              <p className="text-muted-foreground mb-2">Chihuahua, México</p>
              <p className="text-sm text-muted-foreground/70">2022 - Presente | Promedio: 9.1 / 10</p>
              <p className="text-sm text-muted-foreground/70 mt-2">Nivel de inglés: A2</p>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-6 text-primary">Hackathons & Competencias</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="text-muted-foreground">
                    Participante activo en hackathons durante varios años (ej.: Talent Land 2023, NASA Space Apps)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="text-muted-foreground">
                    Experiencia trabajando en equipo y desarrollando prototipos funcionales en entornos de alta presión
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <p className="text-muted-foreground">
                    Roles: desarrollador fullstack y líder técnico en proyectos de hackathon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}