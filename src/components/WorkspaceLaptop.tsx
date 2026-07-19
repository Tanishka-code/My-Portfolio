import { motion } from 'framer-motion'

const codeLines = [
  { text: 'const developer = {', color: '#38bdf8' },
  { text: '  name: "Tanishka Tawate",', color: '#f472b6' },
  { text: '  role: "Software Engineer",', color: '#f472b6' },
  { text: '  education: "B.Tech Information Technology",', color: '#f472b6' },
  { text: '  stack: [', color: '#38bdf8' },
  { text: '    "React",', color: '#38bdf8' },
  { text: '    "Node.js",', color: '#38bdf8' },
  { text: '    "MongoDB",', color: '#38bdf8' },
  { text: '    "Express",', color: '#38bdf8' },
  { text: '    "Tailwind CSS"', color: '#38bdf8' },
  { text: '  ]', color: '#38bdf8' },
  { text: '};', color: '#94a3b8' },
  { text: '', color: '#94a3b8' },
  { text: 'developer.buildAmazingProjects();', color: '#a78bfa' },
]

const floatMotion = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
}

export default function WorkspaceLaptop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 mx-auto w-full max-w-[900px] overflow-visible"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-8 left-1/2 z-0 h-36 w-[780px] -translate-x-1/2 rounded-full bg-slate-950/90 blur-3xl shadow-[0_40px_100px_rgba(15,23,42,0.35)]" />
      <svg viewBox="0 0 980 620" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="screenGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="keyboardGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>

        <motion.g {...floatMotion}>
          <polygon points="120,560 860,560 920,620 60,620" fill="#020617" />
          <rect x="140" y="120" width="700" height="380" rx="38" fill="url(#screenGlow)" stroke="rgba(255,255,255,0.16)" strokeWidth="3" />
          <rect x="160" y="144" width="660" height="308" rx="28" fill="#020617" />
          <rect x="160" y="144" width="660" height="308" rx="28" fill="url(#screenGlow)" opacity="0.08" />
          <rect x="160" y="144" width="660" height="36" rx="18" fill="#0f172a" />
          <rect x="188" y="156" width="160" height="10" rx="5" fill="#1e293b" />
          <rect x="504" y="156" width="138" height="10" rx="5" fill="#1e293b" />
          <rect x="160" y="462" width="660" height="54" rx="24" fill="url(#keyboardGlow)" />
          <rect x="200" y="490" width="560" height="40" rx="18" fill="#111827" />
          <rect x="180" y="470" width="620" height="16" rx="8" fill="#0f172a" opacity="0.55" />
          {Array.from({ length: 12 }).map((_, index) => (
            <rect
              key={`key-row-${index}`}
              x={210 + (index % 6) * 86}
              y={502 + Math.floor(index / 6) * 16}
              width="72"
              height="10"
              rx="5"
              fill="#0f172a"
            />
          ))}
          <rect x="430" y="520" width="120" height="10" rx="6" fill="#1f2937" />
          <rect x="160" y="504" width="44" height="24" rx="12" fill="#0f172a" />
          <rect x="776" y="504" width="44" height="24" rx="12" fill="#0f172a" />
          <rect x="260" y="90" width="460" height="24" rx="12" fill="#0f172a" />

          <g transform="translate(190 188)">
            <rect width="620" height="264" rx="24" fill="#04111f" />
            <rect x="12" y="12" width="596" height="40" rx="16" fill="#0f172a" />
            <text x="24" y="38" fill="#94a3b8" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" fontSize="14">
              VS CODE · main · TypeScript
            </text>
            <rect x="544" y="14" width="56" height="12" rx="6" fill="#2563eb" opacity="0.12" />
            {codeLines.map((line, index) => (
              <text
                key={index}
                x="24"
                y={72 + index * 24}
                fill={line.color}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
                fontSize="18"
              >
                {line.text}
              </text>
            ))}
          </g>
        </motion.g>
      </svg>
    </motion.div>
  )
}
