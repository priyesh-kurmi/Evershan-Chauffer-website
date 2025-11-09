import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Briefcase } from 'lucide-react'

const fleet = [
  {
    name: 'Bentley Bentayga',
    description: 'The ultimate luxury SUV, combining handcrafted British excellence with commanding performance. Features diamond-quilted leather seats and adaptive air suspension.',
    passengers: 5,
    luggage: 7,
    image: `${import.meta.env.BASE_URL}images/Bentley Bentayga.png`,
    link: '/cars/bentley-bentayga'
  },
  {
    name: 'Rolls-Royce Phantom',
    description: 'The pinnacle of automotive luxury with signature "Magic Carpet Ride" suspension, starlight headliner, and bespoke interior craftsmanship.',
    passengers: 5,
    luggage: 6,
    image: `${import.meta.env.BASE_URL}images/Rolls-Royce Phantom.png`,
    link: '/cars/rolls-royce-phantom'
  },
  {
    name: 'Rolls-Royce Ghost',
    description: 'A contemporary interpretation of luxury with illuminated fascia, advanced driver assistance, and the iconic Spirit of Ecstasy.',
    passengers: 5,
    luggage: 5,
    image: `${import.meta.env.BASE_URL}images/Rolls-Royce Ghost.png`,
    link: '/cars/rolls-royce-ghost'
  },
  {
    name: 'Range Rover',
    description: 'Luxury SUV capability with sophisticated British design. Features Terrain Response 2, air suspension, and executive-class seating.',
    passengers: 5,
    luggage: 8,
    image: `${import.meta.env.BASE_URL}images/Range Rover.png`,
    link: '/cars/range-rover'
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
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50" ref={ref}>
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 md:mb-20"
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
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:h-[400px]">
              {/* Image */}
              <Link 
                to={fleet[currentIndex].link}
                className="relative h-64 sm:h-80 lg:h-full overflow-hidden group cursor-pointer"
              >
                <img
                  src={fleet[currentIndex].image}
                  alt={fleet[currentIndex].name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    fleet[currentIndex].name === 'Range Rover' 
                      ? 'object-[center_50%]' 
                      : 'object-center'
                  }`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                <Link 
                  to={fleet[currentIndex].link}
                  className="hover:text-gray-600 transition-colors"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-3 sm:mb-4">
                    {fleet[currentIndex].name}
                  </h3>
                </Link>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm">
                  {fleet[currentIndex].description}
                </p>

                {/* Capacity */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-500">Capacity</p>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{fleet[currentIndex].passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{fleet[currentIndex].luggage} Luggage</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm font-semibold outline outline-3 outline-black outline-offset-[-3px] transition-all duration-400 hover:bg-transparent hover:text-black text-center"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 px-4">
            {fleet.map((car, index) => (
              <Link
                key={index}
                to={car.link}
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentIndex(index)
                }}
                className={`relative w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 sm:ring-4 ring-black scale-105' 
                    : 'ring-1 sm:ring-2 ring-gray-300 hover:ring-gray-400 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${car.name}`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
