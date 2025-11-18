import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BeesScroll from './components/BeesScroll'
import Honeycomb from './components/Honeycomb'

function App() {
  return (
    <div className="min-h-screen w-full bg-amber-50 text-amber-900 overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Bees parallax scroll section */}
      <section id="explore" className="relative bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-10">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Buzz Through the Garden</h2>
            <p className="mt-4 text-amber-900/80 max-w-2xl mx-auto">
              Smooth parallax flight paths and silky motion as you scroll.
            </p>
          </div>
        </div>
        <BeesScroll />
      </section>

      {/* Honeycomb grid with subtle parallax */}
      <Honeycomb />

      {/* CTA Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-amber-100 to-amber-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(217,119,6,0.12),transparent_40%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-amber-900">Ready to join the hive?</h3>
          <p className="mt-4 text-amber-900/80 max-w-2xl mx-auto">
            Glide through a world of honeyed motion and interactive 3D textures.
          </p>
          <div className="mt-8">
            <a
              href="#explore"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-semibold shadow-lg shadow-amber-700/30 transition-colors"
            >
              Start Exploring
            </a>
          </div>
          <p className="mt-10 text-sm text-amber-900/70">Made with love and a little buzz.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
