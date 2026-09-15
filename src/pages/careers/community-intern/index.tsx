import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  Compass,
  ExternalLink,
  Github,
  Globe2,
  Heart,
  Lightbulb,
  MessageCircle,
  Megaphone,
  Network,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import styles from "./styles.module.css";

type FAQ = {
  question: string;
  answer: string;
};

const responsibilities = [
  "Help grow and maintain a welcoming developer community around CodeHarborHub.",
  "Welcome new contributors and help them understand how to participate in the project.",
  "Support community discussions across GitHub, Discord, social platforms, and other community channels.",
  "Help organize online events, workshops, learning sessions, contributor activities, and community campaigns.",
  "Identify common questions, blockers, and feedback from learners and contributors.",
  "Create community announcements, event posts, contributor updates, and educational content.",
  "Help maintain contributor documentation, onboarding resources, FAQs, and community guidelines.",
  "Encourage developers to participate in open-source projects, challenges, discussions, and learning activities.",
  "Track community engagement and identify opportunities to improve participation and retention.",
  "Work with engineering, content, design, and education contributors to turn community feedback into useful improvements.",
];

const requirements = [
  "Strong communication skills and willingness to interact with developers and learners.",
  "Genuine interest in technology, developer communities, education, or open source.",
  "Comfortable communicating through written messages, discussions, and community platforms.",
  "Basic understanding of GitHub and the open-source contribution workflow.",
  "Ability to organize tasks, events, conversations, and community activities.",
  "Ability to listen to community feedback and communicate it clearly to the team.",
  "Positive, respectful, inclusive, and learner-first mindset.",
  "Ability to work independently and take ownership of assigned community initiatives.",
];

const niceToHave = [
  "Previous experience managing a student, developer, coding, or open-source community.",
  "Experience with Discord, GitHub Discussions, Slack, WhatsApp communities, or similar platforms.",
  "Experience organizing hackathons, workshops, meetups, webinars, or developer events.",
  "Basic knowledge of social media content and community growth.",
  "Experience contributing to open-source projects.",
  "Basic understanding of web development or programming.",
  "Experience creating Canva/Figma graphics, short videos, or community announcements.",
  "Understanding of community analytics and engagement metrics.",
];

const communityPillars = [
  {
    icon: Heart,
    title: "Welcome",
    description:
      "Make every learner and contributor feel that they have a place here.",
  },
  {
    icon: Network,
    title: "Connect",
    description:
      "Bring developers together around learning, collaboration, projects, and open source.",
  },
  {
    icon: Rocket,
    title: "Activate",
    description:
      "Turn passive visitors into learners, contributors, builders, and community members.",
  },
  {
    icon: Lightbulb,
    title: "Listen",
    description:
      "Collect feedback and help the product evolve around real community needs.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand what learners, contributors, and developers need from the community.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Turn ideas into events, discussions, campaigns, content, and community initiatives.",
    icon: Target,
  },
  {
    number: "03",
    title: "Engage",
    description:
      "Start conversations, welcome members, answer questions, and encourage participation.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Organize",
    description:
      "Help run workshops, contributor programs, challenges, and developer events.",
    icon: CalendarDays,
  },
  {
    number: "05",
    title: "Measure",
    description:
      "Look at participation, feedback, retention, and other useful community signals.",
    icon: Network,
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Use what you learn to make the community more useful, welcoming, and active.",
    icon: Sparkles,
  },
];

