---
id: pseudo-elements-selectors
title: Pseudo-Elements Selectors
sidebar_label: Pseudo-Elements Selectors
sidebar_position: 5
tags:
  [
    pseudo-elements selectors,
    css pseudo-elements selectors,
    css selectors,
    css pseudo-elements,
  ]
description: "Pseudo-elements selectors are used to style parts of an element that are not part of the document tree."
keywords:
  [
    pseudo-elements selectors,
    css pseudo-elements selectors,
    css selectors,
    css pseudo-elements,
  ]
---

In CSS, pseudo-elements selectors are used to style parts of an element that are not part of the document tree. Pseudo-elements selectors are represented by double colons `::` followed by the name of the pseudo-element. Pseudo-elements selectors allow you to style specific parts of an element, such as the first letter or line of a block of text, without adding extra markup to the HTML document.

<AdsComponent />

## Syntax

The syntax for pseudo-elements selectors is as follows:

```css title="index.css"
selector::pseudo-element {
  /* CSS properties */
}
```

- `selector`: The element to which the pseudo-element is applied.
- `pseudo-element`: The pseudo-element to be styled.
- `CSS properties`: The CSS properties to be applied to the pseudo-element.
- `::`: The `::` characters represent the pseudo-elements selector.
- The `::` characters are used to style parts of an element that are not part of the document tree.
- Pseudo-elements selectors are used to style specific parts of an element, such as the first letter or line of a block of text.

## Example

In the following example, the `::first-letter` pseudo-element selector is used to style the first letter of the text inside an `<h1>` element:

```css title="index.css"
h1::first-letter {
  font-size: 2em;
  color: red;
}
```

In the HTML code below, the CSS rule will apply the `font-size: 2em` and `color: red` properties to the first letter of the text inside the `<h1>` element:

```html title="index.html"
<h1>Welcome to CSS</h1>
```

The first letter of the text "Welcome to CSS" will be styled with a font size of `2em` and a color of `red`.

:::info Additional Information

- Pseudo-elements selectors are used to style parts of an element that are not part of the document tree.
- Pseudo-elements selectors are represented by double colons `::` followed by the name of the pseudo-element.
- Pseudo-elements selectors allow you to style specific parts of an element, such as the first letter or line of a block of text, without adding extra markup to the HTML document.
- Pseudo-elements selectors are used to create effects like drop caps, text underlines, and more.
- Pseudo-elements selectors are less specific than class selectors and more specific than element selectors.
- Pseudo-elements selectors are useful for adding decorative elements to text or styling specific parts of an element.
- Pseudo-elements selectors can be combined with other selectors to create complex styles.
- Pseudo-elements selectors are supported in all modern browsers.
- Pseudo-elements selectors are used to style parts of an element that are not part of the document tree.
- Pseudo-elements selectors are used to style specific parts of an element, such as the first letter or line of a block of text.

:::

<AdsComponent />

## Example: Using Pseudo-Elements Selectors

In the following example, the `::first-line` pseudo-element selector is used to style the first line of text inside a `<p>` element:

<Tabs>
 <TabItem value="HTML" lable="index.html">
```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-Elements Selectors Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</body>
</html>
```
 </TabItem>
 <TabItem value="CSS" lable="styles.css">
```css title="styles.css"
p::first-line {
  font-weight: bold;
  font-size: 1.2em;
}
```
 </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
<div>
      <style>
        {`
          .demo::first-line {
            font-weight: bold;
            font-size: 1.2em;
          }
        `}
      </style>
      <p className="demo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
</BrowserWindow>

In the above example, the CSS rule will apply the `font-weight: bold` and `font-size: 1.2em` properties to the first line of text inside the `<p>` element.

<AdsComponent />

## Summary

Pseudo-elements selectors are used to style parts of an element that are not part of the document tree. Pseudo-elements selectors are represented by double colons `::` followed by the name of the pseudo-element. Pseudo-elements selectors allow you to style specific parts of an element, such as the first letter or line of a block of text, without adding extra markup to the HTML document. Pseudo-elements selectors are useful for adding decorative elements to text or styling specific parts of an element. Pseudo-elements selectors can be combined with other selectors to create complex styles. Pseudo-elements selectors are supported in all modern browsers. Pseudo-elements selectors are used to style parts of an element that are not part of the document tree. Pseudo-elements selectors are used to style specific parts of an element, such as the first letter or line of a block of text.