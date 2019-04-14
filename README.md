[![Build Status](https://travis-ci.org/briggySmalls/bcSwipe.svg?branch=master)](https://travis-ci.org/briggySmalls/bcSwipe)
[![npm](https://img.shields.io/npm/v/bcswipe.svg)](https://www.npmjs.com/package/bcswipe)
[![npm bundle size](https://img.shields.io/bundlephobia/min/bcswipe.svg)](https://bundlephobia.com/result?p=bcswipe)

# Bootstrap Carousel Swipe (bcSwipe)

Super lightweight jQuery plugin to enable swipe gestures for Bootstrap 3 carousels on iOS and Android.

## Installation

Install the package using npm:

```bash
npm install bcswipe
```

This package comes with both a browser-ready, minified script, and an ES5 module.

### HTML

Include the distribution script directly into the browser.

````HTML
<!-- Bootstrap is required -->
<script src="bootstrap/js/bootstrap.js"></script>
<script src="./node_modules/bcswipe/dist/jquery.bcSwipe.min.js"></script>
````

### ES5

Import the ES5 module using the syntax appropriate for your project:

````javascript
// Import plugin when 'jQuery' global is available
import 'bcswipe';
````

````javascript
// Import plugin when 'jQuery' global is available
require('bcswipe');
````

## Usage

Adjusting threshold will determine how long a swipe must be to move to the next carousel slide.

```javascript
// Tweak settings
$('.carousel').bcSwipe({ threshold: 50 });
```

## Development

Install developement dependencies as usual with:

```shell
npm install --dev
```

The browser-friendly version of the source can be generated with:

```shell
npm run build
```

## Credits

This project was forked from [bcSwipe](https://github.com/maaaaark/bcSwipe) and all credit must go to [Mark Shiraldi](https://github.com/maaaaark).
