import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: ReactNode
  className?: string
  variant?: "solid" | "outline" | "invert"
}

export default function PosterLink({ href, children, className, variant = "solid" }: Props) {
  const styles = {
    solid: "bg-brick text-cream hover:bg-brick-alt",
    outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
    invert: "border border-cream text-cream hover:bg-cream hover:text-ink",
  }[variant]

  return (
    <a
      href={href}
      className={cn(
        "font-display group inline-flex items-center justify-center gap-3 px-6 py-4 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors",
        styles,
        className,
      )}
    >
      {children}
      <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  )
}
