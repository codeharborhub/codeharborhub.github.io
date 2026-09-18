import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  HeartHandshake,
  Laptop,
  MapPin,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

type JobType = "Full-time" | "Internship" | "Contract" | "Volunteer";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  remote: boolean;
  description: string;
  skills: string[];
  featured?: boolean;
};

const JOBS: Job[] = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote — India",
    type: "Full-time",
    remote: true,
    featured: true,
    description:
      "Build fast, accessible and delightful learning experiences for developers around the world.",
    skills: ["React", "TypeScript", "Docusaurus", "CSS"],
  },
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote — India",
    type: "Full-time",
    remote: true,
    featured: true,
    description:
      "Build scalable learning, practice, community and developer-platform features end to end.",
    skills: ["React", "Node.js", "TypeScript", "Supabase"],
  },
  {
    id: "technical-writer",
    title: "Technical Writer",
    department: "Content",
    location: "Remote",
    type: "Contract",
    remote: true,
    description:
      "Create accurate, practical and beginner-friendly technical documentation and tutorials.",
    skills: ["MDX", "Git", "JavaScript", "Technical Writing"],
  },
  {
    id: "open-source-contributor",
    title: "Open Source Contributor",
    department: "Community",
    location: "Global",
    type: "Volunteer",
    remote: true,
    description:
      "Help improve CodeHarborHub through documentation, code, design, issues and community contributions.",
    skills: ["GitHub", "Open Source", "Communication"],
  },
  {
    id: "frontend-intern",
    title: "Frontend Developer Intern",
    department: "Engineering",
    location: "Remote — India",
    type: "Internship",
    remote: true,
    description:
      "Learn by shipping real product improvements while working with modern frontend technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "community-intern",
    title: "Developer Community Intern",
    department: "Community",
    location: "Remote",
    type: "Internship",
    remote: true,
    description:
      "Help grow a welcoming developer community through events, content and contributor programs.",
    skills: ["Community", "GitHub", "Content", "Communication"],
  },
];

const DEPARTMENTS = [
  {
    title: "Engineering",
    description:
      "Build the infrastructure, learning tools and developer experiences powering CodeHarborHub.",
    icon: <Code2 size={22} />,
    count: "4 roles",
  },
  {
    title: "Content",
    description:
      "Turn complex technical concepts into clear, practical and useful learning experiences.",
    icon: <Sparkles size={22} />,
    count: "2 roles",
  },
  {
    title: "Community",
    description:
      "Build an inclusive open-source community where developers learn and contribute together.",
    icon: <Users size={22} />,
    count: "3 roles",
  },
  {
    title: "Product & Design",
    description:
      "Design experiences that make learning, practicing and building easier for developers.",
    icon: <Zap size={22} />,
    count: "Coming soon",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Learners first",
    description:
      "We make decisions around what creates the most value for people learning and building with technology.",
    icon: <HeartHandshake size={22} />,
  },
  {
    number: "02",
    title: "Build in the open",
    description:
      "We believe transparency, collaboration and open source can create better technology and stronger communities.",
    icon: <Github size={22} />,
  },
  {
    number: "03",
    title: "Own the outcome",
    description:
      "Take responsibility, communicate clearly and focus on meaningful results rather than simply completing tasks.",
    icon: <ShieldCheck size={22} />,
  },
  {
    number: "04",
    title: "Keep learning",
    description:
      "Technology changes quickly. We continuously experiment, learn from mistakes and improve our craft.",
    icon: <Rocket size={22} />,
  },
];

const BENEFITS = [
  {
    title: "Remote-first",
    description:
      "Work from where you do your best work, with communication designed for distributed teams.",
    icon: <Laptop size={21} />,
  },
  {
    title: "Real ownership",
    description:
      "Work on meaningful product areas instead of isolated practice assignments.",
    icon: <BriefcaseBusiness size={21} />,
  },
  {
    title: "Open source",
    description:
      "Build publicly, collaborate with contributors and create work you can be proud of.",
    icon: <Github size={21} />,
  },
  {
    title: "Continuous learning",
    description:
      "Grow through technical challenges, documentation, reviews and collaboration.",
    icon: <Sparkles size={21} />,
  },
  {
    title: "Developer community",
    description:
      "Work alongside learners, contributors and developers from different backgrounds.",
    icon: <Users size={21} />,
  },
  {
    title: "Impact at scale",
    description:
      "Help create accessible technology education for developers around the world.",
    icon: <Globe2 size={21} />,
  },
];

