import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  ArrowRight,
  Binary,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Filter,
  GitBranch,
  Globe,
  Layers,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Terminal,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// @ts-ignore

import styles from "./tutorials.module.css";

type IconType = LucideIcon;

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

interface TutorialCategory {
  title: string;
  slug: string;
  icon: IconType;
  description: string;
  color: string;
  tags: string[];
  difficulty: Difficulty;
  tutorials: number;
  featured?: boolean;
  path: string;
}

const tutorialCategories: TutorialCategory[] = [
  {
    title: "Absolute Beginners",
    slug: "absolute-beginners",
    icon: Rocket,
    description:
      "Build your foundation with programming, Git, web development, and developer fundamentals.",
    color: "green",
    tags: ["Frontend", "Backend", "Git", "Full Stack"],
    difficulty: "Beginner",
    tutorials: 40,
    featured: true,
    path: "/tutorials/absolute-beginners/",
  },
  {
    title: "Web Development",
    slug: "web-development",
    icon: Globe,
    description:
      "Learn modern frontend, backend, APIs, databases, testing, and full-stack development.",
    color: "blue",
    tags: ["Frontend", "Backend", "APIs", "GraphQL"],
    difficulty: "Beginner",
    tutorials: 85,
    featured: true,
    path: "#", // /tutorials/web-development/
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    icon: Sparkles,
    description:
      "Explore AI engineering, machine learning, data science, LLMs, MLOps, and prompt engineering.",
    color: "purple",
    tags: ["AI", "ML", "LLMs", "MLOps"],
    difficulty: "Intermediate",
    tutorials: 55,
    featured: true,
    path: "#", // /tutorials/ai-ml/
  },
  {
    title: "Languages & Platforms",
    slug: "languages-platforms",
    icon: Terminal,
    description:
      "Master popular programming languages and their ecosystems through practical tutorials.",
    color: "orange",
    tags: ["Python", "JavaScript", "Go", "Rust", "C++"],
    difficulty: "Beginner",
    tutorials: 70,
    path: "#", // /tutorials/languages/
  },
  {
    title: "DevOps & Security",
    slug: "devops-security",
    icon: ShieldCheck,
    description:
      "Learn Linux, cloud infrastructure, containers, Kubernetes, CI/CD, and cybersecurity.",
    color: "red",
    tags: ["AWS", "Docker", "Kubernetes", "Security"],
    difficulty: "Intermediate",
    tutorials: 60,
    path: "#", // /tutorials/devops/
  },
  {
    title: "Computer Science",
    slug: "computer-science",
    icon: Binary,
    description:
      "Strengthen your CS fundamentals with DSA, operating systems, networking, and system design.",
    color: "cyan",
    tags: ["DSA", "OS", "Networks", "System Design"],
    difficulty: "Intermediate",
    tutorials: 65,
    featured: true,
    path: "#", //  /tutorials/computer-science/
  },
  {
    title: "Frameworks",
    slug: "frameworks",
    icon: Layers,
    description:
      "Build production applications using React, Next.js, Vue, Angular, Spring Boot, Django, and more.",
    color: "indigo",
    tags: ["React", "Next.js", "Vue", "Django"],
    difficulty: "Intermediate",
    tutorials: 50,
    path: "#", // tutorials/frameworks
  },
  {
    title: "Mobile & Game Development",
    slug: "mobile-game-development",
    icon: Smartphone,
    description:
      "Create mobile and game experiences with Android, iOS, Flutter, React Native, and game engines.",
    color: "teal",
    tags: ["Android", "iOS", "Flutter", "React Native"],
    difficulty: "Intermediate",
    tutorials: 35,
    path: "#", // tutorials/mobile-game
  },
  {
    title: "Management & Design",
    slug: "management-design",
    icon: Briefcase,
    description:
      "Understand engineering leadership, product management, UX, system thinking, and team practices.",
    color: "slate",
    tags: ["UX", "Product", "Leadership", "Management"],
    difficulty: "Advanced",
    tutorials: 25,
    path: "#", // /tutorials/management/
  },
];

