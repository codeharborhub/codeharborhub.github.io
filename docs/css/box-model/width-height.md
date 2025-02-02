---
id: width-height
title: CSS Width and Height
sidebar_label: Width and Height
sidebar_position: 5
keywords:
  [
    css width,
    css height,
    width property,
    height property,
    css sizing,
    css dimensions,
    css box model,
    css box model width,
    css box model height,
  ]
description: Learn how to use the CSS width and height properties to control the dimensions of elements in your web page layout.
tags: [css, width, height, css width, css height, width property, height property]
---

In CSS, the `width` and `height` properties are used to control the dimensions of elements in your web page layout. The `width` property specifies the width of an element, while the `height` property specifies the height of an element. By adjusting the `width` and `height` values, you can control the size of elements and create visually appealing layouts.

<AdsComponent />

## Syntax

The syntax for the `width` and `height` properties is as follows:

```css title="index.css"
selector {
  width: value;
  height: value;
}
```

- `selector`: The element to which the width and height are applied.
- `width`: The CSS property used to set the width of an element.
- `height`: The CSS property used to set the height of an element.
- `value`: Specifies the width and height values for the element. It can take one of the following forms:
  - `<length>`: Specifies a fixed width or height value in pixels (e.g., `100px`).
  - `<percentage>`: Specifies the width or height value as a percentage of the width or height of the containing element.
  - `auto`: Adjusts the width or height automatically based on the content of the element.
  - `initial`: Sets the width or height to its default value.
  - `inherit`: Inherits the width or height value from the parent element.
  - `unset`: Resets the width or height to its inherited value if it inherits from its parent, or to its initial value if not.
  - `fit-content`: Specifies that the width or height should be the minimum size needed to fit the content.
  - `min-content`: Specifies that the width or height should be the minimum size needed to fit the content, but not smaller than the `min-width` or `min-height` value.
  - `max-content`: Specifies that the width or height should be the maximum size needed to fit the content, but not larger than the `max-width` or `max-height` value.

The default value of the `width` and `height` properties is `auto`, which means the width and height are automatically calculated based on the content of the element.

## Example

In the following example, the `width` and `height` properties are used to set the dimensions of a `<div>` element to `200px` and `100px`, respectively:

```css title="index.css"
div {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
```

In the HTML code below, the CSS rule will apply the specified width and height values to the `<div>` element, resulting in a width of `200px` and a height of `100px`:

```html title="index.html"
<div></div>
```

In this example, the `<div>` element will have a width of `200px` and a height of `100px`, as specified by the `width` and `height` properties.

<AdsComponent />

:::note Try it yourself
Experiment with different values of the `width` and `height` properties to see how the dimensions of elements change based on the box model.
:::

## Example for Width and Height

### Example 1: Setting Fixed Width and Height

In this example, the `width` and `height` properties are set to fixed values of `200px` and `100px`, respectively:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fixed Width and Height</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div></div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css
div {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{width: "200px", height: "100px", backgroundColor: "lightblue"}}>
    </div>
</BrowserWindow>

In this example, the `<div>` element will have a fixed width of `200px` and a fixed height of `100px`, resulting in a rectangular box with the specified dimensions.

<AdsComponent />

### Example 2: Using Percentage Values

In this example, the `width` and `height` properties are set to percentage values of `50%` and `50%`, respectively:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Percentage Width and Height</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div></div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css
div {
  width: 50%;
  height: 50%;
  background-color: lightblue;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{width: "50%", height: "50%", backgroundColor: "lightblue"}}>
    </div>
</BrowserWindow>

In this example, the `<div>` element will have a width and height equal to `50%` of the width and height of the containing element, resulting in a square box that occupies half of the available space.

<AdsComponent />

### Example 3: Using `auto` Value

In this example, the `width` and `height` properties are set to `auto`, which adjusts the dimensions of the element automatically based on its content:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Auto Width and Height</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>This is a div element with auto width and height.</p>
  </div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css
div {
  width: auto;
  height: auto;
  background-color: lightblue;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{backgroundColor: "lightblue"}}>
        <p>This is a div element with auto width and height.</p>
    </div>
</BrowserWindow>

In this example, the `<div>` element will automatically adjust its width and height based on the content inside it, resulting in a box that fits the content without any fixed dimensions.

<AdsComponent />

### Example 4: Using `min-content` and `max-content`

In this example, the `width` property is set to `min-content` and the `height` property is set to `max-content`, which adjust the dimensions of the element based on the minimum and maximum size needed to fit the content:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Min and Max Content</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>This is a div element with min and max content width and height.</p>
  </div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css
div {
  width: min-content;
  height: max-content;
  background-color: lightblue;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{backgroundColor: "lightblue", width: "min-content", height: "max-content"}}>
        <p>This is a div element with min and max content width and height.</p>
    </div>
</BrowserWindow>

In this example, the `<div>` element will adjust its width to the minimum size needed to fit the content and its height to the maximum size needed to fit the content, resulting in a box that wraps around the content without any extra space.

<AdsComponent />

By following these examples, you can use the `width` and `height` properties to control the dimensions of elements in your web page layout. Adjusting the width and height values allows you to create visually appealing designs and responsive layouts that adapt to different screen sizes.

## Conclusion

In this guide, you learned how to use the CSS `width` and `height` properties to control the dimensions of elements in your web page layout. By setting the `width` and `height` values, you can adjust the size of elements and create visually appealing designs that enhance the user experience. Experiment with different values and combinations of the `width` and `height` properties to create responsive layouts that adapt to various screen sizes and devices.