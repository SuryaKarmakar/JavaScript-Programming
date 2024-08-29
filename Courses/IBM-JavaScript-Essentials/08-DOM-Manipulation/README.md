## querySelectorAll:

querySelectorAll is a method in JavaScript that selects multiple HTML elements within the DOM based on CSS-like selectors. It returns a collection (a non-live NodeList) of elements that match the specified selector. You can use it to select elements by class, ID, or tag name.

1. Selecting by Class:

```html
<html>
  <head>
    <title>querySelectorAll Example</title>
  </head>
  <body>
    <p class="highlighted">This is a highlighted paragraph.</p>
    <p class="highlighted">This is another highlighted paragraph.</p>
    <p>This is a regular paragraph.</p>
  </body>
</html>
```

```js
// The elementsByClass collection stores the selected elements, which form a NodeList.
const elementsByClass = document.querySelectorAll(".highlighted");
// Log the selected elements to the console
console.log(elementsByClass);
```

```
output:

NodeList [ <p.highlighted>, <p.highlighted> ]
```

2. Selecting by ID:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>querySelectorAll Example</title>
  </head>
  <body>
    <p id="my-paragraph">This is a paragraph with an ID.</p>
    <p>This is another paragraph.</p>
  </body>
</html>
```

```js
// Select the element with the ID "my-paragraph" using querySelectorAll
const elementByID = document.querySelectorAll("#my-paragraph");
// Log the selected element to the console
console.log(elementByID);
```

```
output:

NodeList [ <p#my-paragraph> ]
```

3. Selecting by Tag Name::

```html
<!DOCTYPE html>
<html>
  <head>
    <title>querySelectorAll Example</title>
  </head>
  <body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <p class="highlighted">This is a highlighted paragraph.</p>
  </body>
</html>
```

```js
// Select all <p> elements using querySelectorAll
const elementsByTag = document.querySelectorAll("p");

// Log the selected elements to the console
console.log(elementsByTag);
```

## ClassList:

The classList property is a useful feature that allows you to manipulate classes on HTML elements easily. Let's dive into an overview of the classList property and its methods.

- Accessing classList:

You can access the classList property of an element using JavaScript like this:

```js
const element = document.getElementById("myElement");
const classes = element.classList;
```

- Common Methods of classList:

1. add - This method adds one or more classes to the element.

```js
element.classList.add("newClass");
```

2. remove - Removes one or more classes from the element.

```js
element.classList.remove("oldClass");
```

3. toggle - Toggles a class. If the class exists, it is removed; otherwise, it is added. If the second parameter is true, the class is added; if false, the class is removed.

```js
element.classList.toggle("active");
```

4. contains - Checks if a class is present on the element. Returns true if the class exists; otherwise, it is false.

```js
if (element.classList.contains("special")) {
  // Do something special
}
```

5. replace - Replaces a class with another class.

```js
element.classList.replace("oldClass", "newClass");
```

6. item - Returns the class name at the specified index.

```js
const firstClass = element.classList.item(0);
```

7. toString - Returns a string representing the element's classes.

```js
const classString = element.classList.toString();
```
