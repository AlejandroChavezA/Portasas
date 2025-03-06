"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <motion.div
        className="inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
          sas
        </h1>
      </motion.div>

      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Desarrollador Web | Diseñador UX | Creativo
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Button 
          size="lg"
          className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white border-0 hover:opacity-90"
        >
          Ver mis proyectos
        </Button>
      </motion.div>
    </section>
  )
}

