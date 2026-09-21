import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Heart,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type Recognition = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Contribution = {
  title: string;
  description: string;
};

const githubStarsUrl =
  "https://stars.github.com/";

const nominationUrl =
  "https://stars.github.com/nominate/";

const githubUrl =
  "https://github.com/CodeHarborHub";

const contributorTeamUrl =
  "https://github.com/orgs/CodeHarborHub/teams/contributors";

const recognitions: Recognition[] = [
  {
    icon: <Code2 size={20} />,
    title: "Build",
    description:
      "Create useful open-source projects, tools, learning resources, and developer experiences.",
  },
  {
    icon: <Users size={20} />,
    title: "Teach",
    description:
      "Share knowledge through documentation, tutorials, community discussions, workshops, and mentorship.",
  },
  {
    icon: <Heart size={20} />,
    title: "Support",
    description:
      "Help other developers learn, contribute, collaborate, and become more confident with open source.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Grow",
    description:
      "Contribute consistently to the developer ecosystem and make your work discoverable.",
  },
];

const contributions: Contribution[] = [
  {
    title: "Open-source projects",
    description:
      "Build and maintain projects that solve practical developer or community problems.",
  },
  {
    title: "Technical education",
    description:
      "Create tutorials, documentation, examples, roadmaps, and other learning resources.",
  },
  {
    title: "Community leadership",
    description:
      "Help contributors collaborate, review work, answer questions, and improve community workflows.",
  },
  {
    title: "Developer advocacy",
    description:
      "Share practical knowledge, organize sessions, write technical content, and encourage open-source participation.",
  },
];

const faqs = [
  {
    question: "What is the GitHub Star program?",
    answer:
      "GitHub Stars is a GitHub community program that recognizes people who help others learn about GitHub and open source. Visit GitHub's official Stars page for the current program details and eligibility information.",
  },
  {
    question: "Can anyone nominate someone?",
    answer:
      "Nomination rules and eligibility can change. Check GitHub's official nomination page for the current requirements before submitting a nomination.",
  },
  {
    question:
      "Does a nomination guarantee that someone becomes a GitHub Star?",
    answer:
      "No. A nomination is a way to put someone forward for consideration. GitHub makes the final decision according to its own program criteria and process.",
  },
  {
    question:
      "Can CodeHarborHub contributors be nominated?",
    answer:
      "A contributor can be considered for nomination when their public work and community impact align with the current GitHub Stars program criteria. Review the official GitHub requirements before nominating anyone.",
  },
  {
    question:
      "What kind of work should I highlight in a nomination?",
    answer:
      "Focus on specific public contributions and their impact: open-source projects, educational resources, community leadership, developer advocacy, mentorship, or other work that helps developers participate in the open-source ecosystem.",
  },
  {
    question:
      "Where should I submit the nomination?",
    answer:
      "Use GitHub's official Stars nomination page. Do not submit personal credentials or sensitive information through CodeHarborHub.",
  },
];

