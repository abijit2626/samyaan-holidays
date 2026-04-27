'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { LayoutDashboard, Users, Map, Settings, Trash2, ExternalLink, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [destinations, setDestinations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'leads' | 'destinations'>('leads');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [leadsRes, destsRes] = await Promise.all([
      supabase.from('leads').select('*').order('created_at', { ascending: false }),
      supabase.from('destinations').select('*').order('created_at', { ascending: false })
    ]);

    if (leadsRes.data) setLeads(leadsRes.data);
    if (destsRes.data) setDestinations(destsRes.data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col gap-8">
        <div className="font-bold text-xl tracking-tighter uppercase mb-4">
          Samyaan <span className="text-gold">Admin</span>
        </div>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${activeTab === 'leads' ? 'bg-gold text-black' : 'hover:bg-white/5'}`}
          >
            <Users size={20} /> Leads Management
          </button>
          <button 
            onClick={() => setActiveTab('destinations')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${activeTab === 'destinations' ? 'bg-gold text-black' : 'hover:bg-white/5'}`}
          >
            <Map size={20} /> Destinations
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <LayoutDashboard size={20} /> Analytics
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
            <Settings size={20} /> Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">
            {activeTab === 'leads' ? 'Customer Leads' : 'Destinations CMS'}
          </h1>
          {activeTab === 'destinations' && (
            <button className="btn-primary">
              <Plus size={20} /> Add Destination
            </button>
          )}
        </header>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gold" />
          </div>
        ) : (
          <div className="glass-panel overflow-hidden">
            {activeTab === 'leads' ? (
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-4 font-semibold uppercase text-xs tracking-widest text-muted-foreground">Contact</th>
                    <th className="p-4 font-semibold uppercase text-xs tracking-widest text-muted-foreground">Interest</th>
                    <th className="p-4 font-semibold uppercase text-xs tracking-widest text-muted-foreground">Status</th>
                    <th className="p-4 font-semibold uppercase text-xs tracking-widest text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leads.length > 0 ? leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="font-bold">{lead.email}</div>
                        <div className="text-xs text-muted-foreground">{lead.full_name || 'Anonymous'}</div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-md border border-gold/20">
                          {lead.destination_interest}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-xs font-bold uppercase py-1 px-3 bg-green-500/10 text-green-500 rounded-full">
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="p-12 text-center text-muted-foreground">No leads found yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {destinations.length > 0 ? destinations.map((dest) => (
                  <div key={dest.id} className="border border-white/10 rounded-xl overflow-hidden group">
                    <img src={dest.image_url} alt={dest.name} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">{dest.name}</h3>
                        <div className="flex gap-2">
                           <button className="p-1 hover:text-gold"><ExternalLink size={16} /></button>
                           <button className="p-1 hover:text-red-500"><Trash2 size={16} /></button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{dest.description}</p>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full p-12 text-center text-muted-foreground">No destinations managed yet.</div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
