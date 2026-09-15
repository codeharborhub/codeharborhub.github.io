import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import Head from "@docusaurus/Head";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Compass,
  GitBranch,
  Github,
  Globe2,
  Heart,
  Layers3,
  Lightbulb,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

const VALUES = [
  {
    icon: <BookOpen size={22} />,
    title: "Learning first",
    description:
      "We focus on clear explanations, practical examples and learning paths that help people move from fundamentals to real skills.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Build by doing",
    description:
      "Tutorials are only the beginning. Practice, projects, challenges and experimentation turn knowledge into capability.",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Open source",
    description:
      "CodeHarborHub is built in the open. Developers can contribute code, documentation, ideas, fixes and educational content.",
  },
  {
    icon: <Users size={22} />,
    title: "Community driven",
    description:
      "We believe learners and developers become stronger when they learn, build and share knowledge together.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Always improving",
    description:
      "Technology changes quickly. Our content, tools and learning experiences should continuously evolve with it.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "For everyone",
    description:
      "Our goal is to make quality technology education accessible to learners regardless of their starting point.",
  },
];

const LEARNING_PILLARS = [
  {
    number: "01",
    icon: <BookOpen size={23} />,
    title: "Learn",
    description:
      "Understand concepts through structured tutorials, documentation and learning resources.",
    href: "/tutorial/",
  },
  {
    number: "02",
    icon: <Target size={23} />,
    title: "Practice",
    description:
      "Strengthen your knowledge with coding problems, DSA, quizzes and challenges.",
    href: "/practice/",
  },
  {
    number: "03",
    icon: <Rocket size={23} />,
    title: "Build",
    description:
      "Apply what you learn by creating real-world projects and practical applications.",
    href: "/projects/",
  },
  {
    number: "04",
    icon: <GitBranch size={23} />,
    title: "Contribute",
    description:
      "Improve the ecosystem by contributing code, documentation, ideas and community knowledge.",
    href: "/contributors/",
  },
];

const AREAS = [
  {
    icon: <Code2 size={21} />,
    title: "Programming",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: <Layers3 size={21} />,
    title: "Development",
    items: ["React", "Node.js", "Backend", "Full Stack", "APIs"],
  },
  {
    icon: <BrainCircuit size={21} />,
    title: "Computer Science",
    items: ["DSA", "Algorithms", "Databases", "Operating Systems", "Networks"],
  },
  {
    icon: <Sparkles size={21} />,
    title: "Emerging Tech",
    items: ["AI", "Machine Learning", "Cloud", "Cybersecurity", "DevTools"],
  },
];

const MILESTONES = [
  {
    label: "The idea",
    title: "Learning should be accessible.",
    description:
      "CodeHarborHub started with a simple idea: create a place where anyone can learn technology without feeling lost or limited by expensive resources.",
  },
  {
    label: "The community",
    title: "Build in the open.",
    description:
      "The project evolved into an open-source ecosystem where developers and learners can contribute, collaborate and improve the platform together.",
  },
  {
    label: "The platform",
    title: "Learning beyond tutorials.",
    description:
      "The vision expanded from documentation into roadmaps, practice, projects, developer tools, community experiences and career-focused learning.",
  },
  {
    label: "The future",
    title: "A complete developer learning ecosystem.",
    description:
      "The long-term goal is to connect learning, practice, building, open source and career development in one accessible platform.",
  },
];

