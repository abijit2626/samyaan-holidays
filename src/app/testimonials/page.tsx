import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Aneesh Kapoor",
      location: "Mumbai",
      text: "The Santorini trip curated by Samyaan was beyond words. Every detail, from the private caldera view villa to the sunset yacht cruise, was perfectly orchestrated.",
      rating: 5,
      date: "Last Month"
    },
    {
      name: "Sarah Jenkins",
      location: "London",
      text: "As a frequent luxury traveler, I'm hard to impress. But the Kyoto heritage experience blew me away. The attention to cultural authenticity was stunning.",
      rating: 5,
      date: "2 Months ago"
    },
    {
      name: "Vikram & Priya",
      location: "Delhi",
      text: "Our honeymoon in Amalfi was a dream. The AI assistant helped us pick the perfect hidden gems that weren't on any generic travel blog.",
      rating: 5,
      date: "Last Week"
    },
    {
      name: "Elena Rodriguez",
      location: "Madrid",
      text: "Incredible service. The concierge team was available 24/7. Truly felt like a VIP from start to finish.",
      rating: 5,
      date: "3 Months ago"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Legendary <span className="gold-gradient">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            The true measure of luxury is the memories we leave behind. 
            Hear from our community of global explorers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-panel p-10 relative group hover:border-gold/30 transition-colors">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold flex items-center justify-center rounded-lg text-black">
                <Quote size={24} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} size={16} fill="hsl(var(--gold))" className="text-gold" />
                ))}
              </div>

              <p className="text-xl font-medium text-white/90 mb-8 leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center font-bold text-gold border border-gold/20">
                      {t.name[0]}
                   </div>
                   <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.location}</div>
                   </div>
                </div>
                <div className="text-xs text-muted-foreground italic">{t.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story Form */}
        <div className="max-w-4xl mx-auto glass-panel p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none -z-10">
            <MessageSquare size={120} className="text-gold" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Share Your <span className="gold-gradient">Experience</span></h2>
              <p className="text-white/60 max-w-lg mx-auto">
                Your feedback fuels our pursuit of perfection. Become part of the Samyaan legacy.
              </p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs uppercase font-bold text-muted-foreground tracking-[0.2em] ml-1">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-gold outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div className="space-y-3">
                <label className="text-xs uppercase font-bold text-muted-foreground tracking-[0.2em] ml-1">Travel Year</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-gold outline-none transition-all" placeholder="e.g. 2024" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-xs uppercase font-bold text-muted-foreground tracking-[0.2em] ml-1">Your Review</label>
                <textarea className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-gold outline-none h-40 resize-none transition-all" placeholder="Tell us about your journey..."></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center mt-4">
                <button className="btn-primary px-12 py-4 text-lg">Submit Testimonial</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
