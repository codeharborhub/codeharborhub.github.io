---
id: typography-fonts
title: "Typography, Web Fonts & Variable Fonts"
sidebar_label: "Lecture 7"
sidebar_position: 3
description: "Master CSS typography fundamentals, font-face declarations, web font performance optimization, vertical rhythm, and modern variable fonts."
tags: ['css', 'Typography', 'Web Fonts', 'Variable Fonts']
---

Typography makes up over 90% of the web's content. Mastering web typography requires balancing visual hierarchy, readability, performance, and responsive scaling across devices.

## 1. The Core Typography Stack

CSS provides properties to control every aspect of text rendering.

```
┌──────────────────────────────────────────┐
│             Line Height                  │
│  ┌────────────────────────────────────┐  │
│  │           Font Size                │  │
│  │  ┌──────────────────────────────┐  │  │
│  │  │    Letter Spacing (Tracking) │  │  │
│  │  │   ┌───────────────────────┐  │  │  │
│  │  │   │  CodeHarborHub Text   │  │  │  │
│  │  │   └───────────────────────┘  │  │  │
│  │  └──────────────────────────────┘  │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

### Core Property Reference

| Property | Typical Values | Best Practice / Rule |
| :--- | :--- | :--- |
| `font-family` | System stacks, Custom web fonts | Always supply generic fallbacks (`sans-serif`, `serif`, `monospace`). |
| `font-size` | `rem`, `em`, `px`, `clamp()` | Use `rem` for accessibility so user browser zoom preferences are respected. |
| `line-height` | Unitless multiplier (e.g., `1.5`, `1.2`) | Avoid fixed `px` values. Use `1.2–1.3` for headings and `1.5–1.6` for body copy. |
| `font-weight` | `100` to `900`, `bold`, `normal` | Ensure custom web fonts support every declared weight. |
| `letter-spacing` | `em`, `px` | Tighten large headings (`-0.02em`); widen small uppercase text (`0.05em`). |

## 2. System Font Stacks vs. Custom `@font-face`

### System Font Stacks

System stacks load instantaneously with zero network overhead because they rely on pre-installed operating system fonts.

```css
/* Modern Clean System Sans-Serif Stack */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

### Loading Web Fonts with `@font-face`

Custom web fonts require explicit `@font-face` definitions. Always prioritize modern, compressed web formats like WOFF2.

```css
@font-face {
  font-family: 'Geist';
  src: url('/fonts/geist-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Prevents Invisible Text (FOIT) */
}
```

:::info The font-display Property
* **swap:** Renders fallbacks immediately and swaps to the web font once loaded (minimizes render blocking).
* **optional:** Gives the browser a tiny window to download the font; if missed, it stays on the fallback for that session.
:::

## 3. Modern Variable Fonts

Variable Fonts store multiple typographic variations (weight, width, slant, optical size) within a single file, replacing the need to load multiple static font files (`regular.woff2`, `bold.woff2`, `italic.woff2`).

```css
/* Loading a single variable font file supporting weights 100 through 900 */
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/inter-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
}

.heading-dynamic {
  font-family: 'Inter Variable', sans-serif;
  /* Precise numeric weight adjustment */
  font-weight: 650; 
  /* Fine-tuning axis properties */
  font-variation-settings: 'wght' 650, 'slnt' -5;
}
```

## 4. Fluid Typography with `clamp()`

Instead of managing font sizes across multiple `@media` breakpoint rules, use the mathematical `clamp()` function for responsive fluid typography.  

$$
\text{clamp}(\text{MIN}, \text{VAL}, \text{MAX})
$$

```css
h1 {
  /* Min: 2rem (32px), Preferred: 5vw, Max: 3.5rem (56px) */
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
}
```

## Interactive Playground: Fluid & Variable Typography

Experiment with responsive typography scale, line-height ratios, and letter-spacing adjustments live:

<CodePreview
defaultHtml={`
<div style="background-color: #0f172a; padding: 2rem; border-radius: 8px; font-family: system-ui, sans-serif;">
  
  <!-- Triggers .eyebrow -->
  <span class="eyebrow">Design Systems</span>

  <!-- Triggers .fluid-title (Resize your browser width to watch this scale smoothly!) -->
  <h1 class="fluid-title">Fluid Typography is the Future</h1>

  <!-- Triggers .lead-body -->
  <p class="lead-body">
    Modern CSS techniques allow layout and typography to scale dynamically relative to the viewport size. This eliminates the need for rigid media queries.
  </p>

  <!-- Triggers .regular-body and regular-body code -->
  <p class="regular-body">
    By using the modern <code>clamp()</code> function, we establish clear minimum and maximum size boundaries. This ensures that text remains highly readable on small mobile screens as well as massive ultra-wide desktop monitors.
  </p>

</div>

`}
defaultCss={`
/* Uppercase Category Eyebrow */
.eyebrow {
display: inline-block;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #38bdf8;
margin-bottom: 0.5rem;
}

/* Fluid Heading Scaling /
.fluid-title {
/ clamp(min, preferred, max) */
font-size: clamp(1.75rem, 4vw, 3rem);
line-height: 1.1;
font-weight: 800;
letter-spacing: -0.025em;
color: #ffffff;
margin-top: 0;
margin-bottom: 1rem;
}

/* Lead Paragraph Typography */
.lead-body {
font-size: 1.125rem;
line-height: 1.5;
color: #cbd5e1;
margin-bottom: 1rem;
}

/* Standard Body Typography */
.regular-body {
font-size: 0.95rem;
line-height: 1.6;
color: #94a3b8;
}

.regular-body code {
color: #38bdf8;
background-color: rgba(56, 189, 248, 0.1);
padding: 0.15rem 0.4rem;
border-radius: 4px;
}`}
height="420px"
/>

## Typographic Best Practices Checklist

|Objective | Recommended Technique | Anti-Pattern |
|---|---|---|
| Line Length (Measure) | Keep copy between 45–75 characters per line (`max-width: 65ch`). | Ultra-wide paragraphs stretching full screen width. |
| Line Height | Body copy: `1.5–1.6`; Headings: `1.1–1.3`. | Using `px` for `line-height` causing text overlapping when resized. |
| Color Contrast | Maintain at least 4.5:1 WCAG contrast ratio for normal text. | Low contrast light grey text on white backgrounds (`#999999`).|
| Performance | Load `woff2` formats; set `font-display: swap`. | Loading `.ttf` or `.otf` files without fallback strategies.|