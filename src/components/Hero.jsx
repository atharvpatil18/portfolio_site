import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-blob" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[128px] animate-pulse" />

              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
              >
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
                  >
                      <span className="text-primary-400 font-medium tracking-wider text-sm uppercase">
                          Available for new projects
                      </span>
                  </motion.div>

                  <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight font-serif">
                      Hi, I'm <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-primary-400 animate-gradient-x">
                          {portfolioData.name}
                      </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                      {portfolioData.role}. <br />
                      <span className="text-gray-500">{portfolioData.about}</span>
                  </p>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="#projects"
                          className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary-500/25"
                      >
                          View Work <ArrowRight size={20} />
                      </motion.a>
                      <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 border border-white/10 backdrop-blur-md"
                      >
                          Download CV <Download size={20} />
                      </motion.a>
                  </div>
              </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
          >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
              >
                  <MousePointer2 size={20} />
              </motion.div>
          </motion.div>
      </section>
  );
};

export default Hero;
