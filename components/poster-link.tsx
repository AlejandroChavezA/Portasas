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
    solid: "bg-red text-cream hover:bg-red-alt",
    outline: "border border-dark text-dark hover:bg-dark hover:text-cream",
    invert: "border border-cream text-cream hover:bg-cream hover:text-dark",
  }[variant]

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 px-6 py-4 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors",
        styles,
        className,
      )}
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  )
}
