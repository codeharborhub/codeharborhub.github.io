import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileCode2,
  Globe2,
  Layers3,
  Lock,
  Menu,
  Monitor,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type RoadmapStatus = "completed" | "current" | "upcoming";

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  topics: string[];
  status: RoadmapStatus;
  href: string;
  icon: React.ReactNode;
}

interface RoadmapPhase {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  topics: RoadmapTopic[];
}

const PHASES: RoadmapPhase[] = [
  {
    number: "01",
    title: "Web & HTML Foundations",
    subtitle: "Understand how HTML fits into the web",
    description:
      "Start with the mental model behind websites, documents, browsers, URLs and HTML before writing more complex markup.",
    duration: "1–2 weeks",
    topics: [
      {
        id: "internet-basics",
        title: "How the Web Works",
        description:
          "Understand the basic request-response model behind websites.",
        topics: [
          "Internet basics",
          "Browser basics",
          "Client and server",
          "HTTP and HTTPS",
          "URLs",
          "DNS basics",
        ],
        status: "completed",
        href: "#",
        icon: <Globe2 />,
      },
      {
        id: "html-introduction",
        title: "Introduction to HTML",
        description:
          "Understand HTML documents, elements, tags and attributes.",
        topics: [
          "What is HTML?",
          "HTML documents",
          "Elements",
          "Tags",
          "Attributes",
          "Nesting",
        ],
        status: "completed",
        href: "#",
        icon: <FileCode2 />,
      },
      {
        id: "html-document",
        title: "HTML Document Structure",
        description: "Learn the standard structure of a modern HTML document.",
        topics: [
          "<!DOCTYPE html>",
          "<html>",
          "<head>",
          "<body>",
          "Metadata",
          "Document hierarchy",
        ],
        status: "current",
        href: "#",
        icon: <Layers3 />,
      },
    ],
  },

  {
    number: "02",
    title: "Core HTML Elements",
    subtitle: "Learn the building blocks of web pages",
    description:
      "Master the everyday elements used to structure text, content, links, images and documents.",
    duration: "2–3 weeks",
    topics: [
      {
        id: "headings-paragraphs",
        title: "Text & Headings",
        description:
          "Create well-structured readable content using semantic text elements.",
        topics: [
          "Headings",
          "Paragraphs",
          "Line breaks",
          "Horizontal rules",
          "Strong & emphasis",
          "Quotes",
        ],
        status: "upcoming",
        href: "#",
        icon: <BookOpen />,
      },
      {
        id: "links-navigation",
        title: "Links & Navigation",
        description:
          "Build internal, external and accessible navigation systems.",
        topics: [
          "Anchor element",
          "Absolute URLs",
          "Relative URLs",
          "Fragments",
          "Navigation",
          "Download links",
        ],
        status: "upcoming",
        href: "#",
        icon: <ArrowUpRight />,
      },
      {
        id: "lists",
        title: "Lists",
        description:
          "Organize related information using semantic list elements.",
        topics: [
          "Ordered lists",
          "Unordered lists",
          "Description lists",
          "Nested lists",
          "List semantics",
        ],
        status: "upcoming",
        href: "#",
        icon: <Menu />,
      },
      {
        id: "images",
        title: "Images",
        description:
          "Use images correctly while considering performance and accessibility.",
        topics: ["<img>", "src", "alt", "width", "height", "Responsive images"],
        status: "upcoming",
        href: "#",
        icon: <Monitor />,
      },
    ],
  },

  {
    number: "03",
    title: "Semantic HTML",
    subtitle: "Write meaningful and maintainable markup",
    description:
      "Move beyond generic div-based layouts and learn how semantic HTML improves accessibility, SEO and maintainability.",
    duration: "1–2 weeks",
    topics: [
      {
        id: "semantic-elements",
        title: "Semantic Elements",
        description:
          "Learn the structural elements that communicate meaning to browsers and assistive technologies.",
        topics: [
          "<header>",
          "<nav>",
          "<main>",
          "<section>",
          "<article>",
          "<aside>",
          "<footer>",
        ],
        status: "upcoming",
        href: "#",
        icon: <Layers3 />,
      },
      {
        id: "content-structure",
        title: "Content Structure",
        description:
          "Organize complex pages using meaningful document hierarchy.",
        topics: [
          "Page hierarchy",
          "Sections",
          "Articles",
          "Landmarks",
          "Heading hierarchy",
        ],
        status: "upcoming",
        href: "#",
        icon: <Code2 />,
      },
      {
        id: "generic-elements",
        title: "div & span",
        description:
          "Understand when generic containers are appropriate and when semantic elements are better.",
        topics: [
          "<div>",
          "<span>",
          "Generic containers",
          "Avoiding unnecessary markup",
        ],
        status: "upcoming",
        href: "#",
        icon: <Terminal />,
      },
    ],
  },

  {
    number: "04",
    title: "Forms & User Input",
    subtitle: "Build usable web forms",
    description: "Learn how browsers collect, validate and submit user input.",
    duration: "2–3 weeks",
    topics: [
      {
        id: "forms",
        title: "HTML Forms",
        description:
          "Understand form structure, submission and common form patterns.",
        topics: [
          "<form>",
          "action",
          "method",
          "GET",
          "POST",
          "form submission",
        ],
        status: "upcoming",
        href: "#",
        icon: <FileCode2 />,
      },
      {
        id: "form-controls",
        title: "Form Controls",
        description: "Master the most common HTML input controls.",
        topics: ["input", "textarea", "select", "option", "button", "label"],
        status: "upcoming",
        href: "#",
        icon: <Zap />,
      },
      {
        id: "input-types",
        title: "Input Types",
        description:
          "Use appropriate input types for different kinds of user data.",
        topics: [
          "text",
          "email",
          "password",
          "number",
          "date",
          "file",
          "checkbox",
          "radio",
        ],
        status: "upcoming",
        href: "#",
        icon: <Code2 />,
      },
      {
        id: "validation",
        title: "Form Validation",
        description:
          "Use built-in browser validation to create safer and better forms.",
        topics: [
          "required",
          "minlength",
          "maxlength",
          "pattern",
          "min",
          "max",
          "type validation",
        ],
        status: "upcoming",
        href: "#",
        icon: <ShieldCheck />,
      },
    ],
  },

  {
    number: "05",
    title: "Tables & Structured Data",
    subtitle: "Represent tabular information correctly",
    description:
      "Learn accessible and semantic table markup for structured data.",
    duration: "1 week",
    topics: [
      {
        id: "tables",
        title: "HTML Tables",
        description: "Create structured tables with meaningful relationships.",
        topics: [
          "<table>",
          "<tr>",
          "<td>",
          "<th>",
          "<thead>",
          "<tbody>",
          "<tfoot>",
        ],
        status: "upcoming",
        href: "#",
        icon: <Layers3 />,
      },
      {
        id: "accessible-tables",
        title: "Accessible Tables",
        description:
          "Improve table navigation and understanding for assistive technologies.",
        topics: [
          "scope",
          "caption",
          "headers",
          "row headers",
          "column headers",
        ],
        status: "upcoming",
        href: "#",
        icon: <Accessibility />,
      },
    ],
  },

  {
    number: "06",
    title: "Media & Embedding",
    subtitle: "Work with modern web media",
    description:
      "Learn how to embed audio, video, external content and responsive media.",
    duration: "1–2 weeks",
    topics: [
      {
        id: "audio-video",
        title: "Audio & Video",
        description: "Use native browser media capabilities.",
        topics: [
          "<audio>",
          "<video>",
          "<source>",
          "controls",
          "captions",
          "fallback content",
        ],
        status: "upcoming",
        href: "#",
        icon: <Monitor />,
      },
      {
        id: "iframe",
        title: "Embedding Content",
        description: "Embed external content responsibly.",
        topics: [
          "<iframe>",
          "sandbox",
          "embedded documents",
          "external content",
        ],
        status: "upcoming",
        href: "#",
        icon: <Globe2 />,
      },
      {
        id: "responsive-images",
        title: "Responsive Images",
        description:
          "Serve appropriate images for different screens and resolutions.",
        topics: [
          "<picture>",
          "srcset",
          "sizes",
          "art direction",
          "image performance",
        ],
        status: "upcoming",
        href: "#",
        icon: <Rocket />,
      },
    ],
  },

  {
    number: "07",
    title: "Metadata & SEO",
    subtitle: "Make documents discoverable",
    description:
      "Understand how HTML metadata affects search engines, browsers, sharing and page behavior.",
    duration: "1–2 weeks",
    topics: [
      {
        id: "metadata",
        title: "HTML Metadata",
        description: "Understand metadata placed inside the document head.",
        topics: [
          "<title>",
          "<meta>",
          "charset",
          "viewport",
          "description",
          "robots",
        ],
        status: "upcoming",
        href: "#",
        icon: <Search />,
      },
      {
        id: "seo-html",
        title: "SEO-Friendly HTML",
        description:
          "Use semantic structure and metadata to create search-friendly pages.",
        topics: [
          "Semantic structure",
          "Heading hierarchy",
          "Links",
          "Images",
          "Metadata",
          "Canonical URLs",
        ],
        status: "upcoming",
        href: "#",
        icon: <Globe2 />,
      },
      {
        id: "social-metadata",
        title: "Social Sharing Metadata",
        description:
          "Understand metadata used when pages are shared on social platforms.",
        topics: [
          "Open Graph",
          "Twitter/X cards",
          "Preview images",
          "Social titles",
          "Social descriptions",
        ],
        status: "upcoming",
        href: "#",
        icon: <Sparkles />,
      },
    ],
  },

  {
    number: "08",
    title: "Accessibility",
    subtitle: "Build websites for everyone",
    description:
      "Learn accessible HTML patterns so your interfaces work better for keyboard users, screen readers and users with different needs.",
    duration: "2–3 weeks",
    topics: [
      {
        id: "accessibility-basics",
        title: "Accessibility Fundamentals",
        description:
          "Understand the core principles behind accessible web content.",
        topics: [
          "WCAG concepts",
          "Keyboard navigation",
          "Screen readers",
          "Focus",
          "Semantic HTML",
        ],
        status: "upcoming",
        href: "#",
        icon: <Accessibility />,
      },
      {
        id: "aria",
        title: "ARIA",
        description:
          "Understand when ARIA is useful and when native HTML should be preferred.",
        topics: [
          "ARIA roles",
          "ARIA labels",
          "ARIA states",
          "ARIA properties",
          "Native semantics",
        ],
        status: "upcoming",
        href: "#",
        icon: <ShieldCheck />,
      },
      {
        id: "accessible-forms",
        title: "Accessible Forms",
        description:
          "Build form experiences that are understandable and usable.",
        topics: [
          "Labels",
          "Descriptions",
          "Errors",
          "Required fields",
          "Keyboard navigation",
        ],
        status: "upcoming",
        href: "#",
        icon: <CheckCircle2 />,
      },
    ],
  },

  {
    number: "09",
    title: "Modern HTML APIs",
    subtitle: "Go beyond basic markup",
    description:
      "Explore modern platform features that HTML provides directly or exposes through browser APIs.",
    duration: "2–4 weeks",
    topics: [
      {
        id: "dialog",
        title: "Dialog",
        description: "Create native modal and non-modal dialog experiences.",
        topics: ["<dialog>", "showModal()", "close()", "returnValue"],
        status: "upcoming",
        href: "#",
        icon: <Monitor />,
      },
      {
        id: "details-summary",
        title: "Details & Summary",
        description: "Create native disclosure components without JavaScript.",
        topics: [
          "<details>",
          "<summary>",
          "Disclosure patterns",
          "Progressive enhancement",
        ],
        status: "upcoming",
        href: "#",
        icon: <ChevronDown />,
      },
      {
        id: "template",
        title: "Template",
        description:
          "Understand reusable inert HTML templates used by web applications.",
        topics: [
          "<template>",
          "DocumentFragment",
          "Cloning",
          "Reusable markup",
        ],
        status: "upcoming",
        href: "#",
        icon: <Layers3 />,
      },
      {
        id: "web-components",
        title: "Web Components",
        description:
          "Understand the HTML platform features behind reusable custom elements.",
        topics: [
          "Custom elements",
          "Shadow DOM",
          "HTML templates",
          "Component architecture",
        ],
        status: "upcoming",
        href: "#",
        icon: <Code2 />,
      },
    ],
  },

  {
    number: "10",
    title: "HTML Security",
    subtitle: "Write safer markup",
    description:
      "Understand important security considerations when HTML interacts with user input and external content.",
    duration: "1–2 weeks",
    topics: [
      {
        id: "html-security",
        title: "HTML Security Fundamentals",
        description:
          "Learn the security boundaries surrounding HTML documents.",
        topics: [
          "Trust boundaries",
          "Untrusted HTML",
          "Browser security model",
          "Security headers",
        ],
        status: "upcoming",
        href: "#",
        icon: <Lock />,
      },
      {
        id: "xss",
        title: "Cross-Site Scripting",
        description:
          "Understand how unsafe HTML handling can create XSS vulnerabilities.",
        topics: [
          "Reflected XSS",
          "Stored XSS",
          "DOM XSS",
          "Output encoding",
          "Sanitization",
        ],
        status: "upcoming",
        href: "#",
        icon: <ShieldCheck />,
      },
      {
        id: "safe-embeds",
        title: "Safe Embedding",
        description:
          "Understand safer patterns for third-party embedded content.",
        topics: [
          "iframe sandbox",
          "Permissions Policy",
          "CSP concepts",
          "Third-party content",
        ],
        status: "upcoming",
        href: "#",
        icon: <Lock />,
      },
    ],
  },

  {
    number: "11",
    title: "Professional HTML",
    subtitle: "Write production-quality markup",
    description:
      "Develop the habits expected from professional frontend engineers.",
    duration: "2–4 weeks",
    topics: [
      {
        id: "html-quality",
        title: "HTML Code Quality",
        description: "Create readable, consistent and maintainable HTML.",
        topics: [
          "Formatting",
          "Naming",
          "Nesting",
          "Maintainability",
          "Code review",
        ],
        status: "upcoming",
        href: "#",
        icon: <CheckCircle2 />,
      },
      {
        id: "validation",
        title: "HTML Validation",
        description: "Learn how to detect invalid and problematic markup.",
        topics: [
          "HTML validation",
          "Browser DevTools",
          "Linting",
          "Validation workflows",
        ],
        status: "upcoming",
        href: "#",
        icon: <Check />,
      },
      {
        id: "html-performance",
        title: "HTML Performance",
        description:
          "Understand how document structure affects loading and rendering.",
        topics: [
          "Critical resources",
          "Preload",
          "Lazy loading",
          "Resource hints",
          "DOM size",
        ],
        status: "upcoming",
        href: "#",
        icon: <Zap />,
      },
      {
        id: "developer-workflow",
        title: "Professional Workflow",
        description:
          "Integrate HTML development into a modern Git-based workflow.",
        topics: ["Git", "GitHub", "Code review", "Pull requests", "Deployment"],
        status: "upcoming",
        href: "#",
        icon: <Terminal />,
      },
    ],
  },

  {
    number: "12",
    title: "Projects & Industry Readiness",
    subtitle: "Turn HTML knowledge into real skills",
    description:
      "Finish the roadmap by building increasingly realistic websites and demonstrating production-ready frontend fundamentals.",
    duration: "3–6 weeks",
    topics: [
      {
        id: "project-portfolio",
        title: "Personal Portfolio",
        description: "Build a semantic, responsive personal portfolio.",
        topics: [
          "Semantic HTML",
          "Navigation",
          "Forms",
          "SEO",
          "Accessibility",
        ],
        status: "upcoming",
        href: "#",
        icon: <Trophy />,
      },
      {
        id: "project-blog",
        title: "Blog Website",
        description:
          "Build a multi-page blog structure using production-quality HTML.",
        topics: [
          "Articles",
          "Navigation",
          "Metadata",
          "Images",
          "Accessibility",
        ],
        status: "upcoming",
        href: "#",
        icon: <BookOpen />,
      },
      {
        id: "project-landing",
        title: "Product Landing Page",
        description:
          "Create a professional product landing page ready for CSS styling.",
        topics: ["Hero", "Features", "Pricing", "FAQ", "CTA", "Footer"],
        status: "upcoming",
        href: "#",
        icon: <Rocket />,
      },
      {
        id: "industry-ready",
        title: "Industry-Ready HTML",
        description:
          "Apply semantic structure, accessibility, SEO and professional workflow together.",
        topics: [
          "Semantic HTML",
          "Accessibility",
          "SEO",
          "Performance",
          "Security",
          "Git",
        ],
        status: "upcoming",
        href: "#",
        icon: <Award />,
      },
    ],
  },
];

