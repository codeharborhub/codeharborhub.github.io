import React, { useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cookie,
  ExternalLink,
  Info,
  Lock,
  Mail,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  XCircle,
  Globe2,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

const lastUpdated = "September 17, 2026";

const cookieTypes = [
  {
    title: "Essential Cookies",
    description:
      "These cookies support core website functionality and help the site operate correctly. They may be required for features such as navigation, security and remembering basic preferences.",
    icon: ShieldCheck,
    status: "Required",
  },
  {
    title: "Preference Cookies",
    description:
      "These cookies may remember choices such as interface preferences or settings so that the experience can be more convenient when you return.",
    icon: Settings,
    status: "Optional",
  },
  {
    title: "Analytics Cookies",
    description:
      "Analytics technologies may help us understand how visitors use CodeHarborHub, such as which pages are visited and how the website performs.",
    icon: SlidersHorizontal,
    status: "Optional",
  },
  {
    title: "Advertising Cookies",
    description:
      "Advertising technologies may be used to support relevant advertising or measure advertising performance where applicable.",
    icon: Info,
    status: "Optional",
  },
];

const faqItems = [
  {
    question: "What are cookies?",
    answer:
      "Cookies are small pieces of data that websites can store in your browser. They can be used to support website functionality, remember preferences, understand website usage and, where applicable, support advertising.",
  },
  {
    question: "Are all cookies required?",
    answer:
      "No. Some cookies may be necessary for basic website functionality, while other technologies may be optional depending on the features and services being used.",
  },
  {
    question: "Can I disable cookies?",
    answer:
      "You can usually control or delete cookies through your browser settings. Disabling certain cookies may affect the availability or functionality of some website features.",
  },
  {
    question: "Does CodeHarborHub use third-party services?",
    answer:
      "CodeHarborHub may integrate third-party services for functionality such as analytics, advertising, community features, embedded content or other website capabilities. These providers may use their own cookies or similar technologies according to their respective policies.",
  },
  {
    question: "How often can this policy change?",
    answer:
      "This Cookie Policy may be updated when our website, services, technologies or legal requirements change. The latest version will be published on this page with an updated date.",
  },
];

function CookiePolicy(): React.JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout
      title="Cookie Policy"
      description="Learn how CodeHarborHub may use cookies and similar technologies."
    >
      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Cookie size={16} aria-hidden="true" />
                <span>Privacy & Transparency</span>
              </div>

              <h1>
                Cookie
                <span> Policy.</span>
              </h1>

              <p>
                This page explains how CodeHarborHub may use cookies and
                similar technologies to operate, improve and understand our
                website.
              </p>

              <div className={styles.heroMeta}>
                <div>
                  <span>Last updated</span>
                  <strong>{lastUpdated}</strong>
                </div>

                <div className={styles.metaDivider} />

                <div>
                  <span>Applies to</span>
                  <strong>CodeHarborHub website</strong>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.cookieIllustration}>
                <div className={styles.cookieCircle}>
                  <Cookie size={76} strokeWidth={1.5} />

                  <span className={styles.cookieDotOne} />
                  <span className={styles.cookieDotTwo} />
                  <span className={styles.cookieDotThree} />
                  <span className={styles.cookieDotFour} />
                </div>

                <div className={styles.floatingCard}>
                  <ShieldCheck size={18} aria-hidden="true" />
                  <span>Privacy matters</span>
                </div>

                <div className={styles.floatingCardSecond}>
                  <Settings size={18} aria-hidden="true" />
                  <span>Your browser, your controls</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NOTICE
        ====================================================== */}
        <section className={styles.noticeSection}>
          <div className={styles.container}>
            <div className={styles.notice}>
              <div className={styles.noticeIcon}>
                <Info size={20} aria-hidden="true" />
              </div>

              <div>
                <strong>Important information</strong>
                <p>
                  This Cookie Policy is intended to explain our general use of
                  cookies and similar technologies. The technologies actually
                  used on the website may change as features and third-party
                  services are added, removed or updated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <div className={styles.layout}>
              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <span className={styles.sidebarTitle}>
                    On this page
                  </span>

                  <nav>
                    <a href="#what-are-cookies">What are cookies?</a>
                    <a href="#how-we-use-cookies">
                      How we use cookies
                    </a>
                    <a href="#cookie-types">Types of cookies</a>
                    <a href="#third-party-services">
                      Third-party services
                    </a>
                    <a href="#browser-controls">
                      Browser controls
                    </a>
                    <a href="#changes">Policy changes</a>
                    <a href="#contact">Contact</a>
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <article className={styles.article}>
                {/* What are cookies */}
                <section id="what-are-cookies" className={styles.articleSection}>
                  <span className={styles.sectionNumber}>01</span>

                  <h2>What are cookies?</h2>

                  <p>
                    Cookies are small text files or similar pieces of data
                    that websites can store on a visitor&apos;s device through
                    their web browser.
                  </p>

                  <p>
                    They can help websites remember information, provide
                    functionality, understand how visitors interact with
                    pages and support other website features.
                  </p>

                  <div className={styles.definitionGrid}>
                    <div className={styles.definitionCard}>
                      <div className={styles.definitionIcon}>
                        <Cookie size={20} aria-hidden="true" />
                      </div>

                      <h3>Cookies</h3>

                      <p>
                        Small pieces of browser-stored data associated with a
                        website.
                      </p>
                    </div>

                    <div className={styles.definitionCard}>
                      <div className={styles.definitionIcon}>
                        <SlidersHorizontal
                          size={20}
                          aria-hidden="true"
                        />
                      </div>

                      <h3>Similar technologies</h3>

                      <p>
                        Other technologies may perform functions similar to
                        cookies, such as storing or accessing information on a
                        device.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How we use */}
                <section
                  id="how-we-use-cookies"
                  className={styles.articleSection}
                >
                  <span className={styles.sectionNumber}>02</span>

                  <h2>How we use cookies</h2>

                  <p>
                    CodeHarborHub may use cookies and similar technologies for
                    several purposes depending on the features available on
                    the website.
                  </p>

                  <div className={styles.purposeList}>
                    <div>
                      <CheckCircle2 size={19} aria-hidden="true" />
                      <span>
                        To support essential website functionality.
                      </span>
                    </div>

                    <div>
                      <CheckCircle2 size={19} aria-hidden="true" />
                      <span>
                        To remember certain preferences or settings.
                      </span>
                    </div>

                    <div>
                      <CheckCircle2 size={19} aria-hidden="true" />
                      <span>
                        To understand website usage and improve the user
                        experience.
                      </span>
                    </div>

                    <div>
                      <CheckCircle2 size={19} aria-hidden="true" />
                      <span>
                        To support embedded or integrated third-party
                        functionality.
                      </span>
                    </div>

                    <div>
                      <CheckCircle2 size={19} aria-hidden="true" />
                      <span>
                        To support advertising or advertising measurement
                        where applicable.
                      </span>
                    </div>
                  </div>
                </section>

                {/* Cookie Types */}
                <section id="cookie-types" className={styles.articleSection}>
                  <span className={styles.sectionNumber}>03</span>

                  <h2>Types of cookies</h2>

                  <p>
                    Cookies may be grouped according to their purpose. The
                    categories below describe common ways technologies may be
                    used on CodeHarborHub.
                  </p>

                  <div className={styles.cookieGrid}>
                    {cookieTypes.map((cookie) => {
                      const Icon = cookie.icon;

                      return (
                        <div
                          key={cookie.title}
                          className={styles.cookieCard}
                        >
                          <div className={styles.cookieCardTop}>
                            <div className={styles.cookieIcon}>
                              <Icon size={21} aria-hidden="true" />
                            </div>

                            <span
                              className={
                                cookie.status === "Required"
                                  ? styles.requiredBadge
                                  : styles.optionalBadge
                              }
                            >
                              {cookie.status}
                            </span>
                          </div>

                          <h3>{cookie.title}</h3>

                          <p>{cookie.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* First/Third party */}
                <section
                  id="third-party-services"
                  className={styles.articleSection}
                >
                  <span className={styles.sectionNumber}>04</span>

                  <h2>First-party and third-party technologies</h2>

                  <p>
                    Some technologies may be set directly by CodeHarborHub,
                    while others may be provided by third-party services that
                    are integrated into the website.
                  </p>

                  <div className={styles.twoColumn}>
                    <div className={styles.infoCard}>
                      <div className={styles.infoCardIcon}>
                        <GlobeIcon />
                      </div>

                      <h3>First-party</h3>

                      <p>
                        Technologies associated directly with the CodeHarborHub
                        website may help provide core functionality or remember
                        website preferences.
                      </p>
                    </div>

                    <div className={styles.infoCard}>
                      <div className={styles.infoCardIcon}>
                        <Users size={20} aria-hidden="true" />
                      </div>

                      <h3>Third-party</h3>

                      <p>
                        Integrated services may use their own technologies for
                        functionality, analytics, advertising, embedded
                        content or other purposes.
                      </p>
                    </div>
                  </div>

                  <p className={styles.smallNote}>
                    Third-party providers may have their own privacy and cookie
                    policies. We recommend reviewing those policies when using
                    services provided by external organizations.
                  </p>
                </section>

                {/* Browser controls */}
                <section
                  id="browser-controls"
                  className={styles.articleSection}
                >
                  <span className={styles.sectionNumber}>05</span>

                  <h2>Managing cookies through your browser</h2>

                  <p>
                    Most modern browsers provide controls that allow you to
                    view, block, delete or otherwise manage cookies.
                  </p>

                  <div className={styles.browserCard}>
                    <div className={styles.browserIcon}>
                      <Settings size={23} aria-hidden="true" />
                    </div>

                    <div>
                      <h3>Your browser settings</h3>

                      <p>
                        You can generally find cookie controls in your browser&apos;s
                        privacy, security or site settings. The exact controls
                        depend on the browser and device you use.
                      </p>

                      <div className={styles.browserWarning}>
                        <Info size={17} aria-hidden="true" />

                        <span>
                          Blocking some cookies may affect website
                          functionality or prevent certain features from
                          working as intended.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Security */}
                <section className={styles.articleSection}>
                  <span className={styles.sectionNumber}>06</span>

                  <h2>Privacy and security</h2>

                  <p>
                    We take reasonable steps to operate CodeHarborHub in a
                    responsible manner. Cookies and similar technologies should
                    not be interpreted as a guarantee that information
                    transmitted over the internet is completely secure.
                  </p>

                  <p>
                    You should also take appropriate steps to protect your
                    devices, accounts and browser, including keeping software
                    updated and using appropriate security settings.
                  </p>

                  <div className={styles.securityPoints}>
                    <div>
                      <Lock size={18} aria-hidden="true" />
                      <span>Keep your browser and operating system updated.</span>
                    </div>

                    <div>
                      <ShieldCheck size={18} aria-hidden="true" />
                      <span>Use appropriate privacy and security controls.</span>
                    </div>

                    <div>
                      <Settings size={18} aria-hidden="true" />
                      <span>Review browser cookie settings regularly.</span>
                    </div>
                  </div>
                </section>

                {/* Changes */}
                <section id="changes" className={styles.articleSection}>
                  <span className={styles.sectionNumber}>07</span>

                  <h2>Changes to this Cookie Policy</h2>

                  <p>
                    We may update this Cookie Policy when our website,
                    technologies, services or legal requirements change.
                  </p>

                  <p>
                    When changes are made, the updated version will be
                    published on this page. The date at the beginning of the
                    policy indicates when it was most recently updated.
                  </p>

                  <div className={styles.updateCard}>
                    <div className={styles.updateIcon}>
                      <CheckCircle2 size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <strong>Current version</strong>
                      <span>Last updated: {lastUpdated}</span>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className={styles.articleSection}>
                  <span className={styles.sectionNumber}>08</span>

                  <h2>Contact us</h2>

                  <p>
                    If you have questions about this Cookie Policy or how
                    cookies and similar technologies are used on CodeHarborHub,
                    you can contact us.
                  </p>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIcon}>
                      <Mail size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <span>Privacy & Cookie questions</span>

                      <a href="mailto:codeharborhub@gmail.com">
                        codeharborhub@gmail.com
                        <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    </div>
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
              <span className={styles.sectionLabel}>FAQ</span>

              <h2>Cookie questions, answered.</h2>

              <p>
                Here are some common questions about cookies and browser
                controls.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.question}
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
                      <span>{item.question}</span>

                      <ChevronDown
                        size={19}
                        aria-hidden="true"
                        className={styles.faqChevron}
                      />
                    </button>

                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
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
                <Cookie size={25} aria-hidden="true" />
              </div>

              <span className={styles.sectionLabel}>
                PRIVACY & TRANSPARENCY
              </span>

              <h2>Have a question about privacy?</h2>

              <p>
                Read our other policies or contact the CodeHarborHub team if
                you need clarification.
              </p>

              <div className={styles.finalActions}>
                <Link
                  to="/privacy-policy/"
                  className={styles.primaryButton}
                >
                  Privacy Policy
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  to="/contact/"
                  className={styles.secondaryButton}
                >
                  Contact us
                  <Mail size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function GlobeIcon(): React.JSX.Element {
  return <Globe2 size={20} aria-hidden="true" />;
}

export default CookiePolicy;