import Image from "next/image"
import PosterLink from "@/components/poster-link"
import StarMark from "@/components/star-mark"
import { hero, identity } from "@/lib/content"

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24">
      <p
        aria-hidden
        className="font-display ghost-type pointer-events-none absolute top-24 -right-8 text-[28vw] leading-none text-ink select-none md:top-16"
      >
        SAS
      </p>

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-6 flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-brick uppercase">
            <StarMark className="h-3 w-3" />
            {hero.greeting}
          </p>
          <h1 className="font-display text-[clamp(3.2rem,9vw,7rem)] text-ink">
            <span className="block">{hero.line1}</span>
            <span className="block text-brick">{hero.line2}</span>
          </h1>
          <span className="mt-5 block h-[3px] w-16 bg-brick" />
          <p className="mt-6 text-[13px] font-semibold tracking-[0.18em] text-ink uppercase">
            {hero.roles[0]} · {identity.location}
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">{hero.lede}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PosterLink href="#trabajo">{hero.primaryCta}</PosterLink>
            <PosterLink href={`mailto:${identity.email}`} variant="outline">
              {hero.secondaryCta}
            </PosterLink>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 hidden h-24 w-24 bg-brick md:block" />
          <div className="relative border border-ink">
            <Image
              src="/images/sas-hero.jpg"
              alt={identity.name}
              width={1200}
              height={900}
              priority
              className="aspect-[4/5] w-full object-cover object-[50%_20%] grayscale-[20%]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] font-semibold tracking-[0.18em] text-ink uppercase">
            <span>CHH · MX</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
