import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Generates a swarm of bees with parallax and smooth flight paths
const BeesScroll = () => {
  const bees = useMemo(() => {
    return new Array(16).fill(0).map((_, i) => ({
      id: i,
      size: Math.random() * 12 + 10,
      xStart: Math.random() * 100,
      yOffset: Math.random() * 80,
      speed: Math.random() * 0.6 + 0.4,
      depth: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 2,
      hue: 40 + Math.random() * 20,
    }))
  }, [])

  const { scrollY } = useScroll()

  return (
    <div aria-hidden className="relative w-full h-[160vh] -mt-20">
      {bees.map((bee) => {
        const y = useTransform(scrollY, [0, 1000], [bee.yOffset, -200 * bee.depth])
        const x = useTransform(scrollY, [0, 1000], [bee.xStart + 5, bee.xStart - 5])
        const rotate = useTransform(scrollY, [0, 1000], [0, 15 * (bee.depth + 0.2)])
        const opacity = useTransform(scrollY, [0, 300, 900, 1200], [0, 1, 1, 0])

        return (
          <motion.div
            key={bee.id}
            className="pointer-events-none absolute"
            style={{
              top: 0,
              left: 0,
              y,
              x: useTransform(x, (val) => `${val}vw`),
              rotate,
              opacity,
              scale: 0.9 + bee.depth * 0.3,
              filter: `drop-shadow(0 8px 16px rgba(217,119,6,${0.15 + bee.depth * 0.15}))`,
            }}
          >
            <div
              className="relative"
              style={{ width: bee.size * 2, height: bee.size * 1.2 }}
            >
              {/* Bee body */}
              <div
                className="rounded-full"
                style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, hsl(${bee.hue} 90% 50%), hsl(${bee.hue} 85% 55%))`,
                  boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2)',
                }}
              />
              {/* Stripes */}
              <div className="absolute inset-0 grid grid-cols-5 opacity-70 mix-blend-multiply">
                <div />
                <div className="bg-amber-900/60" />
                <div />
                <div className="bg-amber-900/60" />
                <div />
              </div>
              {/* Wings */}
              <motion.div
                className="absolute -top-2 -left-1 w-3 h-4 rounded-full bg-white/70"
                animate={{ rotate: [0, 25, 0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 * (1 / bee.speed), ease: 'easeInOut' }}
                style={{ filter: 'blur(0.3px)' }}
              />
              <motion.div
                className="absolute -top-2 right-1 w-3 h-4 rounded-full bg-white/70"
                animate={{ rotate: [0, -25, 0, 25, 0] }}
                transition={{ repeat: Infinity, duration: 1.1 * (1 / bee.speed), ease: 'easeInOut' }}
                style={{ filter: 'blur(0.3px)' }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default BeesScroll
