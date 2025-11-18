import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Warm honey gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/40 via-amber-50/20 to-amber-200/60" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 drop-shadow-[0_5px_25px_rgba(245,158,11,0.35)]"
        >
          The Honeyverse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-2xl text-amber-900/80 text-lg sm:text-xl"
        >
          Silky-smooth scroll, buzzing bees, and a 3D honeycomb dream.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#explore" className="px-6 py-3 rounded-full bg-amber-600/90 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/30 transition-colors">
            Explore the Hive
          </a>
          <a href="#honeycomb" className="px-6 py-3 rounded-full bg-white/70 hover:bg-white text-amber-800 font-semibold shadow-md transition-colors">
            See the Honeycomb
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
