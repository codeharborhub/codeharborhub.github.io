import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

const positiveStandards = [
  "Demonstrating empathy and kindness toward other people.",
  "Respecting different opinions, viewpoints, backgrounds, and experiences.",
  "Giving and gracefully accepting constructive feedback.",
  "Taking responsibility for mistakes, apologizing when appropriate, and learning from the experience.",
  "Focusing on what is best for the overall community, not only individual interests.",
];

const unacceptableStandards = [
  "Sexualized language or imagery, or sexual attention or advances of any kind.",
  "Trolling, insulting, derogatory comments, personal attacks, or political attacks.",
  "Public or private harassment.",
  "Publishing another person's private information without explicit permission.",
  "Other conduct that could reasonably be considered inappropriate in a professional setting.",
];

const enforcementLevels = [
  {
    number: "01",
    title: "Correction",
    icon: MessageCircle,
    impact:
      "Inappropriate language or behavior that is unprofessional or unwelcome.",
    consequence:
      "A private written warning explaining the violation and why the behavior was inappropriate. A public apology may be requested.",
  },
  {
    number: "02",
    title: "Warning",
    icon: AlertTriangle,
    impact: "A violation through a single incident or series of actions.",
    consequence:
      "A formal warning with consequences for continued behavior. Restrictions on interaction may be applied for a specified period.",
  },
  {
    number: "03",
    title: "Temporary Ban",
    icon: ShieldCheck,
    impact: "A serious violation or sustained inappropriate behavior.",
    consequence:
      "A temporary ban from interaction or public communication with the community for a specified period.",
  },
  {
    number: "04",
    title: "Permanent Ban",
    icon: XCircle,
    impact:
      "A pattern of violations, sustained harassment, or aggression toward individuals or groups.",
    consequence:
      "A permanent ban from public interaction within the CodeHarborHub community.",
  },
];

const communitySpaces = [
  "GitHub repositories, issues, pull requests, discussions, and comments",
  "CodeHarborHub community channels and events",
  "Official social media and communication channels",
  "Online and offline events where someone represents CodeHarborHub",
  "Other spaces explicitly operated or moderated by the community",
];

const faqs = [
  {
    question: "Who does this Code of Conduct apply to?",
    answer:
      "It applies to everyone participating in CodeHarborHub community spaces, including contributors, maintainers, learners, moderators, and community leaders.",
  },
  {
    question: "Can I report something privately?",
    answer:
      "Yes. Reports can be made privately to the community leaders responsible for enforcement. Reports should include enough context to understand what happened.",
  },
  {
    question: "Will reports be kept private?",
    answer:
      "Community leaders are expected to respect the privacy and security of people who report incidents. Information should only be shared when necessary to handle the incident.",
  },
  {
    question: "Does this apply outside CodeHarborHub?",
    answer:
      "It can apply when someone is officially representing CodeHarborHub in a public space, such as through an official account, email address, or appointed role at an event.",
  },
];

