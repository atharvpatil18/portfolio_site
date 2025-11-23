import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                  ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 py-4'
                  : 'bg-transparent py-6'
              }`}
      >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <a href="#" className="text-2xl font-bold font-serif tracking-tight">
                  Portfolio<span className="text-primary-500">.</span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                  {navLinks.map((link) => (
                      <a
                          key={link.name}
                          href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
              </a>
          ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(!isOpen)}
              >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
              {isOpen && (
                  <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/10"
                  >
                      <div className="flex flex-col p-6 space-y-4">
                          {navLinks.map((link) => (
                              <a
                                  key={link.name}
                                  href={link.href}
                      className="text-gray-300 hover:text-white text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                  >
                      {link.name}
                  </a>
              ))}
                      </div>
                  </motion.div>
              )}
          </AnimatePresence>
      </nav>
  );
};

export default Navbar;