const QUICK_PATHS = [
  {
    title: "HTML Fundamentals",
    description: "Start from zero and learn the core language.",
    icon: <BookOpen />,
    href: "#",
  },
  {
    title: "Semantic HTML",
    description: "Write meaningful, accessible document structure.",
    icon: <Layers3 />,
    href: "#",
  },
  {
    title: "HTML Accessibility",
    description: "Build interfaces usable by everyone.",
    icon: <Accessibility />,
    href: "#",
  },
  {
    title: "HTML Projects",
    description: "Turn concepts into real-world websites.",
    icon: <Rocket />,
    href: "/projects/",
  },
];

function getTopicCount() {
  return PHASES.reduce((total, phase) => total + phase.topics.length, 0);
}

function getStatusLabel(status: RoadmapStatus) {
  if (status === "completed") return "Foundation";
  if (status === "current") return "Start here";
  return "Next";
}

function TopicCard({ topic }: { topic: RoadmapTopic }) {
  return (
    <Link
      to={topic.href}
      className={`${styles.topicCard} ${styles[`topicCard--${topic.status}`]}`}
    >
      <div className={styles.topicCardTop}>
        <div className={styles.topicIcon}>{topic.icon}</div>

        <span className={styles.topicStatus}>
          {topic.status === "completed" && <Check size={13} />}
          {topic.status === "current" && <Zap size={13} />}
          {topic.status === "upcoming" && <ArrowRight size={13} />}

          {getStatusLabel(topic.status)}
        </span>
      </div>

      <h4>{topic.title}</h4>

      <p>{topic.description}</p>

      <div className={styles.topicTags}>
        {topic.topics.slice(0, 4).map((item) => (
          <span key={item}>{item}</span>
        ))}

        {topic.topics.length > 4 && <span>+{topic.topics.length - 4}</span>}
      </div>

      <div className={styles.topicArrow}>
        Explore topic
        <ArrowUpRight size={15} />
      </div>
    </Link>
  );
}

