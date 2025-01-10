---
id: geolocation-api
title: Geolocation API in HTML
sidebar_label: Geolocation API
sidebar_position: 1
tags: [html, web-development, geolocation-api]
description: In this tutorial, you will learn how to use the Geolocation API to get the user's current location in a web page.
keywords:
  [
    html geolocation api,
    geolocation api,
    html geolocation,
    geolocation api in html,
    html5 geolocation api,
  ]
---

import GeolocationExample from './\_scripts/GeolocationExample';

In `HTML`, you can use the Geolocation API to get the user's current location. The Geolocation API provides a simple method to get the user's current location (latitude and longitude) using JavaScript.

In this tutorial, you will learn how to use the Geolocation API to get the user's current location in a web page.

<AdsComponent />

## Getting User's Current Location

To get the user's current location, you can use the `navigator.geolocation` object in JavaScript. The `navigator.geolocation` object provides methods to retrieve the user's current position.

Here's an example of how to get the user's current location using the Geolocation API:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Geolocation API Example</title>
  </head>
  <body>
    <h1>Geolocation API Example</h1>
    <p>Click the button to get your current location.</p>
    <button onclick="getLocation()">Get Location</button>
    <p id="demo"></p>
    <script>
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          document.getElementById("demo").innerHTML =
            "Geolocation is not supported by this browser.";
        }
      }

      function showPosition(position) {
        document.getElementById("demo").innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>Longitude: " +
          position.coords.longitude;
      }
    </script>
  </body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
  <GeolocationExample />
</BrowserWindow>

In the above example:

- We have an HTML button that calls the `getLocation()` function when clicked.
- The `getLocation()` function checks if the browser supports geolocation. If supported, it calls the `navigator.geolocation.getCurrentPosition()` method with the `showPosition()` function as a callback.
- The `showPosition()` function displays the latitude and longitude of the user's current location.

When you click the "Get Location" button, the browser will prompt you to allow or deny access to your location. If you allow access, the browser will display your current latitude and longitude.

<AdsComponent />

## Geolocation API Methods

The Geolocation API provides the following methods:

| Method                 | Description                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `getCurrentPosition()` | Retrieves the device's current position.                                                      |
| `watchPosition()`      | Continuously monitors the device's position and triggers a callback function when it changes. |
| `clearWatch()`         | Stops the `watchPosition()` method from monitoring the device's position.                     |

### `getCurrentPosition()` Method

The `getCurrentPosition()` method is used to retrieve the device's current position. It takes the following parameters:

- `successCallback`: A callback function that is called when the position is successfully retrieved.
- `errorCallback`: A callback function that is called when an error occurs.
- `options`: An optional parameter that specifies the options for retrieving the position.
- `options.enableHighAccuracy`: A boolean value that indicates whether the device should provide a high-accuracy position.
- `options.timeout`: A timeout value in milliseconds after which the error callback is called.
- `options.maximumAge`: The maximum age of a cached position that is acceptable.
- `options.maximumAge`: The maximum age of a cached position that is acceptable.
- `options.maximumAge`: The maximum age of a cached position that is acceptable.

Here's an example of using the `getCurrentPosition()` method:

```javascript
navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback,
  options
);
```

### `watchPosition()` Method

The `watchPosition()` method is used to continuously monitor the device's position. It takes the following parameters:

- `successCallback`: A callback function that is called when the position is successfully retrieved.
- `errorCallback`: A callback function that is called when an error occurs.
- `options`: An optional parameter that specifies the options for retrieving the position.

Here's an example of using the `watchPosition()` method:

```javascript
let watchId = navigator.geolocation.watchPosition(
  successCallback,
  errorCallback,
  options
);
```

### `clearWatch()` Method

The `clearWatch()` method is used to stop the `watchPosition()` method from monitoring the device's position. It takes the `watchId` returned by the `watchPosition()` method as a parameter.

Here's an example of using the `clearWatch()` method:

```javascript
navigator.geolocation.clearWatch(watchId);
```

## Conclusion

In this tutorial, you learned how to use the Geolocation API to get the user's current location in a web page. You can use the Geolocation API to build location-aware web applications that provide personalized experiences based on the user's location.
