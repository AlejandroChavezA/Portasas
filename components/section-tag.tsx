export default function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-block -rotate-2 border border-ink bg-brick px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-cream">
      {label}
    </span>
  )
}
