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
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Layers3,
  Monitor,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  TestTube2,
  Users,
  X,
  Zap,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type Skill = {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
};

type Phase = {
  number: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
};

const SKILLS: Skill[] = [
  {
    icon: <FileCode2 size={21} />,
    title: "HTML & Web Foundations",
    description:
      "Build accessible, semantic page structures and understand how browsers render web pages.",
    topics: ["HTML5", "Semantic HTML", "Forms", "SEO", "Accessibility"],
  },
  {
    icon: <Palette size={21} />,
    title: "CSS & Responsive UI",
    description:
      "Create responsive interfaces that work across mobile, tablet, and desktop devices.",
    topics: ["CSS3", "Flexbox", "Grid", "Responsive Design", "Animations"],
  },
  {
    icon: <Code2 size={21} />,
    title: "JavaScript",
    description:
      "Understand modern JavaScript and use it to build interactive browser experiences.",
    topics: ["ES6+", "DOM", "Async JS", "APIs", "Modules"],
  },
  {
    icon: <Layers3 size={21} />,
    title: "React & TypeScript",
    description:
      "Build maintainable component-based applications using modern frontend tooling.",
    topics: ["React", "TypeScript", "Hooks", "State", "Components"],
  },
  {
    icon: <GitBranch size={21} />,
    title: "Git & Collaboration",
    description:
      "Learn the workflow used to work safely with branches, pull requests, and code reviews.",
    topics: ["Git", "GitHub", "Branches", "PRs", "Code Review"],
  },
  {
    icon: <TestTube2 size={21} />,
    title: "Testing & Quality",
    description:
      "Develop the habit of validating frontend applications before shipping changes.",
    topics: ["Testing", "Debugging", "Linting", "Performance", "QA"],
  },
];

const PHASES: Phase[] = [
  {
    number: "01",
    title: "Web Foundations",
    description:
      "Understand the browser, HTTP basics, HTML document structure, semantic markup, and accessibility.",
    skills: ["HTML5", "HTTP", "Browser Basics", "Accessibility"],
    duration: "Foundation",
  },
  {
    number: "02",
    title: "CSS & Responsive Design",
    description:
      "Learn layout systems, responsive patterns, reusable styling, visual hierarchy, and modern CSS.",
    skills: ["CSS", "Flexbox", "Grid", "Responsive UI"],
    duration: "Foundation",
  },
  {
    number: "03",
    title: "JavaScript Engineering",
    description:
      "Move from basic syntax to DOM manipulation, asynchronous programming, APIs, modules, and debugging.",
    skills: ["JavaScript", "DOM", "Fetch", "Async/Await"],
    duration: "Core",
  },
  {
    number: "04",
    title: "Modern Frontend",
    description:
      "Build component-driven applications with React, TypeScript, state management, routing, and reusable UI.",
    skills: ["React", "TypeScript", "Hooks", "Routing"],
    duration: "Core",
  },
  {
    number: "05",
    title: "Production Skills",
    description:
      "Learn the engineering practices required to move beyond tutorials and build maintainable applications.",
    skills: ["Testing", "Performance", "Security", "Accessibility"],
    duration: "Professional",
  },
  {
    number: "06",
    title: "Portfolio & Interview",
    description:
      "Build projects, document technical decisions, practice frontend questions, and prepare your career portfolio.",
    skills: ["Projects", "GitHub", "Portfolio", "Interviews"],
    duration: "Career",
  },
];

