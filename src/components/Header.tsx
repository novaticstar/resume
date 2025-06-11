"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past hero section (100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8); // Show at 80% of hero height
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-700">matthew martin</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-600 font-medium">software engineer</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-3 py-2 rounded-md transition-all duration-300">view my resume</a>
          <a href="#experience" className="text-gray-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-3 py-2 rounded-md transition-all duration-300">see my experiences</a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}