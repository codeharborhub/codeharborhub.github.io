---
id: image-attributes
title: Image Attributes in HTML
sidebar_label: Image Attributes
sidebar_position: 2
tags: [html, web-development, image-attributes, images]
description: In this tutorial, you will learn about image attributes in HTML. Image attributes define the appearance, behavior, and alignment of images on web pages.
keywords:
  [
    HTML image attributes,
    HTML img tag,
    image attributes in HTML,
    image alignment,
    image behavior,
    image appearance,
    web development,
    HTML tutorial,
  ]
---

Images are an essential part of web development and are used to enhance the visual appeal of web pages. In HTML, images are inserted using the `<img>` (image) tag, which specifies the location of the image file and other attributes that control its appearance and behavior.

<AdsComponent />

## Image Attributes

When inserting an image in HTML, you can use various attributes to control the appearance, behavior, and alignment of the image. Here are some common image attributes that you can use with the `<img>` tag:

### The `src` Attribute

The `src` attribute is the most important attribute of the `<img>` tag and specifies the URL of the image file to be displayed. It can be a relative or absolute URL pointing to the location of the image file on the web server or the internet.

Here's an example of using the `src` attribute to insert an image into a web page:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Example</title>
</head>
<body>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" />
</body>
</html>
```

In this example, the `src` attribute specifies the URL of the image file, and the `alt` attribute provides alternative text for the image, which is displayed if the image cannot be loaded or accessed by the user.

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" />
</>
</BrowserWindow>

### The `alt` Attribute

The `alt` attribute provides alternative text for the image, which is displayed if the image cannot be loaded or accessed by the user. It is also used by screen readers to describe the content of the image to visually impaired users.

Here's an example of using the `alt` attribute with an image:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Example</title>
</head>
<body>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" />
</body>
</html>
```

In this example, the `alt` attribute provides a description of the image content, which is useful for accessibility and SEO purposes.

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" />
</>
</BrowserWindow>

### The `width` and `height` Attributes

The `width` and `height` attributes specify the dimensions of the image in pixels. These attributes can be used to control the size of the image displayed on the web page.

Here's an example of using the `width` and `height` attributes with an image:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Example</title>
</head>
<body>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" width="400" height="300" />
</body>
</html>
```

In this example, the `width` and `height` attributes are used to set the dimensions of the image to 400 pixels in width and 300 pixels in height.

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" width="400" height="300" />
</>
</BrowserWindow>

### The `title` Attribute

The `title` attribute adds a title or tooltip to the image that is displayed when the user hovers over it with the mouse cursor. It provides additional information about the image content.

Here's an example of using the `title` attribute with an image:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Example</title>
</head>
<body>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" title="My Pet" />
</body>
</html>
```

In this example, the `title` attribute is used to provide a title for the image, which is displayed as a tooltip when the user hovers over the image.

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>My Pet</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dog_Breeds.jpg/800px-Dog_Breeds.jpg" alt="A cute dog" title="My Pet" />
</>
</BrowserWindow>

## Conclusion

By using image attributes in HTML, you can control the appearance, behavior, and alignment of images on web pages. These attributes help make your web content more accessible, visually appealing, and informative to users.