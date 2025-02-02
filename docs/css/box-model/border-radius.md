---
id: border-radius
title: CSS Border Radius
sidebar_label: Border Radius
sidebar_position: 10
keywords:
  [
    css border radius,
    border radius property,
    css border radius property,
    css rounded corners,
    css border radius values,
    css border radius shorthand,
  ]
description: Learn how to use the CSS border-radius property to create rounded corners for elements in your web page layout.
tags: [css, border radius, css border radius, border radius property, css border radius property]
---

In CSS, the `border-radius` property is used to create rounded corners for elements in your web page layout. Rounded corners soften the appearance of elements and can make your web page design more visually appealing. By adjusting the `border-radius` values, you can control the curvature of the corners and create different styles for your elements.

<AdsComponent />

## Syntax

The syntax for the `border-radius` property is as follows:

```css title="index.css"
selector {
  border-radius: value;
}
```

- `selector`: The element to which the border radius is applied.
- `border-radius`: The CSS property used to set the curvature of the corners of an element.
- `value`: Specifies the border radius values for the top-left, top-right, bottom-right, and bottom-left corners of the element. It can take one of the following forms:
  - `<length>`: Specifies a fixed radius value in pixels (e.g., `10px`).
  - `<percentage>`: Specifies the radius value as a percentage of the width or height of the element.
  - `initial`: Sets the border radius to its default value.
  - `inherit`: Inherits the border radius value from the parent element.
  - `unset`: Resets the border radius to its inherited value if it inherits from its parent, or to its initial value if not.
  - `none`: Specifies that no border radius is applied to the element.
  - `initial`: Sets the border radius to its default value.
  - `inherit`: Inherits the border radius value from the parent element.
  - `unset`: Resets the border radius to its inherited value if it inherits from its parent, or to its initial value if not.
- `<length>` or `<percentage>` values can be specified for each corner individually in the following order:
  - `border-radius: top-left top-right bottom-right bottom-left;`
  - `border-radius: top-left/top-right bottom-right/bottom-left;`
  - `border-radius: top-left/top-right/bottom-right/bottom-left;`
  - `border-radius: top-left top-right/bottom-right bottom-left;`

The default value of the `border-radius` property is `0`, which means the corners are square and have no curvature.

## Example

In the following example, the `border-radius` property is used to create a `<div>` element with rounded corners:

```css title="index.css"
div {
  border-radius: 10px;
}
```

In this example, the `border-radius` property sets the curvature of all four corners of the `<div>` element to `10px`, creating a rounded appearance for the element. You can adjust the `border-radius` value to create different levels of curvature for the corners of your elements.

```html title="index.html"
<div></div>
```

In the HTML code above, the CSS rule will apply the specified `border-radius` value to the `<div>` element, resulting in rounded corners for the element.

By using the `border-radius` property, you can create visually appealing designs with rounded corners for elements in your web page layout. Rounded corners can help soften the appearance of elements and add a touch of elegance to your web page design.

<AdsComponent />

:::note Try it yourself
Experiment with different values of the `border-radius` property to see how the curvature of the corners changes based on the specified radius values.
:::

## Example for `border-radius` Property

In the following example, the `border-radius` property is used to create a `<div>` element with rounded corners:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rounded Corners</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div>
    <p>This is a div with rounded corners.</p>
  </div>    
</body>
```

  </TabItem>
  <TabItem value="CSS" label="index.css">

```css
div {
  border-radius: 10px;
  background-color: lightblue;
  padding: 20px;
}
```

    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", padding: "0" }} minHeight="200px">
    <div style={{borderRadius: "10px", backgroundColor: "lightblue", padding: "20px"}}>
        <p>
            This is a div with rounded corners.
        </p>
    </div>
</BrowserWindow>

In this example, the `border-radius` property is used to create rounded corners for the `<div>` element, giving it a softer appearance. The `border-radius` value of `10px` sets the curvature of the corners, creating a rounded effect for the element.

By adjusting the `border-radius` value, you can control the level of curvature for the corners of elements in your web page layout. This allows you to customize the appearance of elements and create visually appealing designs with rounded corners.

:::info Try it yourself

You can experiment with different `border-radius` values to create various styles of rounded corners for elements in your web page layout. Try changing the `border-radius` value in the example above to see how it affects the curvature of the corners of the `<div>` element.
:::

By following this example, you can use the `border-radius` property to create rounded corners for elements in your web page layout. Rounded corners can enhance the visual appeal of your design and add a touch of elegance to your web page elements.

## Conclusion

The `border-radius` property in CSS allows you to create rounded corners for elements in your web page layout. By setting the curvature of the corners using the `border-radius` property, you can soften the appearance of elements and create visually appealing designs with rounded corners. Experiment with different `border-radius` values to customize the curvature of the corners and create unique styles for your web page elements.