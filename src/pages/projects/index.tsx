import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Filter,
  Flame,
  Globe,
  Layers3,
  LockKeyhole,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

type Project = {
  title: string;
  description: string;
  category: string;
  difficulty: Difficulty;
  duration: string;
  technologies: string[];
  tags: string[];
  href: string;
  featured?: boolean;
  popular?: boolean;
  icon: React.ReactNode;
};

type Track = {
  title: string;
  description: string;
  icon: React.ReactNode;
  projects: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "Developer Portfolio",
    description:
      "Build a professional developer portfolio with projects, skills, experience, GitHub integration and a responsive design.",
    category: "Frontend",
    difficulty: "Beginner",
    duration: "1–2 weeks",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Portfolio", "Responsive", "UI"],
    href: "#", // /projects/developer-portfolio/
    featured: true,
    popular: true,
    icon: <Globe size={22} />,
  },
  {
    title: "Task Management SaaS",
    description:
      "Build a production-style task management application with authentication, workspaces, tasks, filters and role-based access.",
    category: "Full Stack",
    difficulty: "Intermediate",
    duration: "3–5 weeks",
    technologies: ["React", "Node.js", "PostgreSQL"],
    tags: ["SaaS", "Auth", "CRUD"],
    href: "#", // /projects/task-management-saas/
    featured: true,
    popular: true,
    icon: <Layers3 size={22} />,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Create a complete commerce experience with product discovery, cart, checkout, orders, authentication and admin management.",
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "5–8 weeks",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    tags: ["Commerce", "Payments", "Admin"],
    href: "#", // /projects/ecommerce-platform/
    featured: true,
    icon: <BriefcaseBusiness size={22} />,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Build a real-time messaging platform with private conversations, online presence, notifications and message history.",
    category: "Backend",
    difficulty: "Intermediate",
    duration: "3–4 weeks",
    technologies: ["React", "Node.js", "WebSocket"],
    tags: ["Realtime", "WebSocket", "Messaging"],
    href: "#", // /projects/realtime-chat/
    popular: true,
    icon: <Users size={22} />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Build an analytics dashboard with KPIs, charts, filters, date ranges and responsive data visualization.",
    category: "Frontend",
    difficulty: "Intermediate",
    duration: "2–3 weeks",
    technologies: ["React", "TypeScript", "Charts"],
    tags: ["Analytics", "Dashboard", "Charts"],
    href: "#", // /projects/analytics-dashboard/
    icon: <BarChart3 size={22} />,
  },
  {
    title: "REST API Platform",
    description:
      "Design and build a secure REST API with authentication, validation, pagination, documentation and testing.",
    category: "Backend",
    difficulty: "Intermediate",
    duration: "2–4 weeks",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    tags: ["REST API", "Backend", "Testing"],
    href: "#", // /projects/rest-api-platform/
    icon: <Server size={22} />,
  },
  {
    title: "AI Developer Assistant",
    description:
      "Create an AI-powered developer assistant capable of answering coding questions, explaining code and generating suggestions.",
    category: "AI",
    difficulty: "Advanced",
    duration: "4–7 weeks",
    technologies: ["React", "Python", "LLM API"],
    tags: ["AI", "LLM", "Developer Tools"],
    href: "#", // /projects/ai-developer-assistant/
    featured: true,
    icon: <Sparkles size={22} />,
  },
  {
    title: "URL Shortener",
    description:
      "Build a scalable URL shortening service with redirects, analytics, expiration and custom aliases.",
    category: "Backend",
    difficulty: "Beginner",
    duration: "1–2 weeks",
    technologies: ["Node.js", "MongoDB", "Redis"],
    tags: ["API", "Caching", "Analytics"],
    href: "#", // /projects/url-shortener/
    icon: <Zap size={22} />,
  },
  {
    title: "Learning Management System",
    description:
      "Build an LMS with courses, lessons, enrollment, progress tracking, quizzes, certificates and instructor workflows.",
    category: "Full Stack",
    difficulty: "Advanced",
    duration: "6–10 weeks",
    technologies: ["Next.js", "Supabase", "TypeScript"],
    tags: ["EdTech", "LMS", "Progress"],
    href: "#", // /projects/learning-management-system/
    popular: true,
    icon: <BookOpen size={22} />,
  },
  {
    title: "Cybersecurity Dashboard",
    description:
      "Create a security monitoring dashboard that visualizes vulnerabilities, incidents, assets and security metrics.",
    category: "Cybersecurity",
    difficulty: "Advanced",
    duration: "4–6 weeks",
    technologies: ["React", "Python", "PostgreSQL"],
    tags: ["Security", "Monitoring", "Dashboard"],
    href: "#", // /projects/cybersecurity-dashboard/
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Inventory Management System",
    description:
      "Build inventory workflows for products, stock movements, suppliers, orders, reports and role-based administration.",
    category: "Full Stack",
    difficulty: "Intermediate",
    duration: "3–5 weeks",
    technologies: ["React", "Node.js", "MySQL"],
    tags: ["Inventory", "Business", "Admin"],
    href: "#", // /projects/inventory-management/
    icon: <Database size={22} />,
  },
  {
    title: "DevOps Deployment Dashboard",
    description:
      "Build a deployment dashboard for services, environments, build status, deployment history and operational metrics.",
    category: "DevOps",
    difficulty: "Advanced",
    duration: "4–6 weeks",
    technologies: ["React", "Docker", "GitHub Actions"],
    tags: ["DevOps", "CI/CD", "Cloud"],
    href: "#", // /projects/devops-dashboard/
    icon: <Rocket size={22} />,
  },
];

