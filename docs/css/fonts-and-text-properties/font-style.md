---
id: font-style
title: "CSS Font Style"
sidebar_label: "Font Style"
sidebar_position: 7
keywords:
  - css font style
  - css font style property
  - css font style values
  - css font style examples
  - css text properties
description: Learn how to use the CSS `font-style` property to style the italic or oblique text on your web page.
tags: 
    - css
    - font style
    - css font style
    - css font style property
    - css font style values
    - css text properties
---

In CSS, the `font-style` property is used to specify the style of a font, such as italic or oblique. It allows you to apply different text styles to your web page, making text elements appear italicized or slanted as needed. The `font-style` property accepts several values that control the appearance of text, providing you with flexibility in styling your content.

<AdsComponent />

## Syntax

The `font-style` property in CSS has the following syntax:

```css title="index.css"
selector {
  font-style: normal | italic | oblique;
}
```

The `font-style` property can be applied to any text element on your web page using the appropriate selector. It accepts the following values:

- `normal`: The default value. The text is displayed in a standard, upright style.
- `italic`: The text is displayed in an italic style, which is typically a slanted version of the normal font.
- `oblique`: The text is displayed in an oblique style, which is similar to italic but less common.
- `initial`: Sets the property to its default value.
- `inherit`: Inherits the property from its parent element.

## Example

Let's look at an example to see how the `font-style` property works in CSS:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Style Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 class="italic">Italic Text</h1>
    <h2 class="oblique">Oblique Text</h2>
    <p class="normal">Normal Text</p>
  </body>
  </html>
  ```

  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .italic {
    font-style: italic;
  }

  .oblique {
    font-style: oblique;
  }

  .normal {
    font-style: normal;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <>
        <h1 style={{fontStyle: "italic"}}>Italic Text</h1>
        <h2 style={{fontStyle: "oblique"}}>Oblique Text</h2>
        <p style={{fontStyle: "normal"}}>Normal Text</p>
    </>
</BrowserWindow>

:::note try it yourself

Experiment with different font styles to see how they affect the appearance of text elements on your web page.

:::

<AdsComponent />

## Inheriting Font Style

When you apply the `font-style` property to a parent element, its value is inherited by its child elements. This means that if you set the `font-style` property on a container element, such as a `div` or `section`, all text elements inside that container will inherit the specified font style.

Here's an example that demonstrates how font style inheritance works in CSS:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inherited Font Style</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="parent-element">
      <p>This text inherits the font style from the parent.</p>
    </div>
  </body>
  </html>
  ```

  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .parent-element {
    font-style: italic;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <>
        <div style={{fontStyle: "italic"}}>
            <p>This text inherits the font style from the parent.</p>
        </div>
    </>
</BrowserWindow>

:::note try it yourself

Try changing the font style value on the parent element to see how it affects the child elements that inherit the font style.

:::

## Conclusion

The `font-style` property in CSS allows you to control the style of text elements on your web page, making them appear italicized or oblique as needed. By using the `font-style` property with different values, you can customize the appearance of text to suit your design requirements. Additionally, font style inheritance provides a convenient way to apply consistent styling to text elements within a container.