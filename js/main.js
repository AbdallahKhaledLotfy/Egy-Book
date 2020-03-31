$(window).scroll(function () {
  if ($(this).scrollTop() > 40) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }

});
$(".top").click(function () {
  $('body , html').animate({
    scrollTop: 0
  }, 1200)
});







var comma_separator_number_step = $.animateNumber.numberStepFactories.separator()
$('#world-population').animateNumber({
  number: 2345,
}, {
  easing: 'swing',
  duration: 6000,

});

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator()
$('#world-1').animateNumber({
  number: 6784,
}, {
  easing: 'swing',
  duration: 6000,

});

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator()
$('#world-2').animateNumber({
  number: 1056,
}, {
  easing: 'swing',
  duration: 6000,

});

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator()
$('#world-3').animateNumber({
  number: 9152,
}, {
  easing: 'swing',
  duration: 6000,

});


// loading//
setTimeout(function () {
  $('.preload').fadeToggle();

}, 1500)