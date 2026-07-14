import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../constants/site'
import useActiveSection from '../hooks/useActiveSection'

const drawerVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: 0 },
}

const menuVariants = {
  closed: { rotate: 0, y: 0, opacity: 1 },
  openTop: { rotate: 45, y: 6 },
  openMiddle: { opacity: 0 },
  openBottom: { rotate: -45, y: -6 },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navItems = useMemo(() => siteConfig.navItems, [])
  const activeSection = useActiveSection(navItems.map((item) => item.href.replace('#', '')))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }, [isOpen])

  const navigateTo = (href: string) => {
    setIsOpen(false)
    const anchor = href.replace('#', '')
    const element = document.getElementById(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`sticky top-0 z-30 border-b border-white/10 bg-background/75 transition duration-300 ${isScrolled ? 'backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.22)]' : ''}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" onClick={() => navigateTo('#home')} className="text-xl font-semibold tracking-[0.15em] text-text">
          TT
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const active = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  navigateTo(item.href)
                }}
                className={`group relative text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  active ? 'text-primary' : 'text-slate-300 hover:text-text'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-[-5px] h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-text transition hover:border-white/20 md:hidden"
        >
          <span className="relative h-5 w-5">
            <motion.span
              animate={isOpen ? menuVariants.openTop : menuVariants.closed}
              className="absolute left-0 top-0 h-[2px] w-full bg-text"
            />
            <motion.span
              animate={isOpen ? menuVariants.openMiddle : menuVariants.closed}
              className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-text"
            />
            <motion.span
              animate={isOpen ? menuVariants.openBottom : menuVariants.closed}
              className="absolute left-0 bottom-0 h-[2px] w-full bg-text"
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-full bg-background/95 px-6 py-8 shadow-[0_0_120px_rgba(0,0,0,0.45)] md:hidden"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold uppercase tracking-[0.24em] text-text">Menu</p>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-text"
              >
                ✕
              </button>
            </div>
            <div className="mt-10 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => navigateTo(item.href)}
                  className="w-full rounded-3xl bg-surface/90 px-5 py-4 text-left text-lg font-semibold text-text transition hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
