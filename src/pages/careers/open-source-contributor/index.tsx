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
  Globe2,
  GraduationCap,
  Layers3,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Terminal,
  Users,
  X,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

type ContributionType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  href: string;
};

type CareerStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CONTRIBUTION_TYPES: ContributionType[] = [
  {
    icon: <FileCode2 size={22} />,
    title: "Documentation",
    description:
      "Improve tutorials, guides, examples, references, and developer documentation.",
    skills: ["Technical Writing", "Markdown", "MDX", "Communication"],
    href: "/contributing/",
  },
  {
    icon: <Code2 size={22} />,
    title: "Frontend Development",
    description:
      "Build accessible, responsive interfaces and improve the learning experience.",
    skills: ["React", "TypeScript", "CSS", "UI/UX"],
    href: "/projects/",
  },
  {
    icon: <Terminal size={22} />,
    title: "Backend Development",
    description:
      "Work on APIs, databases, authentication, integrations, and platform services.",
    skills: ["Node.js", "APIs", "Databases", "Security"],
    href: "/projects/",
  },
  {
    icon: <Layers3 size={22} />,
    title: "Learning Content",
    description:
      "Create practical tutorials, examples, exercises, roadmaps, and learning resources.",
    skills: ["Teaching", "Research", "JavaScript", "Problem Solving"],
    href: "/tutorials/",
  },
  {
    icon: <Rocket size={22} />,
    title: "Projects & Labs",
    description:
      "Create real-world projects that learners can study, extend, deploy, and contribute to.",
    skills: ["Architecture", "Git", "Testing", "Deployment"],
    href: "/projects/",
  },
  {
    icon: <Users size={22} />,
    title: "Community",
    description:
      "Help contributors, review discussions, organize events, and improve community workflows.",
    skills: ["Leadership", "Communication", "Mentoring", "Collaboration"],
    href: "/community/",
  },
];

const CAREER_STEPS: CareerStep[] = [
  {
    number: "01",
    title: "Choose a contribution",
    description:
      "Find an issue, documentation task, project, improvement, or community opportunity that matches your current skills.",
    icon: <Search size={20} />,
  },
  {
    number: "02",
    title: "Understand the problem",
    description:
      "Read the issue, repository guidelines, existing implementation, and acceptance criteria before writing code.",
    icon: <Target size={20} />,
  },
  {
    number: "03",
    title: "Build & contribute",
    description:
      "Create a focused branch, make your changes, test them locally, and submit a clean pull request.",
    icon: <GitBranch size={20} />,
  },
  {
    number: "04",
    title: "Get reviewed",
    description:
      "Learn from code review, respond to feedback, improve your implementation, and understand engineering standards.",
    icon: <ShieldCheck size={20} />,
  },
  {
    number: "05",
    title: "Build your proof of work",
    description:
      "Your contributions become public evidence of your technical skills, collaboration, consistency, and problem-solving.",
    icon: <Award size={20} />,
  },
  {
    number: "06",
    title: "Showcase your journey",
    description:
      "Use your GitHub profile, portfolio, resume, LinkedIn, and interviews to explain what you built and learned.",
    icon: <BriefcaseBusiness size={20} />,
  },
];

const SKILLS = [
  "Git & GitHub",
  "Pull Requests",
  "Code Review",
  "Technical Writing",
  "React",
  "TypeScript",
  "JavaScript",
  "APIs",
  "Testing",
  "Accessibility",
  "Open Source",
  "Team Collaboration",
];

