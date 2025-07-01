import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart, Product } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [isHovered, setIsHovered] = useState(false);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  return (
    <motion.div
      className="group relative bg-gray-900 rounded-lg overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={handleAddToCart}
            className="bg-orange-500 text-black px-6 py-2 font-semibold tracking-wide uppercase hover:bg-orange-400 transition-colors duration-200"
          >
            Add to Cart
          </motion.button>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/80 text-white text-xs px-2 py-1 rounded uppercase tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Size Selection */}
        <div className="mb-4">
          <p className="text-gray-300 text-sm mb-2">Size:</p>
          <div className="flex space-x-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-8 h-8 text-xs font-medium border transition-colors duration-200 ${
                  selectedSize === size
                    ? 'bg-orange-500 text-black border-orange-500'
                    : 'bg-transparent text-gray-400 border-gray-600 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-orange-500 font-bold text-xl">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;