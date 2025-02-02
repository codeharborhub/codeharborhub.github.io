---
id: max-width-height
title: "CSS Max-Width and Max-Height"
sidebar_label: "Max-Width and Max-Height"
sidebar_position: 7
keywords:
  - css max-width
  - css max-height
  - max-width property
  - max-height property
  - css sizing
  - css dimensions
  - css box model
  - css box model max-width
  - css box model max-height
description: Learn how to use the CSS max-width and max-height properties to set the maximum dimensions of elements in your web page layout.
tags: 
    - css
    - max-width
    - max-height
    - max-width property
    - max-height property
---

In CSS, the `max-width` and `max-height` properties are used to set the maximum dimensions of elements in your web page layout. The `max-width` property specifies the maximum width of an element, while the `max-height` property specifies the maximum height of an element. By adjusting the `max-width` and `max-height` values, you can ensure that elements do not become larger than a certain size, even if their content is larger.

<AdsComponent />

## Syntax

The syntax for the `max-width` and `max-height` properties is as follows:

```css title="index.css"
selector {
  max-width: value;
  max-height: value;
}
```

- `selector`: The element to which the maximum width and height are applied.
- `max-width`: The CSS property used to set the maximum width of an element.
- `max-height`: The CSS property used to set the maximum height of an element.
- `value`: Specifies the maximum width and height values for the element. It can take one of the following forms:
  - `<length>`: Specifies a fixed maximum width or height value in pixels (e.g., `100px`).
  - `<percentage>`: Specifies the maximum width or height value as a percentage of the width or height of the containing element.
  - `none`: Removes the maximum width or height restriction.
  - `initial`: Sets the maximum width or height to its default value.
  - `inherit`: Inherits the maximum width or height value from the parent element.
  - `unset`: Resets the maximum width or height to its inherited value if it inherits from its parent, or to its initial value if not.
  - `fit-content`: Specifies that the maximum width or height should be the minimum size needed to fit the content.
  - `min-content`: Specifies that the maximum width or height should be the minimum size needed to fit the content, but not smaller than the `min-width` or `min-height` value.

The default value of the `max-width` and `max-height` properties is `none`, which means there is no maximum width or height set for the element.

## Example

In the following example, the `max-width` and `max-height` properties are used to set the maximum dimensions of a `<div>` element to `300px` and `150px`, respectively:

```css title="index.css"
div {
  max-width: 300px;
  max-height: 150px;
}
```

In this example, the `<div>` element will not grow larger than `300px` in width and `150px` in height, even if its content exceeds these dimensions. This can be useful when you want to prevent elements from expanding beyond a certain size in your layout.

By using the `max-width` and `max-height` properties, you can control the maximum dimensions of elements in your web page layout and ensure that they do not become larger than a specified size. This can help you create more consistent and visually appealing designs by limiting the size of elements based on your design requirements.

<AdsComponent />

:::note Try it yourself
Experiment with different values of the `max-width` and `max-height` properties to see how the maximum dimensions of elements change based on the box model.
:::

## Example for `max-width` and `max-height`

In the following example, the `max-width` and `max-height` properties are used to set the maximum dimensions of a `<div>` element to `300px` and `150px`, respectively:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Max-Width and Max-Height Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>Max-Width and Max-Height Example with CSS</p>
  </div>
</body>
</html>
```

  </TabItem>
  <TabItem value="CSS" label="styles.css">

```css
div {
  max-width: 300px;
  max-height: 150px;
  background-color: lightblue;
}

h1, p {
  padding: 10px;
}
```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{maxWidth: "300px", maxHeight: "150px", backgroundColor: "lightblue"}}>
        <p style={{padding: "10px"}}>Max-Width and Max-Height Example with CSS</p> 
    </div>
</BrowserWindow>

In this example, the `<div>` element will not grow larger than `300px` in width and `150px` in height, even if its content exceeds these dimensions. The `max-width` and `max-height` properties ensure that the element maintains a maximum size on the page, providing a consistent layout for your web page design.

By experimenting with different values for the `max-width` and `max-height` properties, you can control the maximum dimensions of elements in your web page layout and create visually appealing designs that adapt to various screen sizes and content lengths.

## Conclusion

By using the `max-width` and `max-height` properties, you can set the maximum dimensions of elements in your web page layout, ensuring that they do not become larger than a specified size. This can help you create more consistent and visually appealing designs by limiting the size of elements based on your design requirements. Experiment with different values for the `max-width` and `max-height` properties to see how they affect the layout of your web page and how you can use them to control the dimensions of elements effectively.