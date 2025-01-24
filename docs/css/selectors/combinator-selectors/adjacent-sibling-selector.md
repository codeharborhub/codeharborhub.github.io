---
id: adjacent-sibling-selector
title: Adjacent Sibling Selector
sidebar_label: Adjacent Sibling Selector
position: 3
tags: [selector, combinator, adjacent-sibling]
description: Adjacent sibling selector is used to select an element that is immediately preceded by another element.
keywords:
  [
    adjacent sibling selector,
    css adjacent sibling selector,
    css selector,
    css combinator,
    css adjacent sibling combinator,
  ]
---

In CSS, the adjacent sibling selector is used to select an element that is immediately preceded by another element. The adjacent sibling selector is represented by the `+` character between two selectors.

<AdsComponent />

## Syntax

The syntax for the adjacent sibling selector is as follows:

```css title="index.css"
selector1 + selector2 {
  /* CSS properties */
}
```

- `selector1`: The first sibling element.
- `selector2`: The second sibling element.
- `CSS properties`: The CSS properties to be applied to the second sibling element.
- `+`: The `+` character represents the adjacent sibling selector.

## Example

In the following example, the adjacent sibling selector is used to select all `<p>` elements that are immediately preceded by an `<h2>` element:

```css title="index.css"
h2 + p {
  font-weight: bold;
}
```

In the HTML code below, the CSS rule will apply the `font-weight: bold` property to the text inside the `<p>` element because it is immediately preceded by an `<h2>` element.

```html title="index.html"
<h2>Heading</h2>
<p>This text will be bold.</p>
```

The adjacent sibling selector can be used to target specific elements that are adjacent to each other in the HTML structure.

:::tip Key Points to Remember

- The adjacent sibling selector is represented by the `+` character between two selectors.
- The adjacent sibling selector selects an element that is immediately preceded by another element.
- The adjacent sibling selector is more specific than the general sibling selector (`~`) and less specific than the child combinator (`>`).
- The adjacent sibling selector is also known as the next-sibling combinator.
- The adjacent sibling selector is useful when you want to target elements that are adjacent to each other in the HTML structure.

:::

<AdsComponent />

## Example: Using Adjacent Sibling Selector

Let's consider an example where we want to style the text inside a paragraph (`<p>`) element that is immediately preceded by a heading (`<h2>`) element. We can achieve this using the adjacent sibling selector as shown below:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
<h2>Heading</h2>
<p>This text will be bold.</p>
    ```
 </TabItem>
 <TabItem value="CSS" lable="index.css">
    ```css showLineNumbers
h2 + p {
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
</div>
</BrowserWindow>

In the above example, the CSS rule will apply the `font-weight: bold` property to the text inside the `<p>` element because it is immediately preceded by an `<h2>` element.

## Conclusion

The adjacent sibling selector is a useful CSS selector that allows you to target elements that are immediately preceded by another element. By using the adjacent sibling selector, you can apply specific styles to elements that are adjacent to each other in the HTML structure. This selector is handy when you want to style elements based on their relationship with other elements in the document.
