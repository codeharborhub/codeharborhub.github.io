import React, { useState, useMemo } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  Play, 
  Filter,
  Sparkles,
  Search,
  Trophy,
  Code2,
  Video,
  Radio
} from 'lucide-react';

// --- Types for Industry Standards ---
type EventStatus = 'upcoming' | 'live' | 'past';
type EventCategory = 'Hackathon' | 'Workshop' | 'Webinar' | 'Meetup';

interface Event {
  id: number;
  category: EventCategory;
  title: string;
  date: string;
  time: string;
  venue: string;
  status: EventStatus;
  image: string;
  description: string;
  link: string;
}

export default function Events() {
  const { siteConfig } = useDocusaurusContext();
  const [activeTab, setActiveTab] = useState<EventStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");

  // --- Full Dataset (10 Events) ---
  const allEvents: Event[] = [
    {
      id: 1,
      category: "Hackathon",
      title: "CodeHarbor Global Hack 2026",
      date: "Mar 15, 2026",
      time: "48 Hours",
      venue: "Discord / Virtual",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description: "Building open-source tools for the next generation of decentralized web.",
      link: "#"
    },
    {
      id: 2,
      category: "Workshop",
      title: "System Design Masterclass",
      date: "Jan 10, 2026",
      time: "06:00 PM",
      venue: "YouTube Live",
      status: "live",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      description: "Live deep dive into distributed systems and high-scale architecture.",
      link: "#"
    },
    {
      id: 3,
      category: "Webinar",
      title: "The Future of AI in DevTools",
      date: "Feb 05, 2026",
      time: "10:00 AM",
      venue: "Zoom",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "How LLMs are reshaping the IDE experience for modern engineers.",
      link: "#"
    },
    {
      id: 4,
      category: "Meetup",
      title: "Bangalore Dev Mixer",
      date: "Feb 20, 2026",
      time: "05:00 PM",
      venue: "Indiranagar, BLR",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      description: "In-person networking event for local CodeHarborHub contributors.",
      link: "#"
    },
    {
      id: 5,
      category: "Workshop",
      title: "Rust for JS Developers",
      date: "Dec 15, 2025",
      time: "3 Hours",
      venue: "Recorded",
      status: "past",
      image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=800",
      description: "Transitioning your logic from TypeScript to memory-safe Rust.",
      link: "#"
    },
    {
      id: 6,
      category: "Hackathon",
      title: "UI/UX Blitz 2025",
      date: "Nov 10, 2025",
      time: "24 Hours",
      venue: "Figma / Virtual",
      status: "past",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      description: "Rapid prototyping challenge for designing community-led education portals.",
      link: "#"
    },
    {
      id: 7,
      category: "Webinar",
      title: "PostgreSQL Performance",
      date: "Oct 22, 2025",
      time: "1 Hour",
      venue: "Recorded",
      status: "past",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
      description: "Optimizing queries and indexing strategies for multi-tenant apps.",
      link: "#"
    },
    {
      id: 8,
      category: "Workshop",
      title: "Advanced Tailwind V4",
      date: "Mar 01, 2026",
      time: "11:00 AM",
      venue: "YouTube Live",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      description: "Exploring the new engine and CSS-first configuration.",
      link: "#"
    },
    {
      id: 9,
      category: "Meetup",
      title: "Open Source Day Online",
      date: "Jan 15, 2026",
      time: "08:00 PM",
      venue: "Discord Live",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      description: "Monthly check-in and project onboarding for new contributors.",
      link: "#"
    },
    {
      id: 10,
      category: "Webinar",
      title: "Career in DevRel",
      date: "Sept 12, 2025",
      time: "Recorded",
      venue: "On-Demand",
      status: "past",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
      description: "How to bridge the gap between engineering and community building.",
      link: "#"
    }
  ];

  // --- Filtering Logic ---
  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const matchesTab = activeTab === 'all' || event.status === activeTab;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           event.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <Layout
      title={`Elite Events | ${siteConfig.title}`}
      description="Join high-stakes hackathons, deep-dive workshops, and industry meetups."
    >
      <main className="min-h-screen transition-all duration-500 pb-20" style={{ backgroundColor: 'var(--ifm-bg-color)', color: 'var(--ifm-text-color)' }}>
        
        {/* --- Hero: High Authority --- */}
        {/* --- Hero Section with Animated Mesh Gradient --- */}
        <section className="relative py-24 px-6 overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[100px]" style={{ backgroundColor: 'var(--ifm-color-primary)' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-left lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border" style={{ borderColor: 'var(--ifm-color-primary)', color: 'var(--ifm-color-primary)' }}>
                  <Sparkles size={14} /> Experience Excellence
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                  The <span style={{ color: 'var(--ifm-color-primary)' }}>Events</span> <br/>
                  Pipeline
                </h1>
                <p className="text-xl font-medium opacity-70 max-w-lg leading-relaxed">
                  Where theory meets deployment. Participate in world-class technical events curated for the elite engineering community.
                </p>
              </div>

              {/* Live Card Shortcut */}
              <div className="lg:w-1/2 w-full">
                <div className="backdrop-blur-xl bg-white/50 dark:bg-black/20 border border-white/20 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6">
                    <Radio className="text-red-500 animate-pulse" size={32} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-60">Happening Now</p>
                  <h2 className="text-3xl font-bold mb-6">System Design Interview Masterclass</h2>
                  <div className="flex items-center gap-4 mb-8">
                     <img src="https://github.com/ajay-dhangar.png" className="w-12 h-12 rounded-full border-2" style={{ borderColor: 'var(--ifm-color-primary)' }} />
                     <div>
                        <p className="text-sm font-bold">Ajay Dhangar</p>
                        <p className="text-xs opacity-60">Lead Architect</p>
                     </div>
                  </div>
                  <button className="w-full py-4 rounded-2xl font-black uppercase text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2" style={{ backgroundColor: 'var(--ifm-color-primary)', color: '#fff' }}>
                    Join Live Session <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Advanced Control Bar --- */}
        <section className="sticky top-[60px] z-50 p-4 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md" style={{ backgroundColor: 'var(--ifm-bg-color)' }}>
          <div className="mx-auto backdrop-blur-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-3 shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Tab Switcher */}
            <div className="flex gap-1 bg-slate-100 dark:bg-slate-800/50 rounded-2xl w-full md:w-auto border border-slate-200 dark:border-slate-700 overflow-hidden">
              {['all', 'live', 'upcoming', 'past'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab 
                    ? 'bg-white dark:bg-slate-700 shadow-md' 
                    : 'opacity-40 hover:opacity-100'
                  }`}
                  style={{ color: activeTab === tab ? 'var(--ifm-color-primary)' : 'inherit' }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input 
                type="text" 
                placeholder="Search events, tech stack or categories..."
                className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm font-bold focus:ring-2 outline-none transition-all"
                style={{ '--tw-ring-color': 'var(--ifm-color-primary)' } as any}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* --- Dynamic Bento Grid --- */}
        <section className="py-20 px-6 mx-auto">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[340px]">
              {filteredEvents.map((event, i) => (
                <div 
                  key={event.id} 
                  className={`relative group overflow-hidden rounded-[3rem] border transition-all duration-700 hover:-translate-y-4 ${
                    i % 5 === 0 ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4 md:row-span-2'
                  }`}
                  style={{ 
                    backgroundColor: 'var(--ifm-bg-color)', 
                    borderColor: 'rgba(128,128,128,0.1)',
                    boxShadow: event.status === 'live' ? `0 0 40px -10px var(--ifm-color-primary)55` : 'none'
                  }}
                >
                  {/* Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <img src={event.image} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-125 opacity-40 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  </div>

                  {/* Icon Badge Layer */}
                  <div className="absolute top-8 left-8 z-20">
                     <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                        {event.category === 'Hackathon' && <Trophy size={12} />}
                        {event.category === 'Workshop' && <Code2 size={12} />}
                        {event.category === 'Webinar' && <Video size={12} />}
                        {event.category}
                     </div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 h-full p-10 flex flex-col">
                    <div className="mt-auto">
                      <div className="flex items-center gap-3 mb-4">
                        {event.status === 'live' && (
                          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500 text-[8px] font-black text-white uppercase animate-pulse">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" /> Live Now
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{event.date}</span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tighter uppercase italic group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </h3>

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex gap-4">
                           <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase"><Clock size={14} /> {event.time}</div>
                           <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase"><MapPin size={14} /> {event.venue}</div>
                        </div>
                        <a 
                          href={event.link}
                          className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center transition-all hover:scale-110 hover:rotate-12"
                        >
                          {event.status === 'past' ? <Play size={18} fill="currentColor"/> : <ArrowRight size={18} />}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <h3 className="text-2xl font-bold opacity-30 uppercase tracking-[0.5em]">No events found</h3>
            </div>
          )}
        </section>

        {/* --- Footer CTA: Speaker Program --- */}
        <section className="px-6 py-20">
           <div className="mx-auto rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden bg-slate-900 text-white shadow-3xl">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                  Have a <span style={{ color: 'var(--ifm-color-primary)' }}>Vision?</span>
                </h2>
                <p className="text-xl text-white/60 max-w-xl mx-auto mb-12 font-medium">
                  We're always scouting for elite engineers to host workshops and lead community hackathons.
                </p>
                <button className="px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest transition-all hover:scale-105 shadow-2xl" style={{ backgroundColor: 'var(--ifm-color-primary)' }}>
                  Apply as Speaker
                </button>
              </div>
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 blur-[150px] opacity-30 rounded-full" style={{ backgroundColor: 'var(--ifm-color-primary)' }} />
           </div>
        </section>

      </main>
    </Layout>
  );
}