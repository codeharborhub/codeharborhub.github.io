import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import {
  Code2,
  Terminal,
  Globe,
  Cpu,
  Database,
  ShieldCheck,
  Smartphone,
  Layout as LayoutIcon,
  Layers,
  Rocket,
  Binary,
  Briefcase,
  Sparkles,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Tutorials(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Full content mapping based on your tutorial list
  const tutorialCategories = [
    {
      title: "Absolute Beginners",
      icon: Rocket,
      description: "Start here: Frontend, Backend, DevOps, and Git basics.",
      color: "from-green-500 to-emerald-500",
      path: "#", // /absolute-beginners
      tags: ["Frontend", "Backend", "Git/GitHub", "Full Stack"],
    },
    {
      title: "Web Development",
      icon: Globe,
      description: "The complete path from QA and API design to WordPress.",
      color: "from-blue-500 to-indigo-500",
      path: "#", //  /web-development
      tags: ["Frontend", "Backend", "API Design", "GraphQL"],
    },
    {
      title: "AI & Machine Learning",
      icon: Sparkles,
      description: "AI Engineering, MLOps, Data Analysis, and Data Science.",
      color: "from-purple-500 to-pink-500",
      path: "#", // /ai-ml
      tags: ["AI Engineer", "Prompt Engineering", "MLOps"],
    },
    {
      title: "Languages & Platforms",
      icon: Terminal,
      description: "Master SQL, JS, Python, Rust, Go, Java, and more.",
      color: "from-yellow-500 to-orange-500",
      path: "#", // languages
      tags: ["Rust", "Python", "Go", "TypeScript", "C++"],
    },
    {
      title: "DevOps & Security",
      icon: ShieldCheck,
      description:
        "Infrastructure, Linux, Kubernetes, Docker, and Cyber Security.",
      color: "from-red-500 to-rose-500",
      path: "#", // devops
      tags: ["AWS", "Terraform", "Kubernetes", "Cyber Security"],
    },
    {
      title: "Computer Science",
      icon: Binary,
      description: "System Design, Architecture, and Data Structures.",
      color: "from-cyan-500 to-blue-500",
      path: "#", // computer-science
      tags: ["DSA", "System Design", "Software Architecture"],
    },
    {
      title: "Frameworks",
      icon: Layers,
      description: "React, Vue, Angular, Spring Boot, Laravel, and Django.",
      color: "from-indigo-500 to-purple-500",
      path: "#", // frameworks
      tags: ["React", "Next.js", "Spring Boot", "Laravel"],
    },
    {
      title: "Mobile & Game Dev",
      icon: Smartphone,
      description: "iOS, Android, Flutter, React Native, and Game Engines.",
      color: "from-emerald-500 to-teal-500",
      path: "#", // /mobile-game
      tags: ["Android", "iOS", "Flutter", "C++", "Rust"],
    },
    {
      title: "Management & Design",
      icon: Briefcase,
      description: "Engineering Manager, Product Manager, and UX Design.",
      color: "from-slate-500 to-zinc-500",
      path: "#", // /management
      tags: ["UX Design", "Product Manager", "Engineering Lead"],
    },
  ];

  return (
    <Layout title="Tutorials" description={siteConfig.title}>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
      </Head>

      <main
        className="min-h-screen"
        style={{ backgroundColor: "var(--ifm-bg-color)" }}
      >
        {/* --- Hero Section --- */}
        <section className="relative pt-20 pb-12 sm:pt-32 border-b border-[var(--c-gray-20)] dark:border-[var(--c-gray-80)] overflow-hidden">          
          
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(15,23,42,1),rgba(15, 23, 42, 0.73))]" />

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--c-indigo-10)] dark:bg-[var(--c-indigo-90)] mb-8 border border-[var(--c-indigo-20)] dark:border-[var(--c-indigo-80)]">
                <GitBranch className="w-4 h-4 text-[var(--ifm-color-primary)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--c-indigo-70)] dark:text-[var(--c-indigo-20)]">
                  The Harbor for Modern Developers
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl mb-6"
                style={{ color: "var(--ifm-text-color)" }}
              >
                CodeHarbor
                <span style={{ color: "var(--ifm-color-primary)" }}>Hub</span>{" "}
                Tutorials
              </h1>
              <p
                className="text-xl opacity-70 max-w-3xl mx-auto mt-10 mb-12"
                style={{ color: "var(--ifm-text-color)" }}
              >
                Comprehensive developer tutorials covering{" "}
                <strong>Web, Mobile, AI, DevOps,</strong> and{" "}
                <strong>Computer Science</strong>. Your structured guide from
                zero to mastery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="https://codeharborhub.github.io/tutorial/"
                className="inline-flex items-center justify-center gap-2 px-8 bg-[var(--ifm-color-primary)] to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all hover:text-white hover:no-underline"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl hover:border-blue-600 dark:hover:border-blue-400 hover:scale-105 transition-all hover:no-underline"
              >
                Explore Resources
              </Link>
            </div>
            
            </motion.div>
          </div>
        </section>

        {/* --- Content Overview Grid --- */}
        <section className="py-20 px-4">
          <div className="mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2
                  className="text-3xl font-bold"
                  style={{ color: "var(--ifm-text-color)" }}
                >
                  Explore Tutorials
                </h2>
                <p
                  className="opacity-60"
                  style={{ color: "var(--ifm-text-color)" }}
                >
                  Select a category to view the full learning path.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorialCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={category.path}
                    className="group flex flex-col h-full p-8 rounded-3xl border border-[var(--c-gray-20)] dark:border-[var(--c-gray-80)] transition-all hover:border-[var(--ifm-color-primary)] no-underline relative overflow-hidden hover:no-underline"
                    style={{ backgroundColor: "var(--token-secondary-bg-c)" }}
                  >
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-20 transition-opacity rounded-bl-full`}
                    />

                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className="text-white w-7 h-7" />
                    </div>

                    <h3
                      className="font-bold mb-3"
                      style={{ color: "var(--ifm-text-color)" }}
                    >
                      {category.title}
                    </h3>
                    <p
                      className="opacity-60 mb-6 flex-grow"
                      style={{ color: "var(--ifm-text-color)" }}
                    >
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-[var(--c-gray-10)] dark:bg-[var(--c-gray-80)] opacity-80"
                          style={{ color: "var(--ifm-text-color)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-2 font-bold text-sm"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      View tutorial{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Best Practices & Contributing --- */}
        <section className="pb-32 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-zinc-900 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <ShieldCheck className="w-12 h-12 mb-6 text-green-400" />
                <h3 className="text-3xl font-bold mb-4">
                  Industry Best Practices
                </h3>
                <p className="opacity-70 mb-8">
                  Master API security, AWS configurations, and performance
                  optimization techniques used by top engineering teams.
                </p>
                <Link
                  to="#" // /best-practices
                  className="inline-flex items-center gap-2 font-bold text-green-400 no-underline hover:underline"
                >
                  Learn Best Practices <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] border-4 border-dashed border-[var(--c-gray-30)] dark:border-[var(--c-gray-70)] flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold mb-4"
                style={{ color: "var(--ifm-text-color)" }}
              >
                Found a Gap?
              </h3>
              <p
                className="opacity-60 mb-8"
                style={{ color: "var(--ifm-text-color)" }}
              >
                Our tutorials are community-driven. Help us by contributing your
                expertise to the harbor.
              </p>
              <Link
                to="https://github.com/codeharborhub/tutorial"
                className="py-4 px-8 rounded-2xl font-bold no-underline transition-transform hover:scale-105"
                style={{
                  backgroundColor: "var(--ifm-color-primary)",
                  color: "white",
                }}
              >
                Contribute on GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
