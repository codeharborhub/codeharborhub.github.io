import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileText,
  GitBranch,
  Github,
  GitPullRequest,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  XCircle,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type ContributionCategory =
  | "All"
  | "Code"
  | "Documentation"
  | "Tutorials"
  | "Projects"
  | "Community";

interface ContributionOption {
  title: string;
  description: string;
  icon: React.ElementType;
  category: Exclude<ContributionCategory, "All">;
  href: string;
  difficulty: string;
}

const contributionOptions: ContributionOption[] = [
  {
    title: "Code",
    description:
      "Improve features, fix bugs, build components and contribute production-ready code.",
    icon: Code2,
    category: "Code",
    href: "https://github.com/codeharborhub/codeharborhub.github.io/",
    difficulty: "Intermediate",
  },
  {
    title: "Documentation",
    description:
      "Improve explanations, fix broken links, clarify concepts and make learning resources easier to understand.",
    icon: FileText,
    category: "Documentation",
    href: "https://github.com/CodeHarborHub",
    difficulty: "Beginner",
  },
  {
    title: "Tutorials",
    description:
      "Create practical tutorials, examples, guides and learning content for developers.",
    icon: BookOpen,
    category: "Tutorials",
    href: "https://github.com/CodeHarborHub",
    difficulty: "Beginner",
  },
  {
    title: "Projects",
    description:
      "Build realistic projects that help learners move from concepts to practical engineering.",
    icon: Rocket,
    category: "Projects",
    href: "/projects/",
    difficulty: "Intermediate",
  },
  {
    title: "Community",
    description:
      "Help other learners, participate in discussions, share knowledge and improve the community.",
    icon: Users,
    category: "Community",
    href: "#",
    difficulty: "Everyone",
  },
  {
    title: "Issues & Reviews",
    description:
      "Report problems, investigate bugs, review pull requests and suggest improvements.",
    icon: Search,
    category: "Community",
    href: "https://github.com/codeharborhub/codeharborhub.github.io/",
    difficulty: "Everyone",
  },
];

const principles = [
  {
    title: "Quality",
    description:
      "Contributions should solve a real problem and maintain the quality of the learning experience.",
    icon: ShieldCheck,
  },
  {
    title: "Community",
    description:
      "Be respectful, constructive and helpful when working with learners and contributors.",
    icon: HeartHandshake,
  },
  {
    title: "Learning",
    description:
      "CodeHarborHub is a learning ecosystem. Explain your decisions and help others grow.",
    icon: Lightbulb,
  },
  {
    title: "Impact",
    description:
      "Prefer contributions that make resources more useful, accessible and practical for developers.",
    icon: Globe2,
  },
];

const workflow = [
  {
    number: "01",
    title: "Explore",
    description:
      "Understand the project, documentation, existing issues and contribution guidelines.",
  },
  {
    number: "02",
    title: "Find or create an issue",
    description:
      "Look for an existing issue before opening a duplicate. For larger changes, discuss the idea first.",
  },
  {
    number: "03",
    title: "Fork & branch",
    description:
      "Fork the repository and create a focused branch for your contribution.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Make focused changes while following the repository's structure and coding conventions.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Verify your changes locally. Check routes, links, responsive layouts and the production build.",
  },
  {
    number: "06",
    title: "Pull request",
    description:
      "Open a clear PR describing what changed, why it changed and how it was tested.",
  },
];

const qualityChecklist = [
  "The change solves a clearly defined problem.",
  "The contribution does not duplicate an existing issue or feature.",
  "Existing functionality has not been unnecessarily broken.",
  "Code follows the project's existing conventions.",
  "Pages and components work on mobile and desktop.",
  "Dark and light themes remain usable.",
  "Keyboard navigation and accessibility are considered.",
  "Links and routes have been checked.",
  "Documentation is updated when necessary.",
  "The project builds successfully before submitting the PR.",
  "No passwords, API keys, tokens or other secrets are committed.",
];

