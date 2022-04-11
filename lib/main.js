/**
 * Bootstrap Carousel Swipe v1.1
 *
 * jQuery plugin to enable swipe gestures on Bootstrap 3 carousels.
 * Examples and documentation: https://github.com/briggySmalls/bcSwipe
 *
 * @license MIT
 */
var detectPassiveEvents = require('detect-passive-events');

(function($) {
  $.fn.bcSwipe = function(settings) {
    var config = { threshold: 50 };
    if (settings) {
      $.extend(config, settings);
    }

    this.each(function() {
      var stillMoving = false;
      var start;

      if ('ontouchstart' in document.documentElement) {
        this.addEventListener(
          'touchstart',
          onTouchStart,
          detectPassiveEvents.hasSupport ? {'passive': true} : false);
      }

      function onTouchStart(e) {
        if (e.touches.length == 1) {
          start = e.touches[0].pageX;
          stillMoving = true;
          this.addEventListener(
            'touchmove',
            onTouchMove,
            detectPassiveEvents.hasSupport ? {'passive': true} : false);
        }
      }

      function onTouchMove(e) {
        if (stillMoving) {
          var x = e.touches[0].pageX;
          var difference = start - x;
          if (Math.abs(difference) >= config.threshold) {
            cancelTouch.call(this);
            if(isCarouselEmpty($(this))) return;
            if (difference > 0) {
              $(this).carousel('next');
            }
            else {
              $(this).carousel('prev');
            }
          }
        }
      }

      function cancelTouch() {
        this.removeEventListener('touchmove', onTouchMove);
        start = null;
        stillMoving = false;
      }
    });

    return this;
  };
  
  function isCarouselEmpty($carousel){
	  return $carousel.find(".item.active").length < 1
  }
})(jQuery);
