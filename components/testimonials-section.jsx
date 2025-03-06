"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Juan Pérez",
    role: "CEO, TechCorp",
    text: "Un desarrollador excepcional. Entregó el proyecto antes de tiempo y superó nuestras expectativas.",
  },
  {
    name: "María García",
    role: "Diseñadora, CreativeStudio",
    text: "Su atención al detalle y habilidades de diseño son impresionantes. Un placer trabajar juntos.",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO, StartupX",
    text: "Resolvió problemas complejos con soluciones elegantes. Definitivamente lo recomendaría.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-accent/10">
      <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen de mí</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