const FAQS = [
  {
    question: "Do I need professional experience to contribute?",
    answer:
      "No. Contributions can be matched to your current level. Beginners can start with documentation, examples, small fixes, testing, or beginner-friendly issues and gradually take on larger engineering work.",
  },
  {
    question: "Can open-source contributions help my resume?",
    answer:
      "Yes. Public contributions can give you concrete projects and collaboration examples to discuss. The strongest portfolio evidence explains the problem, your contribution, the technical decisions, and the result rather than simply listing repository names.",
  },
  {
    question: "What should I contribute if I am a beginner?",
    answer:
      "Start with documentation improvements, broken-link fixes, examples, tests, UI fixes, or clearly scoped beginner-friendly issues. The goal is to learn the workflow while producing a useful contribution.",
  },
  {
    question: "Can I contribute without knowing every technology in the repository?",
    answer:
      "Yes. You do not need to know the entire stack before starting. Choose a scoped task, understand the relevant part of the codebase, and learn the missing concepts as you work.",
  },
  {
    question: "How do I explain open-source work in an interview?",
    answer:
      "Explain the problem, why it mattered, what you changed, how you validated it, what feedback you received, and what you learned. Be specific about your own contribution.",
  },
  {
    question: "Is every contribution a job opportunity?",
    answer:
      "No. Open-source contribution should be treated as a way to learn, collaborate, and demonstrate skills. A contribution does not guarantee employment, internships, or paid work.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`${styles.sectionHeading} ${
        align === "left" ? styles.sectionHeadingLeft : ""
      }`}
    >
      <span className={styles.eyebrow}>
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function ContributionCard({ item }: { item: ContributionType }) {
  return (
    <Link className={styles.contributionCard} to={item.href}>
      <div className={styles.cardIcon}>{item.icon}</div>

      <div className={styles.cardArrow}>
        <ArrowUpRight size={18} />
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <div className={styles.skillList}>
        {item.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </Link>
  );
}

function CareerStepCard({ step }: { step: CareerStep }) {
  return (
    <article className={styles.stepCard}>
      <div className={styles.stepTop}>
        <span className={styles.stepNumber}>{step.number}</span>
        <div className={styles.stepIcon}>{step.icon}</div>
      </div>

      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </article>
  );
}

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
      <button
        type="button"
        className={styles.faqButton}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown size={20} />
      </button>

      <div className={styles.faqAnswer}>
        <p>{answer}</p>
      </div>
    </article>
  );
}

export default function OpenSourceContributorPage(): JSX.Element {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredContributions = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return CONTRIBUTION_TYPES;
    }

    return CONTRIBUTION_TYPES.filter((item) => {
      const content = [
        item.title,
        item.description,
        ...item.skills,
      ]
        .join(" ")
        .toLowerCase();

      return content.includes(query);
    });
  }, [search]);

  return (
    <Layout
      title="Open Source Contributor Career Path"
      description="Build real-world experience, create proof of work, and grow your developer career through open-source contribution."
    >
      <main className={styles.page}>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />

          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.liveDot} />
                <Github size={15} />
                Open Source Career Path
              </div>

              <h1>
                Turn your contributions into
                <span> proof of work.</span>
              </h1>

              <p className={styles.heroDescription}>
                Learn by working on real projects, collaborate with other
                developers, and build a public track record that shows what
                you can actually do.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  to="/contributing/"
                >
                  Start Contributing
                  <ArrowRight size={18} />
                </Link>

                <Link
                  className={`${styles.button} ${styles.buttonSecondary}`}
                  to="https://github.com/CodeHarborHub/codeharborhub.github.io"
                >
                  <Github size={18} />
                  Explore GitHub
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <span>
                  <Check size={15} />
                  Beginner friendly
                </span>
                <span>
                  <Check size={15} />
                  Real-world projects
                </span>
                <span>
                  <Check size={15} />
                  Public proof of work
                </span>
              </div>
            </div>

            {/* Terminal / proof-of-work visual */}
            <div className={styles.heroVisual}>
              <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                  <div className={styles.terminalDots}>
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>contribution.sh</span>

                  <Terminal size={15} />
                </div>

                <div className={styles.terminalBody}>
                  <div>
                    <span className={styles.prompt}>$</span>
                    <span>git clone codeharborhub</span>
                  </div>

                  <div>
                    <span className={styles.prompt}>$</span>
                    <span>git checkout -b feature/my-contribution</span>
                  </div>

                  <div className={styles.terminalMuted}>
                    # Learn → Build → Test → Review
                  </div>

                  <div>
                    <span className={styles.prompt}>$</span>
                    <span>git push origin feature/my-contribution</span>
                  </div>

                  <div className={styles.successLine}>
                    <Check size={15} />
                    Pull request ready for review
                  </div>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.floatingTop}`}>
                <GitBranch size={17} />
                <div>
                  <strong>Contribution</strong>
                  <span>PR merged</span>
                </div>
              </div>

              <div
                className={`${styles.floatingCard} ${styles.floatingBottom}`}
              >
                <Award size={17} />
                <div>
                  <strong>Proof of Work</strong>
                  <span>Portfolio ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CAREER VALUE
        ========================================================= */}
        <section className={styles.valueSection}>
          <div className={styles.container}>
            <div className={styles.valueGrid}>
              <div>
                <span className={styles.eyebrow}>
                  <Target size={14} />
                  Why contribute?
                </span>

                <h2>
                  Don't just say
                  <span> “I know it.”</span>
                </h2>

                <p>
                  Show what you have built, fixed, documented, reviewed,
                  tested, and improved.
                </p>
              </div>

              <div className={styles.valueCards}>
                <article>
                  <Code2 size={21} />
                  <strong>Technical Evidence</strong>
                  <span>
                    Demonstrate real implementation rather than only course
                    completion.
                  </span>
                </article>

                <article>
                  <Users size={21} />
                  <strong>Collaboration</strong>
                  <span>
                    Learn branches, pull requests, reviews, discussions, and
                    team workflows.
                  </span>
                </article>

                <article>
                  <GraduationCap size={21} />
                  <strong>Continuous Learning</strong>
                  <span>
                    Work on unfamiliar problems and develop your engineering
                    skills through practice.
                  </span>
                </article>

                <article>
                  <BriefcaseBusiness size={21} />
                  <strong>Career Story</strong>
                  <span>
                    Turn meaningful contributions into concrete portfolio and
                    interview stories.
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTRIBUTION TYPES
        ========================================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="Find your entry point"
              title="There is more than one way to contribute."
              description="Choose work that matches your current skills and gradually expand into larger engineering responsibilities."
            />

            <div className={styles.explorer}>
              <div className={styles.searchBox}>
                <Search size={18} />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search contribution types or skills..."
                  aria-label="Search contribution types"
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
              </div>

              <span className={styles.resultCount}>
                {filteredContributions.length} opportunities
              </span>
            </div>

            {filteredContributions.length > 0 ? (
              <div className={styles.contributionGrid}>
                {filteredContributions.map((item) => (
                  <ContributionCard key={item.title} item={item} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Search size={26} />
                <h3>No matching contribution found</h3>
                <p>Try another technology, skill, or contribution type.</p>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            CAREER PATH
        ========================================================= */}
        <section className={`${styles.section} ${styles.pathSection}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="The contributor journey"
              title="From first contribution to professional proof of work."
              description="A contribution is more valuable when you understand the complete engineering lifecycle around it."
            />

            <div className={styles.stepsGrid}>
              {CAREER_STEPS.map((step) => (
                <CareerStepCard key={step.number} step={step} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SKILLS
        ========================================================= */}
        <section className={styles.skillsSection}>
          <div className={styles.container}>
            <div className={styles.skillsPanel}>
              <div className={styles.skillsContent}>
                <span className={styles.eyebrow}>
                  <Layers3 size={14} />
                  Skills you can develop
                </span>

                <h2>
                  Build skills that
                  <span> compound over time.</span>
                </h2>

                <p>
                  Open-source work can expose you to technical and
                  collaborative practices that are difficult to learn from
                  tutorials alone.
                </p>

                <div className={styles.skillCloud}>
                  {SKILLS.map((skill) => (
                    <span key={skill}>
                      <Check size={14} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillVisual}>
                <div className={styles.skillOrbit}>
                  <div className={styles.orbitRing} />
                  <div className={styles.orbitRing} />
                  <div className={styles.orbitCore}>
                    <Github size={36} />
                    <strong>BUILD</strong>
                    <span>IN PUBLIC</span>
                  </div>

                  <span className={`${styles.orbitNode} ${styles.nodeOne}`}>
                    Code
                  </span>
                  <span className={`${styles.orbitNode} ${styles.nodeTwo}`}>
                    Review
                  </span>
                  <span className={`${styles.orbitNode} ${styles.nodeThree}`}>
                    Ship
                  </span>
                  <span className={`${styles.orbitNode} ${styles.nodeFour}`}>
                    Learn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PORTFOLIO
        ========================================================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.portfolioGrid}>
              <div className={styles.portfolioMockup}>
                <div className={styles.profileHeader}>
                  <div className={styles.avatar}>AD</div>

                  <div>
                    <strong>Developer Profile</strong>
                    <span>Open-source contributor</span>
                  </div>

                  <Star size={17} />
                </div>

                <div className={styles.profileStats}>
                  <div>
                    <strong>12</strong>
                    <span>Contributions</span>
                  </div>
                  <div>
                    <strong>8</strong>
                    <span>PRs</span>
                  </div>
                  <div>
                    <strong>4</strong>
                    <span>Projects</span>
                  </div>
                </div>

                <div className={styles.profileActivity}>
                  <span>Recent contribution</span>

                  <div>
                    <GitBranch size={16} />
                    <strong>Improve authentication flow</strong>
                    <span>merged</span>
                  </div>

                  <div>
                    <Code2 size={16} />
                    <strong>Add responsive dashboard UI</strong>
                    <span>merged</span>
                  </div>
                </div>
              </div>

              <div className={styles.portfolioContent}>
                <span className={styles.eyebrow}>
                  <BriefcaseBusiness size={14} />
                  Build your career evidence
                </span>

                <h2>
                  Your GitHub can become
                  <span> part of your portfolio.</span>
                </h2>

                <p>
                  Instead of only listing technologies on a resume, show
                  concrete examples of how you used them in real repositories
                  and collaborative environments.
                </p>

                <ul className={styles.portfolioList}>
                  <li>
                    <Check size={18} />
                    <div>
                      <strong>Explain the problem</strong>
                      <span>What needed to be improved?</span>
                    </div>
                  </li>

                  <li>
                    <Check size={18} />
                    <div>
                      <strong>Show your implementation</strong>
                      <span>What did you personally build or change?</span>
                    </div>
                  </li>

                  <li>
                    <Check size={18} />
                    <div>
                      <strong>Document the outcome</strong>
                      <span>How did you test and validate the work?</span>
                    </div>
                  </li>

                  <li>
                    <Check size={18} />
                    <div>
                      <strong>Reflect on what you learned</strong>
                      <span>What would you improve next time?</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            OPEN SOURCE + LEARNING LOOP
        ========================================================= */}
        <section className={styles.loopSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="The complete loop"
              title="Learn → Build → Contribute → Showcase"
              description="Use CodeHarborHub as a learning environment and open-source contribution as a way to apply what you learn."
            />

            <div className={styles.loop}>
              <div className={styles.loopItem}>
                <BookOpen size={23} />
                <span>Learn</span>
                <small>Understand concepts</small>
              </div>

              <ArrowRight className={styles.loopArrow} size={22} />

              <div className={styles.loopItem}>
                <Code2 size={23} />
                <span>Build</span>
                <small>Create projects</small>
              </div>

              <ArrowRight className={styles.loopArrow} size={22} />

              <div className={styles.loopItem}>
                <Github size={23} />
                <span>Contribute</span>
                <small>Work with others</small>
              </div>

              <ArrowRight className={styles.loopArrow} size={22} />

              <div className={styles.loopItem}>
                <BriefcaseBusiness size={23} />
                <span>Showcase</span>
                <small>Build your career story</small>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className={styles.section}>
          <div className={styles.containerNarrow}>
            <SectionHeading
              eyebrow="Contributor FAQ"
              title="Questions before you start?"
            />

            <div className={styles.faqList}>
              {FAQS.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === index}
                  onToggle={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className={styles.finalCta}>
          <div className={styles.ctaGrid} />

          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>
                <Globe2 size={25} />
              </div>

              <span className={styles.eyebrow}>
                <Github size={14} />
                Open source starts with one contribution
              </span>

              <h2>
                Build something.
                <span> Make it useful.</span>
              </h2>

              <p>
                Start small, learn the workflow, and gradually take on
                meaningful problems with the community.
              </p>

              <div className={styles.ctaActions}>
                <Link
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  to="/contributing/"
                >
                  View Contribution Guide
                  <ArrowRight size={18} />
                </Link>

                <Link
                  className={`${styles.button} ${styles.buttonGhost}`}
                  to="https://github.com/CodeHarborHub/codeharborhub.github.io/issues"
                >
                  Find an Issue
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.ctaNote}>
                <MessageCircle size={15} />
                Learn publicly. Collaborate respectfully. Ship meaningful work.
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}