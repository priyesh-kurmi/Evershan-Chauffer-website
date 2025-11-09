import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react'

const fleet = [
  {
    name: 'Rolls Royce Cullinan',
    description: 'The Rolls Royce Cullinan Black Badge is a luxury car that can seat up to five passengers and deliver up to 265 horsepower. It offers a turbocharged four-cylinder engine, providing unparalleled comfort.',
    passengers: 5,
    luggage: 8,
    image: 'https://framerusercontent.com/images/KJKwhTQSBi2ZBCLGiuDe0H0tfVQ.png?scale-down-to=1024'
  },
  {
    name: 'Mercedes-Benz S-Class',
    description: 'The Mercedes-Benz S-Class represents the pinnacle of luxury sedans, offering cutting-edge technology, supreme comfort, and sophisticated styling for the discerning traveler.',
    passengers: 4,
    luggage: 6,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1024&q=80'
  },
  {
    name: 'BMW 7 Series',
    description: 'The BMW 7 Series combines dynamic performance with luxurious comfort, featuring advanced driver assistance systems and premium materials throughout.',
    passengers: 4,
    luggage: 5,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1024&q=80'
  }
]

export default function Fleet() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % fleet.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + fleet.length) % fleet.length)
  }

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
            OUR FLEET
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-20"
        >
          Book Luxury Fleet
        </motion.h2>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Slider Container */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={fleet[currentIndex].image}
                  alt={fleet[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                  {fleet[currentIndex].name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {fleet[currentIndex].description}
                </p>

                {/* Specifications */}
                <div className="mb-8">
                  <p className="text-sm font-semibold mb-4">Specification:</p>
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{fleet[currentIndex].passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{fleet[currentIndex].luggage} Luggage's</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 text-center"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {fleet.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
