import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  FileCode2,
  Flag,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  Lightbulb,
  LockKeyhole,
  MonitorPlay,
  Rocket,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

type Tutorial = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  level: string;
  duration: string;
  topics: string[];
  featured?: boolean;
};

type LearningStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  tag: string;
};

const learningSteps: LearningStep[] = [
  {
    number: "01",
    title: "Understand the Web",
    description:
      "Learn how websites, browsers, servers, URLs, domains, and the internet work together.",
    icon: Globe2,
    href: "#", // /docs/web-development/
    tag: "Foundations",
  },
  {
    number: "02",
    title: "Learn HTML",
    description:
      "Build the structure of your first webpages using semantic HTML elements.",
    icon: FileCode2,
    href: "#", // /docs/html/
    tag: "Structure",
  },
  {
    number: "03",
    title: "Learn CSS",
    description:
      "Style your webpages and learn layouts, responsive design, colors, spacing, and animations.",
    icon: Layers3,
    href: "#", // /docs/javascript/
    tag: "Design",
  },
  {
    number: "04",
    title: "Learn JavaScript",
    description:
      "Add logic, interaction, events, dynamic content, and real programming fundamentals.",
    icon: Code2,
    href: "#", // /docs/javascript/
    tag: "Programming",
  },
  {
    number: "05",
    title: "Practice",
    description:
      "Solve small challenges and strengthen your understanding by writing code yourself.",
    icon: Brain,
    href: "/practice/",
    tag: "Practice",
  },
  {
    number: "06",
    title: "Build Projects",
    description:
      "Turn your knowledge into practical projects that you can improve and showcase.",
    icon: Rocket,
    href: "/projects/",
    tag: "Build",
  },
];

const tutorials: Tutorial[] = [
  {
    title: "HTML for Beginners",
    description:
      "Start creating webpages from scratch and understand the building blocks of the web.",
    icon: FileCode2,
    href: "#", // /docs/html/
    level: "Beginner",
    duration: "3–5 hours",
    topics: ["Elements", "Forms", "Links", "Images"],
    featured: true,
  },
  {
    title: "CSS for Beginners",
    description:
      "Make your webpages beautiful with colors, typography, layouts, Flexbox, Grid, and responsive design.",
    icon: Layers3,
    href: "#", // /docs/css/
    level: "Beginner",
    duration: "4–6 hours",
    topics: ["Selectors", "Flexbox", "Grid", "Responsive"],
    featured: true,
  },
  {
    title: "JavaScript for Beginners",
    description:
      "Learn programming fundamentals and make webpages interactive with JavaScript.",
    icon: Code2,
    href: "#", // /docs/javascript/
    level: "Beginner",
    duration: "8–12 hours",
    topics: ["Variables", "Functions", "Arrays", "DOM"],
    featured: true,
  },
  {
    title: "Git & GitHub Basics",
    description:
      "Learn how developers save, manage, share, and collaborate on code using Git and GitHub.",
    icon: GitBranch,
    href: "#", // /docs/git/
    level: "Beginner",
    duration: "2–3 hours",
    topics: ["Git", "Commits", "Branches", "GitHub"],
  },
  {
    title: "Computer Science Basics",
    description:
      "Build a strong foundation in programming concepts, algorithms, data structures, and computers.",
    icon: Terminal,
    href: "#", // /docs/computer-science/
    level: "Beginner",
    duration: "6–10 hours",
    topics: ["Logic", "Algorithms", "Data", "Systems"],
  },
  {
    title: "Web Development Basics",
    description:
      "Understand the complete journey from writing code to publishing a website on the internet.",
    icon: MonitorPlay,
    href: "#", // /docs/web-development/
    level: "Beginner",
    duration: "3–5 hours",
    topics: ["Frontend", "Backend", "HTTP", "Deployment"],
  },
];

