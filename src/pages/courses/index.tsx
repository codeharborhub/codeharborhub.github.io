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
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Flame,
  GraduationCap,
  Layers3,
  Play,
  Search,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

type CourseCategory =
  | "Web Development"
  | "Frontend"
  | "Backend"
  | "Programming"
  | "DSA"
  | "AI & ML"
  | "DevOps"
  | "Cybersecurity"
  | "Computer Science";

type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

type CourseStatus =
  | "popular"
  | "trending"
  | "new"
  | "featured"
  | "free";

type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  instructor: string;
  lessons: number;
  duration: string;
  learners: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  tags: string[];
  status: CourseStatus[];
  icon: string;
  accent: string;
  progress?: number;
};

const COURSES: Course[] = [
  {
    id: "html-mastery",
    slug: "html-mastery",
    title: "HTML Mastery",
    description:
      "Learn modern HTML from fundamentals to semantic markup, accessibility, forms, SEO, and production-ready page structure.",
    category: "Frontend",
    level: "Beginner",
    instructor: "CodeHarborHub",
    lessons: 42,
    duration: "8h 20m",
    learners: 12480,
    rating: 4.9,
    reviews: 382,
    price: 0,
    tags: ["HTML", "Web", "SEO", "Accessibility"],
    status: ["featured", "popular", "free"],
    icon: "HTML",
    accent: "#e34c26",
    progress: 38,
  },
  {
    id: "css-mastery",
    slug: "css-mastery",
    title: "CSS Mastery",
    description:
      "Build beautiful responsive interfaces with modern CSS, Flexbox, Grid, animations, layouts, and scalable architecture.",
    category: "Frontend",
    level: "Beginner",
    instructor: "CodeHarborHub",
    lessons: 58,
    duration: "11h 10m",
    learners: 10820,
    rating: 4.8,
    reviews: 294,
    price: 0,
    tags: ["CSS", "Flexbox", "Grid", "Responsive"],
    status: ["popular", "free"],
    icon: "CSS",
    accent: "#1572b6",
  },
  {
    id: "javascript-zero-to-advanced",
    slug: "javascript",
    title: "JavaScript — Zero to Advanced",
    description:
      "Master JavaScript fundamentals, ES6+, DOM, asynchronous programming, APIs, modules, patterns, and advanced concepts.",
    category: "Programming",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 96,
    duration: "19h 40m",
    learners: 28640,
    rating: 4.9,
    reviews: 841,
    price: 0,
    tags: ["JavaScript", "ES6+", "DOM", "APIs"],
    status: ["featured", "popular", "trending", "free"],
    icon: "JS",
    accent: "#f0db4f",
    progress: 62,
  },
  {
    id: "react-production",
    slug: "react",
    title: "React for Production",
    description:
      "Build production-grade React applications with components, hooks, state management, routing, performance, and architecture.",
    category: "Frontend",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 78,
    duration: "15h 30m",
    learners: 19430,
    rating: 4.9,
    reviews: 624,
    price: 0,
    tags: ["React", "Hooks", "TypeScript", "Architecture"],
    status: ["popular", "trending", "free"],
    icon: "React",
    accent: "#61dafb",
  },
  {
    id: "typescript",
    slug: "typescript",
    title: "TypeScript for Modern Development",
    description:
      "Learn TypeScript deeply and use types, generics, utility types, interfaces, narrowing, and advanced patterns confidently.",
    category: "Programming",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 61,
    duration: "12h 15m",
    learners: 8930,
    rating: 4.8,
    reviews: 217,
    price: 0,
    tags: ["TypeScript", "JavaScript", "Types", "React"],
    status: ["new", "free"],
    icon: "TS",
    accent: "#3178c6",
  },
  {
    id: "node-backend",
    slug: "nodejs-backend",
    title: "Node.js Backend Engineering",
    description:
      "Learn backend development with Node.js, APIs, authentication, databases, security, testing, and deployment.",
    category: "Backend",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 84,
    duration: "17h 45m",
    learners: 13620,
    rating: 4.8,
    reviews: 388,
    price: 0,
    tags: ["Node.js", "REST API", "Backend", "Security"],
    status: ["popular", "free"],
    icon: "Node",
    accent: "#68a063",
  },
  {
    id: "dsa",
    slug: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    description:
      "Build strong problem-solving skills with arrays, strings, trees, graphs, recursion, dynamic programming, and complexity.",
    category: "DSA",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 112,
    duration: "25h 20m",
    learners: 32180,
    rating: 4.9,
    reviews: 1062,
    price: 0,
    tags: ["DSA", "Algorithms", "Problem Solving", "Interview"],
    status: ["featured", "popular", "trending", "free"],
    icon: "DSA",
    accent: "#8b5cf6",
  },
  {
    id: "python",
    slug: "python-programming",
    title: "Python Programming",
    description:
      "Learn Python from zero through functions, OOP, modules, files, APIs, testing, automation, and real-world projects.",
    category: "Programming",
    level: "Beginner",
    instructor: "CodeHarborHub",
    lessons: 74,
    duration: "14h 30m",
    learners: 24120,
    rating: 4.9,
    reviews: 732,
    price: 0,
    tags: ["Python", "Programming", "Automation"],
    status: ["popular", "trending", "free"],
    icon: "PY",
    accent: "#3776ab",
  },
  {
    id: "nextjs",
    slug: "nextjs-production",
    title: "Next.js Production Engineering",
    description:
      "Build modern full-stack applications with Next.js, server components, routing, caching, APIs, authentication, and deployment.",
    category: "Web Development",
    level: "Advanced",
    instructor: "CodeHarborHub",
    lessons: 69,
    duration: "14h 10m",
    learners: 7680,
    rating: 4.9,
    reviews: 184,
    price: 0,
    tags: ["Next.js", "React", "Full Stack", "SSR"],
    status: ["new", "trending", "free"],
    icon: "NEXT",
    accent: "#111827",
  },
  {
    id: "machine-learning",
    slug: "machine-learning",
    title: "Machine Learning Foundations",
    description:
      "Understand machine learning fundamentals, data preparation, supervised learning, model evaluation, and practical workflows.",
    category: "AI & ML",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 88,
    duration: "20h 05m",
    learners: 11920,
    rating: 4.8,
    reviews: 301,
    price: 0,
    tags: ["Python", "ML", "Data", "AI"],
    status: ["new", "free"],
    icon: "ML",
    accent: "#10b981",
  },
  {
    id: "git-github",
    slug: "git-github",
    title: "Git & GitHub Professional Workflow",
    description:
      "Master Git, branching, pull requests, rebasing, collaboration, GitHub workflows, releases, and open-source contribution.",
    category: "Programming",
    level: "Beginner",
    instructor: "CodeHarborHub",
    lessons: 38,
    duration: "7h 15m",
    learners: 15760,
    rating: 4.9,
    reviews: 456,
    price: 0,
    tags: ["Git", "GitHub", "Open Source", "CI/CD"],
    status: ["popular", "free"],
    icon: "GIT",
    accent: "#f05032",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity-foundations",
    title: "Cybersecurity Foundations",
    description:
      "Learn security fundamentals, networking, authentication, vulnerabilities, secure development, and defensive security concepts.",
    category: "Cybersecurity",
    level: "Beginner",
    instructor: "CodeHarborHub",
    lessons: 64,
    duration: "13h 25m",
    learners: 9450,
    rating: 4.8,
    reviews: 196,
    price: 0,
    tags: ["Security", "Networking", "Web Security"],
    status: ["new", "free"],
    icon: "SEC",
    accent: "#ef4444",
  },
  {
    id: "docker",
    slug: "docker",
    title: "Docker & Containerization",
    description:
      "Understand containers, images, Dockerfiles, Compose, networking, volumes, registries, and production workflows.",
    category: "DevOps",
    level: "Intermediate",
    instructor: "CodeHarborHub",
    lessons: 47,
    duration: "9h 35m",
    learners: 6540,
    rating: 4.8,
    reviews: 142,
    price: 0,
    tags: ["Docker", "DevOps", "Containers"],
    status: ["new", "free"],
    icon: "DOCKER",
    accent: "#2496ed",
  },
  {
    id: "system-design",
    slug: "system-design",
    title: "System Design Fundamentals",
    description:
      "Learn scalable architecture, databases, caching, queues, APIs, distributed systems, reliability, and system design interviews.",
    category: "Computer Science",
    level: "Advanced",
    instructor: "CodeHarborHub",
    lessons: 55,
    duration: "12h 50m",
    learners: 8230,
    rating: 4.9,
    reviews: 211,
    price: 0,
    tags: ["Architecture", "Scalability", "Backend"],
    status: ["trending", "free"],
    icon: "SYS",
    accent: "#6366f1",
  },
  {
    id: "sql",
    slug: "sql-databases",
    title: "SQL & Database Engineering",
    description:
      "Learn relational databases, SQL queries, joins, indexes, transactions, normalization, optimization, and database design.",
    category: "Backend",
    level: "Beginner",
    instructor: "CodeHarborHub",
    lessons: 52,
    duration: "10h 40m",
    learners: 10140,
    rating: 4.8,
    reviews: 268,
    price: 0,
    tags: ["SQL", "Database", "PostgreSQL"],
    status: ["popular", "free"],
    icon: "SQL",
    accent: "#336791",
  },
];