export default function AboutPage(): React.JSX.Element {
  return (
    <Layout
      title="About CodeHarborHub"
      description="Learn about CodeHarborHub, an open-source learning platform built to help developers learn, practice, build and grow."
    >
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        />
        <meta name="google-adsense-account" content="ca-pub-5832817025080991" />
      </Head>
      <main className={styles.page}>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowIcon}>
                  <Compass size={15} />
                </span>
                About CodeHarborHub
              </div>

              <h1>
                A place to
                <span> learn, build & grow.</span>
              </h1>

              <p className={styles.heroDescription}>
                CodeHarborHub is an open-source technology learning platform
                designed to help developers and aspiring developers learn
                concepts, practice their skills, build real projects and grow
                together.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  to="/tutorials/"
                >
                  Start Learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="/contributors/"
                >
                  Join the Community
                  <Users size={17} />
                </Link>
              </div>

              <div className={styles.heroMeta}>
                <span>
                  <CheckCircle2 size={15} />
                  Open source
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Community driven
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Built for learners
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className={styles.heroVisual}>
              <div className={`${styles.orbit} ${styles.orbitOne}`} />
              <div className={`${styles.orbit} ${styles.orbitTwo}`} />

              <div className={styles.logoCore}>
                <Code2 size={45} />
                <strong>CHH</strong>
                <span>CODEHARBORHUB</span>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardLearn}`}>
                <BookOpen size={18} />
                <div>
                  <strong>Learn</strong>
                  <span>Structured knowledge</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardPractice}`}>
                <Target size={18} />
                <div>
                  <strong>Practice</strong>
                  <span>Build confidence</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardBuild}`}>
                <Rocket size={18} />
                <div>
                  <strong>Build</strong>
                  <span>Create real projects</span>
                </div>
              </div>

              <div className={`${styles.floatingCard} ${styles.cardCommunity}`}>
                <Users size={18} />
                <div>
                  <strong>Community</strong>
                  <span>Grow together</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <div>
                <div className={styles.sectionEyebrow}>
                  WHAT IS CODEHARBORHUB?
                </div>

                <h2>
                  More than a tutorial website.
                </h2>
              </div>

              <div className={styles.introText}>
                <p>
                  Learning technology can feel overwhelming. There are
                  countless tutorials, frameworks, tools and resources, but
                  knowing what to learn next is often the hardest part.
                </p>

                <p>
                  CodeHarborHub aims to bring that journey together in one
                  place — from your first line of code to advanced concepts,
                  real-world projects and open-source contribution.
                </p>

                <p>
                  We are building a developer-focused ecosystem where learning
                  is structured, practice is meaningful and building things is
                  part of the journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MISSION
        ========================================================== */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <Target size={28} />
              </div>

              <div className={styles.missionContent}>
                <div className={styles.sectionEyebrow}>
                  OUR MISSION
                </div>

                <h2>
                  Make technology education more accessible, practical and
                  community powered.
                </h2>

                <p>
                  We want learners to have a clear path from{" "}
                  <strong>“I don't know this”</strong> to{" "}
                  <strong>“I can build this.”</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LEARNING MODEL
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="OUR LEARNING MODEL"
              title="Learn. Practice. Build. Contribute."
              description="A developer grows faster when knowledge is connected with action."
            />

            <div className={styles.pillarGrid}>
              {LEARNING_PILLARS.map((pillar) => (
                <Link
                  key={pillar.number}
                  to={pillar.href}
                  className={styles.pillarCard}
                >
                  <div className={styles.pillarTop}>
                    <div className={styles.pillarIcon}>
                      {pillar.icon}
                    </div>

                    <span>{pillar.number}</span>
                  </div>

                  <h3>{pillar.title}</h3>

                  <p>{pillar.description}</p>

                  <span className={styles.cardLink}>
                    Explore
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT WE OFFER
        ========================================================== */}
        <section className={`${styles.section} ${styles.mutedSection}`}>
          <div className={styles.container}>
            <div className={styles.splitHeading}>
              <div>
                <div className={styles.sectionEyebrow}>
                  THE ECOSYSTEM
                </div>

                <h2>Everything around the developer journey.</h2>
              </div>

              <p>
                CodeHarborHub is being built as a connected ecosystem instead
                of a collection of disconnected tutorials.
              </p>
            </div>

            <div className={styles.areaGrid}>
              {AREAS.map((area) => (
                <div className={styles.areaCard} key={area.title}>
                  <div className={styles.areaIcon}>{area.icon}</div>

                  <h3>{area.title}</h3>

                  <div className={styles.areaTags}>
                    {area.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            VALUES
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="WHAT WE BELIEVE"
              title="Principles behind the platform."
              description="These principles guide how we think about content, products and community."
            />

            <div className={styles.valuesGrid}>
              {VALUES.map((value) => (
                <article className={styles.valueCard} key={value.title}>
                  <div className={styles.valueIcon}>
                    {value.icon}
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            STORY
        ========================================================== */}
        <section className={`${styles.section} ${styles.mutedSection}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="OUR JOURNEY"
              title="From an idea to an open-source ecosystem."
              description="The platform continues to evolve with the needs of learners and developers."
            />

            <div className={styles.timeline}>
              {MILESTONES.map((milestone, index) => (
                <div className={styles.timelineItem} key={milestone.label}>
                  <div className={styles.timelineRail}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    {index !== MILESTONES.length - 1 && (
                      <div className={styles.timelineLine} />
                    )}
                  </div>

                  <div className={styles.timelineContent}>
                    <span>{milestone.label}</span>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            OPEN SOURCE
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.openSourceCard}>
              <div className={styles.openSourceVisual}>
                <div className={styles.githubCircle}>
                  <Github size={45} />
                </div>

                <div className={styles.openSourceOrbit} />
              </div>

              <div className={styles.openSourceContent}>
                <div className={styles.sectionEyebrow}>
                  BUILT IN THE OPEN
                </div>

                <h2>
                  CodeHarborHub belongs to the community.
                </h2>

                <p>
                  Open source is more than publishing code. It is about
                  learning together, sharing knowledge, reviewing ideas,
                  improving documentation and helping the next developer move
                  forward.
                </p>

                <div className={styles.openSourcePoints}>
                  <div>
                    <CheckCircle2 size={17} />
                    Contribute code and documentation
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Improve tutorials and learning resources
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Share ideas and report issues
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Help other developers learn
                  </div>
                </div>

                <div className={styles.openSourceActions}>
                  <Link
                    className={styles.primaryButton}
                    href="https://github.com/CodeHarborHub"
                  >
                    <Github size={17} />
                    Explore GitHub
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    className={styles.outlineButton}
                    to="/contributors/"
                  >
                    Meet Contributors
                    <Users size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            COMMUNITY
        ========================================================== */}
        <section className={`${styles.section} ${styles.mutedSection}`}>
          <div className={styles.container}>
            <div className={styles.communityHeader}>
              <div>
                <div className={styles.sectionEyebrow}>
                  COMMUNITY
                </div>

                <h2>Built by developers, for developers.</h2>
              </div>

              <p>
                Every contribution matters — whether it is a pull request,
                tutorial improvement, issue, suggestion or simply helping
                another learner.
              </p>
            </div>

            <div className={styles.communityGrid}>
              <CommunityCard
                icon={<Users size={22} />}
                value="Community"
                title="Learn together"
                description="Ask questions, share knowledge and learn from people building in the same ecosystem."
              />

              <CommunityCard
                icon={<GitBranch size={22} />}
                value="Open Source"
                title="Build together"
                description="Contribute improvements, features, documentation and educational resources."
              />

              <CommunityCard
                icon={<Heart size={22} />}
                value="Impact"
                title="Help others"
                description="Your contribution can make technology education easier for the next learner."
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            VISION
        ========================================================== */}
        <section className={styles.visionSection}>
          <div className={styles.visionGrid} />
          <div className={styles.visionGlow} />

          <div className={styles.container}>
            <div className={styles.visionContent}>
              <div className={styles.visionIcon}>
                <Lightbulb size={23} />
              </div>

              <div className={styles.sectionEyebrow}>
                OUR VISION
              </div>

              <h2>
                Build a place where every developer can find their next step.
              </h2>

              <p>
                Whether someone is writing their first HTML page, preparing
                for a technical interview, building a startup, exploring AI,
                contributing to open source or becoming a senior engineer,
                CodeHarborHub aims to be a trusted place to continue that
                journey.
              </p>

              <div className={styles.visionQuote}>
                <Sparkles size={18} />
                <span>
                  Learn with clarity. Practice with purpose. Build with
                  confidence.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              <div className={styles.finalIcon}>
                <Zap size={23} />
              </div>

              <div className={styles.sectionEyebrow}>
                START YOUR JOURNEY
              </div>

              <h2>
                Your next level starts with
                <span> one step.</span>
              </h2>

              <p>
                Learn something new, solve a problem, build a project or
                contribute to the community.
              </p>

              <div className={styles.finalActions}>
                <Link
                  className={styles.primaryButton}
                  to="/tutorial/"
                >
                  Start Learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="/roadmaps/"
                >
                  Explore Roadmaps
                  <ArrowUpRight size={17} />
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
                  Community powered
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/* ================================================================
   COMPONENTS
================================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionEyebrow}>{eyebrow}</div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

function CommunityCard({
  icon,
  value,
  title,
  description,
}: {
  icon: React.ReactNode;
  value: string;
  title: string;
  description: string;
}) {
  return (
    <article className={styles.communityCard}>
      <div className={styles.communityIcon}>{icon}</div>

      <span>{value}</span>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}