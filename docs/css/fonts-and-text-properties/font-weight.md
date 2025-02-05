---
id: font-weight
title: "CSS Font Weight"
sidebar_label: "Font Weight"
sidebar_position: 3
keywords:
  - css font weight
  - font weight css
  - css bold text
  - css font weight property
  - css font weight values
description: Learn how to use the CSS `font-weight` property to control the thickness of text in your web page.
tags: 
    - css
    - font weight
    - css font weight
    - css bold text
    - css font weight property
    - css font weight values
---

In CSS, the `font-weight` property is used to specify the thickness or boldness of a font. It allows you to control the visual weight of text elements on your web page, making them appear lighter or bolder as needed. The `font-weight` property accepts a variety of values that range from `100` (thin) to `900` (bold), providing you with fine-grained control over the appearance of text.

<AdsComponent />

## Syntax

The `font-weight` property in CSS has the following syntax:

```css title="index.css"
selector {
  font-weight: value;
}
```

- `selector`: The CSS selector that targets the text element you want to apply the font weight to.
- `value`: A numeric or keyword value that represents the thickness of the font. The `font-weight` property accepts the following values:
  - `normal`: Sets the font weight to the normal level (equivalent to `400`).
  - `bold`: Sets the font weight to a bold level (equivalent to `700`).
  - `bolder`: Increases the font weight relative to the parent element.
  - `lighter`: Decreases the font weight relative to the parent element.
  - `100` to `900`: Numeric values that represent the font weight, with `100` being the thinnest and `900` being the boldest.

## Examples

### 1. Setting the Font Weight to Bold

You can use the `font-weight` property to make text elements appear bold by setting the value to `bold`. In the following example, we make a paragraph element bold:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bold Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="bold-text">This text is bold.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .bold-text {
    font-weight: bold;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <p style={{fontWeight: "bold"}}>This text is bold.</p>
</BrowserWindow>

:::info Informaton

The `font-weight` property can be applied to various text elements, such as headings, paragraphs, and spans, to create different visual styles.

:::

<AdsComponent />

### 2. Using Numeric Values for Font Weight

You can specify the font weight using numeric values ranging from `100` to `900`. In the following example, we set the font weight of a heading element to `700` (bold):

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bold Heading</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 class="bold-heading">This is a bold heading.</h1>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .bold-heading {
    font-weight: 700;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <p style={{fontWeight: "700"}}>This is a bold heading.</p>
</BrowserWindow>

### 3. Adjusting Font Weight Relative to Parent Element

You can use the `bolder` and `lighter` values to adjust the font weight relative to the parent element. In the following example, we make a paragraph element lighter than its parent:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lighter Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="parent-element">
      <p class="lighter-text">This text is lighter than the parent.</p>
    </div>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .parent-element {
    font-weight: bold;
  }

  .lighter-text {
    font-weight: lighter;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <div style={{fontWeight: "bold"}}>
        <p style={{fontWeight: "lighter"}}>This text is lighter than the parent.</p>
    </div>
</BrowserWindow>

:::info Note

The `bolder` and `lighter` values adjust the font weight relative to the parent element's font weight. If the parent element has a font weight of `normal`, the `bolder` value will make the text bold, while the `lighter` value will make it lighter.

:::

### 4. Using `font-weight` with Other Properties

You can combine the `font-weight` property with other text properties to create custom text styles. In the following example, we set the font weight, font size, and font family of a paragraph element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Text Style</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="custom-text">This is custom text.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .custom-text {
    font-weight: bold;
    font-size: 1.2em;
    font-family: Arial, sans-serif;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <p style={{fontWeight: "bold", fontSize: "1.2em", fontFamily: "Arial, sans-serif"}}>This is custom text.</p>
</BrowserWindow>

## Conclusion

The `font-weight` property in CSS allows you to control the thickness of text elements on your web page, making them appear lighter or bolder as needed. By using the `font-weight` property with different values, you can create visually appealing text styles that enhance the readability and aesthetics of your content. Experiment with the `font-weight` property to find the right balance of boldness for your text elements.