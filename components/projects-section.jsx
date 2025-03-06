"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Proyecto 1",
    description: "Una aplicación web moderna construida con React y Node.js",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Proyecto 2",
    description: "Diseño de UX/UI para una aplicación móvil innovadora",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Proyecto 3",
    description: "Sitio web responsivo para una startup de tecnología",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link}>Ver proyecto</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

