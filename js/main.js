$(document).ready(function() {
  $(".rslides").responsiveSlides();

  // Configurazione del plugin fullPage
  $.fn.fullpage({
    anchors: ["Home", "Certificazioni", "Calendario", "Prodotti", "Aziende", "Contatti"],
    slidesColor: ['#FFF', '#FFF', '#FFF'],
    css3: true,
    fixedElements: "header"
  });

  // Prendo il pull e il menu
  var pull = $("#pull"),
      menu = $("nav ul");

  // Se clicco il pull
  $(pull).on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  // Se sono da mobile quando clicco su un li leva il menu
  $("li").on("click", function(e) {
    var w = $(window).width();
    if ( w <= 480) {
      menu.slideToggle();
    }
  });
});
