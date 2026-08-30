---
id: css-custom-properties
title: "CSS Custom Properties (Variables)"
sidebar_label: "Lecture 12"
sidebar_position: 1
description: "Master CSS Custom Properties (Variables)—declaration scoping, cascading inheritance, fallback values, JavaScript manipulation, and theme switching patterns."
tags:
  - CSS
  - Custom Properties
  - CSS Variables
  - Modern CSS
  - Web Development
  - CodeHarborHub
---

**CSS Custom Properties** (often referred to as **CSS Variables**) are entities defined by CSS authors that contain specific values to be reused throughout a document. Unlike traditional preprocessor variables (Sass/Less), CSS variables live in the DOM, adhere to the cascade, inherit values across elements, and can be read or mutated dynamically at runtime using JavaScript.

## 1. Syntax, Scoping, and Fallbacks

CSS Custom Properties are declared using a double-hyphen prefix (`--`) and accessed using the `var()` function.

### Global vs. Local Scoping

* **Global Scope (`:root`):** Properties declared on the `:root` pseudo-class are available everywhere in the DOM tree.
* **Local Scope:** Properties declared inside a specific component selector are scoped strictly to that element and its descendants.

```css
/* Global Scope */
:root {
  --primary-color: #2563eb;
  --base-padding: 1rem;
}

/* Local Scope Override */
.card-featured {
  --primary-color: #d97706; /* Overrides global value for this box & children */
  padding: var(--base-padding);
  border: 2px solid var(--primary-color);
}

```

### Fallback Values in `var()`

The `var()` function accepts a second argument as a fallback value in case the target custom property is undefined:

```css
.button {
  /* Uses --button-bg if defined; falls back to #059669 if undefined */
  background-color: var(--button-bg, #059669);
  
  /* Nested fallback chain */
  color: var(--button-text, var(--primary-color, #ffffff));
}

```

## 2. Dynamic Runtime Manipulation with JavaScript

Because custom properties are live DOM objects, you can easily read, write, and remove them dynamically at runtime via JavaScript.

```javascript
// Get an element reference
const root = document.documentElement;

// Read custom property value
const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color');

// Dynamically mutate property value
root.style.setProperty('--primary-color', '#10b981');

// Remove custom property override
root.style.removeProperty('--primary-color');

```

## 3. Practical Architecture: Theme Switching System

CSS variables enable clean, light/dark theme switching without repeating stylesheet rules. By altering dataset attributes or class names on `<html>` or `<body>`, custom property values switch instantly across the UI.

```css
/* Base Theme Tokens */
:root {
  --bg-color: #ffffff;
  --text-color: #0f172a;
  --card-bg: #f8fafc;
  --accent-color: #2563eb;
}

/* Dark Theme Overrides */
[data-theme="dark"] {
  --bg-color: #0f172a;
  --text-color: #f8fafc;
  --card-bg: #1e293b;
  --accent-color: #38bdf8;
}

/* Components consume variables seamlessly */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.card {
  background-color: var(--card-bg);
  border: 1px solid var(--accent-color);
}

```

## Interactive Playground: Dynamic Theme Engine

Test local variable scoping and live custom property toggling in the interactive editor below:

<CodePreview
  defaultHtml={`<div class="theme-card">
  <h3>Themed Card Component</h3>
  <p>This layout uses inherited custom CSS variables.</p>
  <div class="nested-box">
    Nested Box Override
  </div>
</div>`}
defaultCss={`/* Global Theme Variables Context */
:root {
  --card-bg: #1e293b;
  --text-accent: #38bdf8;
  --padding-unit: 1.5rem;
}

.theme-card {
  background-color: var(--card-bg);
  color: #ffffff;
  padding: var(--padding-unit);
  border-radius: 8px;
  font-family: system-ui, sans-serif;
}

.theme-card h3 {
  margin-top: 0;
  color: var(--text-accent);
}

/* Local Component Scope Override */
.nested-box {
  /* Local variable override */
  --box-bg: #2563eb;
  --text-accent: #ffffff;

  background-color: var(--box-bg);
  color: var(--text-accent);
  padding: calc(var(--padding-unit) * 0.75);
  border-radius: 6px;
  font-weight: 600;
  text-align: center;
}`}
  height="340px"
/>

## Summary Reference Table

| Concept / Feature | Syntax Example | Key Advantage |
| --- | --- | --- |
| **Declaration** | `--accent: #2563eb;` | Establishes a reusable CSS variable |
| **Usage** | `color: var(--accent);` | References variable value with inheritance support |
| **Fallback** | `var(--accent, #000000)` | Provides safe default if variable is undefined |
| **Global Scope** | `:root { --gap: 1rem; }` | Makes property available across the entire document |
| **JavaScript API** | `el.style.setProperty('--gap', '2rem')` | Allows real-time dynamic design token manipulation |