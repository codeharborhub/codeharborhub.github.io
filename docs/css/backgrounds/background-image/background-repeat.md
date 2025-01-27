---
id: background-repeat
title: Background Repeat
sidebar_label: Background Repeat
sidebar_position: 2
tags: [background, css background, background repeat, background-repeat property]
description: Learn how to control the repetition of a background image in CSS using the background-repeat property.
keywords:
  [
    background repeat,
    css background repeat,
    background-repeat property,
    css background-repeat,
  ]
---

In CSS, the `background-repeat` property is used to specify how a background image is repeated within the background area of an element. This property allows you to control the repetition of the background image in both the horizontal and vertical directions.

<AdsComponent />

## Syntax

The syntax for the `background-repeat` property is as follows:

```css title="index.css"
selector {
  background-repeat: value;
}
```

- `selector`: The element to which the background repeat is applied.
- `background-repeat`: The CSS property used to control the repetition of the background image.
- `value`: Specifies how the background image should be repeated. It can take one of the following values:
  - `repeat`: The background image is repeated both horizontally and vertically to fill the background area.
  - `repeat-x`: The background image is repeated horizontally to fill the background area.
  - `repeat-y`: The background image is repeated vertically to fill the background area.
  - `no-repeat`: The background image is displayed only once without any repetition.
  - `initial`: Sets the background repeat to its default value.
  - `inherit`: Inherits the background repeat value from the parent element.

The default value of the `background-repeat` property is `repeat`.

## Example

In the following example, the `background-repeat` property is used to set the repetition of the background image of a `<div>` element to `repeat`, which repeats the background image both horizontally and vertically to fill the background area:

```css title="index.css"
div {
  background-image: url("path/to/background-image.jpg");
  background-repeat: repeat;
}
```

In the HTML code below, the CSS rule will apply the `repeat` background repeat to the background image of the `<div>` element:

```html title="index.html"
<div>
  <p>
    This is a div with a background image that repeats both horizontally and vertically to fill the background area.
  </p>
</div>
```

In this example, the background image will be repeated in both the horizontal and vertical directions to fill the background area of the `<div>` element. You can adjust the `background-repeat` property to control how the background image is repeated based on your design requirements. 

<AdsComponent />

:::note Try it yourself

Experiment with different values of the `background-repeat` property to see how the background image repetition changes. You can use values like `repeat-x`, `repeat-y`, and `no-repeat` to achieve different visual effects.

:::

## Example: Using `background-repeat` with `background-size`

You can combine the `background-repeat` property with the `background-size` property to create more complex background image effects. For example, you can repeat a background image in one direction while scaling it to cover the background area. Here's an example:

This example demonstrates the use of the `background-size` property to set the size of the background image of an element:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html showLineNumbers
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Repeat Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>
      This is a div with a background image that repeats horizontally and scales to cover the background area.
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
  background-repeat: repeat-x;
  background-size: cover;
}

p {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundImage: "url('/assets/jpeg-image.jpg')", padding: "20px", minHeight: "200px", textAlign:"center", backgroundRepeat:"repeat-x", backgroundSize:"cover" }}>
  <p style={{ color: "white", fontSize: "1.5rem" }}>
    This is a div with a background image that repeats horizontally and scales to cover the background area.
  </p>
</BrowserWindow>

In this example, the `background-repeat` property is set to `repeat-x`, which repeats the background image horizontally to fill the background area of the `<div>` element. The `background-size` property is set to `cover`, which scales the background image to cover the entire background area while maintaining its aspect ratio.

By combining the `background-repeat` and `background-size` properties, you can create visually appealing background effects for your web pages.

## Conclusion

The `background-repeat` property in CSS allows you to control how a background image is repeated within the background area of an element. By setting the `background-repeat` property to different values like `repeat`, `repeat-x`, `repeat-y`, or `no-repeat`, you can achieve various background image repetition effects based on your design requirements. Experiment with different values of the `background-repeat` property to create visually interesting background patterns for your web pages.