const TRACKS: Track[] = [
  {
    title: "Frontend Engineering",
    description:
      "Build responsive interfaces, dashboards, component systems and production-quality user experiences.",
    icon: <Globe size={23} />,
    projects: "20+ Projects",
    href: "#", // /projects/frontend/
  },
  {
    title: "Backend Engineering",
    description:
      "Work with APIs, databases, authentication, caching, queues and scalable backend architecture.",
    icon: <Server size={23} />,
    projects: "20+ Projects",
    href: "#", // /projects/backend/
  },
  {
    title: "Full Stack Development",
    description:
      "Build complete products from frontend to backend, database, authentication and deployment.",
    icon: <Layers3 size={23} />,
    projects: "30+ Projects",
    href: "#", // /projects/full-stack/
  },
  {
    title: "AI & Machine Learning",
    description:
      "Build practical AI applications, intelligent assistants, ML systems and data-driven products.",
    icon: <Sparkles size={23} />,
    projects: "15+ Projects",
    href: "#", // /projects/ai-ml/
  },
  {
    title: "Cybersecurity",
    description:
      "Create security-focused applications covering monitoring, authentication, vulnerabilities and defensive engineering.",
    icon: <ShieldCheck size={23} />,
    projects: "15+ Projects",
    href: "#", // /projects/cybersecurity/
  },
  {
    title: "DevOps & Cloud",
    description:
      "Practice containers, CI/CD, deployment automation, cloud infrastructure and observability.",
    icon: <Rocket size={23} />,
    projects: "15+ Projects",
    href: "#", // /projects/devops/
  },
];

const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "AI",
  "Cybersecurity",
  "DevOps",
];

const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

const STATS = [
  {
    value: "100+",
    label: "Real-world projects",
    icon: <Layers3 size={18} />,
  },
  {
    value: "15+",
    label: "Technology tracks",
    icon: <Code2 size={18} />,
  },
  {
    value: "50+",
    label: "Industry skills",
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    value: "100%",
    label: "Portfolio focused",
    icon: <Award size={18} />,
  },
];

function difficultyClass(difficulty: Difficulty) {
  if (difficulty === "Beginner") return styles.beginner;
  if (difficulty === "Intermediate") return styles.intermediate;
  return styles.advanced;
}

