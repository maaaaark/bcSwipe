/**
 * Bootstrap Carousel Swipe v1.1
 *
 * jQuery plugin to enable swipe gestures on Bootstrap 3 carousels.
 * Examples and documentation: https://github.com/maaaaark/bcSwipe
 *
 * Licensed under the MIT license.
 */
(function($) {
  $.fn.bcSwipe = function(settings) {
    var config = { threshold: 50 };
    if (settings) {
      $.extend(config, settings);
    }
    this.each(function() {
      var stillMoving = false;
      var start;

      $(this).on('touchstart', onTouchStart);

      function onTouchStart(e) {

        if (e.originalEvent.touches.length == 1) {
          start = e.originalEvent.touches[0].pageX;
          stillMoving = true;
          $(this).on('touchmove', onTouchMove);
        }
      }

      function onTouchMove(e) {
        if (stillMoving) {
          var x = e.originalEvent.touches[0].pageX;
          var difference = start - x;
          if (Math.abs(difference) >= config.threshold) {
            cancelTouch();
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
        $(this).off('touchmove');
        start = null;
        stillMoving = false;
      }
    });

    return this;
  };
})(jQuery);
