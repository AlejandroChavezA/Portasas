import Image from "next/image"
import { identity, origin } from "@/lib/content"

export default function OriginSection() {
  return (
    <section id="origen" className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-brick uppercase">03 — Origen</p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] text-ink">{origin.title}</h2>
          <span className="mt-5 block h-[3px] w-16 bg-brick" />
          <p className="mt-8 text-lg text-ink">{origin.school}</p>
          <p className="mt-2 text-[12px] font-semibold tracking-[0.16em] text-ink-soft uppercase">
            {origin.period} · Promedio {origin.gpa}
          </p>
          <div className="mt-8 space-y-4">
            {origin.notes.map((note) => (
              <p key={note} className="max-w-md text-[15px] leading-relaxed text-ink-soft">
                {note}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="border border-ink">
            <Image
              src="/images/sas-origin.jpg"
              alt={`${identity.name} en el lab`}
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover object-[50%_25%]"
            />
          </div>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.18em] text-ink uppercase">Chihuahua · TecNM</p>
        </div>
      </div>
    </section>
  )
}
