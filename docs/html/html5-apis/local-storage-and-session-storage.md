---
id: local-storage-and-session-storage
title: Local Storage and Session Storage in HTML
sidebar_label: Local Storage and Session Storage
sidebar_position: 2
tags: [html, web-development, local-storage, session-storage]
description: In this tutorial, you will learn how to use the Local Storage and Session Storage APIs in HTML to store data locally in the browser.
keywords:
  [
    html local storage,
    html session storage,
    local storage in html,
    session storage in html,
    html5 local storage,
    html5 session storage,
  ]
---

import SessionStorageExample from './_scripts/SessionStorageExample';
import LocalStorageExample from './_scripts/LocalStorageExample';

In `HTML`, you can use the Local Storage and Session Storage APIs to store data locally in the browser. The Local Storage and Session Storage APIs provide a simple way to store key-value pairs in the browser.

In this tutorial, you will learn how to use the Local Storage and Session Storage APIs in HTML to store data locally in the browser.

<AdsComponent />

## Local Storage

Local Storage is a type of web storage that allows you to store data locally in the browser. The data stored in Local Storage persists even after the browser is closed and reopened. Local Storage is useful for storing user preferences, settings, and other data that you want to persist across browser sessions.

Here's an example of how to use Local Storage in HTML:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Local Storage Example</title>
  </head>
  <body>
    <h1>Local Storage Example</h1>
    <p>Enter your name:</p>
    <input type="text" id="name" />
    <button onclick="saveName()">Save Name</button>
    <p id="message"></p>
    <script>
      function saveName() {
        var name = document.getElementById("name").value;
        localStorage.setItem("name", name);
        document.getElementById("message").innerHTML = "Name saved!";
      }

      var savedName = localStorage.getItem("name");
      if (savedName) {
        document.getElementById("message").innerHTML = "Welcome back, " + savedName + "!";
      }
    </script>
  </body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
  <LocalStorageExample />
</BrowserWindow>

In this example, we use the `localStorage` object to store the user's name locally in the browser. When the user enters their name and clicks the "Save Name" button, the name is saved to Local Storage. If the user visits the page again, their name is retrieved from Local Storage and displayed as a welcome message.

## Session Storage

Session Storage is another type of web storage that allows you to store data locally in the browser. The data stored in Session Storage persists only for the duration of the browser session. When the browser is closed, the data stored in Session Storage is cleared.

Here's an example of how to use Session Storage in HTML:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Session Storage Example</title>
  </head>
  <body>
    <h1>Session Storage Example</h1>
    <p>Enter your email:</p>
    <input type="email" id="email" />
    <button onclick="saveEmail()">Save Email</button>
    <p id="message"></p>
    <script>
      function saveEmail() {
        var email = document.getElementById("email").value;
        sessionStorage.setItem("email", email);
        document.getElementById("message").innerHTML = "Email saved!";
      }

      var savedEmail = sessionStorage.getItem("email");
      if (savedEmail) {
        document.getElementById("message").innerHTML = "Your email is " + savedEmail;
      }
    </script>
  </body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
  <SessionStorageExample />
</BrowserWindow>

In this example, we use the `sessionStorage` object to store the user's email locally in the browser for the duration of the browser session. When the user enters their email and clicks the "Save Email" button, the email is saved to Session Storage. The saved email is displayed when the user visits the page again during the same browser session.

## Conclusion

In this tutorial, you learned how to use the Local Storage and Session Storage APIs in HTML to store data locally in the browser. Local Storage is useful for storing data that you want to persist across browser sessions, while Session Storage is useful for storing data that you want to persist only for the duration of the browser session. By using Local Storage and Session Storage, you can create web applications that remember user preferences and settings, providing a better user experience.