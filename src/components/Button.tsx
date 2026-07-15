type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const styleMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-background hover:bg-secondary',
  secondary: 'bg-white/5 text-text ring-1 ring-white/10 hover:bg-white/10',
  ghost: 'text-text hover:text-secondary',
}

export default function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-3xl px-6 py-3 text-sm font-semibold transition ${styleMap[variant]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
