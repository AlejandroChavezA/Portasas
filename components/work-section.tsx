import { work } from "@/lib/content"

export default function WorkSection() {
  return (
    <section id="trabajo" className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-brick uppercase">01 — Trabajo</p>
        <h2 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] text-ink">
          Piezas que salieron a la calle, no a un mock.
        </h2>
        <span className="mt-5 block h-[3px] w-16 bg-brick" />

        <div className="mt-16">
          {work.map((item) => (
            <article key={item.title} className="grid gap-8 border-t border-ink/20 py-12 md:grid-cols-[0.4fr_1fr] md:gap-12">
              <div>
                <p className="font-display text-7xl text-brick md:text-8xl">{item.index}</p>
                <h3 className="font-display mt-4 text-4xl text-ink md:text-5xl">{item.title}</h3>
                <p className="mt-3 text-[12px] font-semibold tracking-[0.16em] text-brick uppercase">{item.kicker}</p>
                <p className="mt-5 border border-ink px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">
                  {item.period}
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="max-w-xl text-[15px] leading-relaxed text-ink-soft">{item.summary}</p>
                <ul className="mt-8 space-y-3">
                  {item.impact.map((line) => (
                    <li key={line} className="flex gap-3 text-[15px] text-ink">
                      <span className="mt-[9px] h-px w-6 shrink-0 bg-brick" />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-[11px] font-semibold tracking-[0.16em] text-ink-soft uppercase">{item.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
