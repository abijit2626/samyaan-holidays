import React from 'react';
import ItineraryForm from '@/components/ItineraryForm';
import { Sparkles } from 'lucide-react';

export default function AIItineraryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gold/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-gold text-sm mb-6">
            <Sparkles size={16} />
            <span>AI-Powered Bespoke Travel</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Instant <span className="gold-gradient">Dream</span> Itineraries
          </h1>
          <p className="text-xl text-muted-foreground">
            No more hours of research. Our advanced AI engine analyzes thousands of data points 
            to create a personalized travel blueprint that matches your soul.
          </p>
        </div>

        <ItineraryForm />

        {/* Feature Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Hyper-Personalized",
              desc: "Algorithms that learn from your preferences to suggest activities you'll actually love."
            },
            {
              title: "Real-time Optimization",
              desc: "Considers seasonality, local events, and hidden gems known only to insiders."
            },
            {
              title: "Expertly Curated",
              desc: "Every AI output is verified against our signature luxury travel standards."
            }
          ].map((feature, i) => (
            <div key={i} className="text-center p-8 glass-panel">
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
