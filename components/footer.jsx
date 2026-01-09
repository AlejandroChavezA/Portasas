import { Github, Linkedin, Twitter, Mail, Heart, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-warm text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6 text-vintage-neon animate-neon-flicker" />
              <h3 className="text-xl serif-neon text-vintage-neon vintage-neon-text">Alex Rodríguez</h3>
            </div>
            <p className="text-white/80 mb-4 font-sans">
              Full Stack Developer passionate about creating digital experiences that blend neon innovation with vintage
              soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors neon-text">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-neon-pink transition-colors neon-text">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-vintage-neon transition-colors neon-text">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-neon-orange transition-colors neon-text">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="serif-neon mb-4 text-neon-cyan neon-text">Quick Links</h4>
            <ul className="space-y-2 text-white/80 font-sans">
              <li>
                <a href="#about" className="hover:text-neon-cyan transition-colors neon-text">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-neon-cyan transition-colors neon-text">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-neon-cyan transition-colors neon-text">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neon-cyan transition-colors neon-text">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="serif-neon mb-4 text-neon-cyan neon-text">Services</h4>
            <ul className="space-y-2 text-white/80 font-sans">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Technical Consulting</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center font-sans">
            Crafted with <Heart className="h-4 w-4 mx-1 text-neon-pink animate-pulse" /> and lots of{" "}
            <Coffee className="h-4 w-4 mx-1 text-vintage-neon animate-neon-flicker" />
          </p>
          <p className="text-white/40 text-sm mt-2 font-mono">
            &copy; {new Date().getFullYear()} Alex Rodríguez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


