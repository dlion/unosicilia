$(document).ready(function() {
  $.fn.fullpage({
    anchors: ["Home", "Certificazioni", "Calendario", "Prodotti", "Aziende", "Contatti"],
    slidesColor: ['#FFF', '#FFF', '#FFF'],
    css3: true,
    fixedElements: ".header"
  });
  var pull = $("#pull"),
      menu = $("nav ul");

  $(pull).on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();

    if (w > 360 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("li").on("click", function(e) {
    var w = $(window).width();
    if ( w < 360) {
      menu.slideToggle();
    }
  });
});
