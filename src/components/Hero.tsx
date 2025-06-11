"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "hello world, i'm matthew martin";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-blue-300">
        <div className="text-center max-w-5xl p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-left">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 text-left">
                        a software engineer and full stack developer
                    </p>
                    <div className="flex justify-left space-x-4">
                        <a href="#about" className="text-gray-700 bg-gradient-to-b from-transparent to-white/20 backdrop-blur-lg border border-white/20 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-3 py-2 rounded-md transition-all duration-300">
                        view my resume
                        </a>
                        <a href="#experience" className="text-gray-700 bg-gradient-to-b from-transparent to-white/20 backdrop-blur-lg border border-white/20 hover:text-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 px-3 py-2 rounded-md transition-all duration-300">
                        see my experiences
                        </a>
                    </div>
                </div>
                <div>
                    <Image
                      src="/resume/images/temp_img.png" // Add /resume prefix
                      alt="Matthew Martin - Placeholder"
                      width={320}
                      height={320}
                      className=""
                      priority
                    />
                </div>
            </div>
        </div>
    </section>
  );
}