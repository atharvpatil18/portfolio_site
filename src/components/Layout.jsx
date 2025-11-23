import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary-500 selection:text-white">
            <div className="bg-noise" />
            <Navbar />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
