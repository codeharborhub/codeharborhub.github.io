import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Cookie,
  Database,
  Eye,
  FileText,
  Github,
  Globe2,
  Lock,
  Mail,
  Settings,
  Shield,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import styles from "./styles.module.css";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "cookies", label: "Cookies & Similar Technologies" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "open-source", label: "Open Source & GitHub" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights & Choices" },
  { id: "children", label: "Children's Privacy" },
  { id: "international", label: "International Use" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

const principles = [
  {
    title: "Transparency",
    description:
      "We aim to explain what information may be collected and why it may be used.",
    icon: Eye,
  },
  {
    title: "Security",
    description:
      "We take reasonable measures to protect information handled through our services.",
    icon: ShieldCheck,
  },
  {
    title: "Purpose",
    description:
      "Information should be used for legitimate purposes connected to operating and improving CodeHarborHub.",
    icon: Database,
  },
  {
    title: "Choice",
    description:
      "Where applicable, we provide choices regarding communications, cookies and personal information.",
    icon: UserCheck,
  },
];

const faqs = [
  {
    question: "What information does CodeHarborHub collect?",
    answer:
      "Depending on how you use the website, we may receive information that you voluntarily provide, technical information about your device or browser, usage information, and information provided through third-party services you choose to use.",
  },
  {
    question: "Does CodeHarborHub sell personal information?",
    answer:
      "CodeHarborHub does not intend to sell personal information. If our data practices change in a material way, this Privacy Policy will be updated as appropriate.",
  },
  {
    question: "Does the website use cookies?",
    answer:
      "The website may use cookies or similar technologies for essential functionality, preferences, analytics, security and, where applicable, advertising. The specific technologies used may change as the platform evolves.",
  },
  {
    question: "How can I contact CodeHarborHub about privacy?",
    answer:
      "You can contact us about privacy questions, requests or concerns through the contact information provided at the end of this policy.",
  },
];

function PrivacyPolicy(): React.JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for CodeHarborHub explaining information collection, use, cookies, third-party services, security and user choices."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroPattern} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Shield size={16} aria-hidden="true" />
                <span>Privacy & Transparency</span>
              </div>

              <h1>
                Your privacy
                <span> matters to us.</span>
              </h1>

              <p>
                This Privacy Policy explains how CodeHarborHub may collect,
                use, protect and handle information when you visit or use our
                website, learning resources, community features and related
                services.
              </p>

              <div className={styles.heroMeta}>
                <div>
                  <FileText size={17} aria-hidden="true" />
                  <span>Privacy Policy</span>
                </div>

                <div>
                  <ShieldCheck size={17} aria-hidden="true" />
                  <span>Clear & transparent</span>
                </div>

                <div>
                  <Globe2 size={17} aria-hidden="true" />
                  <span>For our global community</span>
                </div>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.heroCardIcon}>
                <Lock size={25} aria-hidden="true" />
              </div>

              <h2>Privacy by principle</h2>

              <p>
                We aim to collect and use information responsibly and only for
                legitimate purposes connected with providing and improving
                CodeHarborHub.
              </p>

              <div className={styles.heroCardLine}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.updated}>
                <strong>Last updated</strong>
                <span>September 17, 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}
        <section className={styles.principlesSection}>
          <div className={styles.container}>
            <div className={styles.principleGrid}>
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className={styles.principleCard}
                  >
                    <div className={styles.principleIcon}>
                      <Icon size={20} aria-hidden="true" />
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
            CONTENT
        ====================================================== */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.contentLayout}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarInner}>
                  <div className={styles.sidebarTitle}>
                    <FileText size={17} aria-hidden="true" />
                    <span>On this page</span>
                  </div>

                  <nav aria-label="Privacy Policy sections">
                    {sections.map((section) => (
                      <a key={section.id} href={`#${section.id}`}>
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main document */}
              <article className={styles.document}>
                {/* Introduction */}
                <section id="introduction" className={styles.documentSection}>
                  <span className={styles.sectionNumber}>01</span>

                  <h2>Introduction</h2>

                  <p>
                    Welcome to CodeHarborHub. We are committed to respecting
                    your privacy and being transparent about how information may
                    be handled when you use our website and services.
                  </p>

                  <p>
                    This Privacy Policy describes the general categories of
                    information that may be collected, how that information may
                    be used, the role of cookies and third-party services, and
                    choices that may be available to you.
                  </p>

                  <div className={styles.notice}>
                    <ShieldCheck size={20} aria-hidden="true" />

                    <div>
                      <strong>Important</strong>
                      <p>
                        CodeHarborHub is an evolving open-source learning
                        platform. The technologies and services used by the
                        platform may change over time. This policy may therefore
                        be updated when our practices change.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Information We Collect */}
                <section
                  id="information-we-collect"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>02</span>

                  <h2>Information We Collect</h2>

                  <p>
                    The information we handle depends on how you interact with
                    CodeHarborHub.
                  </p>

                  <h3>Information you provide</h3>

                  <p>
                    You may voluntarily provide information when you contact us,
                    participate in the community, submit feedback, contribute
                    to projects or use features that require an account.
                  </p>

                  <ul>
                    <li>Name or display name.</li>
                    <li>Email address.</li>
                    <li>Contact information you choose to provide.</li>
                    <li>Messages, feedback and support requests.</li>
                    <li>Content submitted as part of contributions.</li>
                  </ul>

                  <h3>Technical information</h3>

                  <p>
                    When you visit a website, standard technical information
                    may be generated automatically by your browser, hosting
                    provider or other infrastructure.
                  </p>

                  <ul>
                    <li>IP address or approximate network information.</li>
                    <li>Browser and device information.</li>
                    <li>Operating system information.</li>
                    <li>Pages and resources accessed.</li>
                    <li>Referring or exit pages.</li>
                    <li>Date, time and general usage information.</li>
                  </ul>

                  <h3>Information from third parties</h3>

                  <p>
                    If you choose to interact with third-party platforms such
                    as GitHub, authentication providers, community platforms or
                    other integrated services, those services may provide or
                    process information according to their own privacy policies.
                  </p>
                </section>

                {/* How We Use */}
                <section
                  id="how-we-use-information"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>03</span>

                  <h2>How We Use Information</h2>

                  <p>
                    Information may be used for purposes such as operating,
                    maintaining and improving CodeHarborHub.
                  </p>

                  <div className={styles.useGrid}>
                    <div>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Provide and maintain website functionality.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Respond to questions and support requests.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Improve tutorials and learning resources.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Understand website usage and performance.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Protect the website against abuse and misuse.</span>
                    </div>

                    <div>
                      <CheckCircle2 size={18} aria-hidden="true" />
                      <span>Communicate important service information.</span>
                    </div>
                  </div>

                  <p>
                    We may also use information to comply with applicable
                    legal obligations, enforce our terms and policies, or
                    protect the rights, safety and security of CodeHarborHub,
                    contributors and users.
                  </p>
                </section>

                {/* Cookies */}
                <section id="cookies" className={styles.documentSection}>
                  <span className={styles.sectionNumber}>04</span>

                  <h2>Cookies & Similar Technologies</h2>

                  <p>
                    CodeHarborHub may use cookies, local storage, pixels or
                    similar technologies depending on the features and services
                    enabled on the website.
                  </p>

                  <div className={styles.infoCards}>
                    <div className={styles.infoCard}>
                      <div className={styles.infoCardIcon}>
                        <Cookie size={19} aria-hidden="true" />
                      </div>

                      <h3>Essential</h3>

                      <p>
                        Technologies required for core website functionality,
                        security or preferences.
                      </p>
                    </div>

                    <div className={styles.infoCard}>
                      <div className={styles.infoCardIcon}>
                        <BarChart3 size={19} aria-hidden="true" />
                      </div>

                      <h3>Analytics</h3>

                      <p>
                        Technologies that may help us understand traffic,
                        usage and website performance.
                      </p>
                    </div>

                    <div className={styles.infoCard}>
                      <div className={styles.infoCardIcon}>
                        <Settings size={19} aria-hidden="true" />
                      </div>

                      <h3>Preferences</h3>

                      <p>
                        Technologies that may remember choices such as
                        preferences or interface settings.
                      </p>
                    </div>
                  </div>

                  <p>
                    Depending on your browser, device and location, you may be
                    able to control cookies through browser settings or
                    available consent controls.
                  </p>
                </section>

                {/* Third Party */}
                <section
                  id="third-party-services"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>05</span>

                  <h2>Third-Party Services</h2>

                  <p>
                    CodeHarborHub may use third-party services to provide
                    hosting, analytics, authentication, advertising,
                    communications, comments, community functionality or other
                    infrastructure.
                  </p>

                  <p>
                    Examples may include hosting providers, GitHub, analytics
                    providers, advertising providers, authentication services,
                    community platforms and other tools integrated into the
                    website.
                  </p>

                  <div className={styles.notice}>
                    <Globe2 size={20} aria-hidden="true" />

                    <div>
                      <strong>Third-party privacy policies</strong>
                      <p>
                        Third-party services operate under their own terms and
                        privacy policies. We encourage you to review the
                        relevant policies of services you choose to use.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Open Source */}
                <section
                  id="open-source"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>06</span>

                  <h2>Open Source & GitHub</h2>

                  <p>
                    CodeHarborHub is an open-source ecosystem. Contributions
                    made through public repositories, issues, pull requests,
                    discussions or other public collaboration channels may be
                    visible to other users and the public.
                  </p>

                  <p>
                    Do not include passwords, API keys, private credentials,
                    financial information, private personal information or
                    other sensitive information in public repositories, issues,
                    pull requests or discussions.
                  </p>

                  <a
                    href="https://github.com/CodeHarborHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    <Github size={17} aria-hidden="true" />
                    View CodeHarborHub on GitHub
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </section>

                {/* Data Sharing */}
                <section
                  id="data-sharing"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>07</span>

                  <h2>Data Sharing</h2>

                  <p>
                    We may share information with service providers or
                    technology partners when reasonably necessary to operate
                    CodeHarborHub and provide requested functionality.
                  </p>

                  <p>
                    Information may also be disclosed when required by law,
                    legal process, security requirements or to protect the
                    rights and safety of users, contributors or the platform.
                  </p>

                  <p>
                    We do not intend to sell personal information as a business
                    practice.
                  </p>
                </section>

                {/* Security */}
                <section
                  id="data-security"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>08</span>

                  <h2>Data Security</h2>

                  <p>
                    We take reasonable technical and organizational measures
                    intended to protect information from unauthorized access,
                    alteration, disclosure or destruction.
                  </p>

                  <p>
                    However, no internet transmission, storage system or
                    electronic service can be guaranteed to be completely
                    secure. You should avoid submitting sensitive information
                    through public channels or public repositories.
                  </p>

                  <div className={styles.securityGrid}>
                    <div>
                      <Lock size={19} aria-hidden="true" />
                      <strong>Protect credentials</strong>
                      <span>
                        Never publish passwords, tokens or API keys.
                      </span>
                    </div>

                    <div>
                      <ShieldCheck size={19} aria-hidden="true" />
                      <strong>Use secure channels</strong>
                      <span>
                        Use appropriate private channels for sensitive requests.
                      </span>
                    </div>
                  </div>
                </section>

                {/* Retention */}
                <section
                  id="data-retention"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>09</span>

                  <h2>Data Retention</h2>

                  <p>
                    We retain information only for as long as reasonably
                    necessary for the purpose for which it was collected,
                    including providing services, maintaining records,
                    resolving disputes, enforcing agreements and meeting legal
                    obligations.
                  </p>

                  <p>
                    Retention periods can vary depending on the type of
                    information and the context in which it was collected.
                  </p>
                </section>

                {/* Rights */}
                <section
                  id="your-rights"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>10</span>

                  <h2>Your Rights & Choices</h2>

                  <p>
                    Depending on your location and applicable law, you may have
                    rights concerning your personal information.
                  </p>

                  <ul>
                    <li>
                      Request information about personal data we may hold.
                    </li>
                    <li>Request correction of inaccurate information.</li>
                    <li>Request deletion where legally applicable.</li>
                    <li>Object to or restrict certain processing.</li>
                    <li>Withdraw consent where processing is based on consent.</li>
                    <li>Opt out of certain communications.</li>
                  </ul>

                  <p>
                    These rights may be subject to legal limitations and
                    verification requirements.
                  </p>

                  <p>
                    To make a privacy-related request, contact us using the
                    information in the{" "}
                    <a href="#contact">Contact Us</a> section.
                  </p>
                </section>

                {/* Children */}
                <section id="children" className={styles.documentSection}>
                  <span className={styles.sectionNumber}>11</span>

                  <h2>Children&apos;s Privacy</h2>

                  <p>
                    CodeHarborHub is designed as a technology learning platform
                    for a broad developer audience. We do not knowingly seek to
                    collect personal information from children in violation of
                    applicable laws.
                  </p>

                  <p>
                    If you believe a child has provided personal information to
                    us in a way that violates applicable requirements, please
                    contact us so that the situation can be reviewed.
                  </p>
                </section>

                {/* International */}
                <section
                  id="international"
                  className={styles.documentSection}
                >
                  <span className={styles.sectionNumber}>12</span>

                  <h2>International Use</h2>

                  <p>
                    CodeHarborHub is an online platform that may be accessed by
                    people from different countries. Depending on the services
                    involved, information may be processed or stored in
                    countries other than the country where you live.
                  </p>

                  <p>
                    Where applicable, processing and transfers are intended to
                    be handled in accordance with relevant legal requirements.
                  </p>
                </section>

                {/* Changes */}
                <section id="changes" className={styles.documentSection}>
                  <span className={styles.sectionNumber}>13</span>

                  <h2>Changes to This Policy</h2>

                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our services, technologies, legal
                    requirements or data practices.
                  </p>

                  <p>
                    When changes are made, the updated policy will be published
                    on this page with a revised &quot;Last updated&quot; date.
                  </p>

                  <div className={styles.updateCard}>
                    <FileText size={19} aria-hidden="true" />

                    <div>
                      <strong>Current version</strong>
                      <span>Last updated: September 17, 2026</span>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className={styles.documentSection}>
                  <span className={styles.sectionNumber}>14</span>

                  <h2>Contact Us</h2>

                  <p>
                    If you have questions, concerns or requests relating to
                    this Privacy Policy or the handling of your information,
                    please contact CodeHarborHub.
                  </p>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIcon}>
                      <Mail size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <span>Privacy & general inquiries</span>

                      <a href="mailto:codeharborhub@gmail.com">
                        codeharborhub@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactActions}>
                    <Link
                      to="/contact/"
                      className={styles.primaryButton}
                    >
                      Contact CodeHarborHub
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>

                    <a
                      href="https://github.com/CodeHarborHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryButton}
                    >
                      <Github size={17} aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqHeading}>
              <span className={styles.sectionLabel}>PRIVACY FAQ</span>

              <h2>Common privacy questions.</h2>

              <p>
                Quick answers to some common questions about information and
                privacy on CodeHarborHub.
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
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
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
                <ShieldCheck size={25} aria-hidden="true" />
              </div>

              <span className={styles.sectionLabel}>
                QUESTIONS ABOUT PRIVACY?
              </span>

              <h2>We&apos;re here to help.</h2>

              <p>
                If something in this policy is unclear or you have a
                privacy-related request, contact the CodeHarborHub team.
              </p>

              <Link to="/contact/" className={styles.primaryButton}>
                Contact us
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default PrivacyPolicy;