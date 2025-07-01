import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Shop Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our complete range of premium streetwear designed for those who dare to stand out
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Filter */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Products Message */}
        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your filters to see more products.</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900/50 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Be the first to know about new drops, exclusive releases, and special offers from Vanity.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 text-white border border-gray-700 px-4 py-3 focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 text-black px-6 py-3 font-semibold tracking-wide uppercase hover:bg-orange-400 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;