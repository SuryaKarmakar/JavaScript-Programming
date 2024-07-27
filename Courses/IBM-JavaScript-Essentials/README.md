## JavaScript:

1. JavaScript is executed in web browsers, making it an essential tool for enhancing the user experience. Here are a couple of things JavaScript is known for. Manipulating the DOM: JavaScript can change a web page's content structure and style. It's like having a magic wand for web elements. Handling events: From button clicks to mouse movements, JavaScript can respond to various user interactions, making websites more engaging

2. JavaScript is a fundamental part of web development and is used in various ways.
   Enhancing user experience: JavaScript can validate form data, create interactive forms, and provide real time feedback to users.
   Dynamic web content: It can load new content without refreshing the entire page like real time social media feeds.
   Animations and visual effects: JavaScript can create animations, sliders, and other visual effects to improve website aesthetics.

## How to use JS:

1. In-line JavaScript: you can include JavaScript code directly in your HTML file using the script tag within the body.

```html
<h1>
  <script>
    // your js code
  </script>
</h1>
```

1. External JavaScript file: it's recommended to put your JavaScript code in a separate JS file and link it to your HTML file using
   the script tag with a SRC attribute.

Step 1, create a separate JS file,e.g. script.js

```js
function hello() {
  console.log("hello world");
}
```

Step 2, in your HTML file include a script tag with the SRC attribute pointing to your JavaScript file just before the closing body tag for best practice.

```html
<script src="script.js"></script>
```

## Data types and Variables:

Variables act as containers for various types of information or values. You can think of a variable as a named storage location that holds data, and you can use this data in your JavaScript code.
