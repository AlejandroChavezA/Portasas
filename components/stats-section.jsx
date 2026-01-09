import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    colorClass: "text-neon-cyan",
    shadowClass: "hover:shadow-neon-cyan",
  },
  {
    number: "5+",
    label: "Years Experience",
    colorClass: "text-neon-pink",
    shadowClass: "hover:shadow-neon-pink",
  },
  {
    number: "30+",
    label: "Happy Clients",
    colorClass: "text-neon-green",
    shadowClass: "hover:shadow-neon-green",
  },
  {
    number: "15+",
    label: "Technologies",
    colorClass: "text-vintage-neon",
    shadowClass: "hover:shadow-vintage-neon",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 relative bg-dark-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// Achievement highlights"}</div>
          <h3 className="text-3xl serif-neon text-neon-cyan neon-text">By the Numbers</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`neon-card text-center ${stat.shadowClass} transition-all duration-300 group hover:scale-105`}
            >
              <CardContent className="p-6">
                <div
                  className={`text-4xl md:text-5xl serif-neon-display ${stat.colorClass} mb-3 neon-text group-hover:animate-pulse`}
                >
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-sans">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
