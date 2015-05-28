# bcSwipe (Bootstrap Carousel Swipe)
Lightweight (> 1kb) jQuery plugin to enable swipe gestures for Bootstrap 3 carousels on iOS and Android.

##Usage
````javascript
$('.carousel').bcSwipe({
  threshold: 50,
  preventDefaultEvents: true
});
````

Adjusting threshold will determine how long a swipe must be to move to the next carousel slide.
