import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-amber-500/20 bg-amber-100/70 backdrop-blur-md px-4 py-2 shadow-lg">
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 text-amber-900 font-extrabold tracking-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl">🐝</span>
            <span className="text-lg">Honeyverse</span>
          </motion.a>

          <div className="hidden sm:flex items-center gap-2">
            <a href="#explore" className="px-3 py-2 rounded-lg text-amber-900 hover:bg-amber-200/70 transition-colors">Explore</a>
            <a href="#honeycomb" className="px-3 py-2 rounded-lg text-amber-900 hover:bg-amber-200/70 transition-colors">Honeycomb</a>
            <a href="/test" className="px-3 py-2 rounded-lg text-amber-900 hover:bg-amber-200/70 transition-colors">Test</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
