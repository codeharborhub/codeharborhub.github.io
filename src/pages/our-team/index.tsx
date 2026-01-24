import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { Github, Linkedin, Twitter, Rocket, Heart, Code, Coffee } from "lucide-react";
import { teamMembers } from '@site/src/data/team';

export default function TeamPage() {

  return (
    <Layout
      title={`Our Team `}
      description="Meet the core team behind CodeHarborHub. Our experts are dedicated to open-source education and web development."
    >
      {/* 1. Hero / Header Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(var(--ifm-color-primary)_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            The Faces Behind <span className="text-[var(--ifm-color-primary)]">CodeHarborHub</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            We are a global collective of developers, designers, and educators 
            united by a single mission: to make high-quality tech education 
            accessible, open-source, and community-driven.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="#team-grid" className="px-8 py-3 bg-[var(--ifm-color-primary)] text-white font-bold rounded-full hover:opacity-90 transition-all hover:text-gray-200">
              Meet the Team
            </Link>
            <Link to="https://github.com/codeharborhub" className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
              Join as Contributor
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Values Section (More Info) */}
      <section className="py-20 bg-[var(--ifm-bg-color)] border-b border-[var(--ifm-color-primary)]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 text-blue-500"><Code size={32}/></div>
              <h3 className="text-2xl font-bold">Open Source First</h3>
              <p className="opacity-70">Everything we build is public. We believe the best way to learn is by contributing to real-world software.</p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-red-500/10 text-red-500"><Heart size={32}/></div>
              <h3 className="text-2xl font-bold">Community Driven</h3>
              <p className="opacity-70">Our roadmap is shaped by our learners. We grow together by sharing knowledge and peer-reviewing code.</p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 text-amber-500"><Rocket size={32}/></div>
              <h3 className="text-2xl font-bold">Career Focused</h3>
              <p className="opacity-70">We don't just teach syntax; we teach the industry standards, DSA, and architecture required for top tech roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Grid Section */}
      <section id="team-grid" className="py-24 px-6 bg-[var(--ifm-bg-color)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-[var(--ifm-text-color)] mb-4">
                Our <span className="text-[var(--ifm-color-primary)]">Core Team</span>
              </h2>
              <p className="opacity-70 text-lg">
                Meet the leadership team ensuring CodeHarborHub remains the #1 destination for open-source learning.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-700">
               <Coffee size={16} className="text-[var(--ifm-color-primary)]" />
               <span>Fuelled by 100+ contributors</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.slug}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[4/5] shadow-lg border border-transparent hover:border-[var(--ifm-color-primary)]/50 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <Link
                        to={`/our-team/details?member=${member.slug}`}
                        className="hover:no-underline"
                      >
                        <h3 className="text-xl font-bold text-white leading-none hover:text-[var(--ifm-color-primary)] transition-colors">
                          {member.name}
                        </h3>
                      </Link>
                      <p className="text-[var(--ifm-color-primary)] text-sm mt-2 font-medium">
                        {member.role}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 bg-white/10 backdrop-blur-md p-2 rounded-lg translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                      <a href={member.socials.github} target="_blank" className="text-white hover:text-[var(--ifm-color-primary)] transition-transform hover:scale-110"><Github size={18} /></a>
                      <a href={member.socials.twitter} target="_blank" className="text-white hover:text-[var(--ifm-color-primary)] transition-transform hover:scale-110"><Twitter size={18} /></a>
                      <a href={member.socials.linkedin} target="_blank" className="text-white hover:text-[var(--ifm-color-primary)] transition-transform hover:scale-110"><Linkedin size={18} /></a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 h-full w-1 bg-[var(--ifm-color-primary)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Join Us CTA Section (Increasing Content) */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[var(--ifm-color-primary)] to-blue-700 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black rounded-full blur-3xl" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">Want to Join the Crew?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            CodeHarborHub is always looking for passionate developers, technical writers, 
            and mentors. If you love open source and helping others grow, we'd love to have you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <Link to="https://github.com/codeharborhub" className="px-10 py-4 bg-white text-blue-700 font-black rounded-full hover:scale-105 transition-transform shadow-lg">
                Start Contributing
             </Link>
             <Link to="/contact" className="px-10 py-4 bg-transparent border-2 border-white text-white hover:text-gray-200 font-black rounded-full hover:bg-white/10 transition-all">
                Contact Us
             </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}