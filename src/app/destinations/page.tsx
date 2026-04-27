import React from 'react';
import Link from 'next/link';

export default function DestinationsPage() {
  const destinations = [
    { 
      name: "Santorini, Greece", 
      slug: "santorini",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
      category: "Coastal Luxury",
      description: "Pristine white villas perched above the deep blue Aegean sea."
    },
    { 
      name: "Kyoto, Japan", 
      slug: "kyoto",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
      category: "Cultural Heritage",
      description: "Timeless temples and serene Zen gardens in the heart of Japan."
    },
    { 
      name: "Amalfi Coast, Italy", 
      slug: "amalfi",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800",
      category: "Scenic Escape",
      description: "Dramatic cliffs and colorful towns overlooking the Tyrrhenian Sea."
    },
    { 
      name: "Maldives", 
      slug: "maldives",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
      category: "Island Paradise",
      description: "Overwater bungalows and crystal clear turquoise lagoons."
    },
    { 
      name: "Swiss Alps, Switzerland", 
      slug: "swiss-alps",
      img: "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?q=80&w=800",
      category: "Alpine Luxury",
      description: "World-class skiing and breathtaking mountain vistas."
    },
    { 
      name: "Bora Bora", 
      slug: "bora-bora",
      img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800",
      category: "Tropical Serenity",
      description: "The jewel of French Polynesia with iconic turquoise waters."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Curated <span className="gold-gradient">Destinations</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our hand-picked collection of the world's most exclusive and breathtaking locations, 
            each chosen for its unique character and luxury standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest) => (
            <Link 
              key={dest.slug} 
              href={`/destinations/${dest.slug}`}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-100" />
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">{dest.category}</span>
                <h3 className="text-3xl font-bold text-white mb-3">{dest.name}</h3>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {dest.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Explore Journey <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
