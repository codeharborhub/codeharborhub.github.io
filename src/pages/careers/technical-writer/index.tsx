import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Heart,
  Lightbulb,
  MessageSquareText,
  PencilLine,
  Search,
  Sparkles,
  Target,
  Users,
  WandSparkles,
} from "lucide-react";

import styles from "./styles.module.css";

type FAQ = {
  question: string;
  answer: string;
};

const responsibilities = [
  "Write clear, technically accurate tutorials, guides, references, and learning resources.",
  "Transform complex programming concepts into beginner-friendly explanations without losing technical depth.",
  "Work with engineers and subject-matter contributors to validate technical accuracy.",
  "Create structured learning content for HTML, CSS, JavaScript, React, TypeScript, Git, Linux, computer science, AI, and related technologies.",
  "Improve existing documentation based on learner feedback, analytics, technical changes, and content quality reviews.",
  "Design content structures that help learners move from fundamentals to advanced concepts.",
  "Use examples, diagrams, code snippets, exercises, and practical projects to make technical concepts easier to understand.",
  "Maintain consistent terminology, tone, formatting, navigation, and information architecture across documentation.",
  "Contribute to open-source documentation workflows through GitHub issues, pull requests, reviews, and discussions.",
  "Help establish editorial standards, documentation guidelines, and content quality processes for CodeHarborHub.",
];

const requirements = [
  "Strong written communication and the ability to explain technical concepts clearly.",
  "Good understanding of web development and modern software development concepts.",
  "Hands-on familiarity with technologies such as HTML, CSS, JavaScript, Git, or React.",
  "Ability to research technical subjects and verify information before publishing.",
  "Ability to write for developers with different levels of experience.",
  "Strong attention to structure, readability, consistency, and technical correctness.",
  "Comfort working with Markdown, MDX, Git, and GitHub.",
  "Ability to understand and review source code, examples, and technical implementations.",
  "Ability to receive feedback and iterate on content.",
  "Curiosity, ownership, and a genuine interest in helping people learn technology.",
];

const niceToHave = [
  "Experience writing developer documentation or technical tutorials.",
  "Experience with Docusaurus, VitePress, GitBook, or similar documentation platforms.",
  "Experience with React, TypeScript, Node.js, or frontend development.",
  "Knowledge of SEO and content information architecture.",
  "Experience creating Mermaid diagrams or other technical visualizations.",
  "Experience contributing to open-source projects.",
  "Experience with documentation testing, broken-link checking, or CI workflows.",
  "Understanding of accessibility and inclusive technical writing.",
];

const writingPrinciples = [
  {
    icon: Target,
    title: "Clarity over complexity",
    description:
      "Explain difficult concepts in a way that makes the reader feel capable, not overwhelmed.",
  },
  {
    icon: Code2,
    title: "Accuracy matters",
    description:
      "Examples and explanations should work in the real world, not just look good on the page.",
  },
  {
    icon: Users,
    title: "Write for humans",
    description:
      "Understand what learners are trying to accomplish and structure content around their actual needs.",
  },
  {
    icon: PencilLine,
    title: "Keep improving",
    description:
      "Great documentation is never finished. We continuously refine it based on feedback and technology changes.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Research",
    description:
      "Understand the technology, audience, prerequisites, common mistakes, and learning objective.",
    icon: Search,
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Turn the research into a logical content structure with clear progression and useful examples.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Write",
    description:
      "Create concise explanations, examples, diagrams, exercises, and practical learning material.",
    icon: PencilLine,
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Test examples, verify technical claims, review links, and get feedback from technical contributors.",
    icon: Check,
  },
  {
    number: "05",
    title: "Publish",
    description:
      "Ship the content through GitHub-based workflows and make it easy for learners to discover.",
    icon: Globe2,
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Use feedback and real learner behavior to continuously improve the content experience.",
    icon: WandSparkles,
  },
];

