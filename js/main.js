$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  }
  else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

$(function() {

  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 800,
    pagination: false,
    loop: false,
    keyboard: true,
    responsiveFallback: 600
  });

  $(".page-scroll a").bind("click",function(event) {
    var $anchor = $(this).data("target");
    $(".main").moveTo($anchor);
  });
});
