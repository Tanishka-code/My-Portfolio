type CardProps = {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}

export default function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <article className={`rounded-[2rem] border border-white/10 bg-background/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] ${className}`}>
      <div>
        <h3 className="text-xl font-semibold text-text">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
      </div>
      {children && <div className="mt-5">{children}</div>}
    </article>
  )
}
