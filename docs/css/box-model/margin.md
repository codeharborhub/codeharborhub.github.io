---
id: margin
title: CSS Margin
sidebar_label: Margin
sidebar_position: 3
keywords:
  [
    css margin,
    margin property,
    css margin property,
    css spacing,
    margin shorthand,
    margin values,
  ]
description: Learn how to use the CSS margin property to create space around elements in your web page layout.
tags: [css, margin, css margin, margin property, css margin property]
---

In CSS, the `margin` property is used to create space around elements in your web page layout. Margins are the transparent spaces outside the border of an element that separate it from other elements on the page. By adjusting the margin values, you can control the spacing between elements and create visually appealing layouts.

<AdsComponent />

## Syntax

The syntax for the `margin` property is as follows:

```css title="index.css"
selector {
  margin: value;
}
```

- `selector`: The element to which the margin is applied.
- `margin`: The CSS property used to set the margin around an element.
- `value`: Specifies the margin values for the top, right, bottom, and left sides of the element. It can take one of the following forms:
  - `<length>`: Specifies a fixed margin value in pixels (e.g., `10px`).
  - `<percentage>`: Specifies a margin value as a percentage of the width of the containing element.
  - `auto`: Adjusts the margin to automatically distribute the space between elements.
  - `initial`: Sets the margin to its default value.
  - `inherit`: Inherits the margin value from the parent element.
  - `unset`: Resets the margin to its inherited value if it inherits from its parent, or to its initial value if not.

The `margin` property can be set using one of the following shorthand values:

- `margin: value;`: Sets the same margin value for all four sides.
- `margin: vertical horizontal;`: Sets the vertical margin (top and bottom) and horizontal margin (left and right) to different values.
- `margin: top right bottom left;`: Sets individual margin values for the top, right, bottom, and left sides.
- `margin: initial;`: Sets the margin to its default value.
- `margin: inherit;`: Inherits the margin value from the parent element.
- `margin: unset;`: Resets the margin to its inherited value if it inherits from its parent, or to its initial value if not.
- `margin-top: value;`: Sets the margin value for the top side.
- `margin-right: value;`: Sets the margin value for the right side.
- `margin-bottom: value;`: Sets the margin value for the bottom side.
- `margin-left: value;`: Sets the margin value for the left side.
- `margin-block-start: value;`: Sets the margin value for the block-start side (top margin in horizontal writing mode).
- `margin-block-end: value;`: Sets the margin value for the block-end side (bottom margin in horizontal writing mode).

The default value of the `margin` property is `0`, which means no margin is applied to the element.

## Example

In the following example, the `margin` property is used to set the margin around a `<div>` element to `20px` on all sides:

```css title="index.css"
div {
  margin: 20px;
}
```

In the HTML code below, the CSS rule will apply the `20px` margin to the `<div>` element:

```html title="index.html"
<div>This is a div element with a 20px margin around it.</div>
```

By adjusting the margin values, you can control the spacing between elements and create visually appealing layouts in your web page design.

<AdsComponent />

:::info Additional Information

**Margin Values:**

- Margins are the transparent spaces around elements that separate them from other elements on the page.
- The `margin` property is used to set the margin around an element.
- Margin values can be specified in pixels, percentages, or using the `auto`, `initial`, `inherit`, or `unset` keywords.
- The default value of the `margin` property is `0`, which means no margin is applied to the element.
- The `margin` property can be set using shorthand values or individual properties for each side.
- By adjusting the margin values, you can control the spacing between elements and create visually appealing layouts in your web page design.
- Margins are part of the CSS box model and are used to create space around elements in the layout.

:::

## Example for Margin

Now, let's look at an example that demonstrates how the `margin` property can be used to create space around an element in a web page layout.

<Tabs>
  <TabItem value="HTML" label="index.html">

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Margin Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>
      This is a div element with a 20px margin around it.
    </p>
  </div>
</body>
</html>
```

</TabItem>

<TabItem value="CSS" label="styles.css">

```css title="styles.css"
div {
  margin: 20px;
  padding: 10px;
  border: 1px solid black;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{margin: "20px", padding: "10px", border: "1px solid black"}}>
        <p>
            This is a div element with a 20px margin around it.
        </p>
    </div>
</BrowserWindow>

By following this example, you can use the `margin` property to create space around an element in your web page layout. Adjusting the margin values allows you to control the spacing between elements and create visually appealing designs.

## Conclusion

The `margin` property in CSS is a powerful tool for creating space around elements in your web page layout. By setting the margin values for an element, you can control the spacing between elements and create visually appealing designs. Understanding how to use the `margin` property effectively will help you create well-structured and visually appealing web pages.