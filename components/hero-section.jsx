import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, Lightbulb, Tv, Coffee } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Elementos nostálgicos con neón */}
      <div className="absolute top-32 left-16 text-vintage-neon/40 animate-gentle-float">
        <Tv className="h-12 w-12 animate-vintage-glow" />
      </div>
      <div className="absolute bottom-40 right-20 text-neon-orange/50 animate-gentle-float delay-2000">
        <Lightbulb className="h-10 w-10 animate-warm-neon-glow" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-neon-pink/30 animate-gentle-float delay-4000">
        <Coffee className="h-8 w-8 animate-neon-flicker" />
      </div>

      {/* Líneas de código neón de fondo */}
      <div className="absolute inset-0 opacity-10 font-mono text-xs text-neon-green overflow-hidden">
        <div className="absolute top-10 left-10 animate-neon-flicker">
          {"const developer = {"}
          <br />
          {'  name: "Alex Rodriguez",'}
          <br />
          {'  style: "neon-vintage",'}
          <br />
          {'  passion: "Digital experiences"'}
          <br />
          {"};"}
        </div>
        <div className="absolute bottom-20 right-10 animate-neon-flicker delay-1000">
          {"function brewCode() {"}
          <br />
          {"  return coffee + creativity;"}
          <br />
          {"}"}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="mb-12">
          <div className="relative inline-block">
            <img
              src="/placeholder.svg?height=180&width=180&text=NEON"
              alt="Alex Rodriguez"
              className="w-44 h-44 rounded-full mx-auto mb-8 border-4 border-neon-cyan/60 shadow-neon-cyan animate-neon-glow"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-neon-green rounded-full animate-pulse shadow-neon-green"></div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl serif-neon-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-vintage-neon to-neon-pink animate-neon-flicker">
            Alex Rodríguez
          </h1>
          <div className="text-neon-green font-mono text-sm mb-4 opacity-80">
            {"// Brewing digital experiences since 2019"}
          </div>
        </div>

        <div className="text-2xl md:text-3xl mb-8 serif-neon">
          <span className="text-neon-cyan neon-text">Full Stack Developer</span>
          <br />
          <span className="text-neon-orange text-lg font-mono">React • Node.js • Creative Design</span>
        </div>

        <p className="text-lg max-w-2xl mx-auto mb-12 text-white/80 leading-relaxed font-sans">
          Like a skilled barista crafting the perfect blend, I combine technical expertise with creative vision to
          create digital experiences that glow with innovation. Every project is brewed with neon-lit precision and
          vintage soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="vintage-neon-border bg-neon-cyan text-dark-bg hover:bg-neon-pink hover:text-white px-8 py-3 serif-neon shadow-neon-cyan transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Connect
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-vintage-neon text-vintage-neon hover:bg-vintage-neon hover:text-dark-bg px-8 py-3 bg-transparent serif-neon shadow-vintage-neon transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            View Resume
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-neon-green mx-auto animate-pulse neon-text" />
          <div className="text-neon-green/60 font-mono text-sm mt-2">Scroll to explore</div>
        </div>
      </div>
    </section>
  )
}
