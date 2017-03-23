# Bootstrap Carousel Swipe (bcSwipe)
Super lightweight (~600 bytes) jQuery plugin to enable swipe gestures for Bootstrap 3 carousels on iOS and Android.

## Usage

### HTML
````HTML
<!-- Bootstrap is required -->
<script src="bootstrap/js/bootstrap.js"></script>
<script src="jquery.bcSwipe.js"></script>
````
### JS
````javascript
$('.carousel').bcSwipe({ threshold: 50 });
````

Adjusting threshold will determine how long a swipe must be to move to the next carousel slide.
