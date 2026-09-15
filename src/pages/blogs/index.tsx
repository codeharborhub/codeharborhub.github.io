import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  ExternalLink,
  Filter,
  Github,
  Hash,
  Layers3,
  Mail,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import styles from "./styles.module.css";

type BlogCategory =
  | "All"
  | "Web Development"
  | "JavaScript"
  | "React"
  | "AI & ML"
  | "DevOps"
  | "Career"
  | "Open Source";

type BlogArticle = {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: Exclude<BlogCategory, "All">;
  tags: string[];
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  isoDate: string;
  readTime: number;
  image: string;
  featured?: boolean;
  popular?: boolean;
};

const categories: BlogCategory[] = [
  "All",
  "Web Development",
  "JavaScript",
  "React",
  "AI & ML",
  "DevOps",
  "Career",
  "Open Source",
];

const articles: BlogArticle[] = [
  {
    id: "modern-web-development",
    title: "Modern Web Development: From Fundamentals to Production",
    description:
      "Understand the complete journey from HTML and CSS fundamentals to building maintainable, scalable, production-ready web applications.",
    slug: "/blog/modern-web-development",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    author: "Ajay Dhangar",
    authorRole: "Founder · CodeHarborHub",
    authorAvatar:
      "https://github.com/ajay-dhangar.png",
    date: "Sep 12, 2026",
    isoDate: "2026-09-12",
    readTime: 10,
    image: "/img/blog-modern-web-development.jpg",
    featured: true,
    popular: true,
  },
  {
    id: "javascript-event-loop",
    title: "Understanding the JavaScript Event Loop",
    description:
      "Learn how JavaScript handles asynchronous operations, callbacks, promises, microtasks, and the event loop.",
    slug: "/blog/javascript-event-loop",
    category: "JavaScript",
    tags: ["JavaScript", "Async", "Runtime"],
    author: "CodeHarborHub",
    authorRole: "Engineering Team",
    authorAvatar: "/img/nav-logo.jpg",
    date: "Sep 08, 2026",
    isoDate: "2026-09-08",
    readTime: 8,
    image: "/img/blog-javascript-event-loop.jpg",
    popular: true,
  },
  {
    id: "react-architecture",
    title: "Designing Scalable React Applications",
    description:
      "Explore practical patterns for structuring React applications as projects grow from prototypes into production systems.",
    slug: "/blog/scalable-react-applications",
    category: "React",
    tags: ["React", "Architecture", "TypeScript"],
    author: "CodeHarborHub",
    authorRole: "Engineering Team",
    authorAvatar: "/img/nav-logo.jpg",
    date: "Sep 04, 2026",
    isoDate: "2026-09-04",
    readTime: 12,
    image: "/img/blog-react-architecture.jpg",
    popular: true,
  },
  {
    id: "ai-developer-tools",
    title: "How AI Is Changing the Developer Workflow",
    description:
      "A practical look at how developers can use AI for research, coding, debugging, documentation, testing, and learning.",
    slug: "/blog/ai-developer-workflow",
    category: "AI & ML",
    tags: ["AI", "Developer Tools", "Productivity"],
    author: "CodeHarborHub",
    authorRole: "Research & Education",
    authorAvatar: "/img/nav-logo.jpg",
    date: "Aug 29, 2026",
    isoDate: "2026-08-29",
    readTime: 9,
    image: "/img/blog-ai-developer-tools.jpg",
  },
  {
    id: "open-source-contributing",
    title: "A Practical Guide to Your First Open Source Contribution",
    description:
      "Learn how to discover projects, understand repositories, choose issues, create pull requests, and become a useful contributor.",
    slug: "/blog/first-open-source-contribution",
    category: "Open Source",
    tags: ["GitHub", "Open Source", "Contributing"],
    author: "Ajay Dhangar",
    authorRole: "Open Source Maintainer",
    authorAvatar:
      "https://github.com/ajay-dhangar.png",
    date: "Aug 22, 2026",
    isoDate: "2026-08-22",
    readTime: 11,
    image: "/img/blog-open-source.jpg",
  },
  {
    id: "developer-career",
    title: "Building a Strong Developer Portfolio in 2026",
    description:
      "What actually makes a developer portfolio useful to recruiters, hiring managers, clients, and open-source communities.",
    slug: "/blog/developer-portfolio-2026",
    category: "Career",
    tags: ["Career", "Portfolio", "Jobs"],
    author: "CodeHarborHub",
    authorRole: "Career & Community",
    authorAvatar: "/img/nav-logo.jpg",
    date: "Aug 17, 2026",
    isoDate: "2026-08-17",
    readTime: 7,
    image: "/img/blog-developer-career.jpg",
  },
  {
    id: "docker-development",
    title: "Docker for Developers: From Local Setup to Deployment",
    description:
      "Understand containers, images, Dockerfiles, Compose, networking, volumes, and practical development workflows.",
    slug: "/blog/docker-for-developers",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Deployment"],
    author: "CodeHarborHub",
    authorRole: "Engineering Team",
    authorAvatar: "/img/nav-logo.jpg",
    date: "Aug 10, 2026",
    isoDate: "2026-08-10",
    readTime: 13,
    image: "/img/blog-docker.jpg",
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Practices That Make Large Codebases Better",
    description:
      "Practical TypeScript patterns for safer APIs, reusable types, maintainability, and better developer experience.",
    slug: "/blog/typescript-best-practices",
    category: "Web Development",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    author: "CodeHarborHub",
    authorRole: "Engineering Team",
    authorAvatar: "/img/nav-logo.jpg",
    date: "Aug 04, 2026",
    isoDate: "2026-08-04",
    readTime: 10,
    image: "/img/blog-typescript.jpg",
  },
];

