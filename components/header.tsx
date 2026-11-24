"use client"

import { useState } from "react"
import { identity, nav } from "@/lib/content"
import StarMark from "@/components/star-mark"

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="absolute top-0 right-0 left-0 z-50 bg-cream">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-6 md:px-10">
          <a href="#top" className="font-display flex items-center gap-2 text-[30px] font-black text-ink">
            <StarMark className="h-6 w-6 text-brick" />
            {identity.short}
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-display relative text-[11px] font-bold tracking-[0.22em] uppercase hover:text-brick ${i === 0 ? "text-brick" : "text-ink"}`}
              >
                {item.label}
                {i === 0 && <span className="absolute top-full left-1/2 mt-1.5 block h-1.5 w-1.5 -translate-x-1/2 bg-brick" />}
              </a>
            ))}
          </nav>
          <p className="font-display hidden items-center gap-3 text-[11px] font-bold tracking-[0.18em] text-ink uppercase lg:flex">
            <span className="h-px w-8 bg-ink/40" />
            Chihuahua, MX · 2026
          </p>
          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-ink ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-ink ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-cream px-8 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="font-display border-ink/15 border-t py-5 text-5xl font-bold text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
