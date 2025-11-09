import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with space on sides and top */}
      <div className="absolute inset-0 flex items-center justify-center bg-white pt-24">
        <div className="relative w-full max-w-7xl h-full mx-auto">
          <img
            src="/images/Gemini_Generated_Image_6i8u1g6i8u1g6i8u.png"
            alt="Luxury vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Executive Chauffeur Services<br />for Business & Leisure
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Enjoy the finest chauffeur services with our team of experienced drivers,
            committed to delivering exceptional service and reliability.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            REQUEST QUOTE
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
