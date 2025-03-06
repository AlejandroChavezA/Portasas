import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Tu Logo
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#skills" className="hover:text-primary">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}

