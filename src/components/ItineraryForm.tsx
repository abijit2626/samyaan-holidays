'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Send, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

const ItineraryForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    duration: '',
    guests: '2',
    style: 'Luxury',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={120} className="text-gold" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Configure Your <span className="gold-gradient">Masterpiece</span></h2>
              <p className="text-muted-foreground mb-10">Tell us your vision, and our AI will curate the perfect journey.</p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <MapPin size={16} /> Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g. Maldives, Swiss Alps, Kyoto"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Calendar size={16} /> Duration (Days)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="e.g. 7"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Users size={16} /> Travelers
                  </label>
                  <select
                    name="guests"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all appearance-none"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, "6+"].map(n => (
                      <option key={n} value={n} className="bg-luxury-black">{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                {/* Style */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Sparkles size={16} /> Travel Style
                  </label>
                  <select
                    name="style"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all appearance-none"
                    value={formData.style}
                    onChange={handleChange}
                  >
                    {['Luxury', 'Adventure', 'Romantic', 'Family', 'Cultural'].map(s => (
                      <option key={s} value={s} className="bg-luxury-black">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Email Capture */}
                <div className="md:col-span-2 space-y-2 pt-4 border-t border-white/10">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Where should we send your itinerary?
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-gold outline-none transition-all"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="btn-primary px-8 whitespace-nowrap disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                      {loading ? 'Crafting...' : 'Generate Plan'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-12 text-center shadow-2xl"
          >
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-gold" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Itinerary <span className="gold-gradient">Processing</span></h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Our AI is currently crafting your bespoke journey to **{formData.destination}**. 
              A comprehensive guide has been sent to **{formData.email}**.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="text-gold font-semibold hover:underline"
            >
              Generate another itinerary
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItineraryForm;