const popularArticles = articles.filter((article) => article.popular);

function BlogImage({
  article,
  featured = false,
}: {
  article: BlogArticle;
  featured?: boolean;
}) {
  return (
    <div
      className={`${styles.articleImage} ${
        featured ? styles.featuredImage : ""
      }`}
    >
      <img
        src={article.image}
        alt=""
        loading={featured ? "eager" : "lazy"}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <div className={styles.imageOverlay} />

      <div className={styles.imageCategory}>
        <Hash size={13} />
        {article.category}
      </div>

      {featured && (
        <div className={styles.featuredLabel}>
          <Sparkles size={13} />
          Featured
        </div>
      )}
    </div>
  );
}

function ArticleMeta({ article }: { article: BlogArticle }) {
  return (
    <div className={styles.articleMeta}>
      <span>
        <CalendarDays size={14} />
        <time dateTime={article.isoDate}>{article.date}</time>
      </span>

      <span>
        <Clock3 size={14} />
        {article.readTime} min read
      </span>
    </div>
  );
}

function Author({
  article,
  compact = false,
}: {
  article: BlogArticle;
  compact?: boolean;
}) {
  return (
    <div className={`${styles.author} ${compact ? styles.authorCompact : ""}`}>
      <img
        src={article.authorAvatar}
        alt=""
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = "/img/nav-logo.jpg";
        }}
      />

      <div>
        <strong>{article.author}</strong>
        {!compact && <span>{article.authorRole}</span>}
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <article className={styles.articleCard}>
      <Link
        to={article.slug}
        className={styles.cardImageLink}
        aria-label={`Read ${article.title}`}
      >
        <BlogImage article={article} />
      </Link>

      <div className={styles.articleCardBody}>
        <ArticleMeta article={article} />

        <Link to={article.slug} className={styles.articleTitleLink}>
          <h3>{article.title}</h3>
        </Link>

        <p>{article.description}</p>

        <div className={styles.tagList}>
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.cardFooter}>
          <Author article={article} compact />

          <Link
            to={article.slug}
            className={styles.readButton}
            aria-label={`Read ${article.title}`}
          >
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogsPage(): JSX.Element {
  const [activeCategory, setActiveCategory] =
    useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "shortest">("latest");

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      if (!query) {
        return matchesCategory;
      }

      const searchableText = [
        article.title,
        article.description,
        article.category,
        ...article.tags,
        article.author,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });

    return [...result].sort((a, b) => {
      if (sortBy === "shortest") {
        return a.readTime - b.readTime;
      }

      return (
        new Date(b.isoDate).getTime() -
        new Date(a.isoDate).getTime()
      );
    });
  }, [activeCategory, searchQuery, sortBy]);

  const featuredArticle =
    articles.find((article) => article.featured) ?? articles[0];

  return (
    <Layout
      title="Blog"
      description="Developer articles, engineering guides, open-source stories, career advice, and practical technology insights from CodeHarborHub."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <div className={styles.eyebrow}>
                  <span />
                  CodeHarborHub Blog
                </div>

                <h1>
                  Ideas for developers
                  <span> who build.</span>
                </h1>

                <p>
                  Practical engineering knowledge, tutorials, career
                  insights, open-source stories, and ideas to help you
                  build better software.
                </p>

                <div className={styles.heroStats}>
                  <div>
                    <strong>{articles.length}+</strong>
                    <span>Articles</span>
                  </div>

                  <div>
                    <strong>8</strong>
                    <span>Topics</span>
                  </div>

                  <div>
                    <strong>Free</strong>
                    <span>Always</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroTerminal}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>developer@codeharborhub:~</span>

                  <Code2 size={15} />
                </div>

                <div className={styles.terminalBody}>
                  <p>
                    <span className={styles.prompt}>$</span> cat
                    learning.md
                  </p>

                  <div className={styles.terminalTitle}>
                    <span>#</span> Learn. Build. Share.
                  </div>

                  <p className={styles.terminalMuted}>
                    Technical knowledge should be
                    <br />
                    practical, accessible, and open.
                  </p>

                  <div className={styles.terminalLine}>
                    <span className={styles.green}>✓</span>
                    tutorials
                  </div>

                  <div className={styles.terminalLine}>
                    <span className={styles.green}>✓</span>
                    engineering
                  </div>

                  <div className={styles.terminalLine}>
                    <span className={styles.green}>✓</span>
                    open source
                  </div>

                  <div className={styles.terminalLine}>
                    <span className={styles.green}>✓</span>
                    career
                  </div>

                  <p className={styles.cursorLine}>
                    <span className={styles.prompt}>$</span>{" "}
                    <span className={styles.cursor}>▋</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED ARTICLE
        ===================================================== */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.sectionMiniHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Sparkles size={14} />
                  Editor's pick
                </span>

                <h2>Featured from the community</h2>
              </div>

              <Link to="/blog/" className={styles.textLink}>
                View all posts
                <ArrowRight size={16} />
              </Link>
            </div>

            <article className={styles.featuredCard}>
              <Link
                to={featuredArticle.slug}
                className={styles.featuredImageLink}
              >
                <BlogImage article={featuredArticle} featured />
              </Link>

              <div className={styles.featuredContent}>
                <div className={styles.featuredTop}>
                  <span className={styles.categoryPill}>
                    {featuredArticle.category}
                  </span>

                  <ArticleMeta article={featuredArticle} />
                </div>

                <Link
                  to={featuredArticle.slug}
                  className={styles.featuredTitleLink}
                >
                  <h2>{featuredArticle.title}</h2>
                </Link>

                <p>{featuredArticle.description}</p>

                <div className={styles.featuredTags}>
                  {featuredArticle.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.featuredFooter}>
                  <Author article={featuredArticle} />

                  <Link
                    to={featuredArticle.slug}
                    className={styles.primaryButton}
                  >
                    Read article
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================
            POPULAR
        ===================================================== */}
        <section className={styles.popularSection}>
          <div className={styles.container}>
            <div className={styles.sectionMiniHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <TrendingUp size={14} />
                  Popular now
                </span>

                <h2>What developers are reading</h2>
              </div>
            </div>

            <div className={styles.popularGrid}>
              {popularArticles.slice(0, 3).map((article, index) => (
                <Link
                  to={article.slug}
                  className={styles.popularCard}
                  key={article.id}
                >
                  <span className={styles.popularNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <span className={styles.popularCategory}>
                      {article.category}
                    </span>

                    <h3>{article.title}</h3>

                    <ArticleMeta article={article} />
                  </div>

                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ARTICLES
        ===================================================== */}
        <section className={styles.articlesSection}>
          <div className={styles.container}>
            <div className={styles.articlesHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Layers3 size={14} />
                  Explore the library
                </span>

                <h2>Latest articles</h2>
              </div>

              <div className={styles.resultCount}>
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1
                  ? "article"
                  : "articles"}
              </div>
            </div>

            {/* Search */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search articles, topics, technologies..."
                  aria-label="Search articles"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className={styles.sortBox}>
                <Filter size={16} />

                <select
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(
                      event.target.value as
                        | "latest"
                        | "shortest"
                    )
                  }
                  aria-label="Sort articles"
                >
                  <option value="latest">Latest</option>
                  <option value="shortest">
                    Shortest read
                  </option>
                </select>

                <ChevronDown size={15} />
              </div>
            </div>

            {/* Category filters */}
            <div
              className={styles.categoryScroller}
              role="tablist"
              aria-label="Blog categories"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={
                    activeCategory === category
                      ? styles.categoryActive
                      : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "All" && <Sparkles size={14} />}
                  {category}
                </button>
              ))}
            </div>

            {/* Results */}
            {filteredArticles.length > 0 ? (
              <div className={styles.articleGrid}>
                {filteredArticles.map((article) => (
                  <ArticleCard
                    article={article}
                    key={article.id}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <Search size={25} />
                </div>

                <h3>No articles found</h3>

                <p>
                  Try a different keyword or choose another
                  category.
                </p>

                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  <X size={16} />
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            TOPICS
        ===================================================== */}
        <section className={styles.topicsSection}>
          <div className={styles.container}>
            <div className={styles.topicLayout}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Hash size={14} />
                  Explore by topic
                </span>

                <h2>Find your next rabbit hole.</h2>

                <p>
                  Go deeper into the technologies and skills that
                  matter to your development journey.
                </p>
              </div>

              <div className={styles.topicGrid}>
                {categories
                  .filter((category) => category !== "All")
                  .map((category) => {
                    const count = articles.filter(
                      (article) => article.category === category
                    ).length;

                    return (
                      <button
                        type="button"
                        className={styles.topicCard}
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          window.scrollTo({
                            top:
                              document.querySelector(
                                `.${styles.articlesSection}`
                              )?.getBoundingClientRect().top! +
                              window.scrollY -
                              80,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <span>{category}</span>
                        <small>{count} articles</small>
                        <ArrowUpRight size={16} />
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NEWSLETTER
        ===================================================== */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterGlow} />

              <div className={styles.newsletterIcon}>
                <Mail size={23} />
              </div>

              <span className={styles.sectionEyebrow}>
                Stay in the loop
              </span>

              <h2>
                Useful developer content.
                <span> No noise.</span>
              </h2>

              <p>
                Get new tutorials, engineering articles, open-source
                updates, and learning resources when they are
                published.
              </p>

              <div className={styles.newsletterActions}>
                <Link
                  to="/newsletter/"
                  className={styles.primaryButton}
                >
                  Join the newsletter
                  <ArrowRight size={17} />
                </Link>

                <span className={styles.newsletterNote}>
                  <Check size={14} />
                  Free · Developer focused
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY CTA
        ===================================================== */}
        <section className={styles.communitySection}>
          <div className={styles.container}>
            <div className={styles.communityCard}>
              <div className={styles.communityContent}>
                <div className={styles.communityIcon}>
                  <Github size={24} />
                </div>

                <span className={styles.sectionEyebrow}>
                  Build in the open
                </span>

                <h2>
                  Don't just read.
                  <span> Contribute.</span>
                </h2>

                <p>
                  Improve documentation, write tutorials, fix examples,
                  share ideas, and help developers around the world
                  learn through open source.
                </p>

                <div className={styles.communityActions}>
                  <a
                    href="https://github.com/CodeHarborHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Contribute on GitHub
                    <ExternalLink size={17} />
                  </a>

                  <Link
                    to="/contributors/"
                    className={styles.secondaryButton}
                  >
                    Meet contributors
                    <Users size={17} />
                  </Link>
                </div>
              </div>

              <div className={styles.communityVisual}>
                <div className={styles.communityTerminal}>
                  <div className={styles.terminalHeader}>
                    <div className={styles.terminalDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <span>contribution</span>

                    <Github size={14} />
                  </div>

                  <div className={styles.contributionTree}>
                    <span>main</span>
                    <i />
                    <b>docs</b>
                    <i />
                    <b>tutorial</b>
                    <i />
                    <b>PR #128</b>
                    <i />
                    <strong>merged ✓</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              <BookOpen size={28} />

              <h2>
                Learn something today.
                <span> Build something tomorrow.</span>
              </h2>

              <p>
                Explore CodeHarborHub tutorials, roadmaps, practice
                challenges, and projects.
              </p>

              <div className={styles.finalActions}>
                <Link
                  to="/tutorial/"
                  className={styles.primaryButton}
                >
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/roadmaps/"
                  className={styles.secondaryButton}
                >
                  Explore roadmaps
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}