const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Web Development",
  "Programming",
  "DSA",
  "AI & ML",
  "DevOps",
  "Cybersecurity",
  "Computer Science",
];

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

type FilterTab = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const FILTER_TABS: FilterTab[] = [
  {
    id: "all",
    label: "All Courses",
    icon: Layers3,
  },
  {
    id: "free",
    label: "Free",
    icon: Zap,
  },
  {
    id: "popular",
    label: "Popular",
    icon: Star,
  },
  {
    id: "trending",
    label: "Trending",
    icon: TrendingUp,
  },
  {
    id: "new",
    label: "New",
    icon: Sparkles,
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function CourseIcon({ course }: { course: Course }) {
  return (
    <div
      className={styles.courseIcon}
      style={
        {
          "--course-accent": course.accent,
        } as React.CSSProperties
      }
    >
      <span>{course.icon}</span>
    </div>
  );
}

function CourseCard({
  course,
  featured = false,
}: {
  course: Course;
  featured?: boolean;
}) {
  return (
    <article
      className={`${styles.courseCard} ${
        featured ? styles.featuredCourseCard : ""
      }`}
    >
      <div className={styles.courseCardTop}>
        <CourseIcon course={course} />

        <div className={styles.courseBadges}>
          {course.status.includes("new") && (
            <span className={`${styles.statusBadge} ${styles.newBadge}`}>
              New
            </span>
          )}

          {course.price === 0 && (
            <span className={`${styles.statusBadge} ${styles.freeBadge}`}>
              Free
            </span>
          )}

          {course.status.includes("trending") && (
            <span
              className={`${styles.statusBadge} ${styles.trendingBadge}`}
            >
              <Flame size={12} />
              Trending
            </span>
          )}
        </div>
      </div>

      <div className={styles.courseContent}>
        <div className={styles.courseMeta}>
          <span>{course.category}</span>
          <span>•</span>
          <span>{course.level}</span>
        </div>

        <h3>
          {/* <Link to={`/courses/${course.slug}/`}>{course.title}</Link> */}
          <Link to='#'>{course.title}</Link>
        </h3>

        <p>{course.description}</p>

        <div className={styles.courseTags}>
          {course.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.courseStats}>
        <span>
          <Star size={14} fill="currentColor" />
          <strong>{course.rating}</strong>
          <small>({course.reviews})</small>
        </span>

        <span>
          <Users size={14} />
          {formatNumber(course.learners)}
        </span>

        <span>
          <Clock3 size={14} />
          {course.duration}
        </span>
      </div>

      {course.progress !== undefined && (
        <div className={styles.progressBox}>
          <div className={styles.progressHeader}>
            <span>Your progress</span>
            <strong>{course.progress}%</strong>
          </div>

          <div className={styles.progressTrack}>
            <span style={{ width: `${course.progress}%` }} />
          </div>
        </div>
      )}

      <div className={styles.courseFooter}>
        <div className={styles.coursePrice}>
          {course.price === 0 ? (
            <strong>Free</strong>
          ) : (
            <>
              <strong>₹{course.price}</strong>
              {course.originalPrice && (
                <del>₹{course.originalPrice}</del>
              )}
            </>
          )}
        </div>

        <Link
          to={`/courses/${course.slug}/`}
          className={styles.courseButton}
          aria-label={`View ${course.title}`}
        >
          View course
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  href,
  hrefLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className={styles.sectionTitle}>
      <div>
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      {href && hrefLabel && (
        <Link to={href} className={styles.sectionLink}>
          {hrefLabel}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}

export default function CoursesPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [sort, setSort] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = [...COURSES];

    if (activeTab !== "all") {
      result = result.filter((course) =>
        course.status.includes(activeTab as CourseStatus),
      );
    }

    if (category !== "All") {
      result = result.filter((course) => course.category === category);
    }

    if (level !== "All Levels") {
      result = result.filter((course) => course.level === level);
    }

    if (query) {
      result = result.filter((course) =>
        [
          course.title,
          course.description,
          course.category,
          course.level,
          course.instructor,
          ...course.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query),
      );
    }

    switch (sort) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "learners":
        result.sort((a, b) => b.learners - a.learners);
        break;

      case "newest":
        result.sort(
          (a, b) =>
            Number(b.status.includes("new")) -
            Number(a.status.includes("new")),
        );
        break;

      case "short":
        result.sort(
          (a, b) =>
            parseFloat(a.duration) -
            parseFloat(b.duration),
        );
        break;

      default:
        result.sort((a, b) => b.learners - a.learners);
    }

    return result;
  }, [activeTab, category, level, search, sort]);

  const featuredCourses = COURSES.filter((course) =>
    course.status.includes("featured"),
  );

  const trendingCourses = COURSES.filter((course) =>
    course.status.includes("trending"),
  ).slice(0, 4);

  const newCourses = COURSES.filter((course) =>
    course.status.includes("new"),
  ).slice(0, 4);

  const popularCourses = [...COURSES]
    .sort((a, b) => b.learners - a.learners)
    .slice(0, 4);

  const coursesPerPage = 9;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / coursesPerPage),
  );

  const visibleCourses = filteredCourses.slice(
    (page - 1) * coursesPerPage,
    page * coursesPerPage,
  );

  const hasActiveFilters =
    activeTab !== "all" ||
    category !== "All" ||
    level !== "All Levels" ||
    search.length > 0;

  function resetFilters() {
    setActiveTab("all");
    setSearch("");
    setCategory("All");
    setLevel("All Levels");
    setSort("popular");
    setPage(1);
  }

  function changeTab(id: string) {
    setActiveTab(id);
    setPage(1);
  }

  return (
    <Layout
      title="Courses"
      description="Explore free, practical, industry-focused courses from CodeHarborHub."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <GraduationCap size={15} />
                Learn. Practice. Build. Grow.
              </div>

              <h1>
                Courses that help you
                <span> build real skills.</span>
              </h1>

              <p>
                Learn programming, web development, DSA, AI, cybersecurity,
                DevOps, and computer science through structured,
                practical, developer-focused courses.
              </p>

              <div className={styles.heroSearch}>
                <Search size={20} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search courses, technologies, skills..."
                  aria-label="Search courses"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}

                <kbd>⌘ K</kbd>
              </div>

              <div className={styles.heroLinks}>
                <span>Popular:</span>

                {["JavaScript", "React", "Python", "DSA", "AI & ML"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSearch(item);
                        setPage(1);
                      }}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className={styles.heroStats}>
              <div>
                <BookOpen size={19} />
                <strong>100+</strong>
                <span>Courses & paths</span>
              </div>

              <div>
                <Users size={19} />
                <strong>100K+</strong>
                <span>Learners</span>
              </div>

              <div>
                <Award size={19} />
                <strong>Free</strong>
                <span>Core learning</span>
              </div>

              <div>
                <Target size={19} />
                <strong>Project</strong>
                <span>Focused learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK FILTERS
        ===================================================== */}

        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filterTabs}>
              {FILTER_TABS.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`${styles.filterTab} ${
                      active ? styles.filterTabActive : ""
                    }`}
                    onClick={() => changeTab(tab.id)}
                  >
                    <Icon size={17} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED
        ===================================================== */}

        {!hasActiveFilters && (
          <section className={styles.section}>
            <div className={styles.container}>
              <SectionTitle
                eyebrow="Start here"
                title="Featured learning"
                description="A curated selection of courses designed to help you build strong foundations and practical development skills."
                href="/roadmaps/"
                hrefLabel="View roadmaps"
              />

              <div className={styles.featuredGrid}>
                {featuredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    featured
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            TRENDING
        ===================================================== */}

        {!hasActiveFilters && (
          <section className={`${styles.section} ${styles.sectionMuted}`}>
            <div className={styles.container}>
              <SectionTitle
                eyebrow="What's hot"
                title="Trending right now"
                description="Skills and technologies learners are actively exploring."
                href="?filter=trending"
                hrefLabel="See all trending"
              />

              <div className={styles.courseGrid}>
                {trendingCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            POPULAR
        ===================================================== */}

        {!hasActiveFilters && (
          <section className={styles.section}>
            <div className={styles.container}>
              <SectionTitle
                eyebrow="Learner favorites"
                title="Most popular courses"
                description="High-demand courses that developers keep coming back to."
              />

              <div className={styles.courseGrid}>
                {popularCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            NEW
        ===================================================== */}

        {!hasActiveFilters && (
          <section className={`${styles.section} ${styles.sectionMuted}`}>
            <div className={styles.container}>
              <SectionTitle
                eyebrow="Fresh content"
                title="Newly published"
                description="Explore the latest courses added to the CodeHarborHub learning library."
              />

              <div className={styles.courseGrid}>
                {newCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            COURSE CATALOG
        ===================================================== */}

        <section
          className={`${styles.section} ${styles.catalogSection}`}
          id="all-courses"
        >
          <div className={styles.container}>
            <div className={styles.catalogHeader}>
              <div>
                <span>Course library</span>
                <h2>Explore all courses</h2>
                <p>
                  Choose a course based on your interests, current level, or
                  career goal.
                </p>
              </div>

              <button
                type="button"
                className={styles.mobileFilterButton}
                onClick={() => setShowFilters((value) => !value)}
              >
                <BarChart3 size={17} />
                Filters
                <ChevronDown
                  size={16}
                  className={showFilters ? styles.rotate : ""}
                />
              </button>
            </div>

            <div className={styles.catalogLayout}>
              {/* Sidebar */}
              <aside
                className={`${styles.sidebar} ${
                  showFilters ? styles.sidebarOpen : ""
                }`}
              >
                <div className={styles.sidebarHeader}>
                  <strong>Filter courses</strong>

                  {hasActiveFilters && (
                    <button type="button" onClick={resetFilters}>
                      Reset
                    </button>
                  )}
                </div>

                <div className={styles.filterGroup}>
                  <label>Category</label>

                  <div className={styles.filterOptions}>
                    {CATEGORIES.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={
                          category === item
                            ? styles.optionActive
                            : ""
                        }
                        onClick={() => {
                          setCategory(item);
                          setPage(1);
                        }}
                      >
                        <span>{item}</span>

                        {item === "All" ? (
                          <small>{COURSES.length}</small>
                        ) : (
                          <small>
                            {
                              COURSES.filter(
                                (course) =>
                                  course.category === item,
                              ).length
                            }
                          </small>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.filterGroup}>
                  <label>Level</label>

                  <div className={styles.filterOptions}>
                    {LEVELS.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={
                          level === item ? styles.optionActive : ""
                        }
                        onClick={() => {
                          setLevel(item);
                          setPage(1);
                        }}
                      >
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.sidebarCard}>
                  <Sparkles size={20} />

                  <strong>Not sure where to start?</strong>

                  <p>
                    Follow a structured roadmap and learn the skills in the
                    right order.
                  </p>

                  <Link to="/roadmaps/">
                    Explore roadmaps
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </aside>

              {/* Results */}
              <div className={styles.catalogResults}>
                <div className={styles.resultsToolbar}>
                  <div>
                    <strong>{filteredCourses.length}</strong>{" "}
                    {filteredCourses.length === 1
                      ? "course"
                      : "courses"}{" "}
                    found
                  </div>

                  <div className={styles.sortControl}>
                    <span>Sort by</span>

                    <select
                      value={sort}
                      onChange={(event) => {
                        setSort(event.target.value);
                        setPage(1);
                      }}
                      aria-label="Sort courses"
                    >
                      <option value="popular">Most popular</option>
                      <option value="rating">Highest rated</option>
                      <option value="learners">Most learners</option>
                      <option value="newest">Newest</option>
                      <option value="short">Shortest first</option>
                    </select>

                    <ChevronDown size={15} />
                  </div>
                </div>

                {visibleCourses.length > 0 ? (
                  <>
                    <div className={styles.courseGrid}>
                      {visibleCourses.map((course) => (
                        <CourseCard
                          key={course.id}
                          course={course}
                        />
                      ))}
                    </div>

                    {totalPages > 1 && (
                      <div className={styles.pagination}>
                        <button
                          type="button"
                          disabled={page === 1}
                          onClick={() =>
                            setPage((value) =>
                              Math.max(1, value - 1),
                            )
                          }
                        >
                          Previous
                        </button>

                        <div>
                          {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1,
                          ).map((pageNumber) => (
                            <button
                              type="button"
                              key={pageNumber}
                              className={
                                page === pageNumber
                                  ? styles.pageActive
                                  : ""
                              }
                              onClick={() =>
                                setPage(pageNumber)
                              }
                            >
                              {pageNumber}
                            </button>
                          ))}
                        </div>

                        <button
                          type="button"
                          disabled={page === totalPages}
                          onClick={() =>
                            setPage((value) =>
                              Math.min(
                                totalPages,
                                value + 1,
                              ),
                            )
                          }
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.emptyState}>
                    <div>
                      <Search size={26} />
                    </div>

                    <h3>No courses found</h3>

                    <p>
                      Try a different keyword or remove some filters to
                      discover more courses.
                    </p>

                    <button
                      type="button"
                      onClick={resetFilters}
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEARNING PATH
        ===================================================== */}

        <section className={styles.pathSection}>
          <div className={styles.container}>
            <div className={styles.pathCard}>
              <div className={styles.pathContent}>
                <span className={styles.pathEyebrow}>
                  <Target size={15} />
                  Don't know what to learn?
                </span>

                <h2>
                  Follow a roadmap instead of
                  <span> guessing your next step.</span>
                </h2>

                <p>
                  Start with your goal and get a structured path through
                  fundamentals, practical skills, projects, and advanced
                  topics.
                </p>

                <div className={styles.pathActions}>
                  <Link
                    to="/roadmaps/"
                    className={styles.primaryButton}
                  >
                    Explore roadmaps
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/practice/"
                    className={styles.secondaryButton}
                  >
                    Practice your skills
                    <Code2 size={17} />
                  </Link>
                </div>
              </div>

              <div className={styles.pathVisual}>
                <div className={styles.pathNode}>
                  <span>01</span>
                  <strong>Learn</strong>
                  <small>Fundamentals</small>
                </div>

                <div className={styles.pathLine} />

                <div className={styles.pathNode}>
                  <span>02</span>
                  <strong>Practice</strong>
                  <small>Challenges</small>
                </div>

                <div className={styles.pathLine} />

                <div className={styles.pathNode}>
                  <span>03</span>
                  <strong>Build</strong>
                  <small>Projects</small>
                </div>

                <div className={styles.pathLine} />

                <div className={styles.pathNode}>
                  <span>04</span>
                  <strong>Grow</strong>
                  <small>Career</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaCard}>
              <div className={styles.finalIcon}>
                <Zap size={23} />
              </div>

              <span>Start learning today</span>

              <h2>
                Your next skill could change
                <span> your entire career.</span>
              </h2>

              <p>
                Pick a course, follow a roadmap, practice what you learn,
                and build something real.
              </p>

              <div className={styles.finalActions}>
                <Link
                  to="/courses/"
                  className={styles.primaryButton}
                >
                  Explore all courses
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/docs/"
                  className={styles.secondaryButton}
                >
                  Browse documentation
                  <BookOpen size={17} />
                </Link>
              </div>

              <div className={styles.finalTrust}>
                <span>
                  <Check size={14} />
                  Free learning
                </span>

                <span>
                  <Check size={14} />
                  Open source
                </span>

                <span>
                  <Check size={14} />
                  Learn at your pace
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}