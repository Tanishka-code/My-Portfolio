import { motion } from 'framer-motion'

const accessoryMotion = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
}

export default function DeskAccessories() {
  return (
    <>
      <motion.div
        {...accessoryMotion}
        className="pointer-events-none absolute left-6 top-[65%] hidden h-24 w-24 rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-3 shadow-[0_24px_40px_rgba(15,23,42,0.22)] lg:flex"
      >
        <div className="h-full rounded-[1.25rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-3">
          <div className="h-14 rounded-[1rem] bg-slate-800/95" />
          <div className="mt-3 flex h-8 items-center justify-between rounded-[0.85rem] bg-slate-900/90 px-3 text-xs text-slate-400">
            <span>Notes</span>
            <span>+</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...accessoryMotion}
        className="pointer-events-none absolute right-6 top-[62%] hidden h-24 w-24 rounded-[2.5rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_24px_40px_rgba(15,23,42,0.22)] lg:flex"
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 rounded-[2rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-3">
          <div className="h-10 w-full rounded-[1.2rem] bg-slate-800/95" />
          <div className="h-4 w-10 rounded-full bg-slate-700/90" />
        </div>
      </motion.div>

      <motion.div
        {...accessoryMotion}
        className="pointer-events-none absolute left-12 bottom-8 hidden h-20 w-16 rounded-[1.5rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_24px_40px_rgba(15,23,42,0.22)] lg:flex"
      >
        <div className="h-full rounded-[1.25rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-2">
          <div className="h-12 rounded-[1rem] bg-slate-800/95" />
          <div className="mt-2 h-2 w-8 rounded-full bg-slate-700/90" />
        </div>
      </motion.div>

      <motion.div
        {...accessoryMotion}
        className="pointer-events-none absolute right-16 bottom-6 hidden h-20 w-14 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_24px_40px_rgba(15,23,42,0.22)] lg:flex"
      >
        <div className="h-full rounded-[1.5rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-2">
          <div className="h-16 rounded-[1rem] bg-slate-800/95" />
        </div>
      </motion.div>
    </>
  )
}
