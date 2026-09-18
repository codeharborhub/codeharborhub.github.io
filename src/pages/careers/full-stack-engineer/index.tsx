import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Heart,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

import styles from "./styles.module.css";

type FAQ = {
  question: string;
  answer: string;
};

const responsibilities = [
  "Design and build end-to-end product features across the frontend, backend, database, and API layers.",
  "Develop scalable React and TypeScript interfaces for learning, practice, projects, dashboards, and community experiences.",
  "Build reliable backend services, REST APIs, authentication flows, and data-driven application features.",
  "Design clean database schemas and efficient queries for application data and user workflows.",
  "Integrate third-party services and APIs while keeping security, reliability, and maintainability in mind.",
  "Collaborate with frontend engineers, designers, technical writers, community contributors, and product stakeholders.",
  "Own features from technical design and implementation through testing, deployment, monitoring, and iteration.",
  "Review pull requests, improve engineering standards, and contribute to architectural decisions.",
  "Investigate production issues, debug across the stack, and improve application performance.",
  "Contribute to the open-source ecosystem and help make CodeHarborHub easier for other developers to build on.",
];

const requirements = [
  "Strong fundamentals in JavaScript or TypeScript.",
  "Practical experience building applications with React.",
  "Experience developing backend applications and APIs.",
  "Good understanding of HTTP, REST APIs, authentication, and asynchronous programming.",
  "Working knowledge of relational databases and SQL.",
  "Comfortable with Git and GitHub-based development workflows.",
  "Understanding of application security fundamentals.",
  "Ability to debug problems across frontend and backend layers.",
  "Understanding of responsive UI development and browser fundamentals.",
  "Ability to independently break large product requirements into smaller technical tasks.",
];

const niceToHave = [
  "Experience with Node.js, Express, NestJS, or similar backend frameworks.",
  "Experience with Supabase, PostgreSQL, or other managed databases.",
  "Experience with Next.js or Docusaurus.",
  "Experience with TypeScript across the full stack.",
  "Knowledge of Docker and containerized development.",
  "Experience with GitHub Actions or other CI/CD systems.",
  "Experience with automated testing and end-to-end testing.",
  "Understanding of caching, queues, background jobs, or event-driven systems.",
  "Open-source contributions or experience maintaining public repositories.",
  "Experience building developer tools, EdTech products, or community platforms.",
];

const architecture = [
  {
    icon: Globe2,
    title: "Experience layer",
    description:
      "Build intuitive learning, practice, project, dashboard, and community experiences.",
    tags: ["React", "TypeScript", "Docusaurus"],
  },
  {
    icon: Network,
    title: "Application layer",
    description:
      "Connect product experiences through clean APIs, authentication, business logic, and integrations.",
    tags: ["REST APIs", "Auth", "Services"],
  },
  {
    icon: Database,
    title: "Data layer",
    description:
      "Design reliable data models for users, learning progress, projects, contributions, and platform activity.",
    tags: ["PostgreSQL", "SQL", "Supabase"],
  },
  {
    icon: Cloud,
    title: "Infrastructure",
    description:
      "Keep the platform deployable, observable, secure, and reliable as usage grows.",
    tags: ["GitHub", "CI/CD", "Cloud"],
  },
];

const stack = [
  {
    icon: Code2,
    title: "Frontend",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    technologies: ["Node.js", "REST APIs", "Authentication", "Services"],
  },
  {
    icon: Database,
    title: "Data",
    technologies: ["PostgreSQL", "Supabase", "SQL", "Data Modeling"],
  },
  {
    icon: Terminal,
    title: "Engineering",
    technologies: ["Git", "GitHub", "CI/CD", "Testing"],
  },
];

const engineeringPrinciples = [
  {
    icon: Layers3,
    title: "Think end-to-end",
    description:
      "Understand how a feature moves from interface to API, database, infrastructure, and back to the user.",
  },
  {
    icon: LockKeyhole,
    title: "Security by default",
    description:
      "Treat authentication, authorization, validation, secrets, and user data as core engineering concerns.",
  },
  {
    icon: Zap,
    title: "Optimize for impact",
    description:
      "Choose practical architecture that solves the real problem without unnecessary complexity.",
  },
  {
    icon: Users,
    title: "Build with others",
    description:
      "Communicate decisions, review code thoughtfully, document important context, and make contributors successful.",
  },
];

