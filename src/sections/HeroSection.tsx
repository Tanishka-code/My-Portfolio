import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import Button from '../components/Button'
import HeroImage from '../components/HeroImage'
import professionalImage from '../assets/PROFESSIONAL IMAGE.jpeg'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Tanishka-code' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanishka-tawate-53238a3ab' },
]

export default function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const motionStyle = useMemo(
    () => ({
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    }),
    [offset],
  )

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) / 32
    const y = (event.clientY - rect.top - rect.height / 2) / 32
    setOffset({ x, y })
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface/90 px-6 py-10 sm:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero-gradient opacity-80" />
      <div className="pointer-events-none absolute left-[-6rem] top-10 h-60 w-60 rounded-full bg-primary/10 blur-3xl" style={motionStyle} />
      <div className="pointer-events-none absolute right-[-5rem] top-32 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" style={{ transform: `translate3d(${offset.x / 1.3}px, ${offset.y / 1.3}px, 0)` }} />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" style={{ transform: `translate3d(${offset.x / 2.1}px, ${offset.y / 2.1}px, 0)` }} />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-primary ring-1 ring-primary/10 sm:text-base">
            Hi, I&apos;m
          </div>
          <div className="space-y-3">
            <p className="text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl">Tanishka Tawate</p>
            <p className="text-lg font-semibold uppercase tracking-[0.28em] text-secondary sm:text-xl">Information Technology Student</p>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Web Developer • Problem Solver • Aspiring Software Engineer
          </p>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            I build modern web applications focused on solving real-world problems through clean design and scalable technology.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#projects" variant="primary" className="min-w-[10rem]">
              View Projects
            </Button>
            <Button href="mailto:tanishkatawate@gmail.com?subject=Resume Request" variant="secondary" className="min-w-[10rem]">
              Resume
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/20 hover:text-text"
              >
                <span className="font-semibold text-primary">{social.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </motion.div>

        <HeroImage src={professionalImage} alt="Portrait of Tanishka Tawate" />
      </div>
    </section>
  )
}
