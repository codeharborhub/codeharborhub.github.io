import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Heart,
  Laptop,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import styles from "./styles.module.css";

type FAQ = {
  question: string;
  answer: string;
};

const responsibilities = [
  "Build and maintain polished, accessible, responsive interfaces for CodeHarborHub.",
  "Develop reusable React and TypeScript components that can scale across the platform.",
  "Translate product requirements, designs, and ideas into production-ready experiences.",
  "Work closely with backend, content, community, and product contributors.",
  "Improve frontend performance, Core Web Vitals, SEO, and overall user experience.",
  "Write maintainable, testable, and well-documented frontend code.",
  "Review pull requests and contribute constructive technical feedback.",
  "Identify technical debt and continuously improve frontend architecture.",
  "Build interactive learning experiences including roadmaps, practice systems, dashboards, and developer tools.",
  "Contribute to open-source projects and help establish engineering standards.",
];

const requirements = [
  "Strong understanding of HTML, CSS, and modern JavaScript.",
  "Practical experience with React and TypeScript.",
  "Understanding of responsive design and accessibility.",
  "Experience working with Git and GitHub-based workflows.",
  "Ability to consume REST APIs and work with asynchronous data.",
  "Understanding of component-based architecture and reusable UI patterns.",
  "Ability to debug frontend issues independently.",
  "Good understanding of browser fundamentals and web performance.",
  "Ability to communicate technical ideas clearly.",
  "A strong learning mindset and willingness to contribute in an open-source environment.",
];

const niceToHave = [
  "Experience with Next.js or Docusaurus.",
  "Experience with Tailwind CSS or CSS Modules.",
  "Experience with Framer Motion or other animation libraries.",
  "Experience with Supabase or PostgreSQL-backed applications.",
  "Knowledge of testing with Vitest, Jest, Playwright, or Cypress.",
  "Experience with CI/CD and GitHub Actions.",
  "Open-source contributions or experience maintaining public repositories.",
  "Understanding of SEO, structured data, and Core Web Vitals.",
];

const techStack = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Sparkles,
    title: "UI & UX",
    items: ["CSS Modules", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    icon: Github,
    title: "Engineering",
    items: ["Git", "GitHub", "Code Review", "CI/CD"],
  },
  {
    icon: Globe2,
    title: "Platform",
    items: ["Docusaurus", "Supabase", "REST APIs", "GitHub Pages"],
  },
];

