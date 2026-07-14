type HeadingProps = {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

export default function Heading({ title, subtitle, description, className = '' }: HeadingProps) {
  return (
    <div className={className}>
      {subtitle && <p className="text-sm uppercase tracking-[0.28em] text-secondary">{subtitle}</p>}
      <h2 className="mt-3 text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{description}</p>}
    </div>
  )
}
