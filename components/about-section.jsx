import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users, BookOpen, Lamp } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Technical Craft",
    description: "Clean, efficient code that glows with innovation",
    colorClass: "text-neon-cyan",
    shadowClass: "hover:shadow-neon-cyan",
  },
  {
    icon: Palette,
    title: "Creative Vision",
    description: "Blending neon aesthetics with timeless functionality",
    colorClass: "text-neon-pink",
    shadowClass: "hover:shadow-neon-pink",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Lightning-fast solutions with vintage soul",
    colorClass: "text-neon-green",
    shadowClass: "hover:shadow-neon-green",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Working together in the digital café",
    colorClass: "text-vintage-neon",
    shadowClass: "hover:shadow-vintage-neon",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Elementos decorativos neón-vintage */}
      <div className="absolute top-10 right-10 text-neon-orange/30 animate-gentle-float">
        <BookOpen className="h-8 w-8 animate-warm-neon-glow" />
      </div>
      <div className="absolute bottom-20 left-10 text-vintage-neon/30 animate-gentle-float delay-4000">
        <Lamp className="h-10 w-10 animate-vintage-glow" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// About me"}</div>
          <h2 className="text-5xl serif-neon-display mb-6 text-neon-cyan neon-text">Crafting Digital Stories</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/80 leading-relaxed font-sans">
            Like the perfect cup of coffee in a neon-lit café, great web development is about finding the right balance.
            I blend cutting-edge technology with vintage design wisdom, creating digital experiences that feel both
            futuristic and timeless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.title}
                className={`neon-card text-center h-full ${feature.shadowClass} transition-all duration-300 group hover:scale-105`}
              >
                <CardContent className="p-8">
                  <IconComponent
                    className={`h-14 w-14 ${feature.colorClass} mx-auto mb-6 group-hover:animate-pulse neon-text`}
                  />
                  <h3 className={`serif-neon text-lg mb-3 ${feature.colorClass} neon-text`}>{feature.title}</h3>
                  <p className="text-sm text-white/70 font-sans leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