const FAQS = [
  {
    question: "Is CodeHarborHub hiring right now?",
    answer:
      "This page is designed to show currently published opportunities. If no role matches your profile, you can still contribute to the open-source project and build a public track record with the community.",
  },
  {
    question: "Can I apply for more than one role?",
    answer:
      "Yes. Apply to roles where your experience genuinely matches the requirements. Tailor your application to the specific role rather than sending the same application everywhere.",
  },
  {
    question: "Are opportunities remote?",
    answer:
      "Many CodeHarborHub opportunities are designed to support remote collaboration. The exact location requirements should always be checked on the individual opportunity.",
  },
  {
    question: "Can beginners contribute?",
    answer:
      "Yes. Open-source contribution is a good starting point for developers who are still building professional experience. Documentation, testing, design, issue triage and beginner-friendly engineering tasks can all create meaningful contribution paths.",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Internship opportunities can be published when there is an active opening. Candidates should apply only through the official opportunity page and follow the requirements listed there.",
  },
  {
    question: "How can I contribute if there are no jobs?",
    answer:
      "You can contribute through GitHub, documentation, tutorials, design, issue discussions, community programs and other open-source initiatives.",
  },
];

function getTypeClass(type: JobType) {
  switch (type) {
    case "Full-time":
      return styles.fullTime;

    case "Internship":
      return styles.internship;

    case "Contract":
      return styles.contract;

    default:
      return styles.volunteer;
  }
}

