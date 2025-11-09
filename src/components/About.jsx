import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
            ABOUT US
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-16"
        >
          Experience Unmatched<br />Comfort and Style
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a passion for excellence, we have been redefining luxury travel for
              years. Our journey began with a single goal: to offer unparalleled chauffeur
              services that blend sophistication, safety, and comfort.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need transportation for a corporate event, a special occasion, or
              simply a night on the town, our team of professional chauffeurs is here to provide
              a seamless experience.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://framerusercontent.com/images/S8ES3b5W14goYYoEahp1TQeeFhA.png?scale-down-to=1024&width=1238&height=1004"
              alt="About"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="https://framerusercontent.com/images/dQFZwszNP1p5AfhdWCjxTCFiieo.png?width=1210&height=1308"
              alt="Chauffeur"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <div>
              <Link
                to="/about"
                className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                KNOW MORE
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
