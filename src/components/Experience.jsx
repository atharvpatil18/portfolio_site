import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    return (
      <section id="experience" className="py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px] -z-10" />

          <div className="max-w-7xl mx-auto px-6">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
              >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Experience</h2>
                  <p className="text-gray-400">My professional journey.</p>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                  {portfolioData.experience.map((exp, index) => (
                      <motion.div
                          key={exp.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors font-serif">
                              {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-400 mt-1">
                              <Briefcase size={16} className="text-primary-500" />
                              <span className="font-medium">{exp.company}</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                      </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                  </p>
              </motion.div>
          ))}
              </div>
          </div>
      </section>
  );
};

export default Experience;
