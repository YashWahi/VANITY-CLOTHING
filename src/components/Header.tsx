import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
  const location = useLocation();
  const { getTotalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-white text-xl font-bold tracking-wider">
              VANITY
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Cart Icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                  />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-orange-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      <Cart />
    </>
  );
};

export default Header;