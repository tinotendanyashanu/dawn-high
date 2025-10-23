export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <span className="inline-flex items-center gap-2 font-bold tracking-wide">
        <span className="w-3 h-3 rounded-full bg-brand-accent shadow-elevate" />
        <span>Dawn World Construction</span>
      </span>
    </div>
  )
}
