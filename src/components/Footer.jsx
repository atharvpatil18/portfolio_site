import React from 'react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    {portfolioData.socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
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
