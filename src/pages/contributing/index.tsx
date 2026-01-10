import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  GitFork,
  Terminal,
  Code2,
  GitPullRequest,
  CheckCircle2,
  BookOpen,
  MessageSquare,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Github,
  Award,
  Zap,
  Coffee,
} from "lucide-react";

export default function Contributing() {
  const { siteConfig } = useDocusaurusContext();

  const Workflows = [
    {
      icon: <MessageSquare size={24} />,
      title: "Discuss",
      desc: "Open an issue or join Discord to propose changes or report bugs.",
      color: "var(--ifm-color-primary)",
    },
    {
      icon: <Terminal size={24} />,
      title: "Develop",
      desc: "Fork the repo, create a feature branch, and write clean, tested code.",
      color: "var(--ifm-color-primary)",
    },
    {
      icon: <GitPullRequest size={24} />,
      title: "Review",
      desc: "Submit a PR. Our maintainers will review and provide feedback.",
      color: "var(--ifm-color-primary)",
    },
  ];

  const steps = [
    {
      icon: <GitFork size={24} />,
      title: "Fork & Clone",
      desc: "Fork the repository to your own account and clone it locally to start your journey.",
      cmd: `git clone https://github.com/YOUR_USERNAME/${siteConfig.title.toLowerCase()}.git`,
    },
    {
      icon: <Terminal size={24} />,
      title: "Install & Branch",
      desc: "Install dependencies and create a feature branch for your specific changes.",
      cmd: "npm install && git checkout -b feature/your-awesome-feature",
    },
    {
      icon: <Code2 size={24} />,
      title: "Development",
      desc: "Write clean, documented code and ensure your changes follow our styling guidelines.",
      cmd: "npm run start",
    },
    {
      icon: <GitPullRequest size={24} />,
      title: "Pull Request",
      desc: "Push your changes to GitHub and open a PR. Provide a clear description of your work.",
      cmd: "git push origin feature/your-awesome-feature",
    },
  ];

  return (
    <Layout
      title={`Contributing to ${siteConfig.title}`}
      description="Help us build the most accessible developer harbor on the web."
    >
      <main
        className="min-h-screen"
        style={{
          backgroundColor: "var(--ifm-bg-color)",
          color: "var(--ifm-text-color)",
        }}
      >
        {/* --- Hero: The Call to Action --- */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Build the{" "}
              <span style={{ color: "var(--ifm-color-primary)" }}>Future</span>
            </h1>
            <p className="text-xl opacity-60 max-w-2xl mx-auto font-medium leading-relaxed">
              CodeHarborHub isn't just a platform; it's a collaborative engine.
              We value every contribution, from UI components to documentation
              fixes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12 relative z-10">
            <a
              href="https://github.com/codeharborhub/codeharborhub.github.io"
              target="_blank"
              className="px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--ifm-color-primary)",
                color: "#fff",
              }}
            >
              Explore GitHub
            </a>
            <a
              href="/contributing/contributors"
              target="_blank"
              className="px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest border border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <Award size={18} /> View Hall of Fame
            </a>
          </div>
        </section>

        {/* --- The Workflow: Bento Steps --- */}
        <section className="py-20 px-6 mx-auto bg-slate-100 dark:bg-slate-900/50 rounded-3xl">
          <h2 className="text-5xl font-black mb-12 leading-none tracking-tighter uppercase italic text-center">
            Contribution{" "}
            <span style={{ color: "var(--ifm-color-primary)" }}>Workflow</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Workflows.map((step, i) => (
              <div
                key={i}
                className="group p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-3xl hover:shadow-blue-500/10"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-500"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter italic italic">
                  0{i + 1}. {step.title}
                </h3>
                <p className="text-lg opacity-50 font-medium leading-relaxed mb-8">
                  {step.desc}
                </p>
                <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full w-0 group-hover:w-full transition-all duration-700"
                    style={{ backgroundColor: "var(--ifm-color-primary)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Interactive Workflow Steps --- */}
        <section className="py-12 px-6 mx-auto">
          <h2 className="text-5xl font-black mb-12 leading-none tracking-tighter uppercase italic text-center">
            Your{" "}
            <span style={{ color: "var(--ifm-color-primary)" }}>
              First Steps
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                  style={{
                    backgroundColor: "var(--ifm-color-primary)",
                    color: "#fff",
                  }}
                >
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-4xl font-black opacity-5 italic">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-6">
                  {step.desc}
                </p>
                <div className="mt-auto bg-slate-50 dark:bg-black/40 p-3 rounded-xl border border-slate-100 dark:border-white/5">
                  <code className="text-[10px] font-mono opacity-80 break-all">
                    {step.cmd}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Dynamic Contribution Tracks --- */}
        <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50 rounded-3xl">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter uppercase italic">
                Choose your <br />
                <span style={{ color: "var(--ifm-color-primary)" }}>
                  Influence
                </span>
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    t: "Technical Writing",
                    d: "Improve documentation, write blogs, or create tutorials.",
                    i: <BookOpen size={20} />,
                  },
                  {
                    t: "Feature Development",
                    d: "Build new React components or optimize backend logic.",
                    i: <Zap size={20} />,
                  },
                  {
                    t: "Community Support",
                    d: "Help new members in Discord and review incoming PRs.",
                    i: <Coffee size={20} />,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-6 p-6 rounded-3xl hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default"
                  >
                    <div
                      className="mt-1"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      {item.i}
                    </div>
                    <div>
                      <h4 className="font-black text-lg uppercase tracking-tight">
                        {item.t}
                      </h4>
                      <p className="opacity-60 text-sm font-medium">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-12 text-white shadow-3xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-blue-400 font-bold">
                    $ git clone codeharborhub.git
                  </p>
                  <p className="text-slate-400">
                    # Setting up the ecosystem...
                  </p>
                  <p className="text-green-400"># Ready to contribute!</p>
                  <div className="pt-8 space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span>
                        Follow the{" "}
                        <span style={{ color: "var(--ifm-color-primary)" }}>
                          Code of Conduct
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span>Use meaningful commit messages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span>Ask before starting a major feature</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contribution Areas (Bento Style) --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-12 leading-none tracking-tighter uppercase italic text-center">
            Contribution <span style={{ color: "var(--ifm-color-primary)" }}>Areas</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Guidelines */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group">
                <ShieldAlert
                  size={40}
                  className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--ifm-color-primary)" }}
                />
                <div>
                  <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter">
                    Code Standards
                  </h4>
                  <ul className="space-y-3 opacity-60 text-sm font-medium">
                    <li>Use TypeScript for all new features</li>
                    <li>Follow the Airbnb JavaScript Style Guide</li>
                    <li>Ensure 100% responsive design</li>
                  </ul>
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group">
                <BookOpen
                  size={40}
                  className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--ifm-color-primary)" }}
                />
                <div>
                  <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter">
                    Documentation
                  </h4>
                  <ul className="space-y-3 opacity-60 text-sm font-medium">
                    <li>Use clear, concise English</li>
                    <li>Include code examples where possible</li>
                    <li>Update `sidebars.js` for new docs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Community Callout */}
            <div
              className="lg:w-1/3 p-10 rounded-[3rem] text-white flex flex-col justify-center relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: "var(--ifm-color-primary)" }}
            >
              <div className="relative z-10">
                <MessageSquare size={48} className="mb-8" />
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-none">
                  Need Help <br />
                  Getting Started?
                </h3>
                <p className="text-white/80 font-medium mb-8 leading-relaxed">
                  Join our Discord server. Our core maintainers are always
                  available to help you unblock technical issues.
                </p>
                <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
                  Join Our Discord
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        {/* --- Ready to Submit? --- */}
        <section className="py-20 px-6 text-center mx-auto bg-slate-100 dark:bg-slate-900/50 rounded-3xl">
        <h2 className="text-5xl font-black mb-12 leading-none tracking-tighter uppercase italic text-center">
            Ready to <span style={{ color: "var(--ifm-color-primary)" }}>Contribute</span>?
          </h2>
          <div className="max-w-2xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-10">
            <CheckCircle2
              size={48}
              className="mx-auto mb-8 opacity-20"
              style={{ color: "var(--ifm-color-primary)" }}
            />
            <p className="text-lg opacity-60 mb-10 font-medium">
              We aim to review all Pull Requests within 48 hours. Make sure to
              check the "Files Changed" tab for any linting errors before
              submitting.
            </p>
            <a
              href="https://github.com/codeharborhub/codeharborhub.github.io/pulls"
              target="_blank"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-all shadow-2xl"
            >
              Open a Pull Request <ChevronRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
