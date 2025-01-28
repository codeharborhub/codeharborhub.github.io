---
id: background-attachment
title: Background Attachment
sidebar_label: Background Attachment
sidebar_position: 4
tags: [background, css background, background attachment, background-attachment property]
description: Learn how to set the background attachment behavior of an element in CSS using the background-attachment property.
keywords:
  [
    background attachment,
    css background attachment,
    background-attachment property,
    css background-attachment,
  ]
---

In CSS, the `background-attachment` property is used to specify whether the background image of an element scrolls with the content or remains fixed as the content moves. This property is used to control the attachment behavior of the background image.

<AdsComponent />

## Syntax

The syntax for the `background-attachment` property is as follows:

```css title="index.css"
selector {
  background-attachment: value;
}
```

- `selector`: The element to which the background attachment behavior is applied.
- `background-attachment`: The CSS property used to set the background attachment behavior of an element.
- `value`: Specifies the attachment behavior of the background image. It can take one of the following values:
  - `scroll`: The background image scrolls along with the content when the content is scrolled.
  - `fixed`: The background image remains fixed within the viewport as the content is scrolled.
  - `local`: The background image scrolls along with the element's contents, rather than the entire page.
  - `initial`: Sets the background attachment behavior to its default value.
- The default value of the `background-attachment` property is `scroll`.

## Example

In the following example, the `background-attachment` property is used to set the background attachment behavior of a `<div>` element to `fixed`, which makes the background image remain fixed within the viewport as the content is scrolled:

```css title="index.css"
div {
  background-image: url('path/to/background-image.jpg');
  background-attachment: fixed;
}
```

In the HTML code below, the CSS rule will apply the `fixed` background attachment behavior to the background image of the `<div>` element:

```html title="index.html"
<div>This is a div with a fixed background image.</div>
```

By using the `background-attachment` property, you can control how the background image behaves when the content is scrolled, allowing you to create various visual effects on your web page.

<AdsComponent />

:::info Additional Information

- The `background-attachment` property is often used in combination with the `background-image` property to set a background image and define its attachment behavior.
- The `background-attachment` property can be used to create effects like parallax scrolling, where the background image moves at a different speed than the content, creating a sense of depth.

:::

## Example for background-attachment property

In this example, we have a `<div>` element with a background image that has the `background-attachment` property set to `fixed`. This makes the background image remain fixed within the viewport as the content is scrolled:

<Tabs>
  <TabItem value="HTML" label="index.html">

```html showLineNumbers
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Attachment Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div>
    <h1>Fixed Background Image</h1>
    <p>This is a div with a fixed background image.</p>
  </div>
</body>
</html>
```

</TabItem>
<TabItem value="CSS" label="styles.css">

```css showLineNumbers {3}
div {
  background-image: url('/assets/jpeg-image.jpg');
  background-attachment: fixed;
  color: white;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 0;
}

p {
  font-size: 1.2em;
  margin-top: 0;
}
```

</TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundImage: "url('/assets/jpeg-image.jpg')", color: "#fff", padding: "20px", minHeight: "200px", textAlign:"center", backgroundAttachment:"fixed" }}>
<>
  <h1 style={{ fontSize: "2em", marginBottom: "0" }}>Fixed Background Image</h1>
  <p style={{ fontSize: "1.2em", marginTop: "0" }}>This is a div with a fixed background image.</p>
</>
</BrowserWindow>

In this example, the background image remains fixed within the viewport as the content is scrolled, creating a visually appealing effect on the web page.

<AdsComponent />

## Conclusion

The `background-attachment` property in CSS allows you to control the attachment behavior of the background image of an element. By setting the `background-attachment` property to `fixed`, `scroll`, `local`, or `initial`, you can create various visual effects on your web page. Experiment with different values of the `background-attachment` property to achieve the desired background image behavior for your elements.