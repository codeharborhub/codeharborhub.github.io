import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { 
  Github, 
  Users, 
  Star, 
  GitPullRequest, 
  Trophy, 
  ExternalLink,
  Code2,
  Heart
} from 'lucide-react';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export default function Contributors() {
  const { siteConfig } = useDocusaurusContext();
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch Real GitHub Data ---
  useEffect(() => {
    fetch("https://api.github.com/repos/codeharborhub/codeharborhub.github.io/contributors?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching contributors:", err));
  }, []);

  return (
    <Layout
      title={`Contributors | ${siteConfig.title}`}
      description="The amazing individuals building the future of CodeHarborHub."
    >
      <main className="min-h-screen pb-20" style={{ backgroundColor: 'var(--ifm-bg-color)', color: 'var(--ifm-text-color)' }}>
        
        {/* --- Hero: The Recognition Wall --- */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full blur-[120px] rounded-full" style={{ backgroundColor: 'var(--ifm-color-primary)' }} />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xl">
              <Trophy size={14} style={{ color: 'var(--ifm-color-primary)' }} /> Community Powered
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Our <span style={{ color: 'var(--ifm-color-primary)' }}>Engineers</span>
            </h1>
            <p className="text-xl opacity-60 max-w-2xl mx-auto font-medium leading-relaxed">
              Every pull request, documentation fix, and bug report helps CodeHarborHub grow. 
              We are a community-first organization. Meet the humans behind the code.
            </p>
          </div>
        </section>

        {/* --- Repository Stats --- */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Contributors", value: contributors.length || "...", icon: <Users size={20}/> },
              { label: "Open Issues", value: "20+", icon: <Code2 size={20}/> },
              { label: "PRs Merged", value: "150+", icon: <GitPullRequest size={20}/> },
              { label: "Community", value: "Global", icon: <Star size={20} className="text-yellow-500"/> },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl text-center shadow-sm">
                <div className="flex justify-center mb-3" style={{ color: 'var(--ifm-color-primary)' }}>{stat.icon}</div>
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold opacity-40 tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- The Contributor Wall --- */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: 'var(--ifm-color-primary)' }} />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {contributors.map((user) => (
                <a 
                  key={user.id} 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className="relative overflow-hidden rounded-3xl aspect-square bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                    <img 
                      src={user.avatar_url} 
                      alt={user.login} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge for contributions */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-[8px] font-black text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      {user.contributions} Commits
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-xs font-black truncate uppercase tracking-tighter">@{user.login}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* --- How to Get Listed --- */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter leading-none">
                Want your name <br/>
                <span style={{ color: 'var(--ifm-color-primary)' }}>on this wall?</span>
              </h2>
              <p className="text-lg opacity-60 font-medium mb-10 leading-relaxed">
                Whether you're fixing a typo, optimizing a React component, or designing 
                the UI, we want you on our team. Follow our contribution guidelines 
                and get started today.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/codeharborhub/codeharborhub.github.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"
                  target="_blank"
                  className="px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest text-white shadow-xl transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--ifm-color-primary)' }}
                >
                  Find First Issue
                </a>
                <a 
                  href="/contributing"
                  className="px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest border border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Read Guidelines
                </a>
              </div>
            </div>

            {/* Contribution Types Grid */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Code", color: "bg-blue-500/10", text: "text-blue-500" },
                 { label: "Docs", color: "bg-green-500/10", text: "text-green-500" },
                 { label: "Design", color: "bg-purple-500/10", text: "text-purple-500" },
                 { label: "Support", color: "bg-red-500/10", text: "text-red-500" },
               ].map((item, i) => (
                 <div key={i} className={`p-8 rounded-[2.5rem] ${item.color} flex flex-col items-center justify-center border border-white/5`}>
                   <div className={`font-black uppercase tracking-widest text-lg ${item.text}`}>{item.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- Support Section --- */}
        <section className="py-20 px-6 text-center border-t border-slate-200 dark:border-slate-800">
           <Heart className="mx-auto mb-6 animate-pulse text-red-500" size={40} />
           <h3 className="text-2xl font-bold mb-4 italic uppercase tracking-widest">Support our Open Source Journey</h3>
           <p className="opacity-50 mb-8 font-medium">Star the repo to show your support!</p>
           <a 
            href="https://github.com/codeharborhub/codeharborhub.github.io" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-all shadow-2xl"
           >
             <Github size={18}/> Star on GitHub <Star size={16} fill="currentColor" />
           </a>
        </section>

      </main>
    </Layout>
  );
}