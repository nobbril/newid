"use strict";
$(window).on('load', function () {
  $("a").click(function (e) {
    e.preventDefault();
    var destination = $('form').offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      },

      1400);
    return false;
  });
});
$(document).ready(function () {
  var zodiak = '';
  $('.zodiakText').on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $("#main").offset().top
    }, 1000);
    zodiak = $(this).find('.ztext').text();
    $('#none-click').fadeOut(0);
    $('#article-post').fadeIn();
    $('.zodiacText').text(zodiak);
  });
});
$(document).ready(function () {
  var winWidth = window.innerWidth,
    customersSlider;
  var customersSliderMobile = {
    hideControlOnEnd: false,
    stopAutoOnClick: true,
    mode: "fade",
    adaptiveHeight: true,
    autoHover: false,
    auto: true,
    pause: 7000,
    controls: false,
    touchEnabled: true
  };

  if (winWidth >= 991) {} else {
    customersSlider = $("#zodiak").bxSlider(customersSliderMobile);
  }

  $(window).resize(function () {
    winWidth = window.innerWidth;

    if (winWidth <= 991 && !customersSlider) {
      customersSlider = $("#zodiak").bxSlider(customersSliderMobile);
    } else if (winWidth > 991 && customersSlider) {
      customersSlider.destroySlider();
      customersSlider = null;
    }
  });
});