const process = [
  {
    number: "01",
    title: "Application review",
    description:
      "We review your experience, GitHub activity, portfolio, projects, and relevant technical work.",
  },
  {
    number: "02",
    title: "Intro conversation",
    description:
      "A short discussion about your background, interests, engineering experience, and what you want to build.",
  },
  {
    number: "03",
    title: "Full-stack technical discussion",
    description:
      "We explore frontend, backend, APIs, databases, security, architecture, debugging, and engineering trade-offs.",
  },
  {
    number: "04",
    title: "Practical engineering task",
    description:
      "You may work through a realistic feature or debugging problem covering multiple parts of the stack.",
  },
  {
    number: "05",
    title: "Architecture conversation",
    description:
      "We discuss how you would design, scale, secure, test, and evolve a real product feature.",
  },
  {
    number: "06",
    title: "Team conversation",
    description:
      "We talk about collaboration, ownership, communication, open source, and how you work with other engineers.",
  },
  {
    number: "07",
    title: "Final decision",
    description:
      "We share the outcome and next steps clearly, including expectations for the role.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Is this role remote?",
    answer:
      "The role is designed around remote-first collaboration. Specific working arrangements can depend on the opportunity and team requirements.",
  },
  {
    question: "Do I need to be equally strong in frontend and backend?",
    answer:
      "You should be comfortable working across the stack, but we do not expect every engineer to have identical depth everywhere. Strong fundamentals, practical experience, and the ability to learn are important.",
  },
  {
    question: "Which backend technology do you use?",
    answer:
      "The platform can use Node.js-based services, REST APIs, and Supabase/PostgreSQL depending on the product area. The exact stack can evolve as the platform grows.",
  },
  {
    question: "Is database knowledge required?",
    answer:
      "Yes. You should understand relational data modeling, SQL fundamentals, relationships, indexes at a conceptual level, and how application code interacts with persistent data.",
  },
  {
    question: "Can junior developers apply?",
    answer:
      "This particular position is intended for engineers who already have meaningful full-stack project experience. If you are earlier in your journey, internships and contributor opportunities may be a better starting point.",
  },
  {
    question: "Do open-source contributions matter?",
    answer:
      "Yes. Open-source work is especially relevant because our engineering culture values public collaboration, code review, documentation, ownership, and community contribution.",
  },
];

