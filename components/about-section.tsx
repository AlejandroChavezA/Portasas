export default function AboutSection() {
    return (
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">001</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">The Creator</h2>
            </div>
  
            {/* Subtle decorative element */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary/60" />
              <div className="h-px w-8 bg-muted-foreground/30" />
              <div className="h-px w-4 bg-muted-foreground/20" />
            </div>
  
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I craft digital products with an obsessive attention to detail. Every pixel, every interaction, every line
                of code serves a purpose.
              </p>
              <p className="text-lg">
                With roots in both design and engineering, I bridge the gap between beautiful interfaces and robust
                systems. I believe the best digital experiences are invisible—they just work.
              </p>
              <p className="text-base text-muted-foreground/70">
                Currently focused on building tools that help people think and create better.
              </p>
            </div>
  
            {/* Status indicator */}
            <div className="flex items-center gap-3 pt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for select projects</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  