const faqs = [
  {
    question: "Do I need to be an experienced developer to contribute?",
    answer:
      "No. You can contribute through documentation, tutorials, issue reports, testing, community support and beginner-friendly code changes. Choose work that matches your current skills and use contributions as an opportunity to learn.",
  },
  {
    question: "How do I find something to work on?",
    answer:
      "Start by exploring the repository, open issues and existing documentation. Look for clearly scoped tasks and check whether someone is already working on the same problem.",
  },
  {
    question: "Can I open multiple issues in one day?",
    answer:
      "For CodeHarborHub contribution planning, keep issue creation focused and avoid flooding the repository. Check existing issues carefully and avoid duplicate reports.",
  },
  {
    question: "Can I use AI to create my contribution?",
    answer:
      "Contributions should represent your understanding and work. Do not submit copied or unreviewed AI-generated content. If you use AI as a development aid, review, understand, test and take responsibility for everything you submit.",
  },
  {
    question: "What should I include in a pull request?",
    answer:
      "Explain the problem, summarize your solution, mention important implementation details, describe testing performed and include screenshots or recordings when they help reviewers understand UI changes.",
  },
  {
    question: "Where can I ask questions?",
    answer:
      "You can use GitHub discussions/issues where appropriate or connect with the CodeHarborHub community through the available community channels.",
  },
];

