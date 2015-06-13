# bcSwipe (Bootstrap Carousel Swipe)
Lightweight (> .7kb) jQuery plugin to enable swipe gestures for Bootstrap 3 carousels on iOS and Android.

##Usage

###HTML
````HTML
<!-- Bootstrap is required -->
<script src="bootstrap/js/bootstrap.js"></script>
<script src="jquery.bcSwipe.js"></script>
````
###JS
````javascript
$('.carousel').bcSwipe({
  threshold: 50,
  preventDefaultEvents: false
});
````

Adjusting threshold will determine how long a swipe must be to move to the next carousel slide.

Setting `preventDefaultEvents` to `false` will cause up and down swipes to be ignored (which leaves scrolling up and down intact).
