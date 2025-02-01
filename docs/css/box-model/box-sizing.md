---
id: box-sizing
title: CSS Box Sizing
sidebar_label: Box Sizing
sidebar_position: 2
keywords: [css box sizing, box sizing, css box model, css box model box sizing]
description: Learn how the CSS `box-sizing` property can be used to control the sizing behavior of elements in the CSS box model.
tags: [css, box sizing, css box model, css box model box sizing]
---

In CSS, the `box-sizing` property is used to control the sizing behavior of elements in the CSS box model. By default, the size of an element is calculated based on its content area, padding, and border. However, the `box-sizing` property allows you to change this behavior and include the padding and border in the total width and height of the element.

<AdsComponent />

## Syntax

The syntax for the `box-sizing` property is as follows:

```css title="index.css"
selector {
  box-sizing: value;
}
```

- `selector`: The element to which the box sizing is applied.
- `box-sizing`: The CSS property used to control the sizing behavior of the element.
- `value`: Specifies the sizing behavior of the element. It can take one of the following values:
  - `content-box`: The default value. The width and height of the element are calculated based on the content area only.
  - `border-box`: The width and height of the element include the padding and border, but not the margin.

The default value of the `box-sizing` property is `content-box`.

## Example

In the following example, the `box-sizing` property is used to set the sizing behavior of a `<div>` element to `border-box`, which includes the padding and border in the total width and height of the element:

```css title="index.css"
div {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}
```

In the HTML code below, the CSS rule will apply the `border-box` sizing behavior to the `<div>` element, resulting in a total width of `200px` including the padding and border:

```html title="index.html"
<div></div>
```

In this example, the total width of the `<div>` element will be `200px`, including the padding and border, due to the `border-box` value of the `box-sizing` property.

<AdsComponent />

:::note Try it yourself
Experiment with different values of the `box-sizing` property to see how the sizing behavior of elements changes based on the box model.

:::

## Example for Box Sizing

### Example 1: Using `content-box`

In this example, the `box-sizing` property is set to `content-box`, which calculates the width and height of the element based on the content area only:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="index.css">
    <title>Box Sizing Example</title>
</head>
<body>
  <div></div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="index.css">

```css title="index.css"
div {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{boxSizing: "content-box", width: "200px", padding: "20px", border: "1px solid black"}}></div>
</BrowserWindow>

In this example, the total width of the `<div>` element will be `242px`, calculated as `200px` for the width, `20px` for the left padding, `20px` for the right padding, and `1px` for the left and right borders, due to the `content-box` value of the `box-sizing` property.

<AdsComponent />

### Example 2: Using `border-box`

In this example, the `box-sizing` property is set to `border-box`, which includes the padding and border in the total width and height of the element:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="index.css">
    <title>Box Sizing Example</title>
</head>
<body>
  <div></div>
</body>
</html>
```

</TabItem>

<TabItem value="CSS" label="index.css">

```css title="index.css"
div {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 1px solid black;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{boxSizing: "border-box", width: "200px", padding: "20px", border: "1px solid black"}}></div>
</BrowserWindow>

In this example, the total width of the `<div>` element will be `200px`, including the padding and border, due to the `border-box` value of the `box-sizing` property.

By using the `box-sizing` property, you can control how the width and height of elements are calculated in the CSS box model, allowing you to create more predictable and consistent layouts in your web pages.

:::tip
The `box-sizing` property is particularly useful when working with responsive web design, as it helps maintain the integrity of the layout when resizing elements or adjusting padding and borders.
:::

## Conclusion

The `box-sizing` property in CSS allows you to control the sizing behavior of elements in the CSS box model. By setting the `box-sizing` property to `border-box`, you can include the padding and border in the total width and height of an element, making it easier to create consistent and predictable layouts in your web pages. Experiment with different values of the `box-sizing` property to see how they affect the sizing of elements and improve the responsiveness of your web designs.