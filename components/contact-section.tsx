import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">004</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Let&apos;s Connect</h2>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Have a project in mind? I&apos;m always open to discussing new opportunities and interesting challenges.
        </p>

        <Button
          size="lg"
          className="group px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all duration-500"
          asChild
        >
          <a href="mailto:hello@example.com">
            Get in Touch
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Button>

        {/* Social links */}
        <div className="flex justify-center gap-8 mt-16 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-300">
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}