---
id: pseudo-classes-elements
title: "Pseudo-classes & Pseudo-elements"
sidebar_label: "Lecture 6"
sidebar_position: 2
description: "Learn target states with pseudo-classes and generate non-DOM visual nodes using pseudo-elements for clean, maintainable UI patterns."
tags: [css, pseudo-classes, elements]
---

While standard selectors target elements based on their HTML tag, attributes, or structural classes, **pseudo-classes** and **pseudo-elements** allow you to style elements based on dynamic user state, structural position, or virtual sub-parts of the DOM tree.

## 1. Pseudo-classes vs. Pseudo-elements

The core syntax difference lies in the colon notation defined in CSS3 specifications:
* **Pseudo-classes (`:`)** select existing DOM elements during specific dynamic states or structural conditions.
* **Pseudo-elements (`::`)** generate virtual abstraction nodes that do not explicitly exist in the HTML source code.

```
[ Dynamic State or Structural Condition ]
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
Pseudo-class ( : )          Pseudo-element ( :: )
Targets an existing node    Creates/Targets a virtual sub-node
Example: a:hover            Example: p::before
```

## 2. Deep Dive: Pseudo-Classes

Pseudo-classes alter an element's appearance based on user interaction, navigation history, or form field status.

### User Action & State Pseudo-Classes

| Pseudo-class | Trigger Condition | Common Use Case |
| :--- | :--- | :--- |
| `:hover` | Pointer device moves over element | Interactive button/link state |
| `:focus` | Keyboard or mouse focuses form input/link | Accessibility outline indicators |
| `:focus-visible` | Keyboard navigation focuses element (suppresses mouse focus outlines) | Clean modern accessibility indicators |
| `:active` | Element is currently being clicked/pressed | Tactile "pressed" button feedback |
| `:disabled` | Form control has `disabled` attribute | Dimmed styling for un-interactive inputs |
| `:checked` | Checkbox or radio button is selected | Custom toggles and radio UI |

### Structural Pseudo-Classes

Structural pseudo-classes target elements based on their position within their parent container's child list:

* `:first-child` / `:last-child`: Targets the absolute first or last child of a parent.
* `:nth-child(n)`: Selects elements based on an algebraic formula ($an + b$) or keywords (`odd`, `even`).
* `:not(selector)`: Negates a matching condition.

```css
/* Selects every even table row */
tr:nth-child(even) {
  background-color: #f8fafc;
}

/* Selects every 3rd list item starting from index 1 (1, 4, 7...) */
li:nth-child(3n+1) {
  font-weight: 700;
}

/* Styles buttons that DO NOT have the .btn-primary class */
button:not(.btn-primary) {
  border: 1px solid #cbd5e1;
}
```

## 3. Deep Dive: Pseudo-Elements

Pseudo-elements allow you to style specific fragments of an element's content or inject generated cosmetic elements into the render tree without polluting HTML markup.

### Generated Content (`::before` & `::after`)
`::before` and `::after` insert inline visual sub-nodes as the first or last child inside the targeted element. They strictly require the content property to render.

```css
/* Creates a decorative external link arrow */
a.external-link::after {
  content: " ↗";
  font-size: 0.8em;
  color: #2563eb;
}

/* Tooltip container indicator */
.tooltip::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #0f172a;
}
```

### Typographic & Selection Pseudo-Elements
* `::first-letter:` Styles the very first letter of a block container (ideal for drop caps).
* `::first-line:` Styles the first rendered line of text dynamically.
* `::selection:` Controls the background and text color when a user highlights text on the page.

```css
::selection {
  background-color: #38bdf8;
  color: #0f172a;
}
```

## Interactive Playground: State & Generated Content

Test dynamic state pseudo-classes alongside structural pseudo-elements in the live editor:

<CodePreview
defaultHtml={`
<ul class="custom-list">
  <li>First item (Highlighted via :first-child)</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item (Tagged via :nth-child)</li>
</ul>

<button class="btn">Interactive Button</button>

`}

defaultCss={`

/* List Item Pseudo-Classes */
.custom-list {
list-style: none;
padding-left: 0;
margin-bottom: 1.5rem;
}

.custom-list li {
padding: 0.6rem 0.8rem;
margin-bottom: 0.4rem;
background-color: #1e293b;
color: #ccc;
border-radius: 6px;
position: relative;
}

/* Structural :first-child */
.custom-list li:first-child {
border-left: 4px solid #38bdf8;
color: #38bdf8;
}

/* Structural :nth-child with ::after Generated Content */
.custom-list li:nth-child(4)::after {
content: "NEW";
position: absolute;
right: 12px;
font-size: 0.65rem;
font-weight: 700;
padding: 0.15rem 0.4rem;
background-color: #059669;
color: #ffffff;
border-radius: 4px;
}

/* Button State Transitions */
.btn {
background-color: #2563eb;
color: #ffffff;
border: none;
padding: 0.6rem 1.2rem;
border-radius: 6px;
font-weight: 600;
cursor: pointer;
transition: all 0.2s ease;
margin-right: 0.5rem;
}

/* Interaction States */
.btn:hover {
background-color: #1d4ed8;
transform: translateY(-1px);
}

.btn:focus-visible {
outline: 2px solid #38bdf8;
outline-offset: 3px;
}

.btn:active {
transform: translateY(1px);
}`}
height="420px"
/>

## Best Practices & Gotchas

| Feature | Recommended Practice | Common Anti-Pattern |
|---|---|---|
|Colon Notation|Use double colons `::` for pseudo-elements (`::before`) and single colon `:` for pseudo-classes (`:hover`).| Mixing up `::hover` or `:before` across modern codebases.|
|Accessibility | Pair `:hover` styles with matching `:focus` or `:focus-visible` rules for keyboard users. | Removing outline focus indicators (`outline: none`) without custom alternatives. | Generated Content | Keep decorative visual icons inside `::before` / `::after.Putting` critical semantic textual content inside a CSS `content:""` declaration.|