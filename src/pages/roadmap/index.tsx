import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  ExternalLink,
  Flame,
  GitBranch,
  Layers3,
  Lock,
  Play,
  Rocket,
  Search,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type RoadmapStatus = "in-progress" | "completed" | "not-started";

type Roadmap = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  icon: React.ReactNode;
  href: string;
  modules: number;
  completed: number;
  estimatedTime: string;
  status: RoadmapStatus;
  colorClass: string;
};

const roadmaps: Roadmap[] = [
  {
    id: "html",
    title: "HTML",
    description:
      "Build a strong foundation in semantic HTML, accessibility, forms, metadata, and modern web structure.",
    category: "Frontend",
    level: "Beginner",
    icon: <Code2 size={22} />,
    href: "/roadmaps/html/",
    modules: 12,
    completed: 2,
    estimatedTime: "2–3 weeks",
    status: "in-progress",
    colorClass: "blue",
  },
  {
    id: "css",
    title: "CSS",
    description:
      "Master layouts, responsive design, Flexbox, Grid, animations, architecture, and modern UI techniques.",
    category: "Frontend",
    level: "Beginner → Advanced",
    icon: <Layers3 size={22} />,
    href: "#", // /roadmaps/css/
    modules: 14,
    completed: 0,
    estimatedTime: "4–6 weeks",
    status: "not-started",
    colorClass: "purple",
  },
  {
    id: "javascript",
    title: "JavaScript",
    description:
      "Learn JavaScript from fundamentals to asynchronous programming, APIs, modules, and advanced concepts.",
    category: "Programming",
    level: "Beginner → Advanced",
    icon: <Brain size={22} />,
    href: "#", // /roadmaps/javascript/
    modules: 18,
    completed: 0,
    estimatedTime: "6–8 weeks",
    status: "not-started",
    colorClass: "yellow",
  },
  {
    id: "react",
    title: "React",
    description:
      "Build modern component-based interfaces using React, hooks, state management, routing, and APIs.",
    category: "Frontend",
    level: "Intermediate",
    icon: <Sparkles size={22} />,
    href: "#", // /roadmaps/react/
    modules: 15,
    completed: 0,
    estimatedTime: "4–6 weeks",
    status: "not-started",
    colorClass: "cyan",
  },
  {
    id: "typescript",
    title: "TypeScript",
    description:
      "Add type safety to JavaScript applications and learn production-level TypeScript patterns.",
    category: "Programming",
    level: "Intermediate",
    icon: <BookOpen size={22} />,
    href: "#", // /roadmaps/typescript/
    modules: 12,
    completed: 0,
    estimatedTime: "3–4 weeks",
    status: "not-started",
    colorClass: "indigo",
  },
  {
    id: "git",
    title: "Git & GitHub",
    description:
      "Learn version control, branching, pull requests, collaboration, releases, and open-source workflows.",
    category: "Developer Tools",
    level: "Beginner → Advanced",
    icon: <GitBranch size={22} />,
    href: "#", // /roadmaps/git/
    modules: 10,
    completed: 0,
    estimatedTime: "2–3 weeks",
    status: "not-started",
    colorClass: "orange",
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    description:
      "Connect frontend, backend, databases, authentication, APIs, deployment, and production engineering.",
    category: "Full Stack",
    level: "Advanced",
    icon: <Rocket size={22} />,
    href: "#", // /roadmaps/full-stack/
    modules: 24,
    completed: 0,
    estimatedTime: "12–16 weeks",
    status: "not-started",
    colorClass: "green",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Understand networking, Linux, security fundamentals, web security, ethical hacking, and defense.",
    category: "Security",
    level: "Beginner → Advanced",
    icon: <Target size={22} />,
    href: "#", // /roadmaps/cybersecurity/
    modules: 20,
    completed: 0,
    estimatedTime: "10–14 weeks",
    status: "not-started",
    colorClass: "red",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Choose a roadmap",
    description:
      "Pick a structured learning path based on the skills you want to develop.",
    icon: <Compass size={20} />,
  },
  {
    number: "02",
    title: "Learn the concepts",
    description:
      "Follow tutorials, examples, references, and practical explanations.",
    icon: <BookOpen size={20} />,
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Solve challenges and reinforce concepts through hands-on exercises.",
    icon: <Code2 size={20} />,
  },
  {
    number: "04",
    title: "Build projects",
    description:
      "Turn your knowledge into real projects that demonstrate your skills.",
    icon: <Rocket size={20} />,
  },
  {
    number: "05",
    title: "Track progress",
    description:
      "Complete modules and keep moving through your learning journey.",
    icon: <Trophy size={20} />,
  },
];

