---
id: hsl
title: HSL Color Values
sidebar_label: HSL Color Values
tags: [color, hsl, css color, hsl color]
description: HSL color values are used to specify colors in CSS using the hue, saturation, and lightness color channels.
keywords:
  [
    hsl color values,
    css hsl color values,
    css color values,
    hsl color,
  ]
sidebar_position: 5
---

import './css/style.css';

In CSS, HSL color values are used to specify colors using the hue, saturation, and lightness color channels. HSL color values are represented by the `hsl()` function, which takes three arguments: the hue, saturation, and lightness color channels. The hue channel is represented by an angle value between 0 and 360 degrees, where 0 represents red, 120 represents green, and 240 represents blue. The saturation and lightness channels are represented by percentage values between 0% and 100%, where 0% represents no color saturation or lightness and 100% represents full color saturation or lightness.

<AdsComponent />

## Syntax

The syntax for HSL color values is as follows:

```css title="index.css"
selector {
  color: hsl(hue, saturation, lightness);
}
```

- `selector`: The element to which the HSL color value is applied.
- `color`: The CSS property used to specify the color of an element.
- `hsl()`: The function used to specify HSL color values.
- `hue`: The color hue (0 to 360 degrees).
- `saturation`: The color saturation (0% to 100%).
- `lightness`: The color lightness (0% to 100%).

## Example

In the following example, the `hsl()` function is used to specify the color of a `<div>` element using HSL color values:

```css title="index.css"
div {
  color: hsl(120, 100%, 50%); /* Green color with 50% lightness */
}
```

In the HTML code below, the CSS rule will apply the green color with 50% lightness to the `<div>` element:

```html title="index.html"
<div>This is a green div.</div>
```

<AdsComponent />

:::info Additional Information

- HSL color values are represented by the `hsl()` function in CSS.
- HSL color values are specified using the hue, saturation, and lightness color channels.
- The hue channel is represented by an angle value between 0 and 360 degrees.
- The saturation and lightness channels are represented by percentage values between 0% and 100%.
- HSL color values provide a more intuitive way to specify colors based on their hue, saturation, and lightness.
- HSL color values are often used in web design for their ease of use and readability.
- HSL color values can be used in combination with other color functions and formats in CSS.
- HSL color values can be used to create a wide range of colors by adjusting the hue, saturation, and lightness values.

:::

## Example with HSL Color

In the following example, we will create a color palette using HSL color values to generate a range of colors with varying hues, saturations, and lightness levels:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HSL Color Palette</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="color-box" style="background-color: hsl(0, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(30, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(60, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(90, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(120, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(150, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(180, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(210, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(240, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(270, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(300, 100%, 50%)"></div>
  <div class="color-box" style="background-color: hsl(330, 100%, 50%)"></div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css title="styles.css"
.color-box {
  width: 100px;
  height: 100px;
  display: inline-block;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
    <div>
        <div className="color-box" style={{backgroundColor: "hsl(0, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(30, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(60, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(90, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(120, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(150, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(180, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(210, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(240, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(270, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(300, 100%, 50%)"}}></div>
        <div className="color-box" style={{backgroundColor: "hsl(330, 100%, 50%)"}}></div>
    </div>
</BrowserWindow>

In the HTML code above, we have created a color palette using HSL color values to generate a range of colors with varying hues. Each `<div>` element represents a color box with a different hue value ranging from 0 to 330 degrees. The saturation and lightness values are set to 100% and 50%, respectively, to maintain consistent saturation and lightness levels across the color palette.


## Conclusion

HSL color values provide a flexible and intuitive way to specify colors in CSS based on their hue, saturation, and lightness. By using HSL color values, you can create visually appealing designs with a wide range of colors and easily adjust the hue, saturation, and lightness levels to achieve the desired color effects. HSL color values are widely supported by all modern web browsers and are commonly used in web design for their ease of use and readability. By mastering HSL color values, you can enhance your web design skills and create stunning color palettes for your web projects.
