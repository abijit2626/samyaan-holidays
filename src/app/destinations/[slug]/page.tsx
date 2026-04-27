import React from 'react';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { MapPin, Calendar, Star, CheckCircle } from 'lucide-react';

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

// Mock Data for Dev (until Supabase is populated)
const MOCK_DESTINATIONS: Record<string, any> = {
  'santorini-greece': {
    name: 'Santorini',
    country: 'Greece',
    description: 'Breathtaking sunsets, whitewashed villages, and the deep blue Aegean Sea.',
    image_url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200',
    category: 'Coastal Luxury',
    highlights: ['Oia Sunsets', 'Private Infinity Pools', 'Luxury Catamaran Cruises'],
  },
  'kyoto-japan': {
    name: 'Kyoto',
    country: 'Japan',
    description: 'Serene bamboo forests, ancient temples, and the refined art of the tea ceremony.',
    image_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200',
    category: 'Cultural Heritage',
    highlights: ['Arashiyama Bamboo Grove', 'Zen Garden Meditation', 'Gion District Tours'],
  }
};

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = params;

  // Try fetching from Supabase
  const { data: destination } = await supabase
    .from('destinations')
    .select('*')
    .eq('slug', slug)
    .single();

  const currentDest = destination || MOCK_DESTINATIONS[slug];

  if (!currentDest) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={currentDest.image_url} 
          alt={currentDest.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-12 container mx-auto">
          <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest mb-4">
            <MapPin size={18} />
            {currentDest.country}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
            {currentDest.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">About the <span className="gold-gradient">Experience</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            {currentDest.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentDest.highlights?.map((h: string, i: number) => (
              <div key={i} className="glass-panel p-6 flex items-start gap-4">
                <CheckCircle className="text-gold mt-1 shrink-0" size={20} />
                <span className="text-lg font-medium">{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-12 glass-panel relative overflow-hidden bg-luxury-black">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Elite <span className="gold-gradient">Concierge</span></h3>
                <p className="text-white/60 mb-8">
                  Our private travel curators are ready to design your exclusive itinerary for {currentDest.name}.
                </p>
                <button className="btn-primary">Connect with an Expert</button>
             </div>
          </div>
        </div>

        {/* Sidebar / Quick Info */}
        <div className="space-y-8">
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/10">Destination Details</h3>
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1">Category</div>
                <div className="font-bold flex items-center gap-2">
                  <Star size={16} className="text-gold" />
                  {currentDest.category}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1">Best Time to Visit</div>
                <div className="font-bold flex items-center gap-2">
                  <Calendar size={16} className="text-white" />
                  March - October
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 border-gold/30 border-2">
            <h3 className="text-xl font-bold mb-4">Interested in {currentDest.name}?</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Enter your email and one of our consultants will reach out with curated packages.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white"
              />
              <button className="btn-primary w-full justify-center">Request Invitation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
