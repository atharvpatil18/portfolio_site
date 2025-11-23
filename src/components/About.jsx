import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I'm a passionate developer with a keen eye for design and a drive for creating seamless digital experiences.
                        With a background in computer science and years of hands-on experience, I bridge the gap between
                        complex backend logic and intuitive frontend interfaces.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        When I'm not coding, you can find me exploring new technologies, contributing to open source,
                        or enjoying a good cup of coffee while reading about the latest tech trends.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
