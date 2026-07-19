import { motion } from 'framer-motion'
import { FaReact, FaJsSquare, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si'

const techIcons = [
  { icon: FaReact, x: '12%', y: '18%', delay: 0 },
  { icon: FaJsSquare, x: '85%', y: '22%', delay: 0.2 },
  { icon: FaNodeJs, x: '80%', y: '68%', delay: 0.4 },
  { icon: SiMongodb, x: '18%', y: '72%', delay: 0.15 },
  { icon: SiTailwindcss, x: '48%', y: '8%', delay: 0.25 },
  { icon: FaGithub, x: '58%', y: '22%', delay: 0.35 },
  { icon: FaGithub, x: '32%', y: '78%', delay: 0.1 },
  { icon: SiExpress, x: '68%', y: '52%', delay: 0.3 },
  { icon: FaGitAlt, x: '38%', y: '28%', delay: 0.05 },
]

export default function FloatingTechIcons() {
  return (
    <>
      {techIcons.map(({ icon: Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: [0, 0.85, 0.75], y: [0, -8, 0] }}
          transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
          className="pointer-events-none absolute"
          style={{ left: x, top: y }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-slate-100 shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
            <Icon className="h-7 w-7" />
          </div>
        </motion.div>
      ))}
    </>
  )
}
