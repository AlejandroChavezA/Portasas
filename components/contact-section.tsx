import PosterLink from "@/components/poster-link"
import SectionTag from "@/components/section-tag"
import { contact, identity } from "@/lib/content"

export default function ContactSection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <p
        aria-hidden
        className="font-display ghost-type pointer-events-none absolute -bottom-10 left-0 text-[42vw] leading-none text-cream select-none md:text-[22vw]"
      >
        SAS
      </p>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <SectionTag label={contact.kicker} />
        <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)] text-cream">{contact.title}</h2>
        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-cream/70">{contact.body}</p>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PosterLink href={`mailto:${identity.email}`}>{identity.email}</PosterLink>
          <PosterLink href={identity.linkedin} variant="invert">
            LinkedIn
          </PosterLink>
          <PosterLink href={identity.phoneHref} variant="invert">
            {identity.phone}
          </PosterLink>
        </div>
      </div>
    </section>
  )
}
