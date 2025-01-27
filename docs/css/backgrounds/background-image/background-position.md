---
id: background-position
title: Background Position
sidebar_label: Background Position
sidebar_position: 3
tags: [background, css background, background position, background-position property]
description: Learn how to set the position of the background image of an element in CSS using the background-position property.
keywords:
  [
    background position,
    css background position,
    background-position property,
    css background-position,
  ]
---

In CSS, the `background-position` property is used to specify the position of the background image of an element. This property allows you to control the placement of the background image within the element's background area.

<AdsComponent />

## Syntax

The syntax for the `background-position` property is as follows:

```css title="index.css"
selector {
  background-position: value;
}
```

- `selector`: The element to which the background position is applied.
- `background-position`: The CSS property used to set the position of the background image of an element.
- `value`: Specifies the position of the background image. It can take one of the following values:
  - `top`: Aligns the top edge of the background image with the top edge of the background area.
  - `bottom`: Aligns the bottom edge of the background image with the bottom edge of the background area.
  - `left`: Aligns the left edge of the background image with the left edge of the background area.
  - `right`: Aligns the right edge of the background image with the right edge of the background area.
  - `center`: Aligns the background image in the center of the background area.
  - `<percentage>`: Specifies the position of the background image as a percentage of the background area.
  - `<length>`: Specifies the position of the background image using a length value (e.g., `10px`, `20%`).
  - `initial`: Sets the background position to its default value.
  - `inherit`: Inherits the background position from the parent element.

The default value of the `background-position` property is `0% 0%`, which aligns the top left corner of the background image with the top left corner of the background area.

## Example

In the following example, the `background-position` property is used to set the position of the background image of a `<div>` element to `center`, which aligns the background image in the center of the background area:

```css title="index.css"
div {
  background-image: url("path/to/background-image.jpg");
  background-position: center;
}
```

In the HTML code below, the CSS rule will apply the `center` background position to the background image of the `<div>` element:

```html title="index.html"
<div>
  <p>
    This is a div with a background image that is centered within the background area.
   </p>
</div>
```

By using the `background-position` property, you can control the placement of the background image within the element's background area, allowing you to create visually appealing designs on your web page.

<AdsComponent />

:::note Try it yourself

You can experiment with different values of the `background-position` property to position the background image in various ways within the background area of an element. Try changing the `background-position` value to `top`, `bottom`, `left`, `right`, or a specific length or percentage to see how the background image placement changes.

:::


## Example for Background Position

In this example, we will demonstrate how to use the `background-position` property to position the background image of a `<div>` element to the top right corner of the background area.

### Step 1: Create an HTML File

Create an HTML file named `index.html` and add the following code:

```html title="index.html" showLineNumbers
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Position Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <p>
      This is a div with a background image positioned at the top right corner.
    </p>
  </div>
</body>
</html>
```

### Step 2: Create a CSS File

Create a CSS file named `styles.css` and add the following code to set the background image and position:

```css title="styles.css" showLineNumbers {3}
div {
  background-image: url("/assets/jpeg-image.jpg");
  background-position: top right;
  height: 200px;
  width: 400px;
  border: 1px solid #333;
  background-size: cover; color: #fff;
}

p {
  padding: 10px;
}
```

### Step 3: Add a Background Image

Place an image file named `jpeg-image.jpg` in the `assets` directory of your project.

### Step 4: View the Output in a Browser

Open the `index.html` file in a web browser to see the output. You will see a `<div>` element with a background image positioned at the top right corner of the background area.

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ minHeight: "200px"}}>
  <div style={{ backgroundImage: "url('/assets/jpeg-image.jpg')", backgroundPosition: "top right", height: "200px", width: "400px", border: "1px solid #333", backgroundSize: "cover", color:"#fff" }}>
    <p style={{ padding: "10px" }}>
      This is a div with a background image positioned at the top right corner.
    </p>
  </div>    
</BrowserWindow>

By following these steps, you can use the `background-position` property to position the background image of an element at the top right corner of the background area.

## Conclusion

The `background-position` property in CSS allows you to control the placement of the background image within the background area of an element. By specifying the position using keywords, percentages, or length values, you can create visually appealing designs by positioning the background image as desired.