function Contributing(): React.JSX.Element {
  const [activeCategory, setActiveCategory] =
    useState<ContributionCategory>("All");

  const [searchTerm, setSearchTerm] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredContributions = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return contributionOptions.filter((item) => {
      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      const searchMatch =
        normalizedSearch.length === 0 ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <Layout
      title="Contribute to CodeHarborHub"
      description="Learn how to contribute code, documentation, tutorials, projects and community improvements to CodeHarborHub."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <GitPullRequest size={16} aria-hidden="true" />
                <span>Open source • Community • Learning</span>
              </div>

              <h1>
                Build something useful.
                <span> Share it with the community.</span>
              </h1>

              <p>
                CodeHarborHub grows through developers, learners, writers,
                designers and open-source contributors. Whether you fix a typo
                or build a major feature, every meaningful contribution helps
                improve the learning experience.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="https://github.com/CodeHarborHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  <Github size={18} aria-hidden="true" />
                  Explore GitHub
                  <ArrowRight size={17} aria-hidden="true" />
                </a>

                <a
                  href="#contribution-types"
                  className={styles.secondaryButton}
                >
                  Find a way to contribute
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className={styles.heroStats}>
                <div>
                  <strong>Open source</strong>
                  <span>Public collaboration</span>
                </div>

                <div>
                  <strong>Community driven</strong>
                  <span>Learn together</span>
                </div>

                <div>
                  <strong>Real impact</strong>
                  <span>Build useful resources</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.terminal}>
                <div className={styles.terminalTop}>
                  <div className={styles.terminalDots}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className={styles.terminalTitle}>
                    contributor@codeharborhub
                  </span>
                </div>

                <div className={styles.terminalBody}>
                  <div>
                    <span className={styles.green}>$</span> git clone
                    CodeHarborHub/repository
                  </div>

                  <div>
                    <span className={styles.green}>$</span> cd codeharborhub
                  </div>

                  <div>
                    <span className={styles.green}>$</span> git checkout -b
                    feature/my-contribution
                  </div>

                  <div className={styles.terminalSpace} />

                  <div>
                    <span className={styles.blue}>✓</span> Make your changes
                  </div>

                  <div>
                    <span className={styles.blue}>✓</span> Test your changes
                  </div>

                  <div>
                    <span className={styles.blue}>✓</span> Open your pull
                    request
                  </div>

                  <div className={styles.terminalSpace} />

                  <div>
                    <span className={styles.green}>$</span> echo &quot;Build.
                    Learn. Contribute.&quot;
                  </div>

                  <div className={styles.cursor}>▋</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}
        <section className={styles.principlesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionLabel}>OUR PRINCIPLES</span>
                <h2>Contribute with purpose.</h2>
              </div>

              <p>
                Great open-source projects are built through thoughtful
                collaboration, not just more code.
              </p>
            </div>

            <div className={styles.principleGrid}>
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className={styles.principleCard}
                  >
                    <div className={styles.iconBox}>
                      <Icon size={21} aria-hidden="true" />
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
            CONTRIBUTION TYPES
        ====================================================== */}
        <section id="contribution-types" className={styles.contributionSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionLabel}>WAYS TO CONTRIBUTE</span>
                <h2>Choose where you can make an impact.</h2>
              </div>

              <p>
                You do not need to contribute code to make a valuable
                contribution.
              </p>
            </div>

            <div className={styles.explorer}>
              <div className={styles.explorerToolbar}>
                <div className={styles.searchBox}>
                  <Search size={18} aria-hidden="true" />

                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search contribution types..."
                    aria-label="Search contribution types"
                  />
                </div>

                <div className={styles.categoryFilters}>
                  {(
                    [
                      "All",
                      "Code",
                      "Documentation",
                      "Tutorials",
                      "Projects",
                      "Community",
                    ] as ContributionCategory[]
                  ).map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={
                        activeCategory === category
                          ? styles.filterActive
                          : styles.filterButton
                      }
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.contributionGrid}>
                {filteredContributions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={styles.contributionCard}
                    >
                      <div className={styles.contributionTop}>
                        <div className={styles.contributionIcon}>
                          <Icon size={22} aria-hidden="true" />
                        </div>

                        <span className={styles.difficulty}>
                          {item.difficulty}
                        </span>
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={styles.cardLink}
                      >
                        Explore
                        <ArrowRight size={16} aria-hidden="true" />
                      </a>
                    </article>
                  );
                })}
              </div>

              {filteredContributions.length === 0 && (
                <div className={styles.emptyState}>
                  <Search size={24} aria-hidden="true" />

                  <h3>No contribution type found</h3>

                  <p>Try another search term or select a different category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK START
        ====================================================== */}
        <section className={styles.quickStartSection}>
          <div className={styles.container}>
            <div className={styles.quickStart}>
              <div className={styles.quickStartIcon}>
                <Rocket size={24} aria-hidden="true" />
              </div>

              <div className={styles.quickStartContent}>
                <span className={styles.sectionLabel}>QUICK START</span>

                <h2>Your first contribution can be simple.</h2>

                <p>
                  Start with something small, understand the project, make a
                  focused improvement and learn from the review process.
                </p>

                <div className={styles.quickSteps}>
                  <span>
                    <Check size={15} aria-hidden="true" />
                    Explore
                  </span>

                  <ArrowRight size={15} aria-hidden="true" />

                  <span>
                    <Check size={15} aria-hidden="true" />
                    Improve
                  </span>

                  <ArrowRight size={15} aria-hidden="true" />

                  <span>
                    <Check size={15} aria-hidden="true" />
                    Test
                  </span>

                  <ArrowRight size={15} aria-hidden="true" />

                  <span>
                    <Check size={15} aria-hidden="true" />
                    Submit
                  </span>
                </div>
              </div>

              <a
                href="https://github.com/CodeHarborHub"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.outlineButton}
              >
                Open repository
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            WORKFLOW
        ====================================================== */}
        <section className={styles.workflowSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingCentered}>
              <span className={styles.sectionLabel}>CONTRIBUTION WORKFLOW</span>

              <h2>From idea to pull request.</h2>

              <p>
                Follow a simple workflow to keep contributions focused,
                reviewable and easy to maintain.
              </p>
            </div>

            <div className={styles.workflowGrid}>
              {workflow.map((step) => (
                <article key={step.number} className={styles.workflowCard}>
                  <div className={styles.workflowNumber}>{step.number}</div>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            GIT WORKFLOW
        ====================================================== */}
        <section className={styles.gitSection}>
          <div className={styles.container}>
            <div className={styles.gitLayout}>
              <div>
                <span className={styles.sectionLabel}>GIT WORKFLOW</span>

                <h2>A clean branch makes collaboration easier.</h2>

                <p>
                  Keep your work focused on one contribution. A clear branch and
                  clear commits help maintainers understand and review your
                  changes.
                </p>

                <div className={styles.gitChecklist}>
                  <div>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>Fork the repository</span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>Create a focused branch</span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>Commit meaningful changes</span>
                  </div>

                  <div>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>Push and open a pull request</span>
                  </div>
                </div>
              </div>

              <div className={styles.gitDiagram}>
                <div className={styles.gitNode}>
                  <Github size={19} aria-hidden="true" />
                  <span>Repository</span>
                </div>

                <div className={styles.gitLine} />

                <div className={styles.gitNode}>
                  <GitBranch size={19} aria-hidden="true" />
                  <span>Your branch</span>
                </div>

                <div className={styles.gitLine} />

                <div className={styles.gitNode}>
                  <Wrench size={19} aria-hidden="true" />
                  <span>Your changes</span>
                </div>

                <div className={styles.gitLine} />

                <div className={styles.gitNode}>
                  <GitPullRequest size={19} aria-hidden="true" />
                  <span>Pull request</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUALITY CHECKLIST
        ====================================================== */}
        <section className={styles.qualitySection}>
          <div className={styles.container}>
            <div className={styles.qualityLayout}>
              <div className={styles.qualityIntro}>
                <span className={styles.sectionLabel}>BEFORE YOU SUBMIT</span>

                <h2>Run your contributor checklist.</h2>

                <p>
                  A little preparation before opening a PR saves time for you,
                  reviewers and maintainers.
                </p>

                <div className={styles.qualityBadge}>
                  <ShieldCheck size={20} aria-hidden="true" />

                  <div>
                    <strong>Review ready</strong>
                    <span>Check your work before submission.</span>
                  </div>
                </div>
              </div>

              <div className={styles.checklistCard}>
                {qualityChecklist.map((item) => (
                  <div key={item} className={styles.checklistItem}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ISSUE GUIDELINES
        ====================================================== */}
        <section className={styles.issueSection}>
          <div className={styles.container}>
            <div className={styles.issueGrid}>
              <article className={styles.issueCard}>
                <div className={styles.issueIcon}>
                  <AlertCircle size={21} aria-hidden="true" />
                </div>

                <h3>Before opening an issue</h3>

                <ul>
                  <li>Search existing issues first.</li>
                  <li>Use a clear and specific title.</li>
                  <li>Explain the problem and expected behavior.</li>
                  <li>Include reproduction steps when possible.</li>
                  <li>Add relevant screenshots or error messages.</li>
                </ul>
              </article>

              <article className={styles.issueCard}>
                <div className={styles.issueIcon}>
                  <Star size={21} aria-hidden="true" />
                </div>

                <h3>Before opening a feature request</h3>

                <ul>
                  <li>Explain the problem the feature solves.</li>
                  <li>Describe the intended user benefit.</li>
                  <li>Consider whether an existing feature already helps.</li>
                  <li>Keep the proposal focused.</li>
                  <li>Be open to implementation alternatives.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMUNITY
        ====================================================== */}
        <section className={styles.communitySection}>
          <div className={styles.container}>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>
                <MessageCircle size={23} aria-hidden="true" />
              </div>

              <div>
                <span className={styles.sectionLabel}>COMMUNITY</span>

                <h2>Open source works better together.</h2>

                <p>
                  Ask questions, share knowledge, help other contributors and
                  keep discussions constructive.
                </p>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Join the community
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeadingCentered}>
              <span className={styles.sectionLabel}>FAQ</span>

              <h2>Contributor questions.</h2>

              <p>
                A few answers to help you get started with your first
                contribution.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={19}
                        aria-hidden="true"
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

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              <div className={styles.finalIcon}>
                <HeartHandshake size={25} aria-hidden="true" />
              </div>

              <span className={styles.sectionLabel}>
                YOUR CONTRIBUTION MATTERS
              </span>

              <h2>Ready to contribute?</h2>

              <p>
                Explore the CodeHarborHub repositories, find something useful to
                improve and start building with the community.
              </p>

              <div className={styles.finalActions}>
                <a
                  href="https://github.com/codeharborhub/codeharborhub.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  <Github size={18} aria-hidden="true" />
                  Explore GitHub
                  <ArrowRight size={17} aria-hidden="true" />
                </a>

                <Link to="/contact/" className={styles.secondaryButton}>
                  Contact us
                  <MessageCircle size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contributing;