const categories = [
  "All",
  "Frontend",
  "Programming",
  "Developer Tools",
  "Full Stack",
  "Security",
];

function getStatusLabel(status: RoadmapStatus) {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    default:
      return "Not Started";
  }
}

function getProgress(roadmap: Roadmap) {
  return Math.round((roadmap.completed / roadmap.modules) * 100);
}

export default function RoadmapPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredRoadmaps = useMemo(() => {
    const query = search.trim().toLowerCase();

    return roadmaps.filter((roadmap) => {
      const matchesCategory =
        activeCategory === "All" || roadmap.category === activeCategory;

      const matchesSearch =
        !query ||
        roadmap.title.toLowerCase().includes(query) ||
        roadmap.description.toLowerCase().includes(query) ||
        roadmap.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const totalModules = roadmaps.reduce(
    (total, roadmap) => total + roadmap.modules,
    0,
  );

  const completedModules = roadmaps.reduce(
    (total, roadmap) => total + roadmap.completed,
    0,
  );

  const overallProgress = Math.round(
    (completedModules / totalModules) * 100,
  );

  const activeRoadmap = roadmaps.find(
    (roadmap) => roadmap.status === "in-progress",
  );

  return (
    <Layout
      title="My Roadmap"
      description="Track your learning journey, explore technology roadmaps, and discover what to learn next with CodeHarborHub."
    >
      <main className={styles.page}>
        {/* Breadcrumb */}
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <span>Roadmap</span>
          </nav>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <Sparkles size={15} />
                  Your learning journey
                </div>

                <h1>
                  Build your path.
                  <span> Track your progress.</span>
                </h1>

                <p>
                  Follow structured learning paths, understand what to learn
                  next, practice your skills, and build projects that turn
                  knowledge into real-world experience.
                </p>

                <div className={styles.heroActions}>
                  <Link
                    className={styles.primaryButton}
                    to={activeRoadmap?.href || "/roadmaps/"}
                  >
                    <Play size={17} />
                    Continue learning
                    <ArrowRight size={17} />
                  </Link>

                  <Link className={styles.secondaryButton} to="/roadmaps/">
                    Explore roadmaps
                    <ExternalLink size={16} />
                  </Link>
                </div>

                <div className={styles.heroMeta}>
                  <span>
                    <CheckCircle2 size={16} />
                    Structured learning
                  </span>

                  <span>
                    <Code2 size={16} />
                    Practice-first
                  </span>

                  <span>
                    <Rocket size={16} />
                    Project-focused
                  </span>
                </div>
              </div>

              {/* Progress Card */}
              <div className={styles.progressPanel}>
                <div className={styles.progressPanelHeader}>
                  <div>
                    <span className={styles.panelLabel}>
                      Overall progress
                    </span>
                    <h2>{overallProgress}%</h2>
                  </div>

                  <div className={styles.progressIcon}>
                    <Trophy size={22} />
                  </div>
                </div>

                <div className={styles.progressTrack}>
                  <span style={{ width: `${overallProgress}%` }} />
                </div>

                <div className={styles.progressStats}>
                  <div>
                    <strong>{completedModules}</strong>
                    <span>Completed</span>
                  </div>

                  <div>
                    <strong>{totalModules}</strong>
                    <span>Total modules</span>
                  </div>

                  <div>
                    <strong>{roadmaps.length}</strong>
                    <span>Roadmaps</span>
                  </div>
                </div>

                <div className={styles.currentLearning}>
                  <div className={styles.currentIcon}>
                    <Code2 size={19} />
                  </div>

                  <div>
                    <span>Currently learning</span>
                    <strong>{activeRoadmap?.title || "Choose a roadmap"}</strong>
                  </div>

                  {activeRoadmap && (
                    <Link to={activeRoadmap.href} aria-label="Continue roadmap">
                      <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Flame size={19} />
                </div>
                <div>
                  <strong>Keep going</strong>
                  <span>Build a consistent learning habit</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <BookOpen size={19} />
                </div>
                <div>
                  <strong>{roadmaps.length}+ paths</strong>
                  <span>Explore different technology tracks</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Code2 size={19} />
                </div>
                <div>
                  <strong>Learn by building</strong>
                  <span>Turn concepts into practical projects</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Users size={19} />
                </div>
                <div>
                  <strong>Open source</strong>
                  <span>Learn with the community</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning */}
        {activeRoadmap && (
          <section className={styles.continueSection}>
            <div className="container">
              <div className={styles.continueCard}>
                <div className={styles.continueLeft}>
                  <div className={styles.continueIcon}>
                    {activeRoadmap.icon}
                  </div>

                  <div>
                    <span>Continue your current roadmap</span>
                    <h2>{activeRoadmap.title}</h2>
                    <p>{activeRoadmap.description}</p>
                  </div>
                </div>

                <div className={styles.continueRight}>
                  <div className={styles.miniProgress}>
                    <div>
                      <span>{getProgress(activeRoadmap)}% complete</span>
                      <strong>
                        {activeRoadmap.completed}/{activeRoadmap.modules}
                      </strong>
                    </div>

                    <div className={styles.miniTrack}>
                      <span
                        style={{
                          width: `${getProgress(activeRoadmap)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    className={styles.continueButton}
                    to={activeRoadmap.href}
                  >
                    Continue
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Roadmap Explorer */}
        <section className={styles.explorerSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Compass size={15} />
                  Learning paths
                </span>

                <h2>Choose what you want to learn</h2>

                <p>
                  Explore structured paths for programming, frontend,
                  full-stack development, security, and more.
                </p>
              </div>

              <Link
                className={styles.viewAll}
                to="/roadmaps/"
              >
                View all roadmaps
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Search */}
            <div className={styles.explorerControls}>
              <div className={styles.searchBox}>
                <Search size={18} />
                <input
                  type="search"
                  placeholder="Search roadmaps..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search roadmaps"
                />
              </div>

              <div className={styles.filters}>
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? styles.filterActive
                        : styles.filter
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards */}
            {filteredRoadmaps.length > 0 ? (
              <div className={styles.roadmapGrid}>
                {filteredRoadmaps.map((roadmap) => {
                  const progress = getProgress(roadmap);

                  return (
                    <article
                      key={roadmap.id}
                      className={`${styles.roadmapCard} ${styles[`card_${roadmap.colorClass}`]}`}
                    >
                      <div className={styles.cardTop}>
                        <div className={styles.roadmapIcon}>
                          {roadmap.icon}
                        </div>

                        <span
                          className={`${styles.status} ${
                            roadmap.status === "completed"
                              ? styles.statusCompleted
                              : roadmap.status === "in-progress"
                                ? styles.statusProgress
                                : styles.statusNotStarted
                          }`}
                        >
                          {roadmap.status === "completed" && (
                            <Check size={13} />
                          )}
                          {getStatusLabel(roadmap.status)}
                        </span>
                      </div>

                      <div className={styles.cardContent}>
                        <div className={styles.cardTags}>
                          <span>{roadmap.category}</span>
                          <span>{roadmap.level}</span>
                        </div>

                        <h3>{roadmap.title}</h3>

                        <p>{roadmap.description}</p>
                      </div>

                      <div className={styles.cardDetails}>
                        <div>
                          <BookOpen size={15} />
                          {roadmap.modules} modules
                        </div>

                        <div>
                          <Flame size={15} />
                          {roadmap.estimatedTime}
                        </div>
                      </div>

                      <div className={styles.cardProgress}>
                        <div>
                          <span>Progress</span>
                          <strong>{progress}%</strong>
                        </div>

                        <div className={styles.cardProgressTrack}>
                          <span style={{ width: `${progress}%` }} />
                        </div>
                      </div>

                      <Link
                        className={styles.cardButton}
                        to={roadmap.href}
                      >
                        {roadmap.status === "in-progress"
                          ? "Continue roadmap"
                          : "Start roadmap"}

                        <ArrowRight size={17} />
                      </Link>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Search size={28} />
                <h3>No roadmap found</h3>
                <p>
                  Try a different search term or select another category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.stepsSection}>
          <div className="container">
            <div className={styles.sectionHeaderCentered}>
              <span className={styles.sectionEyebrow}>
                <Sparkles size={15} />
                The learning loop
              </span>

              <h2>Learn → Practice → Build → Grow</h2>

              <p>
                A roadmap is more than a checklist. Use it as a repeatable
                system for developing practical engineering skills.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {learningSteps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepHeader}>
                      <span>{step.number}</span>
                      <div>{step.icon}</div>
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  {index < learningSteps.length - 1 && (
                    <div className={styles.stepArrow}>
                      <ArrowRight size={18} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Learning System */}
        <section className={styles.systemSection}>
          <div className="container">
            <div className={styles.systemCard}>
              <div className={styles.systemContent}>
                <span className={styles.sectionEyebrow}>
                  <Target size={15} />
                  Beyond tutorials
                </span>

                <h2>
                  Turn learning into
                  <span> real engineering experience.</span>
                </h2>

                <p>
                  Follow a roadmap, study the concepts, practice with
                  challenges, build projects, deploy them, and use your work
                  as evidence of your skills.
                </p>

                <div className={styles.systemList}>
                  <div>
                    <CheckCircle2 size={18} />
                    Learn concepts
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    Practice problems
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    Build projects
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    Deploy your work
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    Contribute to open source
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    Build your portfolio
                  </div>
                </div>

                <Link
                  className={styles.primaryButton}
                  to="/projects/"
                >
                  Explore projects
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.systemVisual}>
                <div className={styles.systemWindow}>
                  <div className={styles.windowHeader}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.learningPipeline}>
                    <div className={styles.pipelineItem}>
                      <div>
                        <BookOpen size={18} />
                      </div>
                      <span>Learn</span>
                    </div>

                    <ArrowRight size={17} />

                    <div className={styles.pipelineItem}>
                      <div>
                        <Code2 size={18} />
                      </div>
                      <span>Practice</span>
                    </div>

                    <ArrowRight size={17} />

                    <div className={styles.pipelineItem}>
                      <div>
                        <Rocket size={18} />
                      </div>
                      <span>Build</span>
                    </div>

                    <ArrowRight size={17} />

                    <div className={styles.pipelineItem}>
                      <div>
                        <Trophy size={18} />
                      </div>
                      <span>Grow</span>
                    </div>
                  </div>

                  <div className={styles.codeLines}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className={styles.exploreSection}>
          <div className="container">
            <div className={styles.exploreGrid}>
              <Link className={styles.exploreCard} to="/tutorials/">
                <BookOpen size={21} />
                <div>
                  <h3>Tutorials</h3>
                  <p>Learn concepts with structured tutorials.</p>
                </div>
                <ArrowRight size={17} />
              </Link>

              <Link className={styles.exploreCard} to="/practice/">
                <Code2 size={21} />
                <div>
                  <h3>Practice</h3>
                  <p>Reinforce your skills with practical challenges.</p>
                </div>
                <ArrowRight size={17} />
              </Link>

              <Link className={styles.exploreCard} to="/projects/">
                <Rocket size={21} />
                <div>
                  <h3>Projects</h3>
                  <p>Build real projects and showcase your work.</p>
                </div>
                <ArrowRight size={17} />
              </Link>

              <Link className={styles.exploreCard} to="/contributing/">
                <GitBranch size={21} />
                <div>
                  <h3>Contribute</h3>
                  <p>Learn through open source and community work.</p>
                </div>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalSection}>
          <div className="container">
            <div className={styles.finalCard}>
              <div className={styles.finalIcon}>
                <Lock size={20} />
              </div>

              <span>Ready when you are</span>

              <h2>Start building your developer journey.</h2>

              <p>
                Choose a roadmap, take the first step, and keep improving one
                skill at a time.
              </p>

              <div className={styles.finalActions}>
                <Link
                  className={styles.primaryButton}
                  to="/roadmaps/"
                >
                  Explore all roadmaps
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.finalSecondary}
                  to="/tutorials/"
                >
                  Start learning
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}