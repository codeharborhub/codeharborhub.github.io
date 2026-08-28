---
id: css-selectors
title: "CSS Selectors"
sidebar_label: "Lecture 5"
sidebar_position: 1
description: "Learn about CSS selectors and how to style text effectively."
tags: ["css", "lecture", "selectors", "typography"]
keywords: ["css", "lecture", "selectors", "typography"]
---

CSS selectors are the targeting system of the web. They instruct the browser rendering engine exactly which DOM nodes to select and style. As layout complexity scales, writing clean, maintainable selectors becomes essential for preventing specificity bloat and redundant rule chains.

## 1. Core Selector Taxonomy

CSS selectors range from fundamental type matchers to advanced functional pseudo-classes:

```txt
                [ CSS Selectors ]
                         |
┌─────────────────┬──────┴───────┬──────────────────┐
▼                 ▼              ▼                  ▼
Simple        Attribute       Combinators      Pseudo-Classes /
Selectors     Selectors       (& Relational)   Elements
(type, class, ([attr=val])    (>, +, ~)        (:hover, ::before,
id, universal)                                 :is(), :has())

```

### Basic & Combinator Reference

| Type | Syntax Example | Description | Specificity Vector |
| :--- | :--- | :--- | :---: |
| **Universal** | `*` | Targets every element in the document scope | `(0, 0, 0)` |
| **Type (Element)** | `h1`, `p`, `article` | Matches nodes by HTML tag name | `(0, 0, 1)` |
| **Class** | `.card`, `.btn` | Matches nodes with a specific `class` attribute value | `(0, 1, 0)` |
| **ID** | `#main-header` | Matches the unique element with a specific `id` attribute | `(1, 0, 0)` |
| **Descendant** | `article p` | Matches `p` anywhere nested inside `article` | `(0, 0, 2)` |
| **Child** | `ul > li` | Matches `li` that is a direct child of `ul` | `(0, 0, 2)` |
| **Next Sibling** | `h2 + p` | Matches `p` immediately following `h2` at the same DOM level | `(0, 0, 2)` |
| **Subsequent Sibling** | `h2 ~ p` | Matches all `p` elements following `h2` at the same DOM level | `(0, 0, 2)` |

## 2. Advanced Attribute Matching

Attribute selectors target elements based on the presence, exact value, or partial matching of their HTML attributes.

```css title="Attribute Selector Examples"
/* 1. Exact match */
input[type="text"] { border-color: #cbd5e1; }

/* 2. Contains word in space-separated list (~=) */
[class~="primary"] { font-weight: 700; }

/* 3. Starts with prefix, followed by hyphen or exact (-=) */
[lang|="en"] { quotes: "“" "”"; }

/* 4. Starts with exact substring (^=) */
a[href^="https://"] { color: #059669; }

/* 5. Ends with exact substring ($=) */
a[href$=".pdf"] { padding-right: 1.5rem; }

/* 6. Contains substring anywhere (*=) */
[class*="nav-item"] { opacity: 0.9; }

/* 7. Case-insensitive matching flag (i) */
input[placeholder*="search" i] { background-color: #f1f5f9; }
```

## 3. Modern Pseudo-Classes: `:is()`, `:where()`, and `:has()`

Modern CSS introduces functional pseudo-classes that dramatically streamline complex rule sets and introduce relational selector logic.

### `:is()` — Grouping & Forgiving Lists

Reduces repetition when applying styles across multiple matching trees. The specificity of `:is()` equals the highest-specificity selector in its argument list.

```css
/* Legacy repetitive approach */
header h1, header h2, main h1, main h2 {
  margin-bottom: 1rem;
}

/* Modern clean approach with :is() */
:is(header, main) :is(h1, h2) {
  margin-bottom: 1rem;
}
```

### `:where()` — Zero-Specificity Abstraction

Functions identically to `:is()`, but always maintains a specificity vector of `(0, 0, 0)`, making it ideal for base resets and design systems that users can easily override.

```css
/* Specificity is strictly (0, 0, 0) regardless of internal arguments */
:where(header, main) :where(h1, h2) {
  color: #1e293b;
}

/* Easily overridden by a single type selector (0, 0, 1) */
h1 {
  color: #2563eb;
}
```

### `:has()` — The Parent & Relational Selector

Matches a parent element based on its children or sibling relationships.

```css
/* Target a .card parent ONLY if it contains an image */
.card:has(img) {
  grid-template-columns: 120px 1fr;
}

/* Target an h2 ONLY when directly followed by a sub-heading p */
h2:has(+ p.subtitle) {
  margin-bottom: 0.25rem;
}
```

## Interactive Playground: Selector Precision

Experiment with basic combinators, attribute matching, and functional pseudo-classes in the sandbox below:

<CodePreview
defaultHtml={`<div class="demo-wrapper">
  
  <!-- Card 1: Triggers :has() [external link] and :where() -->
  <div class="card">
    <h3>Advanced CSS Selectors</h3>
    <p>This card has an external link. The entire container gets a unique box shadow.</p>
    <a href="#" target="_blank">Visit External Site</a>
  </div>

  <!-- Card 2: Triggers $= [substring ending in /course], > [child combinator], and :where() -->
  <div class="card">
    <span class="badge">New</span>
    <h3>Web Development Masters</h3>
    <p>This link ends with "/course", which automatically appends an arrow icon.</p>
    <a href="/courses">View our comprehensive</a>
  </div>
</div>

`}
defaultCss={`/* 2. Parent Selector (:has) — style container if it contains an external link */
.card:has(a[href^="https://"]) {
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}
/* 3. Attribute End Substring ($=) */
a[href$="/course"]::after {
    content: " ↗";
}
/* 4. Zero Specificity Reset with :where() */
:where(.card) h3 {
    margin-top: 0;color: #0f172a;font-family: system-ui, sans-serif;
}
/* 5. Child Combinator (>) */
.card > .badge {
    display: inline-block;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: #cbd5e1;
    color: #334155;
}
/* Base Container Styling */
.demo-wrapper {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8fafc;
}
.card {
    padding: 1.25rem;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
}`}
height="420px"
/>

## Summary Reference Table

| Selector / Pseudo-Class |	Primary Use Case |	Specificity Impact |
|---|---|---|
|`[attr^="val"]`|Matches starting value (e.g., protocol links)|Counts as 1 Class `(0, 1, 0)`|
|`[attr$="val"]`|Matches ending value (e.g., file extensions)|Counts as 1 Class `(0, 1, 0)`|
|`:is(A, B)`|Dry up duplicate selector trees|Highest argument in list|
|`:where(A, B)`|Low-specificity design system defaults|Always zero `(0, 0, 0)`|
|`:has(Selector)`|Relational parent/sibling conditional styling|Highest argument in condition|