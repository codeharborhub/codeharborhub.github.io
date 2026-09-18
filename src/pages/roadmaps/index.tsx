import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Filter,
  Globe2,
  Layers3,
  Map,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
// @ts-ignore
import "./styles.css";

type RoadmapLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type RoadmapCategory =
  | "Development"
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Mobile"
  | "AI & ML"
  | "Data"
  | "Cloud & DevOps"
  | "Cybersecurity"
  | "Programming"
  | "Computer Science"
  | "Career";

interface Roadmap {
  id: string;
  title: string;
  description: string;
  category: RoadmapCategory;
  level: RoadmapLevel;
  duration: string;
  skills: string[];
  href: string;
  icon: React.ReactNode;
  featured?: boolean;
  popular?: boolean;
  industry?: boolean;
  colorClass?: string;
}

const ROADMAPS: Roadmap[] = [
  // ============================================================
  // DEVELOPMENT
  // ============================================================

  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build a strong foundation in the web platform, from HTML and CSS to JavaScript, APIs, databases, deployment and production engineering.",
    category: "Development",
    level: "Beginner",
    duration: "6–9 months",
    skills: ["HTML", "CSS", "JavaScript", "Git", "APIs", "Databases"],
    href: "#", // /roadmaps/web-development/
    icon: <Globe2 />,
    featured: true,
    popular: true,
    industry: true,
  },

  {
    id: "software-engineer",
    title: "Software Engineer",
    description:
      "A complete software engineering path covering programming, DSA, system design, Git, testing, architecture, databases and production practices.",
    category: "Development",
    level: "Advanced",
    duration: "12–18 months",
    skills: ["DSA", "System Design", "Git", "Testing", "Architecture"],
    href: "#", // /roadmaps/software-engineer/
    icon: <Code2 />,
    featured: true,
    industry: true,
  },

  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description:
      "Master modern frontend development with HTML, CSS, JavaScript, TypeScript, React, accessibility, performance and frontend architecture.",
    category: "Frontend",
    level: "Intermediate",
    duration: "6–9 months",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    href: "#", // /roadmaps/frontend/
    icon: <Layers3 />,
    featured: true,
    popular: true,
    industry: true,
  },

  {
    id: "backend-developer",
    title: "Backend Developer",
    description:
      "Learn how production backend systems work with APIs, authentication, databases, caching, queues, testing, security and deployment.",
    category: "Backend",
    level: "Intermediate",
    duration: "7–10 months",
    skills: ["Node.js", "APIs", "SQL", "Redis", "Docker"],
    href: "#", // /roadmaps/backend/
    featured: true,
    industry: true,
    icon: <Server />,
  },

  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    description:
      "Become capable of designing, developing, testing and deploying complete production-grade web applications.",
    category: "Full Stack",
    level: "Advanced",
    duration: "10–15 months",
    skills: ["React", "Node.js", "TypeScript", "SQL", "Cloud"],
    href: "#", // /roadmaps/full-stack/
    featured: true,
    popular: true,
    industry: true,
    icon: <Zap />,
  },

  // ============================================================
  // FRONTEND
  // ============================================================

  {
    id: "html-developer",
    title: "HTML Developer",
    description:
      "Learn semantic HTML, document structure, accessibility, forms, metadata and modern web standards.",
    category: "Frontend",
    level: "Beginner",
    duration: "2–4 weeks",
    skills: ["HTML5", "Semantic HTML", "Forms", "Accessibility"],
    href: "/roadmaps/html/",
    icon: <Code2 />,
  },

  {
    id: "css-developer",
    title: "CSS Developer",
    description:
      "Master modern CSS including layouts, responsive design, animations, architecture, accessibility and design systems.",
    category: "Frontend",
    level: "Beginner",
    duration: "1–2 months",
    skills: ["Flexbox", "Grid", "Responsive", "Animations"],
    href: "#", // /roadmaps/css/
    icon: <Layers3 />,
  },

  {
    id: "javascript-developer",
    title: "JavaScript Developer",
    description:
      "Go from JavaScript fundamentals to asynchronous programming, browser APIs, modules, tooling and advanced patterns.",
    category: "Frontend",
    level: "Intermediate",
    duration: "3–5 months",
    skills: ["ES6+", "DOM", "Async", "APIs", "Modules"],
    href: "#", // /roadmaps/javascript/
    icon: <Terminal />,
    popular: true,
  },

  {
    id: "typescript-developer",
    title: "TypeScript Developer",
    description:
      "Learn TypeScript deeply for scalable frontend, backend and full-stack applications.",
    category: "Frontend",
    level: "Intermediate",
    duration: "2–3 months",
    skills: ["Types", "Generics", "Utility Types", "Architecture"],
    href: "#", // /roadmaps/typescript/
    icon: <Code2 />,
  },

  {
    id: "react-developer",
    title: "React Developer",
    description:
      "Learn React from fundamentals through state management, routing, performance, testing and production architecture.",
    category: "Frontend",
    level: "Intermediate",
    duration: "3–5 months",
    skills: ["React", "Hooks", "State", "Routing", "Testing"],
    href: "#", // /roadmaps/react/
    icon: <Layers3 />,
    popular: true,
    industry: true,
  },

  // ============================================================
  // BACKEND
  // ============================================================

  {
    id: "nodejs-developer",
    title: "Node.js Developer",
    description:
      "Build scalable backend applications using Node.js, APIs, databases, authentication, testing and deployment.",
    category: "Backend",
    level: "Intermediate",
    duration: "3–5 months",
    skills: ["Node.js", "Express", "REST", "Auth", "SQL"],
    href: "#", // /roadmaps/nodejs/
    icon: <Server />,
    popular: true,
  },

  {
    id: "python-backend",
    title: "Python Backend Developer",
    description:
      "Learn Python backend engineering with FastAPI/Django concepts, APIs, databases, testing and deployment.",
    category: "Backend",
    level: "Intermediate",
    duration: "4–6 months",
    skills: ["Python", "FastAPI", "Django", "PostgreSQL"],
    href: "#", // /roadmaps/python-backend/
    icon: <Server />,
  },

  {
    id: "api-developer",
    title: "API Developer",
    description:
      "Learn how to design secure, scalable and maintainable REST, GraphQL and event-driven APIs.",
    category: "Backend",
    level: "Advanced",
    duration: "3–5 months",
    skills: ["REST", "GraphQL", "OpenAPI", "Auth", "Testing"],
    href: "#", // /roadmaps/api-development/
    icon: <Database />,
    industry: true,
  },

  // ============================================================
  // MOBILE
  // ============================================================

  {
    id: "android-developer",
    title: "Android Developer",
    description:
      "Build modern Android applications with Kotlin, Android architecture, APIs, persistence, testing and publishing.",
    category: "Mobile",
    level: "Intermediate",
    duration: "6–9 months",
    skills: ["Kotlin", "Android", "APIs", "SQLite", "Testing"],
    href: "#", // /roadmaps/android/
    icon: <Code2 />,
  },

  {
    id: "flutter-developer",
    title: "Flutter Developer",
    description:
      "Build cross-platform mobile applications with Flutter, Dart, state management, APIs and production deployment.",
    category: "Mobile",
    level: "Intermediate",
    duration: "4–6 months",
    skills: ["Dart", "Flutter", "State", "APIs", "Firebase"],
    href: "#", // /roadmaps/flutter/
    icon: <Zap />,
  },

  // ============================================================
  // AI & MACHINE LEARNING
  // ============================================================

  {
    id: "ai-engineer",
    title: "AI Engineer",
    description:
      "Learn the complete AI engineering lifecycle from Python and ML fundamentals to LLM applications, evaluation and deployment.",
    category: "AI & ML",
    level: "Advanced",
    duration: "9–15 months",
    skills: ["Python", "ML", "LLMs", "RAG", "MLOps"],
    href: "#", // /roadmaps/ai-engineer/
    icon: <BrainCircuit />,
    featured: true,
    popular: true,
    industry: true,
  },

  {
    id: "machine-learning",
    title: "Machine Learning Engineer",
    description:
      "Master machine learning mathematics, algorithms, model development, evaluation, deployment and MLOps.",
    category: "AI & ML",
    level: "Advanced",
    duration: "9–12 months",
    skills: ["Python", "Math", "ML", "Deep Learning", "MLOps"],
    href: "#", // /roadmaps/machine-learning/
    icon: <BrainCircuit />,
    industry: true,
  },

  {
    id: "deep-learning",
    title: "Deep Learning Engineer",
    description:
      "Study neural networks, computer vision, NLP, transformers, model optimization and deep learning systems.",
    category: "AI & ML",
    level: "Advanced",
    duration: "8–12 months",
    skills: ["PyTorch", "Neural Networks", "CV", "NLP"],
    href: "#", // /roadmaps/deep-learning/
    icon: <BrainCircuit />,
  },

  {
    id: "generative-ai",
    title: "Generative AI Engineer",
    description:
      "Learn modern generative AI application development including LLMs, embeddings, RAG, agents, evaluation and AI safety.",
    category: "AI & ML",
    level: "Advanced",
    duration: "4–8 months",
    skills: ["LLMs", "RAG", "Agents", "Embeddings", "Evaluation"],
    href: "#", // /roadmaps/generative-ai/
    icon: <Sparkles />,
    featured: true,
    industry: true,
  },

  // ============================================================
  // DATA
  // ============================================================

  {
    id: "data-analyst",
    title: "Data Analyst",
    description:
      "Learn data analysis with spreadsheets, SQL, Python, statistics, visualization and business intelligence.",
    category: "Data",
    level: "Beginner",
    duration: "4–6 months",
    skills: ["Excel", "SQL", "Python", "Statistics", "BI"],
    href: "#", // /roadmaps/data-analyst/
    icon: <Database />,
    popular: true,
  },

  {
    id: "data-scientist",
    title: "Data Scientist",
    description:
      "Develop strong foundations in statistics, Python, data analysis, machine learning and experimentation.",
    category: "Data",
    level: "Advanced",
    duration: "8–12 months",
    skills: ["Python", "Statistics", "SQL", "ML", "Visualization"],
    href: "#", // /roadmaps/data-scientist/
    icon: <Database />,
  },

  {
    id: "data-engineer",
    title: "Data Engineer",
    description:
      "Build reliable data platforms with SQL, Python, pipelines, warehouses, distributed systems and cloud infrastructure.",
    category: "Data",
    level: "Advanced",
    duration: "8–12 months",
    skills: ["SQL", "Python", "ETL", "Spark", "Cloud"],
    href: "#", // /roadmaps/data-engineer/
    icon: <Database />,
    industry: true,
  },

  // ============================================================
  // CLOUD & DEVOPS
  // ============================================================

  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    description:
      "Learn Linux, networking, Git, CI/CD, containers, Kubernetes, observability, infrastructure and cloud engineering.",
    category: "Cloud & DevOps",
    level: "Advanced",
    duration: "8–12 months",
    skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "Cloud"],
    href: "#", // /roadmaps/devops/
    icon: <Server />,
    featured: true,
    industry: true,
  },

  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    description:
      "Learn cloud infrastructure, networking, IAM, compute, storage, databases, monitoring and infrastructure as code.",
    category: "Cloud & DevOps",
    level: "Advanced",
    duration: "7–10 months",
    skills: ["AWS", "Azure", "Networking", "IAM", "Terraform"],
    href: "#", // /roadmaps/cloud/
    icon: <Globe2 />,
    industry: true,
  },

  {
    id: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    description:
      "Learn reliability engineering, observability, automation, incident management, distributed systems and scalability.",
    category: "Cloud & DevOps",
    level: "Expert",
    duration: "12–18 months",
    skills: ["SRE", "Kubernetes", "Observability", "Systems"],
    href: "#", // /roadmaps/sre/
    icon: <Server />,
  },

  // ============================================================
  // CYBERSECURITY
  // ============================================================

  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Build cybersecurity fundamentals across networking, Linux, security concepts, web security, identity and defensive practices.",
    category: "Cybersecurity",
    level: "Beginner",
    duration: "6–9 months",
    skills: ["Networking", "Linux", "Security", "Web Security"],
    href: "#", // /roadmaps/cybersecurity/
    icon: <ShieldCheck />,
    featured: true,
  },

  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    description:
      "Learn authorized security testing, reconnaissance, web application security, vulnerability assessment and reporting.",
    category: "Cybersecurity",
    level: "Advanced",
    duration: "8–12 months",
    skills: ["Linux", "Networking", "Web Security", "Pentesting"],
    href: "#", // /roadmaps/ethical-hacking/
    icon: <ShieldCheck />,
    industry: true,
  },

  {
    id: "security-engineer",
    title: "Security Engineer",
    description:
      "Develop production security engineering skills covering application, cloud, identity, infrastructure and security operations.",
    category: "Cybersecurity",
    level: "Expert",
    duration: "12–18 months",
    skills: ["AppSec", "Cloud Security", "IAM", "Detection"],
    href: "#", // /roadmaps/security-engineer/
    icon: <ShieldCheck />,
  },

  // ============================================================
  // PROGRAMMING
  // ============================================================

  {
    id: "python",
    title: "Python Developer",
    description:
      "Master Python programming from syntax and data structures to OOP, APIs, automation and production development.",
    category: "Programming",
    level: "Beginner",
    duration: "3–5 months",
    skills: ["Python", "OOP", "DSA", "APIs", "Testing"],
    href: "#", // /roadmaps/python/
    icon: <Terminal />,
    popular: true,
  },

  {
    id: "java",
    title: "Java Developer",
    description:
      "Learn Java, object-oriented programming, collections, concurrency, backend development, testing and JVM concepts.",
    category: "Programming",
    level: "Intermediate",
    duration: "5–8 months",
    skills: ["Java", "OOP", "Collections", "Spring", "SQL"],
    href: "#", // /roadmaps/java/
    icon: <Code2 />,
  },

  {
    id: "cpp",
    title: "C++ Developer",
    description:
      "Master C++ programming, memory management, STL, OOP, modern C++ and performance-oriented development.",
    category: "Programming",
    level: "Intermediate",
    duration: "4–6 months",
    skills: ["C++", "STL", "OOP", "Memory", "DSA"],
    href: "#", // /roadmaps/cpp/
    icon: <Terminal />,
  },

  // ============================================================
  // COMPUTER SCIENCE
  // ============================================================

  {
    id: "computer-science",
    title: "Computer Science",
    description:
      "Build university-level computer science foundations covering programming, DSA, OS, DBMS, networking, architecture and theory.",
    category: "Computer Science",
    level: "Advanced",
    duration: "12–24 months",
    skills: ["DSA", "OS", "DBMS", "Networks", "Architecture"],
    href: "#", // /roadmaps/computer-science/
    icon: <BookOpen />,
    featured: true,
  },

  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Develop problem-solving skills through arrays, strings, trees, graphs, dynamic programming and algorithmic techniques.",
    category: "Computer Science",
    level: "Intermediate",
    duration: "4–8 months",
    skills: ["Arrays", "Trees", "Graphs", "DP", "Algorithms"],
    href: "#", // /roadmaps/dsa/
    icon: <Trophy />,
    popular: true,
  },

  {
    id: "system-design",
    title: "System Design",
    description:
      "Learn to design scalable systems using architecture, APIs, databases, caching, queues, consistency and distributed systems.",
    category: "Computer Science",
    level: "Expert",
    duration: "4–8 months",
    skills: ["Architecture", "Scaling", "Databases", "Caching"],
    href: "#", // /roadmaps/system-design/
    icon: <Layers3 />,
    industry: true,
  },

  // ============================================================
  // CAREER
  // ============================================================

  {
    id: "sde-interview",
    title: "SDE Interview Preparation",
    description:
      "Prepare for software engineering interviews with DSA, CS fundamentals, system design, behavioral preparation and mock interviews.",
    category: "Career",
    level: "Advanced",
    duration: "3–6 months",
    skills: ["DSA", "CS", "System Design", "Behavioral"],
    href: "#", // /roadmaps/sde-interview/
    icon: <BriefcaseBusiness />,
    featured: true,
    popular: true,
  },

  {
    id: "open-source",
    title: "Open Source Contributor",
    description:
      "Learn Git, GitHub, issue tracking, pull requests, code review, documentation and professional open-source collaboration.",
    category: "Career",
    level: "Beginner",
    duration: "1–3 months",
    skills: ["Git", "GitHub", "Issues", "PRs", "Code Review"],
    href: "#", // /roadmaps/open-source/
    icon: <Users />,
  },

  {
    id: "technical-writer",
    title: "Technical Writer",
    description:
      "Learn technical documentation, developer writing, API documentation, Markdown, information architecture and open-source docs.",
    category: "Career",
    level: "Beginner",
    duration: "1–3 months",
    skills: ["Markdown", "Docs", "APIs", "Git", "Writing"],
    href: "#", // /roadmaps/technical-writer/
    icon: <BookOpen />,
  },
];

