import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Contacto</h3>
        
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              ¿Tienes un proyecto en mente? Siempre estoy abierto a discutir nuevas oportunidades y desafíos interesantes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-500"
              asChild
            >
              <a href="mailto:alex102add@gmail.com">
                alex102add@gmail.com
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-base"
              asChild
            >
              <a href="tel:+526142087271">
                +52 614 208 7271
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <a 
              href="https://linkedin.com/in/jose-alejandro-chavez-aguilar" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}