const interviewProcess = [
  {
    number: "01",
    title: "Application review",
    description:
      "We review your application, projects, GitHub activity, and relevant experience.",
  },
  {
    number: "02",
    title: "Intro conversation",
    description:
      "A short conversation about your background, interests, expectations, and why you want to work with us.",
  },
  {
    number: "03",
    title: "Technical discussion",
    description:
      "We discuss frontend fundamentals, architecture, debugging, accessibility, performance, and real-world engineering decisions.",
  },
  {
    number: "04",
    title: "Practical challenge",
    description:
      "You may be asked to solve a focused frontend problem or improve a small interface. We care about your approach, not just the final output.",
  },
  {
    number: "05",
    title: "Team conversation",
    description:
      "Meet contributors and discuss collaboration, ownership, communication, and how you work in an open-source environment.",
  },
  {
    number: "06",
    title: "Decision",
    description:
      "We share the next steps, expectations, and role details clearly.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Is this position remote?",
    answer:
      "The role is designed around remote collaboration. Final working arrangements depend on the specific opportunity and team requirements.",
  },
  {
    question: "Do I need professional experience?",
    answer:
      "Professional experience is valuable, but it is not the only signal we consider. Strong personal projects, internships, open-source contributions, and demonstrated problem-solving can also be meaningful.",
  },
  {
    question: "Can students apply?",
    answer:
      "Yes. If you can demonstrate strong frontend fundamentals and the ability to build real projects, you can apply. Internship opportunities may be a better fit depending on your experience level.",
  },
  {
    question: "Do I need to know every technology in the stack?",
    answer:
      "No. You should be strong in the core frontend technologies. Familiarity with the rest of the stack is helpful, but we expect engineers to learn new tools when needed.",
  },
  {
    question: "Do you consider open-source contributions?",
    answer:
      "Absolutely. Open-source contributions can demonstrate practical engineering ability, collaboration, communication, code quality, and ownership.",
  },
  {
    question: "What should I include in my application?",
    answer:
      "Include your resume or profile, GitHub profile, portfolio if available, relevant projects, and a short explanation of why this role interests you.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function FrontendEngineerPage(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const applicationUrl = useMemo(
    () => "https://github.com/CodeHarborHub",
    [],
  );

  return (
    <Layout
      title="Frontend Engineer"
      description="Join CodeHarborHub as a Frontend Engineer and help build an open-source learning platform for developers."
    >
      <main className={styles.page}>
        {/* ───────────────── HERO ───────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <Link to="/careers/" className={styles.backLink}>
              <ArrowLeft size={16} />
              Back to careers
            </Link>

            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  Engineering · Open role
                </div>

                <h1>
                  Frontend
                  <span> Engineer</span>
                </h1>

                <p className={styles.heroLead}>
                  Build fast, accessible, beautiful experiences that help
                  millions of developers learn, practice, build, and grow.
                </p>

                <div className={styles.meta}>
                  <span>
                    <MapPin size={17} />
                    Remote
                  </span>

                  <span>
                    <BriefcaseBusiness size={17} />
                    Full-time
                  </span>

                  <span>
                    <Code2 size={17} />
                    Engineering
                  </span>
                </div>

                <div className={styles.heroActions}>
                  <a
                    href={applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Apply for this role
                    <ArrowUpRight size={18} />
                  </a>

                  <Link to="#role" className={styles.secondaryButton}>
                    Explore the role
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.codeWindow}>
                  <div className={styles.windowBar}>
                    <span />
                    <span />
                    <span />

                    <small>frontend.tsx</small>
                  </div>

                  <div className={styles.codeBody}>
                    <p>
                      <i>01</i>
                      <b>const</b> platform = {"{"}
                    </p>
                    <p>
                      <i>02</i>
                      &nbsp;&nbsp;learn: <em>true</em>,
                    </p>
                    <p>
                      <i>03</i>
                      &nbsp;&nbsp;practice: <em>true</em>,
                    </p>
                    <p>
                      <i>04</i>
                      &nbsp;&nbsp;build: <em>true</em>,
                    </p>
                    <p>
                      <i>05</i>
                      &nbsp;&nbsp;openSource: <em>true</em>,
                    </p>
                    <p>
                      <i>06</i>
                      &nbsp;&nbsp;impact: <em>"global"</em>,
                    </p>
                    <p>
                      <i>07</i>
                      {"}"}
                    </p>
                    <p className={styles.codeCursor}>
                      <i>08</i>▌
                    </p>
                  </div>
                </div>

                <div className={styles.floatingCard}>
                  <Rocket size={18} />
                  <div>
                    <strong>Build at scale</strong>
                    <span>Real users. Real impact.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── QUICK SUMMARY ───────────────── */}
        <section className={styles.summary}>
          <div className={styles.container}>
            <div className={styles.summaryGrid}>
              <div>
                <span>Role</span>
                <strong>Frontend Engineer</strong>
              </div>

              <div>
                <span>Level</span>
                <strong>Mid / Senior</strong>
              </div>

              <div>
                <span>Work model</span>
                <strong>Remote-first</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Developer Education</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── ROLE ───────────────── */}
        <section id="role" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <div>
                <SectionHeader
                  eyebrow="The opportunity"
                  title="Build the frontend developers actually want to use."
                  description="CodeHarborHub is building an open-source ecosystem where developers can learn concepts, follow roadmaps, practice problems, build projects, and contribute to the community."
                />

                <p className={styles.bodyText}>
                  As a Frontend Engineer, you will help turn that vision into
                  fast, accessible, reliable, and enjoyable products. You will
                  work on user-facing experiences where frontend engineering
                  directly affects how people learn.
                </p>

                <p className={styles.bodyText}>
                  This is not a role where you only implement predefined
                  designs. You will have opportunities to influence component
                  architecture, interaction patterns, performance, developer
                  experience, and product decisions.
                </p>
              </div>

              <div className={styles.highlightPanel}>
                <div className={styles.panelIcon}>
                  <Zap size={22} />
                </div>

                <span className={styles.panelEyebrow}>Your impact</span>

                <h3>
                  Turn complex technology into simple learning experiences.
                </h3>

                <p>
                  From interactive tutorials to dashboards, roadmaps,
                  challenges, and developer tools — your work will directly
                  shape the learning experience.
                </p>

                <div className={styles.panelStats}>
                  <div>
                    <strong>01</strong>
                    <span>Product ownership</span>
                  </div>

                  <div>
                    <strong>∞</strong>
                    <span>Learning opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── RESPONSIBILITIES ───────────────── */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="What you'll do"
              title="Own meaningful frontend engineering work."
              description="You will contribute across the product lifecycle — from architecture and implementation to performance, quality, and iteration."
            />

            <div className={styles.responsibilityGrid}>
              {responsibilities.map((item, index) => (
                <div className={styles.checkItem} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <Check size={17} />
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── REQUIREMENTS ───────────────── */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <div className={styles.requirementCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <span>Required</span>
                    <h3>What you should bring</h3>
                  </div>
                </div>

                <ul className={styles.requirementList}>
                  {requirements.map((item) => (
                    <li key={item}>
                      <Check size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.requirementCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <Sparkles size={21} />
                  </div>

                  <div>
                    <span>Bonus</span>
                    <h3>Great if you also have</h3>
                  </div>
                </div>

                <ul className={styles.requirementList}>
                  {niceToHave.map((item) => (
                    <li key={item}>
                      <Check size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── TECH STACK ───────────────── */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Our stack"
              title="Technologies you'll work with."
              description="You don't need to know everything on day one. Strong fundamentals and the ability to learn matter more than checking every box."
            />

            <div className={styles.stackGrid}>
              {techStack.map((group) => {
                const Icon = group.icon;

                return (
                  <article className={styles.stackCard} key={group.title}>
                    <div className={styles.stackIcon}>
                      <Icon size={20} />
                    </div>

                    <h3>{group.title}</h3>

                    <div className={styles.tagList}>
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────── WHAT WE VALUE ───────────────── */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="How we work"
              title="Engineering is more than writing code."
              description="We look for people who care about the outcome, the users, and the people they build with."
            />

            <div className={styles.valuesGrid}>
              <article>
                <Users size={22} />
                <h3>Think in systems</h3>
                <p>
                  Build reusable solutions instead of solving the same problem
                  repeatedly.
                </p>
              </article>

              <article>
                <Heart size={22} />
                <h3>Care about users</h3>
                <p>
                  Good engineering should make difficult technology easier to
                  understand and use.
                </p>
              </article>

              <article>
                <Github size={22} />
                <h3>Build in the open</h3>
                <p>
                  Share knowledge, review code, document decisions, and help
                  the community grow.
                </p>
              </article>

              <article>
                <Laptop size={22} />
                <h3>Own your work</h3>
                <p>
                  Take responsibility from the first idea through production
                  and continuous improvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ───────────────── INTERVIEW ───────────────── */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Hiring process"
              title="A practical, transparent process."
              description="We want to understand how you think and build — not make you memorize algorithms for the sake of an interview."
            />

            <div className={styles.process}>
              {interviewProcess.map((step, index) => (
                <div className={styles.processItem} key={step.number}>
                  <div className={styles.processNumber}>{step.number}</div>

                  <div className={styles.processLine}>
                    {index !== interviewProcess.length - 1 && <span />}
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

        {/* ───────────────── FAQ ───────────────── */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <SectionHeader
                eyebrow="Questions"
                title="Before you apply."
                description="A few answers to common questions about the role and our hiring process."
              />

              <div className={styles.faqList}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      className={`${styles.faqItem} ${
                        isOpen ? styles.faqOpen : ""
                      }`}
                      key={faq.question}
                    >
                      <button
                        type="button"
                        className={styles.faqButton}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>

                        <ChevronDown
                          size={19}
                          className={styles.chevron}
                        />
                      </button>

                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── APPLICATION ───────────────── */}
        <section className={styles.application}>
          <div className={styles.container}>
            <div className={styles.applicationCard}>
              <div className={styles.applicationGlow} />

              <div className={styles.applicationIcon}>
                <Code2 size={27} />
              </div>

              <span className={styles.eyebrow}>Ready to build?</span>

              <h2>
                Your next commit could help
                <span> thousands of developers.</span>
              </h2>

              <p>
                If this role sounds like you, we'd love to see what you've
                built. Show us your projects, your thinking, and what you want
                to build next.
              </p>

              <div className={styles.applicationActions}>
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
                  View all opportunities
                  <ArrowRight size={17} />
                </Link>
              </div>

              <small>
                Don't have a traditional resume? Your GitHub, portfolio, and
                open-source work can tell us a lot.
              </small>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}