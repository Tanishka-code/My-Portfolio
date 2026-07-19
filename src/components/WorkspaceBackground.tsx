import { motion } from 'framer-motion'

export default function WorkspaceBackground() {
  return (
    <motion.div
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(15,23,42,0.98))]"
    >
      <div className="absolute left-5 top-10 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-6 top-20 h-28 w-28 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-12 w-12 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute left-8 bottom-16 h-4 w-4 rounded-full bg-white/20 blur-sm" />
      <div className="absolute right-10 bottom-10 h-6 w-6 rounded-full bg-primary/20 blur-sm" />
      <span className="absolute left-[15%] top-[40%] h-1.5 w-1.5 rounded-full bg-white/15 shadow-[0_0_20px_rgba(255,255,255,0.12)]" />
      <span className="absolute left-[28%] top-[25%] h-1.5 w-1.5 rounded-full bg-white/15 shadow-[0_0_18px_rgba(255,255,255,0.1)]" />
      <span className="absolute right-[18%] top-[55%] h-1.5 w-1.5 rounded-full bg-white/15 shadow-[0_0_16px_rgba(255,255,255,0.08)]" />
    </motion.div>
  )
}
