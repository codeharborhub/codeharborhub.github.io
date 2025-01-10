---
id: adding-audio-and-video
title: Adding Audio and Video in HTML
sidebar_label: Adding Audio and Video
sidebar_position: 1
tags: [html, web-development, multimedia, audio, video]
description: In this tutorial, you will learn how to add audio and video to your HTML documents
keywords: [html audio, html video, html multimedia, html audio tag, html video tag, html audio element, html video element]
---

In this tutorial, you will learn how to add audio and video to your HTML documents. HTML provides built-in elements such as `<audio>` and `<video>` to embed multimedia content in web pages. These elements allow you to play audio and video files directly in the browser without the need for third-party plugins like Flash.

<AdsComponent />

## Adding Audio in HTML

To add audio to your HTML document, you can use the `<audio>` element. The `<audio>` element allows you to embed audio files in various formats such as MP3, WAV, or OGG. Here's an example of how you can add audio to your HTML document:

```html title="index.html"
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
  <audio controls>
    <source src="/audio/audio.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</BrowserWindow>

In the example above, we have used the `<audio>` element with the `controls` attribute, which adds audio controls (play, pause, volume, etc.) to the audio player. The `<source>` element is used to specify the audio file's source and its MIME type.

## Adding Video in HTML

To add video to your HTML document, you can use the `<video>` element. The `<video>` element allows you to embed video files in various formats such as MP4, WebM, or OGG. Here's an example of how you can add video to your HTML document:

```html title="index.html"
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
  <video controls className="w-full h-auto">
    <source src="/video/video.mp4" type="video/mp4" />
    Your browser does not support the video element.
  </video>
</BrowserWindow>

In the example above, we have used the `<video>` element with the `controls` attribute, which adds video controls (play, pause, volume, etc.) to the video player. The `<source>` element is used to specify the video file's source and its MIME type.

## Adding Audio and Video with Multiple Sources

You can provide multiple sources for audio and video files using the `<source>` element. This allows the browser to choose the best source based on its compatibility. Here's an example of how you can provide multiple sources for audio and video files:

```html title="index.html"
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```

In the example above, we have provided two sources for both audio and video files. The browser will choose the first compatible source based on the file format and codec support.

## Conclusion

In this tutorial, you learned how to add audio and video to your HTML documents using the `<audio>` and `<video>` elements. These elements provide a simple and effective way to embed multimedia content in web pages without the need for third-party plugins. You can customize the appearance and behavior of the audio and video players using CSS and JavaScript to create a rich multimedia experience for your users.