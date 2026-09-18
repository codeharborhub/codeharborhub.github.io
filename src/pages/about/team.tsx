import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Cpu,
  Github,
  Globe2,
  Heart,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
// @ts-ignore
import styles from "./teams.module.css";

type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  contribution: string;
  location?: string;
  featured?: boolean;
  social: SocialLinks;
};

const SITE_URL = "https://codeharborhub.github.io";
const PAGE_URL = `${SITE_URL}/our-team/`;

const teamMembers: TeamMember[] = [
  {
    name: "Ajay Dhangar",
    role: "Founder & Lead Architect",
    image: "https://github.com/ajay-dhangar.png",
    bio:
      "Founder of CodeHarborHub focused on building an open, practical and community-driven platform for developers to learn, practice and build.",
    skills: ["React", "TypeScript", "System Design", "Open Source"],
    contribution: "Product, Architecture & Open Source",
    location: "India",
    featured: true,
    social: {
      github: "https://github.com/ajay-dhangar",
      linkedin: "https://www.linkedin.com/in/ajay-dhangar/",
      twitter: "https://x.com/CodesWithAjay",
      website: "https://ajay-dhangar.github.io/",
    },
  },

  /*
   * Add verified contributors here as the team grows.
   *
   * Example:
   *
   * {
   *   name: "Contributor Name",
   *   role: "Core Contributor",
   *   image: "https://github.com/username.png",
   *   bio: "Short contribution-focused biography.",
   *   skills: ["Node.js", "Go", "DevOps"],
   *   contribution: "Backend & Infrastructure",
   *   location: "India",
   *   social: {
   *     github: "https://github.com/username",
   *     linkedin: "https://www.linkedin.com/in/username/",
   *   },
   * },
   */
];

const principles = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Build in the open",
    description:
      "We believe great technology can be developed transparently through open source, public collaboration and community feedback.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Learn without barriers",
    description:
      "Our goal is to make high-quality technical learning accessible to developers regardless of their background or location.",
  },
  {
    icon: <Zap size={22} />,
    title: "Quality over shortcuts",
    description:
      "We focus on useful explanations, practical projects, maintainable code and learning experiences that create real skills.",
  },
  {
    icon: <Heart size={22} />,
    title: "Community first",
    description:
      "Learners and contributors are part of the product. Feedback, contributions and shared knowledge shape CodeHarborHub.",
  },
];

const focusAreas = [
  {
    icon: <BookOpen size={20} />,
    title: "Learning",
    description: "Tutorials, courses, roadmaps and structured learning paths.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Practice",
    description: "Coding problems, DSA, challenges and interview preparation.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Technology",
    description: "Modern web development, AI, cloud, systems and developer tools.",
  },
  {
    icon: <Users size={20} />,
    title: "Community",
    description: "Open source contributors helping developers learn together.",
  },
];

