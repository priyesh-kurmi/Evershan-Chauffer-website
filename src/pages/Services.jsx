import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const cars = [
  {
    name: 'Bentley Bentayga',
    description: 'Elegant choice for your special day',
    image: `${import.meta.env.BASE_URL}images/Bentley Bentayga.png`
  },
  {
    name: 'Rolls-Royce Phantom',
    description: 'An iconic car for luxury travel',
    image: `${import.meta.env.BASE_URL}images/Rolls-Royce Phantom.png`
  },
  {
    name: 'Rolls-Royce Ghost',
    description: 'A world of boundless potential',
    image: `${import.meta.env.BASE_URL}images/Rolls-Royce Ghost.png`
  },
  {
    name: 'Range Rover',
    description: 'The original luxury SUV',
    image: `${import.meta.env.BASE_URL}images/Range Rover.png`
  }
]

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Experience luxury with our exclusive collection
          </motion.p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12 pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {cars.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/11] bg-gray-100 rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Car Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-black mb-2 relative inline-block">
                      <span className="relative">
                        {car.name}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </span>
                    </h3>
                    <p className="text-base text-gray-600">
                      {car.description}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight className="w-6 h-6 text-black" strokeWidth={2} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
