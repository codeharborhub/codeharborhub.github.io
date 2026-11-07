import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bug,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Code2,
  Copy,
  ExternalLink,
  FileQuestion,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  ThumbsUp,
  ThumbsDown,
  Github,
  LifeBuoy,
  Rocket,
  Terminal,
} from "lucide-react";

import GiscusComponent from "@site/src/components/GiscusComponent";

type Category =
  | "Getting Started"
  | "Learning"
  | "Account"
  | "Community"
  | "Technical";

type FAQ = {
  id: number;
  category: Category;
  question: string;
  answer: string;
  codeSnippet?: string;
  keywords: string[];
};

const GITHUB_DISCUSSIONS =
  "https://github.com/CodeHarborHub/codeharborhub.github.io/discussions";

const GITHUB_ISSUES =
  "https://github.com/CodeHarborHub/codeharborhub.github.io/issues";

const GITHUB_ORG = "https://github.com/CodeHarborHub";

const categories: {
  name: Category;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    name: "Getting Started",
    description: "Learn how to navigate and make the most of CodeHarborHub.",
    icon: Rocket,
  },
  {
    name: "Learning",
    description: "Discover tutorials, structured courses, and developer paths.",
    icon: GraduationCap,
  },
  {
    name: "Account",
    description: "Manage your profile, preferences, and local settings.",
    icon: ShieldCheck,
  },
  {
    name: "Community",
    description: "Contribute code, join discussions, and collaborate on repos.",
    icon: Users,
  },
  {
    name: "Technical",
    description: "Troubleshoot build issues, local setups, and report bugs.",
    icon: Code2,
  },
];

const faqs: FAQ[] = [
  {
    id: 1,
    category: "Getting Started",
    question: "What is CodeHarborHub?",
    answer:
      "CodeHarborHub is an open-source educational platform designed to empower developers with structured learning paths, practical code guides, and collaborative open-source projects.",
    keywords: ["platform", "about", "introduction", "codeharborhub", "overview"],
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Is CodeHarborHub completely free?",
    answer:
      "Yes! All core documentation, tutorials, and open-source project repositories are completely free and open to everyone worldwide.",
    keywords: ["free", "pricing", "cost", "access", "open source"],
  },
  {
    id: 3,
    category: "Getting Started",
    question: "How do I run CodeHarborHub locally on my machine?",
    answer:
      "Clone the repository from GitHub, install dependencies, and launch the Docusaurus local development server:",
    codeSnippet:
      "git clone https://github.com/CodeHarborHub/codeharborhub.github.io.git\ncd codeharborhub.github.io\nyarn install\nyarn start",
    keywords: ["start", "local", "run", "setup", "docusaurus", "install"],
  },
  {
    id: 4,
    category: "Learning",
    question: "Where can I find structured programming roadmaps?",
    answer:
      "Head over to our Tutorials and Courses section. You will find step-by-step roadmaps covering Web Development, Data Structures, Algorithms, and DevOps.",
    keywords: ["tutorial", "docs", "programming", "courses", "roadmap"],
  },
  {
    id: 5,
    category: "Learning",
    question: "Are the tutorials beginner-friendly?",
    answer:
      "Yes! Each learning resource is clearly labeled by difficulty level (Beginner, Intermediate, Advanced) so you can progress comfortably at your own pace.",
    keywords: ["beginner", "level", "prerequisite", "basics", "starter"],
  },
  {
    id: 6,
    category: "Learning",
    question: "Can I propose a new tutorial or topic?",
    answer:
      "We encourage community suggestions! Submit a topic proposal under the 'Ideas' category in GitHub Discussions.",
    keywords: ["suggest", "request", "tutorial", "topic", "propose"],
  },
  {
    id: 7,
    category: "Account",
    question: "Do I need an account to browse tutorials?",
    answer:
      "No registration is required to read guides. Interactive features such as discussions and issue submissions leverage your existing GitHub account.",
    keywords: ["account", "login", "register", "browse", "auth"],
  },
  {
    id: 8,
    category: "Account",
    question: "Where is my reading progress and theme state stored?",
    answer:
      "Your preferences (including Light/Dark mode toggles and recent interactions) are saved securely in your browser's local storage.",
    keywords: ["progress", "save", "tracking", "sync", "localStorage"],
  },
  {
    id: 9,
    category: "Community",
    question: "How do I submit my first Pull Request (PR)?",
    answer:
      "Fork the repository, create a branch for your feature, make your changes, and push back to GitHub to open a Pull Request:",
    codeSnippet:
      "git checkout -b feature/improve-docs\ngit commit -m 'docs: update setup guide'\ngit push origin feature/improve-docs",
    keywords: ["contribute", "pull request", "open source", "github", "pr"],
  },
  {
    id: 10,
    category: "Community",
    question: "Where can I talk to maintainers and fellow learners?",
    answer:
      "Join our vibrant community on GitHub Discussions. You can ask technical questions, share your progress, and get feedback on code.",
    keywords: ["community", "join", "github", "discussion", "giscus"],
  },
  {
    id: 11,
    category: "Community",
    question: "How can I request new features?",
    answer:
      "Open a thread in GitHub Discussions under Feature Requests. Describe the feature, its benefit, and any mockup or workflow suggestions.",
    keywords: ["feature", "request", "idea", "suggestion", "feedback"],
  },
  {
    id: 12,
    category: "Technical",
    question: "How do I report a site bug or layout issue?",
    answer:
      "Submit a detailed GitHub Issue including steps to reproduce the bug, expected behavior, screenshots, and your browser version.",
    keywords: ["bug", "error", "issue", "report", "crash"],
  },
  {
    id: 13,
    category: "Technical",
    question: "What should I do if a page returns a 404 error?",
    answer:
      "Try refreshing your browser and clearing cache. If the broken link persists, please open a GitHub issue with the URL.",
    keywords: ["loading", "website", "page", "browser", "error", "404"],
  },
  {
    id: 14,
    category: "Technical",
    question: "Where can I get real-time developer help?",
    answer:
      "For interactive technical help, post your question in our Giscus community comments embedded at the bottom of this page.",
    keywords: ["support", "help", "technical", "discussion", "bug"],
  },
];

