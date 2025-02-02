---
id: padding
title: CSS Padding
sidebar_label: Padding
sidebar_position: 4
keywords:
  [
    css padding,
    padding property,
    css padding property,
    css spacing,
    padding shorthand,
    padding values,
  ]
description: Learn how to use the CSS padding property to create space inside elements in your web page layout.
tags: [css, padding, css padding, padding property, css padding property]
---

In CSS, the `padding` property is used to create space inside elements in your web page layout. Padding is the transparent space inside the border of an element that separates the content from the border. By adjusting the padding values, you can control the spacing between the content and the border of an element to create visually appealing layouts.

<AdsComponent />

## Syntax

The syntax for the `padding` property is as follows:

```css title="index.css"
selector {
  padding: value;
}
```

- `selector`: The element to which the padding is applied.
- `padding`: The CSS property used to set the padding inside an element.
- `value`: Specifies the padding values for the top, right, bottom, and left sides of the element. It can take one of the following forms:
  - `<length>`: Specifies a fixed padding value in pixels (e.g., `10px`).
  - `<percentage>`: Specifies a padding value as a percentage of the width of the containing element.
  - `initial`: Sets the padding to its default value.
  - `inherit`: Inherits the padding value from the parent element.
  - `unset`: Resets the padding to its inherited value if it inherits from its parent, or to its initial value if not.

The `padding` property can be set using one of the following shorthand values:

- `padding: value;`: Sets the same padding value for all four sides.
- `padding: vertical horizontal;`: Sets the vertical padding (top and bottom) and horizontal padding (left and right) to different values.
- `padding: top right bottom left;`: Sets individual padding values for the top, right, bottom, and left sides.
- `padding: initial;`: Sets the padding to its default value.
- `padding: inherit;`: Inherits the padding value from the parent element.
- `padding: unset;`: Resets the padding to its inherited value if it inherits from its parent, or to its initial value if not.
- `padding-top: value;`: Sets the padding value for the top side.
- `padding-right: value;`: Sets the padding value for the right side.
- `padding-bottom: value;`: Sets the padding value for the bottom side.
- `padding-left: value;`: Sets the padding value for the left side.

The default value of the `padding` property is `0`, which means no padding is applied to the element.

## Example

In the following example, the `padding` property is used to set the padding inside a `<div>` element to `20px` on all sides:

```css title="index.css"
div {
  padding: 20px;
}
```

In the HTML code below, the CSS rule will apply the `20px` padding to the `<div>` element:

```html title="index.html"
<div>
  <p>
    This is a div with 20px padding inside.
  </p>
</div>
```

By adjusting the padding values, you can create space inside elements and control the spacing between the content and the border of an element in your web page layout.

<AdsComponent />

## Example for Padding

In this example, we'll explore different ways to set padding values using the `padding` property.

### Example 1: Using Fixed Padding Values

In this example, the `padding` property is used to set fixed padding values for all four sides of a `<div>` element:

```css title="index.css"
div {
  padding: 10px;
}
```

In the HTML code below, the CSS rule will apply the `10px` padding to the `<div>` element:

```html title="index.html"
<div>
  <p>
    This is a div with 10px padding on all sides.
  </p>
</div>
```

### Example 2: Using Different Padding Values

In this example, the `padding` property is used to set different padding values for the top, right, bottom, and left sides of a `<div>` element:

```css title="index.css"
div {
  padding: 10px 20px 15px 25px;
}
```

In the HTML code below, the CSS rule will apply the different padding values to the `<div>` element:

```html title="index.html"
<div>
  <p>
    This is a div with different padding values on each side.
  </p>
</div>
```

### Example 3: Using Percentage Padding Values

In this example, the `padding` property is used to set percentage-based padding values for all four sides of a `<div>` element:

```css title="index.css"
div {
  padding: 5% 10% 7% 15%;
}
```

In the HTML code below, the CSS rule will apply the percentage-based padding values to the `<div>` element:

```html title="index.html"
<div>
  <p>
    This is a div with percentage-based padding values on all sides.
  </p>
</div>
```

By using different padding values, you can create visually appealing layouts with varying amounts of space inside elements in your web page design.

<AdsComponent />

:::note Try it yourself
Experiment with different padding values and combinations to see how the spacing inside elements changes based on the padding values applied.

:::

## Conclusion

The `padding` property in CSS allows you to create space inside elements by specifying padding values for the top, right, bottom, and left sides of an element. By adjusting the padding values, you can control the spacing between the content and the border of an element, creating visually appealing layouts in your web page design. Experiment with different padding values to achieve the desired spacing and layout for your web page elements.