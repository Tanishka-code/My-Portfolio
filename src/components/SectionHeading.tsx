type SectionHeadingProps = {
  title: string
  description: string
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm uppercase tracking-[0.28em] text-secondary">{title}</p>
      <p className="max-w-2xl text-2xl font-semibold leading-9 text-text sm:text-3xl">{description}</p>
    </div>
  )
}
