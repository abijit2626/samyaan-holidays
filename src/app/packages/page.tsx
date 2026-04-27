import React from 'react';
import { Check, Sparkles, Crown, Trophy } from 'lucide-react';

export default function PackagesPage() {
  const packages = [
    {
      name: "Essential Luxury",
      price: "Starting from $2,500",
      icon: <Sparkles className="text-gold" size={32} />,
      features: [
        "Curated 5-Star Accommodations",
        "Private Airport Transfers",
        "Personalized AI Itinerary",
        "24/7 Virtual Concierge",
        "Essential Sightseeing Access"
      ],
      popular: false
    },
    {
      name: "Signature Collection",
      price: "Starting from $5,000",
      icon: <Trophy className="text-gold" size={32} />,
      features: [
        "Premium Boutique Hotels",
        "Chauffeur-Driven Private Cars",
        "AI-Enhanced Priority Planning",
        "Dedicated Human Concierge",
        "Private Guided Tours",
        "Exclusive Dining Reservations"
      ],
      popular: true
    },
    {
      name: "Royal Bespoke",
      price: "Starting from $12,000",
      icon: <Crown className="text-gold" size={32} />,
      features: [
        "Ultra-Luxury Palaces & Villas",
        "Private Jet/Helicopter Options",
        "Unlimited Itinerary Refinement",
        "24/7 Lifestyle Manager",
        "After-Hours Museum Access",
        "Private Chef Experiences",
        "VIP Security Services"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Travel <span className="gold-gradient">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Select the tier of luxury that matches your desires. Every Samyaan package 
            is a promise of excellence and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`glass-panel p-10 flex flex-col relative ${
                pkg.popular ? 'border-gold/50 shadow-[0_0_40px_rgba(212,175,55,0.1)]' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-gold font-semibold tracking-wide">{pkg.price}</div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                pkg.popular 
                  ? 'bg-gold text-black hover:bg-gold/90' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                Inquire Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 glass-panel p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Looking for something <span className="gold-gradient">Entirely Unique?</span></h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Our master curators specialize in crafting one-of-a-kind journeys that defy categorization. 
            Contact our high-net-worth desk for a completely blank-canvas consultation.
          </p>
          <button className="btn-primary px-10 py-4 text-lg">
            Request Private Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
