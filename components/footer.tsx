export default function Footer() {
      return (
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Alex Chen</p>
    
              <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
                <span>Built with intention</span>
                <span className="text-primary">·</span>
                <span className="font-mono text-xs">v1.0</span>
              </div>
            </div>
          </div>
        </footer>
      )
    }
    