import { Button } from "@/components/ui/button"
import { Menu, Coffee } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-dark-bg/90 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 text-2xl serif-neon text-vintage-neon vintage-neon-text">
            <Coffee className="h-6 w-6 text-neon-orange animate-neon-flicker" />
            <span>Alex Rodríguez</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 font-medium neon-text"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 font-medium neon-text"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 font-medium neon-text"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-neon-cyan hover:text-neon-pink transition-colors duration-300 font-medium neon-text"
            >
              Contact
            </a>
          </nav>

          <Button className="md:hidden bg-transparent border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-pink shadow-neon-cyan">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
