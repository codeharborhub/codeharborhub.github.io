import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { 
  Rocket, 
  Target, 
  Users2, 
  Zap, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  LineChart,
  Quote
} from 'lucide-react';

export default function Mentoring() {
  const { siteConfig } = useDocusaurusContext();

  const tracks = [
    {
      title: "Frontend Excellence",
      icon: <Zap className="text-yellow-500" />,
      skills: ["React/Next.js", "Tailwind CSS", "Browser Engines", "Performance"],
      color: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Backend Architecture",
      icon: <Rocket className="text-blue-500" />,
      skills: ["Node.js", "System Design", "Microservices", "Databases"],
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Career Strategy",
      icon: <Briefcase className="text-emerald-500" />,
      skills: ["Resume Review", "Mock Interviews", "Salary Negotiation", "Personal Branding"],
      color: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <Layout
      title={`Mentorship Program - ${siteConfig.title}`}
      description="Accelerate your tech career with 1-on-1 mentorship from industry professionals."
    >
      <main className="bg-white dark:bg-[#0a0f1d] transition-colors duration-300 overflow-hidden">
        
        {/* --- Hero Section with Animated Gradient --- */}
        <section className="relative py-24 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 border border-blue-100 dark:border-blue-800">
              <GraduationCap size={18} /> Exclusive Community Mentoring
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              Don’t just learn. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-400">Level Up.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Bridge the gap between tutorials and the industry. Get matched with 
              experienced developers who will guide you through real-world projects 
              and career hurdles.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2">
                Apply for Mentorship <ChevronRight size={20} />
              </button>
              <button className="px-10 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all border border-slate-700">
                Become a Mentor
              </button>
            </div>
          </div>
        </section>

        {/* --- The Mentoring Loop (Process) --- */}
        <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Personalized Roadmap", desc: "No generic paths. We analyze your current skills and build a custom growth plan.", icon: <Target className="w-10 h-10 text-blue-600" /> },
                { title: "Weekly Sync-ups", desc: "One-on-one sessions to review code, unblock technical issues, and plan your next move.", icon: <Users2 className="w-10 h-10 text-indigo-600" /> },
                { title: "Career Acceleration", desc: "Insider tips on high-growth companies and direct referrals for top-performing mentees.", icon: <LineChart className="w-10 h-10 text-emerald-600" /> },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Mentorship Tracks --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Track</h2>
            <p className="text-slate-500">Specialized guidance for modern engineering roles.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <div key={i} className={`p-8 rounded-[2.5rem] bg-gradient-to-br ${track.color} border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-2`}>
                <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mb-8">
                  {track.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{track.title}</h4>
                <ul className="space-y-4">
                  {track.skills.map((skill, si) => (
                    <li key={si} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- Industry Testimonial --- */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-20 h-20 opacity-10" />
            <p className="text-2xl italic font-medium mb-8 relative z-10 leading-relaxed">
              "The mentorship program at CodeHarborHub didn't just teach me how to code—it taught me how to think like a Senior Engineer. I landed my dream role at a Fortune 500 company within 3 months."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-slate-700 rounded-full border-2 border-white/20" />
              <div className="text-left">
                <div className="font-bold">Sarah Jenkins</div>
                <div className="text-sm opacity-80">Software Engineer @ Microsoft</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ / CTA Final --- */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Ready to level up?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">Applications are currently open for the Spring 2026 cohort.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-blue-600/20">
              Submit My Application
            </button>
            <button className="px-12 py-5 bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-black hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Frequently Asked Questions
            </button>
          </div>
        </section>

      </main>
    </Layout>
  );
}