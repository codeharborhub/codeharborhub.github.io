---
id: general-sibling-selector
title: General Sibling Selector
sidebar_label: General Sibling Selector
position: 4
tags: [selector, combinator, general-sibling]
description: General sibling selector is used to select an element that is preceded by another element.
keywords:
  [
    general sibling selector,
    css general sibling selector,
    css selector,
    css combinator,
    css general sibling combinator,
  ]
---

In CSS, the general sibling selector is used to select an element that is preceded by another element. The general sibling selector is represented by the `~` character between two selectors.

<AdsComponent />

## Syntax

The syntax for the general sibling selector is as follows:

```css title="index.css"
selector1 ~ selector2 {
  /* CSS properties */
}
```

- `selector1`: The first sibling element.
- `selector2`: The second sibling element.
- `CSS properties`: The CSS properties to be applied to the second sibling element.
- `~`: The `~` character represents the general sibling selector.
- The `~` character is used to select all sibling elements that are preceded by the first sibling element.

## Example

In the following example, the general sibling selector is used to select all `<p>` elements that are preceded by an `<h2>` element:

```css title="index.css"
h2 ~ p {
  font-weight: bold;
}
```

In the HTML code below, the CSS rule will apply the `font-weight: bold` property to the text inside the `<p>` element because it is preceded by an `<h2>` element.

:::info Additional Information
- The general sibling selector is represented by the `~` character between two selectors.
- The general sibling selector selects an element that is preceded by another element.
- The general sibling selector is less specific than the adjacent sibling selector (`+`) and more specific than the descendant combinator (` `).
- The general sibling selector is also known as the tilde combinator.
- The general sibling selector can be used to target multiple sibling elements that are preceded by the first sibling element.
- The general sibling selector is useful for styling elements that are not directly related but share the same parent.

:::

<AdsComponent />

## Example: Using General Sibling Selector

In the following example, the general sibling selector is used to select all `<p>` elements that are preceded by an `<h2>` element:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>General Sibling Selector Example</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <h2>Heading</h2>
      <p>This text will be bold.</p>
      <p>This text will also be bold.</p>
      <h2>Another Heading</h2>
      <p>This text will be bold too.</p>
    </body>
    </html>
    ```
    </TabItem>
    <TabItem value="CSS" lable="styles.css">
        ```css showLineNumbers
        h2 ~ p {
            font-weight: bold;
        }
        ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
<div>
<h2>Heading</h2>
<p style={{ fontWeight: "bold" }}>This text will be bold.</p>
<p style={{ fontWeight: "bold" }}>This text will also be bold.</p>
<h2>Another Heading</h2>
<p style={{ fontWeight: "bold" }}>This text will be bold too.</p>
</div>
</BrowserWindow>

In the above example, the CSS rule will apply the `font-weight: bold` property to the text inside the `<p>` elements that are preceded by an `<h2>` element.

<AdsComponent />

## Summary

The general sibling selector (`~`) is used to select an element that is preceded by another element. It is less specific than the adjacent sibling selector (`+`) and more specific than the descendant combinator (` `). The general sibling selector is useful for styling elements that are not directly related but share the same parent.