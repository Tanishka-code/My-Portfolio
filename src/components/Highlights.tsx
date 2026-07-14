import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { highlights } from '../data/highlights'

export default function Highlights() {
  return (
    <section aria-labelledby="highlights-heading" className="space-y-8">
      <SectionHeading
        title="Overview"
        description="A concise summary of the value I bring, engineered for fast candidate decisions."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 * index, duration: 0.5, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-surface/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-secondary">{item.label}</p>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.value}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
