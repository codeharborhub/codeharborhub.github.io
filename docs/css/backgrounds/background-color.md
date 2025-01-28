---
id: background-color
title: Background Color
sidebar_label: Background Color
sidebar_position: 1
tags: [background, color, css background, background color]
description: Learn how to set the background color of an element in CSS using the background-color property.
keywords:
  [
    background color,
    css background color,
    background-color property,
    css background-color,
  ]
---

In CSS, the `background-color` property is used to set the background color of an element. The `background-color` property accepts a color value, which can be specified using various color formats such as hexadecimal, RGB, RGBA, HSL, and HSLA.

<AdsComponent />

## Syntax

The syntax for the `background-color` property is as follows:

```css title="index.css"
selector {
  background-color: color;
}
```

- `selector`: The element to which the background color is applied.
- `background-color`: The CSS property used to set the background color of an element.
- `color`: The color value used to specify the background color.
- The `color` value can be specified using various color formats, such as hexadecimal, RGB, RGBA, HSL, and HSLA.
- The `color` value can also be specified using color keywords like `red`, `blue`, `green`, etc.

## Example

In the following example, the `background-color` property is used to set the background color of a `<div>` element to a light blue color using the hexadecimal color format:

```css title="index.css"
div {
  background-color: #ADD8E6; /* Light blue color */
}
```

In the HTML code below, the CSS rule will apply the light blue color to the background of the `<div>` element:

```html title="index.html"
<div>This is a div with a light blue background.</div>
```

By using the `background-color` property, you can customize the background color of elements on your web page to create visually appealing designs.

<AdsComponent />

:::info Additional Information

- The `background-color` property sets the background color of an element, covering the entire content area of the element.
- The `background-color` property can be combined with other background properties like `background-image`, `background-repeat`, `background-position`, etc., to create more complex background effects.
- When setting the background color of an element, ensure that there is enough contrast between the background color and the text color to ensure readability and accessibility.

:::

## Example for Background Color

In this example, we will set the background color of a `<div>` element using the `background-color` property with an RGB color value:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html showLineNumbers
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Color Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>This is a div with a light green background.</div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css showLineNumbers {2}
div {
  background-color: rgb(144, 238, 144); /* Light green color */
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", padding: "0", minHeight: "200px" }}>
<>
    <div style={{backgroundColor: "rgb(144, 238, 144)"}}>This is a div with a light green background.</div>
</>
</BrowserWindow>

In this example, the `background-color` property is used to set the background color of the `<div>` element to a light green color using the RGB color format.

By specifying the background color using the `background-color` property, you can enhance the visual appearance of your web pages and create engaging user experiences.

## Conclusion

The `background-color` property in CSS allows you to set the background color of an element using various color formats. By customizing the background color of elements on your web page, you can create visually appealing designs and improve the overall user experience.