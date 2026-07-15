import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { href: 'https://github.com/Tanishka-code', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/tanishka-tawate-53238a3ab', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://twitter.com', label: 'Twitter', icon: FaTwitter },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="border-t border-white/10 bg-background/95 py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-slate-300 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Quick links</p>
            <ul className="mt-4 grid gap-2 text-xs text-slate-400 sm:grid-cols-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-surface/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.28em] text-secondary">Connect</p>
              <div className="flex flex-wrap gap-2">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-background/80 text-slate-200 transition hover:border-primary hover:text-primary"
                  >
                    <item.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href="mailto:tanishkatawate@gmail.com?subject=Resume Request"
                  className="inline-flex h-10 items-center justify-center rounded-3xl border border-white/10 bg-primary px-4 text-[11px] font-semibold text-background transition hover:bg-secondary"
                >
                  Resume
                </a>
                <a
                  href="#home"
                  aria-label="Scroll to top"
                  className="inline-flex h-10 items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 text-[11px] font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tanishka Tawate.</p>
          <p>Minimal footer for a modern portfolio.</p>
        </div>
      </div>
    </motion.footer>
  )
}
