import Button from './Button'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-text">
          Tanishka Tawate
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" variant="primary" className="hidden md:inline-flex">
          Connect
        </Button>
      </div>
    </header>
  )
}