export default function GithubStarsNominatePage(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentYear = useMemo(
    () => new Date().getFullYear(),
    [],
  );

  return (
    <Layout
      title="GitHub Stars Nominate"
      description="Nominate an open-source contributor or community builder for GitHub Stars."
    >
      <main className={styles.page}>
        {/* -------------------------------------------------
            HERO
        -------------------------------------------------- */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            {/* <div className={styles.breadcrumb}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>GitHub Stars</span>
            </div> */}

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowIcon}>
                    <Star size={15} />
                  </span>

                  <span>Open Source Recognition</span>
                </div>

                <h1>
                  Recognize people who
                  <span> build for developers.</span>
                </h1>

                <p className={styles.heroDescription}>
                  Great open-source communities are built by
                  people who create, teach, mentor, maintain,
                  and share. If someone's public work has
                  helped developers and the open-source
                  ecosystem, consider putting them forward
                  for GitHub Stars.
                </p>

                <div className={styles.heroActions}>
                  <a
                    className={styles.primaryButton}
                    href={nominationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nominate on GitHub
                    <ExternalLink size={17} />
                  </a>

                  <a
                    className={styles.secondaryButton}
                    href={githubStarsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn about GitHub Stars
                    <ArrowRight size={17} />
                  </a>
                </div>

                <div className={styles.heroNote}>
                  <ShieldCheck size={15} />
                  <span>
                    Use GitHub's official nomination process
                    and review the current program criteria.
                  </span>
                </div>
              </div>

              <div className={styles.starVisual}>
                <div className={styles.starOrbit}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.starCard}>
                  <div className={styles.starCardTop}>
                    <div className={styles.githubMark}>
                      <Github size={28} />
                    </div>

                    <span>GitHub Stars</span>
                  </div>

                  <div className={styles.bigStar}>
                    <Star
                      size={92}
                      strokeWidth={1.3}
                    />
                  </div>

                  <strong>
                    Build. Share. Inspire.
                  </strong>

                  <p>
                    Recognizing people who help developers
                    discover and participate in open source.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            INTRO
        -------------------------------------------------- */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                Why recognition matters
              </span>

              <h2>
                Open source grows through people.
              </h2>

              <p>
                Code is only one part of the ecosystem.
                Documentation, education, mentorship,
                community building, and knowledge sharing
                help make open source accessible to more
                developers.
              </p>
            </div>

            <div className={styles.recognitionGrid}>
              {recognitions.map((item) => (
                <article
                  className={styles.recognitionCard}
                  key={item.title}
                >
                  <div className={styles.cardIcon}>
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            NOMINATION PROCESS
        -------------------------------------------------- */}
        <section
          className={`${styles.section} ${styles.processSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                Nomination guide
              </span>

              <h2>
                A simple way to recognize impact.
              </h2>

              <p>
                Before submitting a nomination, gather
                concrete public examples of the person's
                work and explain how that work has helped
                developers or the open-source community.
              </p>
            </div>

            <div className={styles.processGrid}>
              <article className={styles.processCard}>
                <span className={styles.stepNumber}>
                  01
                </span>

                <div className={styles.processIcon}>
                  <SearchIcon />
                </div>

                <h3>Identify the contributor</h3>

                <p>
                  Choose a person whose public work
                  demonstrates meaningful contributions
                  to developers or open source.
                </p>
              </article>

              <article className={styles.processCard}>
                <span className={styles.stepNumber}>
                  02
                </span>

                <div className={styles.processIcon}>
                  <Code2 size={21} />
                </div>

                <h3>Collect evidence</h3>

                <p>
                  Gather public projects, tutorials,
                  talks, documentation, community work,
                  or other examples that support the
                  nomination.
                </p>
              </article>

              <article className={styles.processCard}>
                <span className={styles.stepNumber}>
                  03
                </span>

                <div className={styles.processIcon}>
                  <MessageCircle size={21} />
                </div>

                <h3>Explain the impact</h3>

                <p>
                  Describe what the person did, who it
                  helped, and why the contribution matters
                  to the developer community.
                </p>
              </article>

              <article className={styles.processCard}>
                <span className={styles.stepNumber}>
                  04
                </span>

                <div className={styles.processIcon}>
                  <Award size={21} />
                </div>

                <h3>Submit through GitHub</h3>

                <p>
                  Use GitHub's official nomination process
                  and follow the current instructions on
                  the nomination page.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            WHAT TO HIGHLIGHT
        -------------------------------------------------- */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.splitSection}>
              <div>
                <span className={styles.sectionEyebrow}>
                  What to highlight
                </span>

                <h2>
                  Tell the story behind the contribution.
                </h2>

                <p className={styles.splitDescription}>
                  Strong nominations are easier to understand
                  when they connect a person's work with a
                  specific developer or community outcome.
                </p>

                <div className={styles.checkList}>
                  <div>
                    <CheckCircle2 size={18} />
                    <span>
                      Specific public contributions
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    <span>
                      Evidence of community participation
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    <span>
                      Educational or technical impact
                    </span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} />
                    <span>
                      Links to relevant public work
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.storyCard}>
                <div className={styles.storyHeader}>
                  <Lightbulb size={18} />

                  <span>
                    Example structure
                  </span>
                </div>

                <div className={styles.storyBody}>
                  <div>
                    <small>CONTRIBUTION</small>
                    <p>
                      What did this person create,
                      maintain, teach, or organize?
                    </p>
                  </div>

                  <div>
                    <small>COMMUNITY</small>
                    <p>
                      Which developers or communities
                      benefited from the work?
                    </p>
                  </div>

                  <div>
                    <small>IMPACT</small>
                    <p>
                      What changed because of their
                      contribution?
                    </p>
                  </div>

                  <div>
                    <small>EVIDENCE</small>
                    <p>
                      Which public projects, resources,
                      talks, or activities demonstrate it?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            CODEHARBORHUB CONTRIBUTION
        -------------------------------------------------- */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.communityBanner}>
              <div className={styles.communityIcon}>
                <Github size={25} />
              </div>

              <div className={styles.communityContent}>
                <span>
                  CodeHarborHub Open Source
                </span>

                <h2>
                  Help recognize contributors,
                  maintainers, and community builders.
                </h2>

                <p>
                  CodeHarborHub is an open-source developer
                  learning community. Explore the project's
                  public repositories and contributor community
                  to discover people who actively build,
                  document, review, teach, and support others.
                </p>

                <div
                  className={
                    styles.communityActions
                  }
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.outlineButton}
                  >
                    Explore GitHub
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={contributorTeamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.textButton}
                  >
                    View contributors
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            CONTRIBUTOR TYPES
        -------------------------------------------------- */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                Contribution matters
              </span>

              <h2>
                Impact can take many forms.
              </h2>

              <p>
                Recognition does not have to come from one
                type of contribution. Consider the person's
                actual public work and community impact.
              </p>
            </div>

            <div className={styles.contributionGrid}>
              {contributions.map((item, index) => (
                <article
                  className={styles.contributionCard}
                  key={item.title}
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            FAQ
        -------------------------------------------------- */}
        <section
          className={`${styles.section} ${styles.faqSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionEyebrow}>
                FAQ
              </span>

              <h2>
                GitHub Stars nomination questions.
              </h2>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`${styles.faqItem} ${
                      isOpen
                        ? styles.faqItemOpen
                        : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() =>
                        setOpenFaq(
                          isOpen ? null : index,
                        )
                      }
                      aria-expanded={isOpen}
                    >
                      <span>
                        {faq.question}
                      </span>

                      <span
                        className={
                          styles.faqToggle
                        }
                      >
                        {isOpen ? (
                          <X size={16} />
                        ) : (
                          <ArrowRight
                            size={16}
                          />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        className={
                          styles.faqAnswer
                        }
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------
            FINAL CTA
        -------------------------------------------------- */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaStars}>
                <Star size={16} />
                <Star size={22} />
                <Star size={16} />
              </div>

              <span className={styles.sectionEyebrow}>
                Recognize open source
              </span>

              <h2>
                Know someone who helps developers
                thrive?
              </h2>

              <p>
                Explore their public work, gather concrete
                examples, and use GitHub's official process
                to put them forward for consideration.
              </p>

              <div className={styles.ctaActions}>
                <a
                  href={nominationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  Nominate on GitHub
                  <ExternalLink size={17} />
                </a>

                <Link
                  to="/contributing/"
                  className={styles.secondaryButton}
                >
                  Contribute to CodeHarborHub
                  <ArrowRight size={17} />
                </Link>
              </div>

              <small>
                GitHub determines eligibility and final
                selection according to its program process.
                Requirements may change over time.
                {currentYear}
              </small>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function SearchIcon(): JSX.Element {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}