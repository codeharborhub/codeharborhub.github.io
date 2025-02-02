---
id: border
title: CSS Border
sidebar_label: Border
sidebar_position: 9
keywords:
  [
    css border,
    border property,
    css border property,
    css border styles,
    css border width,
    css border color,
    css border shorthand,
    border values,
  ]
description: Learn how to use the CSS border property to create borders around elements in your web page layout.
tags: [css, border, css border, border property, css border property]
---

In CSS, the `border` property is used to create borders around elements in your web page layout. Borders are the lines that surround the content of an element and separate it from other elements on the page. By adjusting the border properties, you can control the appearance, style, width, and color of the borders to create visually appealing layouts.

<AdsComponent />

## Syntax

The syntax for the `border` property is as follows:

```css title="index.css"
selector {
  border: value;
}
```

- `selector`: The element to which the border is applied.
- `border`: The CSS property used to set the border around an element.
- `value`: Specifies the border values for the style, width, and color of the border. It can take one of the following forms:
  - `<border-style>`: Specifies the style of the border (e.g., `solid`, `dashed`, `dotted`, `double`, etc.).
  - `<border-width>`: Specifies the width of the border in pixels, em, rem, etc.
  - `<border-color>`: Specifies the color of the border using a color name, hex code, RGB value, etc.
  - `initial`: Sets the border to its default value.
  - `inherit`: Inherits the border value from the parent element.
  - `unset`: Resets the border to its inherited value if it inherits from its parent, or to its initial value if not.

The `border` property can be set using one of the following shorthand values:

- `border: value;`: Sets the same border style, width, and color for all four sides.
- `border: width style color;`: Sets the border width, style, and color for all four sides.
- `border: initial;`: Sets the border to its default value.
- `border: inherit;`: Inherits the border value from the parent element.
- `border: unset;`: Resets the border to its inherited value if it inherits from its parent, or to its initial value if not.
- `border-top: value;`: Sets the border style, width, and color for the top side.
- `border-right: value;`: Sets the border style, width, and color for the right side.
- `border-bottom: value;`: Sets the border style, width, and color for the bottom side.
- `border-left: value;`: Sets the border style, width, and color for the left side.
- `border-width: value;`: Sets the border width for all four sides.
- `border-style: value;`: Sets the border style for all four sides.
- `border-color: value;`: Sets the border color for all four sides.

The default value of the `border` property is `none`, which means no border is applied to the element.

## Example

In the following example, the `border` property is used to set a solid border around a `<div>` element with a width of `2px` and a color of `red`:

```css title="index.css"
div {
  border: 2px solid red;
}
```

In this example, the border around the `<div>` element will have a solid style, a width of `2px`, and a color of `red`. You can customize the border style, width, and color to achieve the desired visual effect for your web page layout.

<AdsComponent />

:::note Note
The `border` property can be combined with other border-related properties such as `border-radius` to create more complex border effects like rounded corners.
:::

## Example for border property

### Example 1: Setting Border Style, Width, and Color

In this example, we set the border style to `dashed`, the width to `3px`, and the color to `blue` for a `<div>` element:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Border Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>This is a div element with a dashed border.</p>
  </div>
</body>
</html>
```

  </TabItem>
  <TabItem value="CSS" label="styles.css">

```css title="styles.css"
div {
  border: 3px dashed blue;
}
```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000" }}>
    <div style={{border: "3px dashed blue"}}>
        <p>
            This is a div element with a dashed border.
        </p>
    </div>
</BrowserWindow>

By following this example, you can use the `border` property to create borders around elements in your web page layout. Adjusting the border style, width, and color allows you to customize the appearance of the borders to match your design requirements.

:::info try it yourself
You can experiment with different border styles, widths, and colors to create unique border effects for your web page elements. Try changing the border properties in the example above to see how they affect the appearance of the border around the `<div>` element.
:::

## Conclusion

The `border` property in CSS is a powerful tool for creating borders around elements in your web page layout. By setting the border style, width, and color, you can control the appearance of the borders and enhance the visual appeal of your web pages. Experiment with different border styles and colors to create unique designs that make your content stand out.