const popularTopics = [
  "Getting started",
  "Programming tutorials",
  "Contributing",
  "Report a bug",
  "Feature requests",
];

const supportCards = [
  {
    title: "Community Discussions",
    description:
      "Ask questions, share project ideas, and get support directly from active contributors.",
    icon: MessagesSquare,
    action: "Open Discussions",
    href: GITHUB_DISCUSSIONS,
    external: true,
  },
  {
    title: "Report an Issue",
    description:
      "Found a bug or documentation typo? Open an issue on GitHub to help us fix it.",
    icon: Bug,
    action: "Create GitHub Issue",
    href: GITHUB_ISSUES,
    external: true,
  },
  {
    title: "Explore Documentation",
    description:
      "Browse tech guides, framework setups, and interactive coding roadmaps.",
    icon: BookOpen,
    action: "View Documentation",
    href: "/docs/",
    external: false,
  },
];

function SectionHeader({
  badge,
  title,
  description,
  centered = false,
}: {
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-10 ${centered ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"}`}>
      <div
        className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider"
        style={{
          color: "var(--ifm-color-primary)",
          borderColor: "var(--chh-auth-border)",
          background: "var(--chh-auth-glass)",
        }}
      >
        <Sparkles size={13} />
        {badge}
      </div>
      <h2
        className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl mb-3"
        style={{ color: "var(--ifm-font-color-base)" }}
      >
        {title}
      </h2>
      <p
        className="text-sm leading-relaxed sm:text-base"
        style={{ color: "var(--chh-auth-muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

function CodeSnippet({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="mt-4 overflow-hidden rounded-xl border font-mono text-xs shadow-sm"
      style={{
        borderColor: "var(--chh-auth-border)",
        background: "var(--chh-auth-surface)",
      }}
    >
      <div
        className="flex items-center justify-between border-b px-4 py-2 font-semibold text-[11px]"
        style={{
          borderColor: "var(--chh-auth-border)",
          color: "var(--chh-auth-muted)",
        }}
      >
        <span className="flex items-center gap-1.5">
          <Terminal size={13} style={{ color: "var(--ifm-color-primary)" }} />
          TERMINAL
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-bold transition-all active:scale-95"
          style={{
            borderColor: "var(--chh-auth-border)",
            background: "var(--chh-auth-card)",
            color: copied ? "var(--ifm-color-primary)" : "var(--ifm-font-color-base)",
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        className="overflow-x-auto p-4 leading-relaxed"
        style={{ color: "var(--ifm-font-color-base)", margin: 0 }}
      >
        <code>{snippet}</code>
      </pre>
    </div>
  );
}

function HelpPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  const [feedback, setFeedback] = useState<Record<number, "yes" | "no">>({});

  const filteredFAQs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const searchableText = [
        faq.question,
        faq.answer,
        faq.category,
        ...(faq.codeSnippet ? [faq.codeSnippet] : []),
        ...faq.keywords,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const selectPopularTopic = (topic: string) => {
    setSearch(topic);
    setActiveCategory("All");
    setOpenFAQ(null);

    document
      .getElementById("faq-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setOpenFAQ(null);
  };

  return (
    <Layout
      title="Help Center"
      description="Find answers, explore resources and get support from the CodeHarborHub community."
    >
      <main
        className="min-h-screen"
        style={{
          backgroundColor: "var(--ifm-background-color)",
          color: "var(--ifm-font-color-base)",
        }}
      >
        {/* HERO SECTION */}
        <section
          className="relative overflow-hidden border-b py-16 sm:py-24"
          style={{ borderColor: "var(--chh-auth-border)" }}
        >
          {/* Subtle Ambient Backdrop */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full blur-3xl opacity-50"
            style={{ background: "var(--chh-auth-glow)" }}
          />
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full blur-3xl opacity-50"
            style={{ background: "var(--chh-auth-glow)" }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-xs"
                style={{
                  background: "var(--chh-auth-glass)",
                  borderColor: "var(--chh-auth-border)",
                  color: "var(--ifm-color-primary)",
                }}
              >
                <Sparkles size={14} />
                CodeHarborHub Help Center
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                How can we{" "}
                <span style={{ color: "var(--ifm-color-primary)" }}>
                  help you today?
                </span>
              </h1>

              <p
                className="mx-auto mb-10 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: "var(--chh-auth-muted)" }}
              >
                Search our knowledge base, learn developer workflows, or connect directly with our active open-source community.
              </p>

              {/* SEARCH INPUT BAR */}
              <div
                className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border p-2 shadow-lg transition-all focus-within:ring-2"
                style={{
                  background: "var(--chh-auth-card)",
                  borderColor: "var(--chh-auth-border)",
                  boxShadow: "0 15px 40px var(--chh-auth-shadow)",
                }}
              >
                <Search
                  className="ml-3 shrink-0"
                  size={20}
                  style={{ color: "var(--chh-auth-muted)" }}
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setOpenFAQ(null);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setSearch("");
                  }}
                  placeholder="Search questions, CLI commands, tutorials..."
                  aria-label="Search help center"
                  className="min-w-0 flex-1 border-0 bg-transparent px-2 py-3 text-sm font-medium outline-none sm:text-base"
                  style={{ color: "var(--ifm-font-color-base)" }}
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="rounded-lg p-2 transition hover:bg-black/5 dark:hover:bg-white/10"
                    style={{ color: "var(--chh-auth-muted)" }}
                  >
                    <X size={18} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("faq-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hidden rounded-xl px-6 py-3 text-sm font-bold text-white transition hover:opacity-90 active:scale-95 sm:inline-flex"
                  style={{ background: "var(--ifm-color-primary)" }}
                >
                  Search
                </button>
              </div>

              {/* POPULAR SEARCH PILLS */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <span
                  className="mr-1 text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--chh-auth-muted)" }}
                >
                  Popular:
                </span>
                {popularTopics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => selectPopularTopic(topic)}
                    className="rounded-full border px-3 py-1.5 text-xs font-semibold transition hover:border-[var(--ifm-color-primary)] active:scale-95"
                    style={{
                      borderColor: "var(--chh-auth-border)",
                      background: "var(--chh-auth-glass)",
                      color: "var(--ifm-font-color-base)",
                    }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* HIGHLIGHT BAR */}
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: BookOpen, label: "Interactive documentation" },
                { icon: Users, label: "Active developer community" },
                { icon: LifeBuoy, label: "Open-source guidance" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-center gap-2 rounded-xl border py-3 px-4 text-xs font-bold shadow-xs"
                    style={{
                      borderColor: "var(--chh-auth-border)",
                      background: "var(--chh-auth-card)",
                      color: "var(--chh-auth-muted)",
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--ifm-color-primary)" }} />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENTO CATEGORY GRID */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Browse by Topic"
            title="What topic do you need help with?"
            description="Select a topic to explore specific FAQs and developer resources."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = faqs.filter(
                (faq) => faq.category === category.name
              ).length;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => {
                    setActiveCategory(active ? "All" : category.name);
                    setOpenFAQ(null);
                    document
                      .getElementById("faq-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-pressed={active}
                  className="group flex flex-col justify-between rounded-2xl border p-6 text-left transition duration-200 active:scale-98 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: "var(--chh-auth-card)",
                    borderColor: active
                      ? "var(--ifm-color-primary)"
                      : "var(--chh-auth-border)",
                    boxShadow: active
                      ? "0 0 20px var(--chh-auth-glow)"
                      : "none",
                  }}
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          background: "var(--chh-auth-glow)",
                          color: "var(--ifm-color-primary)",
                        }}
                      >
                        <Icon size={22} />
                      </span>
                      <ChevronRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                        style={{ color: "var(--chh-auth-muted)" }}
                      />
                    </div>
                    <h3 className="mb-2 text-base font-bold">{category.name}</h3>
                    <p
                      className="mb-5 text-xs leading-relaxed"
                      style={{ color: "var(--chh-auth-muted)" }}
                    >
                      {category.description}
                    </p>
                  </div>
                  <span
                    className="text-xs font-bold inline-flex items-center gap-1"
                    style={{ color: "var(--ifm-color-primary)" }}
                  >
                    {count} FAQs <ArrowRight size={13} className="transition group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* KNOWLEDGE BASE / FAQ SECTION */}
        <section
          id="faq-section"
          className="scroll-mt-20 border-y py-16"
          style={{
            background: "var(--chh-auth-surface)",
            borderColor: "var(--chh-auth-border)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr]">
              {/* STICKY SIDEBAR */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <SectionHeader
                  badge="Knowledge Base"
                  title="Frequently Asked Questions"
                  description="Find instant solutions for platform installation, contributions, and account features."
                />

                <div
                  className="rounded-2xl border p-6 shadow-xs"
                  style={{
                    background: "var(--chh-auth-card)",
                    borderColor: "var(--chh-auth-border)",
                  }}
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        background: "var(--chh-auth-glow)",
                        color: "var(--ifm-color-primary)",
                      }}
                    >
                      <CircleHelp size={20} />
                    </div>
                    <h3 className="text-base font-bold">Still need answers?</h3>
                  </div>
                  <p
                    className="mb-5 text-xs leading-relaxed"
                    style={{ color: "var(--chh-auth-muted)" }}
                  >
                    If your question isn't listed here, ask our maintainers and community directly on GitHub.
                  </p>
                  <a
                    href={GITHUB_DISCUSSIONS}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold text-white shadow-xs transition hover:opacity-90 active:scale-95 no-underline"
                    style={{ background: "var(--ifm-color-primary)" }}
                  >
                    Ask in GitHub Discussions <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* FAQ LIST CONTAINER */}
              <div>
                {/* FILTER PILLS BAR */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory("All");
                        setOpenFAQ(null);
                      }}
                      className="rounded-full border px-4 py-2 text-xs font-bold transition active:scale-95"
                      style={{
                        background:
                          activeCategory === "All"
                            ? "var(--ifm-color-primary)"
                            : "var(--chh-auth-card)",
                        color:
                          activeCategory === "All"
                            ? "#ffffff"
                            : "var(--ifm-font-color-base)",
                        borderColor:
                          activeCategory === "All"
                            ? "var(--ifm-color-primary)"
                            : "var(--chh-auth-border)",
                      }}
                    >
                      All ({faqs.length})
                    </button>
                    {categories.map((category) => {
                      const count = faqs.filter(
                        (f) => f.category === category.name
                      ).length;
                      return (
                        <button
                          key={category.name}
                          type="button"
                          onClick={() => {
                            setActiveCategory(category.name);
                            setOpenFAQ(null);
                          }}
                          className="rounded-full border px-4 py-2 text-xs font-bold transition active:scale-95"
                          style={{
                            background:
                              activeCategory === category.name
                                ? "var(--ifm-color-primary)"
                                : "var(--chh-auth-card)",
                            color:
                              activeCategory === category.name
                                ? "#ffffff"
                                : "var(--ifm-font-color-base)",
                            borderColor:
                              activeCategory === category.name
                                ? "var(--ifm-color-primary)"
                                : "var(--chh-auth-border)",
                          }}
                        >
                          {category.name} ({count})
                        </button>
                      );
                    })}
                  </div>

                  {(search || activeCategory !== "All") && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="inline-flex items-center gap-1 text-xs font-bold"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      <X size={14} /> Clear filters
                    </button>
                  )}
                </div>

                <div
                  className="mb-4 flex items-center justify-between text-xs font-semibold"
                  style={{ color: "var(--chh-auth-muted)" }}
                >
                  <span>
                    Showing <strong>{filteredFAQs.length}</strong> of{" "}
                    {faqs.length} items
                  </span>
                  <span className="hidden sm:inline">
                    Click an item to expand answer
                  </span>
                </div>

                {/* ACCORDION FAQS */}
                <div className="space-y-3.5">
                  {filteredFAQs.map((faq) => {
                    const isOpen = openFAQ === faq.id;

                    return (
                      <article
                        key={faq.id}
                        className="overflow-hidden rounded-2xl border transition duration-200"
                        style={{
                          background: "var(--chh-auth-card)",
                          borderColor: isOpen
                            ? "var(--ifm-color-primary)"
                            : "var(--chh-auth-border)",
                        }}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faq.id}`}
                          onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                        >
                          <span className="min-w-0">
                            <span
                              className="mb-1 block text-[10px] font-black uppercase tracking-wider"
                              style={{ color: "var(--ifm-color-primary)" }}
                            >
                              {faq.category}
                            </span>
                            <span className="block text-base leading-snug">
                              {faq.question}
                            </span>
                          </span>
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition"
                            style={{
                              background: isOpen
                                ? "var(--ifm-color-primary)"
                                : "var(--chh-auth-glow)",
                              color: isOpen
                                ? "#ffffff"
                                : "var(--ifm-color-primary)",
                            }}
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            id={`faq-answer-${faq.id}`}
                            className="border-t px-5 pb-5 pt-4"
                            style={{ borderColor: "var(--chh-auth-border)" }}
                          >
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--chh-auth-muted)" }}
                            >
                              {faq.answer}
                            </p>

                            {faq.codeSnippet && (
                              <CodeSnippet snippet={faq.codeSnippet} />
                            )}

                            {/* FEEDBACK CONTROLS */}
                            <div
                              className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t pt-4"
                              style={{ borderColor: "var(--chh-auth-border)" }}
                            >
                              <span
                                className="text-xs font-semibold"
                                style={{ color: "var(--chh-auth-muted)" }}
                              >
                                Was this answer helpful?
                              </span>

                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  aria-label="Yes, this answer was helpful"
                                  aria-pressed={feedback[faq.id] === "yes"}
                                  onClick={() =>
                                    setFeedback((previous) => ({
                                      ...previous,
                                      [faq.id]: "yes",
                                    }))
                                  }
                                  className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition active:scale-95"
                                  style={{
                                    borderColor:
                                      feedback[faq.id] === "yes"
                                        ? "var(--ifm-color-primary)"
                                        : "var(--chh-auth-border)",
                                    color:
                                      feedback[faq.id] === "yes"
                                        ? "var(--ifm-color-primary)"
                                        : "var(--chh-auth-muted)",
                                    background:
                                      feedback[faq.id] === "yes"
                                        ? "var(--chh-auth-glow)"
                                        : "transparent",
                                  }}
                                >
                                  <ThumbsUp size={13} /> Yes
                                </button>
                                <button
                                  type="button"
                                  aria-label="No, this answer was not helpful"
                                  aria-pressed={feedback[faq.id] === "no"}
                                  onClick={() =>
                                    setFeedback((previous) => ({
                                      ...previous,
                                      [faq.id]: "no",
                                    }))
                                  }
                                  className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition active:scale-95"
                                  style={{
                                    borderColor:
                                      feedback[faq.id] === "no"
                                        ? "var(--ifm-color-primary)"
                                        : "var(--chh-auth-border)",
                                    color:
                                      feedback[faq.id] === "no"
                                        ? "var(--ifm-color-primary)"
                                        : "var(--chh-auth-muted)",
                                    background:
                                      feedback[faq.id] === "no"
                                        ? "var(--chh-auth-glow)"
                                        : "transparent",
                                  }}
                                >
                                  <ThumbsDown size={13} /> No
                                </button>
                              </div>
                            </div>

                            {feedback[faq.id] && (
                              <p
                                className="mt-3 text-xs font-bold"
                                style={{ color: "var(--ifm-color-primary)" }}
                                role="status"
                              >
                                Thank you for your feedback!
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>

                {filteredFAQs.length === 0 && (
                  <div
                    className="rounded-2xl border px-6 py-12 text-center"
                    style={{
                      background: "var(--chh-auth-card)",
                      borderColor: "var(--chh-auth-border)",
                    }}
                  >
                    <span
                      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: "var(--chh-auth-glow)",
                        color: "var(--ifm-color-primary)",
                      }}
                    >
                      <FileQuestion size={28} />
                    </span>
                    <h3 className="mb-2 text-lg font-bold">
                      No matching answers found
                    </h3>
                    <p
                      className="mx-auto mb-5 max-w-md text-xs leading-relaxed"
                      style={{ color: "var(--chh-auth-muted)" }}
                    >
                      Try searching with keywords or ask our developer community on GitHub Discussions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="rounded-xl border px-4 py-2 text-xs font-bold transition active:scale-95"
                        style={{ borderColor: "var(--chh-auth-border)" }}
                      >
                        Clear Filters
                      </button>
                      <a
                        href={GITHUB_DISCUSSIONS}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white shadow-xs no-underline active:scale-95"
                        style={{ background: "var(--ifm-color-primary)" }}
                      >
                        Ask Community <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT CARDS GRID */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Support Channels"
            title="Additional ways to get help"
            description="Choose the ideal channel depending on whether you are reporting bugs or seeking coding help."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group flex flex-col justify-between rounded-2xl border p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: "var(--chh-auth-card)",
                    borderColor: "var(--chh-auth-border)",
                  }}
                >
                  <div>
                    <span
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: "var(--chh-auth-glow)",
                        color: "var(--ifm-color-primary)",
                      }}
                    >
                      <Icon size={24} />
                    </span>
                    <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                    <p
                      className="mb-6 text-xs leading-relaxed"
                      style={{ color: "var(--chh-auth-muted)" }}
                    >
                      {card.description}
                    </p>
                  </div>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-wide no-underline"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      {card.action}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <Link
                      to={card.href}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-wide no-underline"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      {card.action}
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* GISCUS COMMUNITY DISCUSSIONS */}
        <section
          className="border-y py-16"
          style={{
            background: "var(--chh-auth-surface)",
            borderColor: "var(--chh-auth-border)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  GitHub Discussions Integration
                </p>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Community-driven support and discussions.
                </h2>
                <p
                  className="max-w-2xl text-sm leading-relaxed"
                  style={{ color: "var(--chh-auth-muted)" }}
                >
                  Ask questions, exchange technical tips, and collaborate on platform features directly through GitHub.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={GITHUB_DISCUSSIONS}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-md no-underline transition hover:opacity-90 active:scale-95"
                    style={{ background: "var(--ifm-color-primary)" }}
                  >
                    <MessageCircle size={16} />
                    Join GitHub Discussions
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={GITHUB_ORG}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-xs font-bold no-underline transition active:scale-95"
                    style={{
                      borderColor: "var(--chh-auth-border)",
                      color: "var(--ifm-font-color-base)",
                      background: "var(--chh-auth-card)",
                    }}
                  >
                    <Github size={16} />
                    GitHub Organization
                  </a>
                </div>
              </div>

              <div
                className="rounded-2xl border p-6"
                style={{
                  background: "var(--chh-auth-card)",
                  borderColor: "var(--chh-auth-border)",
                }}
              >
                <h3 className="mb-5 text-sm font-bold">
                  Discussion Guidelines
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Be specific",
                      detail: "Provide details and code snippets when asking for help.",
                    },
                    {
                      icon: Lightbulb,
                      title: "Share ideas",
                      detail: "Suggest improvements for tutorials and features.",
                    },
                    {
                      icon: Users,
                      title: "Help others",
                      detail: "Share your knowledge with new learners.",
                    },
                    {
                      icon: CheckCircle2,
                      title: "Accept solutions",
                      detail: "Mark correct responses as accepted to assist others.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                          style={{
                            background: "var(--chh-auth-glow)",
                            color: "var(--ifm-color-primary)",
                          }}
                        >
                          <Icon size={16} />
                        </span>
                        <div>
                          <h4 className="text-xs font-bold">{item.title}</h4>
                          <p
                            className="mt-0.5 text-[11px] leading-relaxed"
                            style={{ color: "var(--chh-auth-muted)" }}
                          >
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* GISCUS COMPONENT CONTAINER */}
            <div
              className="overflow-hidden rounded-2xl border p-6 sm:p-8"
              style={{
                background: "var(--chh-auth-card)",
                borderColor: "var(--chh-auth-border)",
              }}
            >
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <MessagesSquare
                      size={18}
                      style={{ color: "var(--ifm-color-primary)" }}
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--ifm-color-primary)" }}
                    >
                      Community Thread
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">
                    Live Community Conversation
                  </h3>
                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--chh-auth-muted)" }}
                  >
                    Powered by GitHub Discussions and Giscus.
                  </p>
                </div>

                <a
                  href={GITHUB_DISCUSSIONS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold no-underline"
                  style={{ color: "var(--ifm-color-primary)" }}
                >
                  View on GitHub <ExternalLink size={14} />
                </a>
              </div>

              <div
                className="min-h-40 overflow-hidden rounded-xl"
                style={{ color: "var(--ifm-font-color-base)" }}
              >
                <GiscusComponent />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-dark))",
              color: "#ffffff",
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/20" />
            <div className="pointer-events-none absolute -bottom-32 right-32 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-bold">
                  <Sparkles size={13} />
                  BUILD TOGETHER. LEARN TOGETHER.
                </div>
                <h2 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Still have questions about your code?
                </h2>
                <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                  Join our open-source community to collaborate, propose features, and solve technical roadblocks together.
                </p>
              </div>

              <a
                href={GITHUB_DISCUSSIONS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold no-underline shadow-lg transition active:scale-95 hover:-translate-y-0.5"
                style={{ color: "var(--ifm-color-primary-dark)" }}
              >
                Start Community Discussion
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HelpPage;