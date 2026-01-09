import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO",
    company: "TechStartup Inc.",
    text: "Alex transformed our digital presence completely. His attention to detail and ability to understand our needs was exceptional. The result exceeded all our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MG",
  },
  {
    name: "Carlos Mendoza",
    role: "Marketing Director",
    company: "Digital Solutions",
    text: "Working with Alex was an incredible experience. Not only did he deliver a high-quality product, but he also educated us about best practices. I would definitely recommend him.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=CM",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-dark-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// Client feedback"}</div>
          <h2 className="text-5xl serif-neon-display mb-6 text-neon-cyan neon-text">What Clients Say</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-sans">
            Testimonials from satisfied clients who trusted me with their projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="neon-card hover:shadow-neon-cyan transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-vintage-neon/30"
                  />
                  <div>
                    <h4 className="serif-neon text-neon-cyan neon-text">{testimonial.name}</h4>
                    <p className="text-sm text-neon-pink neon-text">{testimonial.role}</p>
                    <p className="text-xs text-white/60 font-sans">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-vintage-neon text-vintage-neon" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 italic font-sans leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
