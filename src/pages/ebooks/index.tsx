import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  Book,
  BookOpen,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Github,
  GraduationCap,
  Library,
  Search,
  Sparkles,
  Star,
  Tags,
  Users,
  X,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

type Ebook = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: string;
  pages: number;
  readingTime: string;
  rating: string;
  readers: string;
  featured?: boolean;
  free?: boolean;
  icon: React.ReactNode;
  href: string;
  tags: string[];
};

const ebooks: Ebook[] = [
  {
    id: "html",
    title: "HTML Fundamentals",
    description:
      "Learn modern HTML from document structure and semantic elements to forms, accessibility, metadata, and practical page building.",
    category: "Web Development",
    level: "Beginner",
    format: "PDF",
    pages: 120,
    readingTime: "4 hours",
    rating: "4.9",
    readers: "12K+",
    featured: true,
    free: true,
    icon: <Code2 size={23} />,
    href: "#", // /ebooks/html-fundamentals/
    tags: ["HTML", "Web", "Frontend"],
  },
  {
    id: "css",
    title: "Modern CSS",
    description:
      "Understand responsive layouts, Flexbox, Grid, animations, responsive design, and scalable CSS architecture.",
    category: "Web Development",
    level: "Beginner",
    format: "PDF",
    pages: 180,
    readingTime: "6 hours",
    rating: "4.8",
    readers: "9K+",
    featured: true,
    free: true,
    icon: <LayersIcon />,
    href: "#", // /ebooks/modern-css/
    tags: ["CSS", "Responsive", "UI"],
  },
  {
    id: "javascript",
    title: "JavaScript Engineering",
    description:
      "Build a strong JavaScript foundation covering functions, objects, arrays, asynchronous programming, APIs, modules, and modern patterns.",
    category: "JavaScript",
    level: "Intermediate",
    format: "PDF",
    pages: 260,
    readingTime: "9 hours",
    rating: "4.9",
    readers: "18K+",
    featured: true,
    free: true,
    icon: <FileText size={23} />,
    href: "#", // /ebooks/javascript-engineering/
    tags: ["JavaScript", "ES6+", "Web"],
  },
  {
    id: "react",
    title: "React Developer Guide",
    description:
      "Learn component architecture, hooks, state, routing, data fetching, performance, testing, and production React practices.",
    category: "React",
    level: "Intermediate",
    format: "PDF",
    pages: 240,
    readingTime: "8 hours",
    rating: "4.9",
    readers: "14K+",
    icon: <Sparkles size={23} />,
    href: "#", // /ebooks/react-developer-guide/
    tags: ["React", "TypeScript", "Frontend"],
  },
  {
    id: "python",
    title: "Python Programming",
    description:
      "Start with Python fundamentals and progress toward practical programming, modules, file handling, OOP, and automation.",
    category: "Programming",
    level: "Beginner",
    format: "PDF",
    pages: 220,
    readingTime: "7 hours",
    rating: "4.8",
    readers: "16K+",
    icon: <BookOpen size={23} />,
    href: "#", // /ebooks/python-programming/
    tags: ["Python", "Programming", "Beginner"],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Study essential data structures, algorithms, complexity analysis, problem-solving patterns, and interview-oriented practice.",
    category: "DSA",
    level: "Intermediate",
    format: "PDF",
    pages: 320,
    readingTime: "12 hours",
    rating: "4.9",
    readers: "21K+",
    featured: true,
    free: true,
    icon: <Library size={23} />,
    href: "#", // /ebooks/data-structures-algorithms/
    tags: ["DSA", "Algorithms", "Interview"],
  },
  {
    id: "git",
    title: "Git & GitHub Handbook",
    description:
      "Learn version control, branches, commits, pull requests, collaboration, GitHub workflows, and open-source contribution.",
    category: "Developer Tools",
    level: "Beginner",
    format: "PDF",
    pages: 150,
    readingTime: "5 hours",
    rating: "4.8",
    readers: "11K+",
    icon: <Github size={23} />,
    href: "#", // /ebooks/git-github-handbook/
    tags: ["Git", "GitHub", "Open Source"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Foundations",
    description:
      "Explore networking, Linux, authentication, common web vulnerabilities, security principles, and defensive practices.",
    category: "Cybersecurity",
    level: "Intermediate",
    format: "PDF",
    pages: 280,
    readingTime: "10 hours",
    rating: "4.8",
    readers: "8K+",
    icon: <GraduationCap size={23} />,
    href: "#", // /ebooks/cybersecurity-foundations/
    tags: ["Security", "Linux", "Networking"],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Build an understanding of machine learning concepts, data preparation, models, evaluation, and practical AI workflows.",
    category: "AI & Machine Learning",
    level: "Intermediate",
    format: "PDF",
    pages: 300,
    readingTime: "11 hours",
    rating: "4.9",
    readers: "13K+",
    icon: <Sparkles size={23} />,
    href: "#", // /ebooks/ai-machine-learning/
    tags: ["AI", "ML", "Python"],
  },
];

const categories = [
  "All",
  "Web Development",
  "Programming",
  "JavaScript",
  "React",
  "DSA",
  "Developer Tools",
  "Cybersecurity",
  "AI & Machine Learning",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

function LayersIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export default function EbooksPage(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);

  const featuredBooks = ebooks.filter((ebook) => ebook.featured);

  const filteredBooks = useMemo(() => {
    const query = search.trim().toLowerCase();

    return ebooks.filter((ebook) => {
      const matchesCategory =
        category === "All" || ebook.category === category;

      const matchesLevel =
        level === "All Levels" || ebook.level === level;

      const matchesSearch =
        !query ||
        ebook.title.toLowerCase().includes(query) ||
        ebook.description.toLowerCase().includes(query) ||
        ebook.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [search, category, level]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setLevel("All Levels");
  };

  return (
    <Layout
      title="eBooks"
      description="Explore free programming, web development, AI, cybersecurity, DSA, and software engineering eBooks from CodeHarborHub."
    >
      <main className={styles.page}>
        {/* Breadcrumb */}
        {/* <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <span>eBooks</span>
          </nav>
        </div> */}

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <BookOpen size={15} />
                  CodeHarborHub Library
                </div>

                <h1>
                  Read. Learn.
                  <span> Build better.</span>
                </h1>

                <p>
                  Explore developer-focused eBooks covering programming, web
                  development, AI, cybersecurity, DSA, tools, and modern
                  software engineering.
                </p>

                <div className={styles.heroActions}>
                  <a
                    className={styles.primaryButton}
                    href="#library"
                  >
                    <BookOpen size={17} />
                    Browse library
                    <ArrowRight size={17} />
                  </a>

                  <Link
                    className={styles.secondaryButton}
                    to="/tutorials/"
                  >
                    Explore tutorials
                    <ExternalLink size={16} />
                  </Link>
                </div>

                <div className={styles.heroMeta}>
                  <span>
                    <CheckCircle2 size={16} />
                    Developer-focused
                  </span>

                  <span>
                    <Download size={16} />
                    Free resources
                  </span>

                  <span>
                    <Code2 size={16} />
                    Practical learning
                  </span>
                </div>
              </div>

              {/* Library Visual */}
              <div className={styles.libraryVisual}>
                <div className={styles.bookStack}>
                  <div className={`${styles.book} ${styles.bookBack}`}>
                    <span>DSA</span>
                  </div>

                  <div className={`${styles.book} ${styles.bookMiddle}`}>
                    <span>JS</span>
                  </div>

                  <div className={`${styles.book} ${styles.bookFront}`}>
                    <div>
                      <Code2 size={25} />
                      <strong>CODE</strong>
                      <strong>HARBOR</strong>
                      <small>DEVELOPER LIBRARY</small>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingBadge}>
                  <BookOpen size={17} />
                  <div>
                    <strong>Free learning</strong>
                    <span>Open developer resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Book size={19} />
                </div>
                <div>
                  <strong>{ebooks.length}+</strong>
                  <span>eBooks</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Library size={19} />
                </div>
                <div>
                  <strong>9</strong>
                  <span>Learning categories</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Users size={19} />
                </div>
                <div>
                  <strong>100K+</strong>
                  <span>Learning resources</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Sparkles size={19} />
                </div>
                <div>
                  <strong>Open</strong>
                  <span>Community-driven</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className={styles.featuredSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Star size={15} />
                  Featured collection
                </span>

                <h2>Start with these books</h2>

                <p>
                  A curated starting point for developers building their
                  foundations and expanding their technical skills.
                </p>
              </div>
            </div>

            <div className={styles.featuredGrid}>
              {featuredBooks.map((ebook) => (
                <Link
                  key={ebook.id}
                  to={ebook.href}
                  className={styles.featuredCard}
                >
                  <div className={styles.featuredCover}>
                    <div>
                      {ebook.icon}
                      <strong>{ebook.title}</strong>
                      <span>CodeHarborHub</span>
                    </div>

                    <small>FREE</small>
                  </div>

                  <div className={styles.featuredContent}>
                    <div className={styles.cardMeta}>
                      <span>{ebook.category}</span>
                      <span>{ebook.level}</span>
                    </div>

                    <h3>{ebook.title}</h3>

                    <p>{ebook.description}</p>

                    <div className={styles.bookStats}>
                      <span>
                        <FileText size={14} />
                        {ebook.pages} pages
                      </span>

                      <span>
                        <Clock3 size={14} />
                        {ebook.readingTime}
                      </span>

                      <span>
                        <Star size={14} />
                        {ebook.rating}
                      </span>
                    </div>

                    <span className={styles.readLink}>
                      Read eBook
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Library */}
        <section id="library" className={styles.librarySection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Library size={15} />
                  Developer library
                </span>

                <h2>Explore all eBooks</h2>

                <p>
                  Search by technology, category, level, or topic and find the
                  resource that matches your learning goal.
                </p>
              </div>
            </div>

            {/* Search */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search eBooks, technologies, topics..."
                  aria-label="Search eBooks"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <button
                type="button"
                className={styles.mobileFilterButton}
                onClick={() => setShowFilters((value) => !value)}
              >
                <Filter size={16} />
                Filters
              </button>
            </div>

            <div
              className={`${styles.libraryLayout} ${
                showFilters ? styles.filtersVisible : ""
              }`}
            >
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                  <strong>Filters</strong>

                  <button type="button" onClick={clearFilters}>
                    Clear
                  </button>
                </div>

                <div className={styles.filterGroup}>
                  <span>Category</span>

                  {categories.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={
                        category === item
                          ? styles.activeFilter
                          : styles.filterOption
                      }
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className={styles.filterGroup}>
                  <span>Difficulty</span>

                  {levels.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={
                        level === item
                          ? styles.activeFilter
                          : styles.filterOption
                      }
                      onClick={() => setLevel(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Results */}
              <div className={styles.results}>
                <div className={styles.resultsHeader}>
                  <span>
                    Showing <strong>{filteredBooks.length}</strong> eBooks
                  </span>

                  {(search ||
                    category !== "All" ||
                    level !== "All Levels") && (
                    <button type="button" onClick={clearFilters}>
                      Reset filters
                    </button>
                  )}
                </div>

                {filteredBooks.length > 0 ? (
                  <div className={styles.bookGrid}>
                    {filteredBooks.map((ebook) => (
                      <article
                        key={ebook.id}
                        className={styles.bookCard}
                      >
                        <div className={styles.bookCover}>
                          <div className={styles.coverIcon}>
                            {ebook.icon}
                          </div>

                          <div className={styles.coverTitle}>
                            <span>CODEHARBORHUB</span>
                            <strong>{ebook.title}</strong>
                            <small>Developer eBook</small>
                          </div>

                          {ebook.free && (
                            <span className={styles.freeBadge}>
                              FREE
                            </span>
                          )}
                        </div>

                        <div className={styles.bookContent}>
                          <div className={styles.cardMeta}>
                            <span>{ebook.category}</span>
                            <span>{ebook.level}</span>
                          </div>

                          <h3>{ebook.title}</h3>

                          <p>{ebook.description}</p>

                          <div className={styles.tags}>
                            {ebook.tags.map((tag) => (
                              <span key={tag}>
                                <Tags size={11} />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className={styles.bookStats}>
                            <span>
                              <FileText size={14} />
                              {ebook.pages} pages
                            </span>

                            <span>
                              <Clock3 size={14} />
                              {ebook.readingTime}
                            </span>

                            <span>
                              <Star size={14} />
                              {ebook.rating}
                            </span>
                          </div>

                          <div className={styles.cardActions}>
                            <Link
                              className={styles.readButton}
                              to={ebook.href}
                            >
                              <BookOpen size={16} />
                              Read
                            </Link>

                            <button
                              type="button"
                              className={styles.saveButton}
                              aria-label={`Save ${ebook.title}`}
                            >
                              <Bookmark size={16} />
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyState}>
                    <Search size={30} />

                    <h3>No eBooks found</h3>

                    <p>
                      Try another keyword, category, or difficulty level.
                    </p>

                    <button type="button" onClick={clearFilters}>
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Reading Workflow */}
        <section className={styles.workflowSection}>
          <div className="container">
            <div className={styles.workflowCard}>
              <div className={styles.workflowContent}>
                <span className={styles.sectionEyebrow}>
                  <GraduationCap size={15} />
                  Learn systematically
                </span>

                <h2>
                  Don't just read.
                  <span> Apply what you learn.</span>
                </h2>

                <p>
                  Use eBooks as part of a complete learning loop. Read the
                  concept, practice it, build something with it, and revisit
                  difficult topics when necessary.
                </p>

                <div className={styles.workflowSteps}>
                  <div>
                    <strong>01</strong>
                    <span>Read</span>
                  </div>

                  <ArrowRight size={16} />

                  <div>
                    <strong>02</strong>
                    <span>Practice</span>
                  </div>

                  <ArrowRight size={16} />

                  <div>
                    <strong>03</strong>
                    <span>Build</span>
                  </div>

                  <ArrowRight size={16} />

                  <div>
                    <strong>04</strong>
                    <span>Review</span>
                  </div>
                </div>

                <Link
                  className={styles.primaryButton}
                  to="/roadmap/"
                >
                  Open my roadmap
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.workflowVisual}>
                <div className={styles.readingCard}>
                  <div className={styles.readingHeader}>
                    <BookOpen size={18} />
                    <span>Reading progress</span>
                  </div>

                  <div className={styles.readingBook}>
                    <div className={styles.bookPage}>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className={styles.bookPage}>
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.readingProgress}>
                    <div>
                      <span>JavaScript Engineering</span>
                      <strong>42%</strong>
                    </div>

                    <div>
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute */}
        <section className={styles.contributeSection}>
          <div className="container">
            <div className={styles.contributeCard}>
              <div className={styles.contributeIcon}>
                <BookOpen size={21} />
              </div>

              <div>
                <span>Open knowledge</span>
                <h2>Help grow the CodeHarborHub library.</h2>
                <p>
                  Write tutorials, improve technical documentation, create
                  learning resources, or contribute ideas to help other
                  developers learn.
                </p>
              </div>

              <Link
                className={styles.secondaryButton}
                to="/contributing/"
              >
                Contribute
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalSection}>
          <div className="container">
            <div className={styles.finalCard}>
              <div className={styles.finalIcon}>
                <Book size={20} />
              </div>

              <span>Your next chapter starts here</span>

              <h2>Choose a topic. Open a book. Start learning.</h2>

              <p>
                Combine eBooks, tutorials, practice, projects, and roadmaps
                to create a complete developer learning journey.
              </p>

              <div className={styles.finalActions}>
                <a
                  className={styles.primaryButton}
                  href="#library"
                >
                  Browse eBooks
                  <ArrowRight size={17} />
                </a>

                <Link
                  className={styles.finalSecondary}
                  to="/roadmaps/"
                >
                  Explore roadmaps
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}