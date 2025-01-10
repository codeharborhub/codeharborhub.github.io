---
id: canvas-and-svg-graphics
title: Canvas and SVG Graphics in HTML
sidebar_label: Canvas and SVG Graphics
sidebar_position: 3
tags: [html, web-development, canvas, svg, graphics]
description: In this tutorial, you will learn how to use the Canvas and SVG graphics APIs in HTML to draw shapes, images, and animations on a web page.
keywords:
  [
    html canvas,
    html svg,
    canvas in html,
    svg in html,
    html5 canvas,
    html5 svg,
    graphics in html,
  ]
---

import SVGExample from './_scripts/SVGExample';
import CanvasExample from './_scripts/CanvasExample';

In `HTML`, you can use the Canvas and SVG graphics APIs to draw shapes, images, and animations on a web page. The Canvas and SVG graphics APIs provide a powerful way to create interactive graphics and visualizations in the browser.

In this tutorial, you will learn how to use the Canvas and SVG graphics APIs in HTML to draw shapes, images, and animations on a web page.

<AdsComponent />

## Canvas Graphics

The Canvas API in HTML provides a way to draw graphics on a web page using JavaScript. The Canvas API allows you to draw shapes, images, and text on a canvas element.

Here's an example of how to use the Canvas API to draw a rectangle on a canvas element:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Example</title>
  </head>
  <body>
    <h1>Canvas Example</h1>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid black;"></canvas>
    <script>
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 150, 80);
    </script>
  </body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <CanvasExample />
</BrowserWindow>

In the above example, we create a canvas element with an id of `myCanvas` and a width of `200` pixels and a height of `100` pixels. We then get the canvas context (`2d`) and draw a red rectangle on the canvas using the `fillRect` method.

## SVG Graphics

SVG (Scalable Vector Graphics) is an XML-based language for describing two-dimensional vector graphics. SVG graphics can be created and manipulated using HTML and CSS.

Here's an example of how to use SVG graphics in HTML:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SVG Example</title>
  </head>
  <body>
    <h1>SVG Example</h1>
    <svg width="200" height="100">
      <rect x="10" y="10" width="150" height="80" fill="blue" />
    </svg>
  </body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
   <SVGExample />
</BrowserWindow>

In the above example, we create an SVG element with a width of `200` pixels and a height of `100` pixels. We then draw a blue rectangle on the SVG element using the `rect` element.

## Conclusion

In this tutorial, you learned how to use the Canvas and SVG graphics APIs in HTML to draw shapes, images, and animations on a web page. The Canvas and SVG graphics APIs provide a powerful way to create interactive graphics and visualizations in the browser. Experiment with different shapes, colors, and animations to create stunning visual effects on your web pages.