"use client"

import type { ReactNode } from "react"
import SmoothScroll from "@/components/smooth-scroll"

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-cream text-ink">
        <div className="grain" aria-hidden />
        {children}
      </div>
    </SmoothScroll>
  )
}