export default function ProjectsPage(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;

      const matchesDifficulty =
        difficulty === "All" || project.difficulty === difficulty;

      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query),
        ) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(query),
        );

      return (
        matchesCategory &&
        matchesDifficulty &&
        matchesSearch
      );
    });
  }, [search, category, difficulty]);

  const featuredProjects = PROJECTS.filter(
    (project) => project.featured,
  ).slice(0, 3);

  return (
    <Layout
      title="Build Real-World Projects"
      description="Build industry-level projects with CodeHarborHub. Practice frontend, backend, full-stack, AI, cybersecurity and DevOps through real-world projects."
    >
      <main className={styles.page}>
        {/* ========================================================
            HERO
        ========================================================= */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Code2 size={15} />
                <span>BUILD • SHIP • GROW</span>
                <i />
                <span>Industry Focused</span>
              </div>

              <h1>
                Don't just learn code.
                <span>Build things that matter.</span>
              </h1>

              <p>
                Turn your knowledge into real-world experience with
                structured projects designed around the skills,
                workflows and engineering practices used in the
                industry.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  to="#" // /projects/all/
                >
                  Explore Projects
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="#" // /projects/featured/
                >
                  <Star size={17} />
                  Featured Projects
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <span>
                  <CheckCircle2 size={15} />
                  Beginner to advanced
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Real-world requirements
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Portfolio ready
                </span>
              </div>
            </div>

            {/* Project architecture visual */}
            <div className={styles.architecture}>
              <div className={styles.architectureHeader}>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>

                <span className={styles.architectureTitle}>
                  project-architecture
                </span>

                <Terminal size={15} />
              </div>

              <div className={styles.architectureBody}>
                <div className={styles.architectureNode}>
                  <Globe size={17} />
                  <span>Frontend</span>
                </div>

                <div className={styles.connection}>
                  <span />
                </div>

                <div className={styles.architectureNode}>
                  <Server size={17} />
                  <span>API</span>
                </div>

                <div className={styles.connection}>
                  <span />
                </div>

                <div className={styles.architectureNode}>
                  <Database size={17} />
                  <span>Database</span>
                </div>

                <div className={styles.architectureNodeSmall}>
                  <ShieldCheck size={16} />
                  <span>Auth</span>
                </div>

                <div className={styles.architectureNodeSmall}>
                  <Rocket size={16} />
                  <span>Deploy</span>
                </div>

                <div className={styles.architectureNodeSmall}>
                  <BarChart3 size={16} />
                  <span>Monitor</span>
                </div>
              </div>

              <div className={styles.architectureFooter}>
                <span>
                  <span className={styles.liveDot} />
                  Production workflow
                </span>

                <span>v1.0.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STATS
        ========================================================= */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {STATS.map((stat) => (
                <div className={styles.stat} key={stat.label}>
                  <div className={styles.statIcon}>
                    {stat.icon}
                  </div>

                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            FEATURED PROJECTS
        ========================================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="FEATURED BUILDS"
              title="Projects worth putting in your portfolio."
              description="Start with projects that demonstrate more than syntax — architecture, problem-solving, product thinking and engineering discipline."
            />

            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.title}
                  featured
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            LEARNING TRACKS
        ========================================================= */}
        <section
          className={`${styles.section} ${styles.sectionMuted}`}
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="ENGINEERING TRACKS"
              title="Choose the career path you want to build for."
              description="Follow projects aligned with the engineering skills you want to develop."
            />

            <div className={styles.trackGrid}>
              {TRACKS.map((track) => (
                <Link
                  to={track.href}
                  className={styles.trackCard}
                  key={track.title}
                >
                  <div className={styles.trackIcon}>
                    {track.icon}
                  </div>

                  <div className={styles.trackBody}>
                    <div className={styles.trackTitle}>
                      <h3>{track.title}</h3>
                      <ArrowUpRight size={17} />
                    </div>

                    <p>{track.description}</p>

                    <span>{track.projects}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            PROJECT EXPLORER
        ========================================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="PROJECT LIBRARY"
              title="Find your next build."
              description="Filter projects by engineering area, difficulty or technology."
            />

            <div className={styles.explorer}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search projects, technologies..."
                  aria-label="Search projects"
                />

                {search && (
                  <button
                    type="button"
                    className={styles.clearButton}
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              <div className={styles.filterGroup}>
                <div className={styles.filterLabel}>
                  <Filter size={14} />
                  Category
                </div>

                <div className={styles.filterList}>
                  {CATEGORIES.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setCategory(item)}
                      className={
                        category === item
                          ? styles.filterActive
                          : styles.filter
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <div className={styles.filterLabel}>
                  <Trophy size={14} />
                  Difficulty
                </div>

                <div className={styles.filterList}>
                  {DIFFICULTIES.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setDifficulty(item)}
                      className={
                        difficulty === item
                          ? styles.filterActive
                          : styles.filter
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.resultsBar}>
              <span>
                Showing <strong>{filteredProjects.length}</strong>{" "}
                projects
              </span>

              {(search ||
                category !== "All" ||
                difficulty !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setDifficulty("All");
                  }}
                >
                  Reset filters
                </button>
              )}
            </div>

            <div className={styles.projectGrid}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.title}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className={styles.emptyState}>
                <Search size={26} />

                <h3>No projects found</h3>

                <p>
                  Try another keyword or reset your project filters.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setDifficulty("All");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}

            <div className={styles.centerAction}>
              <Link
                className={styles.outlineButton}
                to="#" // /projects/all/
              >
                Browse Full Project Library
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            PROJECT LIFECYCLE
        ========================================================= */}
        <section
          className={`${styles.section} ${styles.sectionMuted}`}
        >
          <div className={styles.container}>
            <SectionHeading
              eyebrow="BUILD PROCESS"
              title="Build like an engineer, not just a tutorial follower."
              description="Every serious project should move through a repeatable engineering workflow."
            />

            <div className={styles.lifecycle}>
              <LifecycleStep
                number="01"
                icon={<Search size={21} />}
                title="Understand"
                description="Study the requirements, users, constraints and expected outcome."
              />

              <LifecycleStep
                number="02"
                icon={<Layers3 size={21} />}
                title="Plan"
                description="Design the architecture, data model, UI flow and technical approach."
              />

              <LifecycleStep
                number="03"
                icon={<Code2 size={21} />}
                title="Build"
                description="Implement the product using clean, maintainable and reusable code."
              />

              <LifecycleStep
                number="04"
                icon={<ShieldCheck size={21} />}
                title="Test"
                description="Validate functionality, edge cases, security and user experience."
              />

              <LifecycleStep
                number="05"
                icon={<Rocket size={21} />}
                title="Deploy"
                description="Ship the application and configure the production environment."
              />

              <LifecycleStep
                number="06"
                icon={<Award size={21} />}
                title="Showcase"
                description="Document the project and turn your work into portfolio evidence."
              />
            </div>
          </div>
        </section>

        {/* ========================================================
            INDUSTRY STANDARD
        ========================================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.industryCard}>
              <div className={styles.industryContent}>
                <div className={styles.sectionEyebrow}>
                  INDUSTRY-LEVEL THINKING
                </div>

                <h2>
                  Projects should prove your engineering skills.
                </h2>

                <p>
                  A strong portfolio is not about having 50 random
                  applications. It is about demonstrating that you can
                  understand a problem, design a solution, write quality
                  code, test it and ship it.
                </p>

                <div className={styles.industryPoints}>
                  <IndustryPoint
                    icon={<LockKeyhole size={17} />}
                    title="Authentication & authorization"
                  />

                  <IndustryPoint
                    icon={<Database size={17} />}
                    title="Database design"
                  />

                  <IndustryPoint
                    icon={<ShieldCheck size={17} />}
                    title="Security & validation"
                  />

                  <IndustryPoint
                    icon={<BarChart3 size={17} />}
                    title="Monitoring & analytics"
                  />

                  <IndustryPoint
                    icon={<Zap size={17} />}
                    title="Performance optimization"
                  />

                  <IndustryPoint
                    icon={<GitBranchIcon />}
                    title="Git & team workflows"
                  />
                </div>

                <Link
                  className={styles.primaryButton}
                  to="#" // /projects/industry/
                >
                  Explore Industry Projects
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.engineeringBoard}>
                <div className={styles.boardHeader}>
                  <span>ENGINEERING CHECKLIST</span>
                  <CheckCircle2 size={16} />
                </div>

                <ChecklistItem
                  label="Requirements"
                  completed
                />

                <ChecklistItem
                  label="Architecture"
                  completed
                />

                <ChecklistItem
                  label="Database"
                  completed
                />

                <ChecklistItem
                  label="Authentication"
                  completed
                />

                <ChecklistItem
                  label="Testing"
                  completed
                />

                <ChecklistItem
                  label="CI/CD"
                  completed
                />

                <ChecklistItem
                  label="Documentation"
                  completed
                />

                <div className={styles.boardProgress}>
                  <div>
                    <span>Project readiness</span>
                    <strong>100%</strong>
                  </div>

                  <div className={styles.boardProgressTrack}>
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            OPEN SOURCE
        ========================================================= */}
        <section
          className={`${styles.section} ${styles.sectionMuted}`}
        >
          <div className={styles.container}>
            <div className={styles.openSourceCard}>
              <div className={styles.openSourceIcon}>
                <Users size={26} />
              </div>

              <div>
                <div className={styles.sectionEyebrow}>
                  OPEN SOURCE
                </div>

                <h2>Build projects. Contribute. Build your reputation.</h2>

                <p>
                  Take your project beyond your local machine. Improve
                  CodeHarborHub projects, contribute features, fix bugs,
                  improve documentation and collaborate with developers.
                </p>
              </div>

              <div className={styles.openSourceActions}>
                <Link
                  className={styles.primaryButton}
                  href="https://github.com/CodeHarborHub"
                >
                  Explore GitHub
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  className={styles.textButton}
                  to="/contributors/"
                >
                  Meet Contributors
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CTA
        ========================================================= */}
        <section className={styles.finalCta}>
          <div className={styles.finalGlow} />
          <div className={styles.finalGrid} />

          <div className={styles.container}>
            <div className={styles.finalContent}>
              <div className={styles.finalIcon}>
                <Rocket size={21} />
              </div>

              <div className={styles.sectionEyebrow}>
                YOUR NEXT BUILD STARTS HERE
              </div>

              <h2>
                Learn less passively.
                <span> Build more actively.</span>
              </h2>

              <p>
                Pick a project, understand the requirements, build it,
                deploy it and turn your work into real engineering
                experience.
              </p>

              <div className={styles.finalActions}>
                <Link
                  className={styles.primaryButton}
                  to="#" // /projects/all/
                >
                  Start Building
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="/roadmaps/"
                >
                  View Learning Roadmaps
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.finalTrust}>
                <span>
                  <CheckCircle2 size={15} />
                  Real-world projects
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Open-source friendly
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Portfolio focused
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/* ================================================================
   COMPONENTS
================================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionEyebrow}>{eyebrow}</div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      to={project.href}
      className={`${styles.projectCard} ${
        featured ? styles.projectCardFeatured : ""
      }`}
    >
      <div className={styles.projectTop}>
        <div className={styles.projectIcon}>{project.icon}</div>

        <div className={styles.projectBadges}>
          {project.popular && (
            <span className={styles.popularBadge}>
              <Flame size={12} />
              Popular
            </span>
          )}

          <span
            className={`${styles.difficultyBadge} ${difficultyClass(
              project.difficulty,
            )}`}
          >
            {project.difficulty}
          </span>
        </div>
      </div>

      <div className={styles.projectCategory}>
        {project.category}
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className={styles.techList}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className={styles.projectMeta}>
        <span>{project.duration}</span>

        <span>
          View project
          <ChevronRight size={15} />
        </span>
      </div>
    </Link>
  );
}

function LifecycleStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.lifecycleStep}>
      <span className={styles.lifecycleNumber}>{number}</span>

      <div className={styles.lifecycleIcon}>{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function IndustryPoint({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className={styles.industryPoint}>
      {icon}
      <span>{title}</span>
    </div>
  );
}

function ChecklistItem({
  label,
  completed,
}: {
  label: string;
  completed?: boolean;
}) {
  return (
    <div className={styles.checkItem}>
      <CheckCircle2
        size={17}
        className={
          completed ? styles.checkComplete : styles.checkPending
        }
      />

      <span>{label}</span>

      <span className={styles.checkStatus}>
        {completed ? "Ready" : "Pending"}
      </span>
    </div>
  );
}

function GitBranchIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="5" r="3" />
      <circle cx="18" cy="19" r="3" />
      <circle cx="18" cy="5" r="3" />
      <path d="M6 8v8a3 3 0 0 0 3 3h6" />
      <path d="M18 8v8" />
    </svg>
  );
}