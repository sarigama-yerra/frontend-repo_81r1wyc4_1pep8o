import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hex = ({ delay }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className="aspect-[1.732/2] w-28 sm:w-32 md:w-36 bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200 rounded-[12%] shadow-inner shadow-amber-300/50 border border-amber-400/40"
  />
)

const Honeycomb = () => {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])

  return (
    <section id="honeycomb" className="relative py-24 sm:py-32 bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
      <motion.div
        style={{ rotate }}
        className="pointer-events-none absolute -top-20 -right-10 w-[60vw] h-[60vw] opacity-20 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-amber-800 tracking-tight">Honeycomb Grid</h2>
          <p className="mt-4 text-amber-900/80 max-w-2xl mx-auto">A smooth, animated hexagonal layout that gently parallax scrolls as you explore the hive.</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-5 md:gap-6 place-items-center">
          {Array.from({ length: 30 }).map((_, i) => (
            <Hex key={i} delay={(i % 6) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Honeycomb
