import Image from "next/image"
import PosterLink from "@/components/poster-link"
import StarMark from "@/components/star-mark"
import { hero, identity } from "@/lib/content"

const SAS_MASK_POSITIONS = ["15% 75%", "75% 15%", "40% 95%"]

function PortraitPanel() {
  return (
    <div className="relative h-full w-full">
      {/* bloque rojo: detrás, casi toda la altura, deja una franja crema angosta a la derecha */}
      <div
        className="bg-blend-overlay absolute top-[8%] right-[6%] bottom-0 left-0 z-0 bg-brick bg-[length:300px_300px] bg-repeat"
        style={{ backgroundImage: "url('/textures/panel-noise.webp')" }}
      />

      {/* decoración sobre el bloque rojo: estrella, cruces, órbita, líneas, año */}
      <div className="absolute top-[8%] right-[6%] bottom-0 left-0 z-20">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <g fill="none" stroke="#f4edd8" strokeOpacity="0.55" strokeWidth="0.35">
            <line x1="26" y1="6" x2="100" y2="6" />
            <ellipse cx="58" cy="32" rx="46" ry="16" />
            <line x1="80" y1="6" x2="80" y2="100" />
            <circle cx="88" cy="30" r="5" />
            <line x1="81" y1="30" x2="95" y2="30" />
            <line x1="88" y1="23" x2="88" y2="37" />
          </g>
          <g fill="none" stroke="#f4edd8" strokeOpacity="0.55" strokeWidth="0.9">
            <line x1="10" y1="26" x2="10" y2="29" />
            <line x1="8.5" y1="27.5" x2="11.5" y2="27.5" />
            <line x1="10" y1="33" x2="10" y2="36" />
            <line x1="8.5" y1="34.5" x2="11.5" y2="34.5" />
            <line x1="10" y1="40" x2="10" y2="43" />
            <line x1="8.5" y1="41.5" x2="11.5" y2="41.5" />
          </g>
        </svg>
        <StarMark className="absolute top-[8%] left-[6%] h-12 w-12 text-cream md:h-16 md:w-16" />
        <p className="font-display absolute top-[10%] right-[10%] text-[1.35rem] leading-[0.9] font-bold text-cream">
          20
          <br />
          26
        </p>
      </div>

      {/* foto: delante, sobresale del rectángulo por arriba */}
      <div className="absolute top-0 right-[22%] bottom-0 left-[22%] z-10">
        <Image
          src="/images/sas-hero-crop.jpg"
          alt={identity.name}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 46vw"
          className="object-cover object-[50%_0%] contrast-105 saturate-[1.05]"
        />
      </div>

      {/* franja crema angosta a la derecha del bloque rojo */}
      <div className="absolute top-0 right-0 bottom-0 z-10 w-[6%] border-l border-ink/20">
        <p className="font-display absolute top-[42%] right-[35%] hidden origin-center rotate-90 text-[10px] font-bold tracking-[0.28em] text-ink uppercase lg:block">
          Chihuahua, MX
        </p>
        <p className="absolute right-[6%] bottom-[8%] hidden text-right text-[9px] font-semibold tracking-[0.18em] text-ink uppercase lg:block">
          {hero.values.map((v) => (
            <span key={v} className="block">
              {v}
            </span>
          ))}
        </p>
        <StarMark className="absolute right-[6%] bottom-0 h-5 w-5 text-brick" />
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-24 pb-10 md:px-10 md:pt-28 md:pb-14">
      <div className="relative mx-auto grid max-w-[1400px] items-end gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
        <div className="relative z-10 min-w-0 translate-y-[10%]">
          <p className="font-display mb-1 flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] text-ink uppercase">
            {hero.kicker}
            <span className="h-px flex-1 bg-ink/40" />
          </p>
          <h1>
            <span className="sas-mark-wrap block">
              {hero.mark.split("").map((ch, i) => (
                <span
                  key={i}
                  className="sas-mark sas-mark-2"
                  style={{ maskPosition: SAS_MASK_POSITIONS[i], WebkitMaskPosition: SAS_MASK_POSITIONS[i] }}
                >
                  {ch}
                </span>
              ))}
            </span>
            <span className="font-[family-name:var(--font-anton)] mt-1 block text-[clamp(1.8rem,4vw,3.7rem)] uppercase tracking-tight text-ink">
              {hero.title}
            </span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed font-normal text-ink">{hero.lede}</p>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <PosterLink href="#trabajo">{hero.primaryCta}</PosterLink>
            <span className="hidden h-10 w-px bg-ink/30 sm:block" aria-hidden />
            <p className="font-display text-[10px] font-bold tracking-[0.16em] text-ink uppercase">
              <span className="block text-ink-soft">{hero.available}</span>
              {hero.availableLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="mt-10 flex items-end gap-5">
            <Image
              src="/images/chihuahua-land.jpg"
              alt="Paisaje árido del norte de México, cerca de Chihuahua"
              width={460}
              height={216}
              className="w-40 border border-ink/20 object-cover grayscale sepia contrast-110 md:w-52"
            />
            <p className="font-display text-[10px] leading-relaxed font-semibold tracking-[0.16em] text-ink uppercase">
              {hero.stack.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="relative h-[420px] lg:h-[620px]">
          <PortraitPanel />
        </div>
      </div>
    </section>
  )
}
