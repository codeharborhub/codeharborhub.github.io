import React, { FormEvent, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  ExternalLink,
  Github,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";
// @ts-ignore
import styles from "./styles.module.css";

type FeedbackType =
  | "Question"
  | "Suggestion"
  | "Issue"
  | "Contribution"
  | "Partnership"
  | "Other";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  feedbackType: FeedbackType;
  otherFeedback: string;
  message: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  feedbackType: "Question",
  otherFeedback: "",
  message: "",
};

const feedbackOptions: FeedbackType[] = [
  "Question",
  "Suggestion",
  "Issue",
  "Contribution",
  "Partnership",
  "Other",
];

const contactChannels = [
  {
    title: "Email",
    description: "For general questions, feedback and collaboration.",
    value: "codeharborhub@gmail.com",
    href: "mailto:codeharborhub@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    description: "Explore our open-source projects and repositories.",
    value: "CodeHarborHub",
    href: "https://github.com/CodeHarborHub",
    icon: Github,
  },
  {
    title: "Community",
    description: "Connect with developers and contributors.",
    value: "Join the community",
    href: "https://discord.com/invite/c53FQn3pRv",
    icon: Users,
  },
];

const faqs = [
  {
    question: "How can I report a problem with the website?",
    answer:
      "Use the contact form and select Issue. Include the page URL, what went wrong, and the steps needed to reproduce the problem.",
  },
  {
    question: "How can I contribute to CodeHarborHub?",
    answer:
      "You can contribute through documentation, tutorials, code, projects, issues, reviews and community support.",
  },
  {
    question: "Can I suggest a new tutorial or roadmap?",
    answer:
      "Yes. Select Suggestion in the contact form and describe the topic, target audience and what you would like to learn.",
  },
  {
    question: "Can organizations collaborate with CodeHarborHub?",
    answer:
      "Yes. Select Partnership and provide enough context about the organization, proposed collaboration and expected outcome.",
  },
];

