import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileCheck2,
  FileText,
  Gavel,
  Github,
  Globe2,
  Lock,
  Mail,
  Scale,
  ShieldCheck,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";

import styles from "./styles.module.css";

type Section = {
  id: string;
  number: string;
  title: string;
};

const sections: Section[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility",
  },
  {
    id: "accounts",
    number: "03",
    title: "Accounts & Responsibilities",
  },
  {
    id: "platform",
    number: "04",
    title: "Use of the Platform",
  },
  {
    id: "content",
    number: "05",
    title: "Educational Content",
  },
  {
    id: "open-source",
    number: "06",
    title: "Open Source & Contributions",
  },
  {
    id: "intellectual-property",
    number: "07",
    title: "Intellectual Property",
  },
  {
    id: "third-party",
    number: "08",
    title: "Third-Party Services",
  },
  {
    id: "prohibited",
    number: "09",
    title: "Prohibited Activities",
  },
  {
    id: "availability",
    number: "10",
    title: "Availability & Changes",
  },
  {
    id: "disclaimers",
    number: "11",
    title: "Disclaimers",
  },
  {
    id: "limitation",
    number: "12",
    title: "Limitation of Liability",
  },
  {
    id: "termination",
    number: "13",
    title: "Termination",
  },
  {
    id: "governing-law",
    number: "14",
    title: "Governing Law",
  },
  {
    id: "changes",
    number: "15",
    title: "Changes to These Terms",
  },
  {
    id: "contact",
    number: "16",
    title: "Contact Us",
  },
];

const faqs = [
  {
    question: "Do I need an account to use CodeHarborHub?",
    answer:
      "Some parts of CodeHarborHub may be available without an account. Certain features, such as personalized progress, community functionality, or future learning services, may require an account.",
  },
  {
    question: "Can I use CodeHarborHub tutorials in my projects?",
    answer:
      "Yes, you can generally use the knowledge you gain from the educational material in your own projects. However, individual code examples, assets, datasets, or third-party resources may have their own licenses or attribution requirements.",
  },
  {
    question: "Can I contribute to CodeHarborHub?",
    answer:
      "Yes. Code, documentation, tutorials, issue reports, projects, and other contributions may be accepted through the CodeHarborHub open-source repositories. Contributions are subject to the applicable repository license, contribution guidelines, and community rules.",
  },
  {
    question: "Does completing a roadmap guarantee a job or internship?",
    answer:
      "No. CodeHarborHub provides educational resources and learning paths. Completing a tutorial, roadmap, project, or practice activity does not guarantee employment, an internship, certification, interview selection, or any particular career outcome.",
  },
  {
    question: "Can CodeHarborHub change or remove content?",
    answer:
      "Yes. Educational content, features, projects, roadmaps, services, and other parts of the platform may be updated, changed, suspended, or removed as the platform evolves.",
  },
];

