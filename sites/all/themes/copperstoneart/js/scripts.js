(function ($) {
    Drupal.behaviors.copperstoneart = {
      attach: function (context, settings) {
        $(window).load(function() {
          $('.flexslider').flexslider();
        });
        // Code to be run on page load, and
        // on ajax load added here
      }
    };
  }(jQuery));