const faqs: FAQ[] = [
  {
    question: "Do I need to be a professional technical writer?",
    answer:
      "Not necessarily. Strong technical understanding and the ability to explain concepts clearly are more important than having a specific job title in your previous experience.",
  },
  {
    question: "Can developers apply for this role?",
    answer:
      "Yes. Developers who enjoy teaching, documentation, tutorials, code examples, and explaining technical concepts can be a particularly strong fit.",
  },
  {
    question: "Do I need to know all of the technologies listed?",
    answer:
      "No. You should have solid technical fundamentals and be comfortable learning new technologies. You are not expected to be an expert in every subject.",
  },
  {
    question: "Will I need to write beginner content?",
    answer:
      "Yes, but the role is broader than beginner tutorials. Content can range from introductory explanations to advanced guides, references, workflows, and project-based learning.",
  },
  {
    question: "Do you accept open-source documentation contributions?",
    answer:
      "Yes. Documentation contributions are an important part of the CodeHarborHub ecosystem, and public contributions can demonstrate your ability to work with technical content and collaborative workflows.",
  },
  {
    question: "How is a technical writing candidate evaluated?",
    answer:
      "We look at technical accuracy, clarity, structure, audience awareness, examples, research ability, communication, and how effectively the content helps a reader accomplish something.",
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

export default function TechnicalWriterPage(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const responsibilitiesCount = responsibilities.length;
  const requirementsCount = requirements.length;

  return (
    <Layout
      title="Technical Writer"
      description="Join CodeHarborHub as a Technical Writer and help developers learn complex technology through clear, accurate, practical content."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ===================================================== */}
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
                  <span className={styles.badgeDot} />
                  Content · Open role
                </div>

                <h1>
                  Technical
                  <span> Writer</span>
                </h1>

                <p className={styles.heroLead}>
                  Turn complex technology into documentation developers can
                  understand, trust, and actually use.
                </p>

                <div className={styles.meta}>
                  <span>
                    <Globe2 size={17} />
                    Remote
                  </span>

                  <span>
                    <FileText size={17} />
                    Full-time
                  </span>

                  <span>
                    <BookOpen size={17} />
                    Content & Education
                  </span>
                </div>

                <div className={styles.heroActions}>
                  <a
                    href="https://github.com/CodeHarborHub"
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

              {/* Editorial preview */}
              <div className={styles.editorialVisual}>
                <div className={styles.documentCard}>
                  <div className={styles.documentTop}>
                    <div className={styles.documentDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <span>documentation.mdx</span>

                    <FileText size={15} />
                  </div>

                  <div className={styles.documentBody}>
                    <div className={styles.documentEyebrow}>
                      <BookOpen size={14} />
                      JavaScript fundamentals
                    </div>

                    <h3>Understand the event loop</h3>

                    <p className={styles.fakeLineLong}>
                      JavaScript uses an event loop to coordinate asynchronous
                      operations...
                    </p>

                    <div className={styles.codeSnippet}>
                      <span>
                        <b>console</b>.log(
                        <em>&quot;Learn by building.&quot;</em>);
                      </span>
                    </div>

                    <div className={styles.fakeLines}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className={styles.tipBox}>
                      <Lightbulb size={16} />
                      <span>
                        Explain the concept first. Then show the code.
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingBadge}>
                  <Check size={15} />
                  <span>Technical review</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SUMMARY
        ===================================================== */}
        <section className={styles.summary}>
          <div className={styles.container}>
            <div className={styles.summaryGrid}>
              <div>
                <span>Role</span>
                <strong>Technical Writer</strong>
              </div>

              <div>
                <span>Level</span>
                <strong>Junior / Mid / Senior</strong>
              </div>

              <div>
                <span>Work model</span>
                <strong>Remote-first</strong>
              </div>

              <div>
                <span>Primary focus</span>
                <strong>Developer Education</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ROLE
        ===================================================== */}
        <section id="role" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <div>
                <SectionHeader
                  eyebrow="The opportunity"
                  title="Make technology easier to understand."
                  description="CodeHarborHub is building an open-source learning ecosystem for developers — from their first HTML page to advanced software engineering, AI, and computer science."
                />

                <p className={styles.bodyText}>
                  As a Technical Writer, you will help create the educational
                  layer that makes that ecosystem useful. You will research,
                  explain, structure, test, and continuously improve technical
                  content.
                </p>

                <p className={styles.bodyText}>
                  Your work will not simply fill pages. It will help learners
                  understand why something works, how to use it, what can go
                  wrong, and where to go next.
                </p>

                <p className={styles.bodyText}>
                  You will work closely with engineers, contributors, and
                  educators to turn technical knowledge into high-quality
                  learning experiences.
                </p>
              </div>

              <aside className={styles.impactPanel}>
                <div className={styles.impactIcon}>
                  <MessageSquareText size={22} />
                </div>

                <span className={styles.panelEyebrow}>The mission</span>

                <h3>
                  One clear explanation can unlock an entire technology.
                </h3>

                <p>
                  Help learners move from “I don't understand this” to
                  “I can build this.”
                </p>

                <div className={styles.impactStats}>
                  <div>
                    <strong>{responsibilitiesCount}</strong>
                    <span>Core responsibilities</span>
                  </div>

                  <div>
                    <strong>{requirementsCount}</strong>
                    <span>Core capabilities</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESPONSIBILITIES
        ===================================================== */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="What you'll do"
              title="Own the content from research to publication."
              description="You will work across writing, technical research, information architecture, quality assurance, and open-source collaboration."
            />

            <div className={styles.responsibilityGrid}>
              {responsibilities.map((item, index) => (
                <article className={styles.responsibilityItem} key={item}>
                  <div className={styles.itemNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={styles.itemContent}>
                    <Check size={17} />
                    <p>{item}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            REQUIREMENTS
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.requirementGrid}>
              <article className={styles.requirementCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <PencilLine size={21} />
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
              </article>

              <article className={styles.requirementCard}>
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
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            WRITING PRINCIPLES
        ===================================================== */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="Our writing standard"
              title="We don't just publish words. We build understanding."
              description="Every piece of content should have a clear purpose and make the learner's next step easier."
            />

            <div className={styles.principlesGrid}>
              {writingPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    className={styles.principleCard}
                    key={principle.title}
                  >
                    <div className={styles.principleIcon}>
                      <Icon size={21} />
                    </div>

                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT WORKFLOW
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="How content gets built"
              title="A writing workflow designed for technical quality."
              description="Great technical content combines research, writing, engineering validation, and continuous improvement."
            />

            <div className={styles.workflow}>
              {workflow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article className={styles.workflowItem} key={step.number}>
                    <div className={styles.workflowTop}>
                      <span>{step.number}</span>

                      <div className={styles.workflowIcon}>
                        <Icon size={19} />
                      </div>
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    {index !== workflow.length - 1 && (
                      <ArrowRight className={styles.workflowArrow} size={18} />
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            OPEN SOURCE
        ===================================================== */}
        <section className={styles.openSourceSection}>
          <div className={styles.container}>
            <div className={styles.openSourceCard}>
              <div className={styles.openSourceContent}>
                <div className={styles.openSourceIcon}>
                  <Github size={24} />
                </div>

                <span className={styles.eyebrow}>Open source advantage</span>

                <h2>
                  Your documentation can become part of the public web.
                </h2>

                <p>
                  CodeHarborHub is built in the open. Writers collaborate
                  through GitHub, review technical content with contributors,
                  and improve resources that developers can discover and use
                  freely.
                </p>

                <div className={styles.openSourceActions}>
                  <a
                    href="https://github.com/CodeHarborHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Explore GitHub
                    <ExternalLink size={17} />
                  </a>

                  <Link to="/contributors/" className={styles.secondaryButton}>
                    Meet contributors
                    <Users size={17} />
                  </Link>
                </div>
              </div>

              <div className={styles.markdownPreview}>
                <div className={styles.markdownHeader}>
                  <span>README.md</span>
                  <Github size={16} />
                </div>

                <div className={styles.markdownBody}>
                  <span className={styles.mdHeading}>
                    # Learn by building
                  </span>

                  <span>
                    Build practical knowledge through tutorials,
                    <br />
                    roadmaps and projects.
                  </span>

                  <span className={styles.mdCode}>
                    ```javascript
                  </span>

                  <span>
                    const learner = {"{"}
                    <br />
                    &nbsp;&nbsp;learn: true,
                    <br />
                    &nbsp;&nbsp;build: true
                    <br />
                    {"}"}
                  </span>

                  <span className={styles.mdCode}>```</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <SectionHeader
                eyebrow="Questions"
                title="Before you apply."
                description="A few things candidates commonly want to know about technical writing at CodeHarborHub."
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
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
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

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className={styles.application}>
          <div className={styles.container}>
            <div className={styles.applicationCard}>
              <div className={styles.applicationGlow} />

              <div className={styles.applicationIcon}>
                <BookOpen size={27} />
              </div>

              <span className={styles.eyebrow}>Write something useful</span>

              <h2>
                Help the next developer
                <span> understand what you already know.</span>
              </h2>

              <p>
                If you enjoy learning technology, breaking down difficult
                concepts, and helping other developers grow, we'd love to see
                your work.
              </p>

              <div className={styles.applicationActions}>
                <a
                  href="https://github.com/CodeHarborHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  Apply for this role
                  <ArrowUpRight size={18} />
                </a>

                <Link to="/careers/" className={styles.secondaryButton}>
                  View all opportunities
                  <ArrowRight size={18} />
                </Link>
              </div>

              <small>
                A writing sample, technical article, documentation PR,
                portfolio, or open-source contribution can help demonstrate
                your skills.
              </small>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}