import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    return (
      <footer className="bg-dark-900 border-t border-white/10 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-500/5 blur-[100px] -z-10" />

          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm">
                      © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                  </p>
                  <p className="text-gray-600 text-xs mt-1">
                      Built with React, Tailwind & Framer Motion
                  </p>
              </div>

              <div className="flex space-x-6">
                  {portfolioData.socialLinks.map((link) => (
                      <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors transform hover:scale-110"
                  aria-label={link.name}
              >
                  <link.icon size={20} />
              </a>
          ))}
              </div>
          </div>
      </footer>
  );
};

export default Footer;
