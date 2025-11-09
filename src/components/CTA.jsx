import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Pattern or Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Label */}
          <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6 block">
            TRAVEL IN COMFORT
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-8 max-w-4xl mx-auto">
            Transform your commute into an reliable & elegant journey
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Book now to experience the finest in chauffeur services.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            BOOK A RIDE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
