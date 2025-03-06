"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Contáctame</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> tu.email@ejemplo.com
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> +34 123 456 789
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Madrid, España
            </p>
          </div>
        </motion.div>
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Input type="text" placeholder="Nombre" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Mensaje" />
          <Button type="submit" className="w-full">
            Enviar Mensaje
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

