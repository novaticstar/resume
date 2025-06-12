"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "hello world, i'm matthew martin";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Slightly faster typing effect

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-300">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                {displayText}
                <span className="animate-pulse text-blue-600">|</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                software engineer & full stack developer
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                rising 4th year @ <span className="text-orange-600 font-semibold">university of virginia</span> pursuing computer science with a passion for building innovative solutions
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/resume" 
                className="px-6 py-3 rounded-xl text-blue-600 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
              >
                view my resume
              </Link>
              <Link 
                href="/projects" 
                className="px-6 py-3 rounded-xl text-blue-600 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
              >
                see my projects
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-500">internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-gray-500">team members led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-500">projects built</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <Image
                  src="./images/temp_img.png"
                  alt="matthew martin - software engineer"
                  width={300}
                  height={300}
                  className="rounded-xl"
                  priority
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 text-blue-600 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-blue-500/20 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  cs @ uva
                </div>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  class of 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}