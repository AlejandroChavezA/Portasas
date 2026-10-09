import StarMark from "@/components/star-mark"
import { identity } from "@/lib/content"

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-8 text-cream md:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 border-t border-cream/20 pt-8 sm:flex-row sm:items-center">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase">
          © {new Date().getFullYear()} {identity.short}
          <StarMark className="h-3 w-3 text-brick" />
        </p>
        <p className="text-[11px] font-semibold tracking-[0.16em] text-cream/60 uppercase">
          {identity.role} · CHH, MX
        </p>
      </div>
    </footer>
  )
}
