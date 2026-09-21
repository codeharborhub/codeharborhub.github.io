import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Filter,
  Github,
  GraduationCap,
  HelpCircle,
  Laptop,
  MessageCircle,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

import GiscusComponent from "../../components/GiscusComponent";
// @ts-ignore
import styles from "./styles.module.css";

type FAQCategory =
  | "General"
  | "Learning"
  | "Roadmaps"
  | "Projects"
  | "Practice"
  | "Open Source"
  | "Community"
  | "Careers"
  | "Technical";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  category: FAQCategory;
  popular?: boolean;
}

const categories: FAQCategory[] = [
  "General",
  "Learning",
  "Roadmaps",
  "Projects",
  "Practice",
  "Open Source",
  "Community",
  "Careers",
  "Technical",
];

const categoryIcons: Record<FAQCategory, React.ReactNode> = {
  General: <HelpCircle size={16} />,
  Learning: <BookOpen size={16} />,
  Roadmaps: <Network size={16} />,
  Projects: <Code2 size={16} />,
  Practice: <Zap size={16} />,
  "Open Source": <Github size={16} />,
  Community: <Users size={16} />,
  Careers: <BriefcaseBusiness size={16} />,
  Technical: <Laptop size={16} />,
};

const faqs: FAQItem[] = [
  {
    id: "what-is-codeharborhub",
    question: "What is CodeHarborHub?",
    category: "General",
    popular: true,
    answer: (
      <>
        <p>
          CodeHarborHub is an open-source developer learning platform focused on
          helping learners understand technology, practice coding, build
          projects, and participate in open-source development.
        </p>

        <p>
          The platform brings together tutorials, roadmaps, projects, practice
          resources, developer tools, community activities, and contribution
          opportunities.
        </p>
      </>
    ),
  },
  {
    id: "is-codeharborhub-free",
    question: "Is CodeHarborHub free?",
    category: "General",
    popular: true,
    answer: (
      <p>
        CodeHarborHub is built around accessible and open learning resources.
        Individual resources or future services may have their own terms, but
        the core platform is designed to make developer education accessible to
        learners.
      </p>
    ),
  },
  {
    id: "who-is-codeharborhub-for",
    question: "Who can use CodeHarborHub?",
    category: "General",
    answer: (
      <p>
        CodeHarborHub is intended for developers and learners at different
        stages, including absolute beginners, students, self-taught developers,
        contributors, and experienced developers looking to refresh or expand
        their skills.
      </p>
    ),
  },
  {
    id: "beginner-friendly",
    question: "Is CodeHarborHub suitable for complete beginners?",
    category: "Learning",
    popular: true,
    answer: (
      <>
        <p>
          Yes. Many learning paths are designed to start with fundamentals
          before moving toward more advanced concepts.
        </p>

        <p>
          If you are completely new to programming, start with web and
          programming fundamentals, then gradually move through a roadmap,
          practice problems, and projects.
        </p>

        <Link to="/roadmaps/">
          Explore learning roadmaps <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "how-should-i-start",
    question: "I am confused about where to start. What should I do?",
    category: "Learning",
    popular: true,
    answer: (
      <>
        <p>
          Start with one clear goal instead of trying to learn every technology
          at once.
        </p>

        <ol>
          <li>Choose a career or learning direction.</li>
          <li>Select the corresponding roadmap.</li>
          <li>Learn the fundamentals.</li>
          <li>Practice what you learn.</li>
          <li>Build small projects.</li>
          <li>Build a larger portfolio project.</li>
          <li>Contribute to open source.</li>
        </ol>

        <p>
          The important part is consistency rather than trying to finish
          everything at once.
        </p>
      </>
    ),
  },
  {
    id: "tutorials",
    question: "What can I learn through CodeHarborHub tutorials?",
    category: "Learning",
    answer: (
      <>
        <p>
          The platform is designed to cover a broad developer curriculum,
          including:
        </p>

        <ul>
          <li>HTML, CSS and JavaScript</li>
          <li>React and modern frontend development</li>
          <li>Backend development</li>
          <li>Programming languages</li>
          <li>Git and GitHub</li>
          <li>Linux and developer tools</li>
          <li>Data structures and algorithms</li>
          <li>AI and machine learning</li>
          <li>Cybersecurity</li>
          <li>DevOps and cloud technologies</li>
          <li>Computer science fundamentals</li>
        </ul>
      </>
    ),
  },
  {
    id: "roadmaps",
    question: "What are CodeHarborHub roadmaps?",
    category: "Roadmaps",
    popular: true,
    answer: (
      <p>
        Roadmaps organize technologies and skills into a logical learning
        sequence. Instead of randomly jumping between technologies, a roadmap
        helps you understand what to learn first, what comes next, and where
        projects and practice can fit into your learning journey.
      </p>
    ),
  },
  {
    id: "which-roadmap",
    question: "Which roadmap should I follow?",
    category: "Roadmaps",
    answer: (
      <>
        <p>
          Choose a roadmap according to your target rather than following
          multiple roadmaps simultaneously.
        </p>

        <ul>
          <li>
            <strong>Frontend:</strong> HTML → CSS → JavaScript → React →
            TypeScript
          </li>
          <li>
            <strong>Backend:</strong> Programming → APIs → Databases →
            Authentication → Deployment
          </li>
          <li>
            <strong>Full Stack:</strong> Frontend + Backend + Databases +
            Deployment
          </li>
          <li>
            <strong>AI/ML:</strong> Python → Mathematics → Data → ML → AI
            projects
          </li>
          <li>
            <strong>Cybersecurity:</strong> Networking → Linux → Security
            fundamentals → Security tooling
          </li>
        </ul>

        <Link to="/roadmaps/">
          View all roadmaps <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "roadmap-order",
    question: "Do I need to complete every roadmap?",
    category: "Roadmaps",
    answer: (
      <p>
        No. You should normally choose a primary direction and go deep in that
        area. Related roadmaps can be added later when they support your goals.
      </p>
    ),
  },
  {
    id: "projects",
    question: "Why are projects included in the learning platform?",
    category: "Projects",
    popular: true,
    answer: (
      <>
        <p>
          Projects help turn concepts into practical experience. Instead of only
          reading about a technology, you use it to solve a real problem.
        </p>

        <p>
          A strong project can also become part of your portfolio and provide
          useful material for technical discussions and interviews.
        </p>

        <Link to="/projects/">
          Explore projects <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "project-levels",
    question: "Are projects available for different skill levels?",
    category: "Projects",
    answer: (
      <p>
        Yes. The project ecosystem is designed around different levels,
        including beginner, intermediate, advanced, and industry-oriented
        projects.
      </p>
    ),
  },
  {
    id: "practice",
    question: "Does CodeHarborHub provide coding practice?",
    category: "Practice",
    answer: (
      <p>
        The CodeHarborHub ecosystem is designed to include coding practice,
        challenges, problem solving, and developer exercises alongside tutorials
        and projects.
      </p>
    ),
  },
  {
    id: "dsa",
    question: "Can I learn Data Structures and Algorithms?",
    category: "Practice",
    popular: true,
    answer: (
      <p>
        Yes. DSA and problem solving are part of the broader CodeHarborHub
        learning ecosystem. You can combine DSA concepts with coding challenges
        and practical problem solving.
      </p>
    ),
  },
  {
    id: "open-source",
    question: "Can I contribute to CodeHarborHub?",
    category: "Open Source",
    popular: true,
    answer: (
      <>
        <p>
          Yes. CodeHarborHub is an open-source ecosystem and contributions can
          include code, documentation, tutorials, projects, issues, testing,
          reviews, design, and community support.
        </p>

        <a
          href="https://github.com/CodeHarborHub"
          target="_blank"
          rel="noreferrer"
        >
          Open CodeHarborHub on GitHub
          <ExternalLink size={15} />
        </a>
      </>
    ),
  },
  {
    id: "gssoc",
    question: "Has CodeHarborHub participated in open-source programs?",
    category: "Open Source",
    answer: (
      <p>
        CodeHarborHub's public project ecosystem includes activity associated
        with programs such as GirlScript Summer of Code and Hacktoberfest.
        Specific program participation and contribution records should be
        checked against the relevant public program or repository records.
      </p>
    ),
  },
  {
    id: "hacktoberfest",
    question: "Can I contribute during Hacktoberfest?",
    category: "Open Source",
    answer: (
      <p>
        When CodeHarborHub runs or participates in Hacktoberfest-related
        activities, contribution opportunities can be published through the
        project's public GitHub repositories and community channels. Always
        check the current repository instructions before opening a pull request.
      </p>
    ),
  },
  {
    id: "how-to-contribute",
    question: "How do I make my first contribution?",
    category: "Open Source",
    answer: (
      <>
        <ol>
          <li>Explore the CodeHarborHub repositories.</li>
          <li>Read the repository README and contribution guidelines.</li>
          <li>Find an existing issue or identify an improvement.</li>
          <li>Fork the repository.</li>
          <li>Create a dedicated branch.</li>
          <li>Make and test your changes.</li>
          <li>Commit your changes clearly.</li>
          <li>Open a pull request.</li>
          <li>Respond to review feedback.</li>
        </ol>

        <Link to="/contributing/">
          Read contribution guide <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "community",
    question: "How can I join the CodeHarborHub community?",
    category: "Community",
    answer: (
      <>
        <p>
          You can participate through GitHub, community discussions, events,
          open-source contributions, learning activities, and other official
          CodeHarborHub channels.
        </p>

        <Link to="/contact/">
          Contact the community team <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "events",
    question: "Does CodeHarborHub organize developer events?",
    category: "Community",
    answer: (
      <p>
        The CodeHarborHub ecosystem can include workshops, coding challenges,
        community sessions, open-source activities, hackathons, and other
        developer-focused events. Check the Events page for current activities.
      </p>
    ),
  },
  {
    id: "certificates",
    question: "Does CodeHarborHub provide certificates?",
    category: "Learning",
    answer: (
      <p>
        Certificate availability depends on the specific learning experience or
        program. A certificate should not be assumed for every tutorial,
        roadmap, project, or community activity unless it is explicitly stated
        on that resource.
      </p>
    ),
  },
  {
    id: "career",
    question: "Can CodeHarborHub help me prepare for a developer career?",
    category: "Careers",
    popular: true,
    answer: (
      <>
        <p>
          The platform is designed to support career preparation through
          structured learning, practical projects, coding practice, open-source
          contribution, and portfolio development.
        </p>

        <p>
          These resources can help you build evidence of your skills, but
          completing a resource does not guarantee an internship, job, or
          selection outcome.
        </p>

        <Link to="/careers/">
          Explore career resources <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
  {
    id: "internship",
    question: "Can I use CodeHarborHub projects in my portfolio?",
    category: "Careers",
    answer: (
      <p>
        Yes, when the project and its license or contribution terms allow it.
        Your portfolio should clearly explain what you personally built,
        changed, learned, and contributed rather than presenting someone else's
        work as your own.
      </p>
    ),
  },
  {
    id: "job-guarantee",
    question: "Does CodeHarborHub guarantee a job or internship?",
    category: "Careers",
    answer: (
      <p>
        No. Learning resources, projects, and contribution opportunities can
        help you develop skills and evidence of experience, but they cannot
        guarantee employment, internships, interviews, or selection.
      </p>
    ),
  },
  {
    id: "github-account",
    question: "Do I need a GitHub account?",
    category: "Open Source",
    answer: (
      <p>
        You can browse many public resources without one. However, a GitHub
        account is useful if you want to contribute code, open issues, create
        pull requests, participate in discussions, or interact with the
        CodeHarborHub repositories.
      </p>
    ),
  },
  {
    id: "giscus",
    question: "Why does the FAQ page have a GitHub discussion section?",
    category: "Technical",
    answer: (
      <p>
        CodeHarborHub uses Giscus to connect page discussions with GitHub
        Discussions. This allows learners and contributors to ask questions,
        share feedback, and discuss the FAQ through a GitHub-based community
        workflow.
      </p>
    ),
  },
  {
    id: "dark-mode",
    question: "Does CodeHarborHub support dark mode?",
    category: "Technical",
    answer: (
      <p>
        Yes. The website is built with Docusaurus and its theme system, so pages
        can support both light and dark color modes.
      </p>
    ),
  },
  {
    id: "mobile",
    question: "Can I use CodeHarborHub on mobile?",
    category: "Technical",
    answer: (
      <p>
        The website is designed to be responsive so that learning resources can
        be accessed across desktop, tablet, and mobile screen sizes.
      </p>
    ),
  },
  {
    id: "bug",
    question: "I found a bug. Where should I report it?",
    category: "Technical",
    answer: (
      <>
        <p>
          For project-related bugs, check the relevant GitHub repository and
          follow its issue guidelines. Include enough information for another
          developer to reproduce and understand the problem.
        </p>

        <a
          href="https://github.com/CodeHarborHub"
          target="_blank"
          rel="noreferrer"
        >
          Open CodeHarborHub repositories
          <ExternalLink size={15} />
        </a>
      </>
    ),
  },
  {
    id: "content-contribution",
    question: "Can I contribute tutorials or documentation?",
    category: "Open Source",
    answer: (
      <>
        <p>
          Yes. Documentation and educational content are valuable open-source
          contributions. Follow the repository's current contribution guidelines
          and make sure your content is original, technically accurate,
          accessible, and useful to learners.
        </p>

        <Link to="/contributing/">
          Learn how to contribute <ArrowRight size={15} />
        </Link>
      </>
    ),
  },
];

function FAQItemCard({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
    >
      <button
        type="button"
        className={styles.questionButton}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className={styles.questionLeft}>
          <span className={styles.questionIcon}>
            {categoryIcons[faq.category]}
          </span>

          <span>
            <span className={styles.questionCategory}>{faq.category}</span>

            <span className={styles.questionText}>{faq.question}</span>
          </span>
        </span>

        <span className={styles.chevron}>
          <ChevronDown size={20} />
        </span>
      </button>

      <div
        id={`faq-answer-${faq.id}`}
        className={styles.answerWrapper}
        hidden={!isOpen}
      >
        <div className={styles.answer}>{faq.answer}</div>
      </div>
    </article>
  );
}

export default function FAQPage(): JSX.Element {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | FAQCategory>(
    "All",
  );
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const searchableText = [faq.question, faq.category]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const popularFAQs = useMemo(() => faqs.filter((faq) => faq.popular), []);

  const toggleFAQ = (id: string) => {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const openAll = () => {
    setOpenItems(filteredFAQs.map((faq) => faq.id));
  };

  const closeAll = () => {
    setOpenItems([]);
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setOpenItems([]);
  };

  return (
    <Layout
      title="Frequently Asked Questions"
      description="Find answers about CodeHarborHub tutorials, roadmaps, projects, practice, open source, community, careers, and technical resources."
    >
      <main className={styles.page}>
        {/* ---------------------------------------------------------------- */}
        {/* Hero                                                              */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.hero}>
          <div className={styles.heroGridBackground} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroIcon}>
                <HelpCircle size={28} />
              </div>

              <div className={styles.eyebrow}>
                <Sparkles size={15} />
                Help center
              </div>

              <h1>
                Frequently Asked
                <span>Questions.</span>
              </h1>

              <p>
                Find clear answers about learning, roadmaps, projects, practice,
                open source, community, careers, and the CodeHarborHub platform.
              </p>

              <div className={styles.searchHero}>
                <Search size={20} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search your question..."
                  aria-label="Search frequently asked questions"
                />
              </div>

              <div className={styles.heroHints}>
                <span>Try:</span>
                <button type="button" onClick={() => setSearch("open source")}>
                  Open Source
                </button>
                <button type="button" onClick={() => setSearch("roadmap")}>
                  Roadmaps
                </button>
                <button type="button" onClick={() => setSearch("projects")}>
                  Projects
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Quick stats                                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <BookOpen size={20} />
                <strong>{faqs.length}+</strong>
                <span>Questions answered</span>
              </div>

              <div className={styles.statCard}>
                <Network size={20} />
                <strong>{categories.length}</strong>
                <span>FAQ categories</span>
              </div>

              <div className={styles.statCard}>
                <Github size={20} />
                <strong>Open Source</strong>
                <span>Community discussions</span>
              </div>

              <div className={styles.statCard}>
                <MessageCircle size={20} />
                <strong>Ask</strong>
                <span>Join the discussion</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Main FAQ area                                                     */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <button
                  type="button"
                  className={styles.mobileCategoryButton}
                  onClick={() => setMobileCategoriesOpen((value) => !value)}
                >
                  <span>
                    <Filter size={17} />
                    Categories
                  </span>

                  {mobileCategoriesOpen ? (
                    <X size={17} />
                  ) : (
                    <ChevronDown size={17} />
                  )}
                </button>

                <div
                  className={`${styles.categoryPanel} ${
                    mobileCategoriesOpen ? styles.categoryPanelOpen : ""
                  }`}
                >
                  <div className={styles.sidebarTitle}>
                    <span>Browse by topic</span>
                  </div>

                  <button
                    type="button"
                    className={`${styles.categoryButton} ${
                      activeCategory === "All" ? styles.categoryActive : ""
                    }`}
                    onClick={() => {
                      setActiveCategory("All");
                      setMobileCategoriesOpen(false);
                    }}
                  >
                    <span>
                      <HelpCircle size={16} />
                      All questions
                    </span>

                    <strong>{faqs.length}</strong>
                  </button>

                  {categories.map((category) => {
                    const count = faqs.filter(
                      (faq) => faq.category === category,
                    ).length;

                    return (
                      <button
                        type="button"
                        key={category}
                        className={`${styles.categoryButton} ${
                          activeCategory === category
                            ? styles.categoryActive
                            : ""
                        }`}
                        onClick={() => {
                          setActiveCategory(category);
                          setMobileCategoriesOpen(false);
                        }}
                      >
                        <span>
                          {categoryIcons[category]}
                          {category}
                        </span>

                        <strong>{count}</strong>
                      </button>
                    );
                  })}

                  <div className={styles.sidebarDivider} />

                  <Link to="/contributing/" className={styles.sidebarCTA}>
                    <Github size={17} />
                    <span>
                      <strong>Contribute</strong>
                      <small>Improve the knowledge base</small>
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>

              {/* Content */}
              <div className={styles.faqContent}>
                <div className={styles.contentHeader}>
                  <div>
                    <span className={styles.resultLabel}>
                      {activeCategory === "All"
                        ? "All questions"
                        : activeCategory}
                    </span>

                    <h2>
                      {filteredFAQs.length}{" "}
                      {filteredFAQs.length === 1 ? "answer" : "answers"}
                    </h2>
                  </div>

                  <div className={styles.contentActions}>
                    <button type="button" onClick={openAll}>
                      Expand all
                    </button>

                    <button type="button" onClick={closeAll}>
                      Collapse all
                    </button>
                  </div>
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>
                      <Search size={26} />
                    </div>

                    <h3>No matching questions</h3>

                    <p>Try another keyword or browse all FAQ categories.</p>

                    <button
                      type="button"
                      className={styles.primaryButton}
                      onClick={resetFilters}
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className={styles.faqList}>
                    {filteredFAQs.map((faq) => (
                      <FAQItemCard
                        key={faq.id}
                        faq={faq}
                        isOpen={openItems.includes(faq.id)}
                        onToggle={() => toggleFAQ(faq.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Popular questions                                                  */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.popularSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  <Sparkles size={15} />
                  Quick answers
                </span>

                <h2>Popular questions</h2>

                <p>
                  Start with some of the questions learners and contributors
                  commonly need answered.
                </p>
              </div>
            </div>

            <div className={styles.popularGrid}>
              {popularFAQs.slice(0, 6).map((faq) => (
                <button
                  type="button"
                  key={faq.id}
                  className={styles.popularCard}
                  onClick={() => {
                    setActiveCategory(faq.category);
                    setOpenItems((current) =>
                      current.includes(faq.id) ? current : [...current, faq.id],
                    );

                    document.getElementById("faq-list-top")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <span className={styles.popularIcon}>
                    {categoryIcons[faq.category]}
                  </span>

                  <span className={styles.popularText}>
                    <small>{faq.category}</small>
                    <strong>{faq.question}</strong>
                  </span>

                  <ArrowRight size={17} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Learning flow                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.flowSection}>
          <div className={styles.container}>
            <div className={styles.flowCard}>
              <div className={styles.flowContent}>
                <span className={styles.sectionEyebrow}>
                  <GraduationCap size={15} />
                  Learning journey
                </span>

                <h2>Not sure what to do next?</h2>

                <p>
                  You do not need to learn everything at once. Choose a
                  direction, follow a roadmap, practice consistently, and build
                  projects that demonstrate what you know.
                </p>

                <div className={styles.flowActions}>
                  <Link to="/roadmaps/" className={styles.primaryButton}>
                    Explore roadmaps
                    <ArrowRight size={17} />
                  </Link>

                  <Link to="/projects/" className={styles.secondaryButton}>
                    Build a project
                  </Link>
                </div>
              </div>

              <div className={styles.flowSteps}>
                <div className={styles.flowStep}>
                  <span>01</span>
                  <strong>Learn</strong>
                  <small>Tutorials & fundamentals</small>
                </div>

                <div className={styles.flowConnector} />

                <div className={styles.flowStep}>
                  <span>02</span>
                  <strong>Practice</strong>
                  <small>Problems & challenges</small>
                </div>

                <div className={styles.flowConnector} />

                <div className={styles.flowStep}>
                  <span>03</span>
                  <strong>Build</strong>
                  <small>Real projects</small>
                </div>

                <div className={styles.flowConnector} />

                <div className={styles.flowStep}>
                  <span>04</span>
                  <strong>Contribute</strong>
                  <small>Open source</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Still need help                                                    */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.helpSection}>
          <div className={styles.container}>
            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>
                <MessageCircle size={25} />
              </div>

              <div className={styles.helpContent}>
                <span className={styles.sectionEyebrow}>
                  <ShieldCheck size={15} />
                  Community support
                </span>

                <h2>Didn't find your answer?</h2>

                <p>
                  Ask the community, share your use case, report an issue, or
                  suggest an improvement. The discussion below is connected to
                  GitHub through Giscus.
                </p>
              </div>

              <Link to="/contact/" className={styles.secondaryButton}>
                Contact us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Giscus                                                              */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.discussionSection}>
          <div className={styles.container}>
            <div className={styles.discussionHeader}>
              <div className={styles.discussionIcon}>
                <Github size={22} />
              </div>

              <div>
                <span className={styles.sectionEyebrow}>
                  <MessageCircle size={15} />
                  GitHub Discussions
                </span>

                <h2>Ask, discuss and improve</h2>

                <p>
                  Have a question that isn't covered here? Start a discussion
                  with the CodeHarborHub community.
                </p>
              </div>
            </div>

            <GiscusComponent />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Final CTA                                                          */}
        {/* ---------------------------------------------------------------- */}

        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              <div className={styles.finalGlow} />

              <div className={styles.finalIcon}>
                <Sparkles size={23} />
              </div>

              <h2>Keep learning. Keep building.</h2>

              <p>
                Your next step can be a tutorial, roadmap, project, challenge,
                or open-source contribution.
              </p>

              <div className={styles.finalActions}>
                <Link to="/tutorials/" className={styles.primaryButton}>
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link to="/contributing/" className={styles.secondaryButton}>
                  Contribute
                  <Github size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