export default function TermsOfService(): React.JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Terms of Service"
      description="Terms of Service for CodeHarborHub explaining the rules, responsibilities, content usage, open-source contributions, and conditions for using the platform."
    >
      <main className={styles.page}>
        {/* Breadcrumb */}
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Terms of Service</span>
          </nav>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <Scale size={15} />
                  Legal &amp; platform rules
                </div>

                <h1>
                  Terms of
                  <span> Service</span>
                </h1>

                <p>
                  These terms explain the rules and responsibilities that
                  apply when you access or use CodeHarborHub, including its
                  tutorials, roadmaps, practice resources, projects,
                  community features, and open-source repositories.
                </p>

                <div className={styles.heroMeta}>
                  <span>
                    <FileCheck2 size={16} />
                    Clear platform rules
                  </span>

                  <span>
                    <ShieldCheck size={16} />
                    Responsible use
                  </span>

                  <span>
                    <Users size={16} />
                    Community focused
                  </span>
                </div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroCardIcon}>
                  <Gavel size={24} />
                </div>

                <span className={styles.heroCardLabel}>Last updated</span>

                <strong>September 18, 2026</strong>

                <p>
                  Please read these terms before using CodeHarborHub. By
                  accessing the platform, you agree to follow these terms and
                  applicable laws.
                </p>

                <div className={styles.heroCardDivider} />

                <div className={styles.heroCardLinks}>
                  <Link to="/privacy-policy/">
                    Privacy Policy
                    <ArrowRight size={14} />
                  </Link>

                  <Link to="/code-of-conduct/">
                    Code of Conduct
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentLayout}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarInner}>
                  <div className={styles.sidebarTitle}>
                    <FileText size={16} />
                    On this page
                  </div>

                  <nav aria-label="Terms sections">
                    {sections.map((section) => (
                      <a key={section.id} href={`#${section.id}`}>
                        <span>{section.number}</span>
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Article */}
              <article className={styles.article}>
                {/* 01 */}
                <section id="acceptance" className={styles.section}>
                  <SectionHeading
                    number="01"
                    title="Acceptance of Terms"
                    icon={<FileCheck2 size={19} />}
                  />

                  <p>
                    Welcome to CodeHarborHub. These Terms of Service
                    (&quot;Terms&quot;) govern your access to and use of the
                    CodeHarborHub website, educational resources, learning
                    paths, practice features, project resources, community
                    features, and related services.
                  </p>

                  <p>
                    By accessing or using CodeHarborHub, you acknowledge that
                    you have read, understood, and agree to be bound by these
                    Terms. If you do not agree with these Terms, please do not
                    use the platform.
                  </p>

                  <div className={styles.notice}>
                    <CheckCircle2 size={19} />
                    <div>
                      <strong>Use the platform responsibly</strong>
                      <p>
                        CodeHarborHub is designed to support learning,
                        experimentation, collaboration, and responsible
                        development.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 02 */}
                <section id="eligibility" className={styles.section}>
                  <SectionHeading
                    number="02"
                    title="Eligibility"
                    icon={<UserCheck size={19} />}
                  />

                  <p>
                    You may use CodeHarborHub if you are legally permitted to
                    do so under the laws applicable to you.
                  </p>

                  <p>
                    If you use the platform on behalf of an organization,
                    company, school, or other entity, you represent that you
                    have the authority to accept these Terms on its behalf.
                  </p>

                  <p>
                    If you are under the age required to independently agree
                    to online services in your jurisdiction, you should use
                    CodeHarborHub only with the involvement and permission of
                    a parent, guardian, or other legally authorized adult.
                  </p>
                </section>

                {/* 03 */}
                <section id="accounts" className={styles.section}>
                  <SectionHeading
                    number="03"
                    title="Accounts & Responsibilities"
                    icon={<Lock size={19} />}
                  />

                  <p>
                    Some CodeHarborHub features may require you to create an
                    account or authenticate through a supported third-party
                    service.
                  </p>

                  <div className={styles.twoColumn}>
                    <InfoCard
                      icon={<CheckCircle2 size={18} />}
                      title="You should"
                      items={[
                        "Provide accurate information where required.",
                        "Keep your account credentials secure.",
                        "Use your own account when accessing personalized features.",
                        "Notify us if you believe your account has been compromised.",
                      ]}
                    />

                    <InfoCard
                      icon={<XCircle size={18} />}
                      title="You should not"
                      items={[
                        "Share credentials in a way that compromises account security.",
                        "Impersonate another person or organization.",
                        "Attempt to access another user's account.",
                        "Use accounts to circumvent platform restrictions.",
                      ]}
                    />
                  </div>
                </section>

                {/* 04 */}
                <section id="platform" className={styles.section}>
                  <SectionHeading
                    number="04"
                    title="Use of the Platform"
                    icon={<Globe2 size={19} />}
                  />

                  <p>
                    CodeHarborHub provides educational and community-oriented
                    resources for developers and technology learners.
                  </p>

                  <p>
                    You may access and use the platform for lawful purposes,
                    including learning, practicing programming, building
                    projects, participating in community activities, and
                    contributing to open-source projects.
                  </p>

                  <p>
                    You are responsible for ensuring that your use of the
                    platform complies with applicable laws, regulations,
                    third-party rights, and these Terms.
                  </p>
                </section>

                {/* 05 */}
                <section id="content" className={styles.section}>
                  <SectionHeading
                    number="05"
                    title="Educational Content"
                    icon={<BookOpen size={19} />}
                  />

                  <p>
                    CodeHarborHub may provide tutorials, documentation,
                    examples, roadmaps, challenges, projects, reference
                    material, code snippets, diagrams, and other educational
                    resources.
                  </p>

                  <p>
                    Educational content is intended to help you understand
                    technology concepts and develop practical skills. You are
                    responsible for evaluating and testing code before using
                    it in production systems.
                  </p>

                  <div className={styles.noticeWarning}>
                    <AlertTriangle size={19} />
                    <div>
                      <strong>Production responsibility</strong>
                      <p>
                        Do not assume that educational examples are production
                        ready. Review security, performance, reliability,
                        licensing, privacy, and operational requirements before
                        deploying software.
                      </p>
                    </div>
                  </div>

                  <p>
                    Technology changes quickly. Examples, APIs, frameworks,
                    libraries, tools, and recommended practices may become
                    outdated or change over time.
                  </p>
                </section>

                {/* 06 */}
                <section id="open-source" className={styles.section}>
                  <SectionHeading
                    number="06"
                    title="Open Source & Contributions"
                    icon={<Github size={19} />}
                  />

                  <p>
                    CodeHarborHub may maintain public repositories and accept
                    contributions from the developer community.
                  </p>

                  <p>
                    Contributions may include source code, documentation,
                    tutorials, examples, issue reports, tests, design work,
                    translations, and other materials.
                  </p>

                  <div className={styles.ruleList}>
                    <div>
                      <span>01</span>
                      <p>
                        Contributions must follow the relevant repository's
                        contribution guidelines.
                      </p>
                    </div>

                    <div>
                      <span>02</span>
                      <p>
                        Contributors must have the necessary rights to submit
                        the material they contribute.
                      </p>
                    </div>

                    <div>
                      <span>03</span>
                      <p>
                        Contributions may be reviewed, modified, accepted, or
                        rejected according to project requirements.
                      </p>
                    </div>

                    <div>
                      <span>04</span>
                      <p>
                        Repository-specific licenses and contribution terms
                        may apply in addition to these Terms.
                      </p>
                    </div>
                  </div>

                  <div className={styles.inlineCta}>
                    <div>
                      <strong>Want to contribute?</strong>
                      <span>
                        Read the contribution workflow before opening a pull
                        request.
                      </span>
                    </div>

                    <Link to="/contributing/">
                      Contribution guide
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </section>

                {/* 07 */}
                <section id="intellectual-property" className={styles.section}>
                  <SectionHeading
                    number="07"
                    title="Intellectual Property"
                    icon={<Code2 size={19} />}
                  />

                  <p>
                    Unless otherwise stated, CodeHarborHub's original
                    branding, website design, written materials, visual
                    assets, and other original content remain the property of
                    their respective rights holders.
                  </p>

                  <p>
                    Software and source code distributed through public
                    repositories may be governed by the specific open-source
                    license included with those repositories. You should
                    review the applicable license before copying, modifying,
                    redistributing, or incorporating repository code into
                    another project.
                  </p>

                  <p>
                    Third-party names, logos, trademarks, libraries,
                    frameworks, and other intellectual property remain the
                    property of their respective owners.
                  </p>
                </section>

                {/* 08 */}
                <section id="third-party" className={styles.section}>
                  <SectionHeading
                    number="08"
                    title="Third-Party Services"
                    icon={<Globe2 size={19} />}
                  />

                  <p>
                    CodeHarborHub may integrate with or link to third-party
                    services, websites, APIs, hosting providers, analytics
                    services, authentication providers, code repositories,
                    community platforms, or other external systems.
                  </p>

                  <p>
                    Third-party services operate under their own terms and
                    privacy policies. CodeHarborHub is not responsible for
                    third-party services that it does not control.
                  </p>

                  <p>
                    You should review the applicable terms and privacy
                    practices of third-party services before using them.
                  </p>
                </section>

                {/* 09 */}
                <section id="prohibited" className={styles.section}>
                  <SectionHeading
                    number="09"
                    title="Prohibited Activities"
                    icon={<ShieldCheck size={19} />}
                  />

                  <p>
                    You agree not to misuse CodeHarborHub or use the platform
                    to violate applicable laws, harm other users, interfere
                    with services, or compromise security.
                  </p>

                  <div className={styles.prohibitedGrid}>
                    <ProhibitedItem>
                      Attempting unauthorized access to systems, accounts, or
                      data.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Distributing malware, malicious code, or harmful
                      software through the platform.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Abusing automated requests, scraping, or traffic in a way
                      that disrupts the platform.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Impersonating users, maintainers, organizations, or other
                      entities.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Uploading content that infringes another person's
                      intellectual-property rights.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Using community or platform features to harass, threaten,
                      discriminate against, or harm others.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Attempting to bypass security controls, authentication,
                      rate limits, or other technical restrictions.
                    </ProhibitedItem>

                    <ProhibitedItem>
                      Using the platform for unlawful activities or activities
                      that violate applicable regulations.
                    </ProhibitedItem>
                  </div>

                  <p className={styles.smallNote}>
                    Security research and ethical hacking should always be
                    performed only with appropriate authorization and within
                    clearly defined scope.
                  </p>
                </section>

                {/* 10 */}
                <section id="availability" className={styles.section}>
                  <SectionHeading
                    number="10"
                    title="Availability & Changes"
                    icon={<Globe2 size={19} />}
                  />

                  <p>
                    We aim to keep CodeHarborHub useful and available, but we
                    do not guarantee that the platform will always be
                    available, uninterrupted, error-free, or compatible with
                    every device, browser, network, or third-party service.
                  </p>

                  <p>
                    We may modify, suspend, replace, or discontinue parts of
                    the platform, including tutorials, roadmaps, practice
                    features, projects, APIs, community features, or other
                    functionality.
                  </p>
                </section>

                {/* 11 */}
                <section id="disclaimers" className={styles.section}>
                  <SectionHeading
                    number="11"
                    title="Disclaimers"
                    icon={<AlertTriangle size={19} />}
                  />

                  <p>
                    CodeHarborHub is provided for educational and informational
                    purposes. To the extent permitted by applicable law, the
                    platform and its content are provided without guarantees
                    that the information will always be complete, accurate,
                    current, or suitable for a particular purpose.
                  </p>

                  <p>
                    You are responsible for how you use information,
                    tutorials, examples, code, recommendations, and other
                    resources provided through CodeHarborHub.
                  </p>

                  <div className={styles.disclaimerBox}>
                    <AlertTriangle size={21} />

                    <div>
                      <strong>No career guarantee</strong>
                      <p>
                        CodeHarborHub does not guarantee employment, internships,
                        promotions, freelance opportunities, certifications,
                        interview invitations, salaries, or other specific
                        professional outcomes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 12 */}
                <section id="limitation" className={styles.section}>
                  <SectionHeading
                    number="12"
                    title="Limitation of Liability"
                    icon={<Scale size={19} />}
                  />

                  <p>
                    To the maximum extent permitted by applicable law,
                    CodeHarborHub and its maintainers, contributors, and
                    associated parties will not be liable for indirect,
                    incidental, special, consequential, or similar damages
                    arising from your use of or inability to use the platform.
                  </p>

                  <p>
                    This may include loss of data, business interruption,
                    project issues, lost opportunities, or other consequences
                    resulting from reliance on educational resources or
                    platform functionality.
                  </p>

                  <p>
                    Nothing in these Terms is intended to exclude or limit
                    liability where applicable law does not permit such
                    exclusion or limitation.
                  </p>
                </section>

                {/* 13 */}
                <section id="termination" className={styles.section}>
                  <SectionHeading
                    number="13"
                    title="Termination"
                    icon={<Lock size={19} />}
                  />

                  <p>
                    You may stop using CodeHarborHub at any time.
                  </p>

                  <p>
                    Where appropriate and permitted by applicable law,
                    CodeHarborHub may suspend or restrict access to accounts,
                    features, or services when users violate these Terms,
                    applicable laws, security requirements, community rules,
                    or other relevant policies.
                  </p>

                  <p>
                    Some provisions of these Terms, including provisions
                    concerning intellectual property, disclaimers, limitations
                    of liability, and governing law, may continue to apply
                    after use of the platform ends.
                  </p>
                </section>

                {/* 14 */}
                <section id="governing-law" className={styles.section}>
                  <SectionHeading
                    number="14"
                    title="Governing Law"
                    icon={<Gavel size={19} />}
                  />

                  <p>
                    These Terms are intended to be interpreted in accordance
                    with applicable laws and regulations.
                  </p>

                  <p>
                    If a specific governing law or jurisdiction is required for
                    CodeHarborHub's operation, the applicable legal documents
                    or agreements may specify those details.
                  </p>

                  <div className={styles.noticeWarning}>
                    <AlertTriangle size={19} />

                    <div>
                      <strong>Legal review recommended</strong>
                      <p>
                        Before publishing these Terms for a commercial
                        service, review the governing-law and jurisdiction
                        provisions with a qualified legal professional for the
                        jurisdictions in which your service operates.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 15 */}
                <section id="changes" className={styles.section}>
                  <SectionHeading
                    number="15"
                    title="Changes to These Terms"
                    icon={<FileText size={19} />}
                  />

                  <p>
                    CodeHarborHub may update these Terms as the platform,
                    services, features, technology, or applicable requirements
                    evolve.
                  </p>

                  <p>
                    When material changes are made, the updated version will be
                    published on this page with a revised &quot;Last
                    updated&quot; date where appropriate.
                  </p>

                  <p>
                    Your continued use of CodeHarborHub after updated Terms
                    become effective constitutes your acceptance of the
                    updated Terms, to the extent permitted by applicable law.
                  </p>
                </section>

                {/* 16 */}
                <section id="contact" className={styles.section}>
                  <SectionHeading
                    number="16"
                    title="Contact Us"
                    icon={<Mail size={19} />}
                  />

                  <p>
                    If you have questions about these Terms of Service,
                    platform usage, content licensing, or another legal
                    concern, please contact the CodeHarborHub team.
                  </p>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIcon}>
                      <Mail size={21} />
                    </div>

                    <div>
                      <span>Email</span>
                      <a href="mailto:codeharborhub@gmail.com">
                        codeharborhub@gmail.com
                      </a>
                    </div>

                    <Link to="/contact/" className={styles.contactButton}>
                      Contact page
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.faqHeader}>
              <span className={styles.sectionEyebrow}>
                <BookOpen size={15} />
                Quick answers
              </span>

              <h2>Frequently asked questions</h2>

              <p>
                A few common questions about using CodeHarborHub and its
                educational resources.
              </p>
            </div>

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
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={18} />
                    </button>

                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Navigation */}
        <section className={styles.legalNavSection}>
          <div className="container">
            <div className={styles.legalNav}>
              <Link to="/privacy-policy/">
                <div>
                  <Lock size={19} />
                </div>

                <span>
                  <small>Read next</small>
                  Privacy Policy
                </span>

                <ArrowRight size={17} />
              </Link>

              <Link to="/code-of-conduct/">
                <div>
                  <Users size={19} />
                </div>

                <span>
                  <small>Community</small>
                  Code of Conduct
                </span>

                <ArrowRight size={17} />
              </Link>

              <Link to="/contact/">
                <div>
                  <Mail size={19} />
                </div>

                <span>
                  <small>Need help?</small>
                  Contact CodeHarborHub
                </span>

                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalSection}>
          <div className="container">
            <div className={styles.finalCard}>
              <div className={styles.finalIcon}>
                <Scale size={20} />
              </div>

              <span>Learn responsibly</span>

              <h2>Build, learn, share, and contribute.</h2>

              <p>
                CodeHarborHub exists to make technology learning accessible
                while encouraging responsible development and open-source
                collaboration.
              </p>

              <div className={styles.finalActions}>
                <Link
                  to="/tutorial/"
                  className={styles.primaryButton}
                >
                  Start learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contributing/"
                  className={styles.secondaryButton}
                >
                  Contribute to CodeHarborHub
                  <Github size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function SectionHeading({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionNumber}>{number}</div>

      <div className={styles.sectionIcon}>{icon}</div>

      <h2>{title}</h2>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardTitle}>
        {icon}
        <strong>{title}</strong>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProhibitedItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.prohibitedItem}>
      <XCircle size={17} />
      <span>{children}</span>
    </div>
  );
}