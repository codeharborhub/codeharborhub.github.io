
import React from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
  Heart,
  HandHeart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
// @ts-ignore
import RazorpayButton from "@site/src/components/RazorpayButton";
// @ts-ignore
import { sponsors as existingSponsors, type Sponsor } from "@site/src/data/sponsors";

const GITHUB_SPONSORS_URL = "https://github.com/sponsors/ajay-dhangar";
const GITHUB_ORG_URL = "https://github.com/CodeHarborHub";
const CONTRIBUTING_URL = "/contributing/";
const RAZORPAY_BUTTON_ID = "pl_TMiTv5XswAtZVk";

/**
 * Add only confirmed sponsors here.
 * Keep any additional sponsors from your existing data file.
 */
const communitySponsors: Sponsor[] = [
  {
    id: "narendra-dhangar",
    name: "narendra-dhangar",
    description:
      "Thank you for supporting our open-source developer education mission.",
    tier: "Community",
    initials: "ND",
    logo: "https://github.com/narendra-dhangar.png",
    github: "https://github.com/narendra-dhangar",
    featured: true,
    contributionType: "GitHub sponsorship",
    message:
      "Your support helps us continue building accessible learning resources.",
  },
  {
    id: "sanjay-kv",
    name: "sanjay-kv",
    description:
      "Thank you for supporting the open-source community and developer learning.",
    tier: "Community",
    initials: "SK",
    logo: "https://github.com/sanjay-kv.png",
    github: "https://github.com/sanjay-kv",
    featured: true,
    contributionType: "GitHub sponsorship",
    message:
      "Every contribution helps make community-driven learning stronger.",
  },
];

const allSponsors: Sponsor[] = [
  ...communitySponsors,
  ...existingSponsors.filter(
    (sponsor: Sponsor) =>
      !communitySponsors.some((community) => community.id === sponsor.id),
  ),
];

const benefits = [
  {
    icon: BookOpen,
    number: "01",
    title: "Keep learning free",
    description:
      "Help us publish tutorials, roadmaps, and practical resources that learners can access without a paywall.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Build open-source tools",
    description:
      "Support the development and maintenance of coding projects, learning tools, and developer resources.",
  },
  {
    icon: Users,
    number: "03",
    title: "Grow the community",
    description:
      "Help developers collaborate, share knowledge, contribute code, and improve their skills together.",
  },
];

