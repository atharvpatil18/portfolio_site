import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group"
      >
          <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                  opacity,
                  background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
              }}
          />

          <div className="relative h-48 overflow-hidden">
              <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors border border-white/20 backdrop-blur-md"
                  >
                      <Github size={20} />
                  </a>
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors border border-white/20 backdrop-blur-md"
                  >
                      <ExternalLink size={20} />
                  </a>
              </div>
          </div>

          <div className="p-6 relative z-10">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors font-serif">
                  {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                      <span
                          key={tech}
                  className="text-xs px-3 py-1 bg-white/5 text-primary-300 rounded-full border border-white/10"
              >
                  {tech}
              </span>
          ))}
              </div>
          </div>
      </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my passion for building digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
          ))}
              </div>
          </div>
      </section>
  );
};

export default Projects;
