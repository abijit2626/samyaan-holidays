'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Media Placeholder (Dynamic Image or Video) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop" 
          alt="Luxury Travel"
          className="w-full h-full object-cover transform scale-110 motion-safe:animate-pulse"
          style={{ filter: 'brightness(0.7)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-white/80 text-sm mb-8"
        >
          <Sparkles size={16} className="text-gold" />
          <span>Experience the Art of Premium Travel</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Elevate Your <span className="gold-gradient">Journey</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Curating bespoke luxury experiences for the discerning traveler. 
          Discover hidden gems and legendary destinations with Samyaan Holidays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="btn-primary text-lg px-8 py-4 group">
            Plan My Trip
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="glass-panel text-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
            <MapPin size={20} />
            Explore Destinations
          </button>
        </motion.div>

        {/* Stats / Quick Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Destinations', value: '50+' },
            { label: 'Happy Clients', value: '10K+' },
            { label: 'Luxury Partners', value: '200+' },
            { label: 'Rating', value: '4.9/5' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
