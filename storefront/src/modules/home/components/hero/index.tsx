'use client'

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background with Next.js Image optimization */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/djgmw3i6f/image/upload/t_Banner%2016:9/v1728827333/Frame_4_yur69t.png"
          alt="Security background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full pt-16 sm:pt-20">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Subtitle */}
            <motion.div variants={fadeIn}>
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-wider text-white/90 border border-white/20 rounded-full backdrop-blur-sm">
                Secure Your World
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
            >
              Advanced Security
              <span className="block text-green-400">Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeIn}
              className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8"
            >
              Ensure peace of mind with cutting-edge security technology, from intelligent 
              surveillance systems to advanced access control solutions for your home and business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/store"
                className="group inline-flex items-center px-6 py-3 text-base font-medium text-black bg-white rounded-lg transition-all duration-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              
              <Link
                href="/solutions"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;