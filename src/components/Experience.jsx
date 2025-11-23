import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Experience
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-gray-700 hover:border-blue-500 transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-blue-500" />
                            <div className="mb-1 flex items-center gap-2 text-blue-400">
                                <Briefcase size={16} />
                                <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className="text-gray-400 font-medium mb-2">{exp.company}</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
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
