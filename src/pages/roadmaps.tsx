import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  Map,
  ChevronRight,
  Layers,
  Smartphone,
  Terminal,
  Globe,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Roadmaps() {
  const { siteConfig } = useDocusaurusContext();

  const roadmapCards = [
    {
      title: "Frontend Developer",
      level: "Beginner to Pro",
      duration: "6 Months",
      icon: <Globe className="text-blue-500" />,
      topics: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "State Management",
        "Deployment",
      ],
      color: "blue",
    },
    {
      title: "Backend Engineer",
      level: "Intermediate",
      duration: "8 Months",
      icon: <Terminal className="text-emerald-500" />,
      topics: ["Node.js", "SQL & NoSQL", "System Design", "APIs", "Security"],
      color: "emerald",
    },
    {
      title: "Full Stack Master",
      level: "Advanced",
      duration: "12 Months",
      icon: <Layers className="text-purple-500" />,
      topics: ["Next.js", "PostgreSQL", "Docker", "CI/CD", "AWS/Vercel"],
      color: "purple",
    },
    {
      title: "Mobile App Dev",
      level: "Beginner",
      duration: "5 Months",
      icon: <Smartphone className="text-rose-500" />,
      topics: ["React Native", "Expo", "Mobile UI", "App Store Logic"],
      color: "rose",
    },
  ];

  return (
    <Layout
      title={`Roadmaps - ${siteConfig.title}`}
      description="Step-by-step career paths and technical roadmaps to master web development."
    >
      <main className="bg-slate-50 dark:bg-[#0a0f1d] min-h-screen transition-colors duration-300">
        {/* --- Hero Header --- */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold mb-6">
              <Map size={16} /> Technical Career Paths
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Your Path to <span className="text-blue-600">Success </span> in
              Tech
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tired of tutorial hell? Follow our curated, community-validated
              roadmaps to go from your first line of code to a job-ready
              engineer.
            </p>
          </div>
        </section>

        {/* --- Roadmap Grid --- */}
        <section className="pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmapCards.map((path, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Background Accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-${path.color}-500/5 blur-3xl group-hover:bg-${path.color}-500/10 transition-colors`}
                />

                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-inner">
                    {path.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1">
                      <Clock size={12} /> {path.duration}
                    </span>
                    <span
                      className={`text-xs font-bold px-3 py-1 bg-${path.color}-100 dark:bg-${path.color}-900/30 text-${path.color}-600 dark:text-${path.color}-400 rounded-full`}
                    >
                      {path.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {path.title}
                </h3>

                <div className="space-y-4 mb-10">
                  {path.topics.map((topic, ti) => (
                    <div
                      key={ti}
                      className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      <CheckCircle size={18} className="text-blue-500" />{" "}
                      {topic}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  View Full Roadmap <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- Why Roadmaps Matter (Visual Info) --- */}
        <section className="py-24 px-6 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
                  Stop Learning Randomly.
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Structured Curriculum",
                      desc: "Every topic is placed in logical order to ensure you have the prerequisites for the next stage.",
                    },
                    {
                      title: "Industry Validated",
                      desc: "Our roadmaps are updated for 2026 standards, focusing only on skills that get you hired.",
                    },
                    {
                      title: "Interactive Tracking",
                      desc: "Mark your progress as you go and stay motivated with visual completion stats.",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-slate-400 ml-4 font-mono">
                    roadmap_visualization.v2
                  </span>
                </div>
                <div className="p-8 bg-white dark:bg-slate-950 aspect-video flex flex-col justify-center items-center text-center">
                  <Sparkles className="w-16 h-16 text-blue-500 mb-4 animate-pulse" />
                  <p className="font-mono text-sm text-slate-500">
                    Interactive Visualization Component <br /> Loading Stage
                    04...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-12 md:p-20 text-white shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Map size={200} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Can't decide where to start?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto font-medium">
              Take our 2-minute "Career Quiz" to find the roadmap that best
              matches your goals and personality.
            </p>
            <button className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl">
              Take the Quiz
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