function SocialLink({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return null;
  }

  return (
    <a
      className={styles.socialLink}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article
      className={`${styles.memberCard} ${
        member.featured ? styles.memberCardFeatured : ""
      }`}
    >
      <div className={styles.memberVisual}>
        <div className={styles.avatarFrame}>
          <img
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            loading="lazy"
            decoding="async"
          />
        </div>

        <span
          className={styles.availability}
          title="Active contributor"
          aria-label="Active contributor"
        />
      </div>

      <div className={styles.memberContent}>
        <div className={styles.memberHeading}>
          <div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>

          {member.featured && (
            <span className={styles.featuredBadge}>
              <Sparkles size={12} />
              Core
            </span>
          )}
        </div>

        <p className={styles.memberBio}>{member.bio}</p>

        <div className={styles.contribution}>
          <span>Focus</span>
          <strong>{member.contribution}</strong>
        </div>

        {member.location && (
          <div className={styles.location}>
            <Globe2 size={14} />
            {member.location}
          </div>
        )}

        <div className={styles.skills}>
          {member.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className={styles.memberFooter}>
          <div className={styles.socials}>
            <SocialLink
              href={member.social.github}
              label={`${member.name} on GitHub`}
            >
              <Github size={17} />
            </SocialLink>

            <SocialLink
              href={member.social.linkedin}
              label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={17} />
            </SocialLink>

            <SocialLink
              href={member.social.twitter}
              label={`${member.name} on X`}
            >
              <Twitter size={17} />
            </SocialLink>

            <SocialLink
              href={member.social.website}
              label={`${member.name}'s website`}
            >
              <Globe2 size={17} />
            </SocialLink>
          </div>

          <ArrowUpRight
            className={styles.cardArrow}
            size={17}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}

function FocusCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.focusCard}>
      <div className={styles.focusIcon}>{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Team(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const teamCount = teamMembers.length;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodeHarborHub",
    url: SITE_URL,
    description:
      "CodeHarborHub is a free, open-source learning platform for developers to learn, practice, build real-world projects and grow together.",
    sameAs: [
      "https://github.com/codeharborhub",
      "https://x.com/Codeharborhub",
      "https://www.linkedin.com/company/codeharborhub",
    ],
    member: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      image: member.image,
      sameAs: Object.values(member.social).filter(Boolean),
    })),
  };

  return (
    <Layout
      title={`Our Team | ${siteConfig.title}`}
      description="Meet the people and open-source contributors building CodeHarborHub — a community-driven platform for developers to learn, practice, build and grow."
      keywords={[
        "CodeHarborHub team",
        "CodeHarborHub contributors",
        "CodeHarborHub founder",
        "open source team",
        "developer education",
        "open source education",
        "coding community",
        "developer community",
      ]}
    >
      <Head>
        <html lang="en" />

        <link rel="canonical" href={PAGE_URL} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta
          property="og:title"
          content={`Our Team | ${siteConfig.title}`}
        />

        <meta
          property="og:description"
          content="Meet the people and open-source contributors building CodeHarborHub."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />

        <meta
          property="og:image"
          content={`${SITE_URL}/img/codeharborhub-og.png`}
        />

        <meta
          property="og:image:alt"
          content="CodeHarborHub — Our Team"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content={`Our Team | ${siteConfig.title}`}
        />

        <meta
          name="twitter:description"
          content="Meet the people and open-source contributors building CodeHarborHub."
        />

        <meta
          name="twitter:image"
          content={`${SITE_URL}/img/codeharborhub-social-card.jpg`}
        />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>

      <main className={styles.page}>
        {/* ============================================================
            HERO
        ============================================================ */}

        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.breadcrumb}>
              <Link to="/">CodeHarborHub</Link>
              <span>/</span>
              <span>Our Team</span>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Users size={14} />
                <span>THE PEOPLE BEHIND THE PLATFORM</span>
              </div>

              <h1>
                Built by people who
                <span>love technology.</span>
              </h1>

              <p>
                Meet the builders, contributors and community members helping
                shape CodeHarborHub into an open, practical and accessible
                learning platform for developers everywhere.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  to="/contributors/"
                >
                  Meet Our Contributors
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="/contributing/"
                >
                  Contribute to CodeHarborHub
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.heroMeta}>
                <span>
                  <span className={styles.metaDot} />
                  Open source
                </span>

                <span>
                  <span className={styles.metaDot} />
                  Community driven
                </span>

                <span>
                  <span className={styles.metaDot} />
                  Built in public
                </span>
              </div>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>{teamCount || "Open"}</strong>
                <span>Core team members</span>
              </div>

              <div>
                <strong>Open</strong>
                <span>Contribution model</span>
              </div>

              <div>
                <strong>Global</strong>
                <span>Community mindset</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            TEAM
        ============================================================ */}

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionEyebrow}>
                  CORE TEAM
                </span>

                <h2>Small team. Big mission.</h2>

                <p>
                  CodeHarborHub is built by people who care about practical
                  learning, developer experience and open-source collaboration.
                </p>
              </div>

              <div className={styles.teamHeaderBadge}>
                <Users size={16} />
                {teamCount} core contributor{teamCount === 1 ? "" : "s"}
              </div>
            </div>

            {teamMembers.length > 0 ? (
              <div className={styles.teamGrid}>
                {teamMembers.map((member) => (
                  <TeamMemberCard
                    key={`${member.name}-${member.role}`}
                    member={member}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.teamEmpty}>
                <div className={styles.emptyIcon}>
                  <Users size={26} />
                </div>

                <h3>Our contributor network is growing.</h3>

                <p>
                  CodeHarborHub is an open-source project. Meet the wider
                  contributor community and help us build the next generation
                  of developer education.
                </p>

                <Link
                  className={styles.outlineButton}
                  to="/contributors/"
                >
                  Explore Contributors
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            FOCUS AREAS
        ============================================================ */}

        <section className={styles.focusSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderCentered}>
              <span className={styles.sectionEyebrow}>
                WHAT WE BUILD
              </span>

              <h2>Different skills. One direction.</h2>

              <p>
                Our work connects education, software engineering and community
                to create a complete developer learning experience.
              </p>
            </div>

            <div className={styles.focusGrid}>
              {focusAreas.map((item) => (
                <FocusCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            PRINCIPLES
        ============================================================ */}

        <section className={styles.principlesSection}>
          <div className={styles.principlesBackground} />

          <div className={styles.container}>
            <div className={styles.principlesLayout}>
              <div className={styles.principlesIntro}>
                <span className={styles.sectionEyebrow}>
                  OUR CULTURE
                </span>

                <h2>
                  Principles that guide
                  <span> how we build.</span>
                </h2>

                <p>
                  CodeHarborHub is more than a collection of tutorials. We are
                  building an ecosystem where developers can learn openly,
                  practice consistently and contribute meaningfully.
                </p>

                <div className={styles.principleQuote}>
                  <div className={styles.quoteIcon}>
                    <Target size={19} />
                  </div>

                  <div>
                    <strong>Our north star</strong>
                    <p>
                      Make high-quality technical learning more accessible,
                      practical and community-driven.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.principlesGrid}>
                {principles.map((principle) => (
                  <article
                    className={styles.principleCard}
                    key={principle.title}
                  >
                    <div className={styles.principleIcon}>
                      {principle.icon}
                    </div>

                    <h3>{principle.title}</h3>

                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            OPEN SOURCE CTA
        ============================================================ */}

        <section className={styles.joinSection}>
          <div className={styles.container}>
            <div className={styles.joinCard}>
              <div className={styles.joinGlow} />

              <div className={styles.joinIcon}>
                <Github size={25} />
              </div>

              <div className={styles.joinContent}>
                <span className={styles.sectionEyebrow}>
                  OPEN SOURCE COMMUNITY
                </span>

                <h2>
                  You don't have to be
                  <span> on the team to contribute.</span>
                </h2>

                <p>
                  CodeHarborHub grows through developers, writers, designers,
                  educators and open-source contributors who share knowledge
                  and improve the platform.
                </p>
              </div>

              <div className={styles.joinActions}>
                <Link
                  className={styles.primaryButton}
                  to="/contributing/"
                >
                  Start Contributing
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  href="https://github.com/codeharborhub"
                >
                  Explore GitHub
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CONTACT CTA
        ============================================================ */}

        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactCard}>
              <div>
                <span className={styles.sectionEyebrow}>
                  HAVE AN IDEA?
                </span>

                <h2>Let's build something useful.</h2>

                <p>
                  Whether you want to contribute, collaborate, improve the
                  learning experience or simply share an idea, we'd love to
                  hear from you.
                </p>
              </div>

              <div className={styles.contactActions}>
                <Link
                  className={styles.primaryButton}
                  to="/contact/"
                >
                  Contact the Team
                  <Mail size={17} />
                </Link>

                <Link
                  className={styles.textButton}
                  to="/community/"
                >
                  Join the Community
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}