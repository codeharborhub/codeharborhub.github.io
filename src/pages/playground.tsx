import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Sandpack } from "@codesandbox/sandpack-react";
import { 
  Code2, 
  Sparkles, 
  Monitor, 
  Cpu, 
  Share2, 
  Wand2,
  Layers
} from "lucide-react";

export default function Playground() {
  const { siteConfig } = useDocusaurusContext();
  const [template, setTemplate] = useState<"react" | "vanilla" | "vue">("react");

  const templates = {
    react: {
      title: "React.js",
      icon: <Code2 size={18} />,
      color: "text-cyan-500",
    },
    vue: {
      title: "Vue.js",
      icon: <Layers size={18} />,
      color: "text-emerald-500",
    },
    vanilla: {
      title: "Vanilla JS",
      icon: <Cpu size={18} />,
      color: "text-yellow-500",
    }
  };

  return (
    <Layout
      title={`Code Playground - ${siteConfig.title}`}
      description="Interactive coding environment to test your snippets in real-time."
    >
      <main className="min-h-screen bg-[#fdfdfd] dark:bg-[#050505] transition-colors duration-300">
        
        {/* --- Header Section --- */}
        <section className="pt-12 pb-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">
                <Sparkles size={16} /> Live Environment
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Playground</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Experiment with modern web technologies in a secure, high-performance sandbox. 
                Zero setup required.
              </p>
            </div>

            {/* Template Selector */}
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
              {(Object.keys(templates) as Array<keyof typeof templates>).map((t) => (
                <button
                  key={t}
                  onClick={() => setTemplate(t)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    template === t 
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700" 
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <span className={templates[t].color}>{templates[t].icon}</span>
                  {templates[t].title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- Editor Section --- */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-[#0d0d0d]">
              
              {/* Fake Window Controls */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-6">
                   <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                     <Monitor size={14} /> Preview Mode: Active
                   </div>
                   <button className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                     <Share2 size={18} />
                   </button>
                </div>
              </div>

              {/* Sandpack Integration */}
              <div className="p-2 md:p-4">
                <Sandpack
                  template={template}
                  theme="dark" // You can dynamically switch this based on Docusaurus theme
                  options={{
                    showNavigator: true,
                    showLineNumbers: true,
                    showInlineErrors: true,
                    editorHeight: 600,
                    externalResources: ["https://cdn.tailwindcss.com"],
                  }}
                  customSetup={{
                    dependencies: {
                      "lucide-react": "latest",
                      "framer-motion": "latest",
                    },
                  }}
                />
              </div>
            </div>

            {/* Feature Bento Grid Below Editor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
               <div className="p-8 rounded-[2rem] bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                  <Wand2 className="text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Live Reload</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">See your changes instantly as you type with HMR (Hot Module Replacement) technology.</p>
               </div>
               <div className="p-8 rounded-[2rem] bg-purple-50/50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/30">
                  <Share2 className="text-purple-600 mb-4" />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Shareable Links</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Export your code snippets to a unique URL to collaborate with the CodeHarborHub community.</p>
               </div>
               <div className="p-8 rounded-[2rem] bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                  <Cpu className="text-emerald-600 mb-4" />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">NPM Support</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Add any package from NPM to test complex components or libraries right in the browser.</p>
               </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}