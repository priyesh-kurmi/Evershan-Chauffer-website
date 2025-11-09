import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-12 flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-6"
          >
            About Eversham
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Excellence in Every Journey
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For over five years, Eversham Chauffeurs has been the trusted choice for those who value refinement, reliability, and quiet excellence.
                Our name has become synonymous with British sophistication — a reputation built on discretion, craftsmanship, and genuine care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Each journey we undertake is guided by a simple principle: true luxury lies in refinement. From the moment you're met by your chauffeur to the instant you arrive, every detail has been considered. Every interaction, effortless.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our chauffeurs uphold the heritage of British service — composed, courteous, and precise in every detail. Whether you're travelling for business, celebration, or leisure, your experience with Eversham is designed to be seamless, dignified, and entirely bespoke.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/about1.png`}
                alt="Professional chauffeur"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/about2.png`}
                alt="Luxury fleet"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-display font-bold mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Eversham, we believe luxury is not defined by opulence, but by ease — the quiet assurance that everything has been thoughtfully prepared. Each journey is more than transport; it is an experience of calm excellence, delivered with integrity and grace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Excellence',
                description: 'Every vehicle and chauffeur reflects the highest standards of presentation and performance. Nothing less defines Eversham.'
              },
              {
                title: 'Discretion',
                description: 'Our clients trust us implicitly. Every conversation, journey, and detail remains confidential.'
              },
              {
                title: 'Reliability',
                description: 'Precision timing and seamless execution ensure confidence in every booking.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-10 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-black">{value.title}</h3>
                <div className="w-12 h-0.5 bg-black mb-6" />
                <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-12 mt-12">
            {[
              {
                title: 'Loyalty',
                description: 'Our clients return not by chance, but by choice — a testament to consistency, care, and long-standing trust.'
              },
              {
                title: 'Service',
                description: 'Courtesy and composure are never optional. They are at the heart of who we are.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="group bg-white p-10 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl w-full md:w-[calc((100%-3rem)/3)]"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-black">{value.title}</h3>
                <div className="w-12 h-0.5 bg-black mb-6" />
                <p className="text-gray-600 leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
