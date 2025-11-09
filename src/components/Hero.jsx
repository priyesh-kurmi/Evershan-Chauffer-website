import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image with space on sides and top */}
      <div className="absolute inset-0 flex items-center justify-center bg-white pt-16 sm:pt-20 md:pt-24">
        <div className="relative w-full max-w-7xl h-full mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}images/Gemini_Generated_Image_6i8u1g6i8u1g6i8u.png`}
            alt="Luxury vehicle"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Executive Chauffeur Services<br className="hidden sm:block" /><span className="sm:hidden"> </span>for Business & Leisure
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            Enjoy the finest chauffeur services with our team of experienced drivers,
            committed to delivering exceptional service and reliability.
          </p>
          <Link
            to="/contact"
            className="group relative inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold overflow-hidden"
          >
            {/* Background layers */}
            <span className="absolute inset-0 bg-white transition-transform duration-700 ease-out"></span>
            <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
            
            {/* Text */}
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-700">
              REQUEST QUOTE
            </span>
            
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </span>
          </Link>
        </motion.div>
      </div>


    </section>
  )
}
