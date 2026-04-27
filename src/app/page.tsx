import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Destinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Curated <span className="gold-gradient">Destinations</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Explore our hand-picked collection of the world's most exclusive and breathtaking locations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { 
                name: "Santorini, Greece", 
                img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600",
                category: "Coastal Luxury" 
              },
              { 
                name: "Kyoto, Japan", 
                img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600",
                category: "Cultural Heritage" 
              },
              { 
                name: "Amalfi Coast, Italy", 
                img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600",
                category: "Scenic Escape" 
              }
            ].map((dest) => (
              <div key={dest.name} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity group-hover:opacity-90" />
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{dest.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-16 text-lg font-semibold flex items-center gap-2 mx-auto hover:text-gold transition-colors">
            View All Destinations
            <span>&rarr;</span>
          </button>
        </div>
      </section>

      {/* AI Assistant Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxury-black bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-panel p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your Personal <span className="gold-gradient">AI Concierge</span></h2>
            <p className="text-white/60 mb-10 text-lg">
              Generate a bespoke, moment-by-moment itinerary tailored to your unique preferences and budget in seconds.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Try AI Itinerary Generator
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients <span className="gold-gradient">Say</span></h2>
              <p className="text-muted-foreground">Stories of unforgettable journeys and unparalleled service.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-panel p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, star) => <span key={star}>★</span>)}
                </div>
                <p className="text-lg italic mb-6">
                  "The most seamless travel experience I've ever had. Samyaan Holidays truly understands the meaning of bespoke luxury."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                  <div>
                    <div className="font-bold">Rahul Sharma</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Premium Client</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
