  const tools = [
    { name: "TypeScript", category: "Language" },
    { name: "React", category: "Framework" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Runtime" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Figma", category: "Design" },
    { name: "Git", category: "Version Control" },
    { name: "Vercel", category: "Platform" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Redis", category: "Cache" },
  ]
  
  export default function StackSection() {
    return (
      <section className="py-32 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-16">
            <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">003</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Tools & Stack</h2>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary/30 transition-all duration-500"
              >
                <div className="space-y-2">
                  <p className="font-light text-foreground group-hover:text-primary transition-colors duration-500">
                    {tool.name}
                  </p>
                  <p className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Decorative element */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-muted-foreground/20" />
              <div className="h-1 w-1 rounded-full bg-primary/60" />
              <div className="h-px w-8 bg-muted-foreground/20" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  