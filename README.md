# 🔥 Tiny Zepto

⚡ Only 1.55 KB raw (no gzip, no minify lies), Zero dependencies, Zero build step, Zero bullshit, No virtual DOM, No JSX, No compiler, No framework religion. This is a lightweight DOM manipulation utility inspired by Zepto.js and jQuery.
It gives you just the essentials: DOM selection, traversal, class & attribute manipulation, events, and chainable API — nothing more, nothing less. Drop it in, write $q(), and ship.
Perfect for small projects where you don’t want the overhead of a full library.

## Features

### DOM Selection
Select elements using CSS selectors, HTML strings, single elements, NodeLists, or arrays.

### Content Manipulation
Get or set HTML and text content using `.html()` and `.text()`.

### Class Manipulation
Add, remove, or check classes with `.addClass()`, `.removeClass()`, and `.hasClass()`.

### Attribute & Style Handling
Get or set attributes with `.attr()` and styles with .css().

### Event Handling
Attach and remove event listeners with `.on()` and `.off()`.

### DOM Traversal & Manipulation
Append elements with `.append()`, search within elements with `.find()`, and remove elements with `.remove()`.

### Dataset Support
Access and modify data-* attributes using `.data()`.

### Chainable API
All setter methods return the Tiny Zepto instance for chaining.

### Installation

Simply include the script in your HTML:
```
<script src="https://cdn.jsdelivr.net/gh/pkuleon/tiny-zepto/latest.js"></script>
```

### Usage Examples
Selecting elements
```javascript
// Select by CSS selector
const items = $q('.item');

// Select a single DOM element
const el = $q(document.getElementById('myDiv'));

// Create elements from HTML string
const newEl = $q('<div class="new">Hello</div>');
```
Manipulating content
```javascript
$q('.item').html('<strong>Updated</strong>');
console.log($q('.item').text());
```
Handling classes
```javascript
$q('#myDiv').addClass('active').removeClass('hidden');
console.log($q('#myDiv').hasClass('active')); // true
```
Attributes and styles
```javascript
$q('img').attr('src', 'image.jpg');
$q('p').css('color', 'red');
```
Events
```javascript
$q('button').on('click', () => alert('Clicked!'));
$q('button').off('click', handleClick);
```
DOM traversal
```javascript
$q('#container').find('.item').addClass('highlight');
$q('.to-remove').remove();
```
Dataset
```javascript
$q('#myDiv').data('id', 123);
console.log($q('#myDiv').data('id')); // 123
```

Tiny Zepto is NOT a full replacement for jQuery or Zepto.js; it focuses on the most common DOM tasks.
Designed for modern browsers (ES6+).
