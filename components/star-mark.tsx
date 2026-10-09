export default function StarMark({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 0 13.4 8.4 22 6l-6 6 6 6-8.6-2.4L12 24l-1.4-8.4L2 18l6-6-6-6 8.6 2.4z" />
    </svg>
  )
}
