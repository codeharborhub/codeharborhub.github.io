import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Zap,
  Mail
} from 'lucide-react';

export default function Team() {
  const { siteConfig } = useDocusaurusContext();

  const coreTeam = [
    {
      name: "Ajay Dhangar",
      role: "Founder & Lead Architect",
      image: "https://github.com/ajay-dhangar.png",
      bio: "Visionary behind CodeHarborHub. Passionate about open-source and democratizing tech education.",
      skills: ["System Design", "React", "Cloud"],
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Team Member",
      role: "Core Contributor",
      image: "https://github.com/github.png",
      bio: "Specializes in high-performance backend systems and community engagement strategies.",
      skills: ["Node.js", "Go", "DevOps"],
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    // Add more team members here
  ];

  return (
    <Layout
      title={`Our Team - ${siteConfig.title}`}
      description="Meet the visionaries and engineers building the future of CodeHarborHub."
    >
      <main className="bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-500">
        
        {/* --- Advanced Hero Section --- */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10" />
          
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              The Minds Behind <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">CodeHarborHub</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are a global collective of engineers, designers, and educators 
              united by a single mission: to build the world's most accessible 
              technical harbor.
            </p>
          </div>
        </section>

        {/* --- Leadership / Bento Grid --- */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, i) => (
              <div key={i} className="group relative">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  
                  {/* Avatar & Status */}
                  <div className="relative w-32 h-32 mb-8">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-3xl object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.skills.map((skill, si) => (
                      <span key={si} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Footer */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <a href={member.social.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.social.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-slate-400 hover:text-sky-400 transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Values / Organization DNA --- */}
        <section className="py-24 px-6 bg-slate-900 text-white mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Our Core Principles</h2>
                <div className="space-y-8">
                  {[
                    { title: "Radical Transparency", desc: "Every decision, from code to strategy, happens in the open.", icon: <ShieldCheck className="text-blue-400" /> },
                    { title: "Global Inclusion", desc: "Empowering developers from underserved regions with high-tier tech.", icon: <Globe2 className="text-purple-400" /> },
                    { title: "Obsessive Quality", desc: "We don't ship 'good enough'. We ship industry-defining standards.", icon: <Zap className="text-yellow-400" /> }
                  ].map((val, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="mt-1">{val.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                        <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-[3rem] rotate-3 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                        <Cpu size={120} className="text-white/20 animate-pulse" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Join Us CTA --- */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto border border-slate-200 dark:border-slate-800 rounded-[3rem] p-12 bg-white dark:bg-slate-900/50 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Want to make an impact?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              We're always looking for passionate maintainers, content creators, and community leads.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@codeharborhub.com" className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                <Mail size={18} /> Contact Us
              </a>
              <a href="/contributing" className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                <Globe size={18} /> Browse Open Roles
              </a>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}