const supportOptions = [
  {
    icon: Heart,
    title: "GitHub Sponsors",
    description:
      "Support ongoing open-source work through the project's GitHub Sponsors page.",
    points: [
      "Explore available sponsorship options",
      "Choose an option that suits you",
      "Support continued development",
    ],
    action: "Sponsor on GitHub",
    href: GITHUB_SPONSORS_URL,
    featured: false,
    label: "Developer friendly",
  },
  {
    icon: HandHeart,
    title: "Razorpay",
    description:
      "Use the configured payment button to view the available payment options.",
    points: [
      "Open the secure payment flow",
      "Review the amount and details",
      "Complete your contribution if you wish",
    ],
    action: "Continue with Razorpay",
    href: "",
    featured: true,
    label: "Alternative payment",
  },
  {
    icon: Lightbulb,
    title: "Community partner",
    description:
      "Help us improve open-source education through collaboration and community initiatives.",
    points: [
      "Collaborate on learning resources",
      "Support community initiatives",
      "Help more developers get started",
    ],
    action: "Explore our GitHub",
    href: GITHUB_ORG_URL,
    featured: false,
    label: "Build together",
  },
];

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
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
        <Sparkles size={15} aria-hidden="true" />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function SponsorCard({
  sponsor,
}: {
  sponsor: Sponsor;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400/50 dark:hover:shadow-black/20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2e93e2] via-blue-500 to-indigo-500 opacity-70 transition group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-lg font-extrabold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
          <span aria-hidden="true">{sponsor.initials}</span>

          {sponsor.logo && (
            <img
              src={sponsor.logo}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
          <Heart size={12} aria-hidden="true" />
          {sponsor.tier}
        </span>
      </div>

      {sponsor.featured && (
        <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
          <Sparkles size={13} aria-hidden="true" />
          Featured supporter
        </div>
      )}

      <h3 className="mt-5 break-words text-xl font-bold text-slate-950 dark:text-white">
        {sponsor.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {sponsor.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700 dark:bg-rose-400/10 dark:text-rose-300">
          <Heart size={13} aria-hidden="true" />
          {sponsor.contributionType}
        </span>

        {sponsor.since && (
          <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            Since {sponsor.since}
          </span>
        )}
      </div>

      {sponsor.message && (
        <blockquote className="mt-5 border-l-2 border-blue-400 pl-4 text-sm italic leading-6 text-slate-600 dark:border-blue-400/70 dark:text-slate-400">
          “{sponsor.message}”
        </blockquote>
      )}

      {(sponsor.website || sponsor.github) && (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
          {sponsor.website && (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              <Globe size={15} aria-hidden="true" />
              Website
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}

          {sponsor.github && (
            <a
              href={sponsor.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2e93e2] dark:bg-slate-800 dark:hover:bg-[#2e93e2]"
            >
              <Code2 size={15} aria-hidden="true" />
              GitHub
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function OurSponsorsPage() {
  const featuredSponsors = allSponsors.filter(
    (sponsor) => sponsor.featured,
  );

  const otherSponsors = allSponsors.filter(
    (sponsor) => !sponsor.featured,
  );

  return (
    <Layout
      title="Our Sponsors"
      description="Meet the supporters helping CodeHarborHub build free, open-source developer education."
    >
      <main className="overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/30">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[28rem] rounded-full bg-blue-400/20 blur-3xl sm:size-[38rem]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[28rem] rounded-full bg-indigo-400/15 blur-3xl"
          />

          <div className="mx-auto grid items-center gap-12 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/20 dark:bg-slate-900/80 dark:text-blue-300">
                <Heart size={15} aria-hidden="true" />
                Powered by the community
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl md:text-6xl xl:text-7xl dark:text-white">
                Help us make
                <span className="mt-2 block bg-gradient-to-r from-[#2e93e2] via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  learning accessible.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
                CodeHarborHub is building a place where developers can learn,
                practice, and contribute together. Your support helps us
                maintain open learning resources and create better tools for
                the developer community.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={GITHUB_SPONSORS_URL}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2e93e2] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl"
                >
                  <Heart size={17} aria-hidden="true" />
                  Sponsor on GitHub
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  to="#support-options"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-300"
                >
                  Explore ways to support
                  <ArrowDown size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                {[
                  "Open-source focused",
                  "Community driven",
                  "Free learning resources",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-emerald-600 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center sm:max-w-lg">
              <div className="absolute inset-[8%] rounded-full border border-blue-200/80 dark:border-blue-400/20" />
              <div className="absolute inset-[17%] rounded-full border border-dashed border-indigo-300 dark:border-indigo-400/30" />

              <div className="absolute size-64 rounded-full bg-blue-400/20 blur-3xl sm:size-80" />

              <div className="relative flex size-48 items-center justify-center rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-[#2e93e2] to-indigo-600 text-white shadow-2xl shadow-blue-600/30 sm:size-60 sm:rounded-[3rem]">
                <Code2
                  size={76}
                  strokeWidth={1.4}
                  className="sm:size-24"
                  aria-hidden="true"
                />
                <div className="absolute -right-3 -top-3 rounded-2xl border border-white/70 bg-white p-3 text-rose-500 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                  <Heart size={23} aria-hidden="true" />
                </div>
              </div>

              <div className="absolute left-0 top-[18%] flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl sm:left-2 sm:p-4 dark:border-slate-700 dark:bg-slate-900/95">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <BookOpen size={20} aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm text-slate-900 dark:text-white">
                    Learn
                  </strong>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Build your skills
                  </span>
                </span>
              </div>

              <div className="absolute bottom-[16%] right-0 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-xl sm:right-1 sm:p-4 dark:border-slate-700 dark:bg-slate-900/95">
                <span className="flex size-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300">
                  <HandHeart size={20} aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm text-slate-900 dark:text-white">
                    Support
                  </strong>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Make an impact
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <SectionHeading
            eyebrow="WHY YOUR SUPPORT MATTERS"
            title="Small contributions. Shared progress."
            description="Your support helps us invest time and resources in making developer education more accessible."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className="group relative rounded-3xl border border-slate-200 bg-slate-50/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-400/40 dark:hover:bg-slate-900"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-[#2e93e2] group-hover:text-white dark:bg-blue-400/10 dark:text-blue-300">
                      <Icon size={23} aria-hidden="true" />
                    </span>

                    <span className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-600">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Sponsor directory */}
        <section
          id="our-sponsors"
          className="scroll-mt-20 border-y border-slate-200 bg-slate-50/80 py-20 sm:py-24 dark:border-slate-800 dark:bg-slate-900/30"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
                  <Sparkles size={15} aria-hidden="true" />
                  Our sponsor community
                </span>

                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
                  Meet the people behind the progress.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                  We appreciate the people who support our mission to make
                  developer learning open and accessible.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300">
                    <Heart size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="block text-2xl font-extrabold text-slate-950 dark:text-white">
                      {allSponsors.length}
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Listed supporters
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    <Code2 size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="block text-lg font-extrabold text-slate-950 dark:text-white">
                      Open source
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Our shared mission
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {allSponsors.length > 0 ? (
              <div className="space-y-12">
                {featuredSponsors.length > 0 && (
                  <div>
                    <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-950 dark:text-white">
                      <Sparkles
                        size={20}
                        className="text-amber-500"
                        aria-hidden="true"
                      />
                      Featured supporters
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                      {featuredSponsors.map((sponsor) => (
                        <SponsorCard key={sponsor.id} sponsor={sponsor} />
                      ))}
                    </div>
                  </div>
                )}

                {otherSponsors.length > 0 && (
                  <div>
                    <h3 className="mb-6 text-xl font-bold text-slate-950 dark:text-white">
                      Community supporters
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                      {otherSponsors.map((sponsor) => (
                        <SponsorCard key={sponsor.id} sponsor={sponsor} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center dark:border-slate-700 dark:bg-slate-900">
                <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <HandHeart size={30} aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">
                  Be part of the journey
                </h3>

                <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
                  Become a supporter and, with your permission, we can feature
                  your profile here.
                </p>

                <Link
                  to={GITHUB_SPONSORS_URL}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2e93e2] px-6 py-3.5 font-bold text-white transition hover:bg-blue-600"
                >
                  Become a sponsor
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Ways to support */}
        <section
          id="support-options"
          className="scroll-mt-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="CHOOSE HOW TO HELP"
            title="Support CodeHarborHub your way"
            description="Whether you're an individual developer or an organization, your support can help us keep building."
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {supportOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  key={option.title}
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                    option.featured
                      ? "border-blue-400 bg-gradient-to-b from-blue-50 to-white shadow-lg shadow-blue-950/5 dark:border-blue-400/40 dark:from-blue-950/40 dark:to-slate-900"
                      : "border-slate-200 bg-white hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-400/40"
                  }`}
                >
                  {option.featured && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-800 dark:bg-blue-400/10 dark:text-blue-300">
                      <Zap size={12} aria-hidden="true" />
                      Payment option
                    </span>
                  )}

                  <span className="flex size-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    <Icon size={25} aria-hidden="true" />
                  </span>

                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                    {option.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
                    {option.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {option.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {option.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    {option.featured ? (
                      <div className="space-y-3">
                        <RazorpayButton
                          buttonId={RAZORPAY_BUTTON_ID}
                        />
                        <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                          Payment options and available amounts are provided
                          by Razorpay.
                        </p>
                      </div>
                    ) : (
                      <Link
                        to={option.href}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#2e93e2] dark:bg-slate-800 dark:hover:bg-[#2e93e2]"
                      >
                        {option.action}
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-7 flex items-start justify-center gap-2 text-center text-xs leading-6 text-slate-500 dark:text-slate-400">
            <ShieldCheck
              size={16}
              className="mt-1 shrink-0"
              aria-hidden="true"
            />
            Review the payment amount, recipient, and details provided by the
            payment provider before completing a contribution.
          </p>
        </section>

        {/* Community CTA */}
        <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14 dark:bg-slate-900 dark:ring-1 dark:ring-slate-800">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-blue-500/20 blur-3xl"
            />

            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
                <Users size={15} aria-hidden="true" />
                More than sponsorship
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Can't sponsor right now?
                <span className="mt-1 block text-blue-300">
                  You can still make a difference.
                </span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Contribute code, improve documentation, report bugs, or help
                another developer learn. Every meaningful contribution matters.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to={CONTRIBUTING_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2e93e2] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
              >
                Start contributing
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link
                to={GITHUB_ORG_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore GitHub
                <ExternalLink size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
