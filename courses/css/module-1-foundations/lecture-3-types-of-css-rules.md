---
id: types-of-css-rules
title: "Types of CSS Rules"
sidebar_label: "Lecture 3"
sidebar_position: 3
description: "Learn the two primary types of CSS rules: Style Rules and At-Rules. Understand how they differ in syntax, purpose, and behavior within a stylesheet."
tags: ["css", "lecture", "foundations", "syntax", "style rules", "at-rules"]
keywords: ["css", "lecture", "foundations", "syntax", "style rules", "at-rules"]
---

Not all CSS rules behave the same way. While most rules target HTML elements to apply styles directly, CSS also provides specialized directives that control how stylesheets parse, handle responsive viewports, import assets, or define complex animation logic.

In CSS, rules are categorized into two primary types: **Style Rules** and **At-Rules (`@`)**.

## 1. Style Rules

**Style Rules** are the backbone of CSS. A style rule selects elements in the DOM tree and applies visual declarations inside a standard declaration block.

```css title="Example Style Rule"
.hero-title {
  font-size: 2.5rem;
  color: #0f172a;
  line-height: 1.2;
}
```

Every standard style rule follows the pattern learned in Lecture 2: a selector followed by a declaration block `{ ... }`.

## 2. At-Rules (`@`)

At-Rules are special directives that start with an `@` symbol (e.g., `@import`, `@media`). They instruct the CSS engine on metadata parsing, browser environments, custom typography loading, or conditional rendering logic.

At-rules fall into two sub-categories based on their syntax structure:

### A. Statement At-Rules

These directives end with a single semicolon ; and do not contain nested CSS blocks.

* `@charset`: Specifies the character encoding used by the stylesheet (must be placed at line 1).
* `@import`: Loads external CSS files into the current stylesheet.

```css title="Example Statement At-Rules"
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
```

:::warning Parsing Order Rule
`@charset` and `@import` directives must appear before any standard style rules in your document. Any standard style rule placed above an `@import` will cause the browser to invalidate that import.
:::

### B. Nested Block At-Rules

These directives contain nested declaration blocks enclosed in `{ ... }`. They apply styles conditionally or create reusable browser instructions.

|Directive	| Purpose	| Example Use Case |
|---|---|---|
|`@media` | Applies styles conditionally based on media queries (screen width, dark mode, resolution).	| Responsive mobile-first layouts |
|`@keyframes`|	Defines animation frames and property values across a timeline.	|Keyframe animations |
|`@font-face` | Registers external font files for use across the document.	|Custom brand typography |
|`@supports` | Applies styles only if the browser supports a specific CSS feature (Feature Query).	| Progressive enhancement |
|`@layer` |	Assigns styles to explicit cascade layers to solve specificity conflicts cleanly. |	Modern architecture & resets |

## Code Example: At-Rules in Action

### 1. The @media Rule (Responsive Conditional Logic)

```css title="Example Media Query At-Rule"
/* Base style for mobile devices */
.nav-menu {
  display: flex;
  flex-direction: column;
}

/* At-Rule overriding styles for tablet screens and above */
@media (min-width: 768px) {
  .nav-menu {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

### 2. The @keyframes Rule (Animation Keyframes)

```css title="Example Keyframe Animation At-Rule"
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.badge-live {
  animation: pulse 2s infinite ease-in-out;
}
```

## Interactive Playground: Style Rules vs. At-Rules

Experiment with the interactive editor below. Try adjusting the `@keyframes `animation parameters or changing the conditional properties inside the `@media `rule to see how the live preview reacts:

<CodePreview
defaultHtml={`
<div class="badge-live">Live Badge</div>
<div class="nav-menu">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>
`}
defaultCss={`.badge-live {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 2rem;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
@media (min-width: 768px) {
  .nav-menu {
    flex-direction: row;
    justify-content: space-between;
  }
}
`}
/>

## Modern At-Rules to Know

Modern CSS has expanded At-Rules to give developers fine-grained control over browser capabilities:

### `@supports` (Feature Queries)
Enables progressive enhancement by checking browser compatibility before applying modern features:

```css title="Example Feature Query At-Rule"
@supports (display: grid) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
```

### `@layer` (Cascade Layers)
Controls cascade priority explicitly, ensuring lower-priority utility or third-party styles don't override component defaults:

```css title="Example Cascade Layer At-Rule"
@layer reset, components, utilities;

@layer components {
  .button {
    background-color: #2563eb;
    color: white;
  }
}
```

## Summary Checklist

|Rule Type | Syntax Pattern | Key Examples |
|----------|----------------|--------------|
|Style Rule | `selector { prop: val; }` | `.hero-title { font-size: 2.5rem; }` |
| Statement At-Rule | `@directive value;` | `@import url('styles.css');` |
| Block At-Rule | `@directive condition { ... }` | `@media (min-width: 768px)`, `@keyframes pulse` |