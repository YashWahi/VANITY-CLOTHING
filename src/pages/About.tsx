import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-orange-500 text-lg tracking-wide uppercase">
            Where rebellion meets refinement
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-gray-300 leading-relaxed"
        >
          <div className="text-xl md:text-2xl text-white font-light">
            Vanity was born from the streets, crafted for those who refuse to blend in.
          </div>

          <p className="text-lg">
            In 2020, we set out to redefine streetwear culture. Not just another clothing brand, 
            but a movement that celebrates individuality, authenticity, and the courage to stand out. 
            Every piece we create tells a story of rebellion against conformity and the pursuit of 
            personal expression.
          </p>

          <p className="text-lg">
            Our designs draw inspiration from urban landscapes, underground culture, and the raw 
            energy of street art. We believe that fashion should be more than just clothing—it 
            should be a statement, a form of self-expression, and a way to connect with like-minded 
            individuals who share the same passion for authenticity.
          </p>

          <p className="text-lg">
            From our signature hoodies to our limited-edition drops, every Vanity piece is 
            meticulously crafted using premium materials and cutting-edge design techniques. 
            We work with local artisans and ethical manufacturers to ensure that our commitment 
            to quality extends beyond just the final product.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Authenticity</h3>
              <p className="text-gray-300">
                We create original designs that reflect genuine street culture, not manufactured trends. 
                Every piece is a testament to real urban experiences and artistic expression.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Quality</h3>
              <p className="text-gray-300">
                Premium materials, superior craftsmanship, and attention to detail in every stitch. 
                We believe that true streetwear should last as long as the culture it represents.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Community</h3>
              <p className="text-gray-300">
                Built by and for the streetwear community. We listen to our customers, collaborate 
                with local artists, and give back to the communities that inspire us.
              </p>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Innovation</h3>
              <p className="text-gray-300">
                Constantly pushing boundaries in design, materials, and sustainability. We're not 
                just following trends—we're creating the future of streetwear.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >         
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gray-900/50 rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Movement
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to express your authentic self? Explore our collection and become part of 
            the Vanity community where rebellion meets refinement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-orange-500 text-black px-8 py-3 font-semibold tracking-wide uppercase hover:bg-orange-400 transition-colors duration-200"
            >
              Shop Collection
            </a>
            <a
              href="/contact"
              className="border border-orange-500 text-orange-500 px-8 py-3 font-semibold tracking-wide uppercase hover:bg-orange-500 hover:text-black transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;