function Contact(): React.JSX.Element {
  const [form, setForm] = useState<FormValues>(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitState("loading");
    setErrorMessage("");

    const payload = {
      name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      feedbackType: form.feedbackType,
      otherFeedback: form.otherFeedback.trim(),
    };

    try {
      const response = await fetch(
        "https://chh-backend.vercel.app/email-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      let data: unknown = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        const message =
          typeof data === "object" &&
          data !== null &&
          "message" in data &&
          typeof (data as { message?: unknown }).message === "string"
            ? (data as { message: string }).message
            : "Unable to send your message. Please try again.";

        throw new Error(message);
      }

      setSubmitState("success");
      setForm(INITIAL_FORM);

      window.setTimeout(() => {
        setSubmitState("idle");
      }, 6000);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitState("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <Layout
      title="Contact CodeHarborHub"
      description="Contact CodeHarborHub for questions, suggestions, issues, contributions and partnerships."
    >
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <MessageSquare size={16} aria-hidden="true" />
                <span>Contact CodeHarborHub</span>
              </div>

              <h1>
                Let&apos;s build the future of
                <span> developer learning.</span>
              </h1>

              <p>
                Have a question, found an issue, want to contribute, or have an
                idea for CodeHarborHub? Send us a message and our community can
                help move it forward.
              </p>

              <div className={styles.heroActions}>
                <a href="#contact-form" className={styles.primaryButton}>
                  Send a message
                  <ArrowRight size={18} aria-hidden="true" />
                </a>

                <Link
                  to="/contributing/"
                  className={styles.secondaryButton}
                >
                  Contribute
                  <Code2 size={18} aria-hidden="true" />
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <div>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>Open source</span>
                </div>

                <div>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>Community driven</span>
                </div>

                <div>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>Built for learners</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.codeWindow}>
                <div className={styles.windowHeader}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.codeBody}>
                  <div>
                    <span className={styles.codeKeyword}>const</span>{" "}
                    <span className={styles.codeVariable}>community</span>{" "}
                    = {"{"}
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>learn</span>:{" "}
                    <span className={styles.codeString}>true</span>,
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>build</span>:{" "}
                    <span className={styles.codeString}>true</span>,
                  </div>

                  <div className={styles.codeIndent}>
                    <span className={styles.codeProperty}>contribute</span>:{" "}
                    <span className={styles.codeString}>true</span>,
                  </div>

                  <div>{"};"}</div>

                  <div className={styles.codeSpacing} />

                  <div>
                    <span className={styles.codeKeyword}>await</span>{" "}
                    <span className={styles.codeFunction}>
                      sendMessage
                    </span>
                    {"(community);"}
                  </div>

                  <div className={styles.codeCursor}>▋</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Channels */}
        <section className={styles.channelsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionLabel}>CONNECT</span>
                <h2>Choose how you want to reach us</h2>
              </div>

              <p>
                Pick the channel that matches your question or collaboration
                idea.
              </p>
            </div>

            <div className={styles.channelGrid}>
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={styles.channelCard}
                  >
                    <div className={styles.channelIcon}>
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <div className={styles.channelContent}>
                      <div className={styles.channelTitleRow}>
                        <h3>{channel.title}</h3>
                        <ExternalLink
                          size={15}
                          aria-hidden="true"
                          className={styles.externalIcon}
                        />
                      </div>

                      <p>{channel.description}</p>

                      <span>{channel.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="contact-form" className={styles.formSection}>
          <div className={styles.container}>
            <div className={styles.formLayout}>
              <aside className={styles.formAside}>
                <span className={styles.sectionLabel}>GET IN TOUCH</span>

                <h2>Tell us what&apos;s on your mind.</h2>

                <p>
                  Whether you are learning, building, contributing or
                  collaborating, your feedback helps us improve CodeHarborHub.
                </p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Clock3 size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <strong>Response time</strong>
                      <span>
                        We&apos;ll review your message as soon as possible.
                      </span>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <ShieldCheck size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <strong>Respectful communication</strong>
                      <span>
                        Please keep conversations constructive and respectful.
                      </span>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Users size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <strong>Open community</strong>
                      <span>
                        Ideas and contributions are welcome from developers at
                        every level.
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.locationCard}>
                  <MapPin size={19} aria-hidden="true" />

                  <div>
                    <strong>CodeHarborHub</strong>
                    <span>Open-source developer community</span>
                  </div>
                </div>
              </aside>

              <div className={styles.formCard}>
                <div className={styles.formCardHeader}>
                  <div className={styles.formIcon}>
                    <Send size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>Send a message</h3>
                    <p>Fields marked with * are required.</p>
                  </div>
                </div>

                {submitState === "success" && (
                  <div
                    className={`${styles.alert} ${styles.successAlert}`}
                    role="status"
                  >
                    <CheckCircle2 size={20} aria-hidden="true" />

                    <div>
                      <strong>Message sent successfully!</strong>
                      <span>
                        Thanks for reaching out to CodeHarborHub.
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitState("idle")}
                      aria-label="Close success message"
                    >
                      <XCircle size={18} aria-hidden="true" />
                    </button>
                  </div>
                )}

                {submitState === "error" && (
                  <div
                    className={`${styles.alert} ${styles.errorAlert}`}
                    role="alert"
                  >
                    <XCircle size={20} aria-hidden="true" />

                    <div>
                      <strong>Message could not be sent.</strong>
                      <span>{errorMessage}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitState("idle")}
                      aria-label="Close error message"
                    >
                      <XCircle size={18} aria-hidden="true" />
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label htmlFor="fullName">
                        Full name <span>*</span>
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                        disabled={submitState === "loading"}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email">
                        Email address <span>*</span>
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        disabled={submitState === "loading"}
                      />
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label htmlFor="phone">Phone number</label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        disabled={submitState === "loading"}
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="feedbackType">
                        What can we help with? <span>*</span>
                      </label>

                      <div className={styles.selectWrapper}>
                        <select
                          id="feedbackType"
                          name="feedbackType"
                          value={form.feedbackType}
                          onChange={handleChange}
                          required
                          disabled={submitState === "loading"}
                        >
                          {feedbackOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={17}
                          aria-hidden="true"
                          className={styles.selectIcon}
                        />
                      </div>
                    </div>
                  </div>

                  {form.feedbackType === "Other" && (
                    <div className={styles.field}>
                      <label htmlFor="otherFeedback">
                        Please specify
                      </label>

                      <input
                        id="otherFeedback"
                        name="otherFeedback"
                        type="text"
                        value={form.otherFeedback}
                        onChange={handleChange}
                        placeholder="Tell us what you need help with"
                        disabled={submitState === "loading"}
                      />
                    </div>
                  )}

                  <div className={styles.field}>
                    <label htmlFor="message">
                      Message <span>*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={7}
                      required
                      minLength={10}
                      disabled={submitState === "loading"}
                    />

                    <div className={styles.fieldHint}>
                      Please provide enough detail for us to understand your
                      request.
                    </div>
                  </div>

                  <div className={styles.formFooter}>
                    <p>
                      By submitting this form, you agree to communicate
                      respectfully with the CodeHarborHub community.
                    </p>

                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={submitState === "loading"}
                    >
                      {submitState === "loading" ? (
                        <>
                          <span className={styles.spinner} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send size={17} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqHeader}>
              <div className={styles.faqHeading}>
                <div className={styles.faqIcon}>
                  <HelpCircle size={21} aria-hidden="true" />
                </div>

                <div>
                  <span className={styles.sectionLabel}>FAQ</span>
                  <h2>Common questions</h2>
                </div>
              </div>

              <p>
                Quick answers to common questions about contacting and
                contributing to CodeHarborHub.
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

        {/* Final CTA */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              <div className={styles.finalGlow} />

              <div className={styles.finalIcon}>
                <Sparkles size={24} aria-hidden="true" />
              </div>

              <h2>Want to build with us?</h2>

              <p>
                CodeHarborHub grows through developers, learners and open-source
                contributors who share knowledge and build together.
              </p>

              <div className={styles.finalActions}>
                <Link
                  to="/contributing/"
                  className={styles.primaryButton}
                >
                  Start contributing
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <a
                  href="https://github.com/CodeHarborHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryButton}
                >
                  <Github size={18} aria-hidden="true" />
                  Explore GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;