const CATEGORIES: Array<"All" | RoadmapCategory> = [
  "All",
  "Development",
  "Frontend",
  "Backend",
  "Full Stack",
  "Mobile",
  "AI & ML",
  "Data",
  "Cloud & DevOps",
  "Cybersecurity",
  "Programming",
  "Computer Science",
  "Career",
];

const LEVELS: Array<"All" | RoadmapLevel> = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
];

const LEVEL_CLASS: Record<RoadmapLevel, string> = {
  Beginner: "level-beginner",
  Intermediate: "level-intermediate",
  Advanced: "level-advanced",
  Expert: "level-expert",
};

function RoadmapCard({ roadmap }: { roadmap: Roadmap }) {
  return (
    <article className="roadmap-card">
      <div className="roadmap-card__top">
        <div className="roadmap-card__icon">{roadmap.icon}</div>

        <div className="roadmap-card__badges">
          <span className={`roadmap-level ${LEVEL_CLASS[roadmap.level]}`}>
            {roadmap.level}
          </span>

          {roadmap.industry && (
            <span className="roadmap-badge roadmap-badge--industry">
              Industry
            </span>
          )}
        </div>
      </div>

      <div className="roadmap-card__body">
        <div className="roadmap-card__category">{roadmap.category}</div>

        <h3>{roadmap.title}</h3>

        <p>{roadmap.description}</p>

        <div className="roadmap-card__skills">
          {roadmap.skills.slice(0, 5).map((skill) => (
            <span key={skill}>{skill}</span>
          ))}

          {roadmap.skills.length > 5 && (
            <span>+{roadmap.skills.length - 5}</span>
          )}
        </div>
      </div>

      <div className="roadmap-card__footer">
        <div className="roadmap-duration">
          <BookOpen size={15} />
          <span>{roadmap.duration}</span>
        </div>

        <Link
          className="roadmap-card__link"
          to={roadmap.href}
          aria-label={`Start ${roadmap.title} roadmap`}
        >
          Start
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

function FeaturedRoadmap({ roadmap }: { roadmap: Roadmap }) {
  return (
    <Link to={roadmap.href} className="featured-roadmap">
      <div className="featured-roadmap__icon">{roadmap.icon}</div>

      <div className="featured-roadmap__content">
        <div className="featured-roadmap__meta">
          <span>{roadmap.category}</span>
          <span>•</span>
          <span>{roadmap.duration}</span>
        </div>

        <h3>{roadmap.title}</h3>
        <p>{roadmap.description}</p>

        <div className="featured-roadmap__skills">
          {roadmap.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="featured-roadmap__arrow">
        <ArrowRight size={21} />
      </div>
    </Link>
  );
}

export default function RoadmapsPage(): JSX.Element {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<"All" | RoadmapCategory>("All");
  const [level, setLevel] = useState<"All" | RoadmapLevel>("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredRoadmaps = useMemo(() => {
    const query = search.trim().toLowerCase();

    return ROADMAPS.filter((roadmap) => {
      const matchesSearch =
        !query ||
        roadmap.title.toLowerCase().includes(query) ||
        roadmap.description.toLowerCase().includes(query) ||
        roadmap.category.toLowerCase().includes(query) ||
        roadmap.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );

      const matchesCategory =
        category === "All" || roadmap.category === category;

      const matchesLevel =
        level === "All" || roadmap.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, category, level]);

  const featuredRoadmaps = ROADMAPS.filter(
    (roadmap) => roadmap.featured
  ).slice(0, 6);

  const popularRoadmaps = ROADMAPS.filter(
    (roadmap) => roadmap.popular
  ).slice(0, 6);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All");
  };

  const hasFilters =
    search.length > 0 || category !== "All" || level !== "All";

  return (
    <Layout
      title="Developer Roadmaps"
      description="Explore complete developer roadmaps from beginner to industry-ready. Learn programming, web development, AI, cybersecurity, cloud, DevOps, data and more."
    >
      <main className="roadmaps-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="roadmaps-hero">
          <div className="roadmaps-hero__grid" />

          <div className="container roadmaps-hero__inner">
            <div className="roadmaps-eyebrow">
              <Map size={16} />
              <span>CODEHARBORHUB ROADMAPS</span>
            </div>

            <h1>
              Your path from
              <span> learning to industry-ready.</span>
            </h1>

            <p className="roadmaps-hero__description">
              Follow structured, practical roadmaps designed to help you
              understand what to learn, what to build, what to practice,
              and what skills matter in the real world.
            </p>

            <div className="roadmaps-hero__actions">
              <a href="#roadmap-directory" className="button button--primary">
                Explore Roadmaps
                <ArrowRight size={18} />
              </a>

              <Link
                to="/tutorials/"
                className="button button--secondary"
              >
                Start Learning
                <BookOpen size={18} />
              </Link>
            </div>

            <div className="roadmaps-hero__stats">
              <div>
                <strong>{ROADMAPS.length}+</strong>
                <span>Roadmaps</span>
              </div>

              <div>
                <strong>12</strong>
                <span>Career Areas</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Skill Levels</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Projects to Build</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEARNING PHILOSOPHY
        ====================================================== */}

        <section className="roadmap-method">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">HOW TO USE A ROADMAP</span>

              <h2>
                Don&apos;t just collect technologies.
                <span> Build real skills.</span>
              </h2>

              <p>
                A roadmap is your direction—not a checklist to complete
                as fast as possible.
              </p>
            </div>

            <div className="method-grid">
              <div className="method-card">
                <div className="method-number">01</div>
                <Code2 size={24} />
                <h3>Learn</h3>
                <p>
                  Understand concepts through structured tutorials,
                  documentation and examples.
                </p>
              </div>

              <div className="method-card">
                <div className="method-number">02</div>
                <Terminal size={24} />
                <h3>Practice</h3>
                <p>
                  Solve problems and exercises until concepts become
                  practical skills.
                </p>
              </div>

              <div className="method-card">
                <div className="method-number">03</div>
                <Trophy size={24} />
                <h3>Build</h3>
                <p>
                  Create real-world projects that prove you can apply
                  what you learned.
                </p>
              </div>

              <div className="method-card">
                <div className="method-number">04</div>
                <BriefcaseBusiness size={24} />
                <h3>Ship</h3>
                <p>
                  Deploy, document, contribute and turn your skills into
                  professional experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED
        ====================================================== */}

        <section className="featured-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">START HERE</span>
                <h2>Featured roadmaps</h2>
                <p>
                  High-value paths for learners building modern
                  development and engineering skills.
                </p>
              </div>

              <Link to="#roadmap-directory" className="section-link">
                View all
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="featured-grid">
              {featuredRoadmaps.map((roadmap) => (
                <FeaturedRoadmap
                  key={roadmap.id}
                  roadmap={roadmap}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CAREER PATHS
        ====================================================== */}

        <section className="career-section">
          <div className="container">
            <div className="career-panel">
              <div className="career-panel__content">
                <span className="section-kicker">
                  CHOOSE YOUR DIRECTION
                </span>

                <h2>Which developer do you want to become?</h2>

                <p>
                  Start with your target role. You can always change
                  direction later as you discover what you enjoy.
                </p>

                <div className="career-links">
                  {[
                    ["Frontend Developer", "#"], // /roadmaps/frontend/
                    ["Backend Developer", "#"], // /roadmaps/backend/
                    ["Full Stack Developer", "#"], // /roadmaps/full-stack/
                    ["AI Engineer", "#"], // /roadmaps/ai-engineer/
                    ["Data Engineer", "#"], // /roadmaps/data-engineer/
                    ["DevOps Engineer", "#"], // /roadmaps/devops/
                    ["Cybersecurity", "#"], // /roadmaps/cybersecurity/
                    ["Software Engineer", "#"], // /roadmaps/software-engineer/
                  ].map(([title, href]) => (
                    <Link key={title} to={href}>
                      <span>{title}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="career-panel__visual">
                <div className="career-orbit career-orbit--one" />
                <div className="career-orbit career-orbit--two" />
                <div className="career-core">
                  <Sparkles size={30} />
                  <span>Your Career</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            POPULAR
        ====================================================== */}

        <section className="popular-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">COMMUNITY PICKS</span>
                <h2>Popular roadmaps</h2>
                <p>
                  Start with paths that are useful across many software
                  engineering careers.
                </p>
              </div>
            </div>

            <div className="popular-grid">
              {popularRoadmaps.map((roadmap) => (
                <Link
                  key={roadmap.id}
                  to={roadmap.href}
                  className="popular-card"
                >
                  <div className="popular-card__icon">
                    {roadmap.icon}
                  </div>

                  <div>
                    <span>{roadmap.category}</span>
                    <h3>{roadmap.title}</h3>
                  </div>

                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DIRECTORY
        ====================================================== */}

        <section
          id="roadmap-directory"
          className="roadmap-directory"
        >
          <div className="container">
            <div className="section-heading section-heading--directory">
              <div>
                <span className="section-kicker">ROADMAP DIRECTORY</span>
                <h2>Explore every learning path</h2>
                <p>
                  Search by role, technology, career area or skill level.
                </p>
              </div>

              <div className="roadmap-count">
                <strong>{filteredRoadmaps.length}</strong>
                <span>paths</span>
              </div>
            </div>

            {/* Search */}

            <div className="roadmap-toolbar">
              <div className="roadmap-search">
                <Search size={19} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search roadmaps, skills, technologies..."
                  aria-label="Search roadmaps"
                />

                {search && (
                  <button
                    type="button"
                    className="clear-search"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <button
                type="button"
                className={`filter-toggle ${
                  showFilters ? "is-active" : ""
                }`}
                onClick={() => setShowFilters((value) => !value)}
              >
                <Filter size={17} />
                Filters
                <ChevronDown size={16} />
              </button>
            </div>

            <div
              className={`roadmap-filters ${
                showFilters ? "roadmap-filters--open" : ""
              }`}
            >
              <div className="filter-group">
                <span>Category</span>

                <div className="filter-options">
                  {CATEGORIES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        category === item ? "is-selected" : ""
                      }
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span>Level</span>

                <div className="filter-options">
                  {LEVELS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={level === item ? "is-selected" : ""}
                      onClick={() => setLevel(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  type="button"
                  className="clear-filters"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Results */}

            {filteredRoadmaps.length > 0 ? (
              <div className="roadmaps-grid">
                {filteredRoadmaps.map((roadmap) => (
                  <RoadmapCard
                    key={roadmap.id}
                    roadmap={roadmap}
                  />
                ))}
              </div>
            ) : (
              <div className="roadmap-empty">
                <div className="roadmap-empty__icon">
                  <Search size={25} />
                </div>

                <h3>No roadmaps found</h3>

                <p>
                  Try a different search term or remove one of the
                  filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="button button--primary"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            ROADMAP LEVELS
        ====================================================== */}

        <section className="levels-section">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-kicker">PROGRESSION</span>

              <h2>
                Grow from beginner to
                <span> industry expert.</span>
              </h2>

              <p>
                Choose the level that matches your current knowledge.
                You don't need to know everything before starting.
              </p>
            </div>

            <div className="levels-grid">
              <div className="level-card">
                <span className="level-card__number">01</span>
                <div className="level-card__icon">
                  <BookOpen size={23} />
                </div>
                <span className="level-card__label">BEGINNER</span>
                <h3>Build foundations</h3>
                <p>
                  Programming fundamentals, tools, basic concepts and
                  small projects.
                </p>
              </div>

              <div className="level-card">
                <span className="level-card__number">02</span>
                <div className="level-card__icon">
                  <Code2 size={23} />
                </div>
                <span className="level-card__label">
                  INTERMEDIATE
                </span>
                <h3>Become productive</h3>
                <p>
                  Frameworks, APIs, databases, testing and increasingly
                  complex applications.
                </p>
              </div>

              <div className="level-card">
                <span className="level-card__number">03</span>
                <div className="level-card__icon">
                  <Layers3 size={23} />
                </div>
                <span className="level-card__label">ADVANCED</span>
                <h3>Engineer systems</h3>
                <p>
                  Architecture, performance, security, distributed
                  systems and production engineering.
                </p>
              </div>

              <div className="level-card">
                <span className="level-card__number">04</span>
                <div className="level-card__icon">
                  <Award size={23} />
                </div>
                <span className="level-card__label">EXPERT</span>
                <h3>Lead and design</h3>
                <p>
                  System design, technical leadership, scalability,
                  mentoring and engineering strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="roadmaps-cta">
          <div className="container">
            <div className="roadmaps-cta__panel">
              <div className="roadmaps-cta__glow" />

              <div className="roadmaps-cta__content">
                <div className="roadmaps-eyebrow">
                  <CheckCircle2 size={16} />
                  <span>YOUR NEXT STEP</span>
                </div>

                <h2>
                  Stop wondering what to learn next.
                  <span> Start building.</span>
                </h2>

                <p>
                  Pick one roadmap, follow it consistently, build
                  projects, practice what you learn and keep shipping.
                </p>

                <div className="roadmaps-cta__actions">
                  <Link
                    to="/tutorials/"
                    className="button button--primary"
                  >
                    Start Learning
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/practice/"
                    className="button button--secondary"
                  >
                    Start Practicing
                    <Terminal size={18} />
                  </Link>
                </div>
              </div>

              <div className="roadmaps-cta__terminal">
                <div className="terminal-header">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="terminal-body">
                  <div>
                    <span className="terminal-muted">$</span>{" "}
                    choose-roadmap
                  </div>

                  <div className="terminal-success">
                    ✓ roadmap selected
                  </div>

                  <div>
                    <span className="terminal-muted">$</span>{" "}
                    learn --build --ship
                  </div>

                  <div className="terminal-cursor">
                    _
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}