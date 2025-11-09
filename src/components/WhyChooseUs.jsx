import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Comfort and Luxury',
    description: 'Clients enjoy luxurious high-end vehicles equipped with premium amenities.',
    icon: `${import.meta.env.BASE_URL}images/iVxzMdIU1aM7OZfjO0LVnuLjct4.png`
  },
  {
    title: 'Safety and Security',
    description: 'We prioritize privacy and security for all clients, including executives.',
    icon: 'https://framerusercontent.com/images/n7sdBhBGPmaEKCOdYJ1GHfRDoVo.svg?width=80&height=80'
  },
  {
    title: 'Customization Tour',
    description: 'We understand that every client is unique, and so are their travel needs.',
    icon: 'https://framerusercontent.com/images/XMhxQVfhLBxYOAVlSOBP1Afx5DM.svg?width=60&height=60'
  }
]

export default function WhyChooseUs() {
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
            WHY CHOOSE US
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-20"
        >
          Experience the Difference
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-16 h-16"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
