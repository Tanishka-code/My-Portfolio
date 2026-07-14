import { motion } from 'framer-motion'

const heroFeatures = [
  'Product-minded web experiences',
  'Modern React and Tailwind workflows',
  'Performance-first implementation',
]

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-glow backdrop-blur-xl sm:p-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <div className="rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary ring-1 ring-primary/10">
            Software Engineering Intern • Placement Portfolio
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Tanishka Tawate</p>
            <h1 id="hero-heading" className="text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
              Building thoughtful products and polished web experiences with React.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I design and ship performance-conscious web apps with clean interfaces, strong engineering, and meaningful product focus.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:max-w-sm">
          {heroFeatures.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index, duration: 0.55, ease: 'easeOut' }}
              className="rounded-3xl bg-background/80 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/5"
            >
              <p className="text-sm font-medium text-text">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
