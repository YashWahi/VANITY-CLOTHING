import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                  </svg>
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm">{item.name}</h3>
                          {item.size && (
                            <p className="text-gray-400 text-xs">Size: {item.size}</p>
                          )}
                          <p className="text-orange-500 font-semibold">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                            className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
                          >
                            -
                          </button>
                          <span className="text-white w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                            className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between items-center text-lg font-bold text-white">
                      <span>Total:</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;