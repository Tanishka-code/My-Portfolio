import { motion } from 'framer-motion'
import { featuredProjects } from '../data/projects'

const showcaseProjects = featuredProjects.slice(0, 4)

export default function DeveloperWorkspace() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.82))] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.26)] sm:p-4"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_38%)]" />
      <div className="pointer-events-none absolute inset-3 rounded-[1.7rem] border border-white/10" />
      <div className="relative z-10 grid gap-3 md:grid-cols-[1.15fr_0.85fr] md:grid-rows-2">
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="group relative overflow-hidden rounded-[1.45rem] border border-white/15 bg-slate-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.22)] md:row-span-2"
        >
          <img
            src={showcaseProjects[0].screenshotUrl}
            alt={showcaseProjects[0].screenshotAlt}
            loading="lazy"
            decoding="async"
            className="h-full min-h-[16rem] w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-100 backdrop-blur">
            {showcaseProjects[0].imageLabel}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="group relative overflow-hidden rounded-[1.45rem] border border-white/15 bg-slate-900/60 shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
        >
          <img
            src={showcaseProjects[1].screenshotUrl}
            alt={showcaseProjects[1].screenshotAlt}
            loading="lazy"
            decoding="async"
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-100 backdrop-blur">
            {showcaseProjects[1].imageLabel}
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 md:col-span-1 md:grid-cols-1">
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-[1.4rem] border border-white/10"
          >
            <img
              src={showcaseProjects[2].screenshotUrl}
              alt={showcaseProjects[2].screenshotAlt}
              loading="lazy"
              decoding="async"
              className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 rounded-full border border-white/15 bg-slate-950/70 px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-slate-100 backdrop-blur">
              {showcaseProjects[2].imageLabel}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-[1.4rem] border border-white/10"
          >
            <img
              src={showcaseProjects[3].screenshotUrl}
              alt={showcaseProjects[3].screenshotAlt}
              loading="lazy"
              decoding="async"
              className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 rounded-full border border-white/15 bg-slate-950/70 px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-slate-100 backdrop-blur">
              {showcaseProjects[3].imageLabel}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