const principles = [
  {
    icon: Compass,
    title: "Follow a path",
    description:
      "Avoid jumping randomly between technologies. Learn the fundamentals first.",
  },
  {
    icon: Code2,
    title: "Write code",
    description:
      "Reading tutorials is useful, but writing code yourself is where real learning happens.",
  },
  {
    icon: Trophy,
    title: "Build projects",
    description:
      "Use every new concept to build something small and practical.",
  },
  {
    icon: Users,
    title: "Learn with community",
    description:
      "Ask questions, contribute to open source, and learn from other developers.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function AbsoluteBeginnersPage(): React.JSX.Element {
  return (
    <Layout
      title="Absolute Beginners"
      description="Start learning programming and web development from zero with beginner-friendly tutorials, guided learning paths, practice, and projects."
    >
      <Head>
        <meta
          name="keywords"
          content="programming for beginners, web development beginners, HTML CSS JavaScript, coding tutorials, learn programming"
        />
        <meta
          property="og:title"
          content="Absolute Beginners | CodeHarborHub"
        />
        <meta
          property="og:description"
          content="A beginner-friendly path to learn programming, web development, practice coding, and build your first projects."
        />
      </Head>

      <main className={styles.page}>
        {/* Background */}
        <div className={styles.background} aria-hidden="true">
          <div className={styles.grid} />
          <div className={styles.glowOne} />
          <div className={styles.glowTwo} />
        </div>

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <motion.div
                className={styles.heroContent}
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeUp} className={styles.eyebrow}>
                  <span className={styles.eyebrowIcon}>
                    <Sparkles size={15} />
                  </span>
                  Absolute Beginners
                  <span className={styles.eyebrowDot} />
                  Start from zero
                </motion.div>

                <motion.h1 variants={fadeUp}>
                  Your first step into the
                  <span className={styles.gradientText}>
                    {" "}
                    world of coding.
                  </span>
                </motion.h1>

                <motion.p variants={fadeUp} className={styles.heroDescription}>
                  Never written code before? No problem. Start with the basics,
                  learn at your own pace, practice what you learn, and build
                  your first real projects.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className={styles.heroActions}
                >
                  <Link
                    className={clsx(
                      "button button--primary",
                      styles.primaryButton,
                    )}
                    to="#start-here"
                  >
                    Start learning
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    className={clsx(
                      "button button--secondary",
                      styles.secondaryButton,
                    )}
                    to="/roadmaps/"
                  >
                    View roadmap
                    <Compass size={18} />
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className={styles.trustRow}>
                  <span>
                    <CheckCircle2 size={16} />
                    Beginner friendly
                  </span>
                  <span>
                    <CheckCircle2 size={16} />
                    Learn at your pace
                  </span>
                  <span>
                    <CheckCircle2 size={16} />
                    Free & open source
                  </span>
                </motion.div>
              </motion.div>

              {/* Hero visual */}
              <motion.div
                className={styles.heroVisual}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className={styles.codeWindow}>
                  <div className={styles.windowHeader}>
                    <div className={styles.windowDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className={styles.windowTitle}>
                      your-first-page.html
                    </span>

                    <span className={styles.windowStatus}>
                      <span />
                      Ready
                    </span>
                  </div>

                  <div className={styles.codeBody}>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>01</span>
                      <span className={styles.codeMuted}>&lt;</span>
                      <span className={styles.codeTag}>html</span>
                      <span className={styles.codeMuted}>&gt;</span>
                    </div>

                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>02</span>
                      <span className={styles.codeIndent}> </span>
                      <span className={styles.codeMuted}>&lt;</span>
                      <span className={styles.codeTag}>body</span>
                      <span className={styles.codeMuted}>&gt;</span>
                    </div>

                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>03</span>
                      <span className={styles.codeIndent}> </span>
                      <span className={styles.codeIndent}> </span>
                      <span className={styles.codeMuted}>&lt;</span>
                      <span className={styles.codeTag}>h1</span>
                      <span className={styles.codeMuted}>&gt;</span>
                      <span className={styles.codeText}>
                        Hello, world!
                      </span>
                      <span className={styles.codeMuted}>&lt;/</span>
                      <span className={styles.codeTag}>h1</span>
                      <span className={styles.codeMuted}>&gt;</span>
                    </div>

                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>04</span>
                      <span className={styles.codeIndent}> </span>
                      <span className={styles.codeIndent}> </span>
                      <span className={styles.codeMuted}>&lt;</span>
                      <span className={styles.codeTag}>p</span>
                      <span className={styles.codeMuted}>&gt;</span>
                      <span className={styles.codeText}>
                        I&apos;m learning to code.
                      </span>
                      <span className={styles.codeMuted}>&lt;/</span>
                      <span className={styles.codeTag}>p</span>
                      <span className={styles.codeMuted}>&gt;</span>
                    </div>

                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>05</span>
                      <span className={styles.codeIndent}> </span>
                      <span className={styles.codeMuted}>&lt;/</span>
                      <span className={styles.codeTag}>body</span>
                      <span className={styles.codeMuted}>&gt;</span>
                    </div>

                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>06</span>
                      <span className={styles.codeMuted}>&lt;/</span>
                      <span className={styles.codeTag}>html</span>
                      <span className={styles.codeMuted}>&gt;</span>
                    </div>
                  </div>

                  <div className={styles.codeFooter}>
                    <span>
                      <Terminal size={14} />
                      HTML
                    </span>

                    <span>
                      <Gauge size={14} />
                      Beginner
                    </span>
                  </div>
                </div>

                <div className={styles.floatingCardOne}>
                  <span className={styles.floatingIcon}>
                    <Flag size={17} />
                  </span>
                  <div>
                    <strong>Start here</strong>
                    <small>No experience needed</small>
                  </div>
                </div>

                <div className={styles.floatingCardTwo}>
                  <CheckCircle2 size={18} />
                  <span>Learn → Practice → Build</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            START HERE
        ========================================================= */}
        <section id="start-here" className={styles.section}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className={styles.sectionEyebrow}>
                <Rocket size={16} />
                START HERE
              </div>

              <h2>
                A simple path from
                <span> beginner to builder.</span>
              </h2>

              <p>
                Don&apos;t worry about learning everything at once. Follow this
                path one step at a time.
              </p>
            </motion.div>

            <motion.div
              className={styles.path}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
            >
              {learningSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className={styles.pathItem}
                  >
                    <div className={styles.pathNumber}>{step.number}</div>

                    <div className={styles.pathConnector}>
                      {index < learningSteps.length - 1 && <span />}
                    </div>

                    <Link to={step.href} className={styles.pathCard}>
                      <div className={styles.pathIcon}>
                        <Icon size={21} />
                      </div>

                      <div className={styles.pathContent}>
                        <div className={styles.pathMeta}>
                          <span>{step.tag}</span>
                          <ChevronRight size={15} />
                        </div>

                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>

                      <ArrowRight className={styles.pathArrow} size={19} />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            TUTORIALS
        ========================================================= */}
        <section className={clsx(styles.section, styles.tutorialSection)}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className={styles.sectionEyebrow}>
                <BookOpen size={16} />
                BEGINNER TUTORIALS
              </div>

              <h2>
                Learn the skills that
                <span> matter first.</span>
              </h2>

              <p>
                Carefully selected fundamentals to help you build a strong
                foundation before moving into advanced technologies.
              </p>
            </motion.div>

            <motion.div
              className={styles.tutorialGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={stagger}
            >
              {tutorials.map((tutorial) => {
                const Icon = tutorial.icon;

                return (
                  <motion.article
                    key={tutorial.title}
                    variants={fadeUp}
                    className={clsx(
                      styles.tutorialCard,
                      tutorial.featured && styles.featuredCard,
                    )}
                  >
                    {tutorial.featured && (
                      <div className={styles.featuredBadge}>
                        <Sparkles size={13} />
                        Recommended
                      </div>
                    )}

                    <div className={styles.tutorialTop}>
                      <div className={styles.tutorialIcon}>
                        <Icon size={23} />
                      </div>

                      <span className={styles.levelBadge}>
                        {tutorial.level}
                      </span>
                    </div>

                    <h3>{tutorial.title}</h3>

                    <p>{tutorial.description}</p>

                    <div className={styles.topicList}>
                      {tutorial.topics.map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>

                    <div className={styles.tutorialFooter}>
                      <span>
                        <Gauge size={15} />
                        {tutorial.duration}
                      </span>

                      <Link to={tutorial.href}>
                        Learn
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            WHAT YOU WILL LEARN
        ========================================================= */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.learnGrid}>
              <motion.div
                className={styles.learnContent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div className={styles.sectionEyebrow}>
                  <Brain size={16} />
                  YOUR FOUNDATION
                </div>

                <h2>
                  Build skills that
                  <span> compound over time.</span>
                </h2>

                <p>
                  Your first goal isn&apos;t to become an expert overnight.
                  It&apos;s to understand the fundamentals well enough that
                  learning new technologies becomes easier.
                </p>

                <div className={styles.learnChecklist}>
                  <div>
                    <CheckCircle2 size={19} />
                    <span>Understand how the web works</span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>Write clean HTML and CSS</span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>Understand programming logic</span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>Build interactive webpages</span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>Use Git and GitHub</span>
                  </div>

                  <div>
                    <CheckCircle2 size={19} />
                    <span>Build your first portfolio projects</span>
                  </div>
                </div>

                <Link
                  className={clsx(
                    "button button--primary",
                    styles.learnButton,
                  )}
                  to="/roadmaps/"
                >
                  Explore all roadmaps
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              <motion.div
                className={styles.learningMap}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.mapHeader}>
                  <div>
                    <span>LEARNING JOURNEY</span>
                    <strong>From zero to first project</strong>
                  </div>

                  <div className={styles.mapIcon}>
                    <MapIcon />
                  </div>
                </div>

                <div className={styles.mapTrack}>
                  <div className={styles.mapProgress} />

                  {[
                    ["01", "Web basics", "Foundation"],
                    ["02", "HTML", "Structure"],
                    ["03", "CSS", "Design"],
                    ["04", "JavaScript", "Logic"],
                    ["05", "Git & GitHub", "Workflow"],
                    ["06", "First project", "Build"],
                  ].map(([number, title, label], index) => (
                    <div className={styles.mapItem} key={number}>
                      <div
                        className={clsx(
                          styles.mapNode,
                          index < 3 && styles.mapNodeActive,
                        )}
                      >
                        {index < 3 ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          number
                        )}
                      </div>

                      <div>
                        <strong>{title}</strong>
                        <span>{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LEARNING PRINCIPLES
        ========================================================= */}
        <section className={clsx(styles.section, styles.principlesSection)}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className={styles.sectionEyebrow}>
                <Lightbulb size={16} />
                LEARN BETTER
              </div>

              <h2>
                Don&apos;t just watch tutorials.
                <span> Become a developer.</span>
              </h2>

              <p>
                A good learning process combines understanding, practice,
                experimentation, and building.
              </p>
            </motion.div>

            <motion.div
              className={styles.principlesGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.title}
                    variants={fadeUp}
                    className={styles.principleCard}
                  >
                    <div className={styles.principleIcon}>
                      <Icon size={21} />
                    </div>

                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            PRACTICE + BUILD
        ========================================================= */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.actionGrid}>
              <motion.div
                className={styles.actionCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={styles.actionIcon}>
                  <Zap size={23} />
                </div>

                <div>
                  <span className={styles.actionEyebrow}>PRACTICE</span>
                  <h3>Turn knowledge into skill.</h3>
                  <p>
                    Test yourself with coding challenges and practice problems
                    instead of only reading theory.
                  </p>

                  <Link to="/practice/">
                    Start practicing
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className={styles.actionCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, delay: 0.1 }}
              >
                <div className={styles.actionIcon}>
                  <Rocket size={23} />
                </div>

                <div>
                  <span className={styles.actionEyebrow}>BUILD</span>
                  <h3>Make your first project.</h3>
                  <p>
                    Apply what you learned by building useful projects and
                    gradually create your developer portfolio.
                  </p>

                  <Link to="/projects/">
                    Explore projects
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            BEGINNER NOTE
        ========================================================= */}
        <section className={styles.section}>
          <div className="container">
            <motion.div
              className={styles.beginnerNote}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.noteIcon}>
                <LockKeyhole size={22} />
              </div>

              <div className={styles.noteContent}>
                <span>REMEMBER THIS</span>
                <h3>You don&apos;t need to know everything before you start.</h3>
                <p>
                  Every developer was once a beginner. Focus on understanding
                  one concept, writing some code, making mistakes, and trying
                  again.
                </p>
              </div>

              <div className={styles.noteSpark}>
                <Sparkles size={24} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className={styles.finalSection}>
          <div className="container">
            <motion.div
              className={styles.finalCard}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.finalGlow} />

              <div className={styles.finalIcon}>
                <Rocket size={25} />
              </div>

              <span className={styles.finalEyebrow}>
                YOUR JOURNEY STARTS HERE
              </span>

              <h2>
                Ready to write your
                <span> first line of code?</span>
              </h2>

              <p>
                Start small. Stay consistent. Build something every day.
                Your developer journey begins with one step.
              </p>

              <div className={styles.finalActions}>
                <Link
                  className={clsx(
                    "button button--primary",
                    styles.finalPrimary,
                  )}
                  to="#" // /docs/html/
                >
                  Start with HTML
                  <ArrowRight size={18} />
                </Link>

                <Link
                  className={clsx(
                    "button button--secondary",
                    styles.finalSecondary,
                  )}
                  to="/tutorials/"
                >
                  Browse all tutorials
                  <BookOpen size={17} />
                </Link>
              </div>

              <div className={styles.finalTrust}>
                <span>
                  <CheckCircle2 size={15} />
                  Free learning
                </span>
                <span>
                  <CheckCircle2 size={15} />
                  Open source
                </span>
                <span>
                  <CheckCircle2 size={15} />
                  Community driven
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function MapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3v15M15 6v15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}