const FAQS = [
  {
    question: "What should I know before starting a frontend internship path?",
    answer:
      "You do not need to know everything. Basic computer usage, HTML, CSS, and some JavaScript are a useful starting point. The roadmap is designed to progressively develop the rest of the skills.",
  },
  {
    question: "Is React enough to become a frontend developer?",
    answer:
      "React is only one part of frontend development. A strong foundation also includes HTML, CSS, JavaScript, accessibility, browser fundamentals, Git, APIs, testing, performance, and the ability to build and maintain complete interfaces.",
  },
  {
    question: "How many projects should I build?",
    answer:
      "Focus on meaningful projects rather than a specific number. A small set of well-documented projects that demonstrate different skills can be more useful than many unfinished tutorial projects.",
  },
  {
    question: "Should I learn TypeScript before React?",
    answer:
      "You can learn React with JavaScript first and then introduce TypeScript, or use TypeScript while learning React if you already understand JavaScript fundamentals. The important part is understanding JavaScript before relying on TypeScript.",
  },
  {
    question: "What should my frontend portfolio contain?",
    answer:
      "Include selected projects, live demos where possible, source code, your role, technical decisions, challenges, screenshots, and what you learned. Keep the portfolio focused on evidence rather than a long list of technologies.",
  },
  {
    question: "Does completing this page guarantee an internship?",
    answer:
      "No. Learning resources and projects can help you develop and demonstrate skills, but internships and jobs depend on many factors including your actual ability, application quality, interview performance, company requirements, and available opportunities.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.eyebrow}>
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className={styles.skillCard}>
      <div className={styles.skillIcon}>{skill.icon}</div>

      <h3>{skill.title}</h3>
      <p>{skill.description}</p>

      <div className={styles.topicList}>
        {skill.topics.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>
    </article>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <article className={styles.phaseCard}>
      <div className={styles.phaseTop}>
        <span className={styles.phaseNumber}>{phase.number}</span>
        <span className={styles.phaseDuration}>{phase.duration}</span>
      </div>

      <h3>{phase.title}</h3>
      <p>{phase.description}</p>

      <div className={styles.phaseSkills}>
        {phase.skills.map((skill) => (
          <span key={skill}>
            <Check size={13} />
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function FrontendInternPage(): JSX.Element {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredSkills = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return SKILLS;
    }

    return SKILLS.filter((skill) =>
      [skill.title, skill.description, ...skill.topics]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <Layout
      title="Frontend Developer Internship Path"
      description="A practical frontend developer career path covering HTML, CSS, JavaScript, React, TypeScript, Git, testing, projects, portfolio, and interview preparation."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.badgeDot} />
                <BriefcaseBusiness size={15} />
                Frontend Developer Career Path
              </div>

              <h1>
                Prepare to build
                <span> real interfaces.</span>
              </h1>

              <p className={styles.heroDescription}>
                A practical path for aspiring frontend interns and junior
                developers — from HTML and CSS fundamentals to JavaScript,
                React, TypeScript, Git, testing, production UI, and portfolio
                projects.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  to="/roadmaps/"
                >
                  Start the Roadmap
                  <ArrowRight size={18} />
                </Link>

                <Link
                  className={`${styles.button} ${styles.buttonSecondary}`}
                  to="/projects/"
                >
                  Explore Projects
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <span>
                  <Check size={15} />
                  Beginner friendly
                </span>
                <span>
                  <Check size={15} />
                  Project focused
                </span>
                <span>
                  <Check size={15} />
                  Interview oriented
                </span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.browserWindow}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className={styles.addressBar}>
                    <Globe size={12} />
                    frontend-project.local
                  </div>

                  <Monitor size={15} />
                </div>

                <div className={styles.browserContent}>
                  <div className={styles.mockNav}>
                    <div className={styles.mockLogo}>
                      <Code2 size={15} />
                      dev
                    </div>

                    <div className={styles.mockLinks}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.mockHero}>
                    <div className={styles.mockText}>
                      <span />
                      <span />
                      <span />
                      <div />
                    </div>

                    <div className={styles.mockCard}>
                      <Code2 size={25} />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.mockGrid}>
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              </div>

              <div className={styles.floatingSkill}>
                <Code2 size={16} />
                <div>
                  <strong>React + TypeScript</strong>
                  <span>Production UI</span>
                </div>
              </div>

              <div className={styles.floatingStatus}>
                <Zap size={16} />
                <div>
                  <strong>Build → Test → Ship</strong>
                  <span>Engineering workflow</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT COMPANIES EXPECT
        ===================================================== */}
        <section className={styles.expectSection}>
          <div className={styles.container}>
            <div className={styles.expectGrid}>
              <div className={styles.expectIntro}>
                <span className={styles.eyebrow}>
                  <Target size={14} />
                  What to prepare for
                </span>

                <h2>
                  Frontend is more than
                  <span> writing JSX.</span>
                </h2>

                <p>
                  A practical frontend developer needs to understand the
                  browser, create accessible interfaces, work with APIs,
                  collaborate through Git, debug problems, and ship reliable
                  software.
                </p>
              </div>

              <div className={styles.expectCards}>
                <article>
                  <Monitor size={20} />
                  <strong>UI Engineering</strong>
                  <span>Responsive and reusable interfaces.</span>
                </article>

                <article>
                  <Code2 size={20} />
                  <strong>Programming</strong>
                  <span>Strong JavaScript fundamentals.</span>
                </article>

                <article>
                  <Github size={20} />
                  <strong>Collaboration</strong>
                  <span>Git, GitHub, branches, and pull requests.</span>
                </article>

                <article>
                  <ShieldCheck size={20} />
                  <strong>Quality</strong>
                  <span>Accessibility, security, testing, and performance.</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Core skill stack"
              title="Build the foundation before chasing frameworks."
              description="These are the major areas to develop before positioning yourself as a frontend intern or junior frontend developer."
            />

            <div className={styles.searchRow}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search skills..."
                  aria-label="Search frontend skills"
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

              <span>{filteredSkills.length} skill areas</span>
            </div>

            {filteredSkills.length > 0 ? (
              <div className={styles.skillGrid}>
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.title} skill={skill} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Search size={24} />
                <strong>No matching skill found</strong>
                <span>Try React, JavaScript, CSS, Git, or another keyword.</span>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            ROADMAP
        ===================================================== */}
        <section className={`${styles.section} ${styles.roadmapSection}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Learning sequence"
              title="A structured path from fundamentals to career readiness."
              description="Follow the phases in order, but revisit earlier concepts whenever a project exposes a knowledge gap."
            />

            <div className={styles.phaseGrid}>
              {PHASES.map((phase) => (
                <PhaseCard key={phase.number} phase={phase} />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.projectGrid}>
              <div className={styles.projectVisual}>
                <div className={styles.projectHeader}>
                  <div className={styles.projectDots}>
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>portfolio-project</span>

                  <Github size={15} />
                </div>

                <div className={styles.codeLines}>
                  <div>
                    <b>01</b>
                    <span className={styles.codeBlue}>const</span>{" "}
                    <span>project</span> = {"{"}
                  </div>

                  <div>
                    <b>02</b>
                    &nbsp;&nbsp;name:{" "}
                    <span className={styles.codeGreen}>
                      "Analytics Dashboard"
                    </span>
                  </div>

                  <div>
                    <b>03</b>
                    &nbsp;&nbsp;stack:{" "}
                    <span className={styles.codeGreen}>
                      "React + TypeScript"
                    </span>
                  </div>

                  <div>
                    <b>04</b>
                    &nbsp;&nbsp;responsive:{" "}
                    <span className={styles.codePurple}>true</span>
                  </div>

                  <div>
                    <b>05</b>
                    &nbsp;&nbsp;tested:{" "}
                    <span className={styles.codePurple}>true</span>
                  </div>

                  <div>
                    <b>06</b>
                    &nbsp;&nbsp;deployed:{" "}
                    <span className={styles.codePurple}>true</span>
                  </div>

                  <div>
                    <b>07</b>
                    {"}"};
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <span className={styles.eyebrow}>
                  <Rocket size={14} />
                  Project-first learning
                </span>

                <h2>
                  Build projects that
                  <span> demonstrate your skills.</span>
                </h2>

                <p>
                  Avoid building only tutorial clones. Create projects where
                  you have to make decisions about component architecture,
                  responsive behavior, state, APIs, error handling,
                  accessibility, performance, and deployment.
                </p>

                <div className={styles.projectChecklist}>
                  <div>
                    <Check size={17} />
                    <span>Responsive UI</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Reusable components</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>API integration</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Loading & error states</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Accessibility</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Deployment</span>
                  </div>
                </div>

                <Link
                  className={styles.textLink}
                  to="/projects/"
                >
                  Explore frontend projects
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WORKFLOW
        ===================================================== */}
        <section className={styles.workflowSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Professional workflow"
              title="Learn how software gets shipped."
              description="The internship mindset is not just about completing tasks. It is about understanding the workflow around the code."
            />

            <div className={styles.workflow}>
              <div className={styles.workflowStep}>
                <Search size={21} />
                <strong>Understand</strong>
                <span>Read the requirement.</span>
              </div>

              <ArrowRight className={styles.workflowArrow} size={20} />

              <div className={styles.workflowStep}>
                <Target size={21} />
                <strong>Plan</strong>
                <span>Break down the work.</span>
              </div>

              <ArrowRight className={styles.workflowArrow} size={20} />

              <div className={styles.workflowStep}>
                <Code2 size={21} />
                <strong>Build</strong>
                <span>Implement the solution.</span>
              </div>

              <ArrowRight className={styles.workflowArrow} size={20} />

              <div className={styles.workflowStep}>
                <TestTube2 size={21} />
                <strong>Test</strong>
                <span>Validate behavior.</span>
              </div>

              <ArrowRight className={styles.workflowArrow} size={20} />

              <div className={styles.workflowStep}>
                <GitBranch size={21} />
                <strong>Review</strong>
                <span>Get feedback.</span>
              </div>

              <ArrowRight className={styles.workflowArrow} size={20} />

              <div className={styles.workflowStep}>
                <Rocket size={21} />
                <strong>Ship</strong>
                <span>Deploy & document.</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTERNSHIP READINESS
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.readinessGrid}>
              <div className={styles.readinessContent}>
                <span className={styles.eyebrow}>
                  <Award size={14} />
                  Internship readiness
                </span>

                <h2>
                  Know what evidence
                  <span> you can show.</span>
                </h2>

                <p>
                  Before applying, review whether you can demonstrate these
                  skills through actual work rather than only certificates.
                </p>

                <div className={styles.readinessList}>
                  <div>
                    <Check size={17} />
                    <span>Build a responsive application from scratch.</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Consume and handle data from an API.</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Use Git branches and create pull requests.</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Debug a frontend issue systematically.</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Explain your component and state architecture.</span>
                  </div>

                  <div>
                    <Check size={17} />
                    <span>Deploy a project and document it clearly.</span>
                  </div>
                </div>
              </div>

              <div className={styles.readinessCard}>
                <div className={styles.readinessCardHeader}>
                  <span>Frontend readiness</span>
                  <span>CHECKLIST</span>
                </div>

                <div className={styles.progressRow}>
                  <div>
                    <span>HTML / CSS</span>
                    <strong>Core</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <span style={{ width: "90%" }} />
                  </div>
                </div>

                <div className={styles.progressRow}>
                  <div>
                    <span>JavaScript</span>
                    <strong>Core</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <span style={{ width: "80%" }} />
                  </div>
                </div>

                <div className={styles.progressRow}>
                  <div>
                    <span>React</span>
                    <strong>Core</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <span style={{ width: "75%" }} />
                  </div>
                </div>

                <div className={styles.progressRow}>
                  <div>
                    <span>Git / GitHub</span>
                    <strong>Required</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <span style={{ width: "70%" }} />
                  </div>
                </div>

                <div className={styles.progressRow}>
                  <div>
                    <span>Testing / Quality</span>
                    <strong>Professional</strong>
                  </div>
                  <div className={styles.progressTrack}>
                    <span style={{ width: "55%" }} />
                  </div>
                </div>

                <div className={styles.readinessNote}>
                  <ShieldCheck size={17} />
                  <span>
                    Use this as a learning checklist, not as an employment
                    score.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PORTFOLIO
        ===================================================== */}
        <section className={`${styles.section} ${styles.portfolioSection}`}>
          <div className={styles.container}>
            <div className={styles.portfolioGrid}>
              <div className={styles.portfolioCard}>
                <div className={styles.portfolioTop}>
                  <div className={styles.portfolioAvatar}>FE</div>

                  <div>
                    <strong>Frontend Developer</strong>
                    <span>Portfolio snapshot</span>
                  </div>

                  <Globe size={17} />
                </div>

                <div className={styles.portfolioProject}>
                  <span>FEATURED PROJECT</span>
                  <strong>Developer Analytics Dashboard</strong>

                  <div>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>API</span>
                  </div>
                </div>

                <div className={styles.portfolioStats}>
                  <div>
                    <strong>Live</strong>
                    <span>Demo</span>
                  </div>

                  <div>
                    <strong>Public</strong>
                    <span>Source</span>
                  </div>

                  <div>
                    <strong>Clean</strong>
                    <span>README</span>
                  </div>
                </div>
              </div>

              <div className={styles.portfolioContent}>
                <span className={styles.eyebrow}>
                  <BriefcaseBusiness size={14} />
                  Career evidence
                </span>

                <h2>
                  Make your portfolio tell a
                  <span> technical story.</span>
                </h2>

                <p>
                  A strong project description should make it easy to
                  understand the problem, your role, architecture, technology
                  choices, challenges, testing approach, and final result.
                </p>

                <Link
                  className={styles.textLink}
                  to="/projects/"
                >
                  Build portfolio projects
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.containerNarrow}>
            <SectionHeading
              eyebrow="Frontend career FAQ"
              title="Questions before you begin?"
            />

            <div className={styles.faqList}>
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqOpen : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className={styles.faqButton}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={19} />
                    </button>

                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className={styles.finalCta}>
          <div className={styles.ctaGrid} />

          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>
                <Code2 size={25} />
              </div>

              <span className={styles.eyebrow}>
                <Rocket size={14} />
                Start building
              </span>

              <h2>
                Your frontend journey
                <span> starts with one project.</span>
              </h2>

              <p>
                Learn the fundamentals, build real interfaces, practice
                engineering workflows, and keep improving through meaningful
                projects.
              </p>

              <div className={styles.ctaActions}>
                <Link
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  to="/roadmaps/html/"
                >
                  Start with HTML
                  <ArrowRight size={18} />
                </Link>

                <Link
                  className={`${styles.button} ${styles.buttonGhost}`}
                  to="/projects/"
                >
                  Explore Projects
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.ctaNote}>
                <BookOpen size={15} />
                Learn → Practice → Build → Review → Showcase
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}