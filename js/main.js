$(document).ready(function() {

  var slidey = $(".banneroneSlide").unslider({
    fluid: true,
    dots: true,
    delay: false
  });

  //Il banner che mostra la frutta
  var banneroneFrutta = slidey.data('unslider-1');

  /*
   * Se clicco sulla lista
   */

  var titoloBoxPage2 = $(".titolo-hidden h3");
  var testoFrescoBoxPage2 = $(".testo-fresco p");

  $("#btnFrutta").click(function() {
    banneroneFrutta.move(0);
    titoloBoxPage2.text("Frutta");
    testoFrescoBoxPage2.text("Qui ci va il testo dedicato alla frutta");
  });

  $("#btnOlio").click(function() {
    banneroneFrutta.move(1);
    titoloBoxPage2.text("Olive e Olio");
    testoFrescoBoxPage2.text("Qui ci va il testo dedicato alle olive e all'olio");
  });

  $("#btnLimoni").click(function() {
    banneroneFrutta.move(2);
    titoloBoxPage2.text("Limoni");
    testoFrescoBoxPage2.text("Qui ci va il testo dedicato ai Limoni");
  });

  $("#btnAgrumi").click(function() {
    banneroneFrutta.move(3);
    titoloBoxPage2.text("Agrumi");
    testoFrescoBoxPage2.text("Qui ci va il testo dedicato agli agrumi");
  });

  $("#btnOrtaggi").click(function() {
    banneroneFrutta.move(4);
    titoloBoxPage2.text("Ortaggi");
    testoFrescoBoxPage2.text("Qui ci va il testo dedicato agli ortaggi");
  });

  /*
   * Se premi un pulsante tolgo l'active e lo metto in quello selezionato
   */
   $("li[data-menuanchor='Home']").click(function() {
     $("li[data-menuanchor='Home']").addClass("active");
   });

   $("li[data-menuanchor='Prodotti']").click(function() {
     $("li[data-menuanchor='Prodotti']").addClass("active");
   });

   $("li[data-menuanchor='Produttori']").click(function() {
     $("li[data-menuanchor='Produttori']").addClass("active");
   });

   $("li[data-menuanchor='Trasformati']").click(function() {
     $("li[data-menuanchor='Trasformati']").addClass("active");
   });

   $("li[data-menuanchor='Certificazioni']").click(function() {
     $("li[data-menuanchor='Certificazioni']").addClass("active");
   });

   $("li[data-menuanchor='Contatti']").click(function() {
     $("li[data-menuanchor='Contatti']").addClass("active");
   });

  // Configurazione del plugin fullPage
  $('#fullpage').fullpage({
    anchors: ["Home", "Prodotti", "Produttori", "Trasformati", "Certificazioni", "Contatti"],
    slidesColor: ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
    css3: true,
    fixedElements: 'header',
    resize: false,
    paddingTop: '65px',
     onLeave: function(index, nextIndex, direction){
       switch(index) {
         case 1:
         $("li[data-menuanchor='Home']").removeClass("active");
          break;
        case 2:
           $("li[data-menuanchor='Prodotti']").removeClass("active");
          break;
        case 3:
           $("li[data-menuanchor='Produttori']").removeClass("active");
          break;
        case 4:
           $("li[data-menuanchor='Trasformati']").removeClass("active");
          break;
        case 5:
           $("li[data-menuanchor='Certificazioni']").removeClass("active");
          break;
        case 6:
           $("li[data-menuanchor='Contatti']").removeClass("active");
          break;
       }

       switch(nextIndex) {
         case 1:
           $("li[data-menuanchor='Home']").addClass("active");
          break;
        case 2:
           $("li[data-menuanchor='Prodotti']").addClass("active");
          break;
        case 3:
           $("li[data-menuanchor='Produttori']").addClass("active");
          break;
        case 4:
           $("li[data-menuanchor='Trasformati']").addClass("active");
          break;
        case 5:
           $("li[data-menuanchor='Certificazioni']").addClass("active");
          break;
        case 6:
           $("li[data-menuanchor='Contatti']").addClass("active");
          break;
       }
     }
  });
});
