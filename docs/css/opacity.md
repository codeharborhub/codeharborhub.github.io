---
id: opacity
title: "CSS Opacity"
sidebar_label: "Opacity"
sidebar_position: 8
keywords:
  - css opacity
  - opacity css
  - css transparency
  - css alpha
  - css rgba
description: Learn how to use CSS opacity to create transparent elements and text on your web page.
tags: 
    - css
    - opacity
    - css opacity
    - css transparency
    - css alpha
    - css rgba
---

In CSS, the `opacity` property is used to set the transparency of an element. It can take a value from `0.0` (fully transparent) to `1.0` (fully opaque). The `opacity` property affects the entire element, including its text and any child elements. By adjusting the opacity of an element, you can create visually appealing effects such as transparent overlays, faded images, and subtle text highlights.

<AdsComponent />

## Syntax

The `opacity` property in CSS has the following syntax:

```css title="index.css"
selector {
  opacity: value;
}
```

- `selector`: The CSS selector that targets the element you want to apply the opacity to.
- `value`: A number between `0.0` and `1.0` that represents the level of transparency. A value of `0.0` makes the element fully transparent, while a value of `1.0` makes it fully opaque.
- The `opacity` property is inherited by child elements, meaning that any child elements of the transparent element will also have the same level of transparency.
- The `opacity` property can be applied to any HTML element, including text, images, backgrounds, and containers.
- The `opacity` property does not affect the position or layout of the element. It only changes the visual appearance by making the element more or less transparent.

## Examples

### 1. Making an Element Transparent

You can use the `opacity` property to make an element transparent by setting its value to less than `1.0`. In the following example, we make a `div` element 50% transparent:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transparent Element</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="transparent-element">
    <p>This is a transparent element.</p>
    </div>
  </body>
  </html>
  ```

  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .transparent-element {
    opacity: 0.5;
    background-color: lightblue;
    padding: 20px;
  }
  ```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <div style={{opacity: "0.5", backgroundColor: "lightblue", padding: "20px"}}>This is a transparent element.</div>
</BrowserWindow>

:::note Try it yourself

You can adjust the `opacity` value to make the element more or less transparent. Experiment with different opacity levels to see how it affects the visual appearance of the element.

:::

<AdsComponent />

### 2. Fading an Image on Hover

You can create a fading effect on an image by changing its opacity when the user hovers over it. In the following example, we use the `:hover` pseudo-class to fade an image to 50% opacity when the mouse cursor is over it:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fading Image</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="image-container">
      <img src="image.jpg" alt="Fading Image" class="fading-image">
    </div>
  </body>
  </html>
  ```

  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .image-container {
    position: relative;
  }

  .fading-image {
    opacity: 1.0;
    transition: opacity 0.5s;
  }

  .fading-image:hover {
    opacity: 0.5;
  }
  ```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <div style={{position: "relative"}}>
        <img src="/assets/jpeg-image.jpg" alt="Fading Image" style={{opacity: "1.0", transition: "opacity 0.5s"}} onMouseOver={(e) => e.target.style.opacity = "0.5"} onMouseOut={(e) => e.target.style.opacity = "1.0"} />
    </div>
</BrowserWindow>

### 3. Highlighting Text with Opacity

You can use the `opacity` property to highlight text by making it partially transparent. In the following example, we apply a 70% opacity to a paragraph of text to create a subtle highlight effect:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Highlighted Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="highlighted-text">This is highlighted text.</p>
  </body>
  </html>
  ```

  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .highlighted-text {
    opacity: 0.7;
    background-color: yellow;
    padding: 10px;
  }
  ```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{opacity: "0.7", backgroundColor: "yellow", padding: "10px"}}>This is highlighted text.</p>
</BrowserWindow>

By using the `opacity` property in CSS, you can create various visual effects on your web page, such as transparent elements, faded images, and highlighted text. Experiment with different opacity values to achieve the desired level of transparency and enhance the visual appeal of your website.

<AdsComponent />

:::note Try it yourself

Compare this snippet from [CSS Box Model](/docs/category/box-model) to learn how to use the CSS box model to control the layout and spacing of elements on your web page.

:::

## Conclusion

In this guide, you learned how to use the CSS `opacity` property to create transparent elements and text on your web page. By adjusting the opacity of an element, you can control its level of transparency and create visually appealing effects. The `opacity` property is a powerful tool for enhancing the visual design of your website and adding subtle highlights to text and images.