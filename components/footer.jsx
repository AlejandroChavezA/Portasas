import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-accent transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

