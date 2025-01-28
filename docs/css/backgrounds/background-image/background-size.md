---
id: background-size
title: Background Size
sidebar_label: Background Size
sidebar_position: 1
tags: [background, css background, background size, background-size property]
description: Learn how to set the size of the background image of an element in CSS using the background-size property.
keywords:
  [
    background size,
    css background size,
    background-size property,
    css background-size,
  ]
---

In CSS, the `background-size` property is used to specify the size of the background image of an element. This property allows you to control how the background image is displayed within the element's background area.

<AdsComponent />

## Syntax

The syntax for the `background-size` property is as follows:

```css title="index.css"
selector {
  background-size: value;
}
```

- `selector`: The element to which the background size is applied.
- `background-size`: The CSS property used to set the size of the background image of an element.
- `value`: Specifies the size of the background image. It can take one of the following values:
  - `auto`: The browser automatically scales the background image to its original size.
  - `cover`: The background image is scaled to cover the entire background area, maintaining its aspect ratio.
  - `contain`: The background image is scaled to fit within the background area while maintaining its aspect ratio.
  - `<length>`: Specifies the width and height of the background image using a length value (e.g., `200px`, `50%`).
  - `<percentage>`: Specifies the width and height of the background image as a percentage of the background area.
  - `initial`: Sets the background size to its default value.
  - `inherit`: Inherits the background size from the parent element.

The default value of the `background-size` property is `auto`.

## Example

In the following example, the `background-size` property is used to set the size of the background image of a `<div>` element to `cover`, which scales the background image to cover the entire background area while maintaining its aspect ratio:

```css title="index.css"
div {
  background-image: url("path/to/background-image.jpg");
  background-size: cover;
}
```

In the HTML code below, the CSS rule will apply the `cover` background size to the background image of the `<div>` element:

```html title="index.html"
<div>
  This is a div with a background image that covers the entire background area.
</div>
```

By using the `background-size` property, you can control how the background image is displayed within the element's background area, allowing you to create visually appealing designs on your web page.

<AdsComponent />

:::tip additional information

**Aspect Ratio**: The aspect ratio of an image is the ratio of its width to its height. When using the `cover` or `contain` values for the `background-size` property, the aspect ratio of the background image is maintained while scaling to fit the background area.

**Length Values**: Length values (e.g., `200px`, `50%`) can be used to specify the width and height of the background image. When using length values, the background image is scaled to the specified dimensions.

The `background-size` property is particularly useful when working with responsive web design, as it allows you to control how the background image adapts to different screen sizes and devices.
:::

## Example for background-size property

This example demonstrates the use of the `background-size` property to set the size of the background image of an element:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html showLineNumbers
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Background Size Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis
        sit amet nunc ultrices ultricies. Nullam nec nunc nec nunc ultrices
        ultricies. Nullam nec nunc nec nunc ultrices ultricies.
      </p>
    </div>
  </body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css showLineNumbers {3}
div {
  background-image: url("/assets/jpeg-image.jpg");
  background-size: cover;
  padding: 20px;
  color: white;
  text-align: center;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundImage: "url('/assets/jpeg-image.jpg')", color: "#fff", padding: "20px", minHeight: "200px", textAlign:"center", backgroundSize:"cover" }}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit
    amet nunc ultrices ultricies. Nullam nec nunc nec nunc ultrices ultricies.
    Nullam nec nunc nec nunc ultrices ultricies.
  </p>
</BrowserWindow>

In this example, the `background-size` property is set to `cover`, which scales the background image to cover the entire background area of the `<div>` element while maintaining its aspect ratio.

## Conclusion

The `background-size` property in CSS allows you to control the size of the background image of an element, enabling you to create visually appealing designs on your web page. By specifying the size of the background image using values like `cover`, `contain`, or length values, you can customize how the background image is displayed within the background area of an element.