function Phase({ phase, index }: { phase: RoadmapPhase; index: number }) {
  return (
    <section className={styles.phase}>
      <div className={styles.phaseRail}>
        <div className={styles.phaseNumber}>{phase.number}</div>

        {index < PHASES.length - 1 && <div className={styles.phaseLine} />}
      </div>

      <div className={styles.phaseContent}>
        <div className={styles.phaseHeader}>
          <div>
            <span className={styles.phaseEyebrow}>PHASE {phase.number}</span>

            <h2>{phase.title}</h2>

            <strong>{phase.subtitle}</strong>

            <p>{phase.description}</p>
          </div>

          <span className={styles.phaseDuration}>
            <BookOpen size={15} />
            {phase.duration}
          </span>
        </div>

        <div className={styles.topicGrid}>
          {phase.topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HTMLRoadmapPage(): JSX.Element {
  const [openPhase, setOpenPhase] = useState<string | null>(null);

  const totalTopics = useMemo(() => getTopicCount(), []);

  const completedTopics = PHASES.flatMap((phase) => phase.topics).filter(
    (topic) => topic.status === "completed",
  ).length;

  const progress = Math.round((completedTopics / totalTopics) * 100);

  return (
    <Layout
      title="HTML Roadmap"
      description="Complete HTML roadmap from beginner to industry-ready. Learn HTML fundamentals, semantic HTML, forms, accessibility, SEO, security, performance and real-world projects."
    >
      <main className={styles.page}>
        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        {/* <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/roadmaps/">Roadmaps</Link>
            <span>/</span>
            <strong>HTML</strong>
          </nav>
        </div> */}

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <FileCode2 size={16} />
                  HTML ROADMAP
                </div>

                <h1>
                  Master HTML.
                  <span> Build the foundation of the web.</span>
                </h1>

                <p className={styles.heroDescription}>
                  A structured path from your first HTML document to semantic,
                  accessible, SEO-friendly and production-ready markup.
                </p>

                <div className={styles.heroActions}>
                  <Link to="#" className="button button--primary">
                    Start HTML
                    <ArrowRight size={18} />
                  </Link>

                  <a href="#roadmap" className="button button--secondary">
                    View roadmap
                    <MapIcon />
                  </a>
                </div>

                <div className={styles.heroMeta}>
                  <span>
                    <BookOpen size={15} />
                    {totalTopics} learning modules
                  </span>

                  <span>
                    <Trophy size={15} />
                    Projects included
                  </span>

                  <span>
                    <Award size={15} />
                    Industry skills
                  </span>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.codeWindow}>
                  <div className={styles.windowHeader}>
                    <span />
                    <span />
                    <span />

                    <div className={styles.codeWindowTitle}>
                      {" "}
                      <Code2 size={14} /> index.html{" "}
                    </div>
                  </div>

                  <pre>
                    <code>
                      {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width"
    />
    <title>My Website</title>
  </head>

  <body>
      <h1>Hello, Web!</h1>
  </body>
</html>`}
                    </code>
                  </pre>

                  <div className={styles.codeStatus}>
                    <CheckCircle2 size={15} />
                    Semantic HTML
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OVERVIEW
        ====================================================== */}

        <section className={styles.overview}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewCard}>
                <div className={styles.overviewIcon}>
                  <BookOpen />
                </div>
                <span>LEVEL</span>
                <strong>Beginner → Advanced</strong>
                <p>No previous HTML experience is required.</p>
              </div>

              <div className={styles.overviewCard}>
                <div className={styles.overviewIcon}>
                  <Rocket />
                </div>
                <span>TIME</span>
                <strong>8–12 weeks</strong>
                <p>Learn consistently and build alongside the roadmap.</p>
              </div>

              <div className={styles.overviewCard}>
                <div className={styles.overviewIcon}>
                  <Code2 />
                </div>
                <span>FOCUS</span>
                <strong>Web Fundamentals</strong>
                <p>Structure, semantics, accessibility and the platform.</p>
              </div>

              <div className={styles.overviewCard}>
                <div className={styles.overviewIcon}>
                  <Award />
                </div>
                <span>OUTCOME</span>
                <strong>Production Foundations</strong>
                <p>Ready to continue into CSS and frontend development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT YOU WILL LEARN
        ====================================================== */}

        <section className={styles.skillsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionKicker}>WHAT YOU WILL LEARN</span>

              <h2>
                More than tags.
                <span> Real web fundamentals.</span>
              </h2>

              <p>
                HTML is the foundation on which the rest of the web platform is
                built. Learn it properly before moving into CSS, JavaScript and
                frameworks.
              </p>
            </div>

            <div className={styles.skillsGrid}>
              {[
                ["Semantic HTML", "Meaningful document structure", Layers3],
                ["Forms", "User input and validation", FileCode2],
                ["Accessibility", "Inclusive web experiences", Accessibility],
                ["SEO", "Search-friendly documents", Search],
                ["Media", "Images, audio and video", Monitor],
                ["Security", "Safer HTML practices", ShieldCheck],
                ["Performance", "Faster document delivery", Zap],
                ["Web Platform", "Modern browser capabilities", Globe2],
              ].map(([title, description, Icon]) => {
                const SkillIcon = Icon as React.ComponentType<{
                  size?: number;
                }>;

                return (
                  <div className={styles.skillCard} key={title as string}>
                    <div className={styles.skillIcon}>
                      <SkillIcon size={20} />
                    </div>

                    <h3>{title as string}</h3>

                    <p>{description as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK PATHS
        ====================================================== */}

        <section className={styles.quickSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionKicker}>QUICK START</span>

              <h2>Choose where you want to begin.</h2>

              <p>
                Already know the basics? Jump directly to the area you need.
              </p>
            </div>

            <div className={styles.quickGrid}>
              {QUICK_PATHS.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={styles.quickCard}
                >
                  <div className={styles.quickIcon}>{item.icon}</div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <ArrowUpRight size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ROADMAP
        ====================================================== */}

        <section id="roadmap" className={styles.roadmapSection}>
          <div className={styles.container}>
            <div className={styles.roadmapHeader}>
              <div>
                <span className={styles.sectionKicker}>
                  COMPLETE LEARNING PATH
                </span>

                <h2>
                  The HTML roadmap
                  <span> from zero to production.</span>
                </h2>

                <p>
                  Follow the phases in order if you are a beginner. Experienced
                  developers can jump to the areas they need.
                </p>
              </div>

              <div className={styles.progressCard}>
                <div className={styles.progressTop}>
                  <span>Your starting progress</span>
                  <strong>{progress}%</strong>
                </div>

                <div className={styles.progressBar}>
                  <span style={{ width: `${progress}%` }} />
                </div>

                <small>
                  {completedTopics} of {totalTopics} modules marked as
                  foundation
                </small>
              </div>
            </div>

            <div className={styles.roadmap}>
              {PHASES.map((phase, index) => (
                <div key={phase.number}>
                  <button
                    type="button"
                    className={styles.mobilePhaseToggle}
                    onClick={() =>
                      setOpenPhase(
                        openPhase === phase.number ? null : phase.number,
                      )
                    }
                    aria-expanded={openPhase === phase.number}
                  >
                    <span>
                      <b>{phase.number}</b>
                      {phase.title}
                    </span>

                    <ChevronDown
                      size={18}
                      className={
                        openPhase === phase.number ? styles.rotated : ""
                      }
                    />
                  </button>

                  <div
                    className={`${styles.phaseWrapper} ${
                      openPhase === phase.number ? styles.phaseWrapperOpen : ""
                    }`}
                  >
                    <Phase phase={phase} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section className={styles.projectsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionKicker}>BUILD TO LEARN</span>

              <h2>
                Projects turn HTML knowledge
                <span> into real skills.</span>
              </h2>

              <p>
                Don't finish the roadmap without building. Use projects to prove
                that you can apply what you learned.
              </p>
            </div>

            <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <div className={styles.projectNumber}>01</div>
                <BookOpen />
                <span>BEGINNER</span>
                <h3>Personal Profile</h3>
                <p>
                  Create a semantic profile page with headings, links, images,
                  lists and contact information.
                </p>

                <div className={styles.projectTags}>
                  <span>HTML</span>
                  <span>Semantic</span>
                  <span>Forms</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectNumber}>02</div>
                <Globe2 />
                <span>INTERMEDIATE</span>
                <h3>Multi-page Blog</h3>
                <p>
                  Build a structured blog with navigation, articles, metadata,
                  images and accessible markup.
                </p>

                <div className={styles.projectTags}>
                  <span>Blog</span>
                  <span>SEO</span>
                  <span>A11y</span>
                </div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectNumber}>03</div>
                <Rocket />
                <span>ADVANCED</span>
                <h3>Product Website</h3>
                <p>
                  Create a realistic product website with pricing, forms, FAQ,
                  testimonials and strong document structure.
                </p>

                <div className={styles.projectTags}>
                  <span>Landing Page</span>
                  <span>Forms</span>
                  <span>Metadata</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NEXT ROADMAP
        ====================================================== */}

        <section className={styles.nextSection}>
          <div className={styles.container}>
            <div className={styles.nextPanel}>
              <div>
                <span className={styles.sectionKicker}>WHAT COMES NEXT?</span>

                <h2>
                  HTML is the beginning.
                  <span> CSS brings it to life.</span>
                </h2>

                <p>
                  Once you are comfortable with HTML structure, move into CSS to
                  learn layouts, responsive design, animations, design systems
                  and visual interfaces.
                </p>
              </div>

              <Link to="#" className="button button--primary">
                CSS Roadmap
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaPanel}>
              <div className={styles.ctaGlow} />

              <div className={styles.ctaContent}>
                <div className={styles.eyebrow}>
                  <Sparkles size={16} />
                  START BUILDING
                </div>

                <h2>
                  Ready to build your first
                  <span> web page?</span>
                </h2>

                <p>
                  Start with the fundamentals, practice every concept, build
                  projects and keep moving forward.
                </p>

                <div className={styles.ctaActions}>
                  <Link to="#" className="button button--primary">
                    Start Learning HTML
                    <ArrowRight size={18} />
                  </Link>

                  <Link to="/practice/" className="button button--secondary">
                    Practice
                    <Terminal size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.ctaCode}>
                <div className={styles.ctaCodeHeader}>
                  <span />
                  <span />
                  <span />
                </div>

                <pre>
                  <code>
                    {`<main>
  <h1>Keep learning.</h1>
  <p>Keep building.</p>
  <a href="/next">
    Keep growing →
  </a>
</main>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function MapIcon() {
  return <Globe2 size={18} />;
}
