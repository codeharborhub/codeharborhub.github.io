---
id: form-attribute
title: Form Attribute
sidebar_label: Form Attribute
sidebar_position: 3
description: Learn about the form attribute in HTML forms and how it can be used to associate form elements with a form.
keywords: [form attribute, form element, form association, form control, HTML form, web development, front-end development, web design]
tags: [html, web-development, forms, user-input, front-end-development, web-design]
---

The `form` attribute in HTML is used to associate form elements with a form. It specifies the `id` of the form element that the input element belongs to. This association allows you to group related form controls together and define the form structure more clearly.

<AdsComponent /> 

Here's an example of how the `form` attribute can be used to associate form elements with a form:

```html title="index.html" showLineNumbers
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Attribute Example</title>
</head>
<body>
    <h1>Form Attribute Example</h1>
    <form id="user-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" form="user-form">
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" form="user-form">
        <br><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

In the example, we have a form with the `id` attribute set to `"user-form"`. The `form` attribute of the `input` elements specifies that they belong to the form with the `id` `"user-form"`. This association allows the browser to group the form controls together and associate them with the form.

<AdsComponent />

## Common Form Attributes

Here are some common attributes that can be used with the `form` attribute:

### 1. `action`

The `action` attribute specifies the URL where the form data should be submitted when the form is submitted. It is used in conjunction with the `method` attribute to define the form submission behavior.

For example:

```html title="index.html" showLineNumbers
<form id="user-form" action="/submit-form" method="post">
    <!-- Form elements -->
</form>
```

### 2. `method`

The `method` attribute specifies the HTTP method to be used when submitting the form data. It can be either `GET` or `POST`.

- `GET`: Appends data to the URL.
- `POST`: Sends data as part of the HTTP request body.

For example:

```html title="index.html" showLineNumbers
<form id="user-form" action="/submit-form" method="post">
    <!-- Form elements -->
</form>
```

### 3. `enctype`

The `enctype` attribute specifies the encoding type of the form data when it is submitted to the server. It is used when the form contains file uploads.

- `application/x-www-form-urlencoded`: Default for `POST` requests.
- `multipart/form-data`: Required for file uploads.
- `text/plain`: Sends data as plain text.

For example:

```html title="index.html" showLineNumbers
<form id="user-form" action="/submit-form" method="post" enctype="multipart/form-data">
    <!-- Form elements -->
</form>
```

### 4. `target`

The `target` attribute specifies where to display the response that is received after submitting the form. It can be set to `_self`, `_blank`, `_parent`, or `_top`.

- `_self`: Default, opens in the same window.
- `_blank`: Opens in a new tab or window.
- `_parent`: Opens in the parent frame.
- `_top`: Opens in the full body of the window.

For example:

```html title="index.html" showLineNumbers
<form id="user-form" action="/submit-form" method="post" target="_blank">
    <!-- Form elements -->
</form>
```

<AdsComponent />

### 5. `autocomplete`

The `autocomplete` attribute specifies whether the browser should automatically complete form fields based on the user's input history. It can be set to `on` or `off`.

- `on`: Enables autofill (default).
- `off`: Disables autofill.

For example:

```html title="index.html" showLineNumbers
<form id="user-form" action="/submit-form" method="post" autocomplete="off">
    <!-- Form elements -->
</form>
```

### 6. `novalidate`

The `novalidate` attribute disables the browser's built-in form validation when set to `novalidate`. This can be useful when custom validation logic is implemented using JavaScript.

For example:

```html title="index.html" showLineNumbers
<form action="/submit-data" method="post" novalidate>
  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone">

  <button type="submit">Submit</button>
</form>
```

### 7. `name`

The `name` attribute assigns a unique identifier to the form. This is useful for backend processing.

```html title="index.html" showLineNumbers
<form action="/process" method="post" name="registrationForm">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <button type="submit">Submit</button>
</form>
```

### 8. `accept-charset`

The `accept-charset` attribute specifies the character encodings supported by the server.

```html title="index.html" showLineNumbers
<form action="/submit" method="post" accept-charset="UTF-8">
  <label for="feedback">Feedback:</label>
  <textarea id="feedback" name="feedback"></textarea>

  <button type="submit">Submit</button>
</form>
```

By using the `form` attribute and other form attributes, you can create interactive and functional forms in HTML that collect user input and submit it to the server for processing.

<AdsComponent />

## Summary Table of Attributes

| Attribute       | Description                                                | Example Value             |
|-----------------|------------------------------------------------------------|---------------------------|
| `action`        | URL to submit form data to                                 | `/submit-data`            |
| `method`        | HTTP method (`GET`, `POST`)                                | `post`                    |
| `target`        | Specifies where to display the response                    | `_blank`, `_self`         |
| `autocomplete`  | Enables/disables browser autofill                          | `on`, `off`               |
| `novalidate`    | Disables browser validation                                | `novalidate` (boolean)    |
| `enctype`       | Encoding type for form data                                | `multipart/form-data`     |
| `name`          | Unique identifier for the form                             | `registrationForm`        |
| `accept-charset`| Character encodings supported                              | `UTF-8`                   |


