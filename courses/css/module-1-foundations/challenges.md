---
id: challenges
title: "Practical Tasks & Code Challenges"
sidebar_label: "Challenges"
sidebar_position: 6
description: "Validate your understanding of CSS foundations with three real-world tasks. Each challenge isolates core concepts from Module 1: rule syntax, specificity math, source order resolution, and explicit inheritance."
tags: ["css", "challenges", "foundations"]
keywords: ["css", "challenges", "foundations"]
---

Validate your understanding of CSS foundations with three real-world tasks. Each challenge isolates core concepts from Module 1: rule syntax, specificity math, source order resolution, and explicit inheritance.

## Challenge 1: Fix the Specificity Bug

### Problem Statement

A developer on your team attempted to style an alert notification system. They wrote a utility class `.alert-success` to turn the alert text **emerald green**, but the text remains **crimson red**.

### Buggy Implementation

Inspect the conflicting CSS rules below:

```css title="Buggy CSS Rules"
/* Rule A */
div#notification-container .alert {
  color: #dc2626; /* Crimson Red */
  font-weight: 600;
}

/* Rule B */
.alert-success {
  color: #059669; /* Emerald Green */
}
```

### Analysis & Solution Task

1. Calculate the (`A, B, C`) specificity vector for Rule A and Rule B.
2. Explain why Rule B fails to override Rule A despite appearing later in the source code.
3. Refactor the CSS without using `!important` so that `.alert-success` correctly displays green.

### Specificity 

* Rule A (`div#notification-container .alert`): (`1, 1, 1`) → 1 ID (`#notification-container`), 1 Class (`.alert`), 1 Type (`div`).
* Rule B (`.alert-success`): (`0, 1, 0`) → 1 Class (`.alert-success`).

Vector (`1, 1, 1`) strictly defeats vector (`0, 1, 0`). Source order only acts as a tie-breaker when specificity vectors are equal.

### Recommended Refactor

Increase Rule B's specificity score to at least `(1, 1, 1)` or higher:

```css title="Refactored CSS Rules"
/* Option 1: Match ID context (1, 2, 0) */
#notification-container .alert.alert-success {
  color: #059669;
}

/* Option 2: Target via chained ID & class (1, 1, 0) */
#notification-container .alert-success {
  color: #059669;
}
```

## Challenge 2: Master Explicit Inheritance

### Goal

Build a styled card component where the default text color inherits from a parent container, but interactive sub-elements explicitly reset or override inheritance rules using `inherit` and `initial`.

### Requirements

* The base `.card` container must define `color: #475569` (slate grey) and `font-family: system-ui`.
* Paragraphs (`<p>`) inside `.card` must inherit the parent container's font settings automatically.
* The `.card-footer a` link must explicitly set `color: inherit` to match paragraph text rather than the browser's default user-agent blue (`#0000ee`).
* The `.reset-badge` span must set `color: initial` to revert directly to standard User-Agent rendering.

```html title="Card Component Structure"
<div class="card">
  <h3>Module 1 Completion Badge</h3>
  <p>Your progress has been logged to the CodeHarborHub ecosystem.</p>
  <div class="card-footer">
    <a href="#">View Certification</a>
    <span class="reset-badge">System Status: Active</span>
  </div>
</div>
```

## Interactive Coding Lab

Refactor and debug the live sandbox below to complete all challenge requirements.

<CodePreview defaultHtml={`<div class="card"> 
    <h3>Module 1 Completion Badge</h3> 
    <p>Your progress has been logged to the CodeHarborHub ecosystem.</p> 
    <div class="card-footer"> 
        <a href="#" class="custom-link">View Certification</a> 
        <span class="reset-badge">System Status: Active</span> 
    </div> 
</div>`} 
defaultCss={`/* Challenge 2: Refactor the CSS to use modern styling and correct inheritance */
.card {
    color: #475569;
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
}
.card p {
    color: inherit;
    margin: 0.5rem 0 1rem 0;
}
.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
}
.card-footer a {
    color: #2563eb;
    text-decoration: none;
}
.card-footer a:hover {
    text-decoration: underline;
}
.reset-badge {
    color: #059669;
    font-weight: 500;
}`} 

height="480px" />

## Task Self-Check Scorecard

In this challenge, you should have successfully applied the following CSS concepts:

* **Specificity Math:** Calculated specificity vectors to resolve style conflicts.
* **Explicit Inheritance Control:** Used `inherit` and `initial` to manage property inheritance in nested elements.
* **Source Order Resolution:** Ensured that the order of CSS rules does not override specificity unless intended.
* **Modern CSS Practices:** Applied semantic class names, responsive design principles, and clean code formatting.