export default function CodeOfConduct(): React.JSX.Element {
  return (
    <Layout
      title="Code of Conduct"
      description="CodeHarborHub Code of Conduct — building an open, welcoming, diverse, inclusive, and healthy community."
    >
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            {/* <Link className={styles.backLink} to="/contributing/">
              <ArrowLeft size={16} />
              Back to Contributing
            </Link> */}

            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <HeartHandshake size={16} />
                  Community Standards
                </div>

                <h1>
                  Code of <span>Conduct</span>
                </h1>

                <p className={styles.heroDescription}>
                  CodeHarborHub is built by people who learn, teach, build,
                  review, and contribute together. These guidelines help us
                  maintain a respectful, welcoming, and healthy community for
                  everyone.
                </p>

                <div className={styles.heroActions}>
                  <a href="#our-standards" className={styles.primaryButton}>
                    Read the standards
                    <ChevronRight size={17} />
                  </a>

                  <a href="#reporting" className={styles.secondaryButton}>
                    Report an incident
                  </a>
                </div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroCardIcon}>
                  <ShieldCheck size={32} />
                </div>

                <span className={styles.heroCardLabel}>
                  Our commitment
                </span>

                <h2>Learn together. Build together. Respect everyone.</h2>

                <p>
                  We want every contributor and learner to feel safe
                  participating, asking questions, sharing ideas, and making
                  mistakes while learning.
                </p>

                <div className={styles.heroCardFooter}>
                  <Users size={17} />
                  <span>Everyone is welcome to contribute.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pledge */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <div>
                <span className={styles.sectionKicker}>Our commitment</span>
                <h2>Our Pledge</h2>
              </div>
            </div>

            <div className={styles.pledgeCard}>
              <div className={styles.pledgeIcon}>
                <HeartHandshake size={25} />
              </div>

              <div>
                <p>
                  As members, contributors, and leaders of CodeHarborHub, we
                  pledge to make participation in our community a
                  harassment-free experience for everyone, regardless of age,
                  body size, visible or invisible disability, ethnicity, sex
                  characteristics, gender identity and expression, level of
                  experience, education, socio-economic status, nationality,
                  personal appearance, race, religion, or sexual identity and
                  orientation.
                </p>

                <p>
                  We pledge to act and interact in ways that contribute to an
                  open, welcoming, diverse, inclusive, and healthy community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards */}
        <section
          id="our-standards"
          className={`${styles.section} ${styles.altSection}`}
        >
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <div>
                <span className={styles.sectionKicker}>
                  How we participate
                </span>
                <h2>Our Standards</h2>
              </div>
            </div>

            <div className={styles.standardsGrid}>
              <article className={`${styles.standardCard} ${styles.positive}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <CheckCircle2 size={22} />
                  </div>

                  <div>
                    <span>Encouraged</span>
                    <h3>Positive behavior</h3>
                  </div>
                </div>

                <ul>
                  {positiveStandards.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className={`${styles.standardCard} ${styles.negative}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <XCircle size={22} />
                  </div>

                  <div>
                    <span>Not acceptable</span>
                    <h3>Unacceptable behavior</h3>
                  </div>
                </div>

                <ul>
                  {unacceptableStandards.map((item) => (
                    <li key={item}>
                      <XCircle size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <div>
                <span className={styles.sectionKicker}>
                  Community leadership
                </span>
                <h2>Enforcement Responsibilities</h2>
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <ShieldCheck size={24} />

                <h3>Fair enforcement</h3>

                <p>
                  Community leaders are responsible for clarifying and
                  enforcing these standards and taking appropriate corrective
                  action when necessary.
                </p>
              </div>

              <div className={styles.infoCard}>
                <MessageCircle size={24} />

                <h3>Moderation</h3>

                <p>
                  Leaders may remove, edit, or reject comments, commits, code,
                  wiki edits, issues, and other contributions that do not align
                  with this Code of Conduct.
                </p>
              </div>

              <div className={styles.infoCard}>
                <HeartHandshake size={24} />

                <h3>Transparency</h3>

                <p>
                  Where appropriate, community leaders will communicate the
                  reasons behind moderation decisions while respecting
                  confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <div>
                <span className={styles.sectionKicker}>Where it applies</span>
                <h2>Scope</h2>
              </div>
            </div>

            <div className={styles.scopeLayout}>
              <div className={styles.scopeIntro}>
                <p>
                  This Code of Conduct applies within all CodeHarborHub
                  community spaces. It also applies when an individual is
                  officially representing the community in public spaces.
                </p>

                <div className={styles.representationNote}>
                  <AlertTriangle size={20} />
                  <p>
                    Official representation includes using an official email
                    address, posting through an official social media account,
                    or acting as an appointed representative at an online or
                    offline event.
                  </p>
                </div>
              </div>

              <div className={styles.spaceList}>
                {communitySpaces.map((space, index) => (
                  <div className={styles.spaceItem} key={space}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{space}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reporting */}
        <section id="reporting" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.reportingCard}>
              <div className={styles.reportingContent}>
                <div className={styles.reportingIcon}>
                  <Mail size={25} />
                </div>

                <span className={styles.sectionKicker}>Need help?</span>

                <h2>Report a Code of Conduct concern</h2>

                <p>
                  Instances of abusive, harassing, or otherwise unacceptable
                  behavior may be reported to the CodeHarborHub community
                  leaders responsible for enforcement.
                </p>

                <p>
                  Please provide relevant context such as what happened, where
                  it happened, and any information that can help the community
                  leaders review the incident fairly.
                </p>

                <a
                  className={styles.reportButton}
                  href="mailto:ajaydhangar49@gmail.com"
                >
                  <Mail size={17} />
                  Contact community leaders
                </a>
              </div>

              <div className={styles.reportingAssurance}>
                <div>
                  <ShieldCheck size={21} />
                  <div>
                    <strong>Prompt review</strong>
                    <span>
                      Reports will be reviewed and investigated as promptly and
                      fairly as possible.
                    </span>
                  </div>
                </div>

                <div>
                  <HeartHandshake size={21} />
                  <div>
                    <strong>Respect for privacy</strong>
                    <span>
                      Community leaders are expected to respect the privacy
                      and security of reporters.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <div>
                <span className={styles.sectionKicker}>
                  Community Impact Guidelines
                </span>
                <h2>Enforcement Guidelines</h2>
              </div>
            </div>

            <p className={styles.sectionLead}>
              Community leaders may use the following enforcement ladder when
              determining appropriate consequences for behavior that violates
              this Code of Conduct. The response depends on the circumstances
              and impact of the incident.
            </p>

            <div className={styles.enforcementList}>
              {enforcementLevels.map((level) => {
                const Icon = level.icon;

                return (
                  <article className={styles.enforcementCard} key={level.number}>
                    <div className={styles.enforcementNumber}>
                      {level.number}
                    </div>

                    <div className={styles.enforcementIcon}>
                      <Icon size={22} />
                    </div>

                    <div className={styles.enforcementBody}>
                      <h3>{level.title}</h3>

                      <div className={styles.enforcementColumns}>
                        <div>
                          <span>Community impact</span>
                          <p>{level.impact}</p>
                        </div>

                        <div>
                          <span>Possible consequence</span>
                          <p>{level.consequence}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>06</span>
              <div>
                <span className={styles.sectionKicker}>Questions</span>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details className={styles.faqItem} key={faq.question}>
                  <summary>
                    {faq.question}
                    <ChevronRight size={18} />
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Attribution */}
        <section className={styles.attribution}>
          <div className={styles.container}>
            <div className={styles.attributionCard}>
              <div>
                <span className={styles.sectionKicker}>Attribution</span>

                <h2>Contributor Covenant</h2>

                <p>
                  This Code of Conduct is adapted from the Contributor
                  Covenant, version 2.0. The Community Impact Guidelines are
                  inspired by Mozilla&apos;s Code of Conduct enforcement
                  ladder.
                </p>
              </div>

              <div className={styles.attributionLinks}>
                <a
                  href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributor Covenant
                  <ChevronRight size={16} />
                </a>

                <a
                  href="https://github.com/mozilla/diversity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla enforcement guidelines
                  <ChevronRight size={16} />
                </a>

                <a
                  href="https://www.contributor-covenant.org/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributor Covenant FAQ
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaInner}>
              <div className={styles.finalCtaIcon}>
                <Users size={25} />
              </div>

              <h2>Help us build a better developer community.</h2>

              <p>
                Learn, contribute, share knowledge, and help make CodeHarborHub
                welcoming for everyone.
              </p>

              <div className={styles.finalActions}>
                <Link to="/contributing/" className={styles.primaryButton}>
                  Start contributing
                  <ChevronRight size={17} />
                </Link>

                <Link to="/community/" className={styles.secondaryButton}>
                  Join the community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}