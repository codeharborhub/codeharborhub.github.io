---
id: css-nesting-sass
title: "Modern CSS Nesting & Preprocessors"
sidebar_label: "Lecture 17"
sidebar_position: 2
description: "Master Native CSS Nesting and Sass/SCSS preprocessor architecture—mixins, control directives, modules, and modern nesting syntax."
tags:
  - CSS
  - CSS Nesting
  - Sass
  - SCSS
  - CodeHarborHub
---

CSS rules were traditionally flat, requiring repetitive selector declarations. Today, **Native CSS Nesting** lets developers group dependent rules directly in standard CSS—a capability originally pioneered by preprocessors like **Sass/SCSS**.

## 1. Native CSS Nesting Syntax

Native CSS Nesting allows child selectors, pseudo-classes, and media queries to be nested directly within a parent rule block.

```css
/* Modern Native CSS Nesting */
.article-card {
  background-color: #1e293b;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #334155;

  /* Target nested element */
  & .article-card__title {
    color: #38bdf8;
    margin-top: 0;
  }

  /* Target state on parent */
  &:hover {
    border-color: #2563eb;

    & .article-card__title {
      color: #60a5fa;
    }
  }

  /* Target nested media query */
  @media (width >= 600px) {
    padding: 2rem;
  }
}

```

:::tip The Parent Selector (`&`)
The `&` nesting symbol explicitly references the outer parent selector. In Native CSS, nested rules without `&` implicitly prepend `& ` (with a space) for descendant matching.
:::

## 2. SCSS Architecture: Mixins & Modules

While Native CSS supports nesting and custom properties, CSS preprocessors like Sass/SCSS offer advanced programmatic capabilities compiled to standard CSS.

### Reusable Mixins (`@mixin` & `@include`)

```scss
// Define a reusable flexbox layout mixin
@mixin flex-center($direction: row,$gap: 1rem) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: center;
  gap: $gap;
}

// Consume the mixin inside a component
.hero-box {
  @include flex-center(column, 1.5rem);
  min-height: 200px;
}

```

### Modern Sass Module System (`@use` & `@forward`)

```scss
// _variables.scss
$primary-color: #2563eb;
$font-stack: system-ui, sans-serif;

// styles.scss
@use 'variables' as vars;

.button {
  background-color: vars.$primary-color;
  font-family: vars.$font-stack;
}

```

## Interactive Playground: Nested Component Architecture

Test live Native CSS Nesting state cascades in the editor below:

<CodePreview
  defaultHtml={`<div class="nested-card">
  <h3 class="nested-card__heading">Native Nesting Card</h3>
  <p class="nested-card__body">Hover over this card component to see the heading color and button background change simultaneously.</p>
  <button class="nested-card__button">Action</button>
</div>`}
defaultCss={`/* Font Context Setup */
:root {
  font-family: system-ui, sans-serif;
}

/* Parent Block Selector */
.nested-card {
  background-color: #1e293b;
  border: 1px solid #334155;
  padding: 1.5rem;
  border-radius: 8px;
  color: #ffffff;
  transition: border-color 0.3s ease;

  /* Nested Elements */
  & .nested-card__heading {
    margin-top: 0;
    color: #38bdf8;
    transition: color 0.3s ease;
  }

  & .nested-card__body {
    color: #94a3b8;
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  & .nested-card__button {
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  /* Nested Parent Hover State Cascade */
  &:hover {
    border-color: #38bdf8;

    & .nested-card__heading {
      color: #34d399;
    }

    & .nested-card__button {
      background-color: #059669;
    }
  }
}`}
  height="340px"
/>

## Summary Reference Table

| Feature | Native CSS Syntax | SCSS / Sass Syntax |
| --- | --- | --- |
| **Nesting Selector** | `& .child { ... }` | `& .child { ... }` |
| **Parent Reference** | `&:hover { ... }` | `&:hover { ... }` |
| **Reusability** | CSS Custom Properties | `@mixin` / `@include` directives |
| **Modular System** | `@import` / `@layer` | `@use` / `@forward` module system |