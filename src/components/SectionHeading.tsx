type SectionHeadingProps = {
  id?: string
  title: string
  description: string
  className?: string
}

export default function SectionHeading({ id, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-secondary">{title}</p>
      <h2 id={id} className="max-w-2xl text-2xl font-semibold leading-9 text-text sm:text-3xl">
        {description}
      </h2>
    </div>
  )
}