const faqs: FAQ[] = [
  {
    question: "Do I need professional community-management experience?",
    answer:
      "No. This internship is designed for people who want to learn community building. What matters most is communication, initiative, empathy, organization, and genuine interest in helping developers.",
  },
  {
    question: "Do I need to be a programmer?",
    answer:
      "You do not need to be an advanced programmer. However, familiarity with programming, GitHub, or developer communities will help you understand the people you are supporting.",
  },
  {
    question: "What platforms will I work with?",
    answer:
      "Depending on the community's needs, you may work with GitHub, Discord, social platforms, newsletters, event tools, documentation, and other collaboration channels.",
  },
  {
    question: "Can I organize my own community initiative?",
    answer:
      "Yes. Ownership is encouraged. If you identify a useful workshop, contributor campaign, event, discussion, or onboarding improvement, you can propose it and help take it from idea to execution.",
  },
  {
    question: "Is this only about social media?",
    answer:
      "No. Social media is only one part of community work. The role also includes contributor onboarding, events, discussions, feedback collection, documentation, open-source engagement, and improving the overall community experience.",
  },
  {
    question: "Can community work lead to other roles?",
    answer:
      "Community experience can build valuable skills in developer relations, developer advocacy, content, product, education, operations, event management, and open-source program management.",
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

export default function CommunityInternPage(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Community Intern"
      description="Join CodeHarborHub as a Community Intern and help build an open, welcoming developer community around learning, open source, and collaboration."
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
                  Community · Internship
                </div>

                <h1>
                  Community
                  <span> Intern</span>
                </h1>

                <p className={styles.heroLead}>
                  Help developers learn, connect, contribute, and build
                  together in one of the most important parts of CodeHarborHub:
                  its community.
                </p>

                <div className={styles.meta}>
                  <span>
                    <Globe2 size={17} />
                    Remote
                  </span>

                  <span>
                    <Users size={17} />
                    Internship
                  </span>

                  <span>
                    <Code2 size={17} />
                    Developer Community
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

              {/* Community visual */}
              <div className={styles.communityVisual}>
                <div className={styles.networkCard}>
                  <div className={styles.networkHeader}>
                    <div className={styles.windowDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <span>community</span>

                    <Users size={15} />
                  </div>

                  <div className={styles.networkBody}>
                    <div className={styles.networkTitle}>
                      <div className={styles.communityIcon}>
                        <Users size={19} />
                      </div>

                      <div>
                        <strong>Developer Community</strong>
                        <span>CodeHarborHub</span>
                      </div>
                    </div>

                    <div className={styles.members}>
                      <div className={styles.avatarStack}>
                        <span>A</span>
                        <span>R</span>
                        <span>S</span>
                        <span>+</span>
                      </div>

                      <small>Developers building together</small>
                    </div>

                    <div className={styles.messageList}>
                      <div className={styles.message}>
                        <span className={styles.messageAvatar}>A</span>

                        <div>
                          <strong>Ajay</strong>
                          <p>Welcome to the contributor community! 👋</p>
                        </div>
                      </div>

                      <div className={styles.message}>
                        <span className={styles.messageAvatar}>D</span>

                        <div>
                          <strong>Developer</strong>
                          <p>
                            I just opened my first documentation PR.
                          </p>
                        </div>
                      </div>

                      <div className={styles.message}>
                        <span className={styles.messageAvatar}>C</span>

                        <div>
                          <strong>Community</strong>
                          <p>That's awesome. Let's get it reviewed 🚀</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.communityInput}>
                      <MessageCircle size={15} />
                      <span>Start a conversation...</span>
                    </div>
                  </div>
                </div>

                <div className={styles.floatingBadge}>
                  <Heart size={15} />
                  <span>People first</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ROLE SNAPSHOT
        ===================================================== */}
        <section className={styles.summary}>
          <div className={styles.container}>
            <div className={styles.summaryGrid}>
              <div>
                <span>Role</span>
                <strong>Community Intern</strong>
              </div>

              <div>
                <span>Level</span>
                <strong>Internship</strong>
              </div>

              <div>
                <span>Work model</span>
                <strong>Remote-first</strong>
              </div>

              <div>
                <span>Primary focus</span>
                <strong>Developer Community</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ROLE OVERVIEW
        ===================================================== */}
        <section id="role" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.twoColumn}>
              <div>
                <SectionHeader
                  eyebrow="The opportunity"
                  title="Build the community behind the code."
                  description="Great developer platforms are not only made of documentation and code. They are built by people helping people."
                />

                <p className={styles.bodyText}>
                  As a Community Intern, you will help create an environment
                  where developers feel comfortable asking questions, sharing
                  ideas, contributing to open source, attending events, and
                  learning together.
                </p>

                <p className={styles.bodyText}>
                  You will work across community engagement, contributor
                  onboarding, events, communication, feedback collection, and
                  community programs.
                </p>

                <p className={styles.bodyText}>
                  This is a hands-on role. Instead of simply posting content,
                  you will learn how communities actually grow: by creating
                  useful experiences, listening carefully, and helping people
                  take their next step.
                </p>
              </div>

              <aside className={styles.impactPanel}>
                <div className={styles.impactIcon}>
                  <Heart size={22} />
                </div>

                <span className={styles.panelEyebrow}>Your impact</span>

                <h3>
                  Help turn a collection of developers into a real community.
                </h3>

                <p>
                  Every welcome message, useful event, answered question, and
                  contributor connection can become someone's reason to keep
                  learning and building.
                </p>

                <div className={styles.impactStats}>
                  <div>
                    <strong>Learn</strong>
                    <span>Community operations</span>
                  </div>

                  <div>
                    <strong>Build</strong>
                    <span>Real initiatives</span>
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
              title="Turn community ideas into real experiences."
              description="You will work across communication, contributor engagement, events, content, feedback, and community operations."
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
                    <Users size={21} />
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
            COMMUNITY PILLARS
        ===================================================== */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="How we think about community"
              title="Community is more than engagement numbers."
              description="A healthy developer community should help people feel welcome, connected, capable, and motivated to contribute."
            />

            <div className={styles.pillarsGrid}>
              {communityPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article className={styles.pillarCard} key={pillar.title}>
                    <div className={styles.pillarIcon}>
                      <Icon size={21} />
                    </div>

                    <h3>{pillar.title}</h3>

                    <p>{pillar.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            WORKFLOW
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeader
              eyebrow="How you'll work"
              title="From community signal to meaningful action."
              description="You will learn a repeatable approach for understanding community needs and turning them into useful initiatives."
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
            POSSIBLE PROJECTS
        ===================================================== */}
        <section className={styles.projectSection}>
          <div className={styles.container}>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <span className={styles.eyebrow}>Build something real</span>

                <h2>
                  Your internship can become more than a list of tasks.
                </h2>

                <p>
                  We encourage interns to identify community problems and
                  propose solutions. You could own a contributor onboarding
                  improvement, a developer event series, a community campaign,
                  or a new learning-community program.
                </p>

                <div className={styles.projectList}>
                  <div>
                    <Check size={17} />
                    Contributor onboarding
                  </div>

                  <div>
                    <Check size={17} />
                    Developer workshops
                  </div>

                  <div>
                    <Check size={17} />
                    Community campaigns
                  </div>

                  <div>
                    <Check size={17} />
                    Open-source programs
                  </div>

                  <div>
                    <Check size={17} />
                    Learner feedback systems
                  </div>

                  <div>
                    <Check size={17} />
                    Community documentation
                  </div>
                </div>
              </div>

              <div className={styles.projectVisual}>
                <div className={styles.eventCard}>
                  <div className={styles.eventTop}>
                    <span>COMMUNITY EVENT</span>
                    <CalendarDays size={17} />
                  </div>

                  <h3>Open Source Learning Night</h3>

                  <p>
                    Learn how to make your first contribution and meet other
                    developers building in public.
                  </p>

                  <div className={styles.eventMeta}>
                    <span>
                      <Users size={14} />
                      120+ registered
                    </span>

                    <span>
                      <Globe2 size={14} />
                      Online
                    </span>
                  </div>

                  <div className={styles.eventButton}>
                    Join community
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OPEN SOURCE
        ===================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.openSourceCard}>
              <div className={styles.openSourceIcon}>
                <Github size={24} />
              </div>

              <div className={styles.openSourceContent}>
                <span className={styles.eyebrow}>
                  Open-source experience
                </span>

                <h2>Learn community building in the open.</h2>

                <p>
                  CodeHarborHub is built around open-source collaboration.
                  Community work can happen directly alongside developers,
                  contributors, educators, and maintainers.
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

                  <Link
                    to="/contributors/"
                    className={styles.secondaryButton}
                  >
                    Meet contributors
                    <Users size={17} />
                  </Link>
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
                description="A few things to know about the Community Intern role."
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
                <Users size={27} />
              </div>

              <span className={styles.eyebrow}>
                Build with the community
              </span>

              <h2>
                Help create a place where
                <span> developers want to belong.</span>
              </h2>

              <p>
                If you enjoy bringing people together, helping others, and
                creating meaningful developer experiences, this could be your
                opportunity to start building real community experience.
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
                Community experience, event work, open-source contributions,
                student communities, clubs, or personal community projects
                can all demonstrate your potential.
              </small>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}