const difficultyOptions = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export default function Tutorials(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] =
    useState<(typeof difficultyOptions)[number]>("All");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return tutorialCategories.filter((category) => {
      const matchesDifficulty =
        difficulty === "All" || category.difficulty === difficulty;

      if (!query) {
        return matchesDifficulty;
      }

      const searchableContent = [
        category.title,
        category.description,
        category.difficulty,
        ...category.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesDifficulty && searchableContent.includes(query);
    });
  }, [searchQuery, difficulty]);

  const totalTutorials = tutorialCategories.reduce(
    (total, category) => total + category.tutorials,
    0,
  );

  const clearFilters = () => {
    setSearchQuery("");
    setDifficulty("All");
  };

  return (
    <Layout
      title="Developer Tutorials"
      description={`${siteConfig.title} tutorials — learn programming, web development, AI, DevOps, cybersecurity, and computer science.`}
    >
      <Head>
        <meta
          name="keywords"
          content="programming tutorials, web development tutorials, JavaScript, React, Python, AI, machine learning, DevOps, cybersecurity, DSA"
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.page}>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />

          <div className={styles.heroGlow} />

          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowIcon}>
                  <GitBranch size={15} />
                </span>

                <span>Open-source developer learning</span>

                <span className={styles.eyebrowDot} />

                <span>Free to learn</span>
              </div>

              <h1 className={styles.heroTitle}>
                Learn to build.
                <br />
                <span>Build to grow.</span>
              </h1>

              <p className={styles.heroDescription}>
                Structured tutorials for developers at every stage — from your
                first line of code to production systems, AI engineering,
                cybersecurity, and advanced computer science.
              </p>

              <div className={styles.heroActions}>
                <Link
                  to="/tutorial/"
                  className={`${styles.primaryButton} ${styles.largeButton}`}
                >
                  <BookOpen size={19} />
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/roadmaps/"
                  className={`${styles.secondaryButton} ${styles.largeButton}`}
                >
                  Explore roadmaps
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={16} />
                  Beginner friendly
                </div>

                <div className={styles.trustItem}>
                  <CheckCircle2 size={16} />
                  Practical examples
                </div>

                <div className={styles.trustItem}>
                  <CheckCircle2 size={16} />
                  Open source
                </div>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.codeWindow}>
                <div className={styles.windowHeader}>
                  <div className={styles.windowDots}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.windowTitle}>
                    codeharborhub/tutorial
                  </div>

                  <Code2 size={16} />
                </div>

                <div className={styles.codeBody}>
                  <div>
                    <span className={styles.codeNumber}>01</span>
                    <span className={styles.codeKeyword}>const</span>{" "}
                    <span className={styles.codeVariable}>developer</span>{" "}
                    = {"{"}
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>learn</span>:{" "}
                    <span className={styles.codeString}>
                      &quot;every day&quot;
                    </span>
                    ,
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>practice</span>:{" "}
                    <span className={styles.codeBoolean}>true</span>,
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>build</span>:{" "}
                    <span className={styles.codeBoolean}>true</span>,
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>contribute</span>:{" "}
                    <span className={styles.codeBoolean}>true</span>,
                  </div>

                  <div>
                    <span className={styles.codeNumber}>07</span>
                    {"};"}
                  </div>

                  <div className={styles.codeCursor}>
                    <span />
                  </div>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardOne}`}>
                <Sparkles size={17} />
                <div>
                  <strong>AI & ML</strong>
                  <span>Learn modern AI</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardTwo}`}>
                <Terminal size={17} />
                <div>
                  <strong>Practice</strong>
                  <span>Build real skills</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            STATS
        ========================================================== */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <BookOpen size={21} />
                <div>
                  <strong>{totalTutorials}+</strong>
                  <span>Tutorial topics</span>
                </div>
              </div>

              <div className={styles.stat}>
                <Layers size={21} />
                <div>
                  <strong>{tutorialCategories.length}</strong>
                  <span>Learning areas</span>
                </div>
              </div>

              <div className={styles.stat}>
                <Users size={21} />
                <div>
                  <strong>Open source</strong>
                  <span>Community driven</span>
                </div>
              </div>

              <div className={styles.stat}>
                <Code2 size={21} />
                <div>
                  <strong>Practical</strong>
                  <span>Developer focused</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            TUTORIAL EXPLORER
        ========================================================== */}
        <section className={styles.explorerSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <span />
                  Explore the harbor
                </div>

                <h2>Choose your learning path</h2>

                <p>
                  Pick a topic, follow the tutorials, practice what you learn,
                  and keep building.
                </p>
              </div>

              <div className={styles.sectionHeaderIcon}>
                <Database size={25} />
              </div>
            </div>

            {/* Search + filters */}
            <div className={styles.toolbar}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search tutorials, technologies, topics..."
                  aria-label="Search tutorials"
                />

                {searchQuery && (
                  <button
                    type="button"
                    className={styles.clearButton}
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className={styles.filterGroup}>
                <Filter size={16} />

                {difficultyOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`${styles.filterButton} ${
                      difficulty === option ? styles.activeFilter : ""
                    }`}
                    onClick={() => setDifficulty(option)}
                    aria-pressed={difficulty === option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            <div className={styles.resultBar}>
              <span>
                Showing{" "}
                <strong>
                  {filteredCategories.length}{" "}
                  {filteredCategories.length === 1
                    ? "category"
                    : "categories"}
                </strong>
              </span>

              {(searchQuery || difficulty !== "All") && (
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Category cards */}
            {filteredCategories.length > 0 ? (
              <div className={styles.categoryGrid}>
                {filteredCategories.map((category, index) => {
                  const Icon = category.icon;

                  return (
                    <motion.div
                      key={category.slug}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.04, 0.25),
                      }}
                    >
                      <Link
                        to={category.path}
                        className={`${styles.categoryCard} ${
                          category.featured ? styles.featuredCard : ""
                        }`}
                      >
                        <div
                          className={`${styles.cardGlow} ${styles[`glow${category.color}`]}`}
                        />

                        <div className={styles.cardTop}>
                          <div
                            className={`${styles.categoryIcon} ${styles[`icon${category.color}`]}`}
                          >
                            <Icon size={23} strokeWidth={1.9} />
                          </div>

                          <div className={styles.cardArrow}>
                            <ArrowRight size={17} />
                          </div>
                        </div>

                        <div className={styles.cardContent}>
                          <div className={styles.cardTitleRow}>
                            <h3>{category.title}</h3>

                            {category.featured && (
                              <span className={styles.featuredBadge}>
                                Featured
                              </span>
                            )}
                          </div>

                          <p>{category.description}</p>
                        </div>

                        <div className={styles.cardMeta}>
                          <span>
                            <BookOpen size={14} />
                            {category.tutorials}+ topics
                          </span>

                          <span className={styles.difficulty}>
                            {category.difficulty}
                          </span>
                        </div>

                        <div className={styles.tags}>
                          {category.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>

                        <div className={styles.cardFooter}>
                          <span>Explore tutorials</span>
                          <ArrowRight size={15} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <Search size={25} />
                </div>

                <h3>No tutorials found</h3>

                <p>
                  Try a different keyword or remove one of the filters.
                </p>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={clearFilters}
                >
                  Reset search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            BEST PRACTICES
        ========================================================== */}
        <section className={styles.featureSection}>
          <div className={styles.container}>
            <div className={styles.featureGrid}>
              <article className={styles.practiceCard}>
                <div className={styles.practicePattern} />

                <div className={styles.practiceContent}>
                  <div className={styles.darkIcon}>
                    <ShieldCheck size={25} />
                  </div>

                  <span className={styles.darkEyebrow}>
                    Engineering mindset
                  </span>

                  <h2>Learn beyond syntax.</h2>

                  <p>
                    Go beyond writing code. Learn security, architecture,
                    performance, testing, scalability, deployment, and the
                    practices used to build reliable software.
                  </p>

                  <Link
                    to="#" // /tutorial/best-practices/
                    className={styles.darkButton}
                  >
                    Explore best practices
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>

              <article className={styles.contributeCard}>
                <div className={styles.contributeIcon}>
                  <GitBranch size={23} />
                </div>

                <span className={styles.sectionEyebrow}>
                  <span />
                  Open source
                </span>

                <h2>Found a gap?</h2>

                <p>
                  CodeHarborHub grows with its community. Improve existing
                  tutorials, fix mistakes, add examples, or contribute a new
                  learning resource.
                </p>

                <div className={styles.contributeActions}>
                  <Link
                    to="https://github.com/codeharborhub/tutorial"
                    className={styles.primaryButton}
                  >
                    Contribute on GitHub
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/contributors/"
                    className={styles.textButton}
                  >
                    Meet contributors
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className={styles.finalCta}>
          <div className={styles.ctaGrid} />

          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>
                <Code2 size={24} />
              </div>

              <h2>
                Your next skill
                <br />
                starts here.
              </h2>

              <p>
                Pick a tutorial, write some code, build something useful, and
                keep moving forward.
              </p>

              <div className={styles.ctaActions}>
                <Link
                  to="#" // /tutorial/
                  className={`${styles.primaryButton} ${styles.largeButton}`}
                >
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/practice/"
                  className={`${styles.secondaryButton} ${styles.largeButton}`}
                >
                  Start practicing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}