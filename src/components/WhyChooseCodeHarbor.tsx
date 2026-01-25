import Link from "@docusaurus/Link";
import { 
  BookOpen, 
  Code2, 
  Users2, 
  Zap, 
  Trophy, 
  Github 
} from 'lucide-react';

const reasons = [
  {
    title: "Free Education",
    desc: "Comprehensive tech curriculum taught by industry masters, 100% free.",
    icon: <BookOpen className="w-10 h-10" />,
  },
  {
    title: "Open Source",
    desc: "Contribute to real-world projects and build your GitHub profile.",
    icon: <Github className="w-10 h-10" />,
  },
  {
    title: "Live Editor",
    desc: "Practice coding in real-time with our integrated browser-based IDE.",
    icon: <Code2 className="w-10 h-10" />,
  },
  {
    title: "Active Community",
    desc: "Join over 100+ contributors and thousands of learners worldwide.",
    icon: <Users2 className="w-10 h-10" />,
  },
  {
    title: "DSA Mastery",
    desc: "Curated problems and solutions to help you crack technical interviews.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    title: "Expert Guidance",
    desc: "Roadmaps and tutorials designed for both beginners and pros.",
    icon: <Trophy className="w-10 h-10" />,
  },
];

const WhyChooseCodeHarbor = () => {
  return (
    <section className="py-24 px-6 transition-colors duration-300 font-sans relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-[var(--ifm-color-primary)] bg-[var(--ifm-color-primary)]/10 rounded-full border border-[var(--ifm-color-primary)]/20">
            Why CodeHarborHub?
          </span>
          <h2 className="text-[2.2rem] font-black text-[var(--ifm-text-color)] leading-tight tracking-tight">
            Empowering Your <span className="text-[var(--ifm-color-primary)]">Tech Journey</span>
          </h2>
          <p className="mt-6 text-lg opacity-70 text-[var(--ifm-text-color)] max-w-2xl mx-auto leading-relaxed">
            We shatter limitations by offering an exclusive open-source platform for mastering 
            in-demand skills and launching your dream career.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className="relative group p-10 bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-2xl hover:border-[var(--ifm-color-primary)]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated Glow Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--ifm-color-primary)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-800 text-[var(--ifm-color-primary)] group-hover:bg-[var(--ifm-color-primary)] group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[var(--ifm-color-primary)]/40 group-hover:scale-110">
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-bold text-[var(--ifm-text-color)] mb-4">
                {item.title}
              </h3>
              <p className="opacity-60 text-[var(--ifm-text-color)] leading-relaxed text-base">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-[var(--ifm-color-primary)] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Link 
            href="https://github.com/codeharborhub" 
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[var(--ifm-color-primary)] text-white font-black rounded-2xl hover:brightness-110 transition-all hover:shadow-[0_0_25px_rgba(var(--ifm-color-primary-rgb),0.4)] hover:no-underline hover:text-gray-100"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Join Our Open Source Mission</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseCodeHarbor;