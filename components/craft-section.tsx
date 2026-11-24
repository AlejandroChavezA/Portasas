import { craft } from "@/lib/content"
import SectionTag from "@/components/section-tag"

export default function CraftSection() {
  return (
    <section id="oficio" className="relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionTag label="Oficio" />
        <h2 className="font-display mt-4 max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)] text-ink">
          Herramientas, no una sopa de chips.
        </h2>
        <span className="mt-5 block h-[3px] w-16 bg-brick" />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {craft.map((group) => (
            <div key={group.group}>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-brick uppercase">{group.group}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="border border-ink px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-ink uppercase"
                    title={item.use}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
