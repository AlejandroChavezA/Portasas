"use client"

import { useState } from "react"
import { identity, nav } from "@/lib/content"
import StarMark from "@/components/star-mark"

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-cream/90 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="font-display flex items-center gap-2 text-xl tracking-tight text-ink">
            {identity.short}
            <StarMark className="h-3.5 w-3.5 text-brick" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase hover:text-brick"
              >
                {item.label}
              </a>
            ))}
          </nav>
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
        <div className="h-px w-full bg-ink/15" />
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-cream px-8 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="font-display border-ink/15 border-t py-5 text-5xl text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