export default function CareersPage(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState<"All" | JobType>("All");
  const [department, setDepartment] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return JOBS.filter((job) => {
      const matchesType = jobType === "All" || job.type === jobType;

      const matchesDepartment =
        department === "All" || job.department === department;

      const searchableText = [
        job.title,
        job.department,
        job.location,
        job.description,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesType && matchesDepartment && matchesSearch;
    });
  }, [search, jobType, department]);

  return (
    <Layout
      title="Careers"
      description="Build the future of developer education with CodeHarborHub. Explore engineering, content, community and open-source opportunities."
    >
      <main className={styles.page}>
        {/* ============================================================
            HERO
        ============================================================ */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <BriefcaseBusiness size={15} />
                <span>CAREERS AT CODEHARBORHUB</span>
              </div>

              <h1>
                Build the future of
                <span> developer education.</span>
              </h1>

              <p>
                Join a community-driven team building tools, learning
                experiences and open-source infrastructure that help
                developers learn, practice, build and grow.
              </p>

              <div className={styles.heroActions}>
                <a
                  className={styles.primaryButton}
                  href="#open-roles"
                >
                  Explore open roles
                  <ArrowRight size={17} />
                </a>

                <a
                  className={styles.secondaryButton}
                  href="https://github.com/CodeHarborHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  Explore GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className={styles.heroMeta}>
                <span>
                  <CheckCircle2 size={15} />
                  Remote-friendly
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Open source
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Developer focused
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className={styles.heroVisual}>
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <div className={styles.windowDots}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>career@codeharborhub</span>

                  <div className={styles.terminalLive}>
                    <i />
                    OPEN
                  </div>
                </div>

                <div className={styles.terminalBody}>
                  <p>
                    <span className={styles.terminalMuted}>$</span>{" "}
                    <span className={styles.terminalCommand}>
                      whoami
                    </span>
                  </p>

                  <p className={styles.terminalOutput}>
                    builder@codeharborhub
                  </p>

                  <p>
                    <span className={styles.terminalMuted}>$</span>{" "}
                    <span className={styles.terminalCommand}>
                      mission
                    </span>
                  </p>

                  <p className={styles.terminalOutput}>
                    Make quality tech education accessible.
                  </p>

                  <p>
                    <span className={styles.terminalMuted}>$</span>{" "}
                    <span className={styles.terminalCommand}>
                      stack
                    </span>
                  </p>

                  <div className={styles.terminalTags}>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Open Source</span>
                  </div>

                  <p>
                    <span className={styles.terminalMuted}>$</span>{" "}
                    <span className={styles.terminalCommand}>
                      ./build-the-future.sh
                    </span>
                    <span className={styles.cursor}>▋</span>
                  </p>
                </div>
              </div>

              <div className={styles.floatingCardOne}>
                <Code2 size={18} />
                <div>
                  <strong>Build</strong>
                  <span>Real products</span>
                </div>
              </div>

              <div className={styles.floatingCardTwo}>
                <Users size={18} />
                <div>
                  <strong>Community</strong>
                  <span>Global contributors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            MISSION
        ============================================================ */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
            <div className={styles.missionGrid}>
              <div>
                <span className={styles.sectionEyebrow}>
                  OUR MISSION
                </span>

                <h2>
                  Technology education should be
                  <span> accessible to everyone.</span>
                </h2>
              </div>

              <div>
                <p>
                  CodeHarborHub is building an open learning ecosystem
                  where developers can discover knowledge, practice skills,
                  build projects and contribute to the technology community.
                </p>

                <p>
                  The work is bigger than a single website. We're building
                  open-source infrastructure for the next generation of
                  developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            QUICK STATS
        ============================================================ */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <strong>Open</strong>
                <span>Source culture</span>
              </div>

              <div className={styles.stat}>
                <strong>Remote</strong>
                <span>Friendly collaboration</span>
              </div>

              <div className={styles.stat}>
                <strong>Global</strong>
                <span>Developer community</span>
              </div>

              <div className={styles.stat}>
                <strong>Impact</strong>
                <span>Learning at scale</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            OPEN ROLES
        ============================================================ */}
        <section
          className={styles.section}
          id="open-roles"
        >
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>
                  OPPORTUNITIES
                </span>

                <h2>Find your next opportunity.</h2>

                <p>
                  Explore published roles across engineering, content,
                  community and open source.
                </p>
              </div>

              <div className={styles.roleSummary}>
                <strong>{filteredJobs.length}</strong>
                <span>matching roles</span>
              </div>
            </div>

            <div className={styles.jobExplorer}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search roles, skills or departments..."
                  aria-label="Search careers"
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

              <div className={styles.filterRow}>
                <select
                  value={jobType}
                  onChange={(event) =>
                    setJobType(event.target.value as "All" | JobType)
                  }
                  aria-label="Filter by job type"
                >
                  <option value="All">All job types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                  <option value="Volunteer">Volunteer</option>
                </select>

                <select
                  value={department}
                  onChange={(event) =>
                    setDepartment(event.target.value)
                  }
                  aria-label="Filter by department"
                >
                  <option value="All">All departments</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Content">Content</option>
                  <option value="Community">Community</option>
                  <option value="Product & Design">
                    Product & Design
                  </option>
                </select>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              <div className={styles.jobsGrid}>
                {filteredJobs.map((job) => (
                  <article
                    className={`${styles.jobCard} ${
                      job.featured ? styles.featuredJob : ""
                    }`}
                    key={job.id}
                  >
                    <div className={styles.jobTop}>
                      <div className={styles.jobIcon}>
                        <Code2 size={20} />
                      </div>

                      {job.featured && (
                        <span className={styles.featuredBadge}>
                          <Sparkles size={12} />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className={styles.jobTitleRow}>
                      <div>
                        <h3>{job.title}</h3>

                        <span className={styles.department}>
                          {job.department}
                        </span>
                      </div>
                    </div>

                    <p>{job.description}</p>

                    <div className={styles.jobMeta}>
                      <span>
                        <MapPin size={14} />
                        {job.location}
                      </span>

                      <span>
                        <Laptop size={14} />
                        {job.remote ? "Remote" : "On-site"}
                      </span>
                    </div>

                    <div className={styles.jobTags}>
                      {job.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>

                    <div className={styles.jobFooter}>
                      <span className={getTypeClass(job.type)}>
                        {job.type}
                      </span>

                      <Link to={`/careers/${job.id}/`}>
                        View role
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Search size={26} />

                <h3>No matching opportunities</h3>

                <p>
                  Try another search term or remove one of the filters.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setJobType("All");
                    setDepartment("All");
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================
            DEPARTMENTS
        ============================================================ */}
        <section className={`${styles.section} ${styles.mutedSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>
                  TEAMS
                </span>

                <h2>Find where you can make an impact.</h2>

                <p>
                  Great products need more than engineers. Different
                  disciplines work together to create better learning
                  experiences.
                </p>
              </div>
            </div>

            <div className={styles.departmentGrid}>
              {DEPARTMENTS.map((item) => (
                <div
                  className={styles.departmentCard}
                  key={item.title}
                >
                  <div className={styles.departmentIcon}>
                    {item.icon}
                  </div>

                  <div className={styles.departmentHeader}>
                    <h3>{item.title}</h3>
                    <span>{item.count}</span>
                  </div>

                  <p>{item.description}</p>

                  <a href="#open-roles">
                    Explore roles
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            VALUES
        ============================================================ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.valuesLayout}>
              <div className={styles.valuesIntro}>
                <span className={styles.sectionEyebrow}>
                  HOW WE WORK
                </span>

                <h2>
                  Values aren't posters.
                  <span> They're how we build.</span>
                </h2>

                <p>
                  We're creating a culture where people can do meaningful
                  work, communicate openly and keep improving.
                </p>
              </div>

              <div className={styles.valuesGrid}>
                {VALUES.map((value) => (
                  <div className={styles.valueCard} key={value.number}>
                    <div className={styles.valueNumber}>
                      {value.number}
                    </div>

                    <div className={styles.valueIcon}>
                      {value.icon}
                    </div>

                    <h3>{value.title}</h3>

                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            BENEFITS
        ============================================================ */}
        <section className={`${styles.section} ${styles.mutedSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>
                  WHY CODEHARBORHUB
                </span>

                <h2>Build work that matters.</h2>

                <p>
                  The best environment is one where you can learn, own
                  meaningful work and see the impact of what you build.
                </p>
              </div>
            </div>

            <div className={styles.benefitsGrid}>
              {BENEFITS.map((benefit) => (
                <div className={styles.benefitCard} key={benefit.title}>
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                  </div>

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            OPEN SOURCE PATH
        ============================================================ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.openSourceCard}>
              <div className={styles.openSourceVisual}>
                <div className={styles.githubMark}>
                  <Github size={38} />
                </div>

                <div className={styles.openSourceOrb} />
              </div>

              <div className={styles.openSourceContent}>
                <span className={styles.sectionEyebrow}>
                  NOT READY FOR A JOB?
                </span>

                <h2>Start by contributing.</h2>

                <p>
                  Open source is one of the best ways to demonstrate how
                  you solve problems, collaborate with others and build
                  production-quality work.
                </p>

                <div className={styles.openSourceChecklist}>
                  <span>
                    <CheckCircle2 size={16} />
                    Contribute code
                  </span>

                  <span>
                    <CheckCircle2 size={16} />
                    Improve documentation
                  </span>

                  <span>
                    <CheckCircle2 size={16} />
                    Fix issues
                  </span>

                  <span>
                    <CheckCircle2 size={16} />
                    Help other developers
                  </span>
                </div>

                <div className={styles.openSourceActions}>
                  <a
                    className={styles.primaryButton}
                    href="https://github.com/CodeHarborHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} />
                    View GitHub
                    <ArrowUpRight size={16} />
                  </a>

                  <Link
                    className={styles.outlineButton}
                    to="/contributors/"
                  >
                    Meet contributors
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            HIRING PROCESS
        ============================================================ */}
        <section className={`${styles.section} ${styles.mutedSection}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>
                  HIRING PROCESS
                </span>

                <h2>A clear process, no unnecessary mystery.</h2>

                <p>
                  The exact process can vary by role, but the goal is to
                  evaluate how you think, communicate and build.
                </p>
              </div>
            </div>

            <div className={styles.process}>
              <ProcessStep
                number="01"
                title="Application"
                description="Tell us about your experience, projects, skills and why the role interests you."
              />

              <ProcessStep
                number="02"
                title="Initial review"
                description="We review your application and relevant public work against the role requirements."
              />

              <ProcessStep
                number="03"
                title="Technical / role discussion"
                description="Discuss your approach, experience and how you solve realistic problems."
              />

              <ProcessStep
                number="04"
                title="Final conversation"
                description="Align on expectations, collaboration, responsibilities and next steps."
              />

              <ProcessStep
                number="05"
                title="Decision"
                description="Successful candidates receive the next-step details and onboarding information."
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            FAQ
        ============================================================ */}
        <section className={styles.section}>
          <div className={styles.containerSmall}>
            <div className={styles.sectionHeadingCentered}>
              <span className={styles.sectionEyebrow}>
                FAQ
              </span>

              <h2>Questions before you apply?</h2>

              <p>
                Here are answers to some common questions about careers
                and contributing to CodeHarborHub.
              </p>
            </div>

            <div className={styles.faq}>
              {FAQS.map((faq, index) => {
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
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={18}
                        className={styles.faqChevron}
                      />
                    </button>

                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            FINAL CTA
        ============================================================ */}
        <section className={styles.finalCta}>
          <div className={styles.finalGlow} />
          <div className={styles.finalGrid} />

          <div className={styles.containerSmall}>
            <div className={styles.finalContent}>
              <div className={styles.finalIcon}>
                <Rocket size={21} />
              </div>

              <span className={styles.sectionEyebrow}>
                BUILD SOMETHING MEANINGFUL
              </span>

              <h2>
                Your next chapter could start
                <span> here.</span>
              </h2>

              <p>
                Whether you're looking for your next role or your first
                open-source contribution, there's more than one way to
                become part of the CodeHarborHub journey.
              </p>

              <div className={styles.finalActions}>
                <a
                  className={styles.primaryButton}
                  href="#open-roles"
                >
                  Explore opportunities
                  <ArrowRight size={17} />
                </a>

                <a
                  className={styles.secondaryButton}
                  href="https://github.com/CodeHarborHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  Contribute on GitHub
                </a>
              </div>

              <div className={styles.finalMeta}>
                <span>
                  <CheckCircle2 size={14} />
                  Open source
                </span>

                <span>
                  <CheckCircle2 size={14} />
                  Developer-first
                </span>

                <span>
                  <CheckCircle2 size={14} />
                  Community-driven
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
   PROCESS STEP
================================================================ */

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.processStep}>
      <div className={styles.processNumber}>{number}</div>

      <div className={styles.processLine} />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}