export default function FullStackEngineerPage(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const applicationUrl = "https://github.com/CodeHarborHub";

  return (
    <Layout
      title="Full Stack Engineer"
      description="Join CodeHarborHub as a Full Stack Engineer and build scalable learning, practice, community, and developer experiences."
    >
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <Link to="/careers/" className={styles.backLink}>
              <ArrowLeft size={16} />
              Back to careers
            </Link>

            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>
                  <span />
                  Engineering · Full-time · Remote
                </div>

                <h1>
                  Full Stack
                  <strong> Engineer</strong>
                </h1>

                <p className={styles.heroLead}>
                  Build the systems behind a developer learning platform —
                  from beautiful interfaces and APIs to databases,
                  authentication, infrastructure, and everything in between.
                </p>

                <div className={styles.meta}>
                  <span>
                    <MapPinIcon />
                    Remote-first
                  </span>

                  <span>
                    <BriefcaseBusiness size={17} />
                    Full-time
                  </span>

                  <span>
                    <Layers3 size={17} />
                    Product Engineering
                  </span>
                </div>

                <div className={styles.actions}>
                  <a
                    href={applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Apply for this role
                    <ArrowUpRight size={18} />
                  </a>

                  <Link to="#overview" className={styles.secondaryButton}>
                    Explore the role
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <div className={styles.heroTrust}>
                  <Check size={15} />
                  <span>
                    Real product ownership · Open source · Developer impact
                  </span>
                </div>
              </div>

              {/* Architecture visual */}
              <div className={styles.architectureVisual}>
                <div className={styles.architectureCard}>
                  <div className={styles.archHeader}>
                    <div>
                      <span>CODEHARBORHUB</span>
                      <strong>Application Architecture</strong>
                    </div>

                    <div className={styles.status}>
                      <span />
                      SYSTEM ONLINE
                    </div>
                  </div>

                  <div className={styles.archDiagram}>
                    <div className={styles.archNode}>
                      <Globe2 size={18} />
                      <div>
                        <strong>Web Experience</strong>
                        <small>React · TypeScript</small>
                      </div>
                    </div>

                    <div className={styles.connector}>
                      <span />
                    </div>

                    <div className={styles.archNode}>
                      <Network size={18} />
                      <div>
                        <strong>API & Services</strong>
                        <small>Auth · Business Logic</small>
                      </div>
                    </div>

                    <div className={styles.connector}>
                      <span />
                    </div>

                    <div className={styles.archNode}>
                      <Database size={18} />
                      <div>
                        <strong>Data Layer</strong>
                        <small>PostgreSQL · Supabase</small>
                      </div>
                    </div>

                    <div className={styles.archFooter}>
                      <div>
                        <span>LATENCY</span>
                        <strong>LOW</strong>
                      </div>

                      <div>
                        <span>SECURITY</span>
                        <strong>FIRST</strong>
                      </div>

                      <div>
                        <span>QUALITY</span>
                        <strong>HIGH</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingCard}>
                  <Rocket size={18} />
                  <div>
                    <strong>Ship end-to-end</strong>
                    <span>Idea → Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROLE SNAPSHOT */}
        <section className={styles.snapshot}>
          <div className={styles.container}>
            <div className={styles.snapshotGrid}>
              <div>
                <span>Role</span>
                <strong>Full Stack Engineer</strong>
              </div>

              <div>
                <span>Level</span>
                <strong>Mid / Senior</strong>
              </div>

              <div>
                <span>Environment</span>
                <strong>Remote-first</strong>
              </div>

              <div>
                <span>Domain</span>
                <strong>Developer Education</strong>
              </div>

              <div>
                <span>Ownership</span>
                <strong>End-to-end</strong>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <div>
                <SectionHeader
                  eyebrow="The opportunity"
                  title="Build the platform behind the learning experience."
                  description="CodeHarborHub is building an open-source ecosystem where developers can learn, practice, build projects, explore roadmaps, and collaborate with other developers."
                />

                <p className={styles.bodyText}>
                  As a Full Stack Engineer, you will work across the entire
                  product surface. One day you might build a React learning
                  experience. Another day you could design an API, improve a
                  database query, implement authentication, or troubleshoot a
                  production issue.
                </p>

                <p className={styles.bodyText}>
                  The goal is not simply to add more features. The goal is to
                  build a platform that is fast, reliable, maintainable,
                  secure, and genuinely useful to developers at different
                  stages of their careers.
                </p>

                <p className={styles.bodyText}>
                  You will have meaningful influence over technical decisions
                  and the opportunity to work on systems that connect
                  education, open source, community, and developer tooling.
                </p>
              </div>

              <aside className={styles.impactCard}>
                <div className={styles.impactIcon}>
                  <Sparkles size={22} />
                </div>

                <span>ENGINEERING IMPACT</span>

                <h3>
                  Don't just build screens. Build the systems behind them.
                </h3>

                <p>
                  Own features across the stack and understand how each
                  technical decision affects learners, contributors, and the
                  long-term platform.
                </p>

                <div className={styles.impactMetrics}>
                  <div>
                    <strong>UI</strong>
                    <span>Experience</span>
                  </div>

                  <div>
                    <strong>API</strong>
                    <span>Services</span>
                  </div>

                  <div>
                    <strong>DB</strong>
                    <span>Data</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="What you'll build"
              title="Think across the entire stack."
              description="Our engineers work across product boundaries. You should be comfortable understanding how the different layers connect."
            />

            <div className={styles.archGrid}>
              {architecture.map((item) => {
                const Icon = item.icon;

                return (
                  <article className={styles.archItem} key={item.title}>
                    <div className={styles.archIcon}>
                      <Icon size={21} />
                    </div>

                    <span className={styles.archNumber}>
                      0{architecture.indexOf(item) + 1}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESPONSIBILITIES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Responsibilities"
              title="What you'll own."
              description="You will have responsibility beyond implementation — from technical thinking to production quality."
            />

            <div className={styles.responsibilityGrid}>
              {responsibilities.map((item, index) => (
                <div className={styles.responsibility} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <Check size={17} />

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <RequirementCard
                icon={ShieldIcon}
                eyebrow="Required"
                title="Core experience"
                items={requirements}
              />

              <RequirementCard
                icon={Sparkles}
                eyebrow="Bonus"
                title="Nice to have"
                items={niceToHave}
              />
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Technology"
              title="Our engineering toolbox."
              description="The stack can evolve. Strong engineering fundamentals matter more than knowing a particular framework."
            />

            <div className={styles.stackGrid}>
              {stack.map((item) => {
                const Icon = item.icon;

                return (
                  <article className={styles.stackCard} key={item.title}>
                    <div className={styles.stackTop}>
                      <div className={styles.stackIcon}>
                        <Icon size={20} />
                      </div>

                      <ArrowUpRight size={16} />
                    </div>

                    <h3>{item.title}</h3>

                    <div className={styles.stackTags}>
                      {item.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Engineering principles"
              title="How we expect engineers to think."
              description="Good architecture is important. Good engineering judgment is even more important."
            />

            <div className={styles.principlesGrid}>
              {engineeringPrinciples.map((item) => {
                const Icon = item.icon;

                return (
                  <article className={styles.principle} key={item.title}>
                    <Icon size={22} />

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERVIEW PROCESS */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Hiring process"
              title="Show us how you think."
              description="Our process focuses on practical engineering, architecture, communication, and problem solving."
            />

            <div className={styles.process}>
              {process.map((step, index) => (
                <div className={styles.processItem} key={step.number}>
                  <div className={styles.processNumber}>{step.number}</div>

                  <div className={styles.processRail}>
                    {index !== process.length - 1 && <span />}
                  </div>

                  <div className={styles.processContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${styles.section} ${styles.muted}`}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <SectionHeader
                eyebrow="FAQ"
                title="Before you apply."
                description="A few things worth knowing about the role and our engineering environment."
              />

              <div className={styles.faqList}>
                {faqs.map((faq, index) => {
                  const open = openFaq === index;

                  return (
                    <div
                      className={`${styles.faqItem} ${
                        open ? styles.open : ""
                      }`}
                      key={faq.question}
                    >
                      <button
                        type="button"
                        className={styles.faqButton}
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? null : index)}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={19} />
                      </button>

                      <div className={styles.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaGlow} />

              <div className={styles.ctaIcon}>
                <Code2 size={28} />
              </div>

              <span className={styles.eyebrow}>YOUR NEXT BUILD</span>

              <h2>
                Build something that
                <strong> developers remember.</strong>
              </h2>

              <p>
                If you enjoy moving between interfaces, APIs, databases, and
                architecture — and want your work to have a real impact on
                developers — we'd love to hear from you.
              </p>

              <div className={styles.ctaActions}>
                <a
                  href={applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  Apply for this role
                  <ExternalLink size={17} />
                </a>

                <Link to="/careers/" className={styles.secondaryButton}>
                  Explore other roles
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.ctaNote}>
                <Github size={15} />
                <span>
                  Your GitHub, projects, and technical work can tell us more
                  than a traditional resume.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/* ─────────────────────────────────────────────
   Reusable components
───────────────────────────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function RequirementCard({
  icon: Icon,
  eyebrow,
  title,
  items,
}: {
  icon: React.ComponentType<{ size?: number }>;
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <article className={styles.requirementCard}>
      <div className={styles.requirementHeader}>
        <div className={styles.requirementIcon}>
          <Icon size={21} />
        </div>

        <div>
          <span>{eyebrow}</span>
          <h3>{title}</h3>
        </div>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function MapPinIcon() {
  return <span className={styles.mapPin}>●</span>;
}

function ShieldIcon({ size = 21 }: { size?: number }) {
  return <LockKeyhole size={size} />;
}