---
id: min-width-height
title: "CSS Min-Width and Min-Height"
sidebar_label: "Min-Width and Min-Height"
sidebar_position: 6
keywords:
  - css min-width
  - css min-height
  - min-width property
  - min-height property
  - css sizing
  - css dimensions
  - css box model
  - css box model min-width
  - css box model min-height
description: Learn how to use the CSS min-width and min-height properties to set the minimum dimensions of elements in your web page layout.
tags: 
    - css
    - min-width
    - min-height
    - min-width property
    - min-height property
---

In CSS, the `min-width` and `min-height` properties are used to set the minimum dimensions of elements in your web page layout. The `min-width` property specifies the minimum width of an element, while the `min-height` property specifies the minimum height of an element. By adjusting the `min-width` and `min-height` values, you can ensure that elements do not become smaller than a certain size, even if their content is smaller.

<AdsComponent />

## Syntax

The syntax for the `min-width` and `min-height` properties is as follows:

```css title="index.css"
selector {
  min-width: value;
  min-height: value;
}
```

- `selector`: The element to which the minimum width and height are applied.
- `min-width`: The CSS property used to set the minimum width of an element.
- `min-height`: The CSS property used to set the minimum height of an element.
- `value`: Specifies the minimum width and height values for the element. It can take one of the following forms:
  - `<length>`: Specifies a fixed minimum width or height value in pixels (e.g., `100px`).
  - `<percentage>`: Specifies the minimum width or height value as a percentage of the width or height of the containing element.
  - `auto`: Adjusts the minimum width or height automatically based on the content of the element.
  - `initial`: Sets the minimum width or height to its default value.
  - `inherit`: Inherits the minimum width or height value from the parent element.
  - `unset`: Resets the minimum width or height to its inherited value if it inherits from its parent, or to its initial value if not.
- `fit-content`: Specifies that the minimum width or height should be the minimum size needed to fit the content.
- `min-content`: Specifies that the minimum width or height should be the minimum size needed to fit the content, but not smaller than the `min-width` or `min-height` value.
- `max-content`: Specifies that the minimum width or height should be the maximum size needed to fit the content, but not larger than the `max-width` or `max-height` value.

The default value of the `min-width` and `min-height` properties is `auto`, which means there is no minimum width or height set for the element.

## Example

In the following example, the `min-width` and `min-height` properties are used to set the minimum dimensions of a `<div>` element to `100px` and `50px`, respectively:

```css title="index.css"
div {
  min-width: 100px;
  min-height: 50px;
}
```

In this example, the `<div>` element will not become smaller than `100px` in width and `50px` in height, even if its content is smaller. This ensures that the element maintains a minimum size on the page.

## Browser Support

The `min-width` and `min-height` properties are supported in all major browsers, including

| Browsers | ![Chrome](/browser-img/chrome.png) | ![Firefox](/browser-img/firefox.png) | ![Safari](/browser-img/safari.png) | ![Edge](/browser-img/edge.png) | ![Opera](/browser-img/opera.png) |
|----------|:----------------------------------:|:------------------------------------:|:----------------------------------:|:------------------------------:|:--------------------------------:|
| Versions | Latest                             | Latest                               | Latest                             | Latest                         | Latest                           |

For more information on browser support, you can refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width) and [Can I use](https://caniuse.com/?search=min-width) websites.

By using the `min-width` and `min-height` properties, you can ensure that elements in your web page layout maintain a minimum size, providing a better user experience and preventing content from becoming too small to read or interact with.

<AdsComponent />

:::info Additional Information
Compare this snippet from [CSS Width and Height](/docs/css/box-model/width-height) to learn how to use the CSS `width` and `height` properties to control the dimensions of elements in your web page layout.
:::

## Example for `min-width` and `min-height`

In the following example, the `min-width` and `min-height` properties are used to set the minimum dimensions of a `<div>` element to `200px` and `100px`, respectively:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Min-Width and Min-Height Example</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div>This is a div element with a minimum width of 200px and a minimum height of 100px.</div>
</body>
</html>
```

  </TabItem>
  <TabItem value="CSS" label="index.css">

```css
div {
  min-width: 200px;
  min-height: 100px;
  background-color: lightblue;
  padding: 10px;
}
```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", padding: "0"}}>
    <div style={{minWidth: "200px", minHeight: "100px", backgroundColor: "lightblue", padding: "10px"}}>
        This is a div element with a minimum width of 200px and a minimum height of 100px.
    </div>
</BrowserWindow>

In this example, the `<div>` element will not become smaller than `200px` in width and `100px` in height, even if its content is smaller. The `min-width` and `min-height` properties ensure that the element maintains a minimum size on the page, providing a consistent layout for your web page design.

By experimenting with different values for the `min-width` and `min-height` properties, you can control the minimum dimensions of elements in your web page layout and create visually appealing designs that adapt to various screen sizes and content lengths.

## Conclusion

In this guide, you learned how to use the CSS `min-width` and `min-height` properties to set the minimum dimensions of elements in your web page layout. By setting the `min-width` and `min-height` values, you can ensure that elements maintain a minimum size on the page, providing a better user experience and preventing content from becoming too small to read or interact with. Experiment with different values for the `min-width` and `min-height` properties to create visually appealing designs that adapt to various screen sizes and content lengths.