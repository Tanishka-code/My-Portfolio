import { motion } from 'framer-motion'

type HeroImageProps = {
  src: string
  alt: string
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-sky-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_32px_100px_rgba(0,0,0,0.22)]">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-950">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}
