export default function StarMark({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden fill="currentColor">
      <path d="M32 0 35.6 24.4 64 32 35.6 39.6 32 64 28.4 39.6 0 32 28.4 24.4z" />
      <path d="M54.6 9.4 36.8 27.2 54.6 54.6 36.8 36.8 9.4 54.6 27.2 36.8 9.4 9.4 27.2 27.2z" />
    </svg>
  )
}
